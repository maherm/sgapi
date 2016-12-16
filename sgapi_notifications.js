/*
*	SteamGifts Userscript API
*	Notifications
*			
*/

SgApi.Plugins.register("Notifications", "0.1.0", function(){
	/**
	 * 
	 *  @name Notifications
	 *  @namespace
	 *  @static
	 *  @memberof SgApi
	 *  @declared in sgapi_notifications.js
	 */
	SgApi.Notifications = new function(){
		var notification_queue = [];
		var self = this;
		/**
		 * 
		 * Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.
		 *  @memberof SgApi.Notifications
		 *  @param {string} type one of "info", "success", "warning", "danger", "none"
		 *  @param {jQuery|string} $content a jQuery object or a string holding the HTML content to add
		 *  @param {Object} [opt] options
		 *  @param {boolean} [opt.closable=true] indicates whether the notification should be closable by the user via the "x"
		 *  @param {boolean} [opt.noQueue=false] if set, the notification will only be shown if there is no other active notification
		 *  @param {boolean} [opt.key=undefined] if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script.
		 *  @param {boolean} [opt.duration=0] if duration is >0, the notification will auto-close after that amount of milliseconds. 
		 * 
		 *  @example
		 * //This Notification will be displayed everytime until the user disposes it by clicking the "x"
		* Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});
		* //This notification will auto-close after 10 seconds
		* Notifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
		 * @declared in sgapi_notifications.js
		 */
		this.notify = function (type, $content, opt){
			var n = createNotification(type, $content);
			queueNotification(undefined, n, opt);
		}

		/**
		 * 
		 * @memberof SgApi.Notifications
		 * @private
		 * @declared in sgapi_notifications.js
		 */
		var createNotification = function (type, $content){
		 if(!($content instanceof jQuery))
			 $content = $("<span>"+$content+"</span>");
		 else
			 $content = $("<span>").append($content);
		  var $result = $("<div>").addClass("sgapi__alert").addClass("alert alert-"+type).append($content);
		  return $result;
		};
		
		function read(key){
			try{
				return JSON.parse(localStorage[key]);
			}catch(err){
				return undefined;
			}
		};

		/**
		 * 
		 * @memberof SgApi.Notifications
		 * @private
		 * @declared in sgapi_notifications.js
		 */
		var queueNotification = function(name, $html, opt){
			name = name || (opt && opt.key);
			if(name){
				var db_name = "notification_"+GM_info.script.name+"_"+name;
				var savedData = read(db_name);;
			}
			var options = $.extend({showAlways: false, closable: true, storageKey: db_name, noQueue: false, duration: 0}, opt);
			if(options.showAlways || savedData === undefined || savedData.dismissed === false){
				if($(".sgapi__alert").length === 0){
					showNotification($html, options);
				}else if(!options.noQueue){
					notification_queue.push({$html: $html, options: options});
				}
			}
		};

	
		function showNextNotification(){
			var queued = notification_queue.pop();
			if(queued !== undefined){
				showNotification(queued.$html, queued.options);
			}
		}
				
		function markNotificationAsDismissed(options){
		 if(!options.showAlways){
			 var val =read(options.storageKey) || {};
			 val.dimissed = true;
			 localStorage[options.storageKey] = JSON.stringify(val);
		 }
		}	
		
		function showNotification($html, options){
			var close = function(dontShowAgain){
				$html.slideUp().queue(function(){$html.remove();});
				if(dontShowAgain && options.storageKey)
					markNotificationAsDismissed(options);
				showNextNotification();
			};
			if(options.closable === true){
				var $button = $("<i class='fa fa-remove sgapi_button'></i>");
				$html.prepend($button.wrap("<div class='sgapi_button_wrapper'>").parent());
				$button.click(close.bind(undefined, true));
			}
			
			if(options.duration){
				setTimeout(close.bind(undefined, false), options.duration);
			}

			$html.hide();
			$(".sidebar").next("div").prepend($html);
			$html.slideDown();
		}
		
		
		
		SgApi.Util.injectCss("\
		.alert { \
		padding: 15px; \
		margin-bottom: 20px; \
		border: 1px solid; \
		border-radius: 4px; \
		} \
		 \
		.alert-danger { \
			color: #a94442; \
			background-color: #f2dede; \
			border-color: rgba(235,204,209,0.6); \
		} \
		 \
		.alert-warning { \
			color: #8a6d3b; \
			background-color: #fcf8e3; \
			border-color: rgba(250,235,204,0.6); \
		} \
		 \
		.alert-info { \
			color: #31708f; \
			background-color: #d9edf7; \
			border-color: rgba(188,232,241,0.6); \
		} \
		 \
		.alert-success { \
			color: #3c763d; \
			background-color: #dff0d8; \
			border-color: rgba(214,233,198,0.6); \
		} \
		 \
		.sgapi__alert .fa.sgapi_button { \
			color: lightgray; \
			cursor: pointer; \
			float: right; \
		} \
		 \
		.sgapi__alert.alert-danger .fa.sgapi_button { \
			color: #C88484; \
			 \
		}\
		.sgapi__alert>div.sgapi_button_wrapper {\
			height: 0;\
			margin: 0;\
			padding: 0;\
			text-align: right;\
		}\
		"
		);
	}();
});