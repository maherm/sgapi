// ==UserScript==
// @name         SgApi Settings Example
// @namespace    https://github.com/maherm/sgapi/
// @version      0.5
// @author       mahermen
// @downloadURL  https://raw.githubusercontent.com/maherm/sgapi/master/examples/settings.user.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.4/sgapi.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.4/sgapi_settings.js
// @match        https://www.steamgifts.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// ==/UserScript==

use(SgApi);

var settings = new Settings("Test Settings")
	.boolean("A bool value"		, true)

//Wth the options parameter, you can tweak the setting to your liking
	.boolean("Make trains"		, true	        , {description:"Automatically make a train when you win something", values: ["Never", "Always"]})
	.int    ("Hidden"           , 5		        , {visible: false})

//Every type of setting has specific options. Check the docs on https://github.com/maherm/sgapi to see them all
    .int    ("Minutes"			, 5		        , {minValue: 0, maxValue:15, description:"Minutes till expiration."})
	.float  ("Ratio"			, 0.5	        , {minValue: 0, maxValue:1.5, description:"Minimum ratio to enter", editable: false})
	.string ("A string value"	, "Lorem ipsum" , {minLength: 4, maxLength:11})

//But you can do more than just save primitives. You can also create buttons and bind a function to it
	.func   ("Reset"            , function(){alert("Hell yea");}, {description: "Do something", label:"Do it"})

//Or let the user choose from multiple values
	.enum   ("Theme", ["Dark","Blue","Original"], 1)
	.enum   ("Food", ["Banana","Potato","Orange"], [1,2], {maxSelected:2, title:"What do you like to eat?"})
;

//After initialising, your Settings are avialable
settings=settings.init({instantSubmit: true});

//You can read them
if(settings.get("Make trains")){
	console.log("I like turtles");
}

//..and you can write them
settings.set("A bool value", !settings.get("A bool value"));
console.log("A bool value is", settings.get("A bool value"));

//You can define as many Settings objects as you like - every one of them is a new entry in the sidebar menu on your account page
var settingsAdvanced = new Settings("Test Settings")
	.string("Steam Api Key", "-", {description:"Get it at <a href='https://steamcommunity.com/dev/apikey'>https://steamcommunity.com/dev/apikey</a>"})

//If you want to do something that is not supported by SgApi, just build a custom div and add it as a Setting.
	.custom ("Profitz", function(){return $("<img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3f/3f14e41522d0863323e54376793220fa4ac3b2ec_full.jpg'></img>");})
;

var options = {
//If you don't want your settings be accessible by third party scripts, initialize with "useGmStorage" - but remember to add the GM_*Value @grants to your header
    useGmStorage:true,
//Even though it is possible to let your Settings reside in a custom section, it is advised against, so that the user won't have tons of different "Settings" sections in his sidebar
    section:"Advanced"
};
settingsAdvanced = settingsAdvanced.init(options);
