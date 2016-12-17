echo. > ns
echo /**  >> ns
echo * @namespace >> ns
echo * @name SgApi >> ns
echo **/ >> ns

call jsdoc2md sgapi.js > doc/CORE.md

copy sgapi_settings.js sgapi_doc.js
cat ns >> sgapi_doc.js
call jsdoc2md sgapi_doc.js > doc/SETTINGS.md

copy sgapi_wishlist.js sgapi_doc.js
cat ns >> sgapi_doc.js
call jsdoc2md sgapi_doc.js > doc/WISHLIST.md

copy sgapi_gatools.js sgapi_doc.js
cat ns >> sgapi_doc.js
call jsdoc2md sgapi_doc.js > doc/GATOOLS.md

copy sgapi_notifications.js sgapi_doc.js
cat ns >> sgapi_doc.js
call jsdoc2md sgapi_doc.js > doc/NOTIFICATIONS.md

call jsdoc2md *.js > doc/COMPLETE.md

del sgapi_doc.js
del ns