/*
*	SteamGifts Userscript API
*	Core
*/

if(typeof $ === "undefined"){
	(function(){
		var docUrl ="the documentation";
		var errStr="jQuery access is required for SgApi to work. That means you must either do without any //@grant statement or explicitely //@require an jQuery instance. Please read "+docUrl;
		console.error(errStr);
		throw new Error(errStr);
	})();
}

(function(root){
	var version = "0.1";
	
	/**
	 * 
	 *  
	 *  @param {Container} dataContainer the container in which the Registry's data is stored.
	 *  @class Registry
	 *  @private
	 *  @declared in sgapi.js
	 */
	var Registry = function(dataContainer){
		var self = this;
		
		/**
		 * 
		 * Registers a new script to this Registry. If there already exists an script with this name, the existing version is compared to the given one. If the given version is newer than the existing, the old one is replaced. If the script is accepted, it's initFunc function is called, in which it can initialize itself.
		 *  
		 *  You usually won't have to invoke this function, since every script that embeds SgApi is automatically registered.
		 *  @memberof SgApi.ScriptRegistry
		 *  @declared in sgapi.js
		 */
		this.register = function(name, version, initFunc){
			var existing =dataContainer.get(name);
			if(existing){
				if(Registry.versionCompare(existing.version, version) >= 0)
					return;
			}
			if(initFunc)
				initFunc();
			dataContainer.set(name, {name: name, version: version});
		};
		
		/**
		 * 
		 *  Lists all registered script. 
		 *  Changes to the returned objects are NOT reflected to the backed data.
		 *
		 *  @memberof Registry
		 *  @returns {Object}
		 *  @memberof SgApi.ScriptRegistry
		 *  @declared in sgapi.js
		 */
		this.list = function(){
			return dataContainer.list();
		};
		
		/**
		 * 
		 *  Gets a registered script entry. Changes to the returned object are NOT reflected to the backed data.
		 *  
		 *  @memberof SgApi.ScriptRegistry
		 *	@param {string} name a name
		 *  @returns {Object} the element registered to that name or undefined, if there is no element registered to the name.
		 *  @memberof SgApi.ScriptRegistry
		 *  @declared in sgapi.js
		 */
		this.get = function(name){
			return dataContainer.get(name, undefined);
		};
		
		/**
		 * 
		 *  Checks whether there is an script registered to the given name that matches exactly the given version
		 *	@param {string} name a name
		 *	@param {string} version a version string
		 *  @memberof SgApi.ScriptRegistry
		 *  @returns {boolean}
		 *  @declared in sgapi.js
		 */
		this.matches = function(name, version){
			 var existing = self.get(name);
			 if(existing === undefined)
				 return false;
			 if(!version)
				 return true;
			 return Registry.versionCompare(version, existing.version) === 0;
		};
		
		/**
		 * 
		 *  Checks whether there is a script registered to the given name that is the given version or newer.
		 *	@param {string} name a name
		 *	@param {string} version a version string
		 *  @memberof SgApi.ScriptRegistry
	     *  @returns {boolean}
		 *  @declared in sgapi.js
		 */
		this.existsMin = function(name, version){
			 var existing = self.get(name);
			 if(existing === undefined)
				 return false;
			 if(!version)
				 return true;
			 return Registry.versionCompare(version, existing.version) <= 0;
		};
		
		
		/**
		 * 
		 *  Checks whether there is a script registered to the given name.
		 *	@param {string} name a name
		 *  @memberof SgApi.ScriptRegistry
		 *  @returns {boolean}
		 *  @declared in sgapi.js
		 */
		this.exists = function(name){
			 var existing = self.get(name);
			 if(existing === undefined)
				 return false;
			 return true;
		};
		
		/**
		 * 
		 *  Checks whether there is a script registered to the given name that is the given version or older.
		 *	@param {string} name a name
		 *	@param {string} version a version string
		 *  @memberof SgApi.ScriptRegistry
	     *  @returns {boolean}
		 *  @declared in sgapi.js
		 */
		this.existsMax = function(name, version){
			 var existing = self.get(name);
			 if(existing === undefined)
				 return false;
			 if(!version)
				 return true;
			 return Registry.versionCompare(version, existing.version) >= 0;
		};
		
	};
	/**
	 * 
	 * Compares two version strings. A valid version string only consists of integers divided by dots, e.g. "1.0.0"
	 * 
	 *  @param a a version string
	 *  @param b a version string
	 *  @memberof SgApi.ScriptRegistry
	 *  @returns {boolean}
	 *  @static 
	 *  @example
	 *  console.log(versionCompare("1.10.0", "1.2.0")); //prints 1, since version a is greater than version b
	 *  @declared in sgapi.js
	 */
	Registry.versionCompare = function(a, b) {
		var i, diff;
		var regExStrip0 = /(\.0+)+$/;
		var segmentsA = a.replace(regExStrip0, '').split('.');
		var segmentsB = b.replace(regExStrip0, '').split('.');
		var l = Math.min(segmentsA.length, segmentsB.length);

		for (i = 0; i < l; i++) {
			diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
			if (diff) {
				return diff;
			}
		}
		return segmentsA.length - segmentsB.length;
	};

	/**
	 * 
	 *  A data container that stores the data in an instance variable
	 *  @private
	 *  @declared in sgapi.js
	 */
	var JSDataContainer = function(){
		var data = {};
		
		this.list= function(){
			return $.extend({},data,true);
		};
		this.get= function(key, def){
			var result = data[key];
			if(!result)
				return def;
			return $.extend({},result,true);
		};
		this.set= function(key, value){
			data[key] = value;
		};
		this.clear= function(key){
			delete data[key];
		};
	};

	//Init SgApi object
	
	//Kill previously created instances
	if(typeof SgApi !== "undefined")
		SgApi.destroy();
	root.SgApi = {Plugins : new Registry(new JSDataContainer())};
	
	
	/**
	 * 
	 *  @static
	 *  @namespace 
	 *  @name SgApi
	 *  @declared in sgapi.js
	 */
	SgApi.Plugins.register("Core", version, function(){

		/**
		 * 
		 * SgApi.Util is a central collection of useful recurring tasks. 
		 * It is recommended to import the Utils into your namespace by use(SgApi.Util).
		 *
		 * @memberof SgApi
		 * @static
		 * @namespace
		 * @declared in sgapi.js
		 */
		SgApi.Util = (new function(){
			
			var util = this;
			
			/**
			 * 
			 *  Parses a value that might be a string or a boolean value and returns the bool value.
			 *  
			 *  @param {string} value the value to parse
			 *  @returns {boolean} true, if the value is "true" or true, false otherwise
			 *  
			 *  @memberof SgApi.Util
			 * @declared in sgapi.js
			 */
			this.parseBool = function(value){
				if(value === "true" || value === "True" || value === true)
					return true;
				return false;
			};

			/**
			 * 
			 *  Builds an url to a giveway.
			 *  
			 *  @param {string} id the giveaway id
			 *  @returns {string} the URL to the giveaway with the given ID
			 *  
			 * @memberof SgApi.Util
			 * @declared in sgapi.js
			 */
			this.buildGiveawayUrl = function(id){
				return "https://www.steamgifts.com/giveaway/"+util.extractId(id)+"/";
			};

			/**
			 * 
			 *  Builds an url to a discussion.
			 *  
			 *  @param {string} id  the discussion id
			 *  @returns {string}  the URL to the discussion with the given ID
			 *  
			 * @memberof SgApi.Util
			 
			 * @declared in sgapi.js
			 
			 */
			this.buildDiscussionUrl = function(id){
				return "https://www.steamgifts.com/discussion/"+util.extractId(id)+"/";
			};

			/**
			 * 
			 *  Builds an url to the thumbnail for the game with the given steam id.
			 *  
			 *  @param {string} steamAppId the steam app id 
			 *  @returns {string}  the URL to the thumbnail
			 *  
			 * @memberof SgApi.Util
			 
			 * @declared in sgapi.js
			 
			 */
			this.getGameThumbUrl = function(steamAppId){
				return "https://steamcdn-a.akamaihd.net/steam/apps/"+steamAppId+"/capsule_184x69.jpg";
			};
			
			/**
			 * 
			 *  Returns the current url
			 *  @param {SgApi.Context} [context] a context
			 *  @returns {string} the url to the current page or the page specified by context
			 *  
			 *  @memberof SgApi.Util
			 
			 * @declared in sgapi.js
			 
			 */
			this.getCurrentUrl = function(context){
				return (context && context.url) || document.URL;
			};

			/**
			 * 
			 *  Checks if a page is the SteamGifts Homepage
			 *  
			 *  @param {SgApi.Context|string} [context] context the page context, see SgApi.Context or a url string
			 *  @return {boolean} true, if the page is the SteamGifts Homepage
			 *  
			 *  @memberof SgApi.Util
			 
			 *  
			 * @declared in sgapi.js
			 */
			this.isHomePage = function(context){
				var url = typeof context === "string" ? context : util.getCurrentUrl(context);
				return url === "https://www.steamgifts.com/";
			};
			
			/**
			 * 
			 *  Checks if a page is a giveaway
			 *  
			 *  @param {SgApi.Context|string} [context] context the page context, see SgApi.Context or a url string
			 *  @return {boolean} true, if the page is a giveaway
			 *  @memberof SgApi.Util
			 
			 * @declared in sgapi.js
			 
			 */
			this.isGiveaway = function(context){
				var url = typeof context === "string" ? context : util.getCurrentUrl(context);
				return url.indexOf("https://www.steamgifts.com/giveaway/") === 0;
			};
			
			/**
			 * 
			 *  Checks if a page is a discussion
			 *  
			 *  @param {SgApi.Context|string} [context] context the page context, see SgApi.Context or a url string
			 *  @return {boolean} true, if the page is a discussion
			 *  @memberof SgApi.Util
			 
			 * @declared in sgapi.js
			 
			 */
			this.isDiscussion = function(context){
				var url = typeof context === "string" ? context : util.getCurrentUrl(context);
				return url.indexOf("https://www.steamgifts.com/discussion/") === 0;
			};
			
			/**
			 * 
			 *  Checks if a page is a user
			 *  
			 *  @param {SgApi.Context|string} [context] context the page context, see SgApi.Context or a url string
			 *  @return {boolean} true, if the page is a user
			 *  @memberof SgApi.Util
			 
			 * @declared in sgapi.js
			 
			 */
			this.isUser = function(context){
				var url = typeof context === "string" ? context : util.getCurrentUrl(context);
				return url.indexOf("https://www.steamgifts.com/user/") === 0;
			};

			/**
			 * 
			 *  Gets the SG id of the current page.
			 *  
			 *  @param {SgApi.Context} [context] context the page context, see SgApi.Context
			 *  @return {string} the 5 char SG id or undefined if no id is accessible
			 *  @memberof SgApi.Util
			 
			 *  
			 * @declared in sgapi.js
			 */
			this.getCurrentId = function(context){
				return util.extractId(util.getCurrentUrl(context));
			};
			
			/**
			* 
			* Assumes str is an Integer WITHOUT DECIMAL and converts it to an integer.
			* Meaning, a string "10,00" is parsed to 1000. This function shold only be used 
			* when you know you are dealing with an int.
			* @param {string} a string representing an integer
			* @returns {number} the integer value or NaN if the string was not a number
			* @memberof SgApi.Util
			 
			* @declared in sgapi.js
			 
			*/
			this.parseInteger = function(str){
				return +str.replace(/[.,]/g,"");
			}

			var sgUrlRe = /^https?:\/\/(www)?\.steamgifts\.com\/(giveaway|discussion)\/([\w\d]{5})\/.*$/i;
			var steamStoreUrlRe = /^(https?:\/\/)?store\.steampowered\.com\/(app|sub)\/(\d+)($|\/.*$)/i;
			var steamImgUrlRe = /^(https?:\/\/)?steamcdn-a\.akamaihd\.net\/steam\/apps\/(\d+)\/.*\.jpg$/i;
			var sgIdRe = /^([\w\d]{5})$/;
			/**
			 * 
			 *  Gets the relevant id from an URL. 
			 *  URL may be a SG URL, a Steam store URL or a Steam thumbnail URL
			 *  @param {string} url the URL
			 *  @return {string} the id
			 *  @memberof SgApi.Util
			 
			 * @declared in sgapi.js
			 
			 */
			this.extractId = function(url){
				if(url.match(sgIdRe) !== null)
					return url; //already Id String
				var match = url.match(sgUrlRe);
				if(match)
					return match[3];
				match = url.match(steamStoreUrlRe);
				if(match)
					return match[3];
				match = url.match(steamImgUrlRe);
				if(match)
					return match[2];
			};
			
			/**
			 * 
			 *  Calculates a hash code from a given string.
			 *  @param {string} str a string
			 *  @returns {number} the hash code for this string
			 *  @memberof SgApi.Util
			 
			 * @declared in sgapi.js
			 
			 */
			this.hashCode = function(str) {
			  var hash = 0, i, chr, len;
			  if (str.length === 0) return hash;
			  for (i = 0, len = str.length; i < len; i++) {
				chr   = str.charCodeAt(i);
				hash  = ((hash << 5) - hash) + chr;
				hash |= 0; // Convert to 32bit integer
			  }
			  return hash;
			};
			
			/**
			 * 
			 *  Includes a CSS file that was declared as a resource in the script header.
			 *  WARNING: Requiring a resource has a caveat opposed to requireCss: the resource is loaded once and cached forever by the ScriptManager. Meaning, if you want to update your resource, you need to update the script and point to another URL. If you use requireCss instead, the browsers built-in HTTP caching mechanisms are used, which means changed files will be recognized.
			 *  
			 *  Requires: @grant GM_getResourceText
			 *  
			 *  @param {string} key the resource name used with @resource
			 *  @memberof SgApi.Util
			 *  @example
			 *  // @resource     css https://manuelhermenau.de/scripts/test.css
			 *	// @grant        GM_getResourceText
			 *	// ==/UserScript==
			 *	use(SgApi.Util);
			 *	requireResourceCss("css");
			 * @declared in sgapi.js
			 */
			 
			this.requireResourceCss = function(key){
				var code = GM_getResourceText(key);
				$("head").append("<style type='text/css'>"+code+"</style");
			}
			
			/**
			 * 
			 *  Loads all *.css files that are declared in the script header via @resource.
			 *  See requireResourceCss.
			 *  @memberof SgApi.Util
			 * @declared in sgapi.js
			 */
			this.requireDeclaredStyles = function(){
				for(key in GM_info.script.resources.filter(function(r){return r.url.endsWith(".css");})){
					var resource = GM_info.script.resources[key];
					util.requireResourceCss(resource.name);
				}
			}

			/**
			 * 
			 *  Loads a CSS file from another server an embedds it into the current page. 
			 *  If given a resource identifier instead of an URL, the resource with that name will be embedded.
			 *  See alos {@link requireResourceCss}.
			 *  
			 *  @param {string} cssUrl the CSS file URL. 

			 *  @memberof SgApi.Util
			 
			 * 
			 * @declared in sgapi.js
			 */
			this.requireCss = function(cssUrl){
				if(GM_info.script.resources.filter(function(r){return r.name == cssUrl;}).length > 0){
					util.requireResourceCss(cssUrl);
					return;
				}
				
				var cssId = "id_"+util.hashCode(cssUrl);
				if (!document.getElementById(cssId))
				{
					var head  = document.getElementsByTagName('head')[0];
					var link  = document.createElement('link');
					link.id   = cssId;
					link.rel  = 'stylesheet';
					link.type = 'text/css';
					link.href = cssUrl;
					link.media = 'all';
					head.appendChild(link);
				}
			};
			
					
			/**
			 * 
			 *  Injects the given CSS string into the current page
			 *  
			 *  @param {string} styles a valid CSS string
			 *  
			 *  @memberof SgApi.Util
			 
			 * 
			 * @declared in sgapi.js
			 */
			this.injectCss = function(styles){
				var cssId = "sgapi_injected_style_"+util.hashCode(styles);
				if (!document.getElementById(cssId))
				{
					var head  = document.getElementsByTagName('head')[0];
					$('head').append('<style id="'+cssId+'" type="text/css">'+styles+'</style>');
				}
			};
			
			/**
			 * 
			 *  Enqueues the execution of func after all pending script- and render actions. 
			 *  
			 *  @param {Function} func the function to enqueue
			 *  @memberof SgApi.Util
			 
			 * 
			 * @declared in sgapi.js
			 */
			this.enqueue = function(func){
				root.setTimeout(func, 0);
			}
			
			/**
			* 
			* Calls all getters on an object. Basicly used to pretty print an object with many getters to the console.
			* @param {Object} obj the obj to unwrap
			* @memberof SgApi.Util
			* @declared in sgapi.js
			*/
			this.unwrap = function(obj){
				var result = {};
				for(var key in obj){
					result[key] = obj[key];
				}
				return result;
			};
			
			/**
			* 
			* Gets or creates a datastore. Datastores can be used to store data in the scope of a page request, spanning all Userscripts. Meaning, you can share data between UserScripts bypassing the Script Managers sandbox.
			*
			* | Storage             | Accessability     | Expiry |
			* | :------------------ | :----------  | :------------------ |
			* | localStorage   | every script on the host  | Never / on clear browser data|
			* |GM_setValue, GM_getValue | only the userscript that created it | Never |
			* | sessionStorage | every script on the host  | close tab / navigate away from host |
			* | Cookies | every script on the host | Defined date or never |
			* | window  | guaranteed only  for the current UserScript in the current page impression | Reload / Navigate |
			* | SgApi.DataStore | all scripts and userscripts in the same page impression | Reload / Navigate | 
			* @memberof SgApi.Util

			* @param {string} name the name of the DataStore. 
			* @declared in sgapi.js
			*/
			this.getDataStore = function (name){
				var dsId = "sgapi__data_store_"+name;
				var $ds = $("#"+dsId);
				if($ds.length === 0){
					$ds=$("<span style='display:none;'></span>");
					$ds.attr("id", dsId);
					$("html").append($ds);
				}
				var parse = function(){
					return JSON.parse($ds.attr("data-storage") ||"{}");
				};
				var save = function(json){
					$ds.attr("data-storage", JSON.stringify(json));
				};
				return {
					list: function(){
						return $.extend({},parse(),true);
					},
					get: function(key, def){
						var json = parse();
						if(json.hasOwnProperty(key))
							return $.extend({},json[key],true);
						return def;
					},
					set: function(key, value){
						var json = parse();
						json[key] = value;
						save(json);
					},
					clear: function(key){
						var json = parse();
						delete json[key];
						save(json);
					}
				};
			};
		}());

		/**
		 * 
		 *  A registry of all Userscripts on the current page that use SgApi. Any script that uses SgApi is automatically registered upon execution. ATTENTION: Due to execution order of your Userscripts, some scripts may not yet be registered upon document-idle. To ensure, that all scripts are registered, you should enqueue your Userscript code by using SgApi.Util.enqueue
		 *  
		 *  @memberof SgApi
		 * @declared in sgapi.js
		 */
		SgApi.ScriptRegistry = new Registry(SgApi.Util.getDataStore("userscripts"));
		
				/**
		 * 
		 *  Constructor function for a new UI accessor.	
		 *  SgApi.UI is the central interface to access all UI elements. This usually means returning jQuery objects that hold the elements you are looking for. Like SgApi, it is segmented in modules. SgApi Plugins can extend those modules or add new ones. For example, if include SgApi Giveaway Tools, the UI object will be augmented by a module called "CurrentGiveaway".
		 *  If possible, the modules expose getters for convienient acccess. 
		 *  The Core plugin contains modules for UI elements that are not bound to a specific use case. Currently it contains:
		 *  
		 *  - Sidebar
		 *  
		 *  	Access the left sidebar
		 *  - Links
		 *  
		 *  	Access Hyperlinks on the whole page
		 *  
		 *  
		 *  An UI accessor can be instanciated with a SgApi.Context. A context represents another site that is not the current site. Usually this was fetched via an ajax request. This way, the same interface can be used to access the current page or another page. For example, the Giveaway Tools offer a function loadGiveaway, that loads a Giveaway page via ajax. To extract the giveaway data from the remote page, it creates an UI object with that page as it's contexts, so every call to that UI object will search in the remote giveaway's HTML code instead of the current page.
		 *  
		 *  If not Context argument is provided, the Context is the current page.
		 *  
		 *  @param {SgApi.Context} [context] the context
		 *  @returns {SgApi.Ui} the ui object
		 *  @example
		 *  var ui = new SgApi.Ui();
		 * var allLinks = ui.Links.allGiveawayLinks;
		 * var steamLinks = ui.Links.linksInMarkdown("store.steampowered.com");
		 *  
		 *  @class Ui
		 *  @memberof SgApi
		 * @declared in sgapi.js
		 */
		SgApi.Ui = function(context){
			if(context){
				if(!(context instanceof SgApi.Context))
					throw Error("context must be a Context object");
			}else{
				context = new SgApi.Context();
			}

			for(var key in SgApi.Ui._modules){
				this[key] = new SgApi.Ui._modules[key](context);
			}	
		};

		SgApi.Ui._modules = {};
		
		/**
		 * 
		 *  Registers a new UI module. This function is called by SgApi plugins that want to extend the UI namespace.
		 *  
		 *  @param {string} modName Module name. The module will be accessible from the UI object via that name.
		 *  @param {Function} constFunc Constructor function that creates the module.
		 *  
		 *  
		 * @declared in sgapi.js
		 */
		SgApi.Ui._registerModule = function(modName,constFunc){
			if(!constFunc){
				modName = arg1.name;
				constFunc = arg1;
			}
			SgApi.Ui._modules[modName] = constFunc;
		}

		/**
		 * 
		 * Access the elements of the left sidebar.
		 * @name Sidebar
		 * @memberof SgApi.Ui
		 * @declared in sgapi.js
		 */
		SgApi.Ui._registerModule("Sidebar",  function(context){
			var $ = context.$;
			return {
				
				/**
				 * 
				 *  
				 * @memberof SgApi.Ui.Sidebar
				 * @returns {jQuery} the whole sidebar element
				 * @declared in sgapi.js
				 */
				get sidebarElement(){
					return $(".sidebar");
				},
				
				/**
				 * 
				 * @memberof SgApi.Ui.Sidebar
				 * @param {string} title the title of the element to find
				 * @returns {jQuery} the group header element from the sidebar with the given title
				 * @declared in sgapi.js
				 */
				menuGroupHeaderElement : function(title){
					return $(".sidebar__heading:contains('"+title+"')");
				},
				
				/**
				 * 
				 * @memberof SgApi.Ui.Sidebar
				 * @param {string} title the title of the element to find
				 * @returns {jQuery} the group element from the sidebar with the given title
				 * @declared in sgapi.js
				 */
				menuGroupElement : function(title){
					return $(".sidebar__heading:contains('"+title+"')+.sidebar__navigation");
				},
				
				/**
				 * 
				 * @memberof SgApi.Ui.Sidebar
				 * @param {string} menuItem the name of the menu item to find
				 * @returns {jQuery} the value element associated with the menu entry with the given name
				 * @declared in sgapi.js
				 */
				menuItemValueElement : function(menuItem){
					return $("a.sidebar__navigation__item__link div.sidebar__navigation__item__name:contains("+menuItem+")~div.sidebar__navigation__item__count");
				},
				
				/**
				 * 
				 * @memberof SgApi.Ui.Sidebar
				 * @param {string} menuItem the name of the menu item to find
				 * @returns {jQuery} the menu item element with the given name
				 * @declared in sgapi.js
				 */
				menuItemElement : function(menuItem){
					return $("a.sidebar__navigation__item__link div.sidebar__navigation__item__name:contains("+menuItem+")");
				}				
			}
		});
		
		/**
		 * 
		 * Access Links on the page.
		 * @name Links
		 * @memberof SgApi.Ui
		 *
		 * @declared in sgapi.js
		 */
		SgApi.Ui._registerModule("Links",  function(context){
			var $ = context.$;
			return {
				
				/**
				 * 
				 * @memberof SgApi.Ui.Links
				 * @returns {jQuery[]} a list of all links that point to a giveaway
				 * @declared in sgapi.js
				 */
				get allGiveawayLinks(){
					var prefix = "*=://www.steamgifts.com/giveaway/";
					return $("a[href"+prefix+"]");
				},
				
				/**
				 * 
				 * @memberof SgApi.Ui.Links
				 * @returns {jQuery[]} a list of all giveaway links in markdown areas (comments, discussions, giveaway descriptions)
				 * @declared in sgapi.js
				 */
				get giveawayLinksInMarkdown(){
					return this.linksInMarkdown("www.steamgifts.com/giveaway/");
				},
				
				/**
				 * 
				 * @memberof SgApi.Ui.Links
				 * @param {string} [prefix] a url prefix to filter the results (without http://)
				  * @returns {jQuery[]} a list of all links in markdown areas (comments, discussions, giveaway descriptions)
				  *@example 
				  * var userLinks = SgApi.Util.linksInMarkdown("www.steamgifts.com/user/");
				 * @declared in sgapi.js
				 */
				linksInMarkdown : function(prefix){
					prefix = prefix ? "*='://"+prefix+"'" : "";
					return $(".markdown--resize-body a[href"+prefix+"]");
				}
			}
		});

		/**
		 * 
		 *  @class Context
		 *  @memberof SgApi
		 *  @param {jQuery} [jQuery]
		 *  @param {string} [url]
		 *  @param {string} [title]
		 * @declared in sgapi.js
		 */
		SgApi.Context = function($, url,title){
			this.$ = $ || jQuery;
			this.url = url || document.URL;
			this.title = title || document.title;
		}

		/**
		 * 
		 *  Creates a new context from a HTML string. Must be the complete HTML code of a fetched website.
		 *	@param {string} [html]
		 *  @param {string} [url]
		 *  @memberof SgApi.Context
		 *  @static
		 * @declared in sgapi.js
		 */
		SgApi.Context.fromHtml = function(html, url){
			var mimicJQuery = function(jQObj){
				return $.extend(function(str){return $(str, jQObj);},$);
			}
			var title=html.match(/<title>(.*?)<\/title>/i)[1];
			//Wrap body in div so that "find" will work correctly
			html = '<div id="body-mock">' + html.replace(/^[\s\S]*<body.*?>|<\/body>[\s\S]*$/ig, '') + '</div>';
			return new SgApi.Context(mimicJQuery($(html)),url, title);
		}

		var used = [];
		
		/**
		* 
		*	Imports the given namespace into global namespace by appending its members to the root context (window). If there are    name conflicts, the existing properties are not overwritten and a warning is logged.
		 *  @param {object} obj namespace
		 *  @param {String[]} [properties] the properties to import
		 *  
		 *  
		 *  @example
		 *use(SgApi.Util)
		 *if(isGiveawayPage())
		 *		requireCss("https://www.aserver.com/style.css");
		 *  
		 *  
		 * @declared in sgapi.js
		 */
		root.use = function(obj, properties){
			if(!properties){
				properties = Object.keys(obj);
			}
			var doNotOverride = Object.keys(root);
			for(var i=0;i<properties.length; i++){
				var key = properties[i];
				if(doNotOverride.indexOf(key) >=0)
					console.warn("Could not import '"+key+"' - property already exists");
				else{
					root[key] = obj[key];
					used.push(key);
				}
			}
		};
		
		SgApi.destroy = function(){
			console.error("SgApi leak detected")
			/*for(var i=0; i<used.length; i++){
				delete root[used[i]];
			};
			delete root.SgApi;*/
		};

	});

	SgApi.ScriptRegistry.register(GM_info.script.name, GM_info.script.version);
})(this);