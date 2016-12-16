<a name="SgApi"></a>

## SgApi : <code>object</code>
**Kind**: global namespace  

* [SgApi](#SgApi) : <code>object</code>
    * [.Notifications](#SgApi.Notifications) : <code>object</code>
        * [.this.notify(type, $content, [opt])](#SgApi.Notifications.this.notify)

<a name="SgApi.Notifications"></a>

### SgApi.Notifications : <code>object</code>
**Kind**: static namespace of <code>[SgApi](#SgApi)</code>  
**Declared**: in sgapi_notifications.js  
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
