(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[20],{2204:function(e,t,r){"use strict";(function(e){var i=r(1);function n(t){var r;r="undefined"!==typeof window?window:"undefined"!==typeof self?self:e;var i="undefined"!==typeof document&&document.attachEvent;if(!i){var n=function(){var e=r.requestAnimationFrame||r.mozRequestAnimationFrame||r.webkitRequestAnimationFrame||function(e){return r.setTimeout(e,20)};return function(t){return e(t)}}(),o=function(){var e=r.cancelAnimationFrame||r.mozCancelAnimationFrame||r.webkitCancelAnimationFrame||r.clearTimeout;return function(t){return e(t)}}(),s=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,i=t.lastElementChild,n=r.firstElementChild;i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight,n.style.width=r.offsetWidth+1+"px",n.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},a=function(e){if(!(e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;s(this),this.__resizeRAF__&&o(this.__resizeRAF__),this.__resizeRAF__=n((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}},l=!1,c="",u="animationstart",d="Webkit Moz O ms".split(" "),f="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),h=document.createElement("fakeelement");if(void 0!==h.style.animationName&&(l=!0),!1===l)for(var p=0;p<d.length;p++)if(void 0!==h.style[d[p]+"AnimationName"]){c="-"+d[p].toLowerCase()+"-",u=f[p],l=!0;break}var m="resizeanim",v="@"+c+"keyframes "+m+" { from { opacity: 0; } to { opacity: 0; } } ",g=c+"animation: 1ms "+m+"; "}return{addResizeListener:function(e,n){if(i)e.attachEvent("onresize",n);else{if(!e.__resizeTriggers__){var o=e.ownerDocument,l=r.getComputedStyle(e);l&&"static"==l.position&&(e.style.position="relative"),function(e){if(!e.getElementById("detectElementResize")){var r=(v||"")+".resize-triggers { "+(g||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=e.head||e.getElementsByTagName("head")[0],n=e.createElement("style");n.id="detectElementResize",n.type="text/css",null!=t&&n.setAttribute("nonce",t),n.styleSheet?n.styleSheet.cssText=r:n.appendChild(e.createTextNode(r)),i.appendChild(n)}}(o),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=o.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),s(e),e.addEventListener("scroll",a,!0),u&&(e.__resizeTriggers__.__animationListener__=function(t){t.animationName==m&&s(e)},e.__resizeTriggers__.addEventListener(u,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(n)}},removeResizeListener:function(e,t){if(i)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",a,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(u,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(r){}}}}}var o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},c=function(e){function t(){var e,r,i;o(this,t);for(var n=arguments.length,s=Array(n),a=0;a<n;a++)s[a]=arguments[a];return r=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={height:i.props.defaultHeight||0,width:i.props.defaultWidth||0},i._onResize=function(){var e=i.props,t=e.disableHeight,r=e.disableWidth,n=e.onResize;if(i._parentNode){var o=i._parentNode.offsetHeight||0,s=i._parentNode.offsetWidth||0,a=window.getComputedStyle(i._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,c=parseInt(a.paddingRight,10)||0,u=parseInt(a.paddingTop,10)||0,d=parseInt(a.paddingBottom,10)||0,f=o-u-d,h=s-l-c;(!t&&i.state.height!==f||!r&&i.state.width!==h)&&(i.setState({height:o-u-d,width:s-l-c}),n({height:o,width:s}))}},i._setRef=function(e){i._autoSizer=e},l(i,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=n(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.disableHeight,o=e.disableWidth,s=e.style,l=this.state,c=l.height,u=l.width,d={overflow:"visible"},f={},h=!1;return n||(0===c&&(h=!0),d.height=0,f.height=c),o||(0===u&&(h=!0),d.width=0,f.width=u),Object(i.createElement)("div",{className:r,ref:this._setRef,style:a({},d,s)},!h&&t(f))}}]),t}(i.PureComponent);c.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}},t.a=c}).call(this,r(143))},2205:function(e,t,r){"use strict";var i=r(86),n=r(96);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1)),s=(0,i(r(97)).default)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.default=s},2206:function(e,t,r){"use strict";var i=r(86),n=r(96);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1)),s=(0,i(r(97)).default)(o.createElement("path",{d:"M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8m0-6h-2v4h-4V3H8v4h-.01C6.9 6.99 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.51V9c0-1.1-.9-2-2-2V3z"}),"PowerOutlined");t.default=s},2310:function(e,t,r){"use strict";r.d(t,"a",(function(){return A}));var i=r(729),n=r.n(i),o=r(553),s=r.n(o),a=r(822),l=r.n(a),c=r(1),u=r.n(c),d=r(0),f=r(27),h=r(28);function p(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}var m=function(e,t){var r;void 0===t&&(t=p);var i,n=[],o=!1;return function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return o&&r===this&&t(s,n)||(i=e.apply(this,s),o=!0,r=this,n=s),i}},v=(r(14),"object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()});function g(e){cancelAnimationFrame(e.id)}function _(e,t){var r=v();var i={id:requestAnimationFrame((function n(){v()-r>=t?e.call(null):i.id=requestAnimationFrame(n)}))};return i}var b=null;function S(e){if(void 0===e&&(e=!1),null===b||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var i=document.createElement("div"),n=i.style;return n.width="100px",n.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?b="positive-descending":(t.scrollLeft=1,b=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),b}return b}var z=function(e,t){return e};function y(e){var t,r,i=e.getItemOffset,n=e.getEstimatedTotalSize,o=e.getItemSize,s=e.getOffsetForIndexAndAlignment,a=e.getStartIndexForOffset,l=e.getStopIndexForStartIndex,u=e.initInstanceProps,p=e.shouldResetStyleCacheOnItemSizeChange,v=e.validateProps;return r=t=function(e){function t(t){var r;return(r=e.call(this,t)||this)._instanceProps=u(r.props,Object(h.a)(Object(h.a)(r))),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:Object(h.a)(Object(h.a)(r)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"===typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=m((function(e,t,i,n){return r.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:i,visibleStopIndex:n})})),r._callOnScroll=void 0,r._callOnScroll=m((function(e,t,i){return r.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:i})})),r._getItemStyle=void 0,r._getItemStyle=function(e){var t,n=r.props,s=n.direction,a=n.itemSize,l=n.layout,c=r._getItemStyleCache(p&&a,p&&l,p&&s);if(c.hasOwnProperty(e))t=c[e];else{var u=i(r.props,e,r._instanceProps),d=o(r.props,e,r._instanceProps),f="horizontal"===s||"horizontal"===l,h="rtl"===s,m=f?u:0;c[e]=t={position:"absolute",left:h?void 0:m,right:h?m:void 0,top:f?0:u,height:f?"100%":d,width:f?d:"100%"}}return t},r._getItemStyleCache=void 0,r._getItemStyleCache=m((function(e,t,r){return{}})),r._onScrollHorizontal=function(e){var t=e.currentTarget,i=t.clientWidth,n=t.scrollLeft,o=t.scrollWidth;r.setState((function(e){if(e.scrollOffset===n)return null;var t=r.props.direction,s=n;if("rtl"===t)switch(S()){case"negative":s=-n;break;case"positive-descending":s=o-i-n}return s=Math.max(0,Math.min(s,o-i)),{isScrolling:!0,scrollDirection:e.scrollOffset<n?"forward":"backward",scrollOffset:s,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(e){var t=e.currentTarget,i=t.clientHeight,n=t.scrollHeight,o=t.scrollTop;r.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,n-i));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"===typeof t?t(e):null!=t&&"object"===typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&g(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=_(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}Object(f.a)(t,e),t.getDerivedStateFromProps=function(e,t){return w(e,t),v(e),null};var r=t.prototype;return r.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},r.scrollToItem=function(e,t){void 0===t&&(t="auto");var r=this.props.itemCount,i=this.state.scrollOffset;e=Math.max(0,Math.min(e,r-1)),this.scrollTo(s(this.props,e,t,i,this._instanceProps))},r.componentDidMount=function(){var e=this.props,t=e.direction,r=e.initialScrollOffset,i=e.layout;if("number"===typeof r&&null!=this._outerRef){var n=this._outerRef;"horizontal"===t||"horizontal"===i?n.scrollLeft=r:n.scrollTop=r}this._callPropsCallbacks()},r.componentDidUpdate=function(){var e=this.props,t=e.direction,r=e.layout,i=this.state,n=i.scrollOffset;if(i.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===r)if("rtl"===t)switch(S()){case"negative":o.scrollLeft=-n;break;case"positive-ascending":o.scrollLeft=n;break;default:var s=o.clientWidth,a=o.scrollWidth;o.scrollLeft=a-s-n}else o.scrollLeft=n;else o.scrollTop=n}this._callPropsCallbacks()},r.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&g(this._resetIsScrollingTimeoutId)},r.render=function(){var e=this.props,t=e.children,r=e.className,i=e.direction,o=e.height,s=e.innerRef,a=e.innerElementType,l=e.innerTagName,u=e.itemCount,f=e.itemData,h=e.itemKey,p=void 0===h?z:h,m=e.layout,v=e.outerElementType,g=e.outerTagName,_=e.style,b=e.useIsScrolling,S=e.width,y=this.state.isScrolling,w="horizontal"===i||"horizontal"===m,I=w?this._onScrollHorizontal:this._onScrollVertical,O=this._getRangeToRender(),R=O[0],T=O[1],x=[];if(u>0)for(var M=R;M<=T;M++)x.push(Object(c.createElement)(t,{data:f,key:p(M,f),index:M,isScrolling:b?y:void 0,style:this._getItemStyle(M)}));var C=n(this.props,this._instanceProps);return Object(c.createElement)(v||g||"div",{className:r,onScroll:I,ref:this._outerRefSetter,style:Object(d.a)({position:"relative",height:o,width:S,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},_)},Object(c.createElement)(a||l||"div",{children:x,ref:s,style:{height:w?"100%":C,pointerEvents:y?"none":void 0,width:w?C:"100%"}}))},r._callPropsCallbacks=function(){if("function"===typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],r=e[1],i=e[2],n=e[3];this._callOnItemsRendered(t,r,i,n)}if("function"===typeof this.props.onScroll){var o=this.state,s=o.scrollDirection,a=o.scrollOffset,l=o.scrollUpdateWasRequested;this._callOnScroll(s,a,l)}},r._getRangeToRender=function(){var e=this.props,t=e.itemCount,r=e.overscanCount,i=this.state,n=i.isScrolling,o=i.scrollDirection,s=i.scrollOffset;if(0===t)return[0,0,0,0];var c=a(this.props,s,this._instanceProps),u=l(this.props,c,s,this._instanceProps),d=n&&"backward"!==o?1:Math.max(1,r),f=n&&"forward"!==o?1:Math.max(1,r);return[Math.max(0,c-d),Math.max(0,Math.min(t-1,u+f)),c,u]},t}(c.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},r}var w=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},I=function(e,t,r){var i=e.itemSize,n=r.itemMetadataMap,o=r.lastMeasuredIndex;if(t>o){var s=0;if(o>=0){var a=n[o];s=a.offset+a.size}for(var l=o+1;l<=t;l++){var c=i(l);n[l]={offset:s,size:c},s+=c}r.lastMeasuredIndex=t}return n[t]},O=function(e,t,r,i,n){for(;i<=r;){var o=i+Math.floor((r-i)/2),s=I(e,o,t).offset;if(s===n)return o;s<n?i=o+1:s>n&&(r=o-1)}return i>0?i-1:0},R=function(e,t,r,i){for(var n=e.itemCount,o=1;r<n&&I(e,r,t).offset<i;)r+=o,o*=2;return O(e,t,Math.min(r,n-1),Math.floor(r/2),i)},T=function(e,t){var r=e.itemCount,i=t.itemMetadataMap,n=t.estimatedItemSize,o=t.lastMeasuredIndex,s=0;if(o>=r&&(o=r-1),o>=0){var a=i[o];s=a.offset+a.size}return s+(r-o-1)*n},x=y({getItemOffset:function(e,t,r){return I(e,t,r).offset},getItemSize:function(e,t,r){return r.itemMetadataMap[t].size},getEstimatedTotalSize:T,getOffsetForIndexAndAlignment:function(e,t,r,i,n){var o=e.direction,s=e.height,a=e.layout,l=e.width,c="horizontal"===o||"horizontal"===a?l:s,u=I(e,t,n),d=T(e,n),f=Math.max(0,Math.min(d-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===r&&(r=i>=h-c&&i<=f+c?"auto":"center"),r){case"start":return f;case"end":return h;case"center":return Math.round(h+(f-h)/2);case"auto":default:return i>=h&&i<=f?i:i<h?h:f}},getStartIndexForOffset:function(e,t,r){return function(e,t,r){var i=t.itemMetadataMap,n=t.lastMeasuredIndex;return(n>0?i[n].offset:0)>=r?O(e,t,n,0,r):R(e,t,Math.max(0,n),r)}(e,r,t)},getStopIndexForStartIndex:function(e,t,r,i){for(var n=e.direction,o=e.height,s=e.itemCount,a=e.layout,l=e.width,c="horizontal"===n||"horizontal"===a?l:o,u=I(e,t,i),d=r+c,f=u.offset+u.size,h=t;h<s-1&&f<d;)h++,f+=I(e,h,i).size;return h},initInstanceProps:function(e,t){var r={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,i){void 0===i&&(i=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),i&&t.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}});var M=r(431),C=r.n(M);var E=function(e){return function(t){e.forEach((function(e){"function"===typeof e?e(t):null!=e&&(e.current=t)}))}},L=function(){},k=function(e,t){return void 0===t&&(t=null),{child:null,isShown:!t||t.public.isOpen&&t.isShown,parent:t,public:e,sibling:null,visited:!1}},D=function(e,t){return(0,t.getRecordData)(e).data.id},P=function(e){return function(t,r,i){return i.refresh?function(e,t,r){var i=e.createRecord,n=t.buildingTaskTimeout,o=t.placeholder,s=t.async,a=void 0!==s&&s,l=t.treeWalker,c=a&&void 0!==r.records,u=r.records,d=[],f=new Map,h=n?{timeout:n}:void 0,p=new WeakMap,m=l(),v=m.next().value,g=i(v.data,r,void 0,c?u.get(v.data.id):void 0);f.set(g.public.data.id,g),p.set(g,v);var _=g,b=!0,S=g,z="requestIdleCallback"in window&&void 0!==o&&!(null===o&&!r.order),y=z?function(e){return e.timeRemaining()>0}:function(){return!0},w=function e(t){for(;null!==_;){if(!y(t))return void requestIdleCallback(e,h);if(_.visited)_.visited=!1,_=null!==_.sibling?_.sibling:_.parent,S=_;else{var n=m.next(p.get(_)).value;if(void 0===n){b?b=!1:(_.isShown&&d.push(_.public.data.id),_.visited=null!==_.child,_=null!==_.child?_.child:null!==_.sibling?_.sibling:_.parent),S=_;continue}var o=i(n.data,r,b?void 0:_,c?u.get(n.data.id):void 0);f.set(o.public.data.id,o),p.set(o,n),b||S!==_?S.sibling=o:S.child=o,S=o}}z&&r.setState({order:d,records:f,updateRequest:{}})};return z?requestIdleCallback(w,h):w(),void 0!==o&&a&&r.order?r:{order:d,records:f}}(e,t,r):function(e,t){var r=e.order,i=e.records,n=t.opennessState;if("object"!==typeof n)return null;for(var o in n)if(i.has(o)){var s=n[o],a=i.get(o),l="boolean"===typeof s?{open:s}:s,c=l.open,u=l.subtreeCallback,d=void 0===u?L:u,f=L,h=L;a.isShown&&(c?function(){for(var e=r.indexOf(o),t=a;null!==t;){if(null!==t.sibling){t=t.sibling;break}t=t.parent}var i=null===t?r.length-1-e:r.indexOf(t.public.data.id)-1-e,n=[[e+1,i]],s=0;f=function(t){t.isShown=!t.parent||t.parent.public.isOpen&&t.parent.isShown,t.isShown&&(n[s].push(t.public.data.id),32768===n[s].length&&(s+=1,n.push([e+1+32768*s,0])))},h=function(){for(var e=0;e<n.length;e++){var t;(t=r).splice.apply(t,n[e])}}}():a.public.isOpen&&function(){var e=r.indexOf(o),t=0;f=function(e){e.isShown&&(t+=1),e.isShown=!e.parent||e.parent.public.isOpen&&e.parent.isShown},h=function(){r.splice(e+1,t)}}());for(var p=a;null!==p;)p.visited?(p.visited=!1,p=p===a?null:null!==p.sibling?p.sibling:p.parent):(p.public.isOpen=p===a?c:p.public.isOpen,d(p.public,a.public),p!==a&&f(p),p.visited=null!==p.child,p=null!==p.child?p.child:p===a?null:null!==p.sibling?p.sibling:p.parent);h()}return{order:r,records:i,updateRequest:{}}}(r,i)}},W=function(e){function t(t,r){var i;return(i=e.call(this,t,r)||this).getRecordData=i.getRecordData.bind(C()(i)),i.state={list:Object(c.createRef)(),recomputeTree:i.recomputeTree.bind(C()(i)),setState:i.setState.bind(C()(i))},i}l()(t,e),t.getDerivedStateFromProps=function(e,t){var r=e.listRef,i=void 0===r?null:r,n=e.treeWalker,o=t.computeTree,a=t.list,l=t.order,c=t.treeWalker;return s()({attachRefs:E([a,i])},n===c&&l?null:o(e,t,{refresh:!0}),{treeWalker:n})};var r=t.prototype;return r.getItemData=function(){var e=this.props,t=e.children,r=e.itemData;return{component:t,getRecordData:this.getRecordData,treeData:r}},r.getRecordData=function(e){var t=this.state,r=t.order;return t.records.get(r[e]).public},r.recomputeTree=function(e){var t=this;return new Promise((function(r){t.setState((function(r){return r.computeTree(t.props,r,{opennessState:e})}),r)}))},r.scrollTo=function(e){var t;null==(t=this.state.list.current)||t.scrollTo(e)},r.scrollToItem=function(e,t){var r;null==(r=this.state.list.current)||r.scrollToItem(this.state.order.indexOf(e),t)},t}(c.PureComponent);W.defaultProps={rowComponent:function(e){var t=e.index,r=e.data,i=r.component,n=r.getRecordData,o=r.treeData,s=e.style,a=e.isScrolling,l=n(t);return u.a.createElement(i,Object.assign({isScrolling:a,style:s,treeData:o},l))}};var N=W,j=(P({createRecord:function(e,t,r,i){var n=t.recomputeTree;return k({data:e,isOpen:i?i.public.isOpen:e.isOpenByDefault,setOpen:function(t){var r;return n(((r={})[e.id]=t,r))}},r)}}),P({createRecord:function(e,t,r,i){var n=t.recomputeTree,o=t.resetAfterId,s=k({data:e,height:i?i.public.height:e.defaultHeight,isOpen:i?i.public.isOpen:e.isOpenByDefault,resize:function(e,t){s.public.height=e,o(s.public.data.id,t)},setOpen:function(t){var r;return n(((r={})[e.id]=t,r))}},r);return s}})),A=function(e){function t(t,r){var i;return(i=e.call(this,t,r)||this).getItemSize=i.getItemSize.bind(C()(i)),i.state=s()({},i.state,{computeTree:j,resetAfterId:i.resetAfterId.bind(C()(i))}),i}l()(t,e);var r=t.prototype;return r.resetAfterId=function(e,t){var r;void 0===t&&(t=!1);var i=this.state,n=i.list,o=i.order;null==(r=n.current)||r.resetAfterIndex(o.indexOf(e),t)},r.recomputeTree=function(t){var r=this;return e.prototype.recomputeTree.call(this,t).then((function(){var e;null==(e=r.state.list.current)||e.resetAfterIndex(0,!0)}))},r.render=function(){var e=this.props,t=(e.children,e.placeholder),r=e.itemSize,i=e.rowComponent,o=(e.treeWalker,n()(e,["children","placeholder","itemSize","rowComponent","treeWalker"])),s=this.state,a=s.attachRefs,l=s.order;return t&&0===l.length?t:u.a.createElement(x,Object.assign({},o,{itemCount:l.length,itemData:this.getItemData(),itemKey:D,itemSize:null!=r?r:this.getItemSize,ref:a}),i)},r.getItemSize=function(e){return this.getRecordData(e).height},t}(N)},822:function(e,t,r){var i=r(540);e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=20.c1e23faa.chunk.js.map