(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[70],{2426:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(88),a=n.n(r),c=n(91),u=n(89),i=n(92),s=n(94),o=n(95),b=n(136),f=n(139),p=n(147),w=n(142),v=n(2290),h=n(81),d=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var r;Object(u.a)(this,n),(r=t.call(this,e)).twobit=void 0;var a={filehandle:Object(f.openLocation)(Object(h.readConfObject)(e,"twoBitLocation"))};return r.twobit=new v.TwoBitFile(a),r}return Object(i.a)(n,[{key:"getRefNames",value:function(){return this.twobit.getSequenceNames()}},{key:"getRegions",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.twobit.getSequenceSizes();case 2:return t=e.sent,e.abrupt("return",Object.keys(t).map((function(e){return{refName:e,start:0,end:t[e]}})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=e.refName,r=e.start,u=e.end;return Object(p.ObservableCreate)(function(){var e=Object(c.a)(a.a.mark((function e(c){var i,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.twobit.getSequenceSize(n);case 2:return i=e.sent,s=void 0!==i?Math.min(i,u):u,e.next=6,t.twobit.getSequence(n,r,s);case 6:(o=e.sent)&&c.next(new w.a({id:"".concat(n," ").concat(r,"-").concat(s),data:{refName:n,start:r,end:s,seq:o}})),c.complete();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(b.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=70.887b787b.chunk.js.map