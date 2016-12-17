// ==UserScript==
// @name         SgApi Giveaway Tools Example
// @namespace    https://github.com/maherm/sgapi/
// @version      0.4
// @author       mahermen
// @downloadURL  https://raw.githubusercontent.com/maherm/sgapi/master/examples/registry.user.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_gatools.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_wishlist.js
// @match        https://www.steamgifts.com/*
// @grant none
// ==/UserScript==

use(SgApi);
use(SgApi.Util);

Wishlist.get(function(wishlist){
    if(isGiveaway()){
        var ga = Giveaways.currentGiveaway();
        console.log(unwrap(ga));
        var id = ga.steamAppId;
        if(wishlist.contains(id)){
			var wishlistData = wishlist.get(id);
			alert("You have this game wishlisted since "+new Date(wishlistData.since * 1000).toUTCString());
            console.log();
		}
    }
});

//You can also load other Giveways than the current page
Giveaways.loadGiveaway("34qu2", function(ga){
	console.log(
		"The first GA ever on Steamgifts was '"+ga.gameTitle+"'. "+
		"It was created on "+new Date(ga.startTime*1000).toUTCString()+
		" and got "+ga.entryCount+" entries"
	);
});
