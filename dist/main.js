(()=>{"use strict";var n={402:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),i=t.n(r),o=t(645),s=t.n(o),a=t(667),c=t.n(a),d=new URL(t(649),t.b),u=s()(i());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap);"]);var l=c()(d);u.push([n.id,":root {\n    font-family: 'Montserrat', sans-serif;\n    --main-color: #1A92D3;\n    --grey: #E2E8EF;\n    --bborder: 1px solid black;\n    color: white;\n}\n\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\na,\na:visited {\n    color: white;\n    text-decoration: none;\n}\n\nul {\n    list-style-type: none;\n}\n\n\n\nbody {\n    background: rgba(0, 0, 0, .70) url("+l+");\n    background-size: cover;\n    background-blend-mode: darken;\n    background-attachment: fixed;\n}\n\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    justify-content: space-between;\n    grid-template-columns: 100%;\n}\n\n#content {\n    text-align: center;\n    \n}\n\n.header {\n    margin: 25px;\n    height: 50px;\n}\n\n.header ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\nh1{\n    margin-bottom: 50px;\n}\n\n\n.menu-button {\n    margin-top: 25px;\n    font-size: 1rem;\n    padding: 15px 10px;\n    border-radius: 10px;\n    border: none;\n}\n\n.menu-button:hover {\n    color: white;\n    background-color: darkgreen;\n    cursor: pointer;\n}\n\n\n/* to make the underline on the menu invisible before hovering */\nli {\n    border-bottom: 2px solid rgba(255, 255, 255, 0); \n}\n\nli:hover {\n    cursor: pointer;\n    border-bottom: 2px solid white;\n}\n\n\n.menu-container {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n    width: 65%;\n\n}\n\n.dish {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgba(0, 0, 0, .80);\n    box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.7);\n}\n\n.image-dish {\n    flex-basis:50%;\n}\n\n.text-dish {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-basis: 50%;\n    padding: 10px;\n}\n\n.text-dish h2{\n    margin-bottom: 10px;\n}\n\n.contact-container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.contact-text {\n    width: 600px;\n}\n\n\n.footer {\n    color: #E5E7EB;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 30px 0;\n  }\n\n",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},s=[],a=0;a<n.length;a++){var c=n[a],d=r.base?c[0]+r.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=i(m,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:h,references:1})}s.push(l)}return s}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var a=t(o[s]);e[a].references--}for(var c=r(n,i),d=0;d<o.length;d++){var u=t(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},649:(n,e,t)=>{n.exports=t.p+"f4747988e6007346091d.jpg"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=()=>{const n=document.querySelector("#content"),e=document.createElement("h1");e.textContent="Menu";const t=document.createElement("div");t.classList.add("menu-container"),t.innerHTML='\n    <div class="dish">\n        <div id="dish1" class="image-dish">\n            <img src="../src/img/sinigang.jpg" width="100%">\n        </div>\n\n        <div class="text-dish">\n            <h2>Sinigang</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n        </div>\n    </div>\n\n    <div class="dish">\n        <div id="dish2" class="image-dish">\n            <img src="../src/img/sisig.png" width="100%">\n        </div>\n\n        <div class="text-dish">\n            <h2>Sisig</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n        </div>\n    </div>\n\n    <div class="dish">\n        <div id="dish3" class="image-dish">\n            <img src="../src/img/chicken-adobo.jpg" width="100%">\n        </div>\n\n        <div class="text-dish">\n            <h2>Chicken Adobo</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n        </div>\n    </div>\n\n    ',n.innerHTML="",n.appendChild(e),n.appendChild(t)},e=()=>{const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="The Filipino restaurant";const r=document.createElement("p");r.textContent="Traditional pinoy dishes.";const i=document.createElement("a");i.innerHTML="<button class='menu-button'>Menu</button>",i.addEventListener("click",n),e.innerHTML="",e.appendChild(t),e.appendChild(r),e.appendChild(i)};var r=t(379),i=t.n(r),o=t(795),s=t.n(o),a=t(569),c=t.n(a),d=t(565),u=t.n(d),l=t(216),p=t.n(l),m=t(589),h=t.n(m),f=t(402),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),i()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector("#menu-home"),y=document.querySelector("#menu-menu"),b=document.querySelector("#menu-contact");e(),v.addEventListener("click",e),y.addEventListener("click",n),b.addEventListener("click",(()=>{const n=document.querySelector("#content"),e=document.createElement("h1");e.textContent="Contact";const t=document.createElement("p"),r=document.createElement("div");r.classList.add("contact-container"),t.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",t.classList.add("contact-text"),r.appendChild(t),n.innerHTML="",n.appendChild(e),n.appendChild(r)}))})()})();