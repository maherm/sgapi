// ==UserScript==
// @name         SgApi RequireCss Example
// @namespace    https://github.com/maherm/sgapi/
// @version      0.1
// @author       mahermen
// @downloadURL  https://raw.githubusercontent.com/maherm/sgapi/master/examples/require.user.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.0/sgapi.js
// @resource     css https://raw.githubusercontent.com/maherm/sgapi/master/examples/example.css
// @resource     local file:///C:/test.css
// @match        https://www.steamgifts.com/*
// @grant        GM_getResourceText
// ==/UserScript==

use(SgApi.Util);

requireCss('https://manuelhermenau.de/scripts/test.css'); //require a css file by URL

//requireCss("local"); //while developing, require a local css file from your resources
requireCss("css"); //require a css file from your resources
requireResourceCss("css"); //this has actually the same effect than the line above

//If you have multiple css files declared in your resources, you can just tell SgApi
//to require all of them. It will then look for files with the *.css suffix in your
//resource declarations and require them
requireDeclaredResources();

//If you prefer to, you can also keep injecting css right from the code
//You don't even need GM_addStyles
injectCss("\
a{\
	color: #d64b4b;\
}\
");