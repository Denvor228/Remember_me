(function(){"use strict";var t={4118:function(t,e,n){var s=n(9242),o=n(2483),r=n(3396);function i(t,e,n,s,o,i){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)((0,r.LL)(i.layout),null,{default:(0,r.w5)((()=>[(0,r.Wm)(l)])),_:1})}var l={computed:{layout(){return this.$route.meta.layout||"default-layout"}}},u=n(89);const c=(0,u.Z)(l,[["render",i]]);var a=c,d=n(7139);const h=t=>((0,r.dD)("data-v-dded93da"),t=t(),(0,r.Cn)(),t),p={class:"container"},f=h((()=>(0,r._)("header",null,[(0,r._)("div",{class:"logo"})],-1))),m=h((()=>(0,r._)("h2",{class:"header"},[(0,r.Uk)(" Як заробляти "),(0,r._)("span",{class:"orange"},"від $100"),(0,r.Uk)(" на день на налаштуванні рекламних кампаній Facebook+Instagram ")],-1))),v={class:"lesson-title"},b={class:"title"},g={class:"subtitle"},y={class:"lesson-block"},k={class:"youtube-area"},_={class:"lessons-list"},w={key:0},T=["id","onClick"],O=h((()=>(0,r._)("p",{class:"background-image"},null,-1))),D={class:"lesson-link-text"},E={key:1},j={class:"bottom-block"},C={class:"lesson-block-description"},S=h((()=>(0,r._)("h4",{class:"lesson-description-header"}," У цьому епізоді ви дізнаєтесь: ",-1))),x={class:"lesson-description"},L={class:"button-block"},P={key:0,class:"button-description"};function U(t,e,n,s,o,i){const l=(0,r.up)("YouTube");return(0,r.wg)(),(0,r.iD)("div",p,[f,m,(0,r._)("div",v,[(0,r._)("h3",b,(0,d.zw)(t.title),1),(0,r._)("p",g,(0,d.zw)(t.subtitle),1)]),(0,r._)("div",y,[(0,r._)("div",k,[(0,r.Wm)(l,{class:"lesson-video",src:t.videoUrl,autoplay:1,onStateChange:e[0]||(e[0]=t=>1===this.$refs.youtube.getPlayerState()?i.startTimer():i.stopTimer()),ref:"youtube"},null,8,["src"])]),(0,r._)("div",_,[t.posts&&t.posts.length?((0,r.wg)(),(0,r.iD)("ul",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.posts,((e,n)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,d.C_)(["lesson-link",n===t.currentElemnt?"lesson-link-active":"lesson-link"]),id:n,onClick:e=>t.counter>n&&i.changeLesson(n),key:e,ref_for:!0,ref:n},[O,(0,r._)("p",D,(0,d.zw)(e.subtitle),1)],10,T)))),128))])):(0,r.kq)("",!0),t.errors&&t.errors.length?((0,r.wg)(),(0,r.iD)("ul",E,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.errors,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{key:t},(0,d.zw)(e.message),1)))),128))])):(0,r.kq)("",!0)])]),(0,r._)("div",j,[(0,r._)("div",C,[S,(0,r._)("p",x,(0,d.zw)(t.description),1)]),(0,r._)("div",L,[t.currentElemnt!==t.posts.length-1&&t.counter>=t.currentElemnt+1?((0,r.wg)(),(0,r.iD)("p",P," Вже переглянули? Отримайте доступ до наступного: ")):(0,r.kq)("",!0),t.currentElemnt!==t.posts.length-1&&t.counter>=t.currentElemnt+1?((0,r.wg)(),(0,r.iD)("button",{key:1,class:"next-lesson-button",onClick:e[1]||(e[1]=e=>t.currentElemnt<t.posts.length-1&&i.changeLesson(t.currentElemnt+1))}," Наступний епізод ")):(0,r.kq)("",!0)])])])}n(7658);var z=n(4161),Y=n(2722),q=n.n(Y),H={name:"Default-layout",data:()=>({posts:[],errors:[],videoUrl:"",title:"",subtitle:"",description:"",currentElemnt:"",currentTime:"",currentStatus:"",timer:null,disabled:[],counter:0}),components:{YouTube:q()},created(){z.Z.get("http://localhost:8081/db.json").then((t=>{this.posts=t.data})).catch((t=>{this.erros.push(t)}))},updated(){this.videoUrl||this.changeLesson(0)},methods:{changeLesson(t){this.videoUrl=this.posts[t].video_url,this.title=this.posts[t].title,this.description=this.posts[t].description,this.subtitle=this.posts[t].subtitle,this.currentElemnt=t,this.currentTime=this.posts[t].video_time},startTimer(){0!==this.currentTime&&(this.timer=setInterval((()=>{this.currentTime--,console.log(this.currentTime)}),1e3))},stopTimer(){clearTimeout(this.timer),this.timer=null}},watch:{currentTime(t){t<=0&&(this.stopTimer(),this.counter>=this.currentElemnt&&(this.counter+=1,console.log(this.counter)))}}};const I=(0,u.Z)(H,[["render",U],["__scopeId","data-v-dded93da"]]);var M=I;const Z=(0,o.p7)({routes:[{path:"/lesson1",name:"Home",component:M,meta:{layout:"default-layout"}}],history:(0,o.PO)()}),$=(0,s.ri)(a);$.component("default-layout",M),$.component("YouTube",q()),$.use(Z),$.mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,r){if(!s){var i=1/0;for(a=0;a<t.length;a++){s=t[a][0],o=t[a][1],r=t[a][2];for(var l=!0,u=0;u<s.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(l=!1,r<i&&(i=r));if(l){t.splice(a--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[s,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],l=s[1],u=s[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var a=u(n)}for(e&&e(s);c<i.length;c++)r=i[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(a)},s=self["webpackChunktest"]=self["webpackChunktest"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4118)}));s=n.O(s)})();
//# sourceMappingURL=app.e37d0e54.js.map