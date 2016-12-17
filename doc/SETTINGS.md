## Module: Settings

**Module Name:** Settings  
**Examples:** [1](https://github.com/maherm/sgapi/tree/master/examples/settings.user.js)  
**Include Code:**
```javascript
//@require  https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_settings.js
```

### Settings - Example
```javascript
// ==UserScript==
// @name         Mini Example Settings
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.5/sgapi_settings.js
// @include      http*://www.steamgifts.com/*
// ==/UserScript==

var settings = new SgApi.Settings("Mini example")
	.boolean("Do spin", true)
	.int("Spin times", 10, {minValue:1})
	.init();

if(settings.get("Do spin")){
	var times = settings.get("Spin times");
	for(times; times>0; times--)
		console.log("Round, round baby round, round");
}
```  

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
        .enum   ("Theme"			, ["Dark","Blue","Original"]	, 2)
		.func   ("Reset"			, function(){alert("Hell yea");})
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

Check the docs(this page) for more details on the options or just [install the example](https://github.com/maherm/sgapi/raw/master/examples/settings.user.js) and play around a little bit. Don't forget that your script needs to @match /account/* for the settings to appear there.

By default, the settings are saved in the localStorage, so that no additional @grants are necessary. Keep in mind that localStorage can be accessed by any script on SteamGifts. So if you have sensitive data in your settings, e.g. an API key or something like that, it is highly recommended to initialize your Settings with the "useGmStorage" option. For that to work, you need to @grant GM_setValue, GM_getValue, and GM_deleteValue.

```javascript
settings = settings.init({useGmStorage:true});
```

Although it is possible to define a custom section for your Settings to reside in, for the sake of usability, it is not recommended. This way, the users don't have an unnecessarily cluttered sidebar and always know where to look if they want to change a setting from any Userscript.

## Settings - JsDoc

<a name="SgApi"></a>

## SgApi : <code>object</code>
**Kind**: global namespace  

* [SgApi](#SgApi) : <code>object</code>
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

