(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0213":function(t,e,n){"use strict";n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{value:{type:Number,default:0},tabs:{type:Array,default:function(){return[]}},bgColor:{type:String,default:"#fff"},padding:{type:String,default:"0"},color:{type:String,default:"#333"},activeColor:{type:String,default:"#2979ff"},fontSize:{type:String,default:"28rpx"},activeFontSize:{type:String,default:"32rpx"},bold:{type:Boolean,default:!0},scroll:{type:Boolean,default:!0},height:{type:String,default:"70rpx"},lineColor:{type:String,default:"#2979ff"},lineHeight:{type:String,default:"10rpx"},lineScale:{type:Number,default:.5},lineRadius:{type:String,default:"10rpx"},pills:{type:Boolean,deafult:!1},pillsColor:{type:String,default:"#2979ff"},pillsBorderRadius:{type:String,default:"10rpx"},field:{type:String,default:""},fixed:{type:Boolean,default:!1},paddingItem:{type:String,default:"0 22rpx"}},data:function(){return{elId:"",lineWidth:30,currentWidth:0,lineLeft:0,pillsLeft:0,scrollLeft:0,containerWidth:0,current:0}},watch:{value:function(t){var e=this;this.current=t,this.$nextTick((function(){e.getTabItemWidth()}))},current:function(t){this.$emit("input",t)},tabs:function(t){var e=this;this.$nextTick((function(){e.getTabItemWidth()}))}},methods:{randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,i="",a=0;a<t;a++)i+=e.charAt(Math.floor(Math.random()*n));return i},change:function(t){this.current!==t&&(this.current=t,this.$emit("change",t))},getTabItemWidth:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select("#".concat(this.elId)).boundingClientRect((function(e){!t.containerWidth&&e&&(t.containerWidth=e.width)})).exec(),e.selectAll(".v-tabs__container-item").boundingClientRect((function(e){if(e){var n=0,i=0;if(e)for(var a=0;a<e.length;a++)if(a<t.current)n+=e[a].width;else{if(a!=t.current)break;i=e[a].width}t.currentWidth=i,t.lineWidth=i*t.lineScale*1,t.lineLeft=n+i/2,t.pillsLeft=n,t.scroll&&(t.scrollLeft=t.lineLeft-t.containerWidth/2)}})).exec()}},mounted:function(){var t=this;this.elId="xfjpeter_"+this.randomString(),this.current=this.value,this.$nextTick((function(){t.getTabItemWidth()}))}};e.default=i},"035b":function(t,e,n){"use strict";var i=n("c2d5"),a=n.n(i);a.a},"13f4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-651c6dd1]{background-color:#f8f8f8}.container[data-v-651c6dd1]{font-size:14px;line-height:24px;position:relative}.container .tab[data-v-651c6dd1]{position:fixed;top:var(--window-top);left:0;z-index:9999}.container .coupon[data-v-651c6dd1]{padding-top:%?200?%;padding-bottom:%?10?%}.container .coupon .item[data-v-651c6dd1]{background-color:#fff;margin:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:0 %?30?% %?30?% %?30?%}.container .coupon .item .top[data-v-651c6dd1]{height:%?116?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.container .coupon .item .top .left[data-v-651c6dd1]{height:%?116?%;width:%?400?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.container .coupon .item .top .left .content[data-v-651c6dd1]{width:100%}.container .coupon .item .top .left .icon[data-v-651c6dd1]{display:inline-block;vertical-align:bottom;width:%?52?%;height:auto}.container .coupon .item .top .left .name[data-v-651c6dd1]{text-align:left;display:inline-block;vertical-align:bottom;font-size:%?34?%;color:#000;line-height:%?50?%;font-weight:700;margin-left:%?15?%}.container .coupon .item .top .left .text[data-v-651c6dd1]{width:%?150?%;height:%?38?%;line-height:%?38?%;text-align:center;font-size:%?24?%;color:#61300e;background:-webkit-gradient(linear,left top,right top,from(#f9db8d),to(#f8d98a));background:-webkit-linear-gradient(left,#f9db8d,#f8d98a);background:linear-gradient(90deg,#f9db8d,#f8d98a);-webkit-border-radius:%?6?%;border-radius:%?6?%}.container .coupon .item .top .right[data-v-651c6dd1]{width:%?170?%;height:%?60?%;-webkit-border-radius:%?30?%;border-radius:%?30?%;background:-webkit-gradient(linear,left top,right top,from(#ec6f43),to(#ea4a36));background:-webkit-linear-gradient(left,#ec6f43,#ea4a36);background:linear-gradient(90deg,#ec6f43,#ea4a36);color:#fff;font-size:%?28?%;line-height:%?60?%;text-align:center}.container .coupon .item .bottom[data-v-651c6dd1]{height:auto;width:100%}.container .coupon .item .bottom uni-image[data-v-651c6dd1]{display:block;width:100%;height:auto}body.?%PAGE?%[data-v-651c6dd1]{background-color:#f8f8f8}",""]),t.exports=e},"1c73":function(t,e,n){var i=n("759e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("54b5ea11",i,!0,{sourceMap:!1,shadowMode:!1})},"24fb":function(t,e,n){"use strict";function i(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"===typeof btoa){var o=a(i),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}return[n].join("\n")}function a(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=i(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"===typeof t&&(t=[[null,t,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);i&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},"3cca":function(t,e,n){"use strict";n.r(e);var i=n("e7a6"),a=n("90c5");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("035b");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"651c6dd1",null,!1,i["a"],r);e["default"]=s.exports},"42a8":function(t,e,n){"use strict";n.r(e);var i=n("8d71"),a=n("de97");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("51ca");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"5a2ad58a",null,!1,i["a"],r);e["default"]=s.exports},"4f06":function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var o=e[a],r=o[0],c=o[1],s=o[2],l=o[3],d={id:t+":"+a,css:c,media:s,sourceMap:l};i[r]?i[r].parts.push(d):n.push(i[r]={id:r,parts:[d]})}return n}n.r(e),n.d(e,"default",(function(){return h}));var a="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=a&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,l=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,a){l=n,u=a||{};var r=i(t,e);return v(r),function(e){for(var n=[],a=0;a<r.length;a++){var c=r[a],s=o[c.id];s.refs--,n.push(s)}e?(r=i(t,e),v(r)):r=[];for(a=0;a<n.length;a++){s=n[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(g(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(a=0;a<n.parts.length;a++)r.push(g(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:r}}}}function b(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function g(t){var e,n,i=document.querySelector("style["+f+'~="'+t.id+'"]');if(i){if(l)return d;i.parentNode.removeChild(i)}if(p){var a=s++;i=c||(c=b()),e=m.bind(null,i,a,!1),n=m.bind(null,i,a,!0)}else i=b(),e=x.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,i){var a=n?"":j(i.css);if(t.styleSheet)t.styleSheet.cssText=w(e,a);else{var o=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function x(t,e){var n=j(e.css),i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),u.ssrId&&t.setAttribute(f,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var y=/%\?([+-]?\d+(\.\d+)?)\?%/g,k=/\.\?%PAGE\?%/g,C=/\?%PAGE\?%\[data-v-[a-z0-9]{8}\]/g,_=/uni-page-body\[data-v-[a-z0-9]{8}\]/g,S=/var\(--status-bar-height\)/gi,L=/var\(--window-top\)/gi,T=/var\(--window-bottom\)/gi,$=/var\(--window-left\)/gi,I=/var\(--window-right\)/gi;function j(t){var e=M();if("undefined"!==typeof uni&&!uni.canIUse("css.var")){var n=z();t=t.replace(S,"0px").replace(L,n.top+"px").replace(T,n.bottom+"px").replace($,"0px").replace(I,"0px")}return t.replace(C,e).replace(k,"").replace(_,"body."+e+" uni-page-body").replace(/\{[\s\S]+?\}/g,(function(t){return"undefined"===typeof uni?t:t.replace(y,(function(t,e){return uni.upx2px(e)+"px"}))}))}function M(){var t="function"===typeof getApp&&getApp();return t&&t.$route&&t.$route.meta&&t.$route.meta.name||""}function z(){var t="function"===typeof getApp&&getApp();return t&&t.$route&&t.$route.meta&&t.$route.meta.name?{top:t.$route.meta.windowTop,bottom:t.$route.meta.isTabBar?50:0}:{top:0,bottom:0}}},"51ca":function(t,e,n){"use strict";var i=n("1c73"),a=n.n(i);a.a},"759e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".v-tabs[data-v-5a2ad58a]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;height:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.v-tabs uni-scroll-view[data-v-5a2ad58a]{width:%?750?%}.v-tabs__container[data-v-5a2ad58a]{min-width:100%;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;white-space:nowrap;overflow:hidden}.v-tabs__container-item[data-v-5a2ad58a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;position:relative;z-index:10;-webkit-transition:all .2s;transition:all .2s;white-space:nowrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?35?%;padding-bottom:%?10?%}.v-tabs__container-item uni-image[data-v-5a2ad58a]{width:%?80?%;height:%?80?%;display:block}.v-tabs__container-line[data-v-5a2ad58a]{position:absolute;bottom:0;-webkit-transition:all .2s linear;transition:all .2s linear}.v-tabs__container-pills[data-v-5a2ad58a]{position:absolute;-webkit-transition:all .2s linear;transition:all .2s linear;z-index:9}\n\n/* /deep/ ::-webkit-scrollbar {\n  display: none;\n} */",""]),t.exports=e},"8d71":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"v-tabs",attrs:{id:t.elId}},[n("v-uni-scroll-view",{style:{position:t.fixed?"fixed":"relative",zIndex:1993},attrs:{"scroll-x":t.scroll,"scroll-left":t.scroll?t.scrollLeft:0,"scroll-with-animation":t.scroll}},[n("v-uni-view",{staticClass:"v-tabs__container",style:{display:t.scroll?"inline-flex":"flex",whiteSpace:t.scroll?"nowrap":"normal",background:t.bgColor,padding:t.padding}},[t._l(t.tabs,(function(e,i){return n("v-uni-view",{key:i,staticClass:"v-tabs__container-item",style:{color:t.current==i?t.activeColor:t.color,fontSize:(t.current,t.fontSize)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change(i)}}},[n("v-uni-image",{attrs:{src:e.icon,mode:""}}),n("v-uni-view",[t._v(t._s(e.text))])],1)})),t.pills?n("v-uni-view",{staticClass:"v-tabs__container-pills",style:{background:t.pillsColor,borderRadius:t.pillsBorderRadius,left:t.pillsLeft+"px",width:t.currentWidth+"px",height:t.height}}):n("v-uni-view",{staticClass:"v-tabs__container-line",style:{background:t.lineColor,width:t.lineWidth+"px",height:t.lineHeight,borderRadius:t.lineRadius,left:t.lineLeft+"px",transform:"translateX(-"+t.lineWidth/2+"px)"}})],2)],1),n("v-uni-view",{staticClass:"v-tabs__placeholder",style:{height:t.fixed?t.height:"0",padding:t.padding}})],1)},o=[]},"90c5":function(t,e,n){"use strict";n.r(e);var i=n("fe25"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c2d5:function(t,e,n){var i=n("13f4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4ccc0396",i,!0,{sourceMap:!1,shadowMode:!1})},de97:function(t,e,n){"use strict";n.r(e);var i=n("0213"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e7a6:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={vTabs:n("42a8").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-tabs",{staticClass:"tab",attrs:{tabs:t.tabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),n("v-uni-view",{ref:"coupon",staticClass:"coupon"},t._l(t.couponList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCoupon(i)}}},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"icon",attrs:{src:e.icon,mode:"widthFix"}}),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1),1==e.type?n("v-uni-view",{staticClass:"text"},[t._v("天天可领")]):2==e.type?n("v-uni-view",{staticClass:"text"},[t._v("限时秒杀")]):t._e()],1),n("v-uni-view",{staticClass:"right"},[t._v("免费领取")])],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-image",{attrs:{src:e.bannerPic,mode:"widthFix"}})],1)],1)})),1)],1)},o=[]},fe25:function(t,e,n){"use strict";(function(t){n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{current:0,tabs:[],couponList:[],coupons:[]}},onLoad:function(t){this.getHome();var e=this.$route.query.tabId?parseInt(this.$route.query.tabId):0;for(var n in this.tabs)e==this.tabs[n].tabId&&(this.current=parseInt(n));this.changeTab(this.current)},onShareAppMessage:function(t){var e=[{title:"美团饿了么大额红包，每日可领！",path:"/pages/index/index"},{title:"吃了这么多年外卖，你知道这个秘密吗？",path:"/pages/index/index"},{title:"这样点外卖，一年省下一个亿",path:"/pages/index/index"},{title:"点外卖前先领券，吃霸王餐",path:"/pages/index/index"},{title:"美团饿了么内部优惠券，手慢无",path:"/pages/index/index"},{title:"点外卖不用优惠券，你就out了",path:"/pages/index/index"},{title:"外卖不为人知的秘密，点这解密",path:"/pages/index/index"},{title:"震惊！小伙点外卖竟然花了1分钱",path:"/pages/index/index"},{title:"从这点外卖，你也可以吃霸王餐",path:"/pages/index/index"}];return e[Math.floor(Math.random()*e.length)]},methods:{changeTab:function(e){var n=this;if(t.log("当前选中的项："+e),this.couponList=[],uni.showLoading({title:"获取优惠中"}),0==e)this.couponList=this.coupons;else for(var i in this.coupons)this.coupons[i].tabId==this.tabs[e].tabId&&this.couponList.push(this.coupons[i]);this.$nextTick((function(){n.$refs.coupon.scrollTop=0})),setTimeout((function(){uni.hideLoading()}),500)},toCoupon:function(e){t.log(this.couponList[e]),window.location.href=this.couponList[e].url},getHome:function(){var t=this;uni.request({url:getApp().globalData.api.home,success:function(e){t.tabs=e.data.data.tabs,t.coupons=e.data.data.coupons,t.changeTab(0)}})}}};e.default=i}).call(this,n("5a52")["default"])}}]);