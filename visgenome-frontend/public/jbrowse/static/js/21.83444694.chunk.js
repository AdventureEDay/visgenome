(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[21,10],{2431:function(e,t,r){"use strict";r.r(t),r.d(t,"parseVcfBuffer",(function(){return u})),r.d(t,"splitVcfFileHeaderAndBody",(function(){return c}));var n=r(847),a=r.n(n),i=r(1268),o=r(382),s=[{name:"CHROM",type:"Text"},{name:"POS",type:"Number"},{name:"ID",type:"Text"},{name:"REF",type:"Text"},{name:"ALT",type:"Text"},{name:"QUAL",type:"Number"},{name:"FILTER",type:"Text"},{name:"INFO",type:"Text"},{name:"FORMAT",type:"Text"}];function l(e,t,r){var n=e.parseLine(t),a=new i.a({variant:n,parser:e,id:"vcf-".concat(r)}),o=t.split("\t").map((function(e){return"."===e?"":e}));return 8===o.length&&o.push(""),{id:String(r+1),extendedData:{vcfFeature:a.toJSON()},cells:o.map((function(e,t){return{columnNumber:t,text:e}}))}}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:0,isValidRefName:function(){return!1}},r=c(Object(o.bufferToString)(e)),n=r.header,i=r.body,u=[],p=new a.a({header:n});n="",i.split("\n").forEach((function(e,t){/\S/.test(e)&&u.push(l(p,e,t))})),i="";for(var m={isLoaded:!0,rows:u},f=[],d=[],h=0;h<s.length;h+=1)f.push(h),d[h]={name:s[h].name,dataType:{type:s[h].type}};for(var y=0;y<p.samples.length;y+=1){var b=s.length+y;f.push(b),d[b]={name:p.samples[y],dataType:{type:"Text"}}}return f.push(f.length),d.unshift({name:"Location",dataType:{type:"LocString"},isDerived:!0,derivationFunctionText:"jexl:{text:row.extendedData.vcfFeature.refName+':'\n\n    +row.extendedData.vcfFeature.start+'..'+row.extendedData.vcfFeature.end, extendedData:\n\n    {refName:row.extendedData.vcfFeature.refName,start:row.extendedData.vcfFeature.start,end:row.extendedData.vcfFeature.end}}"}),{rowSet:m,columnDisplayOrder:f,hasColumnNames:!0,columns:d,assemblyName:t.selectedAssemblyName}}function c(e){for(var t,r=0;r<e.length;r+=1){var n=e[r];if("\n"===t&&"#"!==n)break;t=n}return{header:e.substr(0,r),body:e.substr(r)}}},382:function(e,t,r){"use strict";r.r(t),r.d(t,"bufferToString",(function(){return p})),r.d(t,"parseCsvBuffer",(function(){return h})),r.d(t,"parseTsvBuffer",(function(){return b}));var n=r(88),a=r.n(n),i=r(91),o=r(82),s=r(90),l=r(603),u=r.n(l),c=r(83);function p(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u()(Object(s.a)({noheader:!0,output:"csv"},t)).fromString(p(e))}function f(e,t,r){var n,a=e.rows[0].cells[t].text||"",i="Text";try{n=Object(c.parseLocString)(a,r)}catch(o){}return n&&n.refName&&"number"===typeof n.start?i="LocString":/^\d+(\.\d+)?$/.test(a)&&(i="Number"),i}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},r=0,n={isLoaded:!0,rows:e.map((function(e,n){var a=n+(t.hasColumnNameLine?0:1);return e.length>r&&(r=e.length),{id:String(a),cells:e.map((function(e,t){return{columnNumber:t,text:e}}))}}))},a={};if(t.hasColumnNameLine&&void 0!==t.columnNameLineNumber){var i=n.rows.splice(t.columnNameLineNumber-1,1),s=Object(o.a)(i,1),l=s[0];l&&l.cells.forEach((function(e,t){a[t]=e.text||""}))}for(var u=[],p=[],m=function(e){p.push(e);var r=f(n,e,t.isValidRefName);"LocString"===r&&n.rows.forEach((function(r){var n=r.cells[e];n.extendedData=Object(c.parseLocString)(n.text,t.isValidRefName)})),u[e]={name:a[e],dataType:{type:r}}},d=0;d<r;d+=1)m(d);return{rowSet:n,columnDisplayOrder:p,hasColumnNames:!!t.hasColumnNameLine,columns:u,assemblyName:t.selectedAssemblyName}}function h(e){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(a.a.mark((function e(t){var r,n,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(t);case 3:return n=e.sent,e.abrupt("return",d(n,r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(a.a.mark((function e(t){var r,n,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(t,{delimiter:"\t"});case 3:return n=e.sent,e.abrupt("return",d(n,r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},847:function(e,t,r){"use strict";var n=r(848);e.exports=n},848:function(e,t,r){"use strict";var n=r(86),a=n(r(359)),i=n(r(108)),o=n(r(118)),s=n(r(849)),l=function(){function e(){(0,i.default)(this,e)}return(0,o.default)(e,[{key:"toString",value:function(){var e="left"===this.MateDirection?"]":"[";return"left"===this.Join?"".concat(e).concat(this.MatePosition).concat(e).concat(this.Replacement):"".concat(this.Replacement).concat(e).concat(this.MatePosition).concat(e)}}]),e}(),u=function(){function e(t){var r=this;if((0,i.default)(this,e),!t||!t.header||!t.header.length)throw new Error("empty header received");var n=t.header.split(/[\r\n]+/).filter((function(e){return e}));if(!n.length)throw new Error("no non-empty header lines specified");if(this.Breakend=l,this.strict=void 0===t.strict||t.strict,this.metadata=JSON.parse(JSON.stringify({INFO:s.default.InfoFields,FORMAT:s.default.GenotypeFields,ALT:s.default.AltTypes,FILTER:s.default.FilterTypes})),n.forEach((function(e){if(!e.startsWith("#"))throw new Error("Bad line in header:\n".concat(e));if(e.startsWith("##"))r._parseMetadata(e);else if(e){var t=e.split("\t"),n=t.slice(0,8),a=["#CHROM","POS","ID","REF","ALT","QUAL","FILTER","INFO"];if(t.length<8)throw new Error("VCF header missing columns:\n".concat(e));if(9===t.length)throw new Error("VCF header has FORMAT but no samples:\n".concat(e));if(n.length!==a.length||!n.every((function(e,t){return e===a[t]})))throw new Error("VCF column headers not correct:\n".concat(e));r.samples=t.slice(9)}})),!this.samples)throw new Error("VCF does not have a header line")}return(0,o.default)(e,[{key:"_parseMetadata",value:function(e){var t=e.trim().match(/^##(.+?)=(.*)/).slice(1,3),r=(0,a.default)(t,2),n=r[0],i=r[1];if(i.startsWith("<")){n in this.metadata||(this.metadata[n]={});var o=this._parseStructuredMetaVal(i),s=(0,a.default)(o,2),l=s[0],u=s[1];this.metadata[n][l]=u}else this.metadata[n]=i}},{key:"_parseStructuredMetaVal",value:function(e){var t=this._parseKeyValue(e.replace(/^<|>$/g,""),","),r=t.ID;return delete t.ID,"Number"in t&&(Number.isNaN(Number(t.Number))||(t.Number=Number(t.Number))),[r,t]}},{key:"getMetadata",value:function(){for(var e=this.metadata,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(var a=0;a<r.length;a+=1)if(!(e=e[r[a]]))return e;return e}},{key:"_parseKeyValue",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:";",r={},n="",a="",i=1,o=0;o<e.length;o+=1)1===i?"="===e[o]?i=2:e[o]!==t?n+=e[o]:""===a&&(r[n]=null,n=""):2===i?e[o]===t?(r[n]=a,n="",a="",i=1):'"'===e[o]?i=3:a+=e[o]:3===i&&('"'!==e[o]?a+=e[o]:i=2);return 2===i||3===i?r[n]=a:1===i&&(r[n]=null),r}},{key:"parseLine",value:function(e){var t=this;if((e=e.trim()).length){for(var r=0,n=0;r<e.length&&("\t"===e[r]&&(n+=1),9!==n);r+=1);var a=e.substr(0,r).split("\t"),i=e.substr(r+1),o={CHROM:a[0],POS:Number(a[1]),ID:"."===a[2]?null:a[2].split(";"),REF:a[3],ALT:"."===a[4]?null:a[4].split(","),QUAL:"."===a[5]?null:parseFloat(a[5])};if("."===a[6]?o.FILTER=null:"PASS"===a[6]?o.FILTER="PASS":o.FILTER=a[6].split(";"),this.strict&&void 0===a[7])throw new Error("no INFO field specified, must contain at least a '.' (turn off strict mode to allow)");var s=void 0===a[7]||"."===a[7]?{}:this._parseKeyValue(a[7]);Object.keys(s).forEach((function(e){var r;r=s[e]?(r=s[e].split(",")).map((function(e){return"."===e?null:e})):s[e];var n=t.getMetadata("INFO",e,"Type");n&&("Integer"===n||"Float"===n?r=r.map((function(e){return null===e?null:Number(e)})):"Flag"===n&&(s[e]?console.warn("Info field ".concat(e," is a Flag and should not have a value (got value ").concat(s[e],")")):r=!0)),s[e]=r})),o.INFO=s,o.ALT&&s&&s.SVTYPE&&"BND"===s.SVTYPE[0]&&(o.ALT=o.ALT.map(this._parseBreakend.bind(this)));var l=this;return Object.defineProperty(u.prototype,"SAMPLES",{get:function(){var e=l._parseGenotypes(a[8],i);return Object.defineProperty(this,"SAMPLES",{value:e}),e}}),new u(o)}function u(e){Object.assign(this,e)}}},{key:"_parseBreakend",value:function(e){var t=e.split(/[[\]]/);if(t.length>1){var r=new l;r.MateDirection=e.includes("[")?"right":"left";for(var n=0;n<t.length;n+=1){var a=t[n];a&&(a.includes(":")?(r.MatePosition=a,r.Join=r.Replacement?"right":"left"):r.Replacement=a)}return r}return e}},{key:"_parseGenotypes",value:function(e,t){var r=this;t=t.split("\t");var n={};return e=e&&e.split(":"),this.samples.forEach((function(a,i){n[a]={},e.forEach((function(e){n[a][e]=null})),t[i].split(":").forEach((function(t,i){var o;if(""===t||"."===t||void 0===t)o=null;else{o=t.split(",").map((function(e){return"."===e?null:e}));var s=r.getMetadata("FORMAT",e[i],"Type");"Integer"!==s&&"Float"!==s||!o||(o=o.map((function(e){return e?Number(e):null})))}n[a][e[i]]=o}),{})})),n}}]),e}();e.exports=u},849:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={InfoFields:{AA:{Number:1,Type:"String",Description:"Ancestral allele"},AC:{Number:"A",Type:"Integer",Description:"Allele count in genotypes, for each ALT allele, in the same order as listed"},AD:{Number:"R",Type:"Integer",Description:"Total read depth for each allele"},ADF:{Number:"R",Type:"Integer",Description:"Read depth for each allele on the forward strand"},ADR:{Number:"R",Type:"Integer",Description:"Read depth for each allele on the reverse strand"},AF:{Number:"A",Type:"Float",Description:"Allele frequency for each ALT allele in the same order as listed (estimated from primary data, not called genotypes)"},AN:{Number:1,Type:"Integer",Description:"Total number of alleles in called genotypes"},BQ:{Number:1,Type:"Float",Description:"RMS base quality"},CIGAR:{Number:1,Type:"Float",Description:"Cigar string describing how to align an alternate allele to the reference allele"},DB:{Number:0,Type:"Flag",Description:"dbSNP membership"},DP:{Number:1,Type:"Integer",Description:"combined depth across samples"},END:{Number:1,Type:"Integer",Description:"End position (for use with symbolic alleles)"},H2:{Number:0,Type:"Flag",Description:"HapMap2 membership"},H3:{Number:0,Type:"Flag",Description:"HapMap3 membership"},MQ:{Number:1,Type:null,Description:"RMS mapping quality"},MQ0:{Number:1,Type:"Integer",Description:"Number of MAPQ == 0 reads"},NS:{Number:1,Type:"Integer",Description:"Number of samples with data"},SB:{Number:4,Type:"Integer",Description:"Strand bias"},SOMATIC:{Number:0,Type:"Flag",Description:"Somatic mutation (for cancer genomics)"},VALIDATED:{Number:0,Type:"Flag",Description:"Validated by follow-up experiment"},"1000G":{Number:0,Type:"Flag",Description:"1000 Genomes membership"},IMPRECISE:{Number:0,Type:"Flag",Description:"Imprecise structural variation"},NOVEL:{Number:0,Type:"Flag",Description:"Indicates a novel structural variation"},SVTYPE:{Number:1,Type:"String",Description:"Type of structural variant"},SVLEN:{Number:null,Type:"Integer",Description:"Difference in length between REF and ALT alleles"},CIPOS:{Number:2,Type:"Integer",Description:"Confidence interval around POS for imprecise variants"},CIEND:{Number:2,Type:"Integer",Description:"Confidence interval around END for imprecise variants"},HOMLEN:{Type:"Integer",Description:"Length of base pair identical micro-homology at event breakpoints"},HOMSEQ:{Type:"String",Description:"Sequence of base pair identical micro-homology at event breakpoints"},BKPTID:{Type:"String",Description:"ID of the assembled alternate allele in the assembly file"},MEINFO:{Number:4,Type:"String",Description:"Mobile element info of the form NAME,START,END,POLARITY"},METRANS:{Number:4,Type:"String",Description:"Mobile element transduction info of the form CHR,START,END,POLARITY"},DGVID:{Number:1,Type:"String",Description:"ID of this element in Database of Genomic Variation"},DBVARID:{Number:1,Type:"String",Description:"ID of this element in DBVAR"},DBRIPID:{Number:1,Type:"String",Description:"ID of this element in DBRIP"},MATEID:{Number:null,Type:"String",Description:"ID of mate breakends"},PARID:{Number:1,Type:"String",Description:"ID of partner breakend"},EVENT:{Number:1,Type:"String",Description:"ID of event associated to breakend"},CILEN:{Number:2,Type:"Integer",Description:"Confidence interval around the inserted material between breakend"},DPADJ:{Type:"Integer",Description:"Read Depth of adjacency"},CN:{Number:1,Type:"Integer",Description:"Copy number of segment containing breakend"},CNADJ:{Number:null,Type:"Integer",Description:"Copy number of adjacency"},CICN:{Number:2,Type:"Integer",Description:"Confidence interval around copy number for the segment"},CICNADJ:{Number:null,Type:"Integer",Description:"Confidence interval around copy number for the adjacency"}},GenotypeFields:{AD:{Number:"R",Type:"Integer",Description:"Read depth for each allele"},ADF:{Number:"R",Type:"Integer",Description:"Read depth for each allele on the forward strand"},ADR:{Number:"R",Type:"Integer",Description:"Read depth for each allele on the reverse strand"},DP:{Number:1,Type:"Integer",Description:"Read depth"},EC:{Number:"A",Type:"Integer",Description:"Expected alternate allele counts"},FT:{Number:1,Type:"String",Description:'Filter indicating if this genotype was "called"'},GL:{Number:"G",Type:"Float",Description:"Genotype likelihoods"},GP:{Number:"G",Type:"Float",Description:"Genotype posterior probabilities"},GQ:{Number:1,Type:"Integer",Description:"Conditional genotype quality"},GT:{Number:1,Type:"String",Description:"Genotype"},HQ:{Number:2,Type:"Integer",Description:"Haplotype quality"},MQ:{Number:1,Type:"Integer",Description:"RMS mapping quality"},PL:{Number:"G",Type:"Integer",Description:"Phred-scaled genotype likelihoods rounded to the closest integer"},PQ:{Number:1,Type:"Integer",Description:"Phasing quality"},PS:{Number:1,Type:"Integer",Description:"Phase set"}},AltTypes:{DEL:{Description:"Deletion relative to the reference"},INS:{Description:"Insertion of novel sequence relative to the reference"},DUP:{Description:"Region of elevated copy number relative to the reference"},INV:{Description:"Inversion of reference sequence"},CNV:{Description:"Copy number variable region (may be both deletion and duplication)"},"DUP:TANDEM":{Description:"Tandem duplication"},"DEL:ME":{Description:"Deletion of mobile element relative to the reference"},"INS:ME":{Description:"Insertion of a mobile element relative to the reference"},NON_REF:{Description:"Represents any possible alternative allele at this location"},"*":{Description:"Represents any possible alternative allele at this location"}},FilterTypes:{PASS:{Description:"Passed all filters"}}}}}]);
//# sourceMappingURL=21.83444694.chunk.js.map