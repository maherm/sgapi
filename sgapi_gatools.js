/*
*	SteamGifts Userscript API
*	Giveaway Tools
*			
*/

SgApi.Plugins.register("Giveaway Tools", "0.1.1", function(){
	
	/**
	 * 
	 * Extension Module for SgApi.UI to get Giveaway-specific HTML elements.  
	 *
	 * @name CurrentGiveaway
	 * @memberof SgApi.Ui
	 * @static
	 * @declared in sgapi_gatools.js
	 */
	SgApi.Ui._registerModule("CurrentGiveaway", function(context) {
		var $ = context.$;
		return {
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get cpElement(){
				return $(".featured__heading__small").last();
			},
			
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get creatorElement(){
				return $(".featured__column.featured__column--width-fill.text-right a[href]");
			},
			
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get headerImageElement(){
				 return $(".global__image-outer-wrap.global__image-outer-wrap--game-large");
			},
			
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get startTimeElement(){
				return $(".featured__column.text-right span[data-timestamp]");
			},

			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get endTimeElement(){
				return $(".featured__column:first-child span[data-timestamp]");
			},
			
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get copiesElement(){
				return $(".featured__heading__small:contains(Copies)");
			},
			
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get contributorLevelElement(){
				return $('div.featured__column[title="Contributor Level"]');
			},

			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get whitelistElement(){
				return $(".featured__column.featured__column--whitelist");
			},
			
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get groupElement(){
				return $(".featured__column.featured__column--group");
			},
			
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get descriptionElement(){
				return $(".page__description .markdown.markdown--resize-body");
			},
			
			/**
			* 
			* @memberof SgApi.Ui.CurrentGiveaway
			* @return {jQuery}
			* @declared in sgapi_gatools.js
			*/
			get visibleButtonElement(){
				return $(".sidebar div:not(.is-hidden)").first();
			}
			
		};
	});

	/**
	 * 
	 * @name Giveaways
	 * @memberof SgApi
	 * @static
	 * @namespace
	 * @declared in sgapi_gatools.js
	 */
	SgApi.Giveaways = new function(){
		var self = this;
		var getGiveawayData = function(context){	
			context = context || new SgApi.Context();
			var util = SgApi.Util;
			if(!util.isGiveaway(context))
				return undefined;

			var ui = new SgApi.Ui(context);
			var sidebar = ui.Sidebar;
			
			ui = ui.CurrentGiveaway;
			
			function getSidebarCount(str){
				return SgApi.Util.parseInteger(sidebar.menuItemValueElement(str).text());
			}

			/**
			 * 
			 *  
			 *	Read-only representation of a giveaway.
			 *	Getters should be self-explanatory.  
			 *
			 *  @class Giveaway
			 *  @memberof SgApi.Giveaways
			 * @declared in sgapi_gatools.js
			 */
			return {
				
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {string}
				* @declared in sgapi_gatools.js
				*/
				get id() {
					return util.extractId(context.url);
				},
				
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {string}
				* @declared in sgapi_gatools.js
				*/
				get gameTitle(){
					var title = context.title;
					var urlParts = context.url.split("/");
					if(urlParts.length > 6) //If we are at a subpage, eg "/entries", we need to remove that appendix from the title
						title = title.substring(0, title.lastIndexOf("-"));
					return title;
				},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {int}
				* @declared in sgapi_gatools.js
				*/
				get cp(){
					var cpStr = ui.cpElement.text();
					return util.parseInteger(cpStr.substring(1, cpStr.length-2));
				},
				
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {string}
				* @declared in sgapi_gatools.js
				*/
				get steamUrl(){
					return ui.headerImageElement.attr("href");
				},
				
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {string}
				* @declared in sgapi_gatools.js
				*/
				get steamAppId(){
					return util.extractId(this.steamUrl);
				},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {int}
				* @declared in sgapi_gatools.js
				*/
				get copies(){
					var $copies = ui.copiesElement;
					if($copies.length > 0)
						return util.parseInteger($copies.text().match(/\(([0-9.,]+) Copies\)/)[1]);
					return 1;
				},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {int}
				* @declared in sgapi_gatools.js
				*/
				get contributorLevel(){
					var $level = context.$('div.featured__column[title="Contributor Level"]');
					if($level.length > 0)
						return +$level.text().match(/Level (\d+)\+/)[1];
					return 0;
				},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {string}
				* @declared in sgapi_gatools.js
				*/
				get url(){return context.url;},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {string}
				* @declared in sgapi_gatools.js
				*/
				get creator() {	return ui.creatorElement.text();},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {int}
				* @declared in sgapi_gatools.js
				*/
				get startTime(){return ui.startTimeElement.attr("data-timestamp");},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {int}
				* @declared in sgapi_gatools.js
				*/
				get endTime(){return ui.endTimeElement.attr("data-timestamp");},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {boolean}
				* @declared in sgapi_gatools.js
				*/
				get isWhitelist(){return ui.whitelistElement.length > 0;},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {boolean}
				* @declared in sgapi_gatools.js
				*/
				get isGroup(){return ui.groupElement.length > 0;},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {boolean}
				* @declared in sgapi_gatools.js
				*/
				get hasStarted(){return new Date().getTime() > this.startTime * 1000;},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {boolean}
				* @declared in sgapi_gatools.js
				*/
				get hasEnded(){return new Date().getTime() > this.endTime * 1000;},	
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {boolean}
				* @declared in sgapi_gatools.js
				*/		
				get isRunning(){return this.hasStarted && !this.hasEnded;},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {int}
				* @declared in sgapi_gatools.js
				*/
				get commentCount(){return getSidebarCount("Comments");},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {int}
				* @declared in sgapi_gatools.js
				*/
				get entryCount(){return getSidebarCount("Entries");},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {string}
				* @declared in sgapi_gatools.js
				*/
				get thumbUrl(){return SgApi.Util.getGameThumbUrl(this);},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {jQuery}
				* @declared in sgapi_gatools.js
				*/
				get descriptionHtml(){return ui.descriptionElement;},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {boolean}
				* @declared in sgapi_gatools.js
				*/
				get isOwned() {return ui.visibleButtonElement.text().indexOf("Exists in Account") === 1;},
				/**
				* 
				* @memberof SgApi.Giveaways.Giveaway
				* @return {boolean}
				* @declared in sgapi_gatools.js
				*/
				get isEntered() {return ui.visibleButtonElement.is(".sidebar__entry-delete");}

			};
		};

		/**
		 * 
		 * Loads a giveaway via ajax and passes it to the callback  
		 *
		 * @name loadGiveaway
		 * @memberof SgApi.Giveaways
		 * @param {string} idOrUrl a SG giveaway id or a complete url for the GA to fetch
		 * @param {function(Giveaway, Context)} callback the callback to notify on success
		 * @declared in sgapi_gatools.js
		 */
		this.loadGiveaway = function(idOrUrl, callback){
			if(idOrUrl === undefined){
				callback(self.currentGiveaway, new SgApi.Context());
				return self.currentGiveaway;
			}

			var url = SgApi.Util.buildGiveawayUrl(idOrUrl);

			$.ajax(url).done(function (data){
				var context = SgApi.Context.fromHtml(data, url);
				var gaInfo = getGiveawayData(context);
				callback(gaInfo, context);
			});
		};
		
		/**
		 * 
		 * Get the current giveaway. If the current page is no giveaway, the result is undefined  
		 *
		 * @name currentGiveaway
		 * @memberof SgApi.Giveaways
		 * @return {Giveaway|undefined} the current GA or undefined if the current page is no Giveaway
		 * @declared in sgapi_gatools.js
		 */
		this.currentGiveaway = function(){
			return getGiveawayData();
		}
	}();
});