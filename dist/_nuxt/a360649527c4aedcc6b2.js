(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(t,e,n){t.exports=n.p+"img/303bb31.png"},165:function(t,e,n){t.exports=n.p+"img/38010b5.svg"},166:function(t,e,n){t.exports=n.p+"img/2a2c5cd.svg"},167:function(t,e,n){t.exports=n.p+"img/e6d4891.svg"},168:function(t,e,n){t.exports=n.p+"img/a6ebe51.svg"},169:function(t,e,n){},170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){},178:function(t,e,n){t.exports=n.p+"img/03962b8.svg"},179:function(t,e,n){t.exports=n.p+"img/379660b.svg"},180:function(t,e,n){t.exports=n.p+"img/a187162.svg"},181:function(t,e,n){t.exports=n.p+"img/1adcdbd.svg"},182:function(t,e,n){t.exports=n.p+"img/a5b4b59.svg"},183:function(t,e,n){"use strict";var r=n(169);n.n(r).a},184:function(t,e,n){t.exports=n.p+"img/5c2d48f.svg"},185:function(t,e,n){t.exports=n.p+"img/99d3bbb.svg"},186:function(t,e,n){"use strict";var r=n(170);n.n(r).a},187:function(t,e,n){"use strict";var r=n(4),o=n(18),l=n(22),c=n(105),v=n(52),d=n(11),m=n(53).f,f=n(72).f,_=n(12).f,h=n(188).trim,x=r.Number,C=x,y=x.prototype,w="Number"==l(n(71)(y)),A="trim"in String.prototype,N=function(t){var e=v(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=A?e.trim():h(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(w?d(function(){y.valueOf.call(n)}):"Number"!=l(n))?c(new C(N(e)),n,x):N(e)};for(var k,R=n(10)?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;R.length>I;I++)o(C,k=R[I])&&!o(x,k)&&_(x,k,f(C,k));x.prototype=y,y.constructor=x,n(13)(r,"Number",x)}},188:function(t,e,n){var r=n(7),o=n(21),l=n(11),c=n(189),v="["+c+"]",d=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),f=function(t,e,n){var o={},v=l(function(){return!!c[t]()||"​"!="​"[t]()}),d=o[t]=v?e(_):c[t];n&&(o[n]=d),r(r.P+r.F*v,"String",o)},_=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},189:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},190:function(t,e,n){"use strict";var r=n(171);n.n(r).a},191:function(t,e,n){"use strict";var r=n(172);n.n(r).a},198:function(t,e,n){"use strict";n.r(e);var r=n(164),o=n.n(r),l=n(165),c=n.n(l),v=n(166),d=n.n(v),m=n(167),f=n.n(m),_=n(168),h=n.n(_),x=n(178),C=n.n(x),y=n(179),w=n.n(y),A=n(180),N=n.n(A),k=n(181),R=n.n(k),I=n(182),L=n.n(I),S={props:["title"]},E=n(6),B=Object(E.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"subheading font-weight-bold text-xs-left pb-3 pt-2"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"text-xs-left pb-4"},[this._t("content")],2)])},[],!1,null,null,null).exports,P={props:["imgURL","name"]},U=(n(183),Object(E.a)(P,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-center"},[e("img",{staticClass:"mr-3",attrs:{src:this.imgURL}}),this._v(" "),e("span",{staticClass:"subheading"},[this._v(this._s(this.name))])])},[],!1,null,null,null).exports),F=n(184),M=n.n(F),D=n(185),T=n.n(D),O={props:["index","double","single"],data:function(){return{doubleBed:M.a,singleBed:T.a}}},W=(n(186),Object(E.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",{attrs:{"primary-title":""}},[n("div",{staticClass:"cover"},[n("img",{attrs:{src:t.doubleBed}}),t._v(" "),n("img",{attrs:{src:t.singleBed}}),t._v(" "),n("p",{staticClass:"subheading pt-4 font-weight-bold"},[t._v("Bedroom "+t._s(t.index))]),t._v(" "),n("div",[t.double?n("p",[t._v(t._s(t.double)+" double beds")]):t._e()]),t._v(" "),n("div",[t.single?n("p",[t._v(t._s(t.single)+" single beds")]):t._e()])])])],1)},[],!1,null,"6bd66cde",null).exports),$=(n(187),{data:function(){return{}},props:{rating:{default:5,type:Number},counter:{default:0,type:Number}}}),H=(n(190),{layout:"default",data:function(){return{FrontendImg:o.a,Bedroom:c.a,Bedroom2:d.a,Kitchen:f.a,Livingroom:h.a,wifi:C.a,HairDryer:w.a,Washer:N.a,cutlery:R.a,MultiUsers:L.a,theSpaceConent:"City Apartment is newly renovated in the heart of Budapest, right in the city center. Lorem ipsum doior sitamet, consecteture adipiscing elite, sed do eiusmod tempor incidjls.",bedRooms:[{double:2,single:1},{double:3,single:0}],subTitle:"entire villa",title:"villa suite",guestNum:8,showAmenities:!1,showPolicy:!1,pricePerNight:51,rating:4.5,counter:390,images:[o.a,c.a,d.a,f.a,h.a]}},components:{ListSection:B,Amenity:U,BedRoom:W,Rating:Object(E.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating"},[e("div",{staticClass:"starWrapper"},[e("div",{staticClass:"starImg",style:{width:12*this.rating+"px"}})]),this._v(" "),e("div",[this._v(this._s(this.counter))])])},[],!1,null,"015aa125",null).exports}}),j=(n(191),Object(E.a)(H,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"pa-0"},[n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-layout",{staticClass:"pa-0 mx-0",attrs:{row:"",flex:""}},[n("v-flex",{staticClass:"pa-0 overflow-hidden hidden-sm-and-down",attrs:{xs12:"",sm12:"",md6:""}},[n("v-img",{staticClass:"image",attrs:{src:t.FrontendImg,"aspect-ratio":"1.7"}})],1),t._v(" "),n("v-flex",{staticClass:"hidden-md-and-up",attrs:{xs12:""}},[n("v-carousel",{attrs:{"hide-controls":""}},t._l(t.images,function(t,i){return n("v-carousel-item",{key:i,attrs:{src:t}})}),1)],1),t._v(" "),n("v-flex",{staticClass:"pa-0 ma-0 overflow-hidden hidden-sm-and-down",attrs:{xs12:"",sm6:""}},[n("v-layout",{staticClass:"pa-0 ma-0 overflow-hidden",attrs:{row:"",flex:""}},[n("v-flex",{staticClass:"pa-0 overflow-hidden",attrs:{xs12:"",sm6:""}},[n("v-img",{staticClass:"image ma-0 pa-0",attrs:{src:t.Kitchen,"aspect-ratio":"1.7"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-0 overflow-hidden",attrs:{xs12:"",sm6:""}},[n("v-img",{staticClass:"image",attrs:{src:t.Bedroom,"aspect-ratio":"1.7"}})],1)],1),t._v(" "),n("v-layout",{staticClass:"pa-0 ma-0 overflow-hidden",attrs:{row:"",flex:""}},[n("v-flex",{staticClass:"pa-0 overflow-hidden",attrs:{xs12:"",sm6:""}},[n("v-img",{staticClass:"image",attrs:{src:t.Bedroom2,"aspect-ratio":"1.7"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-0 overflow-hidden",attrs:{xs12:"",sm6:""}},[n("v-img",{staticClass:"image",attrs:{src:t.Livingroom,"aspect-ratio":"1.7"}})],1)],1)],1)],1)],1),t._v(" "),n("v-container",{staticClass:"listingContainer"},[n("v-layout",{attrs:{row:"",flex:""}},[n("v-flex",{staticClass:"mb-5 pb-5",attrs:{sm12:"",md8:""}},[n("p",{staticClass:"text-xs-left subheading text-uppercase font-weight-light pt-3"},[t._v("\n          "+t._s(t.subTitle)+"\n        ")]),t._v(" "),n("p",{staticClass:"text-xs-left display-1 text-capitalize font-weight-black pb-3 pt-1"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"text-xs-left py-4"},[n("p",{staticClass:"subDescription"},[n("img",{staticClass:"mr-2",attrs:{src:t.MultiUsers}}),t._v(" "),n("span",{staticClass:"mr-5 font-weight-bold"},[t._v(t._s(t.guestNum)+" guests")]),t._v(" "),n("span",{staticClass:"mr-5 font-weight-bold"},[t._v(t._s(t.bedRooms.length)+" bedrooms")]),t._v(" "),n("span",{staticClass:"font-weight-bold"},[t._v("5 beds")])])]),t._v(" "),n("v-divider"),t._v(" "),n("ListSection",{staticClass:"pt-3 pb-5",attrs:{title:"The Space"},scopedSlots:t._u([{key:"content",fn:function(){return[n("p",[t._v(t._s(t.theSpaceConent))])]},proxy:!0}])}),t._v(" "),n("v-divider"),t._v(" "),n("ListSection",{staticClass:"py-3",attrs:{title:"Amenities"},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs8:"",md10:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"py-3",attrs:{xs6:"",md3:""}},[n("Amenity",{attrs:{imgURL:t.wifi,name:"Wifi"}})],1),t._v(" "),n("v-flex",{staticClass:"py-3",attrs:{xs6:"",md3:""}},[n("Amenity",{attrs:{imgURL:t.HairDryer,name:"Hair Dryer"}})],1),t._v(" "),n("v-flex",{staticClass:"py-3",attrs:{xs6:"",md3:""}},[n("Amenity",{attrs:{imgURL:t.Washer,name:"Washer"}})],1),t._v(" "),n("v-flex",{staticClass:"py-3",attrs:{xs6:"",md3:""}},[n("Amenity",{attrs:{imgURL:t.cutlery,name:"Kitchen"}})],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs4:"",md2:""}})],1),t._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAmenities,expression:"showAmenities"}]},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs8:"",md10:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"py-3",attrs:{xs6:"",md3:""}},[n("Amenity",{attrs:{imgURL:t.wifi,name:"Wifi"}})],1),t._v(" "),n("v-flex",{staticClass:"py-3",attrs:{xs6:"",md3:""}},[n("Amenity",{attrs:{imgURL:t.HairDryer,name:"Hair Dryer"}})],1),t._v(" "),n("v-flex",{staticClass:"py-3",attrs:{xs6:"",md3:""}},[n("Amenity",{attrs:{imgURL:t.Washer,name:"Washer"}})],1),t._v(" "),n("v-flex",{staticClass:"py-3",attrs:{xs6:"",md3:""}},[n("Amenity",{attrs:{imgURL:t.cutlery,name:"Kitchen"}})],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs4:"",md2:""}})],1)],1)])]},proxy:!0}])}),t._v(" "),n("a",{staticClass:"btnMore",on:{click:function(e){e.preventDefault(),t.showAmenities=!t.showAmenities}}},[t._v("\n          "+t._s(t.showAmenities?"Hide Amenities":"Show All Amenities")+"\n        ")]),t._v(" "),n("v-divider",{staticClass:"mt-3"}),t._v(" "),n("ListSection",{staticClass:"py-3",attrs:{title:"Sleep Arrangements"},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-layout",{attrs:{row:"",flex:""}},t._l(t.bedRooms,function(t,e){return n("v-flex",{key:e,attrs:{sm4:"",md5:"",lg3:""}},[n("BedRoom",{attrs:{index:e+1,double:t.double,single:t.single}})],1)}),1)]},proxy:!0}])}),t._v(" "),n("v-divider"),t._v(" "),n("p",{staticClass:"title font-weight-bold pt-4"},[t._v("Policies")]),t._v(" "),n("ListSection",{staticClass:"py-3",attrs:{title:"Villa Rules"},scopedSlots:t._u([{key:"content",fn:function(){return[n("p",[t._v("No smoking")])]},proxy:!0}])}),t._v(" "),n("v-divider"),t._v(" "),n("ListSection",{staticClass:"py-3",attrs:{title:"Cancellations"},scopedSlots:t._u([{key:"content",fn:function(){return[n("p",{staticClass:"subheading font-weight-bold"},[t._v("Moderate")]),t._v(" "),n("p",{staticClass:"pb-3"},[t._v("\n              If cancelled, modified or in case of no-show, the first night will be charged.\n            ")]),t._v(" "),n("a",{staticClass:"btnMore",on:{click:function(e){t.showPolicy=!t.showPolicy}}},[t._v("\n              "+t._s(t.showPolicy?"Hide the policy":"Read more about the policy")+"\n            ")]),t._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showPolicy,expression:"showPolicy"}],staticClass:"mt-3"},[n("v-stepper",{attrs:{value:"2","alt-labels":""}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{step:"1",complete:""}},[t._v("Reservation confirmed")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{step:"2"}},[t._v("7 days before check-in")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{step:"3"}},[t._v("Check-In")])],1)],1)],1)])]},proxy:!0}])})],1),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md4:""}},[n("v-card",{staticClass:"pa-4 mt-5 ml-2 bookForm"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("p",{staticClass:"subheading"},[n("span",{staticClass:"priceLetter font-weight-bold"},[t._v("$"+t._s(t.pricePerNight))]),t._v(" "),n("span",{staticClass:"priceDesc"},[t._v("per night")])]),t._v(" "),n("Rating",{attrs:{rating:t.rating,counter:t.counter}}),t._v(" "),n("v-divider",{staticClass:"pt-2"})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{solo:"",flat:"","hide-details":"",label:"Email Address","append-icon":"email"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{solo:"",flat:"","hide-details":"",label:"Name","append-icon":"person_outline"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{solo:"",flat:"",label:"Phone","hide-details":"","append-icon":"local_phone"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{attrs:{solo:"",flat:"","hide-details":"",name:"input-7-4",label:"Message"}})],1)],1),t._v(" "),n("v-btn",{staticClass:"text-capitalize font-weight-bold",attrs:{block:"",color:"cyan darken-4",ripple:!1,dark:""}},[t._v("\n            Book\n          ")])],1)],1),t._v(" "),n("div",{staticClass:"hidden-md-and-up book-bottom px-5",attrs:{id:"bookBottom"}},[n("div",[n("p",{staticClass:"subheading"},[n("span",{staticClass:"priceLetter font-weight-bold"},[t._v("$"+t._s(t.pricePerNight))]),t._v(" "),n("span",{staticClass:"priceDesc"},[t._v("per night")])]),t._v(" "),n("Rating",{attrs:{rating:t.rating,counter:t.counter}})],1),t._v(" "),n("div",[n("v-btn",{staticClass:"text-capitalize font-weight-bold",attrs:{color:"cyan darken-4",ripple:!1,dark:""}},[t._v("\n            Book\n          ")])],1)])],1)],1)],1)},[],!1,null,"2b3f36e5",null));e.default=j.exports}}]);