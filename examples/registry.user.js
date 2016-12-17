// ==UserScript==
// @name         SgApi ScriptRegistry Example
// @namespace    https://github.com/maherm/sgapi
// @version      0.2
// @author       mahermen
// @downloadURL  https://raw.githubusercontent.com/maherm/sgapi/master/examples/registry.user.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.2/sgapi.js
// @resource     fix_require_example https://raw.githubusercontent.com/maherm/sgapi/master/examples/example_undo.css
// @match        https://www.steamgifts.com/*
// @grant        GM_getResourceText
// ==/UserScript==

//We need to enqueue our script at the end, to make sure all userscripts are initialized and registered before we read the Registry
SgApi.Util.enqueue(function() {
    use(SgApi, this);
    if(SgApi.ScriptRegistry.existsMin("SgApi RequireCss Example", "0.1")){
        SgApi.Util.requireCss("fix_require_example");
    }else{
        console.log("You're good, nothing to fix!");
    }

    //You code here...
});