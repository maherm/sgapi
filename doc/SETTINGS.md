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

