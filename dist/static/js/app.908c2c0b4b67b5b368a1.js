webpackJsonp([1],{"+A7y":function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("VCXJ"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var h=s("X4nt")({name:"app"},n,!1,function(t){s("Sxou")},null,null).exports,r=s("zO6J"),a={data:()=>({slidesLength:1,_width:0,auto:!0,slideing:!0,timer1:"",className:"",dom:{},t:{sx:0,s:0,m:0,e:0},index:1}),props:{autoPlay:{default:!0},duration:{default:500},interval:{default:2500},showIndicator:{default:!0}},mounted(){this.className=`wh_swiper_${1e3*Math.random().toFixed(3)}`,setTimeout(()=>{this.starDom(),this.dom.transform=`translate3d(${-1*this._width}px, 0px, 0px)`,this.dom["-webkit-transform"]=`translate3d(${-1*this._width}px, 0px, 0px)`,this.dom["-ms-transform"]=`translate3d(${-1*this._width}px, 0px, 0px)`,this.autoPlay&&this.setTime()},50)},methods:{s(t){this.slideing&&(this.clearTimeOut(),this.t.sx=this.getTransform(),this.t.s=t.touches[t.touches.length-1].clientX)},m(t){this.slideing&&-1!=this.t.s&&(this.clearTimeOut(),this.t.m=t.touches[t.touches.length-1].clientX-this.t.s,this.setTransform(this.t.m+this.t.sx))},e(t){if(this.slideing&&-1!=this.t.s){this.clearTimeOut(),this.setTransform(this.t.m+this.t.sx);t=this.getTransform();t+=this.t.m>0?.3*this._width:-.3*this._width,this.index=-1*Math.round(t/this._width),this.wh("touch")}},setTransform(t){this.dom.transform=`translate3d(${t}px, 0px, 0px)`,this.dom["-webkit-transform"]=`translate3d(${t}px, 0px, 0px)`,this.dom["-ms-transform"]=`translate3d(${t}px, 0px, 0px)`},getTransform(){var t=this.dom.transform||this.dom["-webkit-transform"]||this.dom["-ms-transform"];return t=(t=t.substring(12)).match(/(\S*)px/)[1],Number(t)},fn(t){t.preventDefault()},prevSlide(){this.clearTimeOut(),this.index--,this.wh()},nextSlide(){this.clearTimeOut(),this.index++,this.wh()},slideTo(t){this.clearTimeOut(),this.index=t+1,this.wh()},wh(t){this.slideing=!1,this.dom.transition="touch"==t?"250ms":this.duration+"ms",this.setTransform(-1*this.index*this._width),this.t.m=0,this.t.s=-1,this.autoPlay&&this.setTime();var i="touch"==t?"250":this.duration;setTimeout(()=>{this.dom.transition="0s",this.index>=this.slidesLength+1&&(this.index=1,this.setTransform(-1*this.index*this._width)),this.index<=0&&(this.index=this.slidesLength,this.setTransform(-1*this.index*this._width)),this.$emit("transtionend",this.index-1),this.auto=!0,this.slideing=!0},i)},setTime(){this.timer1=window.setTimeout(()=>{this.auto?(this.index++,this.wh()):window.clearTimeout(this.timer1)},this.interval)},starDom(){var t=document.querySelector("."+this.className).getElementsByClassName("wh_slide");if(this.slidesLength=t.length,this.slidesLength>1){var i=t[0].cloneNode(!0),s=t[this.slidesLength-1].cloneNode(!0);document.querySelector("."+this.className).insertBefore(s,t[0]),document.querySelector("."+this.className).appendChild(i),this._width=document.querySelector("."+this.className).offsetWidth,this.dom=document.querySelector("."+this.className).style}},clearTimeOut(){this.auto=!1,window.clearTimeout(this.timer1)}}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",{staticClass:"wh_content",on:{touchmove:t.fn}},[s("div",{staticClass:"wh_swiper",class:t.className,on:{touchstart:t.s,touchmove:t.m,touchend:t.e}},[t._t("default")],2),t._v(" "),t.showIndicator?s("div",{staticClass:"wh_indicator"},t._l(t.slidesLength,function(i,e){return s("div",{staticClass:"wh_indicator_item",class:{wh_show_bgcolor:t.index-1==e}})})):t._e()])},staticRenderFns:[]};var d=s("X4nt")(a,o,!1,function(t){s("Ocjr")},null,null).exports,l={methods:{clickSlide(){this.$emit("click")}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wh_slide",on:{click:this.clickSlide}},[this._t("default")],2)},staticRenderFns:[]};var c={data:()=>({list:[{img:"https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360"},{img:"https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360"},{img:"https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360"}]}),components:{Swiper:d,Slide:s("X4nt")(l,m,!1,function(t){s("+A7y")},null,null).exports},methods:{getNum(t){this.$toast(`==当前滑到了第${t}个`,400)},prevSlideClick(){this.$refs.swiper.prevSlide()},nextSlideClick(){this.$refs.swiper.nextSlide()},slideToClick(){this.$refs.swiper.slideTo(2)}}},u={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hello"},[this.list.length>0?i("Swiper",{ref:"swiper",on:{transtionend:this.getNum}},this._l(this.list,function(t,s){return i("Slide",{key:s},[i("img",{attrs:{src:t.img}})])})):this._e(),this._v(" "),i("div",{staticStyle:{width:"100%",height:"100px",background:"red"}})],1)},staticRenderFns:[]};var p=s("X4nt")(c,u,!1,function(t){s("V4MN")},"data-v-66dda140",null).exports;e.default.use(r.a);var f=new r.a({routes:[{path:"/",name:"HelloWorld",component:p}]}),w=s("kqZI"),x=s.n(w);e.default.config.productionTip=!1,e.default.use(x.a),new e.default({el:"#app",router:f,template:"<App/>",components:{App:h}})},Ocjr:function(t,i){},Sxou:function(t,i){},V4MN:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.908c2c0b4b67b5b368a1.js.map