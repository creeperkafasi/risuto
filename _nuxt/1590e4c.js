(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{282:function(t,e,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("63228fd7",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";n.r(e);var r=n(9),l=(n(33),n(1).a.extend({props:{content:{type:String,required:!0}},data:function(){return{listTitle:"",listItems:[]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.content).fetch();case 2:n=e.sent,t.listTitle=n.title,t.listItems=n.items;case 5:case"end":return e.stop()}}),e)})))()}})),o=(n(285),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"list-container bg-gray-400 text-black p-2 my-4 w-4/5 min-w-0 max-w-lg rounded-lg shadow-2xl"},[e("h1",{staticClass:"font-normal text-xl mx-2 my-1"},[t._v("\n    "+t._s(t.listTitle)+"\n  ")]),t._v(" "),e("ul",{staticClass:"flex-1 align-center"},t._l(t.listItems,(function(n,r){return e("li",{key:r,staticClass:"list-item border border-solid border-gray-600 w-11/12 mx-1 mb-2.5 rounded-md bg-gray-500 bg-opacity-50 px-3 pt-2 shadow-md"},[e("div",{staticClass:"flex"},[n.image?e("div",{staticClass:"w-1/6 text-2xl mb-2 relative"},[e("img",{attrs:{src:n.image}}),t._v(" "),n.emoji?e("span",{staticClass:"absolute -bottom-1.5 -right-1.5"},[t._v(t._s(n.emoji))]):t._e()]):n.emoji?e("span",{staticClass:"w-1/6 text-3xl text-center mb-2"},[t._v(t._s(n.emoji))]):e("span",{staticClass:"w-1/6 text-3xl text-center mb-2"},[t._v("●")]),t._v(" "),e("span",{staticClass:"w-4/6 ml-3"},[e("h1",{staticClass:"underline font-normal text-black"},[t._v(t._s(n.title))]),t._v("\n          "+t._s(n.text)+"\n        ")])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n(282)},286:function(t,e,n){var r=n(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.list-container{\n  min-height:8rem\n}\n.list-item{\n  min-height:3rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);