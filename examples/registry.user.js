// ==UserScript==
// @name         SgApi ScriptRegistry Example
// @namespace    https://github.com/maherm/sgapi
// @version      0.8
// @author       mahermen
// @downloadURL  https://raw.githubusercontent.com/maherm/sgapi/master/examples/registry.user.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.6/sgapi.js
// @resource     fix_require_example https://raw.githubusercontent.com/maherm/sgapi/v0.1.6/examples/example_undo.css
// @match        https://www.steamgifts.com/*
// @grant        GM_getResourceText
// ==/UserScript==

var fixIt = function() {
	console.log(SgApi.ScriptRegistry.list());
    if(SgApi.ScriptRegistry.existsMin("SgApi RequireCss Example", "0.1")){
		console.log("Uuugh, that's ugly. Let me fix that for you :-)");
        SgApi.Util.requireCss("fix_require_example");
    }else{
        console.log("You're good, nothing to fix!");
    }
};

fixIt();

//Since it may be that the other script was not initialized yet,
//we need check again when new scripts register
SgApi.ScriptRegistry.onRegister(fixIt);

