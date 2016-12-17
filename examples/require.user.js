// ==UserScript==
// @name         SgApi RequireCss Example
// @namespace    https://github.com/maherm/sgapi/
// @version      0.5
// @author       mahermen
// @downloadURL  https://raw.githubusercontent.com/maherm/sgapi/master/examples/require.user.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      https://raw.githubusercontent.com/maherm/sgapi/v0.1.4/sgapi.js
// @resource     css https://raw.githubusercontent.com/maherm/sgapi/v0.1.4/examples/example.css
// @match        https://www.steamgifts.com/*
// @grant        GM_getResourceText
// ==/UserScript==

use(SgApi.Util);

//require a css file by URL
//NOTICE: You can not link files from raw.githubusercontent.com by providing an URL to this function, because GitHub prevents this by setting the 'nosniff' header. You can, however, replace 'raw.githubusercontent.com' in your URL string by 'rawgit.com'. Rawgit.com is a service that removes this header. Note that rawgit is a service on it's own and not afiliated with GitHub. Check https://github.com/rgrove/rawgit/wiki/Frequently-Asked-Questions for more details.
requireCss('https://rawgit.com/maherm/sgapi/master/examples/example.css'); 



//while developing, you can require a local css file from your resources
// @resource     local file:///C:/test.css
//requireCss("local"); 

//require a css file from your resources
//NOTICE: For embedding CSS from your resources, you CAN use raw.githubusercontent.com, because the code is embedded in the page (<style>[code]</style>) instead of linked (<link src='url'>).
requireCss("css"); 
requireResourceCss("css"); //this has actually the same effect than the line above

//If you have multiple css files declared in your resources, you can just tell SgApi
//to require all of them. It will then look for files with the *.css suffix in your
//resource declarations and require them
requireDeclaredStyles();

//If you prefer to, you can also keep injecting css right from the code
//You don't even need GM_addStyles
injectCss("\
a{\
	color: #d64b4b;\
}\
");
