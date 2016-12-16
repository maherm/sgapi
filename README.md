# The (unofficial) SteamGifts Userscript API

You may have noticed that there are quite some Userscripts around here to enhance your SteamGifts experience.
Most of them are listed in the great [SG Addon Registry](https://www.steamgifts.com/discussion/Zevqn/sg-add-ons-registry-list-of-all-scripts-for-sg) by Sighery.
I myself contributed some of them, and also wrote some scripts just for myself without releasing them.
I noticed that there are some basic things that many scripts need, and everybody goes and re-invents the wheel by implementing it for themselves. 
So I thought, it would be cool to have an API that handles all those basic stuff for you, that you can just @require. This way, the creative heads out there can focus on building cool addons without the need to rebuild the n-th version of "fetch this GA" or "check the wishlist". 
So I went ahead and took all my scripts, extracted the reusable parts of it and bundled it in the (unofficial) SG Userscript API. I built it in a modular way, so you can choose the plugins you need for your script without the need to include a bunch of code that you'll never use. I really hope that coders out there will transform their reusable code into SG API plugins, so that the API will be more and more complete over time. Any contribution is more than welcome! Just make a pull request on GitHub! Also if you are missing a feature, please don't just ask for it and hope I will eventually implement it - just go ahead and build it yourself! You're a coder! :-)

While developing, I focused on compatibility with Tampermonkey and Greasemonkey, as they are the most popular script managers. If there are any imcompatibilites with other script managers, let me know.

If you would like to build a plugin, have a look at (the Plugin Coding Guide)[LINK HERE] and check my Scripts 
Enough chitchat, let's cut to the chase.

# Quickstart

> Notice: This thread contains lots of code. It is recommended to install the "SG Syntax Highlighter" script before you continue.

Include this in your header:

```javascript
    // @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi.js
	// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_settings.js
	// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_gatools.js
	// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_wishlist.js
	// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_notifications.js
```

Now you can access SgApi using the ```SgApi``` object.

Read the "How to use" section and the Module descriptions below to learn more about SgApi and it's capabilities.
Check out the [Example Scripts]() to learn about the basic features or one of the scripts below to see SgApi in the wild:

| Author  | Script                    | Uses                   |
|---------|---------------------------|------------------------|
|mahermen | SG Syntax Highlight       | Util                   |
|mahermen | SG Bookmarks              | Util/Settings          |
|mahermen | SG AddIsThereAnyDeal Data | Util/Giveaway Tools    |
|mahermen | SG Mark Links             | UI                     |


# How to use

To use SgApi, you first need to @require the Core Module:
```javascript
    // @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi.js
```
	
If you want to use any plugins, e.g. the "Giveaway Tools", you need to require those, too. Plugins always only depend on the core module and never depend on each other, so you can mix them all you want, as long as you @require ```sgapi.js``` first.

```javascript
    // @require     https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi.js
	// @require     https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_gatools.js
```	

Make sure you NEVER require the head of a branch but ALWAYS use links to a specific version. 
This is necessary because the script managers download and cache a @required resource ONLY ONCE. Globally. Any changes to that resource after that won't be reflected in your script (or any other script requiring that URL). So always make sure you only @require static resources that will never change.

Once required, you can access any SgApi feature via the global SgApi object, e.g.

```javascript
// ==UserScript==
// @name        Test Api
// @require     https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi.js
// ==/UserScript==

SgApi.Util.requireCss("https://raw.githubusercontent.com/maherm/sgapi/master/examples/example.css");
```

The only exception is the use() function, which is not accessible via the SgApi object but from the global scope. You can use it to import functions from a namespace into you global namespace, like this:
 ```javascript
// ==UserScript==
// @name        Test Api
// @require     https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi.js
// ==/UserScript==
use(SgApi.Util);

//Now we can use anything from the SgApi.Util.* namespace
if(isGiveawayPage()) 
	requireCss("https://github.com/maherm/sgapi/master/raw/sgapi.css");
else if(isHomePage())
	requireCss("https://github.com/maherm/sgapi/master/raw/another.css");
```
# jQuery
I would have loved to integrate a method in SgApi that handles the jQuery integration, so that it "just works".
Unfortunately, I haven't found a "standard" way to expose jQuery for any SgApi user, since sometimes a side effect of one of the strategies may be wanted or unwanted by the script author.
The problem is, that Greasemonkey and Tampermonkey handle their sandboxing different, which causes compatibility problems between Firefox and Chrome. Usually, it works just fine in TM and is a pain in the ass in GM - also due to the fact that debugging in GM is nearly impossible.

These are the strategies known to me:

| Strategy        | Works in                  | Exposes                 | Notes and Side Effects                         | 
|-----------------|---------------------------|-------------------------|------------------------------------------------|
| -               | Tampermonkey              | SGs own jQuery instance | Tampermonkey is nice and always exposes jQuery | 
| @grant none     | Tampermonkey Greasemonkey | SGs own jQuery instance | Works only if no GM_* functions are granted    | 
| @require jquery | Tampermonkey Greasemonkey | A new jQuery instance   | No access to SGs own event handlers.           | 
| unsafeWindow.$  | Tampermonkey              | SGs own jQuery instance | Breaks on hooking to events in GM              | 

Long story short - if you don't want to hook into SGs own event callbacks, you can use this guide:

## Guide to use jQuery in Userscripts

* Do you need access to SGs own jQuery instance, e.g. to hook into some events?
	* Yes: try to get rid of all @grant statements to disable the sandbox
	* No: Do you have any @grant statements?
		* **Yes : @require jQuery in your script header** - this is the approach I prefer. Works everytime and you don't have to worry about using GM_* functions
		* No : You're fine, just use $

If somebody knows a way how to achieve a out-of-the-box solution - please let me know!

#Modules
In the following I will explain the currently existing modules and outline what you can do with it. 
To see the full documentation, just follow the links.

##Module Overview

* [**Core**](doc/CORE.md) (sgapi.js)
	- Core Code
	- Utils
	- Script Registry
	- DataStore
* [**Settings**](doc/SETTINGS.md) (sgapi_settings.js)
	- Maintain a Settings Page in the SG Account
* [**Giveaway Tools**](doc/GATOOLS.md) (sgapi_giveaways.js)
	- Read Giveaway Data
* [**Wishlist Tools**](doc/WISHLIST.md) (sgapi_wishlist.js)
	- Check if a game is wishlisted
* [**Notifications**](doc/NOTIFICATIONS.md) (sgapi_notifications.js)
	- Show notification messages

	
---
	
## Module: Core

**Module Name:** Core  
**Examples:** [](), [](), []()  
**Documentation:** [Github.io](https://maherm.github.io/sgapi/doc/CORE)  
**Include Code:**
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi.js 
```


### Core - Example
```@require sgapi.js```

### Core - Overview
>* SgApi : ```object``` 
>	* Util : ```object``` 
>        * this.parseBool(value) ⇒ ```boolean```
>        * this.buildGiveawayUrl(id) ⇒ ```string```
>        * this.buildDiscussionUrl(id) ⇒ ```string```
>        * this.getGameThumbUrl(steamAppId) ⇒ ```string```
>        * this.getCurrentUrl([context]) ⇒ ```string```
>        * this.isHomePage([context]) ⇒ ```boolean```
>        * this.isGiveaway([context]) ⇒ ```boolean```
>        * this.isDiscussion([context]) ⇒ ```boolean```
>        * this.isUser([context]) ⇒ ```boolean```
>        * this.getCurrentId([context]) ⇒ ```string```
>        * this.parseInteger(a) ⇒ ```number```
>        * this.extractId(url) ⇒ ```string```
>        * this.hashCode(str) ⇒ ```number```
>        * this.requireResourceCss(key)
>		 * this.requireDeclaredStyles()
>        * this.requireCss(cssUrl)
>        * this.injectCss(styles)
>        * this.enqueue(func)
>        * this.unwrap(obj)
>        * this.getDataStore(name)
>    * Ui
>        * new Ui([context])
>        * Sidebar
>            * sidebarElement ⇒ ```jQuery```
>            * menuGroupHeaderElement(title) ⇒ ```jQuery```
>            * menuGroupElement(title) ⇒ ```jQuery```
>            * menuItemValueElement(menuItem) ⇒ ```jQuery```
>            * menuItemElement(menuItem) ⇒ ```jQuery```
>        * Links
>            * allGiveawayLinks ⇒ ```Array.&lt;jQuery&gt;```
>            * giveawayLinksInMarkdown ⇒ ```Array.&lt;jQuery&gt;```
>            * linksInMarkdown([prefix]) ⇒ ```Array.&lt;jQuery&gt;```
>    * Context
>        * new Context([jQuery], [url], [title])
>        * fromHtml([html], [url])
>    * ScriptRegistry
>        * this.register()
>        * this.list() ⇒ ```Object```
>        * this.get(name) ⇒ ```Object```
>        * this.matches(name, version) ⇒ ```boolean```
>        * this.existsMin(name, version) ⇒ ```boolean```
>        * this.exists(name) ⇒ ```boolean```
>        * this.existsMax(name, version) ⇒ ```boolean```

### Core - About
The Core module is the glue holding together the API. It's mandatory to @require and must be @required before any plugin. It also provides the Util package, that helps with some common tasks. The most interesting function in Util at the moment is `requireCss()`. The function loads and injects a remote css file, so that you won't have to encode the css in multiline strings anymore.

```javascript
SgApi.Util.requireCss("https://www.server.com/css/default.css");
```

You can also include your css file as a @resource and inject in at runtime. The upside of this strategy is, that the css will be cached by your script manager and won't require an additional request every time. You'll need to @grant GM_getResourceText for this feature. But remember: resource caching is - just like @require caching - forever and won't reflect changes to your remote resource. So you always need to use a versioned url!
While developing, you can use @resource with a file:// url to your local css file. These changes will be recognized, since the script manager won't cache it.

```javascript
// @resource     myCssFile https://www.server.com/css/default-v1.2.3.css
// @grant        GM_getResourceText
// ==/UserScript==

 SgApi.Util.requireCss("myCssFile");
```

Additionally, the Core module maintains a Registry of all Userscripts that incorporate SgApi. Every script that @requires SgApi is automatically registered. So, if your script for example has compatibility issues with another script, you coud just do something like this (provided the other script uses SgApi, too):

```javascript
//We need to enqueue our script at the end, to make sure all userscripts are initialized and registered before we read the Registry
SgApi.Util.enqueue(function() {
    if(SgApi.ScriptRegistry.existsMin("SG Bookmarks", "2.0.1")){
        SgApi.Util.requireCss("https://www.server.com/css/sgbm_compat.css");
    }else{
        SgApi.Util.requireCss("https://www.server.com/css/default.css");
    }
	
    //You code here...
});
```


---


## Module: Settings

**Module Name:** Settings  
**Examples:** [](), [](), []()  
**Documentation:** [Github.io](https://maherm.github.io/sgapi/doc/SETTINGS)  
**Include Code:**
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_settings.js
```

### Settings - Example
```@require sgapi.js```

### Settings - Overview
>* SgApi : ```object``` 
>	* Settings
>        * new Settings(settings_name) ```SettingsBuilder```
>        * _instance_
>            * get(name) ⇒ ```object``` 
>            * set(name, value)
>            * deleteAll()
>        * _static_
>            * SettingsBuilder
>                * new SettingsBuilder()
>                * this.boolean(name, initialValue, [options])
>                * this.int(name, initialValue, [options])
>                * this.float(name, initialValue, [options])
>                * this.string(name, initialValue, [options])
>                * this.enum(name, [values], [initialValues], [options])
>                * this.func(name, func, [options])
>                * this.custom(name, divBuilder, [options])
>                * this.init([options]) ⇒ ```Settings```	

    

### Settings - About
When developing a script, there is always the point reached when the complexity of your script requires some configuration to stay flexible. 
Since there is no way to hook into SGs settings it is a rather big effort to include some basic configuration capabilities.
Many devs decided that the cost/benefit ratio for this small feature is unsatisfying and included their settings in global variables in their code, which is not a nice solution either. Most users don't want to be bothered with tampering with the code, and with every update these settings are overwritten.

The SgApi Settings module offers a lean interface to manage your settings and handles all the UI stuff for you. You just need to declare your settings once and SgApi integrates your Settings into the SG Account page. All Settings are integrated in the sidebar in the section "Userscripts".

```javascript
 var settings = new Settings("Test API")
		.boolean("A bool value"		, true)
        .boolean("Make trains"		, true	        , {description:"Automatically make a train when you win something", values: ["Never", "Always"]})
        .int    ("Minutes"			, 5		        , {minValue: 0, maxValue:15)
        .float  ("Ratio"			, 0.5	        , {minValue: 0, title: "Minimum Ratio")
        .string ("A string value"	, "Lorem ipsum" , {maxLength:11})
        .enum   ("Theme", ["Dark","Blue","Original"], 2)
		.func   ("Reset"            , function(){alert("Hell yea");})
    ;
    settings=settings.init({instantSubmit: true});
```
The last parameter in a setting declaration is always an options object, which is - hence the name - optional. Using these options you can tweak the Settings UI and behaviour to fit your needs. Basic options, that are available for most types of setting are ```description, visible, title,``` and ```editable``` . Most setting types have dedicated additional options, like minValue and maxValue for numbers. Like always, check the docs for a complete example and more details.

Once initialized, you can access your settings in your script using the get() function:

```javascript
    if(settings.get("Make trains")){
        console.log("I like turtles");
    }
```

Check [the docs]() for more details or just [install the example]() and play around a little bit. Don't forget that your script needs to @match /account/* for the settings to appear there.

By default, the settings are saved in the localStorage, so that no additional @grants are necessary. Keep in mind that localStorage can be accessed by any script on SteamGifts. So if you have sensitive data in your settings, e.g. an API key or something like that, it is highly recommended to initialize your Settings with the "useGmStorage" option. For that to work, you need to @grant GM_setValue, GM_getValue, and GM_deleteValue.

```javascript
settings = settings.init({useGmStorage:true});
```

Although it is possible to define a custom section for your Settings to reside in, for the sake of usability, it is not recommended. This way, the users don't have an unnecessarily cluttered sidebar and always know where to look if they want to change a setting from any Userscript.


---


## Module: Giveaway Tools

**Module Name:** Giveaway Tools  
**Examples:** [](), [](), []()  
**Documentation:** [Github.io](https://maherm.github.io/sgapi/doc/GATOOLS)  
**Include Code:**
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_gatools.js
```

### Giveaway Tools - Example
```@require sgapi.js```

### Giveaway Tools - Overview
> * SgApi : ```object``` 
>     * Giveaways : ```object``` 
>         * Giveaway
>             * id ⇒ ```string```
>             * gameTitle ⇒ ```string```
>             * cp ⇒ ```int```
>             * steamAppId ⇒ ```string```
>             * copies ⇒ ```int```
>             * contributorLevel ⇒ ```int```
>             * url ⇒ ```string```
>             * creator ⇒ ```string```
>             * startTime ⇒ ```int```
>             * endTime ⇒ ```int```
>             * isWhitelist ⇒ ```boolean```
>             * isGroup ⇒ ```boolean```
>             * hasStarted ⇒ ```boolean```
>             * hasEnded ⇒ ```boolean```
>             * isRunning ⇒ ```boolean```
>             * commentCount ⇒ ```int```
>             * entryCount ⇒ ```int```
>             * thumbUrl ⇒ ```string```
>             * descriptionHtml ⇒ ```jQuery```
>             * isOwned ⇒ ```boolean```
>             * isEntered ⇒ ```boolean```
>         * loadGiveaway(idOrUrl, callback)
>         * currentGiveaway ⇒ ```Giveaway```
>     * Ui
>         * CurrentGiveaway
>             * cpElement ⇒ ```jQuery```
>             * creatorElement ⇒ ```jQuery```
>             * headerImageElement ⇒ ```jQuery```
>             * startTimeElement ⇒ ```jQuery```
>             * endTimeElement ⇒ ```jQuery```
>             * copiesElement ⇒ ```jQuery```
>             * contributorLevelElement ⇒ ```jQuery```
>             * whitelistElement ⇒ ```jQuery```
>             * groupElement ⇒ ```jQuery```
>             * descriptionElement ⇒ ```jQuery```
>             * visibleButtonElement ⇒ ```jQuery```
    
### Giveaway Tools - About

The Giveaway Tools provide a handy interface to read Giveaway Data. It also extends the UI class, exposing the relevant jQuery queries. Currently, this module is read-only, meaning it does not provide any auto-enter features. The usage and 

---


## Module: Wishlist

**Module Name:** Wishlist  
**Examples:** [](), [](), []()  
**Documentation:** [Github.io](https://maherm.github.io/sgapi/doc/WISHLIST)  
**Include Code:**  
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_wishlist.js
```

### Wishlist - Example
```@require sgapi.js```

### Wishlist - Overview
> * SgApi : ```object``` 
> 	 * Wishlist
>         * WishlistContainer
>             * this.contains(steamAppId) ⇒ ```boolean```
>             * this.isWishlistedGame(steamAppId) ⇒ ```boolean```
>             * this.get(steamAppId) ⇒ ```object```
>             * this.list() ⇒ ```Object```
>         * this.get(callback, forceSync)

### Wishlist - About

The Wishlist module lets you access your steam wishlist. It is most useful in combination with the "Giveaway Tools" plugin. It maintains a copy of your wishlist in the localStorage and synchs this cached copy automatically when SG syncs with Steam. 
Because a sync may happen, you need to get your wishlist asynchronously


---


## Module: Notifications
**Module Name:** Notifications  
**Examples:** [](), [](), []()  
**Documentation:** [Github.io](https://maherm.github.io/sgapi/doc/NOTIFICATIONS)  
**Include Code:**  
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi_notifications.js
```

### Notifications - Example
```@require sgapi.js```

### Notifications - Overview
>* SgApi : ```object``` 
>    * Notifications : ```object```
>        * this.notify(type, $content, [opt])

### Notifications - About
The Notifications module lets you show messages to you users. They will be displayed at the top of the content div and look just like [Bootstrap Alerts](https://v4-alpha.getbootstrap.com/components/alerts/).
There can be always only one ~~Highlander~~ notification displayed. All other Notifications are queued and displayed when the previous one has been disposed.
