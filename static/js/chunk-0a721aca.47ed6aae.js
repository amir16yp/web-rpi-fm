(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a721aca"],{"0505":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAuCAYAAABAm7v+AAAABHNCSVQICAgIfAhkiAAAAOBJREFUWIXtmUEOgjAQRT/E07jQ67kyYaW30COZKHeAnRfQ5wZMQ8RpFUSSeatm8pP/QttNkRIAMqAAKmyqJpuldCQB7CJEuuzHFLo2JeuI7Kr9UmMKATBWXpLydK1xyYBS0nJqkYYyl3Sb2iLg/lx9st9D0O39uzPkQhbzFgJK4PLtPLbMvGV9mdT5u8y8t+wXuJCFC1m4kIULWbiQhQtZuJCFC1m4kIULWbiQxSIxfx5obuPvQz24kEUoVEtSzKP4UARddTsLb9lB0kbSaYKzfXw5BbZAHfsTYwBqoAgdHuJrfdyFui2AAAAAAElFTkSuQmCC"},"2cad":function(t,e,n){"use strict";var a=n("a877"),i=n.n(a);i.a},5118:function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new s(i.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new s(i.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,i=1,s={},r=!1,c=t.document,o=Object.getPrototypeOf&&Object.getPrototypeOf(t);o=o&&o.setTimeout?o:t,"[object process]"==={}.toString.call(t.process)?m():h()?d():t.MessageChannel?g():c&&"onreadystatechange"in c.createElement("script")?v():y(),o.setImmediate=u,o.clearImmediate=l}function u(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return s[i]=r,a(i),i++}function l(t){delete s[t]}function p(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function f(t){if(r)setTimeout(f,0,t);else{var e=s[t];if(e){r=!0;try{p(e)}finally{l(t),r=!1}}}}function m(){a=function(t){e.nextTick(function(){f(t)})}}function h(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function d(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function g(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},a=function(e){t.port2.postMessage(e)}}function v(){var t=c.documentElement;a=function(e){var n=c.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function y(){a=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("4362"))},"606f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mymusic"},[a("div",{staticClass:"container-fluid"},[a("h1",[t._v("My music")]),a("div",{staticClass:"row mt-4"},[a("table",{staticClass:"table table-responsive-sm text-white"},[t._m(0),a("tbody",[0==Object.keys(this.api.songs).length?a("tr",[t._m(1)]):t._e(),t._l(t.api.songs,function(e,i){return a("tr",{key:e.filename},[a("td",[e.img?a("img",{attrs:{src:t.api.baseurl+"static/img/"+e.img,width:"40"}}):a("img",{attrs:{src:n("f0cd"),width:"40"}})]),a("td",[e.name?a("span",[t._v(t._s(e.name))]):a("span",[t._v("Unknown name")])]),a("td",[e.author?a("span",[t._v(t._s(e.author))]):a("span",[t._v("Unknown author")])]),a("td",[e.length?a("span",[t._v(t._s(Number((e.length/60).toFixed(1)))+" min")]):a("span",[t._v("Unknown length")])]),a("td",[t.api.status.filename!=e.filename?a("img",{staticClass:"hover-scale ml-2 mr-2",attrs:{src:n("0c7a"),height:"35px"},on:{click:function(n){return t.startPlaying(i,e.filename,e.filename,e.length)}}}):a("img",{staticClass:"hover-scale ml-2 mr-2",attrs:{src:n("ec7e"),height:"35px"},on:{click:function(e){return t.stopPlaying()}}})]),a("td",[a("img",{staticClass:"hover-scale",attrs:{src:n("0505"),width:"20"},on:{click:function(n){return t.deleteFile(e.filename)}}})])])})],2)])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}}),n("th",{attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col"}},[t._v("Author")]),n("th",{attrs:{scope:"col"}},[t._v("Length")]),n("th",{attrs:{scope:"col"}}),n("th",{attrs:{scope:"col"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{attrs:{colspan:"6"}},[n("h4",{staticStyle:{opacity:"0.4"}},[t._v("Your playlist is currently empty")])])}],s=n("a34a"),r=n.n(s);n("5118");function c(t,e,n,a,i,s,r){try{var c=t[s](r),o=c.value}catch(u){return void n(u)}c.done?e(o):Promise.resolve(o).then(a,i)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var s=t.apply(e,n);function r(t){c(s,a,i,r,o,"next",t)}function o(t){c(s,a,i,r,o,"throw",t)}r(void 0)})}}var u={name:"mymusic",created:function(){var t=o(r.a.mark(function t(){return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.getLs();case 2:this.api.songs=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{startPlaying:function(){var t=o(r.a.mark(function t(e,n,a,i){var s=this;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.stopPlaying(),t.prev=1,t.next=4,this.api.startPlaying(n,a);case 4:return t.next=6,this.api.getStatus();case 6:this.api.status=t.sent,this.api.now_playing_index=e,$(".media-progress-bar").stop(!0).css("width","0%"),$(".media-progress-bar").animate({width:"100%"},1e3*i),this.timer=window.setTimeout(o(r.a.mark(function t(){return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s.api.getTimeElapsed(),s.api.status.time_elapsed>=i){t.next=10;break}return window.clearInterval(s.timer),t.next=5,s.api.stopPlaying();case 5:return $(".media-progress-bar").stop(!0).css("width","0%"),t.next=8,s.api.getStatus();case 8:s.api.status=t.sent,s.nextSong(s.api.now_playing_index);case 10:case"end":return t.stop()}},t)})),1e3*i),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),this.api.processException(t.t0);case 16:case"end":return t.stop()}},t,this,[[1,13]])}));function e(e,n,a,i){return t.apply(this,arguments)}return e}(),nextSong:function(){var t=o(r.a.mark(function t(e){var n;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e=parseInt(e),n=this.api.songs,!((e+1)%Object.keys(this.api.songs).length>=1)){t.next=6;break}return t.next=6,this.startPlaying(e+1,n[e+1].filename,n[e+1].filename,n[e+1].length);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.api.processException(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(e){return t.apply(this,arguments)}return e}(),stopPlaying:function(){var t=o(r.a.mark(function t(){return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.api.stopPlaying();case 3:return window.clearInterval(this.timer),$(".media-progress-bar").stop(!0).css("width","0%"),t.next=7,this.api.getStatus();case 7:this.api.status=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.api.processException(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(){return t.apply(this,arguments)}return e}(),deleteFile:function(){var t=o(r.a.mark(function t(e){return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.api.deleteFile(e);case 3:return t.next=5,this.api.getLs();case 5:this.api.songs=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.api.processException(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(e){return t.apply(this,arguments)}return e}()}},l=u,p=(n("2cad"),n("2877")),f=Object(p["a"])(l,a,i,!1,null,"4085184b",null);e["default"]=f.exports},a877:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0a721aca.47ed6aae.js.map