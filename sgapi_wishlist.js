/*
*	SteamGifts Userscript API
*	Wishlist Tools
*	v 1.0
*			
*/

SgApi.Plugins.register("Wishlist Tools", "0.1.1", function(){
	/**
	 * 
	 *  Namespace for the Wishlist Tools.
	 * 
	 *  @name Wishlist
	 *  @static
	 *  @memberof SgApi
	 *  @declared in sgapi_wishlist.js
	 */
	SgApi.Wishlist = new function(){
		
		/**
		 * 
		 *  Wishlist container
		 *  @memberof SgApi.Wishlist
		 *  @declared in sgapi_wishlist.js
		 */
		var WishlistContainer = function(list){
			var self = this;
			
			/**
			 * 
			 *	Check if a game is on your wishlist.  
			 *
			 *  @memberof SgApi.Wishlist.WishlistContainer
			 *  
			 *  @param {string|object} steamAppId the steam app id of the game to lookup or a Giveaway object that was returned by the SgApi Giveaway Tools.
			 *  @return {boolean} true, if the given game is on your wishlist
			 *  @declared in sgapi_wishlist.js
			 */
			this.isWishlistedGame = function(steamAppId) {
				if(!steamAppId){
					return undefined;
				}
				if(steamAppId.steamAppId) //a ga-object was passed
					steamAppId = steamAppId.steamAppId;
				
				return self.get(steamAppId) !== undefined;
			};
			
			/**
			 * 
			 *  Alias for isWishlistedGame()
			 *  
			 *  @memberof SgApi.Wishlist.WishlistContainer
			 *  
			 *  @param {string|object} steamAppId the steam app id of the game to lookup or a Giveaway object that was returned by the SgApi Giveaway Tools.
			 *  @return {boolean} true, if the given game is on your wishlist
			 *  @declared in sgapi_wishlist.js
			 */
			this.contains = this.isWishlistedGame;
			
			/**
			 * 
			 *  Get the wishlist entry for this game.
			 *  
			 *  @memberof SgApi.Wishlist.WishlistContainer
			 *  
			 *  @param {string|object} steamAppId the steam app id of the game to lookup or a Giveaway object that was returned by the SteamApi Giveaway Tools.
			 *  @return {object} an object describing this giveaway entry
			 *  @declared in sgapi_wishlist.js
			 */
			this.get = function(steamAppId){
				if(!steamAppId)
					return undefined;
				if(steamAppId.steamAppId) //a ga-object was passed
					steamAppId = steamAppId.steamAppId;
				return list[steamAppId];
			};
			
			/**
			 * 
			 * Get all Wishlist entries 
			 *
			 * @memberof SgApi.Wishlist.WishlistContainer
			 *
			 *  @return {Object} an object that has mapped the steamAppIds to their corresponding wishlist entries.
			 *  @declared in sgapi_wishlist.js
			 */
			this.list = function(){
				return list;
			}
		}
		
		function getLastSyncedValue(){
			return $(".nav__absolute-dropdown .nav__row__summary__description:contains(Last synced) span[data-timestamp]").attr("data-timestamp");
		}
		
		function needsSyncing(){
			var savedVal = localStorage["sgapi__wishlist_lastSynced"] || "never";
			var actualVal = getLastSyncedValue();

			return savedVal !== actualVal;
		}
		
		function syncWishlist(){
			var promise = $.Deferred();
			$.ajax("//www.steamgifts.com/account/steam/wishlist").done(function(data){

				var $data = $(data);
				var numPages = Math.max.apply(null,$data.find(".pagination__navigation a[data-page-number]").map(function(){return parseInt(this.getAttribute("data-page-number"));}).get());
				var wishlist = {};
				var appendWishlistGames = function(data){
					var $data = $(data);
					$data.find(".table__row-inner-wrap").map(function(){
						var $row =$(this);
						var url = $row.find(" .table__column__secondary-link").attr("href");
						var id = SgApi.Util.extractId(url);
						var name = $row.find(".table__column__heading").text();
						var since = $row.find(".table__column--width-small:has(span[data-timestamp]) span[data-timestamp]").attr("data-timestamp");
						wishlist[id.toString()] = {url: url, appId: id, name: name, since:since };
					});
				};
				appendWishlistGames(data);
				var dfds = [];
				for(var i=2; i<=numPages; i++){
					 dfds.push($.ajax("//www.steamgifts.com/account/steam/wishlist/search?page="+i).done(appendWishlistGames));
				}
				$.when.apply($, dfds).fail(promise.reject).done(function(){
					localStorage["sgapi__wishlist"] = JSON.stringify(wishlist);
					localStorage["sgapi__wishlist_lastSynced"] = getLastSyncedValue();
					console.log("Wishlist synced successfully. Found "+Object.keys(wishlist).length+" games");
					promise.resolve(new WishlistContainer(wishlist));
				});
			}).fail(promise.reject);
			return promise;
		}
		
		function readWishlist(){
			return new WishlistContainer(JSON.parse(localStorage["sgapi__wishlist"] || "{}"));
		}
		

		/**
		 * 
		 * Get your wishlist. Since the internally cached copy of your wishlist needs to be synched sometimes, this function requires a success callback. The cache is used globally for all Userscripts, so synching should happen only happen once every few days after SG synched your account with steam.
		 * @memberof SgApi.Wishlist
		 * @param {function(WishlistContainer)} callback success callback that is invoked with your wishlist as parameter.
		 * @param {boolean} forceSync forces a synch of the internal cached wishlist. This is only relevant if somehow the cached version is corrupted, which hopefully won't ever happen.
		 *  @declared in sgapi_wishlist.js
		 */
		this.get = function(callback, forceSync){
			if(forceSync || needsSyncing()){
				console.log("Start syncing wishlist");
				syncWishlist().then(callback);
			}else{
				callback(readWishlist());
			}
		};
	}();
});