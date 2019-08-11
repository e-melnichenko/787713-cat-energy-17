window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var r,n=document.createElement("style"),e=document.getElementsByTagName("script")[0];n.type="text/css",n.id="matchmediajs-test",e.parentNode.insertBefore(n,e),r="getComputedStyle"in window&&window.getComputedStyle(n,null)||n.currentStyle,t={matchMedium:function(e){var t="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return n.styleSheet?n.styleSheet.cssText=t:n.textContent=t,"1px"===r.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),function(l,u,e){"use strict";function t(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e:"function"==typeof define&&define.amd&&define("picturefill",function(){return e}),"object"==typeof l&&(l.picturefill=e)}function i(e){for(var t,r,n,i,s,o=e||{},a=0,c=(t=o.elements||d.getAllElements()).length;a<c;a++)if(n=(r=t[a]).parentNode,s=i=void 0,"IMG"===r.nodeName.toUpperCase()&&(r[d.ns]||(r[d.ns]={}),o.reevaluate||!r[d.ns].evaluated)){if(n&&"PICTURE"===n.nodeName.toUpperCase()){if(d.removeVideoShim(n),!1===(i=d.getMatch(r,n)))continue}else i=void 0;(n&&"PICTURE"===n.nodeName.toUpperCase()||!d.sizesSupported&&r.srcset&&p.test(r.srcset))&&d.dodgeSrcset(r),i?(s=d.processSourceSet(i),d.applyBestCandidate(s,r)):(s=d.processSourceSet(r),(void 0===r.srcset||r[d.ns].srcset)&&d.applyBestCandidate(s,r)),r[d.ns].evaluated=!0}}if(l.HTMLPictureElement)t(function(){});else{u.createElement("picture");var n,s,r,d=l.picturefill||{},p=/\s+\+?\d+(e\d+)?w/;d.ns="picturefill",d.srcsetSupported="srcset"in e,d.sizesSupported="sizes"in e,d.curSrcSupported="currentSrc"in e,d.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},d.makeUrl=(r=u.createElement("a"),function(e){return r.href=e,r.href}),d.restrictsMixedContent=function(){return"https:"===l.location.protocol},d.matchesMedia=function(e){return l.matchMedia&&l.matchMedia(e).matches},d.getDpr=function(){return l.devicePixelRatio||1},d.getWidthFromLength=function(e){var t;if(!e||-1<e.indexOf("%")!=0||!(0<parseFloat(e)||-1<e.indexOf("calc(")))return!1;e=e.replace("vw","%"),d.lengthEl||(d.lengthEl=u.createElement("div"),d.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",d.lengthEl.className="helper-from-picturefill-js"),d.lengthEl.style.width="0px";try{d.lengthEl.style.width=e}catch(e){}return u.body.appendChild(d.lengthEl),(t=d.lengthEl.offsetWidth)<=0&&(t=!1),u.body.removeChild(d.lengthEl),t},d.detectTypeSupport=function(e,t){var r=new l.Image;return r.onerror=function(){d.types[e]=!1,i()},r.onload=function(){d.types[e]=1===r.width,i()},r.src=t,"pending"},d.types=d.types||{},d.initTypeDetects=function(){d.types["image/jpeg"]=!0,d.types["image/gif"]=!0,d.types["image/png"]=!0,d.types["image/svg+xml"]=u.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),d.types["image/webp"]=d.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},d.verifyTypeSupport=function(e){var t=e.getAttribute("type");if(null===t||""===t)return!0;var r=d.types[t];return"string"==typeof r&&"pending"!==r?(d.types[t]=d.detectTypeSupport(t,r),"pending"):"function"==typeof r?(r(),"pending"):r},d.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},d.findWidthFromSourceSize=function(e){for(var t,r=d.trim(e).split(/\s*,\s*/),n=0,i=r.length;n<i;n++){var s=r[n],o=d.parseSize(s),a=o.length,c=o.media;if(a&&(!c||d.matchesMedia(c))&&(t=d.getWidthFromLength(a)))break}return t||Math.max(l.innerWidth||0,u.documentElement.clientWidth)},d.parseSrcset=function(e){for(var t=[];""!==e;){var r,n=(e=e.replace(/^\s+/g,"")).search(/\s/g),i=null;if(-1!==n){if((","===(r=e.slice(0,n)).slice(-1)||""===r)&&(r=r.replace(/,+$/,""),i=""),e=e.slice(n+1),null===i){var s=e.indexOf(",");e=-1!==s?(i=e.slice(0,s),e.slice(s+1)):(i=e,"")}}else r=e,e="";(r||i)&&t.push({url:r,descriptor:i})}return t},d.parseDescriptor=function(e,t){var r,n=t||"100vw",i=e&&e.replace(/(^\s+|\s+$)/g,""),s=d.findWidthFromSourceSize(n);if(i)for(var o=i.split(" "),a=o.length-1;0<=a;a--){var c=o[a],l=c&&c.slice(c.length-1);if("h"!==l&&"w"!==l||d.sizesSupported){if("x"===l){var u=c&&parseFloat(c,10);r=u&&!isNaN(u)?u:1}}else r=parseFloat(parseInt(c,10)/s)}return r||1},d.getCandidatesFromSourceSet=function(e,t){for(var r=d.parseSrcset(e),n=[],i=0,s=r.length;i<s;i++){var o=r[i];n.push({url:o.url,resolution:d.parseDescriptor(o.descriptor,t)})}return n},d.dodgeSrcset=function(e){e.srcset&&(e[d.ns].srcset=e.srcset,e.srcset="",e.setAttribute("data-pfsrcset",e[d.ns].srcset))},d.processSourceSet=function(e){var t=e.getAttribute("srcset"),r=e.getAttribute("sizes"),n=[];return"IMG"===e.nodeName.toUpperCase()&&e[d.ns]&&e[d.ns].srcset&&(t=e[d.ns].srcset),t&&(n=d.getCandidatesFromSourceSet(t,r)),n},d.backfaceVisibilityFix=function(e){var t=e.style||{},r="webkitBackfaceVisibility"in t,n=t.zoom;r&&(t.zoom=".999",r=e.offsetWidth,t.zoom=n)},d.setIntrinsicSize=(n={},s=function(e,t,r){t&&e.setAttribute("width",parseInt(t/r,10))},function(e,t){var r;e[d.ns]&&!l.pfStopIntrinsicSize&&(void 0===e[d.ns].dims&&(e[d.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[d.ns].dims||(t.url in n?s(e,n[t.url],t.resolution):((r=u.createElement("img")).onload=function(){if(n[t.url]=r.width,!n[t.url])try{u.body.appendChild(r),n[t.url]=r.width||r.offsetWidth,u.body.removeChild(r)}catch(e){}e.src===t.url&&s(e,n[t.url],t.resolution),e=null,r.onload=null,r=null},r.src=t.url)))}),d.applyBestCandidate=function(e,t){var r,n,i;e.sort(d.ascendingSort),i=e[(n=e.length)-1];for(var s=0;s<n;s++)if((r=e[s]).resolution>=d.getDpr()){i=r;break}i&&(i.url=d.makeUrl(i.url),t.src!==i.url&&(d.restrictsMixedContent()&&"http:"===i.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+i.url):(t.src=i.url,d.curSrcSupported||(t.currentSrc=t.src),d.backfaceVisibilityFix(t))),d.setIntrinsicSize(t,i))},d.ascendingSort=function(e,t){return e.resolution-t.resolution},d.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var r=t[0],n=r.getElementsByTagName("source");n.length;)e.insertBefore(n[0],r);r.parentNode.removeChild(r)}},d.getAllElements=function(){for(var e=[],t=u.getElementsByTagName("img"),r=0,n=t.length;r<n;r++){var i=t[r];("PICTURE"===i.parentNode.nodeName.toUpperCase()||null!==i.getAttribute("srcset")||i[d.ns]&&null!==i[d.ns].srcset)&&e.push(i)}return e},d.getMatch=function(e,t){for(var r,n=t.childNodes,i=0,s=n.length;i<s;i++){var o=n[i];if(1===o.nodeType){if(o===e)return r;if("SOURCE"===o.nodeName.toUpperCase()){null!==o.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var a=o.getAttribute("media");if(o.getAttribute("srcset")&&(!a||d.matchesMedia(a))){var c=d.verifyTypeSupport(o);if(!0===c){r=o;break}if("pending"===c)return!1}}}}return r},function(){function e(){clearTimeout(t),t=setTimeout(n,60)}d.initTypeDetects(),i();var t,r=setInterval(function(){return i(),/^loaded|^i|^c/.test(u.readyState)?void clearInterval(r):void 0},250),n=function(){i({reevaluate:!0})};l.addEventListener?l.addEventListener("resize",e,!1):l.attachEvent&&l.attachEvent("onresize",e)}(),i._=d,t(i)}}(window,window.document,new window.Image);