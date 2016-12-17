// ==UserScript==
// @name         SgApi Notifications Example
// @namespace    https://github.com/maherm/sgapi/
// @version      0.2
// @author       mahermen
// @downloadURL  https://raw.githubusercontent.com/maherm/sgapi/master/examples/notifications.user.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.2/sgapi.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.2/sgapi_notifications.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.2/sgapi_gatools.js
// @match        https://www.steamgifts.com/giveaway/*
// ==/UserScript==

use(SgApi);

//This Notification will be displayed every time until the user disposes it by clicking the "x"
Notifications.notify("info", "New Version: 2.3 - New Features include nicer header and world domination", {key:"Version23"});

var minutes = 2;
var timeRemaining = Giveaways.currentGiveaway().endTime * 1000 - new Date().getTime();

if(timeRemaining <= 0){

    Notifications.notify("danger", "This giveaway has ended");

}else if(timeRemaining < minutes * 60 * 1000){

    //This notification will auto-close after {timeRemaining} milliseconds
    Notifications.notify("warning", "This giveaway ends in less than "+minutes+" minutes", {duration: timeRemaining, closable:false});

    //This notification will be displayed after the last one has been closed.
    //Since we have set closable=false and duration, this means it will be displayed exactly when the GA ends
    Notifications.notify("danger", "This giveaway has ended");

}else{

    Notifications.notify("success", "There is still plenty of time to enter");

}

