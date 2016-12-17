## Module: Wishlist

**Module Name:** Wishlist  
**Examples:** [1](https://github.com/maherm/sgapi/tree/master/examples/giveaways.user.js)  
**Include Code:**  
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_wishlist.js
```

### Wishlist - Example
```javascript
// ==UserScript==
// @name         Mini Wishlist Example
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_gatools.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_wishlist.js
// @match        https://www.steamgifts.com/*
// ==/UserScript==

use(SgApi);
Wishlist.get(function(wishlist){
	var ga = Giveaways.currentGiveaway();
	if(wishlist.contains(ga)){
		var wishlistData = wishlist.get(ga);
		alert("You have this game wishlisted since "+new Date(wishlistData.since * 1000).toUTCString());
	}
});
```

### Wishlist - About

The Wishlist module lets you access your steam wishlist. It is most useful in combination with the "Giveaway Tools" plugin. It maintains a copy of your wishlist in the localStorage and synchs this cached copy automatically when SG syncs with Steam. 
Because a sync may happen, you need to get your wishlist asynchronously

### Wishlist - JsDoc 

<a name="SgApi"></a>

## SgApi : <code>object</code>
**Kind**: global namespace  

* [SgApi](#SgApi) : <code>object</code>
    * [.Wishlist](#SgApi.Wishlist)
        * [.WishlistContainer()](#SgApi.Wishlist.WishlistContainer)
            * [.this.contains](#SgApi.Wishlist.WishlistContainer.this.contains) ⇒ <code>boolean</code>
            * [.this.isWishlistedGame(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.isWishlistedGame) ⇒ <code>boolean</code>
            * [.this.get(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.get) ⇒ <code>object</code>
            * [.this.list()](#SgApi.Wishlist.WishlistContainer.this.list) ⇒ <code>Object</code>
        * [.this.get(callback, forceSync)](#SgApi.Wishlist.this.get)

<a name="SgApi.Wishlist"></a>

### SgApi.Wishlist
Namespace for the Wishlist Tools.

**Kind**: static property of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_wishlist.js  

* [.Wishlist](#SgApi.Wishlist)
    * [.WishlistContainer()](#SgApi.Wishlist.WishlistContainer)
        * [.this.contains](#SgApi.Wishlist.WishlistContainer.this.contains) ⇒ <code>boolean</code>
        * [.this.isWishlistedGame(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.isWishlistedGame) ⇒ <code>boolean</code>
        * [.this.get(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.get) ⇒ <code>object</code>
        * [.this.list()](#SgApi.Wishlist.WishlistContainer.this.list) ⇒ <code>Object</code>
    * [.this.get(callback, forceSync)](#SgApi.Wishlist.this.get)

<a name="SgApi.Wishlist.WishlistContainer"></a>

#### Wishlist.WishlistContainer()
Wishlist container

**Kind**: static method of <code>[Wishlist](#SgApi.Wishlist)</code>  
**Declared**: in sgapi_wishlist.js  

* [.WishlistContainer()](#SgApi.Wishlist.WishlistContainer)
    * [.this.contains](#SgApi.Wishlist.WishlistContainer.this.contains) ⇒ <code>boolean</code>
    * [.this.isWishlistedGame(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.isWishlistedGame) ⇒ <code>boolean</code>
    * [.this.get(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.get) ⇒ <code>object</code>
    * [.this.list()](#SgApi.Wishlist.WishlistContainer.this.list) ⇒ <code>Object</code>

<a name="SgApi.Wishlist.WishlistContainer.this.contains"></a>

##### WishlistContainer.this.contains ⇒ <code>boolean</code>
Alias for isWishlistedGame()

**Kind**: static property of <code>[WishlistContainer](#SgApi.Wishlist.WishlistContainer)</code>  
**Returns**: <code>boolean</code> - true, if the given game is on your wishlist  
**Declared**: in sgapi_wishlist.js  

| Param | Type | Description |
| --- | --- | --- |
| steamAppId | <code>string</code> &#124; <code>object</code> | the steam app id of the game to lookup or a Giveaway object that was returned by the SgApi Giveaway Tools. |

<a name="SgApi.Wishlist.WishlistContainer.this.isWishlistedGame"></a>

##### WishlistContainer.this.isWishlistedGame(steamAppId) ⇒ <code>boolean</code>
Check if a game is on your wishlist.

**Kind**: static method of <code>[WishlistContainer](#SgApi.Wishlist.WishlistContainer)</code>  
**Returns**: <code>boolean</code> - true, if the given game is on your wishlist  
**Declared**: in sgapi_wishlist.js  

| Param | Type | Description |
| --- | --- | --- |
| steamAppId | <code>string</code> &#124; <code>object</code> | the steam app id of the game to lookup or a Giveaway object that was returned by the SgApi Giveaway Tools. |

<a name="SgApi.Wishlist.WishlistContainer.this.get"></a>

##### WishlistContainer.this.get(steamAppId) ⇒ <code>object</code>
Get the wishlist entry for this game.

**Kind**: static method of <code>[WishlistContainer](#SgApi.Wishlist.WishlistContainer)</code>  
**Returns**: <code>object</code> - an object describing this giveaway entry  
**Declared**: in sgapi_wishlist.js  

| Param | Type | Description |
| --- | --- | --- |
| steamAppId | <code>string</code> &#124; <code>object</code> | the steam app id of the game to lookup or a Giveaway object that was returned by the SteamApi Giveaway Tools. |

<a name="SgApi.Wishlist.WishlistContainer.this.list"></a>

##### WishlistContainer.this.list() ⇒ <code>Object</code>
Get all Wishlist entries

**Kind**: static method of <code>[WishlistContainer](#SgApi.Wishlist.WishlistContainer)</code>  
**Returns**: <code>Object</code> - an object that has mapped the steamAppIds to their corresponding wishlist entries.  
**Declared**: in sgapi_wishlist.js  
<a name="SgApi.Wishlist.this.get"></a>

#### Wishlist.this.get(callback, forceSync)
Get your wishlist. Since the internally cached copy of your wishlist needs to be synched sometimes, this function requires a success callback. The cache is used globally for all Userscripts, so synching should happen only happen once every few days after SG synched your account with steam.

**Kind**: static method of <code>[Wishlist](#SgApi.Wishlist)</code>  
**Declared**: in sgapi_wishlist.js  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | success callback that is invoked with your wishlist as parameter. |
| forceSync | <code>boolean</code> | forces a synch of the internal cached wishlist. This is only relevant if somehow the cached version is corrupted, which hopefully won't ever happen. |

