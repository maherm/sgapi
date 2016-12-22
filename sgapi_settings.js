/*
*	SteamGifts Userscript API
*	Settings Tools
*	
* 	
*/

SgApi.Plugins.register("Settings", "0.1.3", function(){

	/**
	 * 
	 * @class Settings
	 * @memberof SgApi
	 * @param {string} settings_name the name of your settings. Will be displayed in the navigation menu on the account page.
	 * @returns {SettingsBuilder} a Settings builder.
	 * @declared in sgapi_settings.js
	 */
	SgApi.Settings = function(settings_name){
		
		//==================== Classes =================================
		var Setting = function(type, name, value, options){	
			this.type=type;
			this.name=name;
			this.title=name;
			this.value=value;
			this.description= undefined;
			this.visible= true;
			this.editable= true;
			this.minValue= Number.MIN_VALUE;
			this.maxValue= Number.MAX_VALUE;
			this.minLength= 0;
			this.maxLength= Number.MAX_VALUE;
			this.validate= function(){return true;};
			this.func= undefined;
			this.values= [];
			this.maxSelected=1;
			this.lastChange= "0";
			this.faIcon =undefined;
			$.extend(this, options);
			
			return this;
		}
		
		Setting.BOOL 	= "bool";
		Setting.INT 	= "int";
		Setting.FLOAT 	= "float";
		Setting.STRING 	= "string";
		Setting.ENUM 	= "enum";
		Setting.FUNC	= "func";
		Setting.CUSTOM  = "custom";
		
		
		/**
		 * Class that can hold an array of values as well as named sub-stores that model a namespace.
		 * Usage Example: ns.get("events").get("click").get("customNamespace").list();
		 *
		*  @class NamespaceStore
		*  @private
		 * @memberof SgApi
		 * @declared in sgapi_settings.js
		 */
		var NamespaceStore = function(){
			var subNamespaces = {};
			var elements = [];
			this.get = function(name){
				var result = subNamespaces[name];
				if(!result){
					result = new NamespaceStore();
					subNamespaces[name] = result;
				}
				return result;
			};
			
			this.push = function(element){
				elements.push(element);
			}
			
			this.clear = function(){
				elements = [];
			}
			
			this.list = function(includeSubs){
				var result = Array.from(elements);
				if(includeSubs){
					for(var ns in subNamespaces){
						result = result.concat(subNamespaces[ns].list(true));
					}
				}
				return result;
			}
		}
	

		//==================== Constants =================================
		const uiElementFactory = {};
		uiElementFactory[Setting.BOOL]		=	createBoolOptionsInput;
		uiElementFactory[Setting.INT]  		=	createIntInput;
		uiElementFactory[Setting.FLOAT] 	= 	createFloatInput;
		uiElementFactory[Setting.STRING]	= 	createStringInput;
		uiElementFactory[Setting.ENUM]		=	createOptionsInput;
		uiElementFactory[Setting.FUNC] 		=	createButton;
		uiElementFactory[Setting.CUSTOM] 	=	createCustomDiv;
			
		
		//==================== Instance Variables =================================
		var overriddenUrl = "https://www.steamgifts.com/account/settings/giveaways";
		var encodedName = encodeName(settings_name);
		var encodedSettingsName = encodeCodeName(encodedName);
		var settingsUrl = overriddenUrl +"#" + encodedName;
		var settingsKey = "sgapi__settings_"+encodedName;
		var globalOptions = {
			instantSubmit: false,
			useGmStorage: false,
			infoBox: true,
			section: "Userscripts"
		};
		
		var eventCallbacks = new NamespaceStore();
		
		var settings;
		var self=this;
		var storage;
		
		
		// ================================= Public Functions ========================
	
		/**
		 * 
		 *  Get the value of a setting.
		 *  @param {string} name the name as defined in the SettingsBuilder
		 *  @return {object|undefined} the value of the setting or undefined if the setting does not exist.
		 * @declared in sgapi_settings.js
		 */
		this.get = function(name){
			var result = settings[name];
			if(!result)
				return undefined;
			return result.value;
		};
		
		/**
		 * 
		 *  Change the value of a setting.
		 *  @param {string} name the name as defined in the SettingsBuilder
		 *  @param {object} value the value to set
		 * @declared in sgapi_settings.js
		 */
		this.set = function(name, value){
			setValue(name, value);
			save();
		};
		
		/**
		 * 
		 *  Delete all saved Settings. They will be re-instanciated with their default values.
		 * @declared in sgapi_settings.js
		 */
		this.deleteAll = function(){
			storage.deleteAll();
		};
		
		this.on = function(event, callback){
			var parts = event.split(".");
			event = parts.splice(0,1);
			var namespace = parts.join(".");
			
			eventCallbacks.get(event).get(namespace).push(callback);
		};
		
		this.off = function(event, callback){
			var parts = event.split(".");
			event = parts.splice(0,1);
			var namespace = parts.join(".");
			
			eventCallbacks.get(event).get(namespace).clear();
		};
		
		this.options = function(name, value){
			var setting;
			if(name === value === undefined)
				return $.extend(true, {}, globalOptions);
			if(!value && typeof name === "string")
				return $.extend(true, {}, settings[name]);
			
			if(!value)
				$.extend(globalOptions, name);
			else
				$.extend(settings[name],value);
			
			this.reload();
		};
		
		this.reload = function(){
			switchToSettings();
		}

		
		// ================================= Functions ========================
		
		function trigger(event, args){
			eventCallbacks.get(event).list(true).forEach(function(c){c.apply(self, args);});
		}
		
		function toCamelCase(str){
			return str.replace(/\s+(\w)/gi, function(v){return v.replace(/\s+/gi,'').toUpperCase()}).replace(/\s/g,'');
		}
		
		function toUnderscores(str){
			return str.toLowerCase().replace(/\s+(\w)/gi, function(v){return v.replace(/\s+/gi,'_');}).replace(/\s/g,'');
		}
		
		
		function encodeName(str){
			var result = str;
			result = result.replace(/[^0-9a-z\s]/gi, '');
			result = toCamelCase(result);
			result = encodeURI(result);
			while($("a[href='"+overriddenUrl +"#" + result+"']").length > 0){
				result = result.replace(/((\d+)$|[^\d]$)/g, function(v){return ((+v)==v?(+v):v)+1;});
			}
			return result;
		}
		
		function encodeCodeName(str){
			str = str.replace(/[^0-9a-z\s-]/gi, '_');
			return toUnderscores(str);
		}
			
		function isSettingsPage(){
			return document.URL === settingsUrl;
		}
		
		function isOverriddenPage(){
			return document.URL.split("#")[0] === overriddenUrl;
		}

		function isAccountPage(){
			return document.URL.indexOf("https://www.steamgifts.com/account/") === 0;
		}

		function isNumeric(n){
			return n == parseFloat(n);
		}
		
		function isInteger(n) {
			return isNumeric(n) && n == (n|0);
		}
		//=================================UI Elements Settings Page ========================
		
		function initSettingsLink(){
			$(".sgapi__settings_link_"+encodedSettingsName).on("click.sgapi", switchToSettings);
		}

		function addSettingsSectionLink(){
			var $link = $('<a class="sidebar__navigation__item__link sgapi__settings_link sgapi__settings_link_'+encodedSettingsName+'" href="'+settingsUrl+'"><div class="sidebar__navigation__item__name">'+settings_name+'</div><div class="sidebar__navigation__item__underline"></div></a>').attr("href",settingsUrl);
			var $li = $('<li class="sidebar__navigation__item sgapi__settings_link">');
			$li.append($link);
			getSection().append($li);
		}

		function getSection(){
			var className = "sgapi__settings_section_"+encodeCodeName(globalOptions.section);
			var $result = $("."+className);
			if($result.length>0)
				return $result;
			var $html=$("<h3 class='sidebar__heading'>"+globalOptions.section+"</h3><ul class='sidebar__navigation "+className+"'></ul>'");
			$html.insertBefore($("h3.sidebar__heading:contains(Settings)"));
			return $html.last();
		}
		
		function switchToSettings(){
		   //Clear Content
		   $("div.sidebar~div").children().not(".page__heading").remove();
			//Set Title
		   document.title = "Account - "+globalOptions.section+" - "+settings_name;
		   $("div.sidebar~div .page__heading a:nth-of-type(2)").text(settings_name).attr("href",settingsUrl);
		   $("div.sidebar~div .page__heading a:nth-of-type(1)").text(globalOptions.section).attr("href",settingsUrl.split("#")[0]+"#");

		   var id = ".sgapi__settings_link_"+encodedSettingsName;

		   //Select Menu Item in Sidebar
			$(".sidebar .is-selected").removeClass("is-selected");
			$(id).prepend($("div.sidebar .fa.fa-caret-right")).parent("li").addClass("is-selected");

			//Reload saved settings to be sure we have a valid state
			reloadSettings();
			
			//Render settings
			renderSettings();
		}
		
		var evaluate = SgApi.Util.evaluate;
		
		function renderSettings(){
			//Build sections
			settingsCounter = 1;
			var $formRows = $("<div>").addClass("form__rows");
			for(var name in settings){
				var s = settings[name];
				if(evaluate(s.visible, self, s))
					$formRows.append(createFormRow(s.title,uiElementFactory[s.type](s),evaluate(s.editable, self, s)));
			}
			
			if(!globalOptions.instantSubmit)
				$formRows.append(createSubmitButton());
			if(globalOptions.infoBox)
				$formRows.append(createInfoDiv());
			
			//Add sections to DOM
			$("div.sidebar~div").append($formRows);
		}

		var settingsCounter = 1;
		function createFormRow(title, $content, enabled){
			var $formHeadingNumber = $("<div>").addClass("form__heading__number").text(settingsCounter++);
			var $formHeadingText = $("<div>").addClass("form__heading__text").text(title);
			var $formHeading = $("<div>").addClass("form__heading").append($formHeadingNumber).append($formHeadingText);
			var $formRowIndent = $("<div>").addClass("form__row__indent").append($content);
			var $formRow = $("<div>").addClass("form__row").append($formHeading).append($formRowIndent);
			if(!enabled)
				$formRow.addClass("disabled");
			return $formRow.addClass("sgapi__setting_row");
		}
			
		function createSubmitButton(){
			$btn= $('<div class="form__submit-button"><i class="fa fa-arrow-circle-right"></i> Save Changes</div>');
			initSubmitButton($btn);
			return $btn;
		}
		
		function initSubmitButton($btn){
			$btn.on("click.sgapi", save);
		}
		
		function addDescription($resultDiv, setting){
			var desc = evaluate(setting.description, self, setting);
			if(desc){
				var $descripton = $('<div class="form__input-description">'+desc+"</div>");
				$resultDiv.append($descripton);
			}
		}
		
		function createButton(setting, $container){
			var title = setting.label || setting.name;
			var name = encodeCodeName(setting.name);
			var fa_icon = setting.faIcon;
			
			var $resultDiv = $("<div>").addClass("sgapi__form").addClass("sgapi__setting_func");
			var $buttonDiv = $("<div>").addClass("form__submit-button").addClass("sgapi__button_"+name).text(title);
			if(fa_icon){
				var $icon = $("<i>").addClass("sgapi__icon_"+name).addClass("fa "+fa_icon);
				$buttonDiv.prepend($icon);
			}
			if(evaluate(setting.editable, self, setting))
				$buttonDiv.click(function(){setting.func.call($buttonDiv, self);});
			$resultDiv.append($buttonDiv);
			addDescription($resultDiv, setting);
			
			return $resultDiv;
		}
		
		function createIntInput(setting){
			var validator = function(intStr){
				return isInteger(intStr) && intStr >= evaluate(setting.minValue, self, setting) && intStr <= evaluate(setting.maxValue, self, setting);
			}
			return createTextBoxSetting(setting, validator);
		}
		
		function createFloatInput(setting){
			var validator = function(str){
				return isNumeric(str) && str >= evaluate(setting.minValue, self, setting) && str <= evaluate(setting.maxValue, self, setting);
			}
			return createTextBoxSetting(setting, validator);
		}
		
		function createStringInput(setting){
			var validator = function(str){
				return str.length>= evaluate(setting.minLength, self, setting) && str.length <= evaluate(setting.maxLength, self, setting);
			}
			return createTextBoxSetting(setting, validator);
		}
		
		function createTextBoxSetting(setting, validator){
			$input = createTextInput(setting)
			if(evaluate(setting.editable, self, setting))
				initInput($input, setting, validator);
			else 
				$input.attr("disabled", "true");
			return $input.parent();
		}
		
		function createOptionsInput(setting, transform){
			var $div = $("<div>").addClass("sgapi__setting_enum");
			var id = "sgapi__setting_"+encodedSettingsName+"_"+encodeCodeName(setting.name);
			for(var i=0; i<setting.values.length;i++){
				var isSelected = setting.value.indexOf(i) >= 0 ?"is-selected":"";
				var optionName = setting.values[i];
				var $chkDiv = '<div data-checkbox-value="'+i+'" class="sgapi__enum '+isSelected+'"><i class="form__checkbox__default fa fa-circle-o"></i><i class="form__checkbox__hover fa fa-circle"></i><i class="form__checkbox__selected fa fa-check-circle"></i>'+optionName+'</div>';
				$div.append($chkDiv);
			}
			addDescription($div, setting);
			initEnum($div,setting, transform);
			return $div;
		}
		
		function createBoolOptionsInput(setting){
			function toBool(x){
				return x ? true : false;
			};
			var $div = $("<div>").addClass("sgapi__setting_enum");
			var id = "sgapi__setting_"+encodedSettingsName+"_"+encodeCodeName(setting.name);
			for(var i=1; i>=0;i--){
				var isSelected = setting.value === toBool(i) ?"is-selected":"";
				var optionName = setting.values[i];
				var $chkDiv = '<div data-checkbox-value="'+i+'" class="form__checkbox '+isSelected+'"><i class="form__checkbox__default fa fa-circle-o"></i><i class="form__checkbox__hover fa fa-circle"></i><i class="form__checkbox__selected fa fa-check-circle"></i>'+optionName+'</div>';
				$div.append($chkDiv);
			}
			if(evaluate(setting.editable, self, setting)){
				$div.on("click.sgapi", "div.form__checkbox", function(e){
					var $div = $(this);
					var val = +$div.attr("data-checkbox-value");
					$div.siblings("div.form__checkbox").removeClass("is-selected");
					setting.value=toBool(val);
					$div.addClass("is-selected");
					
					if(globalOptions.instantSubmit)
						save();
				});
			}
			addDescription($div, setting);
			return $div;
		}
		
		function initEnum($div, setting){
			if(!evaluate(setting.editable, self, setting))
				return;
			$div.on("click.sgapi", "div.sgapi__enum", function(e){
				
				var $div = $(this);
				var val = +$div.attr("data-checkbox-value");
				var maxSelected = evaluate(setting.maxSelected, self, setting);
				if(maxSelected == 1){
					$div.siblings("div.sgapi__enum").removeClass("is-selected");
					setting.value=[val];
					$div.addClass("is-selected");
				}else{
					
					var idx = setting.value.indexOf(val);
					if(idx >=0){
						setting.value.splice(idx,1);
						$div.removeClass("is-selected");
					}
					else{
						if(setting.value.length < maxSelected){
							setting.value.push(val);
							$div.addClass("is-selected");
						}
					}
				}

				if(globalOptions.instantSubmit)
					save();
				
			});
		}
		
		function createTextInput(setting){
			var $div = $("<div>").addClass("sgapi__setting_"+setting.type);
			var id = "sgapi__setting_"+encodedSettingsName+"_"+encodeCodeName(setting.name);
			var $input = $("<input type='text'>").attr("name",id).attr("id",id).addClass("sgapi__input");
			var $label = $("<label>").attr("for", id).text(setting.name);
			$input.val(setting.value);
			$div.append($input).append($label);
			addDescription($div, setting);

			return $input;
		}
		
		function initInput($input, setting, validator){
			$input.blur(function(){
				var defaultValidation = validator($input.val());
				var customValidation = setting.validate($input.val());
				if(defaultValidation === true && customValidation === true){
					setValue(setting.name, $input.val());
					if(globalOptions.instantSubmit)
						save();
				}
				else{
					var message = defaultValidation === true ? customValidation : defaultValidation;
					$input.val(self.get(setting.name));
				}
			});
		}
		
		function createCustomDiv(setting){
			return setting.divBuilder(setting);
		}
		
		function save(){
			storage.save();
			trigger("save");
		}
		
		
		
		var setValue = function (name, value){
			var result = settings[name];
			if(!result)
				return undefined;
			result.value = value;
		};

		function createInfoDiv(){
			var $div = $("<div>");
			var scriptInfo = SgApi.Util.scriptInfo();
			var scriptVersion = scriptInfo.version;
			/*jshint multistr: true */
			var textLines = [];
			textLines.push(scriptInfo.name+" v"+scriptVersion);
			textLines.push("created by "+scriptInfo.author);
			textLines.push("");
			textLines.push("Built with SgApi");
			var plugins = SgApi.Plugins.list();
			for(var key in plugins){
				var p = plugins[key];
				textLines.push("&emsp;"+p.name+" v"+p.version);
			}
			
			for(var i=0; i<textLines.length;i++){
				$div.append($("<span class='sgapi__infobox_line'>"+textLines[i]+"</span><br>"));
			}
		
			$div.addClass("sgapi__info_box");
			return $div;
		}

		function reloadSettings(){
			settings = mergeSettings(settings, readSavedSettings());
		}
		
		function readSavedSettings(){
			return storage.load();
		}
		
		function mergeSettings(savedSettings, defaultSettings){
			var result = {};
			for(var setting in defaultSettings){
				result[setting] = $.extend({},defaultSettings[setting], savedSettings[setting]);
			}
			return result;
		}	
		
		function stripSettings(){
			var result = {};
			for(var key in settings){
				result[key] = {
					name: settings[key].name,
					value: settings[key].value
				};
			}
			return result;
		}
		
		var LocalStorage = function(){
			this.save = function(){
				localStorage[settingsKey] = JSON.stringify(stripSettings());
			};
			this.load = function(){
				return JSON.parse(localStorage[settingsKey] || "{}");
			};
			this.deleteAll = function(){
				localStorage.removeItem(settingsKey);
				reloadSettings();
				save();
			};
		};
		
		var GM_Storage = function(){
			this.save = function(){
				GM_setValue(settingsKey, JSON.stringify(stripSettings()));
			};
			this.load = function(){
				return JSON.parse(GM_getValue(settingsKey, "{}"));
			};
			this.deleteAll = function(){
				GM_deleteValue(settingsKey);
				reloadSettings();
				save();
			};
		};
		
		var styles = 
	".sgapi__form .form__submit-button  {  \
	padding-left: 7px;  \
	padding-right: 7px;  \
	margin-right: 7px; \
	}  \
	 \
	.form__row .sgapi__form .form__submit-button i.fa { \
	  padding-right: 6px; \
	} \
	 \
	input.sgapi__checkbox { \
		width: 11px; \
		height: 11px; \
		margin: 2px 6px 2px 2px; \
		vertical-align: top; \
	} \
	.sgapi__enum {\
		display: -webkit-box;\
		display: -moz-box;\
		display: -ms-flexbox;\
		display: -webkit-flex;\
		display: flex;\
		cursor: pointer;\
		color: #6b7a8c;\
		padding: 7px 0\
	}\
	.sgapi__enum i {\
		margin-right: 7px\
	}\
	.sgapi__enum:not(:last-of-type) {\
		border-bottom: 1px dotted #d2d6e0\
	}\
	.sgapi__enum.is-selected {\
		color: #4B72D4\
	}\
	.sgapi__enum:not(:hover) .form__checkbox__hover,.sgapi__enum.is-selected .form__checkbox__hover,.sgapi__enum:not(.is-selected) .form__checkbox__selected,.sgapi__enum:hover .form__checkbox__default,.sgapi__enum.is-selected .form__checkbox__default {\
		display: none\
	}\
	.sgapi__info_box{ \
		font-family: monospace; \
		border: 1px inset; \
		overflow: auto; \
		max-height: 150px; \
		margin-top: 20px;\
		margin-bottom: 20px;\
	}\
	.sgapi__settings_group>div:not(:first-child) {\
		margin-top: 10px;\
	}\
	.sgapi__setting_bool .form__input-description{\
		margin-top: 1px;\
	}\
	.sgapi__input{\
		width: 150px;\
	}\
	.sgapi__setting_row label {\
		display: none;\
	}\
	.sgapi__setting_row.disabled *{\
		color:#9e9e9e;\
	}\
	.sgapi__setting_row.disabled .form__checkbox.is-selected .fa-circle-o, .sgapi__setting_row.disabled .form__checkbox:not(.is-selected) .fa-check-circle, .sgapi__setting_row.disabled .form__checkbox__hover {\
		display: none;\
	}\
	.sgapi__setting_row.disabled .form__checkbox.is-selected .fa-check-circle, .sgapi__setting_row.disabled .form__checkbox:not(.is-selected) .fa-circle-o{\
		display: initial;\
	}\
	.sgapi__setting_row.disabled .form__submit-button{ \
	    border-color: lightgray; \
		text-shadow: 1px 1px 1px rgba(224,246,198,0.5); \
		background-image: linear-gradient(#c8d0c1 0%, #c4cabe 50%, #bdc1b9 100%); \
		background-image: -webkit-linear-gradient(#c8d0c1 0%, #c4cabe 50%, #bdc1b9 100%); \
		background-image: -moz-linear-gradient(#c8d0c1 0%, #c4cabe 50%, #bdc1b9 100%); \
		color:gray; \
	}\
	";
		
		// Builder Object
		/**
		 * 
		 *  Builder object to create your setttings.
		 *  Once finished building, call init() to initialize this settings.
		 *  @class SettingsBuilder
		 *  @memberof SgApi.Settings
		 * @declared in sgapi_settings.js
		 */
		return new function(){
			var defaultSettings = {};
			var builder = this;
			
			/** 
			 * 
			 * Create a boolean setting.  
			 *
			 * @memberof SgApi.Settings.SettingsBuilder
			 *
			 * @param {string} name the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code.
			 * @param {boolean} initialValue the initial value for this setting.
			 * @param {object} [options] 
			* @param {string} [options.description] optional description of this setting.
			* @param {string} [options.title] a title different from <code>name</code> for your setting on the settings page
			* @param {boolean} [options.visible=true] if false, this setting will be hidden from the UI.
			* @param {boolean} [options.editable=true]  if false, this setting is rendered to the UI but won't be editable
			* @param {string[]} [options.values=["No", "Yes"]] values to display instead of "No" and "Yes". Please note that the negative value is at index 0 and the positive value at index 1.
			*
			* @declared in sgapi_settings.js
			*/
			this.boolean = function(name, initialValue, options){
				options = $.extend({values: ["No", "Yes"]}, options);
				defaultSettings[name] = new Setting(Setting.BOOL, name, initialValue, options);
				return builder;
			};
			
			
			/**
			* 
			*  
			 * Create an integer setting. The input field will only accept integer values.
			 *
			 * @memberof SgApi.Settings.SettingsBuilder
			 *
			 * @param {string} name the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code.
			 * @param {int} initialValue the initial value for this setting.
			 * @param {object} [options] 
			* @param {string} [options.description] optional description of this setting. 
			* @param {string} [options.title] a title different from <code>name</code> for your setting on the settings page
			* @param {boolean} [options.visible=true] if false, this setting will be hidden from the UI.
			* @param {boolean} [options.editable=true]  if false, this setting is rendered to the UI but won't be editable
			* @param {int} [options.minValue] if set, the UI will not accept inputs smaller than minValue
			* @param {int} [options.maxValue] if set, the UI will not accept inputs greater than minValue
			* @param {function(int)} [options.validate] an additional validation function to validate the inputs in the UI
			* @declared in sgapi_settings.js
			*/
			this.int = function(name, initialValue, options){
				defaultSettings[name] = new Setting(Setting.INT, name, initialValue, options);
				return builder;
			}
			
			
			/**
			* 
			*  
			 * Create a float setting. The input field will only accept numbers.
			 *
			 * @memberof SgApi.Settings.SettingsBuilder
			 *
			 * @param {string} name the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code.
			 * @param {number} initialValue the initial value for this setting.
			 * @param {object} [options] 
			* @param {string} [options.description] optional description of this setting. 
			* @param {string} [options.title] a title different from <code>name</code> for your setting on the settings page
			* @param {boolean} [options.visible=true] if false, this setting will be hidden from the UI.
			* @param {boolean} [options.editable=true]  if false, this setting is rendered to the UI but won't be editable
			* @param {number} [options.minValue] if set, the UI will not accept inputs smaller than minValue
			* @param {number} [options.maxValue] if set, the UI will not accept inputs greater than maxValue
			* @param {function(number)} [options.validate] an additional validation function to validate the inputs in the UI
			* @declared in sgapi_settings.js
			*/	
			this.float = function(name, initialValue, options){
				defaultSettings[name] = new Setting(Setting.FLOAT, name, initialValue, options);
				return builder;
			}
			
			
			/**
			* 
			*  
			 * Create a string setting.
			 *
			 * @memberof SgApi.Settings.SettingsBuilder
			 *
			 * @param {string} name the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code.
			 * @param {string} initialValue the initial value for this setting.
			 * @param {object} [options] 
			* @param {string} [options.description] optional description of this setting. 
			* @param {string} [options.title] a title different from <code>name</code> for your setting on the settings page
			* @param {boolean} [options.visible=true] if false, this setting will be hidden from the UI.
			* @param {boolean} [options.editable=true]  if false, this setting is rendered to the UI but won't be editable
			* @param {number} [options.minLength=0] if set, the UI will not accept inputs shorter than minLength
			* @param {number} [options.maxLength] if set, the UI will not accept inputs longer than maxLength
			* @param {function(string)} [options.validate] an additional validation function to validate the inputs in the UI
			* @declared in sgapi_settings.js
			*/		
			this.string = function(name, initialValue, options){
				defaultSettings[name] = new Setting(Setting.STRING, name, initialValue, options);
				return builder;
			}
			
			/**
			* 
			*  
			 * Create an enum setting. The selected values will be saved as an array of indices, whereas the values array will hold their string representations.
			 *
			 * @memberof SgApi.Settings.SettingsBuilder
			 *
			 * @param {string} name the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code.
			 * @param {string[]} [values] the avialable options to choose from
			 * @param {int[]} [initialValues=[]] the initially selected values for this setting. Array of indices that correspond to the values array.
			 * @param {object} [options] 
			* @param {string} [options.description] optional description of this setting. 
			* @param {string} [options.title] a title different from <code>name</code> for your setting on the settings page
			* @param {boolean} [options.visible=true] if false, this setting will be hidden from the UI.
			* @param {boolean} [options.editable=true]  if false, this setting is rendered to the UI but won't be editable
			* @param {int} [options.maxSelected=1] number of options that can be selected. If 1, the UI will behave like a HTML options element. If > 1, it will behave like a checkbox group and refuse to select more items than the specified number.
			* @declared in sgapi_settings.js
			*/	
			this.enum = function(name, values, initialValues, options){
				initialValues = initialValues ? ($.isArray(initialValues) ? initialValues : [initialValues]) : [];
				options = $.extend({values: values}, options);
				defaultSettings[name] = new Setting(Setting.ENUM, name, initialValues, options);
				return builder;
			}
			
			
			/**
			 * 
			 * Creates a button setting that will invoke the given function when clicked.
			 *
			 * @memberof SgApi.Settings.SettingsBuilder
			 *
			* @param {string} name the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI.
			 * @param {function} func the function to invoke on click
			 * @param {object} [options] 
			* @param {string} [options.description] optional description of this setting. 
			* @param {string} [options.title] a title different from <code>name</code>. 
			* @param {string} [options.label] the text on your button. If undefined, it will be the same as name
			* @param {boolean} [options.visible=true] if false, this setting will be hidden from the UI.
			* @param {string} [options.faIcon] an font awesome icon to be displayed on your button, e.g. "fa-cog"
				* @declared in sgapi_settings.js
				*/
			this.func = function(name, func, options){
				options = options||{};
				options.func = func;
				defaultSettings[name] = new Setting(Setting.FUNC, name, undefined, options);
				return builder;
			}
			
			/**
			 * 
			 * Creates a custom setting with the content provided by divBuilder. 
			 *
			 * @memberof SgApi.Settings.SettingsBuilder
			 *
			* @param {string} name the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI.
			 * @param {function} divBuilder a function that returns a div-element that contains your custom html code.
			 * @param {object} [options] 
			* @param {string} [options.title] a title different from <code>name</code>. 
			* @param {boolean} [options.visible=true] if false, this setting will be hidden from the UI.
				* @declared in sgapi_settings.js
				*/
			this.custom = function(name, divBuilder, options){
				options = options||{};
				options.divBuilder = divBuilder;
				defaultSettings[name] = new Setting(Setting.CUSTOM, name, undefined, options);
				return builder;
			}
			
			
			function checkGmStorageAvailability(){
				var grants = function(str){
					return SgApi.Util.scriptInfo().grant.indexOf(str) >= 0;
				};
				if(!(grants("GM_setValue") && grants("GM_getValue") && grants("GM_deleteValue")))
					throw new Error("You need to @grant GM_setValue, GM_getValue, and GM_deleteValue to use the GM storage");
			}
			
			function initSettings(){
				if(globalOptions.useGmStorage){
					checkGmStorageAvailability();
					storage = new GM_Storage();
				}
				else
					storage = new LocalStorage();
				var savedSettings = readSavedSettings();
				settings = mergeSettings(savedSettings, defaultSettings);
				save(); //make sure the values are saved in the storage
			}
			
			/**
			 * 
			 *  Initializes this Settings object. 
			 *
			 * @memberof SgApi.Settings.SettingsBuilder
			 *  
			 *  @param {object} [options]
			 *  @param {boolean} [options.useGmStorage=false] save the data using GM_setValue and GM_getValue instead of localStorage. Since localStorage can be read by every script, it is strongly recommended to set this flag to true if you save sentive data like API keys in your settings. Remember that you need to grant GM_setValue, GM_getValue and GM_deleteValue for this to work, which also may change your sandboxing mode. Read the chapter about jQuery for more information.
			 *  @param {boolean} [options.instantSubmit=false] Don't show a "Save" button, but instantly save the data on change.
			 *  @param {string}  [options.section="Userscripts"] The section in the left sidebar in which the Settings will appear. For the sake of usability, it is recommended not the change this, so that the users don't have an unnecessarily cluttered sidebar.
			 *  @param {boolean} [options.infoBox=true] if set to false, the info box below the "Save" button will not be rendered.
			 *  @return {Settings} the Settings object to read and save your settings
			 * @declared in sgapi_settings.js
			 */
			this.init = function(options){
				$.extend(globalOptions, options);
				initSettings();
				if(isAccountPage()){
					SgApi.Util.injectCss(styles);
					addSettingsSectionLink();
					if(isSettingsPage()){
						switchToSettings();
					}
					if(isOverriddenPage()){
						initSettingsLink();
					}
				}
				return self;
			};
			
			
		}();
	};
});