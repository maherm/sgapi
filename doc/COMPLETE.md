## Objects

<dl>
<dt><a href="#SgApi">SgApi</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="SgApi"></a>

## SgApi : <code>object</code>
**Kind**: global namespace  

* [SgApi](#SgApi) : <code>object</code>
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
        * [.CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)
            * [.cpElement](#SgApi.Ui.CurrentGiveaway.cpElement) ⇒ <code>jQuery</code>
            * [.creatorElement](#SgApi.Ui.CurrentGiveaway.creatorElement) ⇒ <code>jQuery</code>
            * [.headerImageElement](#SgApi.Ui.CurrentGiveaway.headerImageElement) ⇒ <code>jQuery</code>
            * [.startTimeElement](#SgApi.Ui.CurrentGiveaway.startTimeElement) ⇒ <code>jQuery</code>
            * [.endTimeElement](#SgApi.Ui.CurrentGiveaway.endTimeElement) ⇒ <code>jQuery</code>
            * [.copiesElement](#SgApi.Ui.CurrentGiveaway.copiesElement) ⇒ <code>jQuery</code>
            * [.contributorLevelElement](#SgApi.Ui.CurrentGiveaway.contributorLevelElement) ⇒ <code>jQuery</code>
            * [.whitelistElement](#SgApi.Ui.CurrentGiveaway.whitelistElement) ⇒ <code>jQuery</code>
            * [.groupElement](#SgApi.Ui.CurrentGiveaway.groupElement) ⇒ <code>jQuery</code>
            * [.descriptionElement](#SgApi.Ui.CurrentGiveaway.descriptionElement) ⇒ <code>jQuery</code>
            * [.visibleButtonElement](#SgApi.Ui.CurrentGiveaway.visibleButtonElement) ⇒ <code>jQuery</code>
        * [._registerModule(modName, constFunc)](#SgApi.Ui._registerModule)
    * [.Context](#SgApi.Context)
        * [new Context([jQuery], [url], [title])](#new_SgApi.Context_new)
        * [.fromHtml([html], [url])](#SgApi.Context.fromHtml)
    * [.Settings](#SgApi.Settings)
        * [new Settings(settings_name)](#new_SgApi.Settings_new)
        * _instance_
            * [.get(name)](#SgApi.Settings+get) ⇒ <code>object</code> &#124; <code>undefined</code>
            * [.set(name, value)](#SgApi.Settings+set)
            * [.deleteAll()](#SgApi.Settings+deleteAll)
        * _static_
            * [.SettingsBuilder](#SgApi.Settings.SettingsBuilder)
                * [new SettingsBuilder()](#new_SgApi.Settings.SettingsBuilder_new)
                * [.this.boolean(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.boolean)
                * [.this.int(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.int)
                * [.this.float(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.float)
                * [.this.string(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.string)
                * [.this.enum(name, [values], [initialValues], [options])](#SgApi.Settings.SettingsBuilder.this.enum)
                * [.this.func(name, func, [options])](#SgApi.Settings.SettingsBuilder.this.func)
                * [.this.custom(name, divBuilder, [options])](#SgApi.Settings.SettingsBuilder.this.custom)
                * [.this.init([options])](#SgApi.Settings.SettingsBuilder.this.init) ⇒ <code>Settings</code>
    * [.ScriptRegistry](#SgApi.ScriptRegistry)
        * [.this.register()](#SgApi.ScriptRegistry.this.register)
        * [.this.list()](#SgApi.ScriptRegistry.this.list) ⇒ <code>Object</code>
        * [.this.get(name)](#SgApi.ScriptRegistry.this.get) ⇒ <code>Object</code>
        * [.this.matches(name, version)](#SgApi.ScriptRegistry.this.matches) ⇒ <code>boolean</code>
        * [.this.existsMin(name, version)](#SgApi.ScriptRegistry.this.existsMin) ⇒ <code>boolean</code>
        * [.this.exists(name)](#SgApi.ScriptRegistry.this.exists) ⇒ <code>boolean</code>
        * [.this.existsMax(name, version)](#SgApi.ScriptRegistry.this.existsMax) ⇒ <code>boolean</code>
        * [.this.onRegister(callback)](#SgApi.ScriptRegistry.this.onRegister)
    * [.Wishlist](#SgApi.Wishlist)
        * [.WishlistContainer()](#SgApi.Wishlist.WishlistContainer)
            * [.this.contains](#SgApi.Wishlist.WishlistContainer.this.contains) ⇒ <code>boolean</code>
            * [.this.isWishlistedGame(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.isWishlistedGame) ⇒ <code>boolean</code>
            * [.this.get(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.get) ⇒ <code>object</code>
            * [.this.list()](#SgApi.Wishlist.WishlistContainer.this.list) ⇒ <code>Object</code>
        * [.this.get(callback, forceSync)](#SgApi.Wishlist.this.get)
    * [.Util](#SgApi.Util) : <code>object</code>
        * [.this.parseBool(value)](#SgApi.Util.this.parseBool) ⇒ <code>boolean</code>
        * [.this.buildGiveawayUrl(id)](#SgApi.Util.this.buildGiveawayUrl) ⇒ <code>string</code>
        * [.this.buildDiscussionUrl(id)](#SgApi.Util.this.buildDiscussionUrl) ⇒ <code>string</code>
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
    * [.Notifications](#SgApi.Notifications) : <code>object</code>
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
    * [.Giveaways](#SgApi.Giveaways) : <code>object</code>
        * [.Giveaway](#SgApi.Giveaways.Giveaway)
            * [new Giveaway()](#new_SgApi.Giveaways.Giveaway_new)
            * [.id](#SgApi.Giveaways.Giveaway.id) ⇒ <code>string</code>
            * [.gameTitle](#SgApi.Giveaways.Giveaway.gameTitle) ⇒ <code>string</code>
            * [.cp](#SgApi.Giveaways.Giveaway.cp) ⇒ <code>int</code>
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
    * [.Notifications](#SgApi.Notifications) : <code>object</code>
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)

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
    * [.CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)
        * [.cpElement](#SgApi.Ui.CurrentGiveaway.cpElement) ⇒ <code>jQuery</code>
        * [.creatorElement](#SgApi.Ui.CurrentGiveaway.creatorElement) ⇒ <code>jQuery</code>
        * [.headerImageElement](#SgApi.Ui.CurrentGiveaway.headerImageElement) ⇒ <code>jQuery</code>
        * [.startTimeElement](#SgApi.Ui.CurrentGiveaway.startTimeElement) ⇒ <code>jQuery</code>
        * [.endTimeElement](#SgApi.Ui.CurrentGiveaway.endTimeElement) ⇒ <code>jQuery</code>
        * [.copiesElement](#SgApi.Ui.CurrentGiveaway.copiesElement) ⇒ <code>jQuery</code>
        * [.contributorLevelElement](#SgApi.Ui.CurrentGiveaway.contributorLevelElement) ⇒ <code>jQuery</code>
        * [.whitelistElement](#SgApi.Ui.CurrentGiveaway.whitelistElement) ⇒ <code>jQuery</code>
        * [.groupElement](#SgApi.Ui.CurrentGiveaway.groupElement) ⇒ <code>jQuery</code>
        * [.descriptionElement](#SgApi.Ui.CurrentGiveaway.descriptionElement) ⇒ <code>jQuery</code>
        * [.visibleButtonElement](#SgApi.Ui.CurrentGiveaway.visibleButtonElement) ⇒ <code>jQuery</code>
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
<a name="SgApi.Ui.CurrentGiveaway"></a>

#### Ui.CurrentGiveaway
Extension Module for SgApi.UI to get Giveaway-specific HTML elements.

**Kind**: static property of <code>[Ui](#SgApi.Ui)</code>  
**Declared**: in sgapi_gatools.js  

* [.CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)
    * [.cpElement](#SgApi.Ui.CurrentGiveaway.cpElement) ⇒ <code>jQuery</code>
    * [.creatorElement](#SgApi.Ui.CurrentGiveaway.creatorElement) ⇒ <code>jQuery</code>
    * [.headerImageElement](#SgApi.Ui.CurrentGiveaway.headerImageElement) ⇒ <code>jQuery</code>
    * [.startTimeElement](#SgApi.Ui.CurrentGiveaway.startTimeElement) ⇒ <code>jQuery</code>
    * [.endTimeElement](#SgApi.Ui.CurrentGiveaway.endTimeElement) ⇒ <code>jQuery</code>
    * [.copiesElement](#SgApi.Ui.CurrentGiveaway.copiesElement) ⇒ <code>jQuery</code>
    * [.contributorLevelElement](#SgApi.Ui.CurrentGiveaway.contributorLevelElement) ⇒ <code>jQuery</code>
    * [.whitelistElement](#SgApi.Ui.CurrentGiveaway.whitelistElement) ⇒ <code>jQuery</code>
    * [.groupElement](#SgApi.Ui.CurrentGiveaway.groupElement) ⇒ <code>jQuery</code>
    * [.descriptionElement](#SgApi.Ui.CurrentGiveaway.descriptionElement) ⇒ <code>jQuery</code>
    * [.visibleButtonElement](#SgApi.Ui.CurrentGiveaway.visibleButtonElement) ⇒ <code>jQuery</code>

<a name="SgApi.Ui.CurrentGiveaway.cpElement"></a>

##### CurrentGiveaway.cpElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.creatorElement"></a>

##### CurrentGiveaway.creatorElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.headerImageElement"></a>

##### CurrentGiveaway.headerImageElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.startTimeElement"></a>

##### CurrentGiveaway.startTimeElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.endTimeElement"></a>

##### CurrentGiveaway.endTimeElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.copiesElement"></a>

##### CurrentGiveaway.copiesElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.contributorLevelElement"></a>

##### CurrentGiveaway.contributorLevelElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.whitelistElement"></a>

##### CurrentGiveaway.whitelistElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.groupElement"></a>

##### CurrentGiveaway.groupElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.descriptionElement"></a>

##### CurrentGiveaway.descriptionElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.visibleButtonElement"></a>

##### CurrentGiveaway.visibleButtonElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
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

<a name="SgApi.Settings"></a>

### SgApi.Settings
**Kind**: static class of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_settings.js  

* [.Settings](#SgApi.Settings)
    * [new Settings(settings_name)](#new_SgApi.Settings_new)
    * _instance_
        * [.get(name)](#SgApi.Settings+get) ⇒ <code>object</code> &#124; <code>undefined</code>
        * [.set(name, value)](#SgApi.Settings+set)
        * [.deleteAll()](#SgApi.Settings+deleteAll)
    * _static_
        * [.SettingsBuilder](#SgApi.Settings.SettingsBuilder)
            * [new SettingsBuilder()](#new_SgApi.Settings.SettingsBuilder_new)
            * [.this.boolean(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.boolean)
            * [.this.int(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.int)
            * [.this.float(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.float)
            * [.this.string(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.string)
            * [.this.enum(name, [values], [initialValues], [options])](#SgApi.Settings.SettingsBuilder.this.enum)
            * [.this.func(name, func, [options])](#SgApi.Settings.SettingsBuilder.this.func)
            * [.this.custom(name, divBuilder, [options])](#SgApi.Settings.SettingsBuilder.this.custom)
            * [.this.init([options])](#SgApi.Settings.SettingsBuilder.this.init) ⇒ <code>Settings</code>

<a name="new_SgApi.Settings_new"></a>

#### new Settings(settings_name)
**Returns**: <code>SettingsBuilder</code> - a Settings builder.  

| Param | Type | Description |
| --- | --- | --- |
| settings_name | <code>string</code> | the name of your settings. Will be displayed in the navigation menu on the account page. |

<a name="SgApi.Settings+get"></a>

#### settings.get(name) ⇒ <code>object</code> &#124; <code>undefined</code>
Get the value of a setting.

**Kind**: instance method of <code>[Settings](#SgApi.Settings)</code>  
**Returns**: <code>object</code> &#124; <code>undefined</code> - the value of the setting or undefined if the setting does not exist.  
**Declared**: in sgapi_settings.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name as defined in the SettingsBuilder |

<a name="SgApi.Settings+set"></a>

#### settings.set(name, value)
Change the value of a setting.

**Kind**: instance method of <code>[Settings](#SgApi.Settings)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name as defined in the SettingsBuilder |
| value | <code>object</code> | the value to set |

<a name="SgApi.Settings+deleteAll"></a>

#### settings.deleteAll()
Delete all saved Settings. They will be re-instanciated with their default values.

**Kind**: instance method of <code>[Settings](#SgApi.Settings)</code>  
**Declared**: in sgapi_settings.js  
<a name="SgApi.Settings.SettingsBuilder"></a>

#### Settings.SettingsBuilder
**Kind**: static class of <code>[Settings](#SgApi.Settings)</code>  
**Declared**: in sgapi_settings.js  

* [.SettingsBuilder](#SgApi.Settings.SettingsBuilder)
    * [new SettingsBuilder()](#new_SgApi.Settings.SettingsBuilder_new)
    * [.this.boolean(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.boolean)
    * [.this.int(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.int)
    * [.this.float(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.float)
    * [.this.string(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.string)
    * [.this.enum(name, [values], [initialValues], [options])](#SgApi.Settings.SettingsBuilder.this.enum)
    * [.this.func(name, func, [options])](#SgApi.Settings.SettingsBuilder.this.func)
    * [.this.custom(name, divBuilder, [options])](#SgApi.Settings.SettingsBuilder.this.custom)
    * [.this.init([options])](#SgApi.Settings.SettingsBuilder.this.init) ⇒ <code>Settings</code>

<a name="new_SgApi.Settings.SettingsBuilder_new"></a>

##### new SettingsBuilder()
Builder object to create your setttings. Once finished building, call init() to initialize this settings.

<a name="SgApi.Settings.SettingsBuilder.this.boolean"></a>

##### SettingsBuilder.this.boolean(name, initialValue, [options])
Create a boolean setting.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| initialValue | <code>boolean</code> |  | the initial value for this setting. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.values] | <code>Array.&lt;string&gt;</code> | <code>[&quot;No&quot;, &quot;Yes&quot;]</code> | values to display instead of "No" and "Yes". Please note that the negative value is at index 0 and the positive value at index 1. |

<a name="SgApi.Settings.SettingsBuilder.this.int"></a>

##### SettingsBuilder.this.int(name, initialValue, [options])
Create an integer setting. The input field will only accept integer values.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| initialValue | <code>int</code> |  | the initial value for this setting. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.minValue] | <code>int</code> |  | if set, the UI will not accept inputs smaller than minValue |
| [options.maxValue] | <code>int</code> |  | if set, the UI will not accept inputs greater than minValue |
| [options.validate] | <code>function</code> |  | an additional validation function to validate the inputs in the UI |

<a name="SgApi.Settings.SettingsBuilder.this.float"></a>

##### SettingsBuilder.this.float(name, initialValue, [options])
Create a float setting. The input field will only accept numbers.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| initialValue | <code>number</code> |  | the initial value for this setting. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.minValue] | <code>number</code> |  | if set, the UI will not accept inputs smaller than minValue |
| [options.maxValue] | <code>number</code> |  | if set, the UI will not accept inputs greater than maxValue |
| [options.validate] | <code>function</code> |  | an additional validation function to validate the inputs in the UI |

<a name="SgApi.Settings.SettingsBuilder.this.string"></a>

##### SettingsBuilder.this.string(name, initialValue, [options])
Create a string setting.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| initialValue | <code>string</code> |  | the initial value for this setting. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.minLength] | <code>number</code> | <code>0</code> | if set, the UI will not accept inputs shorter than minLength |
| [options.maxLength] | <code>number</code> |  | if set, the UI will not accept inputs longer than maxLength |
| [options.validate] | <code>function</code> |  | an additional validation function to validate the inputs in the UI |

<a name="SgApi.Settings.SettingsBuilder.this.enum"></a>

##### SettingsBuilder.this.enum(name, [values], [initialValues], [options])
Create an enum setting. The selected values will be saved as an array of indices, whereas the values array will hold their string representations.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| [values] | <code>Array.&lt;string&gt;</code> |  | the avialable options to choose from |
| [initialValues] | <code>Array.&lt;int&gt;</code> | <code>[]</code> | the initially selected values for this setting. Array of indices that correspond to the values array. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.maxSelected] | <code>int</code> | <code>1</code> | number of options that can be selected. If 1, the UI will behave like a HTML options element. If > 1, it will behave like a checkbox group and refuse to select more items than the specified number. |

<a name="SgApi.Settings.SettingsBuilder.this.func"></a>

##### SettingsBuilder.this.func(name, func, [options])
Creates a button setting that will invoke the given function when clicked.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI. |
| func | <code>function</code> |  | the function to invoke on click |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code>. |
| [options.label] | <code>string</code> |  | the text on your button. If undefined, it will be the same as name |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.faIcon] | <code>string</code> |  | an font awesome icon to be displayed on your button, e.g. "fa-cog" |

<a name="SgApi.Settings.SettingsBuilder.this.custom"></a>

##### SettingsBuilder.this.custom(name, divBuilder, [options])
Creates a custom setting with the content provided by divBuilder.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI. |
| divBuilder | <code>function</code> |  | a function that returns a div-element that contains your custom html code. |
| [options] | <code>object</code> |  |  |
| [options.title] | <code>string</code> |  | a title different from <code>name</code>. |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |

<a name="SgApi.Settings.SettingsBuilder.this.init"></a>

##### SettingsBuilder.this.init([options]) ⇒ <code>Settings</code>
Initializes this Settings object.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Returns**: <code>Settings</code> - the Settings object to read and save your settings  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  |  |
| [options.useGmStorage] | <code>boolean</code> | <code>false</code> | save the data using GM_setValue and GM_getValue instead of localStorage. Since localStorage can be read by every script, it is strongly recommended to set this flag to true if you save sentive data like API keys in your settings. Remember that you need to grant GM_setValue, GM_getValue and GM_deleteValue for this to work, which also may change your sandboxing mode. Read the chapter about jQuery for more information. |
| [options.instantSubmit] | <code>boolean</code> | <code>false</code> | Don't show a "Save" button, but instantly save the data on change. |
| [options.section] | <code>string</code> | <code>&quot;\&quot;Userscripts\&quot;&quot;</code> | The section in the left sidebar in which the Settings will appear. For the sake of usability, it is recommended not the change this, so that the users don't have an unnecessarily cluttered sidebar. |
| [options.infoBox] | <code>boolean</code> | <code>true</code> | if set to false, the info box below the "Save" button will not be rendered. |

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

<a name="SgApi.Util"></a>

### SgApi.Util : <code>object</code>
SgApi.Util is a central collection of useful recurring tasks. It is recommended to import the Utils into your namespace by use(SgApi.Util).

**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi.js  

* [.Util](#SgApi.Util) : <code>object</code>
    * [.this.parseBool(value)](#SgApi.Util.this.parseBool) ⇒ <code>boolean</code>
    * [.this.buildGiveawayUrl(id)](#SgApi.Util.this.buildGiveawayUrl) ⇒ <code>string</code>
    * [.this.buildDiscussionUrl(id)](#SgApi.Util.this.buildDiscussionUrl) ⇒ <code>string</code>
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
| regex | <code>Regex</code> | a regular expression |
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

<a name="SgApi.Notifications"></a>

### SgApi.Notifications : <code>object</code>
**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_notifications.js  

* [.Notifications](#SgApi.Notifications) : <code>object</code>
    * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
    * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)

<a name="SgApi.Notifications.this.notify"></a>

#### Notifications.this.notify(type, $content, [opt])
Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.

**Kind**: static method of <code>[Notifications](#SgApi.Notifications)</code>  
**Declared**: in sgapi_notifications.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | one of "info", "success", "warning", "danger", "none" |
| $content | <code>jQuery</code> &#124; <code>string</code> |  | a jQuery object or a string holding the HTML content to add |
| [opt] | <code>Object</code> |  | options |
| [opt.closable] | <code>boolean</code> | <code>true</code> | indicates whether the notification should be closable by the user via the "x" |
| [opt.noQueue] | <code>boolean</code> | <code>false</code> | if set, the notification will only be shown if there is no other active notification |
| [opt.key] | <code>boolean</code> |  | if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script. |
| [opt.duration] | <code>boolean</code> | <code>0</code> | if duration is >0, the notification will auto-close after that amount of milliseconds. |

**Example**  
```js
//This Notification will be displayed everytime until the user disposes it by clicking the "x"Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});//This notification will auto-close after 10 secondsNotifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
```
<a name="SgApi.Notifications.this.notify"></a>

#### Notifications.this.notify(type, $content, [opt])
Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.

**Kind**: static method of <code>[Notifications](#SgApi.Notifications)</code>  
**Declared**: in sgapi_notifications.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | one of "info", "success", "warning", "danger", "none" |
| $content | <code>jQuery</code> &#124; <code>string</code> |  | a jQuery object or a string holding the HTML content to add |
| [opt] | <code>Object</code> |  | options |
| [opt.closable] | <code>boolean</code> | <code>true</code> | indicates whether the notification should be closable by the user via the "x" |
| [opt.noQueue] | <code>boolean</code> | <code>false</code> | if set, the notification will only be shown if there is no other active notification |
| [opt.key] | <code>boolean</code> |  | if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script. |
| [opt.duration] | <code>boolean</code> | <code>0</code> | if duration is >0, the notification will auto-close after that amount of milliseconds. |

**Example**  
```js
//This Notification will be displayed everytime until the user disposes it by clicking the "x"Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});//This notification will auto-close after 10 secondsNotifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
```
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
<a name="SgApi.Notifications"></a>

### SgApi.Notifications : <code>object</code>
**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_notifications.js  

* [.Notifications](#SgApi.Notifications) : <code>object</code>
    * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
    * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)

<a name="SgApi.Notifications.this.notify"></a>

#### Notifications.this.notify(type, $content, [opt])
Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.

**Kind**: static method of <code>[Notifications](#SgApi.Notifications)</code>  
**Declared**: in sgapi_notifications.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | one of "info", "success", "warning", "danger", "none" |
| $content | <code>jQuery</code> &#124; <code>string</code> |  | a jQuery object or a string holding the HTML content to add |
| [opt] | <code>Object</code> |  | options |
| [opt.closable] | <code>boolean</code> | <code>true</code> | indicates whether the notification should be closable by the user via the "x" |
| [opt.noQueue] | <code>boolean</code> | <code>false</code> | if set, the notification will only be shown if there is no other active notification |
| [opt.key] | <code>boolean</code> |  | if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script. |
| [opt.duration] | <code>boolean</code> | <code>0</code> | if duration is >0, the notification will auto-close after that amount of milliseconds. |

**Example**  
```js
//This Notification will be displayed everytime until the user disposes it by clicking the "x"Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});//This notification will auto-close after 10 secondsNotifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
```
<a name="SgApi.Notifications.this.notify"></a>

#### Notifications.this.notify(type, $content, [opt])
Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.

**Kind**: static method of <code>[Notifications](#SgApi.Notifications)</code>  
**Declared**: in sgapi_notifications.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | one of "info", "success", "warning", "danger", "none" |
| $content | <code>jQuery</code> &#124; <code>string</code> |  | a jQuery object or a string holding the HTML content to add |
| [opt] | <code>Object</code> |  | options |
| [opt.closable] | <code>boolean</code> | <code>true</code> | indicates whether the notification should be closable by the user via the "x" |
| [opt.noQueue] | <code>boolean</code> | <code>false</code> | if set, the notification will only be shown if there is no other active notification |
| [opt.key] | <code>boolean</code> |  | if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script. |
| [opt.duration] | <code>boolean</code> | <code>0</code> | if duration is >0, the notification will auto-close after that amount of milliseconds. |

**Example**  
```js
//This Notification will be displayed everytime until the user disposes it by clicking the "x"Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});//This notification will auto-close after 10 secondsNotifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
```
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
        * [.CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)
            * [.cpElement](#SgApi.Ui.CurrentGiveaway.cpElement) ⇒ <code>jQuery</code>
            * [.creatorElement](#SgApi.Ui.CurrentGiveaway.creatorElement) ⇒ <code>jQuery</code>
            * [.headerImageElement](#SgApi.Ui.CurrentGiveaway.headerImageElement) ⇒ <code>jQuery</code>
            * [.startTimeElement](#SgApi.Ui.CurrentGiveaway.startTimeElement) ⇒ <code>jQuery</code>
            * [.endTimeElement](#SgApi.Ui.CurrentGiveaway.endTimeElement) ⇒ <code>jQuery</code>
            * [.copiesElement](#SgApi.Ui.CurrentGiveaway.copiesElement) ⇒ <code>jQuery</code>
            * [.contributorLevelElement](#SgApi.Ui.CurrentGiveaway.contributorLevelElement) ⇒ <code>jQuery</code>
            * [.whitelistElement](#SgApi.Ui.CurrentGiveaway.whitelistElement) ⇒ <code>jQuery</code>
            * [.groupElement](#SgApi.Ui.CurrentGiveaway.groupElement) ⇒ <code>jQuery</code>
            * [.descriptionElement](#SgApi.Ui.CurrentGiveaway.descriptionElement) ⇒ <code>jQuery</code>
            * [.visibleButtonElement](#SgApi.Ui.CurrentGiveaway.visibleButtonElement) ⇒ <code>jQuery</code>
        * [._registerModule(modName, constFunc)](#SgApi.Ui._registerModule)
    * [.Context](#SgApi.Context)
        * [new Context([jQuery], [url], [title])](#new_SgApi.Context_new)
        * [.fromHtml([html], [url])](#SgApi.Context.fromHtml)
    * [.Settings](#SgApi.Settings)
        * [new Settings(settings_name)](#new_SgApi.Settings_new)
        * _instance_
            * [.get(name)](#SgApi.Settings+get) ⇒ <code>object</code> &#124; <code>undefined</code>
            * [.set(name, value)](#SgApi.Settings+set)
            * [.deleteAll()](#SgApi.Settings+deleteAll)
        * _static_
            * [.SettingsBuilder](#SgApi.Settings.SettingsBuilder)
                * [new SettingsBuilder()](#new_SgApi.Settings.SettingsBuilder_new)
                * [.this.boolean(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.boolean)
                * [.this.int(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.int)
                * [.this.float(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.float)
                * [.this.string(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.string)
                * [.this.enum(name, [values], [initialValues], [options])](#SgApi.Settings.SettingsBuilder.this.enum)
                * [.this.func(name, func, [options])](#SgApi.Settings.SettingsBuilder.this.func)
                * [.this.custom(name, divBuilder, [options])](#SgApi.Settings.SettingsBuilder.this.custom)
                * [.this.init([options])](#SgApi.Settings.SettingsBuilder.this.init) ⇒ <code>Settings</code>
    * [.ScriptRegistry](#SgApi.ScriptRegistry)
        * [.this.register()](#SgApi.ScriptRegistry.this.register)
        * [.this.list()](#SgApi.ScriptRegistry.this.list) ⇒ <code>Object</code>
        * [.this.get(name)](#SgApi.ScriptRegistry.this.get) ⇒ <code>Object</code>
        * [.this.matches(name, version)](#SgApi.ScriptRegistry.this.matches) ⇒ <code>boolean</code>
        * [.this.existsMin(name, version)](#SgApi.ScriptRegistry.this.existsMin) ⇒ <code>boolean</code>
        * [.this.exists(name)](#SgApi.ScriptRegistry.this.exists) ⇒ <code>boolean</code>
        * [.this.existsMax(name, version)](#SgApi.ScriptRegistry.this.existsMax) ⇒ <code>boolean</code>
        * [.this.onRegister(callback)](#SgApi.ScriptRegistry.this.onRegister)
    * [.Wishlist](#SgApi.Wishlist)
        * [.WishlistContainer()](#SgApi.Wishlist.WishlistContainer)
            * [.this.contains](#SgApi.Wishlist.WishlistContainer.this.contains) ⇒ <code>boolean</code>
            * [.this.isWishlistedGame(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.isWishlistedGame) ⇒ <code>boolean</code>
            * [.this.get(steamAppId)](#SgApi.Wishlist.WishlistContainer.this.get) ⇒ <code>object</code>
            * [.this.list()](#SgApi.Wishlist.WishlistContainer.this.list) ⇒ <code>Object</code>
        * [.this.get(callback, forceSync)](#SgApi.Wishlist.this.get)
    * [.Util](#SgApi.Util) : <code>object</code>
        * [.this.parseBool(value)](#SgApi.Util.this.parseBool) ⇒ <code>boolean</code>
        * [.this.buildGiveawayUrl(id)](#SgApi.Util.this.buildGiveawayUrl) ⇒ <code>string</code>
        * [.this.buildDiscussionUrl(id)](#SgApi.Util.this.buildDiscussionUrl) ⇒ <code>string</code>
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
    * [.Notifications](#SgApi.Notifications) : <code>object</code>
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
    * [.Giveaways](#SgApi.Giveaways) : <code>object</code>
        * [.Giveaway](#SgApi.Giveaways.Giveaway)
            * [new Giveaway()](#new_SgApi.Giveaways.Giveaway_new)
            * [.id](#SgApi.Giveaways.Giveaway.id) ⇒ <code>string</code>
            * [.gameTitle](#SgApi.Giveaways.Giveaway.gameTitle) ⇒ <code>string</code>
            * [.cp](#SgApi.Giveaways.Giveaway.cp) ⇒ <code>int</code>
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
    * [.Notifications](#SgApi.Notifications) : <code>object</code>
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)

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
    * [.CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)
        * [.cpElement](#SgApi.Ui.CurrentGiveaway.cpElement) ⇒ <code>jQuery</code>
        * [.creatorElement](#SgApi.Ui.CurrentGiveaway.creatorElement) ⇒ <code>jQuery</code>
        * [.headerImageElement](#SgApi.Ui.CurrentGiveaway.headerImageElement) ⇒ <code>jQuery</code>
        * [.startTimeElement](#SgApi.Ui.CurrentGiveaway.startTimeElement) ⇒ <code>jQuery</code>
        * [.endTimeElement](#SgApi.Ui.CurrentGiveaway.endTimeElement) ⇒ <code>jQuery</code>
        * [.copiesElement](#SgApi.Ui.CurrentGiveaway.copiesElement) ⇒ <code>jQuery</code>
        * [.contributorLevelElement](#SgApi.Ui.CurrentGiveaway.contributorLevelElement) ⇒ <code>jQuery</code>
        * [.whitelistElement](#SgApi.Ui.CurrentGiveaway.whitelistElement) ⇒ <code>jQuery</code>
        * [.groupElement](#SgApi.Ui.CurrentGiveaway.groupElement) ⇒ <code>jQuery</code>
        * [.descriptionElement](#SgApi.Ui.CurrentGiveaway.descriptionElement) ⇒ <code>jQuery</code>
        * [.visibleButtonElement](#SgApi.Ui.CurrentGiveaway.visibleButtonElement) ⇒ <code>jQuery</code>
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
<a name="SgApi.Ui.CurrentGiveaway"></a>

#### Ui.CurrentGiveaway
Extension Module for SgApi.UI to get Giveaway-specific HTML elements.

**Kind**: static property of <code>[Ui](#SgApi.Ui)</code>  
**Declared**: in sgapi_gatools.js  

* [.CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)
    * [.cpElement](#SgApi.Ui.CurrentGiveaway.cpElement) ⇒ <code>jQuery</code>
    * [.creatorElement](#SgApi.Ui.CurrentGiveaway.creatorElement) ⇒ <code>jQuery</code>
    * [.headerImageElement](#SgApi.Ui.CurrentGiveaway.headerImageElement) ⇒ <code>jQuery</code>
    * [.startTimeElement](#SgApi.Ui.CurrentGiveaway.startTimeElement) ⇒ <code>jQuery</code>
    * [.endTimeElement](#SgApi.Ui.CurrentGiveaway.endTimeElement) ⇒ <code>jQuery</code>
    * [.copiesElement](#SgApi.Ui.CurrentGiveaway.copiesElement) ⇒ <code>jQuery</code>
    * [.contributorLevelElement](#SgApi.Ui.CurrentGiveaway.contributorLevelElement) ⇒ <code>jQuery</code>
    * [.whitelistElement](#SgApi.Ui.CurrentGiveaway.whitelistElement) ⇒ <code>jQuery</code>
    * [.groupElement](#SgApi.Ui.CurrentGiveaway.groupElement) ⇒ <code>jQuery</code>
    * [.descriptionElement](#SgApi.Ui.CurrentGiveaway.descriptionElement) ⇒ <code>jQuery</code>
    * [.visibleButtonElement](#SgApi.Ui.CurrentGiveaway.visibleButtonElement) ⇒ <code>jQuery</code>

<a name="SgApi.Ui.CurrentGiveaway.cpElement"></a>

##### CurrentGiveaway.cpElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.creatorElement"></a>

##### CurrentGiveaway.creatorElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.headerImageElement"></a>

##### CurrentGiveaway.headerImageElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.startTimeElement"></a>

##### CurrentGiveaway.startTimeElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.endTimeElement"></a>

##### CurrentGiveaway.endTimeElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.copiesElement"></a>

##### CurrentGiveaway.copiesElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.contributorLevelElement"></a>

##### CurrentGiveaway.contributorLevelElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.whitelistElement"></a>

##### CurrentGiveaway.whitelistElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.groupElement"></a>

##### CurrentGiveaway.groupElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.descriptionElement"></a>

##### CurrentGiveaway.descriptionElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
<a name="SgApi.Ui.CurrentGiveaway.visibleButtonElement"></a>

##### CurrentGiveaway.visibleButtonElement ⇒ <code>jQuery</code>
**Kind**: static property of <code>[CurrentGiveaway](#SgApi.Ui.CurrentGiveaway)</code>  
**Declared**: in sgapi_gatools.js  
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

<a name="SgApi.Settings"></a>

### SgApi.Settings
**Kind**: static class of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_settings.js  

* [.Settings](#SgApi.Settings)
    * [new Settings(settings_name)](#new_SgApi.Settings_new)
    * _instance_
        * [.get(name)](#SgApi.Settings+get) ⇒ <code>object</code> &#124; <code>undefined</code>
        * [.set(name, value)](#SgApi.Settings+set)
        * [.deleteAll()](#SgApi.Settings+deleteAll)
    * _static_
        * [.SettingsBuilder](#SgApi.Settings.SettingsBuilder)
            * [new SettingsBuilder()](#new_SgApi.Settings.SettingsBuilder_new)
            * [.this.boolean(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.boolean)
            * [.this.int(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.int)
            * [.this.float(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.float)
            * [.this.string(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.string)
            * [.this.enum(name, [values], [initialValues], [options])](#SgApi.Settings.SettingsBuilder.this.enum)
            * [.this.func(name, func, [options])](#SgApi.Settings.SettingsBuilder.this.func)
            * [.this.custom(name, divBuilder, [options])](#SgApi.Settings.SettingsBuilder.this.custom)
            * [.this.init([options])](#SgApi.Settings.SettingsBuilder.this.init) ⇒ <code>Settings</code>

<a name="new_SgApi.Settings_new"></a>

#### new Settings(settings_name)
**Returns**: <code>SettingsBuilder</code> - a Settings builder.  

| Param | Type | Description |
| --- | --- | --- |
| settings_name | <code>string</code> | the name of your settings. Will be displayed in the navigation menu on the account page. |

<a name="SgApi.Settings+get"></a>

#### settings.get(name) ⇒ <code>object</code> &#124; <code>undefined</code>
Get the value of a setting.

**Kind**: instance method of <code>[Settings](#SgApi.Settings)</code>  
**Returns**: <code>object</code> &#124; <code>undefined</code> - the value of the setting or undefined if the setting does not exist.  
**Declared**: in sgapi_settings.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name as defined in the SettingsBuilder |

<a name="SgApi.Settings+set"></a>

#### settings.set(name, value)
Change the value of a setting.

**Kind**: instance method of <code>[Settings](#SgApi.Settings)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name as defined in the SettingsBuilder |
| value | <code>object</code> | the value to set |

<a name="SgApi.Settings+deleteAll"></a>

#### settings.deleteAll()
Delete all saved Settings. They will be re-instanciated with their default values.

**Kind**: instance method of <code>[Settings](#SgApi.Settings)</code>  
**Declared**: in sgapi_settings.js  
<a name="SgApi.Settings.SettingsBuilder"></a>

#### Settings.SettingsBuilder
**Kind**: static class of <code>[Settings](#SgApi.Settings)</code>  
**Declared**: in sgapi_settings.js  

* [.SettingsBuilder](#SgApi.Settings.SettingsBuilder)
    * [new SettingsBuilder()](#new_SgApi.Settings.SettingsBuilder_new)
    * [.this.boolean(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.boolean)
    * [.this.int(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.int)
    * [.this.float(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.float)
    * [.this.string(name, initialValue, [options])](#SgApi.Settings.SettingsBuilder.this.string)
    * [.this.enum(name, [values], [initialValues], [options])](#SgApi.Settings.SettingsBuilder.this.enum)
    * [.this.func(name, func, [options])](#SgApi.Settings.SettingsBuilder.this.func)
    * [.this.custom(name, divBuilder, [options])](#SgApi.Settings.SettingsBuilder.this.custom)
    * [.this.init([options])](#SgApi.Settings.SettingsBuilder.this.init) ⇒ <code>Settings</code>

<a name="new_SgApi.Settings.SettingsBuilder_new"></a>

##### new SettingsBuilder()
Builder object to create your setttings. Once finished building, call init() to initialize this settings.

<a name="SgApi.Settings.SettingsBuilder.this.boolean"></a>

##### SettingsBuilder.this.boolean(name, initialValue, [options])
Create a boolean setting.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| initialValue | <code>boolean</code> |  | the initial value for this setting. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.values] | <code>Array.&lt;string&gt;</code> | <code>[&quot;No&quot;, &quot;Yes&quot;]</code> | values to display instead of "No" and "Yes". Please note that the negative value is at index 0 and the positive value at index 1. |

<a name="SgApi.Settings.SettingsBuilder.this.int"></a>

##### SettingsBuilder.this.int(name, initialValue, [options])
Create an integer setting. The input field will only accept integer values.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| initialValue | <code>int</code> |  | the initial value for this setting. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.minValue] | <code>int</code> |  | if set, the UI will not accept inputs smaller than minValue |
| [options.maxValue] | <code>int</code> |  | if set, the UI will not accept inputs greater than minValue |
| [options.validate] | <code>function</code> |  | an additional validation function to validate the inputs in the UI |

<a name="SgApi.Settings.SettingsBuilder.this.float"></a>

##### SettingsBuilder.this.float(name, initialValue, [options])
Create a float setting. The input field will only accept numbers.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| initialValue | <code>number</code> |  | the initial value for this setting. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.minValue] | <code>number</code> |  | if set, the UI will not accept inputs smaller than minValue |
| [options.maxValue] | <code>number</code> |  | if set, the UI will not accept inputs greater than maxValue |
| [options.validate] | <code>function</code> |  | an additional validation function to validate the inputs in the UI |

<a name="SgApi.Settings.SettingsBuilder.this.string"></a>

##### SettingsBuilder.this.string(name, initialValue, [options])
Create a string setting.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| initialValue | <code>string</code> |  | the initial value for this setting. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.minLength] | <code>number</code> | <code>0</code> | if set, the UI will not accept inputs shorter than minLength |
| [options.maxLength] | <code>number</code> |  | if set, the UI will not accept inputs longer than maxLength |
| [options.validate] | <code>function</code> |  | an additional validation function to validate the inputs in the UI |

<a name="SgApi.Settings.SettingsBuilder.this.enum"></a>

##### SettingsBuilder.this.enum(name, [values], [initialValues], [options])
Create an enum setting. The selected values will be saved as an array of indices, whereas the values array will hold their string representations.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI as well as the key that you use to read and write this setting in your code. |
| [values] | <code>Array.&lt;string&gt;</code> |  | the avialable options to choose from |
| [initialValues] | <code>Array.&lt;int&gt;</code> | <code>[]</code> | the initially selected values for this setting. Array of indices that correspond to the values array. |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code> for your setting on the settings page |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.editable] | <code>boolean</code> | <code>true</code> | if false, this setting is rendered to the UI but won't be editable |
| [options.maxSelected] | <code>int</code> | <code>1</code> | number of options that can be selected. If 1, the UI will behave like a HTML options element. If > 1, it will behave like a checkbox group and refuse to select more items than the specified number. |

<a name="SgApi.Settings.SettingsBuilder.this.func"></a>

##### SettingsBuilder.this.func(name, func, [options])
Creates a button setting that will invoke the given function when clicked.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI. |
| func | <code>function</code> |  | the function to invoke on click |
| [options] | <code>object</code> |  |  |
| [options.description] | <code>string</code> |  | optional description of this setting. |
| [options.title] | <code>string</code> |  | a title different from <code>name</code>. |
| [options.label] | <code>string</code> |  | the text on your button. If undefined, it will be the same as name |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |
| [options.faIcon] | <code>string</code> |  | an font awesome icon to be displayed on your button, e.g. "fa-cog" |

<a name="SgApi.Settings.SettingsBuilder.this.custom"></a>

##### SettingsBuilder.this.custom(name, divBuilder, [options])
Creates a custom setting with the content provided by divBuilder.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name for this setting. Must be unique in this settings object. The name will be the label of the Setting in the UI. |
| divBuilder | <code>function</code> |  | a function that returns a div-element that contains your custom html code. |
| [options] | <code>object</code> |  |  |
| [options.title] | <code>string</code> |  | a title different from <code>name</code>. |
| [options.visible] | <code>boolean</code> | <code>true</code> | if false, this setting will be hidden from the UI. |

<a name="SgApi.Settings.SettingsBuilder.this.init"></a>

##### SettingsBuilder.this.init([options]) ⇒ <code>Settings</code>
Initializes this Settings object.

**Kind**: static method of <code>[SettingsBuilder](#SgApi.Settings.SettingsBuilder)</code>  
**Returns**: <code>Settings</code> - the Settings object to read and save your settings  
**Declared**: in sgapi_settings.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  |  |
| [options.useGmStorage] | <code>boolean</code> | <code>false</code> | save the data using GM_setValue and GM_getValue instead of localStorage. Since localStorage can be read by every script, it is strongly recommended to set this flag to true if you save sentive data like API keys in your settings. Remember that you need to grant GM_setValue, GM_getValue and GM_deleteValue for this to work, which also may change your sandboxing mode. Read the chapter about jQuery for more information. |
| [options.instantSubmit] | <code>boolean</code> | <code>false</code> | Don't show a "Save" button, but instantly save the data on change. |
| [options.section] | <code>string</code> | <code>&quot;\&quot;Userscripts\&quot;&quot;</code> | The section in the left sidebar in which the Settings will appear. For the sake of usability, it is recommended not the change this, so that the users don't have an unnecessarily cluttered sidebar. |
| [options.infoBox] | <code>boolean</code> | <code>true</code> | if set to false, the info box below the "Save" button will not be rendered. |

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

<a name="SgApi.Util"></a>

### SgApi.Util : <code>object</code>
SgApi.Util is a central collection of useful recurring tasks. It is recommended to import the Utils into your namespace by use(SgApi.Util).

**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi.js  

* [.Util](#SgApi.Util) : <code>object</code>
    * [.this.parseBool(value)](#SgApi.Util.this.parseBool) ⇒ <code>boolean</code>
    * [.this.buildGiveawayUrl(id)](#SgApi.Util.this.buildGiveawayUrl) ⇒ <code>string</code>
    * [.this.buildDiscussionUrl(id)](#SgApi.Util.this.buildDiscussionUrl) ⇒ <code>string</code>
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
| regex | <code>Regex</code> | a regular expression |
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

<a name="SgApi.Notifications"></a>

### SgApi.Notifications : <code>object</code>
**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_notifications.js  

* [.Notifications](#SgApi.Notifications) : <code>object</code>
    * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
    * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)

<a name="SgApi.Notifications.this.notify"></a>

#### Notifications.this.notify(type, $content, [opt])
Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.

**Kind**: static method of <code>[Notifications](#SgApi.Notifications)</code>  
**Declared**: in sgapi_notifications.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | one of "info", "success", "warning", "danger", "none" |
| $content | <code>jQuery</code> &#124; <code>string</code> |  | a jQuery object or a string holding the HTML content to add |
| [opt] | <code>Object</code> |  | options |
| [opt.closable] | <code>boolean</code> | <code>true</code> | indicates whether the notification should be closable by the user via the "x" |
| [opt.noQueue] | <code>boolean</code> | <code>false</code> | if set, the notification will only be shown if there is no other active notification |
| [opt.key] | <code>boolean</code> |  | if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script. |
| [opt.duration] | <code>boolean</code> | <code>0</code> | if duration is >0, the notification will auto-close after that amount of milliseconds. |

**Example**  
```js
//This Notification will be displayed everytime until the user disposes it by clicking the "x"Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});//This notification will auto-close after 10 secondsNotifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
```
<a name="SgApi.Notifications.this.notify"></a>

#### Notifications.this.notify(type, $content, [opt])
Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.

**Kind**: static method of <code>[Notifications](#SgApi.Notifications)</code>  
**Declared**: in sgapi_notifications.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | one of "info", "success", "warning", "danger", "none" |
| $content | <code>jQuery</code> &#124; <code>string</code> |  | a jQuery object or a string holding the HTML content to add |
| [opt] | <code>Object</code> |  | options |
| [opt.closable] | <code>boolean</code> | <code>true</code> | indicates whether the notification should be closable by the user via the "x" |
| [opt.noQueue] | <code>boolean</code> | <code>false</code> | if set, the notification will only be shown if there is no other active notification |
| [opt.key] | <code>boolean</code> |  | if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script. |
| [opt.duration] | <code>boolean</code> | <code>0</code> | if duration is >0, the notification will auto-close after that amount of milliseconds. |

**Example**  
```js
//This Notification will be displayed everytime until the user disposes it by clicking the "x"Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});//This notification will auto-close after 10 secondsNotifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
```
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
<a name="SgApi.Notifications"></a>

### SgApi.Notifications : <code>object</code>
**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_notifications.js  

* [.Notifications](#SgApi.Notifications) : <code>object</code>
    * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)
    * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)

<a name="SgApi.Notifications.this.notify"></a>

#### Notifications.this.notify(type, $content, [opt])
Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.

**Kind**: static method of <code>[Notifications](#SgApi.Notifications)</code>  
**Declared**: in sgapi_notifications.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | one of "info", "success", "warning", "danger", "none" |
| $content | <code>jQuery</code> &#124; <code>string</code> |  | a jQuery object or a string holding the HTML content to add |
| [opt] | <code>Object</code> |  | options |
| [opt.closable] | <code>boolean</code> | <code>true</code> | indicates whether the notification should be closable by the user via the "x" |
| [opt.noQueue] | <code>boolean</code> | <code>false</code> | if set, the notification will only be shown if there is no other active notification |
| [opt.key] | <code>boolean</code> |  | if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script. |
| [opt.duration] | <code>boolean</code> | <code>0</code> | if duration is >0, the notification will auto-close after that amount of milliseconds. |

**Example**  
```js
//This Notification will be displayed everytime until the user disposes it by clicking the "x"Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});//This notification will auto-close after 10 secondsNotifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
```
<a name="SgApi.Notifications.this.notify"></a>

#### Notifications.this.notify(type, $content, [opt])
Creates and shows a new notification. If there is already a notificaiton displayed, the new one will be queued and displayed after the old has been disposed.

**Kind**: static method of <code>[Notifications](#SgApi.Notifications)</code>  
**Declared**: in sgapi_notifications.js  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | one of "info", "success", "warning", "danger", "none" |
| $content | <code>jQuery</code> &#124; <code>string</code> |  | a jQuery object or a string holding the HTML content to add |
| [opt] | <code>Object</code> |  | options |
| [opt.closable] | <code>boolean</code> | <code>true</code> | indicates whether the notification should be closable by the user via the "x" |
| [opt.noQueue] | <code>boolean</code> | <code>false</code> | if set, the notification will only be shown if there is no other active notification |
| [opt.key] | <code>boolean</code> |  | if set, SgApi will remember that the user has already seen this notification and will only display it once. Useful to notifiy users about a new version of your script. |
| [opt.duration] | <code>boolean</code> | <code>0</code> | if duration is >0, the notification will auto-close after that amount of milliseconds. |

**Example**  
```js
//This Notification will be displayed everytime until the user disposes it by clicking the "x"Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});//This notification will auto-close after 10 secondsNotifications.notify("warning", "This notification will close in 10 seconds", {duration: 10000, closable:false});
```
