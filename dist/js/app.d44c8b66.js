(function(t){function e(e){for(var r,a,c=e[0],s=e[1],d=e[2],u=0,p=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("WeatherPanel",{attrs:{time:"2:30 PM",temp:"60",weather:"Windy",icon:"https://images.vexels.com/media/users/3/136212/isolated/preview/7747f9f7a1dce4184897316278a76181-hurricane-wind-storm-by-vexels.png"}})],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weatherpanel p-5"},[n("h1",[t._v("LSBN Weather Forecast")]),t._l(t.cards,(function(e){return n("div",{key:e,ref:t.addCard,refInFor:!0,staticClass:"b-0 shadow card d-inline-flex m-2 bd-highlight",staticStyle:{width:"10rem"}},[n("div",{staticClass:"card-body p-0"},[n("input",{staticClass:"timeBox border-0 p-2 h2 mb-2 bg-danger text-white text-center w-100",attrs:{type:"text",placeholder:"1:30 PM"}}),n("input",{staticClass:"tempBox border-0 w-100 text-center m-0",staticStyle:{"font-size":"5rem","line-height":"0"},attrs:{type:"text",placeholder:"60"}}),n("img",{staticClass:"img-thumbnail border-0",attrs:{src:e.src}}),n("p",[t._v(t._s(e.title))])]),n("v-select",{staticClass:"weather-dd",attrs:{options:t.weatherOpts,clearable:!1,"append-icon-cb":"()","item-text":"title","item-value":"src","return-object":""},on:{input:function(n){return t.selectWeather(n,e.ind)}},scopedSlots:t._u([{key:"option",fn:function(t){return[n("img",{staticClass:"img-thumbnail border-0",attrs:{src:t.src}})]}}],null,!0)})],1)})),n("div",{attrs:{id:"example-1"}},[n("button",{on:{click:t.addCard}},[t._v("Add")]),n("button",{on:{click:t.removeCard}},[t._v("Remove")])])],2)},c=[],s=(n("6dfc"),{name:"WeatherPanel",props:{time:String},data:function(){return{cards:[{ind:0,title:"Windy",src:"https://cdn2.iconfinder.com/data/icons/weather-and-meteorology-simplicon-set/102/windy-cloud-wind-512.png"}],weatherIco:{title:"Windy",src:"https://cdn2.iconfinder.com/data/icons/weather-and-meteorology-simplicon-set/102/windy-cloud-wind-512.png"},weatherOpts:[{title:"Windy",src:"https://cdn2.iconfinder.com/data/icons/weather-and-meteorology-simplicon-set/102/windy-cloud-wind-512.png"},{title:"Sunny",src:"https://cdn4.iconfinder.com/data/icons/spring-theme-line/32/sun--512.png"}]}},methods:{addCard:function(){this.cards.push({ind:this.cards.length,title:"Windy",src:"https://cdn2.iconfinder.com/data/icons/weather-and-meteorology-simplicon-set/102/windy-cloud-wind-512.png"})},removeCard:function(){this.cards.pop()},selectWeather:function(t,e){console.log(t),console.log(e),this.cards[e].title=t.title,this.cards[e].src=t.src}},beforeUpdate:function(){},updated:function(){console.log(this.cards)}}),d=s,l=(n("a337"),n("2877")),u=Object(l["a"])(d,a,c,!1,null,"9245e340",null),p=u.exports,f={name:"App",components:{WeatherPanel:p}},h=f,m=(n("034f"),Object(l["a"])(h,i,o,!1,null,null,null)),b=m.exports,y=n("4a7a"),g=n.n(y),v=n("5f5b"),w=n("b1e0");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(v["a"]),r["default"].use(w["a"]),r["default"].component("v-select",g.a),new r["default"]({render:function(t){return t(b)}}).$mount("#app")},"5d7d":function(t,e,n){},"85ec":function(t,e,n){},a337:function(t,e,n){"use strict";n("5d7d")}});
//# sourceMappingURL=app.d44c8b66.js.map