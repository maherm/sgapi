// ==UserScript==
// @name         SgApi ScriptRegistry Example
// @namespace    https://github.com/maherm/sgapi
// @version      0.5
// @author       mahermen
// @downloadURL  https://raw.githubusercontent.com/maherm/sgapi/master/examples/registry.user.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.3/sgapi.js
// @resource     fix_require_example https://raw.githubusercontent.com/maherm/sgapi/v0.1.3/examples/example_undo.css
// @match        https://www.steamgifts.com/*
// @grant        GM_getResourceText
// ==/UserScript==

//We need to enqueue our script at the end, to make sure all userscripts are initialized and registered before we read the Registry
SgApi.Util.enqueue(function() {
    if(SgApi.ScriptRegistry.existsMin("SgApi RequireCss Example", "0.1")){
		console.log("Uuugh, that's ugly. Let me fix that for you :-)");
        SgApi.Util.requireCss("fix_require_example");
    }else{
        console.log("You're good, nothing to fix!");
    }
});