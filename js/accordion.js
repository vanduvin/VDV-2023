var AU=AU||{};!function(r){var e={};function s(e,t,n){"closing"===n?e.setAttribute("aria-expanded",!1):e.setAttribute("aria-expanded",!0)}function u(e,t,n,o){if("opening"===t||"open"===t)var i=n||"au-accordion--closed",a=o||"au-accordion--open";else i=o||"au-accordion--open",a=n||"au-accordion--closed";!function l(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,i),function c(e,t){e.classList?e.classList.add(t):e.className=e.className+" "+t}(e,a)}e.Toggle=function(e,t,o){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(c){}e.length===undefined&&(e=[e]),"object"!=typeof o&&(o={});for(var n=0;n<e.length;n++){var i=e[n],a=i.getAttribute("aria-controls"),l=document.getElementById(a);if(null==l)throw new Error("AU.accordion.Toggle cannot find the target to be toggled from inside aria-controls.\nMake sure the first argument you give AU.accordion.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points to a div that you want to toggle.");l.style.display="block",function(n){r.animate.Toggle({element:l,property:"height",speed:t||250,prefunction:function(e,t){"opening"===t?(e.style.display="block","function"==typeof o.onOpen&&o.onOpen()):"function"==typeof o.onClose&&o.onClose(),s(n,0,t),u(n,t)},postfunction:function(e,t){"closed"===t?(e.style.display="",e.style.height="","function"==typeof o.afterClose&&o.afterClose()):(e.style.display="",e.style.height="","function"==typeof o.afterOpen&&o.afterOpen()),u(e,t)}})}(i)}return!1},e.Open=function(e,t){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(c){}e.length===undefined&&(e=[e]);for(var n=0;n<e.length;n++){var o=e[n],i=o.getAttribute("aria-controls"),a=document.getElementById(i),l=0;l="undefined"!=typeof getComputedStyle?window.getComputedStyle(a).height:a.currentStyle.height,0===parseInt(l)&&(a.style.height="0px"),a.style.display="",u(a,"opening"),u(o,"opening"),s(o,0,"opening"),function(e,t,n){r.animate.Run({element:e,property:"height",endSize:"auto",speed:t||250,callback:function(){u(n,"opening")}})}(a,t,o)}},e.Close=function(e,t){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(l){}e.length===undefined&&(e=[e]);for(var n=0;n<e.length;n++){var o=e[n],i=o.getAttribute("aria-controls"),a=document.getElementById(i);u(o,"closing"),s(o,0,"closing"),function(e,t){r.animate.Run({element:e,property:"height",endSize:0,speed:t||250,callback:function(){e.style.display="",u(e,"close")}})}(a,t)}},r.accordion=e}(AU),"undefined"!=typeof module&&(module.exports=AU);