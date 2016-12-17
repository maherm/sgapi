## Module: Core

**Module Name:** Core  
**Examples:** [1](https://github.com/maherm/sgapi/blob/master/examples/registry.user.js), [2](https://github.com/maherm/sgapi/blob/master/examples/require.user.js) 
**Documentation:** [Github](https://github.com/maherm/sgapi/tree/master/doc/CORE.md)  
**Include Code:**
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi.js 
```

### Core - Example
```javascript
// ==UserScript==
// @name         Mini Example Core
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi.js
// @resource     css https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/examples/example.css
// @match        https://www.steamgifts.com/*
// ==/UserScript==

use(SgApi.Util);
requireCss('css');
```

### Core - About
The Core module is the glue holding together the API. It's mandatory to @require and must be @required before any plugin. It also provides the Util package, that helps with some common tasks. The most interesting function in Util at the moment is `requireCss()`. The function links a remote css file, so that you won't have to encode the css in multiline strings anymore.

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

Please note that you can not link files from raw.githubusercontent.com by providing an URL to requireCss(), because GitHub prevents this by setting the 'nosniff' header. You can, however, replace 'raw.githubusercontent.com' in your URL string by 'rawgit.com'. Rawgit.com is a service that removes this header. Note that rawgit is a service on it's own and not afiliated with GitHub. Check https://github.com/rgrove/rawgit/wiki/Frequently-Asked-Questions for more details. For embedding CSS from your resources, you CAN use raw.githubusercontent.com, because in this case the code is embedded in the page (<style>[code]</style>) instead of linked (<link src='url'>).


Another interesting feature of the Core module is that it maintains a Registry of all Userscripts in the current page impression that incorporate SgApi. Every script that @requires SgApi is automatically registered. So, if your script for example has compatibility issues with another script, you could just do something like this (provided the other script uses SgApi, too):

```javascript
if(SgApi.ScriptRegistry.existsMin("SgApi RequireCss Example", "0.1")){
	console.log("Uuugh, that's ugly. Let me fix that for you :-)");
	SgApi.Util.requireCss("fix_require_example");
}else{
	console.log("You're good, nothing to fix!");
}
});
```

## Core: JsDoc

<a name="SgApi"></a>

## .SgApi : <code>object</code>
**Kind**: static namespace  
**Declared**: in sgapi.js  

* [.SgApi](#SgApi) : <code>object</code>
    * [.Ui](#SgApi.Ui)
        * [new Ui([context])](#new_SgApi.Ui_new)
        * [.Sidebar](#SgApi.Ui.Sidebar)
            * [.sidebarElement](#SgApi.Ui.Sidebar.sidebarElement) ⇒ <code>jQuery</code>
            * [.menuGroupHeaderElement(title)](#SgApi.Ui.Sidebar.menuGroupHeaderElement) ⇒ <code>jQuery</code>
            * [.menuGroupElement(title)](#SgApi.Ui.Sidebar.menuGroupElement) ⇒ <code>jQuery</code>
            * [.menuItemValueElement(menuItem)](#SgApi.Ui.Sidebar.menuItemValueElement) ⇒ <code>jQuery</code>
            * [.menuItemElement(menuItem)](#SgApi.Ui.Sidebar.menuItemElement) ⇒ <code>jQuery</code>
        * [.Links](#SgApi.Ui.Links)
            * [.allGiveawayLinks](#SgApi.Ui.Links.allGiveawayLinks) ⇒ <code>Array.&lt;jQuery&gt;</code>
            * [.giveawayLinksInMarkdown](#SgApi.Ui.Links.giveawayLinksInMarkdown) ⇒ <code>Array.&lt;jQuery&gt;</code>
            * [.linksInMarkdown([prefix])](#SgApi.Ui.Links.linksInMarkdown) ⇒ <code>Array.&lt;jQuery&gt;</code>
        * [._registerModule(modName, constFunc)](#SgApi.Ui._registerModule)
    * [.Context](#SgApi.Context)
        * [new Context([jQuery], [url], [title])](#new_SgApi.Context_new)
        * [.fromHtml([html], [url])](#SgApi.Context.fromHtml)
    * [.ScriptRegistry](#SgApi.ScriptRegistry)
        * [.this.register()](#SgApi.ScriptRegistry.this.register)
        * [.this.list()](#SgApi.ScriptRegistry.this.list) ⇒ <code>Object</code>
        * [.this.get(name)](#SgApi.ScriptRegistry.this.get) ⇒ <code>Object</code>
        * [.this.matches(name, version)](#SgApi.ScriptRegistry.this.matches) ⇒ <code>boolean</code>
        * [.this.existsMin(name, version)](#SgApi.ScriptRegistry.this.existsMin) ⇒ <code>boolean</code>
        * [.this.exists(name)](#SgApi.ScriptRegistry.this.exists) ⇒ <code>boolean</code>
        * [.this.existsMax(name, version)](#SgApi.ScriptRegistry.this.existsMax) ⇒ <code>boolean</code>
        * [.this.onRegister(callback)](#SgApi.ScriptRegistry.this.onRegister)
    * [.Util](#SgApi.Util) : <code>object</code>
        * [.this.parseBool(value)](#SgApi.Util.this.parseBool) ⇒ <code>boolean</code>
        * [.this.buildGiveawayUrl(id)](#SgApi.Util.this.buildGiveawayUrl) ⇒ <code>string</code>
        * [.this.buildDiscussionUrl(id)](#SgApi.Util.this.buildDiscussionUrl) ⇒ <code>string</code>
        * [.this.getAppOrSub(urlOrGa)](#SgApi.Util.this.getAppOrSub) ⇒ string
        * [.this.getGameThumbUrl(steamAppId)](#SgApi.Util.this.getGameThumbUrl) ⇒ <code>string</code>
        * [.this.getCurrentUrl([context])](#SgApi.Util.this.getCurrentUrl) ⇒ <code>string</code>
        * [.this.isHomePage([context])](#SgApi.Util.this.isHomePage) ⇒ <code>boolean</code>
        * [.this.isGiveaway([context])](#SgApi.Util.this.isGiveaway) ⇒ <code>boolean</code>
        * [.this.isDiscussion([context])](#SgApi.Util.this.isDiscussion) ⇒ <code>boolean</code>
        * [.this.isUser([context])](#SgApi.Util.this.isUser) ⇒ <code>boolean</code>
        * [.this.getCurrentId([context])](#SgApi.Util.this.getCurrentId) ⇒ <code>string</code>
        * [.this.parseInteger(a)](#SgApi.Util.this.parseInteger) ⇒ <code>number</code>
        * [.this.extractId(url)](#SgApi.Util.this.extractId) ⇒ <code>string</code>
        * [.this.hashCode(str)](#SgApi.Util.this.hashCode) ⇒ <code>number</code>
        * [.this.requireResourceCss(key)](#SgApi.Util.this.requireResourceCss)
        * [.this.requireDeclaredStyles()](#SgApi.Util.this.requireDeclaredStyles)
        * [.this.requireCss(cssUrl)](#SgApi.Util.this.requireCss)
        * [.this.injectCss(styles)](#SgApi.Util.this.injectCss)
        * [.this.unwrap(obj)](#SgApi.Util.this.unwrap)
        * [.this.matchAll(regex, text)](#SgApi.Util.this.matchAll) ⇒ <code>Array</code>
        * [.this.scriptInfo()](#SgApi.Util.this.scriptInfo)
        * [.this.getDataStore(name)](#SgApi.Util.this.getDataStore)

<a name="SgApi.Ui"></a>

### SgApi.Ui
**Kind**: static class of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi.js  

* [.Ui](#SgApi.Ui)
    * [new Ui([context])](#new_SgApi.Ui_new)
    * [.Sidebar](#SgApi.Ui.Sidebar)
        * [.sidebarElement](#SgApi.Ui.Sidebar.sidebarElement) ⇒ <code>jQuery</code>
        * [.menuGroupHeaderElement(title)](#SgApi.Ui.Sidebar.menuGroupHeaderElement) ⇒ <code>jQuery</code>
        * [.menuGroupElement(title)](#SgApi.Ui.Sidebar.menuGroupElement) ⇒ <code>jQuery</code>
        * [.menuItemValueElement(menuItem)](#SgApi.Ui.Sidebar.menuItemValueElement) ⇒ <code>jQuery</code>
        * [.menuItemElement(menuItem)](#SgApi.Ui.Sidebar.menuItemElement) ⇒ <code>jQuery</code>
    * [.Links](#SgApi.Ui.Links)
        * [.allGiveawayLinks](#SgApi.Ui.Links.allGiveawayLinks) ⇒ <code>Array.&lt;jQuery&gt;</code>
        * [.giveawayLinksInMarkdown](#SgApi.Ui.Links.giveawayLinksInMarkdown) ⇒ <code>Array.&lt;jQuery&gt;</code>
        * [.linksInMarkdown([prefix])](#SgApi.Ui.Links.linksInMarkdown) ⇒ <code>Array.&lt;jQuery&gt;</code>
    * [._registerModule(modName, constFunc)](#SgApi.Ui._registerModule)

<a name="new_SgApi.Ui_new"></a>

#### new Ui([context])
Constructor function for a new UI accessor.	 SgApi.UI is the central interface to access all UI elements. This usually means returning jQuery objects that hold the elements you are looking for. Like SgApi, it is segmented in modules. SgApi Plugins can extend those modules or add new ones. For example, if include SgApi Giveaway Tools, the UI object will be augmented by a module called "CurrentGiveaway". If possible, the modules expose getters for convienient acccess.  The Core plugin contains modules for UI elements that are not bound to a specific use case. Currently it contains:  - Sidebar  	Access the left sidebar - Links  	Access Hyperlinks on the whole page   An UI accessor can be instanciated with a SgApi.Context. A context represents another site that is not the current site. Usually this was fetched via an ajax request. This way, the same interface can be used to access the current page or another page. For example, the Giveaway Tools offer a function loadGiveaway, that loads a Giveaway page via ajax. To extract the giveaway data from the remote page, it creates an UI object with that page as it's contexts, so every call to that UI object will search in the remote giveaway's HTML code instead of the current page.  If not Context argument is provided, the Context is the current page.

**Returns**: <code>[Ui](#SgApi.Ui)</code> - the ui object  

| Param | Type | Description |
| --- | --- | --- |
| [context] | <code>[Context](#SgApi.Context)</code> | the context |

<a name="SgApi.Ui.Sidebar"></a>

#### Ui.Sidebar
Access the elements of the left sidebar.

**Kind**: static property of <code>[Ui](#SgApi.Ui)</code>  
**Declared**: in sgapi.js  

* [.Sidebar](#SgApi.Ui.Sidebar)
    * [.sidebarElement](#SgApi.Ui.Sidebar.sidebarElement) ⇒ <code>jQuery</code>
    * [.menuGroupHeaderElement(title)](#SgApi.Ui.Sidebar.menuGroupHeaderElement) ⇒ <code>jQuery</code>
    * [.menuGroupElement(title)](#SgApi.Ui.Sidebar.menuGroupElement) ⇒ <code>jQuery</code>
    * [.menuItemValueElement(menuItem)](#SgApi.Ui.Sidebar.menuItemValueElement) ⇒ <code>jQuery</code>
    * [.menuItemElement(menuItem)](#SgApi.Ui.Sidebar.menuItemElement) ⇒ <code>jQuery</code>

<a name="SgApi.Ui.Sidebar.sidebarElement"></a>

##### Sidebar.sidebarElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[Sidebar](#SgApi.Ui.Sidebar)</code>  
**Returns**: <code>jQuery</code> - the whole sidebar element  
**Declared**: in sgapi.js  
<a name="SgApi.Ui.Sidebar.menuGroupHeaderElement"></a>

##### Sidebar.menuGroupHeaderElement(title) ⇒ <code>jQuery</code>
**Kind**: static method of <code>[Sidebar](#SgApi.Ui.Sidebar)</code>  
**Returns**: <code>jQuery</code> - the group header element from the sidebar with the given title  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | the title of the element to find |

<a name="SgApi.Ui.Sidebar.menuGroupElement"></a>

##### Sidebar.menuGroupElement(title) ⇒ <code>jQuery</code>
**Kind**: static method of <code>[Sidebar](#SgApi.Ui.Sidebar)</code>  
**Returns**: <code>jQuery</code> - the group element from the sidebar with the given title  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | the title of the element to find |

<a name="SgApi.Ui.Sidebar.menuItemValueElement"></a>

##### Sidebar.menuItemValueElement(menuItem) ⇒ <code>jQuery</code>
**Kind**: static method of <code>[Sidebar](#SgApi.Ui.Sidebar)</code>  
**Returns**: <code>jQuery</code> - the value element associated with the menu entry with the given name  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| menuItem | <code>string</code> | the name of the menu item to find |

<a name="SgApi.Ui.Sidebar.menuItemElement"></a>

##### Sidebar.menuItemElement(menuItem) ⇒ <code>jQuery</code>
**Kind**: static method of <code>[Sidebar](#SgApi.Ui.Sidebar)</code>  
**Returns**: <code>jQuery</code> - the menu item element with the given name  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| menuItem | <code>string</code> | the name of the menu item to find |

<a name="SgApi.Ui.Links"></a>

#### Ui.Links
Access Links on the page.

**Kind**: static property of <code>[Ui](#SgApi.Ui)</code>  
**Declared**: in sgapi.js  

* [.Links](#SgApi.Ui.Links)
    * [.allGiveawayLinks](#SgApi.Ui.Links.allGiveawayLinks) ⇒ <code>Array.&lt;jQuery&gt;</code>
    * [.giveawayLinksInMarkdown](#SgApi.Ui.Links.giveawayLinksInMarkdown) ⇒ <code>Array.&lt;jQuery&gt;</code>
    * [.linksInMarkdown([prefix])](#SgApi.Ui.Links.linksInMarkdown) ⇒ <code>Array.&lt;jQuery&gt;</code>

<a name="SgApi.Ui.Links.allGiveawayLinks"></a>

##### Links.allGiveawayLinks ⇒ <code>Array.&lt;jQuery&gt;</code>
**Kind**: static property of <code>[Links](#SgApi.Ui.Links)</code>  
**Returns**: <code>Array.&lt;jQuery&gt;</code> - a list of all links that point to a giveaway  
**Declared**: in sgapi.js  
<a name="SgApi.Ui.Links.giveawayLinksInMarkdown"></a>

##### Links.giveawayLinksInMarkdown ⇒ <code>Array.&lt;jQuery&gt;</code>
**Kind**: static property of <code>[Links](#SgApi.Ui.Links)</code>  
**Returns**: <code>Array.&lt;jQuery&gt;</code> - a list of all giveaway links in markdown areas (comments, discussions, giveaway descriptions)  
**Declared**: in sgapi.js  
<a name="SgApi.Ui.Links.linksInMarkdown"></a>

##### Links.linksInMarkdown([prefix]) ⇒ <code>Array.&lt;jQuery&gt;</code>
**Kind**: static method of <code>[Links](#SgApi.Ui.Links)</code>  
**Returns**: <code>Array.&lt;jQuery&gt;</code> - a list of all links in markdown areas (comments, discussions, giveaway descriptions)  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| [prefix] | <code>string</code> | a url prefix to filter the results (without http://) |

**Example**  
```js
var userLinks = SgApi.Util.linksInMarkdown("www.steamgifts.com/user/");
```
<a name="SgApi.Ui._registerModule"></a>

#### Ui._registerModule(modName, constFunc)
Registers a new UI module. This function is called by SgApi plugins that want to extend the UI namespace.

**Kind**: static method of <code>[Ui](#SgApi.Ui)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| modName | <code>string</code> | Module name. The module will be accessible from the UI object via that name. |
| constFunc | <code>function</code> | Constructor function that creates the module. |

<a name="SgApi.Context"></a>

### SgApi.Context
**Kind**: static class of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi.js  

* [.Context](#SgApi.Context)
    * [new Context([jQuery], [url], [title])](#new_SgApi.Context_new)
    * [.fromHtml([html], [url])](#SgApi.Context.fromHtml)

<a name="new_SgApi.Context_new"></a>

#### new Context([jQuery], [url], [title])

| Param | Type |
| --- | --- |
| [jQuery] | <code>jQuery</code> | 
| [url] | <code>string</code> | 
| [title] | <code>string</code> | 

<a name="SgApi.Context.fromHtml"></a>

#### Context.fromHtml([html], [url])
Creates a new context from a HTML string. Must be the complete HTML code of a fetched website.

**Kind**: static method of <code>[Context](#SgApi.Context)</code>  
**Declared**: in sgapi.js  

| Param | Type |
| --- | --- |
| [html] | <code>string</code> | 
| [url] | <code>string</code> | 

<a name="SgApi.ScriptRegistry"></a>

### SgApi.ScriptRegistry
A registry of all Userscripts on the current page that use SgApi. Any script that uses SgApi is automatically registered upon execution. ATTENTION: Due to execution order of your Userscripts, some scripts may not yet be registered upon document-idle. To ensure that you won't miss a script that gets registered too late, you should hook to onRegister to get notified about future registrations.

**Kind**: static property of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi.js  

* [.ScriptRegistry](#SgApi.ScriptRegistry)
    * [.this.register()](#SgApi.ScriptRegistry.this.register)
    * [.this.list()](#SgApi.ScriptRegistry.this.list) ⇒ <code>Object</code>
    * [.this.get(name)](#SgApi.ScriptRegistry.this.get) ⇒ <code>Object</code>
    * [.this.matches(name, version)](#SgApi.ScriptRegistry.this.matches) ⇒ <code>boolean</code>
    * [.this.existsMin(name, version)](#SgApi.ScriptRegistry.this.existsMin) ⇒ <code>boolean</code>
    * [.this.exists(name)](#SgApi.ScriptRegistry.this.exists) ⇒ <code>boolean</code>
    * [.this.existsMax(name, version)](#SgApi.ScriptRegistry.this.existsMax) ⇒ <code>boolean</code>
    * [.this.onRegister(callback)](#SgApi.ScriptRegistry.this.onRegister)

<a name="SgApi.ScriptRegistry.this.register"></a>

#### ScriptRegistry.this.register()
Registers a new script to this Registry. If there already exists an script with this name, the existing version is compared to the given one. If the given version is newer than the existing, the old one is replaced. If the script is accepted, it's initFunc function is called, in which it can initialize itself.  You usually won't have to invoke this function, since every script that embeds SgApi is automatically registered.

**Kind**: static method of <code>[ScriptRegistry](#SgApi.ScriptRegistry)</code>  
**Declared**: in sgapi.js  
<a name="SgApi.ScriptRegistry.this.list"></a>

#### ScriptRegistry.this.list() ⇒ <code>Object</code>
Lists all registered script.  Changes to the returned objects are NOT reflected to the backed data.

**Kind**: static method of <code>[ScriptRegistry](#SgApi.ScriptRegistry)</code>  
**Declared**: in sgapi.js  
<a name="SgApi.ScriptRegistry.this.get"></a>

#### ScriptRegistry.this.get(name) ⇒ <code>Object</code>
Gets a registered script entry. Changes to the returned object are NOT reflected to the backed data.

**Kind**: static method of <code>[ScriptRegistry](#SgApi.ScriptRegistry)</code>  
**Returns**: <code>Object</code> - the element registered to that name or undefined, if there is no element registered to the name.  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | a name |

<a name="SgApi.ScriptRegistry.this.matches"></a>

#### ScriptRegistry.this.matches(name, version) ⇒ <code>boolean</code>
Checks whether there is an script registered to the given name that matches exactly the given version

**Kind**: static method of <code>[ScriptRegistry](#SgApi.ScriptRegistry)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | a name |
| version | <code>string</code> | a version string |

<a name="SgApi.ScriptRegistry.this.existsMin"></a>

#### ScriptRegistry.this.existsMin(name, version) ⇒ <code>boolean</code>
Checks whether there is a script registered to the given name that is the given version or newer.

**Kind**: static method of <code>[ScriptRegistry](#SgApi.ScriptRegistry)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | a name |
| version | <code>string</code> | a version string |

<a name="SgApi.ScriptRegistry.this.exists"></a>

#### ScriptRegistry.this.exists(name) ⇒ <code>boolean</code>
Checks whether there is a script registered to the given name.

**Kind**: static method of <code>[ScriptRegistry](#SgApi.ScriptRegistry)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | a name |

<a name="SgApi.ScriptRegistry.this.existsMax"></a>

#### ScriptRegistry.this.existsMax(name, version) ⇒ <code>boolean</code>
Checks whether there is a script registered to the given name that is the given version or older.

**Kind**: static method of <code>[ScriptRegistry](#SgApi.ScriptRegistry)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | a name |
| version | <code>string</code> | a version string |

<a name="SgApi.ScriptRegistry.this.onRegister"></a>

#### ScriptRegistry.this.onRegister(callback)
Register a callback function that gets notified when a new script registers to the Registry or a script gets replaced by a newer version.

**Kind**: static method of <code>[ScriptRegistry](#SgApi.ScriptRegistry)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | a callback that gets notified if a new script registers to the ScriptRegistry |

<a name="SgApi.Util"></a>

### SgApi.Util : <code>object</code>
SgApi.Util is a central collection of useful recurring tasks. It is recommended to import the Utils into your namespace by use(SgApi.Util).

**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi.js  

* [.Util](#SgApi.Util) : <code>object</code>
    * [.this.parseBool(value)](#SgApi.Util.this.parseBool) ⇒ <code>boolean</code>
    * [.this.buildGiveawayUrl(id)](#SgApi.Util.this.buildGiveawayUrl) ⇒ <code>string</code>
    * [.this.buildDiscussionUrl(id)](#SgApi.Util.this.buildDiscussionUrl) ⇒ <code>string</code>
    * [.this.getAppOrSub(urlOrGa)](#SgApi.Util.this.getAppOrSub) ⇒
    * [.this.getGameThumbUrl(steamAppId)](#SgApi.Util.this.getGameThumbUrl) ⇒ <code>string</code>
    * [.this.getCurrentUrl([context])](#SgApi.Util.this.getCurrentUrl) ⇒ <code>string</code>
    * [.this.isHomePage([context])](#SgApi.Util.this.isHomePage) ⇒ <code>boolean</code>
    * [.this.isGiveaway([context])](#SgApi.Util.this.isGiveaway) ⇒ <code>boolean</code>
    * [.this.isDiscussion([context])](#SgApi.Util.this.isDiscussion) ⇒ <code>boolean</code>
    * [.this.isUser([context])](#SgApi.Util.this.isUser) ⇒ <code>boolean</code>
    * [.this.getCurrentId([context])](#SgApi.Util.this.getCurrentId) ⇒ <code>string</code>
    * [.this.parseInteger(a)](#SgApi.Util.this.parseInteger) ⇒ <code>number</code>
    * [.this.extractId(url)](#SgApi.Util.this.extractId) ⇒ <code>string</code>
    * [.this.hashCode(str)](#SgApi.Util.this.hashCode) ⇒ <code>number</code>
    * [.this.requireResourceCss(key)](#SgApi.Util.this.requireResourceCss)
    * [.this.requireDeclaredStyles()](#SgApi.Util.this.requireDeclaredStyles)
    * [.this.requireCss(cssUrl)](#SgApi.Util.this.requireCss)
    * [.this.injectCss(styles)](#SgApi.Util.this.injectCss)
    * [.this.unwrap(obj)](#SgApi.Util.this.unwrap)
    * [.this.matchAll(regex, text)](#SgApi.Util.this.matchAll) ⇒ <code>Array</code>
    * [.this.scriptInfo()](#SgApi.Util.this.scriptInfo)
    * [.this.getDataStore(name)](#SgApi.Util.this.getDataStore)

<a name="SgApi.Util.this.parseBool"></a>

#### Util.this.parseBool(value) ⇒ <code>boolean</code>
Parses a value that might be a string or a boolean value and returns the bool value.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>boolean</code> - true, if the value is "true" or true, false otherwise  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the value to parse |

<a name="SgApi.Util.this.buildGiveawayUrl"></a>

#### Util.this.buildGiveawayUrl(id) ⇒ <code>string</code>
Builds an url to a giveway.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>string</code> - the URL to the giveaway with the given ID  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the giveaway id |

<a name="SgApi.Util.this.buildDiscussionUrl"></a>

#### Util.this.buildDiscussionUrl(id) ⇒ <code>string</code>
Builds an url to a discussion.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>string</code> - the URL to the discussion with the given ID  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the discussion id |

<a name="SgApi.Util.this.getAppOrSub"></a>

#### Util.this.getAppOrSub(urlOrGa) ⇒
**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: either "app" or "sub", or undefined if the type could not be determined  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| urlOrGa | <code>string</code> &#124; <code>Giveaway</code> | a steam store url or a giveaway object from the SgApi GA Tools |

<a name="SgApi.Util.this.getGameThumbUrl"></a>

#### Util.this.getGameThumbUrl(steamAppId) ⇒ <code>string</code>
Builds an url to the thumbnail for the game with the given steam id.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>string</code> - the URL to the thumbnail  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| steamAppId | <code>string</code> | the steam app id |

<a name="SgApi.Util.this.getCurrentUrl"></a>

#### Util.this.getCurrentUrl([context]) ⇒ <code>string</code>
Returns the current url

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>string</code> - the url to the current page or the page specified by context  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| [context] | <code>[Context](#SgApi.Context)</code> | a context |

<a name="SgApi.Util.this.isHomePage"></a>

#### Util.this.isHomePage([context]) ⇒ <code>boolean</code>
Checks if a page is the SteamGifts Homepage

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>boolean</code> - true, if the page is the SteamGifts Homepage  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| [context] | <code>[Context](#SgApi.Context)</code> &#124; <code>string</code> | context the page context, see SgApi.Context or a url string |

<a name="SgApi.Util.this.isGiveaway"></a>

#### Util.this.isGiveaway([context]) ⇒ <code>boolean</code>
Checks if a page is a giveaway

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>boolean</code> - true, if the page is a giveaway  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| [context] | <code>[Context](#SgApi.Context)</code> &#124; <code>string</code> | context the page context, see SgApi.Context or a url string |

<a name="SgApi.Util.this.isDiscussion"></a>

#### Util.this.isDiscussion([context]) ⇒ <code>boolean</code>
Checks if a page is a discussion

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>boolean</code> - true, if the page is a discussion  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| [context] | <code>[Context](#SgApi.Context)</code> &#124; <code>string</code> | context the page context, see SgApi.Context or a url string |

<a name="SgApi.Util.this.isUser"></a>

#### Util.this.isUser([context]) ⇒ <code>boolean</code>
Checks if a page is a user

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>boolean</code> - true, if the page is a user  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| [context] | <code>[Context](#SgApi.Context)</code> &#124; <code>string</code> | context the page context, see SgApi.Context or a url string |

<a name="SgApi.Util.this.getCurrentId"></a>

#### Util.this.getCurrentId([context]) ⇒ <code>string</code>
Gets the SG id of the current page.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>string</code> - the 5 char SG id or undefined if no id is accessible  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| [context] | <code>[Context](#SgApi.Context)</code> | context the page context, see SgApi.Context |

<a name="SgApi.Util.this.parseInteger"></a>

#### Util.this.parseInteger(a) ⇒ <code>number</code>
Assumes str is an Integer WITHOUT DECIMAL and converts it to an integer.Meaning, a string "10,00" is parsed to 1000. This function shold only be used when you know you are dealing with an int.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>number</code> - the integer value or NaN if the string was not a number  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | string representing an integer |

<a name="SgApi.Util.this.extractId"></a>

#### Util.this.extractId(url) ⇒ <code>string</code>
Gets the relevant id from an URL.  URL may be a SG URL, a Steam store URL or a Steam thumbnail URL

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>string</code> - the id  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | the URL |

<a name="SgApi.Util.this.hashCode"></a>

#### Util.this.hashCode(str) ⇒ <code>number</code>
Calculates a hash code from a given string.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>number</code> - the hash code for this string  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | a string |

<a name="SgApi.Util.this.requireResourceCss"></a>

#### Util.this.requireResourceCss(key)
Includes a CSS file that was declared as a resource in the script header. WARNING: Requiring a resource has a caveat opposed to requireCss: the resource is loaded once and cached forever by the ScriptManager. Meaning, if you want to update your resource, you need to update the script and point to another URL. If you use requireCss instead, the browsers built-in HTTP caching mechanisms are used, which means changed files will be recognized.  Requires: @grant GM_getResourceText

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | the resource name used with @resource |

**Example**  
```js
// @resource     css https://manuelhermenau.de/scripts/test.css	// @grant        GM_getResourceText	// ==/UserScript==	use(SgApi.Util);	requireResourceCss("css");
```
<a name="SgApi.Util.this.requireDeclaredStyles"></a>

#### Util.this.requireDeclaredStyles()
Loads all *.css files that are declared in the script header via @resource. See requireResourceCss.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Declared**: in sgapi.js  
<a name="SgApi.Util.this.requireCss"></a>

#### Util.this.requireCss(cssUrl)
Links a remote css file into the current page.   If given a resource identifier instead of an URL, the resource with that name will be embedded. See alos [requireResourceCss](requireResourceCss).   Caution: You can not link files from raw.githubusercontent.com by providing an URL to this function, because GitHub prevents this by setting the "nosniff" header. You can, however, replace 'raw.githubusercontent.com' in your URL string by 'rawgit.com'. Rawgit.com is a service that removes this header. Note that rawgit is a service on it's own and not afiliated with GitHub.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| cssUrl | <code>string</code> | the CSS file URL. |

<a name="SgApi.Util.this.injectCss"></a>

#### Util.this.injectCss(styles)
Injects the given CSS string into the current page

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| styles | <code>string</code> | a valid CSS string |

<a name="SgApi.Util.this.unwrap"></a>

#### Util.this.unwrap(obj)
Calls all getters on an object. Basicly used to pretty print an object with many getters to the console.

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the obj to unwrap |

<a name="SgApi.Util.this.matchAll"></a>

#### Util.this.matchAll(regex, text) ⇒ <code>Array</code>
Tests a regex agains a string and returns an array of all matches

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Returns**: <code>Array</code> - an array containing all the matches  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| regex | <code>Regexp</code> | a regular expression |
| text | <code>string</code> | the string to test |

<a name="SgApi.Util.this.scriptInfo"></a>

#### Util.this.scriptInfo()
**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Declared**: in sgapi.js  
<a name="SgApi.Util.this.getDataStore"></a>

#### Util.this.getDataStore(name)
Gets or creates a datastore. Datastores can be used to store data in the scope of a page request, spanning all Userscripts. Meaning, you can share data between UserScripts bypassing the Script Managers sandbox.| Storage             | Accessability     | Expiry || :------------------ | :----------  | :------------------ || localStorage   | every script on the host  | Never / on clear browser data||GM_setValue, GM_getValue | only the userscript that created it | Never || sessionStorage | every script on the host  | close tab / navigate away from host || Cookies | every script on the host | Defined date or never || window  | guaranteed only  for the current UserScript in the current page impression | Reload / Navigate || SgApi.DataStore | all scripts and userscripts in the same page impression | Reload / Navigate |

**Kind**: static method of <code>[Util](#SgApi.Util)</code>  
**Declared**: in sgapi.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the DataStore. |

