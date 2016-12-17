## Module: Giveaway Tools

**Module Name:** Giveaway Tools  
**Examples:** [1](https://github.com/maherm/sgapi/tree/master/examples/giveaways.user.js) 
**Include Code:**
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_gatools.js
```

### Giveaway Tools - Example
```javascript
// ==UserScript==
// @name         Mini Giveaway Tools Example
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_gatools.js
// @match        https://www.steamgifts.com/*
// ==/UserScript==

use(SgApi);
use(SgApi.Util);
var ga = Giveaways.currentGiveaway();
console.log(unwrap(ga));
console.log("You are looking at a Giveaway for '"+ga.gameTitle+"'. It was created on "+new Date(ga.startTime*1000).toUTCString()+" and got "+ga.entryCount+" entries" +(ga.isRunning?" so far" :""));
```

### Giveaway Tools - About

The Giveaway Tools provide a handy interface to read Giveaway Data. It also extends the UI class, exposing the relevant jQuery queries. Currently, this module is read-only, meaning it does not provide any auto-enter features.

### Giveaway Tools - JsDoc

<a name="SgApi"></a>

## SgApi : <code>object</code>
**Kind**: global namespace  

* [SgApi](#SgApi) : <code>object</code>
    * [.Giveaways](#SgApi.Giveaways) : <code>object</code>
        * [.Giveaway](#SgApi.Giveaways.Giveaway)
            * [new Giveaway()](#new_SgApi.Giveaways.Giveaway_new)
            * [.id](#SgApi.Giveaways.Giveaway.id) ⇒ <code>string</code>
            * [.gameTitle](#SgApi.Giveaways.Giveaway.gameTitle) ⇒ <code>string</code>
            * [.cp](#SgApi.Giveaways.Giveaway.cp) ⇒ <code>int</code>
            * [.steamUrl](#SgApi.Giveaways.Giveaway.steamUrl) ⇒ <code>string</code>
            * [.steamAppId](#SgApi.Giveaways.Giveaway.steamAppId) ⇒ <code>string</code>
            * [.copies](#SgApi.Giveaways.Giveaway.copies) ⇒ <code>int</code>
            * [.contributorLevel](#SgApi.Giveaways.Giveaway.contributorLevel) ⇒ <code>int</code>
            * [.url](#SgApi.Giveaways.Giveaway.url) ⇒ <code>string</code>
            * [.creator](#SgApi.Giveaways.Giveaway.creator) ⇒ <code>string</code>
            * [.startTime](#SgApi.Giveaways.Giveaway.startTime) ⇒ <code>int</code>
            * [.endTime](#SgApi.Giveaways.Giveaway.endTime) ⇒ <code>int</code>
            * [.isWhitelist](#SgApi.Giveaways.Giveaway.isWhitelist) ⇒ <code>boolean</code>
            * [.isGroup](#SgApi.Giveaways.Giveaway.isGroup) ⇒ <code>boolean</code>
            * [.hasStarted](#SgApi.Giveaways.Giveaway.hasStarted) ⇒ <code>boolean</code>
            * [.hasEnded](#SgApi.Giveaways.Giveaway.hasEnded) ⇒ <code>boolean</code>
            * [.isRunning](#SgApi.Giveaways.Giveaway.isRunning) ⇒ <code>boolean</code>
            * [.commentCount](#SgApi.Giveaways.Giveaway.commentCount) ⇒ <code>int</code>
            * [.entryCount](#SgApi.Giveaways.Giveaway.entryCount) ⇒ <code>int</code>
            * [.thumbUrl](#SgApi.Giveaways.Giveaway.thumbUrl) ⇒ <code>string</code>
            * [.descriptionHtml](#SgApi.Giveaways.Giveaway.descriptionHtml) ⇒ <code>jQuery</code>
            * [.isOwned](#SgApi.Giveaways.Giveaway.isOwned) ⇒ <code>boolean</code>
            * [.isEntered](#SgApi.Giveaways.Giveaway.isEntered) ⇒ <code>boolean</code>
        * [.loadGiveaway](#SgApi.Giveaways.loadGiveaway)
        * [.currentGiveaway](#SgApi.Giveaways.currentGiveaway) ⇒ <code>Giveaway</code> &#124; <code>undefined</code>

<a name="SgApi.Giveaways"></a>

### SgApi.Giveaways : <code>object</code>
**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_gatools.js  

* [.Giveaways](#SgApi.Giveaways) : <code>object</code>
    * [.Giveaway](#SgApi.Giveaways.Giveaway)
        * [new Giveaway()](#new_SgApi.Giveaways.Giveaway_new)
        * [.id](#SgApi.Giveaways.Giveaway.id) ⇒ <code>string</code>
        * [.gameTitle](#SgApi.Giveaways.Giveaway.gameTitle) ⇒ <code>string</code>
        * [.cp](#SgApi.Giveaways.Giveaway.cp) ⇒ <code>int</code>
        * [.steamUrl](#SgApi.Giveaways.Giveaway.steamUrl) ⇒ <code>string</code>
        * [.steamAppId](#SgApi.Giveaways.Giveaway.steamAppId) ⇒ <code>string</code>
        * [.copies](#SgApi.Giveaways.Giveaway.copies) ⇒ <code>int</code>
        * [.contributorLevel](#SgApi.Giveaways.Giveaway.contributorLevel) ⇒ <code>int</code>
        * [.url](#SgApi.Giveaways.Giveaway.url) ⇒ <code>string</code>
        * [.creator](#SgApi.Giveaways.Giveaway.creator) ⇒ <code>string</code>
        * [.startTime](#SgApi.Giveaways.Giveaway.startTime) ⇒ <code>int</code>
        * [.endTime](#SgApi.Giveaways.Giveaway.endTime) ⇒ <code>int</code>
        * [.isWhitelist](#SgApi.Giveaways.Giveaway.isWhitelist) ⇒ <code>boolean</code>
        * [.isGroup](#SgApi.Giveaways.Giveaway.isGroup) ⇒ <code>boolean</code>
        * [.hasStarted](#SgApi.Giveaways.Giveaway.hasStarted) ⇒ <code>boolean</code>
        * [.hasEnded](#SgApi.Giveaways.Giveaway.hasEnded) ⇒ <code>boolean</code>
        * [.isRunning](#SgApi.Giveaways.Giveaway.isRunning) ⇒ <code>boolean</code>
        * [.commentCount](#SgApi.Giveaways.Giveaway.commentCount) ⇒ <code>int</code>
        * [.entryCount](#SgApi.Giveaways.Giveaway.entryCount) ⇒ <code>int</code>
        * [.thumbUrl](#SgApi.Giveaways.Giveaway.thumbUrl) ⇒ <code>string</code>
        * [.descriptionHtml](#SgApi.Giveaways.Giveaway.descriptionHtml) ⇒ <code>jQuery</code>
        * [.isOwned](#SgApi.Giveaways.Giveaway.isOwned) ⇒ <code>boolean</code>
        * [.isEntered](#SgApi.Giveaways.Giveaway.isEntered) ⇒ <code>boolean</code>
    * [.loadGiveaway](#SgApi.Giveaways.loadGiveaway)
    * [.currentGiveaway](#SgApi.Giveaways.currentGiveaway) ⇒ <code>Giveaway</code> &#124; <code>undefined</code>

<a name="SgApi.Giveaways.Giveaway"></a>

#### Giveaways.Giveaway
**Kind**: static class of <code>[Giveaways](#SgApi.Giveaways)</code>  
**Declared**: in sgapi_gatools.js  

* [.Giveaway](#SgApi.Giveaways.Giveaway)
    * [new Giveaway()](#new_SgApi.Giveaways.Giveaway_new)
    * [.id](#SgApi.Giveaways.Giveaway.id) ⇒ <code>string</code>
    * [.gameTitle](#SgApi.Giveaways.Giveaway.gameTitle) ⇒ <code>string</code>
    * [.cp](#SgApi.Giveaways.Giveaway.cp) ⇒ <code>int</code>
    * [.steamUrl](#SgApi.Giveaways.Giveaway.steamUrl) ⇒ <code>string</code>
    * [.steamAppId](#SgApi.Giveaways.Giveaway.steamAppId) ⇒ <code>string</code>
    * [.copies](#SgApi.Giveaways.Giveaway.copies) ⇒ <code>int</code>
    * [.contributorLevel](#SgApi.Giveaways.Giveaway.contributorLevel) ⇒ <code>int</code>
    * [.url](#SgApi.Giveaways.Giveaway.url) ⇒ <code>string</code>
    * [.creator](#SgApi.Giveaways.Giveaway.creator) ⇒ <code>string</code>
    * [.startTime](#SgApi.Giveaways.Giveaway.startTime) ⇒ <code>int</code>
    * [.endTime](#SgApi.Giveaways.Giveaway.endTime) ⇒ <code>int</code>
    * [.isWhitelist](#SgApi.Giveaways.Giveaway.isWhitelist) ⇒ <code>boolean</code>
    * [.isGroup](#SgApi.Giveaways.Giveaway.isGroup) ⇒ <code>boolean</code>
    * [.hasStarted](#SgApi.Giveaways.Giveaway.hasStarted) ⇒ <code>boolean</code>
    * [.hasEnded](#SgApi.Giveaways.Giveaway.hasEnded) ⇒ <code>boolean</code>
    * [.isRunning](#SgApi.Giveaways.Giveaway.isRunning) ⇒ <code>boolean</code>
    * [.commentCount](#SgApi.Giveaways.Giveaway.commentCount) ⇒ <code>int</code>
    * [.entryCount](#SgApi.Giveaways.Giveaway.entryCount) ⇒ <code>int</code>
    * [.thumbUrl](#SgApi.Giveaways.Giveaway.thumbUrl) ⇒ <code>string</code>
    * [.descriptionHtml](#SgApi.Giveaways.Giveaway.descriptionHtml) ⇒ <code>jQuery</code>
    * [.isOwned](#SgApi.Giveaways.Giveaway.isOwned) ⇒ <code>boolean</code>
    * [.isEntered](#SgApi.Giveaways.Giveaway.isEntered) ⇒ <code>boolean</code>

<a name="new_SgApi.Giveaways.Giveaway_new"></a>

##### new Giveaway()
Read-only representation of a giveaway.	Getters should be self-explanatory.

<a name="SgApi.Giveaways.Giveaway.id"></a>

##### Giveaway.id ⇒ <code>string</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.gameTitle"></a>

##### Giveaway.gameTitle ⇒ <code>string</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.cp"></a>

##### Giveaway.cp ⇒ <code>int</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.steamUrl"></a>

##### Giveaway.steamUrl ⇒ <code>string</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.steamAppId"></a>

##### Giveaway.steamAppId ⇒ <code>string</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.copies"></a>

##### Giveaway.copies ⇒ <code>int</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.contributorLevel"></a>

##### Giveaway.contributorLevel ⇒ <code>int</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.url"></a>

##### Giveaway.url ⇒ <code>string</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.creator"></a>

##### Giveaway.creator ⇒ <code>string</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.startTime"></a>

##### Giveaway.startTime ⇒ <code>int</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.endTime"></a>

##### Giveaway.endTime ⇒ <code>int</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.isWhitelist"></a>

##### Giveaway.isWhitelist ⇒ <code>boolean</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.isGroup"></a>

##### Giveaway.isGroup ⇒ <code>boolean</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.hasStarted"></a>

##### Giveaway.hasStarted ⇒ <code>boolean</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.hasEnded"></a>

##### Giveaway.hasEnded ⇒ <code>boolean</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.isRunning"></a>

##### Giveaway.isRunning ⇒ <code>boolean</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.commentCount"></a>

##### Giveaway.commentCount ⇒ <code>int</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.entryCount"></a>

##### Giveaway.entryCount ⇒ <code>int</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.thumbUrl"></a>

##### Giveaway.thumbUrl ⇒ <code>string</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.descriptionHtml"></a>

##### Giveaway.descriptionHtml ⇒ <code>jQuery</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.isOwned"></a>

##### Giveaway.isOwned ⇒ <code>boolean</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.Giveaway.isEntered"></a>

##### Giveaway.isEntered ⇒ <code>boolean</code>
**Kind**: static property of <code>[Giveaway](#SgApi.Giveaways.Giveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Giveaways.loadGiveaway"></a>

#### Giveaways.loadGiveaway
Loads a giveaway via ajax and passes it to the callback

**Kind**: static property of <code>[Giveaways](#SgApi.Giveaways)</code>  
**Declared**: in sgapi_gatools.js  

| Param | Type | Description |
| --- | --- | --- |
| idOrUrl | <code>string</code> | a SG giveaway id or a complete url for the GA to fetch |
| callback | <code>function</code> | the callback to notify on success |

<a name="SgApi.Giveaways.currentGiveaway"></a>

#### Giveaways.currentGiveaway ⇒ <code>Giveaway</code> &#124; <code>undefined</code>
Get the current giveaway. If the current page is no giveaway, the result is undefined

**Kind**: static property of <code>[Giveaways](#SgApi.Giveaways)</code>  
**Returns**: <code>Giveaway</code> &#124; <code>undefined</code> - the current GA or undefined if the current page is no Giveaway  
**Declared**: in sgapi_gatools.js  
