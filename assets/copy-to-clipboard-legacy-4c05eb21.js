System.register(["./toggle-selection-legacy-a46f82ed.js"],(function(e,t){"use strict";var a;return{setters:[function(e){a=e.t}],execute:function(){e("c","undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{});var t=a,o={"text/plain":"Text","text/html":"Url",default:"Text"};e("a",(function(e,a){var n,r,l,i,c,s=!1;a||(a={}),a.debug;try{if(r=t(),l=document.createRange(),i=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(t){if(t.stopPropagation(),a.format)if(t.preventDefault(),void 0===t.clipboardData){window.clipboardData.clearData();var n=o[a.format]||o.default;window.clipboardData.setData(n,e)}else t.clipboardData.clearData(),t.clipboardData.setData(a.format,e);a.onCopy&&(t.preventDefault(),a.onCopy(t.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),i.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(d){try{window.clipboardData.setData(a.format||"text",e),a.onCopy&&a.onCopy(window.clipboardData),s=!0}catch(d){n=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in a?a.message:"Copy to clipboard: #{key}, Enter"),window.prompt(n,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(l):i.removeAllRanges()),c&&document.body.removeChild(c),r()}return s}))}}}));
