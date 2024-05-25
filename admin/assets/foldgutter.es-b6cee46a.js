import{c as P,h as A}from"./codemirror.es2-5884f31a.js";var j=Object.defineProperty,d=(C,y)=>j(C,"name",{value:y,configurable:!0});function U(C,y){for(var a=0;a<y.length;a++){const c=y[a];if(typeof c!="string"&&!Array.isArray(c)){for(const g in c)if(g!=="default"&&!(g in C)){const F=Object.getOwnPropertyDescriptor(c,g);F&&Object.defineProperty(C,g,F.get?F:{enumerable:!0,get:()=>c[g]})}}}return Object.freeze(Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}))}d(U,"_mergeNamespaces");var L={exports:{}},V={exports:{}},E;function S(){return E||(E=1,function(C,y){(function(a){a(P())})(function(a){function c(e,t,i,f){if(i&&i.call){var s=i;i=null}else var s=m(e,i,"rangeFinder");typeof t=="number"&&(t=a.Pos(t,0));var O=m(e,i,"minFoldSize");function w(l){var r=s(e,t);if(!r||r.to.line-r.from.line<O)return null;if(f==="fold")return r;for(var p=e.findMarksAt(r.from),v=0;v<p.length;++v)if(p[v].__isFold){if(!l)return null;r.cleared=!0,p[v].clear()}return r}d(w,"getRange");var u=w(!0);if(m(e,i,"scanUp"))for(;!u&&t.line>e.firstLine();)t=a.Pos(t.line-1,0),u=w(!1);if(!(!u||u.cleared||f==="unfold")){var o=g(e,i,u);a.on(o,"mousedown",function(l){n.clear(),a.e_preventDefault(l)});var n=e.markText(u.from,u.to,{replacedWith:o,clearOnEnter:m(e,i,"clearOnEnter"),__isFold:!0});n.on("clear",function(l,r){a.signal(e,"unfold",e,l,r)}),a.signal(e,"fold",e,u.from,u.to)}}d(c,"doFold");function g(e,t,i){var f=m(e,t,"widget");if(typeof f=="function"&&(f=f(i.from,i.to)),typeof f=="string"){var s=document.createTextNode(f);f=document.createElement("span"),f.appendChild(s),f.className="CodeMirror-foldmarker"}else f&&(f=f.cloneNode(!0));return f}d(g,"makeWidget"),a.newFoldFunction=function(e,t){return function(i,f){c(i,f,{rangeFinder:e,widget:t})}},a.defineExtension("foldCode",function(e,t,i){c(this,e,t,i)}),a.defineExtension("isFolded",function(e){for(var t=this.findMarksAt(e),i=0;i<t.length;++i)if(t[i].__isFold)return!0}),a.commands.toggleFold=function(e){e.foldCode(e.getCursor())},a.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold")},a.commands.unfold=function(e){e.foldCode(e.getCursor(),{scanUp:!1},"unfold")},a.commands.foldAll=function(e){e.operation(function(){for(var t=e.firstLine(),i=e.lastLine();t<=i;t++)e.foldCode(a.Pos(t,0),{scanUp:!1},"fold")})},a.commands.unfoldAll=function(e){e.operation(function(){for(var t=e.firstLine(),i=e.lastLine();t<=i;t++)e.foldCode(a.Pos(t,0),{scanUp:!1},"unfold")})},a.registerHelper("fold","combine",function(){var e=Array.prototype.slice.call(arguments,0);return function(t,i){for(var f=0;f<e.length;++f){var s=e[f](t,i);if(s)return s}}}),a.registerHelper("fold","auto",function(e,t){for(var i=e.getHelpers(t,"fold"),f=0;f<i.length;f++){var s=i[f](e,t);if(s)return s}});var F={rangeFinder:a.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0};a.defineOption("foldOptions",null);function m(e,t,i){if(t&&t[i]!==void 0)return t[i];var f=e.options.foldOptions;return f&&f[i]!==void 0?f[i]:F[i]}d(m,"getOption"),a.defineExtension("foldOption",function(e,t){return m(this,e,t)})})}()),V.exports}d(S,"requireFoldcode");(function(C,y){(function(a){a(P(),S())})(function(a){a.defineOption("foldGutter",!1,function(o,n,l){l&&l!=a.Init&&(o.clearGutter(o.state.foldGutter.options.gutter),o.state.foldGutter=null,o.off("gutterClick",s),o.off("changes",O),o.off("viewportChange",w),o.off("fold",u),o.off("unfold",u),o.off("swapDoc",O)),n&&(o.state.foldGutter=new g(F(n)),f(o),o.on("gutterClick",s),o.on("changes",O),o.on("viewportChange",w),o.on("fold",u),o.on("unfold",u),o.on("swapDoc",O))});var c=a.Pos;function g(o){this.options=o,this.from=this.to=0}d(g,"State");function F(o){return o===!0&&(o={}),o.gutter==null&&(o.gutter="CodeMirror-foldgutter"),o.indicatorOpen==null&&(o.indicatorOpen="CodeMirror-foldgutter-open"),o.indicatorFolded==null&&(o.indicatorFolded="CodeMirror-foldgutter-folded"),o}d(F,"parseOptions");function m(o,n){for(var l=o.findMarks(c(n,0),c(n+1,0)),r=0;r<l.length;++r)if(l[r].__isFold){var p=l[r].find(-1);if(p&&p.line===n)return l[r]}}d(m,"isFolded");function e(o){if(typeof o=="string"){var n=document.createElement("div");return n.className=o+" CodeMirror-guttermarker-subtle",n}else return o.cloneNode(!0)}d(e,"marker");function t(o,n,l){var r=o.state.foldGutter.options,p=n-1,v=o.foldOption(r,"minFoldSize"),G=o.foldOption(r,"rangeFinder"),x=typeof r.indicatorFolded=="string"&&i(r.indicatorFolded),b=typeof r.indicatorOpen=="string"&&i(r.indicatorOpen);o.eachLine(n,l,function(M){++p;var _=null,h=M.gutterMarkers;if(h&&(h=h[r.gutter]),m(o,p)){if(x&&h&&x.test(h.className))return;_=e(r.indicatorFolded)}else{var N=c(p,0),k=G&&G(o,N);if(k&&k.to.line-k.from.line>=v){if(b&&h&&b.test(h.className))return;_=e(r.indicatorOpen)}}!_&&!h||o.setGutterMarker(M,r.gutter,_)})}d(t,"updateFoldInfo");function i(o){return new RegExp("(^|\\s)"+o+"(?:$|\\s)\\s*")}d(i,"classTest");function f(o){var n=o.getViewport(),l=o.state.foldGutter;l&&(o.operation(function(){t(o,n.from,n.to)}),l.from=n.from,l.to=n.to)}d(f,"updateInViewport");function s(o,n,l){var r=o.state.foldGutter;if(r){var p=r.options;if(l==p.gutter){var v=m(o,n);v?v.clear():o.foldCode(c(n,0),p)}}}d(s,"onGutterClick");function O(o){var n=o.state.foldGutter;if(n){var l=n.options;n.from=n.to=0,clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout(function(){f(o)},l.foldOnChangeTimeSpan||600)}}d(O,"onChange");function w(o){var n=o.state.foldGutter;if(n){var l=n.options;clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout(function(){var r=o.getViewport();n.from==n.to||r.from-n.to>20||n.from-r.to>20?f(o):o.operation(function(){r.from<n.from&&(t(o,r.from,n.from),n.from=r.from),r.to>n.to&&(t(o,n.to,r.to),n.to=r.to)})},l.updateViewportTimeSpan||400)}}d(w,"onViewportChange");function u(o,n){var l=o.state.foldGutter;if(l){var r=n.line;r>=l.from&&r<l.to&&t(o,r,r+1)}}d(u,"onFold")})})();var T=L.exports;const z=A(T),H=U({__proto__:null,default:z},[T]);export{H as f};
