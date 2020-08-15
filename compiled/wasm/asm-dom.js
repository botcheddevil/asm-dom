
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(Module) {
  Module = Module || {};

var d;d||(d=typeof Module !== 'undefined' ? Module : {});var m={},q;for(q in d)d.hasOwnProperty(q)&&(m[q]=d[q]);d.arguments=[];d.thisProgram="./this.program";d.quit=function(a,b){throw b;};d.preRun=[];d.postRun=[];var aa="",ba,ca;aa=__dirname+"/";var da,ea;ba=function(a){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);return da.readFileSync(a)};ca=function(a){a=ba(a);a.buffer||(a=new Uint8Array(a));a.buffer||r("Assertion failed: undefined");return a};
1<process.argv.length&&(d.thisProgram=process.argv[1].replace(/\\/g,"/"));d.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof t))throw a;});process.on("unhandledRejection",r);d.quit=function(a){process.exit(a)};d.inspect=function(){return"[Emscripten Module object]"};
var fa=d.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),u=d.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(q in m)m.hasOwnProperty(q)&&(d[q]=m[q]);m=void 0;var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},ia=0;"object"!==typeof WebAssembly&&u("no native wasm support detected");
var w,ja=!1,ka="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function la(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&ka)return ka.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}function ma(a,b){return a?la(x,a,b):""}
function na(a,b,c,e){if(0<e){e=c+e-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(c>=e)break;b[c++]=g}else{if(2047>=g){if(c+1>=e)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=e)break;b[c++]=224|g>>12}else{if(c+3>=e)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function oa(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function pa(a){var b=oa(a)+1,c=qa(b);na(a,y,c,b);return c}function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,y,x,sa,ta,z,A,ua,va;
function wa(){d.HEAP8=y=new Int8Array(buffer);d.HEAP16=sa=new Int16Array(buffer);d.HEAP32=z=new Int32Array(buffer);d.HEAPU8=x=new Uint8Array(buffer);d.HEAPU16=ta=new Uint16Array(buffer);d.HEAPU32=A=new Uint32Array(buffer);d.HEAPF32=ua=new Float32Array(buffer);d.HEAPF64=va=new Float64Array(buffer)}var xa=d.TOTAL_MEMORY||16777216;5242880>xa&&u("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+xa+"! (TOTAL_STACK=5242880)");d.wasmMemory?w=d.wasmMemory:w=new WebAssembly.Memory({initial:xa/65536});
w&&(buffer=w.buffer);xa=buffer.byteLength;wa();z[3712]=5257760;function ya(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Qa;"number"===typeof c?void 0===b.Ia?d.dynCall_v(c):d.dynCall_vi(c,b.Ia):c(void 0===b.Ia?null:b.Ia)}}}var za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=d.preRun.shift();za.unshift(a)}var B=0,Ea=null,C=null;d.preloadedImages={};d.preloadedAudios={};
function Fa(){var a=D;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var D="asm-dom.wasm";if(!Fa()){var Ga=D;D=d.locateFile?d.locateFile(Ga,aa):aa+Ga}function Ha(){return new Promise(function(a){a:{try{if(d.wasmBinary){var b=new Uint8Array(d.wasmBinary);break a}if(ca){b=ca(D);break a}throw"both async and sync fetching of the wasm failed";}catch(c){r(c)}b=void 0}a(b)})}
function Ia(a){function b(a){d.asm=a.exports;B--;d.monitorRunDependencies&&d.monitorRunDependencies(B);0==B&&(null!==Ea&&(clearInterval(Ea),Ea=null),C&&(a=C,C=null,a()))}function c(a){b(a.instance)}function e(a){return Ha().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){u("failed to asynchronously prepare wasm: "+a);r(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};B++;d.monitorRunDependencies&&d.monitorRunDependencies(B);if(d.instantiateWasm)try{return d.instantiateWasm(f,
b)}catch(g){return u("Module.instantiateWasm callback failed with error: "+g),!1}(function(){if(d.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch)return e(c);fetch(D,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,f).then(c,function(a){u("wasm streaming compile failed: "+a);u("falling back to ArrayBuffer instantiation");e(c)})})})();return{}}
d.asm=function(a,b){b.memory=w;b.table=new WebAssembly.Table({initial:174,maximum:174,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ia(b)};
var Ja=[function(a,b){d.removeAttribute(a,d.UTF8ToString(b))},function(a,b,c){d.setAttribute(a,d.UTF8ToString(b),d.UTF8ToString(c))},function(a,b){return 0===b?d.createElement(d.UTF8ToString(a)):d.createElementNS(d.UTF8ToString(b),d.UTF8ToString(a))},function(a){return d.createTextNode(d.UTF8ToString(a))},function(){return d.createDocumentFragment()},function(a){return d.createComment(d.UTF8ToString(a))},function(a,b){d.appendChild(a,b)},function(a,b,c){d.diff(a,b,c)},function(a,b,c){d.insertBefore(a,
b,d.nextSibling(c))},function(a,b,c){d.insertBefore(a,b,c)},function(a,b,c){d.insertBefore(a,b,c)},function(a,b){d.removeChild(a);a=d.vnodesData[b];void 0!==a&&void 0!==a.ref&&a.ref(null)},function(a,b){d.$a(a,d.UTF8ToString(b))},function(a,b){var c=d.parentNode(b);0!==c&&(d.insertBefore(c,a,d.nextSibling(b)),d.removeChild(b))},function(){function a(a){if(null===a)return 0;if(void 0!==a.asmDomPtr)return a.asmDomPtr;c[++e]=a;return a.asmDomPtr=e}d.eventProxy=function(a){return this.asmDomEvents[a.type](a)};
var b=d.recycler={nodes:{}};b.create=function(a){var c=b.nodes[a.toUpperCase()];return void 0!==c&&c.pop()||document.createElement(a)};b.createNS=function(a,c){var f=b.nodes[a.toUpperCase()+c];a=void 0!==f&&f.pop()||document.createElementNS(c,a);a.asmDomNS=c;return a};b.createText=function(a){var c=b.nodes["#TEXT"];return void 0!==c&&(c=c.pop(),void 0!==c)?(c.nodeValue=a,c):document.createTextNode(a)};b.createComment=function(a){var c=b.nodes["#COMMENT"];return void 0!==c&&(c=c.pop(),void 0!==c)?
(c.nodeValue=a,c):document.createComment(a)};b.collect=function(a){for(var c;c=a.lastChild;)a.removeChild(c),b.collect(c);for(c=void 0!==a.attributes?a.attributes.length:0;c--;)a.removeAttribute(a.attributes[c].name);a.asmDomVNode=void 0;void 0!==a.asmDomRaws&&(a.asmDomRaws.forEach(function(b){a[b]=void 0}),a.asmDomRaws=void 0);void 0!==a.asmDomEvents&&(Object.keys(a.asmDomEvents).forEach(function(b){a.removeEventListener(b,a.asmDomEvents[b],!1)}),a.asmDomEvents=void 0);null!==a.nodeValue&&""!==a.nodeValue&&
(a.nodeValue="");Object.keys(a).forEach(function(b){if("a"!==b[0]||"s"!==b[1]||"m"!==b[2]||"D"!==b[3]||"o"!==b[4]||"m"!==b[5])a[b]=void 0});c=a.nodeName.toUpperCase();void 0!==a.asmDomNS&&(c+=a.namespaceURI);var e=b.nodes[c];void 0!==e?e.push(a):b.nodes[c]=[a]};var c=d.nodes={0:null},e=0;d.addNode=function(b){a(b.parentNode);a(b.nextSibling);return a(b)};d.createElement=function(c){return a(b.create(c))};d.createElementNS=function(c,e){return a(b.createNS(e,c))};d.createTextNode=function(c){return a(b.createText(c))};
d.createComment=function(c){return a(b.createComment(c))};d.createDocumentFragment=function(){return a(document.createDocumentFragment())};d.insertBefore=function(a,b,e){c[a].insertBefore(c[b],c[e])};d.removeChild=function(a){a=c[a];if(null!==a&&void 0!==a){var e=a.parentNode;null!==e&&e.removeChild(a);b.collect(a)}};d.appendChild=function(a,b){c[a].appendChild(c[b])};d.removeAttribute=function(a,b){c[a].removeAttribute(b)};d.setAttribute=function(a,b,e){120!==b.charCodeAt(0)?c[a].setAttribute(b,
e):58===b.charCodeAt(3)?c[a].setAttributeNS("http://www.w3.org/XML/1998/namespace",b,e):58===b.charCodeAt(5)?c[a].setAttributeNS("http://www.w3.org/1999/xlink",b,e):c[a].setAttribute(b,e)};d.parentNode=function(a){a=c[a];return null!==a&&void 0!==a&&null!==a.parentNode?a.parentNode.asmDomPtr:0};d.nextSibling=function(a){a=c[a];return null!==a&&void 0!==a&&null!==a.nextSibling?a.nextSibling.asmDomPtr:0};d.$a=function(a,b){c[a].nodeValue=b}}];Aa.push({Qa:function(){Ka()}});
function La(a){d.___errno_location&&(z[d.___errno_location()>>2]=a);return a}var Ma=[null,[],[]],E=0;function F(){E+=4;return z[E-4>>2]}var H={};function Na(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Pa=void 0;function I(a){for(var b="";x[a];)b+=Pa[x[a++]];return b}var J={},K={},Qa={};
function Ra(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Sa(a,b){a=Ra(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ta(a){var b=Error,c=Sa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var L=void 0;function M(a){throw new L(a);}var Ua=void 0;function Va(a){throw new Ua(a);}
function N(a,b,c){function e(b){b=c(b);b.length!==a.length&&Va("Mismatched type converter count");for(var e=0;e<a.length;++e)O(a[e],b[e])}a.forEach(function(a){Qa[a]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(a,b){K.hasOwnProperty(a)?f[b]=K[a]:(g.push(a),J.hasOwnProperty(a)||(J[a]=[]),J[a].push(function(){f[b]=K[a];++h;h===g.length&&e(f)}))});0===g.length&&e(f)}
function O(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||M('type "'+e+'" must have a positive integer typeid pointer');if(K.hasOwnProperty(a)){if(c.Ua)return;M("Cannot register type '"+e+"' twice")}K[a]=b;delete Qa[a];J.hasOwnProperty(a)&&(b=J[a],delete J[a],b.forEach(function(a){a()}))}function Wa(a){return{count:a.count,Aa:a.Aa,Da:a.Da,ra:a.ra,sa:a.sa,ua:a.ua,va:a.va}}
function Xa(a){M(a.pa.sa.qa.name+" instance already deleted")}var Ya=!1;function Za(){}function $a(a){--a.count.value;0===a.count.value&&(a.ua?a.va.za(a.ua):a.sa.qa.za(a.ra))}
function P(a){if("undefined"===typeof FinalizationGroup)return P=function(a){return a},a;Ya=new FinalizationGroup(function(a){for(var b=a.next();!b.done;b=a.next())b=b.value,b.ra?$a(b):console.warn("object already deleted: "+b.ra)});P=function(a){Ya.register(a,a.pa,a.pa);return a};Za=function(a){Ya.unregister(a.pa)};return P(a)}var Q=void 0,R=[];function ab(){for(;R.length;){var a=R.pop();a.pa.Aa=!1;a["delete"]()}}function S(){}var bb={};
function cb(a,b,c){if(void 0===a[b].ta){var e=a[b];a[b]=function(){a[b].ta.hasOwnProperty(arguments.length)||M("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].ta+")!");return a[b].ta[arguments.length].apply(this,arguments)};a[b].ta=[];a[b].ta[e.Fa]=e}}
function db(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].ta&&void 0!==d[a].ta[c])&&M("Cannot register public name '"+a+"' twice"),cb(d,a,a),d.hasOwnProperty(c)&&M("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].ta[c]=b):(d[a]=b,void 0!==c&&(d[a].jb=c))}function eb(a,b,c,e,f,g,h,k){this.name=a;this.constructor=b;this.Ba=c;this.za=e;this.wa=f;this.Ra=g;this.Ea=h;this.Pa=k;this.Xa=[]}
function fb(a,b,c){for(;b!==c;)b.Ea||M("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.Ea(a),b=b.wa;return a}function gb(a,b){if(null===b)return this.Ka&&M("null is not a valid "+this.name),0;b.pa||M('Cannot pass "'+T(b)+'" as a '+this.name);b.pa.ra||M("Cannot pass deleted object as a pointer of type "+this.name);return fb(b.pa.ra,b.pa.sa.qa,this.qa)}
function hb(a,b){if(null===b){this.Ka&&M("null is not a valid "+this.name);if(this.Ha){var c=this.Ya();null!==a&&a.push(this.za,c);return c}return 0}b.pa||M('Cannot pass "'+T(b)+'" as a '+this.name);b.pa.ra||M("Cannot pass deleted object as a pointer of type "+this.name);!this.Ga&&b.pa.sa.Ga&&M("Cannot convert argument of type "+(b.pa.va?b.pa.va.name:b.pa.sa.name)+" to parameter type "+this.name);c=fb(b.pa.ra,b.pa.sa.qa,this.qa);if(this.Ha)switch(void 0===b.pa.ua&&M("Passing raw pointer to smart pointer is illegal"),
this.ab){case 0:b.pa.va===this?c=b.pa.ua:M("Cannot convert argument of type "+(b.pa.va?b.pa.va.name:b.pa.sa.name)+" to parameter type "+this.name);break;case 1:c=b.pa.ua;break;case 2:if(b.pa.va===this)c=b.pa.ua;else{var e=b.clone();c=this.Za(c,U(function(){e["delete"]()}));null!==a&&a.push(this.za,c)}break;default:M("Unsupporting sharing policy")}return c}
function ib(a,b){if(null===b)return this.Ka&&M("null is not a valid "+this.name),0;b.pa||M('Cannot pass "'+T(b)+'" as a '+this.name);b.pa.ra||M("Cannot pass deleted object as a pointer of type "+this.name);b.pa.sa.Ga&&M("Cannot convert argument of type "+b.pa.sa.name+" to parameter type "+this.name);return fb(b.pa.ra,b.pa.sa.qa,this.qa)}function jb(a){return this.fromWireType(A[a>>2])}function kb(a,b,c){if(b===c)return a;if(void 0===c.wa)return null;a=kb(a,b,c.wa);return null===a?null:c.Pa(a)}
var V={};function lb(a,b){for(void 0===b&&M("ptr should not be undefined");a.wa;)b=a.Ea(b),a=a.wa;return V[b]}function mb(a,b){b.sa&&b.ra||Va("makeClassHandle requires ptr and ptrType");!!b.va!==!!b.ua&&Va("Both smartPtrType and smartPtr must be specified");b.count={value:1};return P(Object.create(a,{pa:{value:b}}))}
function W(a,b,c,e){this.name=a;this.qa=b;this.Ka=c;this.Ga=e;this.Ha=!1;this.za=this.Za=this.Ya=this.Na=this.ab=this.Wa=void 0;void 0!==b.wa?this.toWireType=hb:(this.toWireType=e?gb:ib,this.xa=null)}function nb(a,b,c){d.hasOwnProperty(a)||Va("Replacing nonexistant public symbol");void 0!==d[a].ta&&void 0!==c?d[a].ta[c]=b:(d[a]=b,d[a].Fa=c)}
function X(a,b){a=I(a);if(void 0!==d["FUNCTION_TABLE_"+a])var c=d["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=d["dynCall_"+a];void 0===c&&(c=d["dynCall_"+a.replace(/f/g,"d")],void 0===c&&M("No dynCall invoker for signature: "+a));for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
f+"};\n"))(c,b)}"function"!==typeof c&&M("unknown function pointer with signature "+a+": "+b);return c}var ob=void 0;function pb(a){a=qb(a);var b=I(a);Y(a);return b}function rb(a,b){function c(a){f[a]||K[a]||(Qa[a]?Qa[a].forEach(c):(e.push(a),f[a]=!0))}var e=[],f={};b.forEach(c);throw new ob(a+": "+e.map(pb).join([", "]));}function sb(a,b){for(var c=[],e=0;e<a;e++)c.push(z[(b>>2)+e]);return c}function tb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}
function ub(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Sa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function vb(a,b,c,e,f){var g=b.length;2>g&&M("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==b[1]&&null!==c,k=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].xa){k=!0;break}var p="void"!==b[0].name,l="",n="";for(c=0;c<g-2;++c)l+=(0!==c?", ":"")+"arg"+c,n+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Ra(a)+"("+l+") {\nif (arguments.length !== "+(g-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(g-2)+" args!');\n}\n";k&&(a+="var destructors = [];\n");var v=k?"destructors":"null";l="throwBindingError invoker fn runDestructors retType classParam".split(" ");e=[M,e,f,tb,b[0],b[1]];h&&(a+="var thisWired = classParam.toWireType("+v+", this);\n");for(c=0;c<g-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+v+", arg"+c+"); // "+b[c+2].name+"\n",l.push("argType"+c),e.push(b[c+2]);h&&(n="thisWired"+(0<n.length?", ":"")+n);a+=(p?"var rv = ":"")+"invoker(fn"+(0<n.length?", ":"")+n+");\n";if(k)a+=
"runDestructors(destructors);\n";else for(c=h?1:2;c<b.length;++c)g=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].xa&&(a+=g+"_dtor("+g+"); // "+b[c].name+"\n",l.push(g+"_dtor"),e.push(b[c].xa));p&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");l.push(a+"}\n");return ub(l).apply(null,e)}var wb=[],Z=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function xb(a){4<a&&0===--Z[a].La&&(Z[a]=void 0,wb.push(a))}
function U(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=wb.length?wb.pop():Z.length;Z[b]={La:1,value:a};return b}}function T(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function yb(a,b){switch(b){case 2:return function(a){return this.fromWireType(ua[a>>2])};case 3:return function(a){return this.fromWireType(va[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function zb(a,b,c){switch(b){case 0:return c?function(a){return y[a]}:function(a){return x[a]};case 1:return c?function(a){return sa[a>>1]}:function(a){return ta[a>>1]};case 2:return c?function(a){return z[a>>2]}:function(a){return A[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function Ab(a){a||M("Cannot use deleted val. handle = "+a);return Z[a].value}function Bb(a,b){var c=K[a];void 0===c&&M(b+" has unknown type "+pb(a));return c}var Cb={};
function Db(a){var b=Cb[a];return void 0===b?I(a):b}function Eb(){return y.length}var Fb={};function Gb(a){if(0===a)return 0;a=ma(a);if(!Fb.hasOwnProperty(a))return 0;Gb.Ca&&Y(Gb.Ca);a=Fb[a];var b=oa(a)+1,c=Hb(b);c&&na(a,y,c,b);Gb.Ca=c;return Gb.Ca}function Ib(a){a=ra(a);var b=buffer.byteLength;try{return-1!==w.grow((a-b)/65536)?(buffer=w.buffer,!0):!1}catch(c){return!1}}for(var Jb=Array(256),Kb=0;256>Kb;++Kb)Jb[Kb]=String.fromCharCode(Kb);Pa=Jb;L=d.BindingError=Ta("BindingError");
Ua=d.InternalError=Ta("InternalError");S.prototype.isAliasOf=function(a){if(!(this instanceof S&&a instanceof S))return!1;var b=this.pa.sa.qa,c=this.pa.ra,e=a.pa.sa.qa;for(a=a.pa.ra;b.wa;)c=b.Ea(c),b=b.wa;for(;e.wa;)a=e.Ea(a),e=e.wa;return b===e&&c===a};S.prototype.clone=function(){this.pa.ra||Xa(this);if(this.pa.Da)return this.pa.count.value+=1,this;var a=P(Object.create(Object.getPrototypeOf(this),{pa:{value:Wa(this.pa)}}));a.pa.count.value+=1;a.pa.Aa=!1;return a};
S.prototype["delete"]=function(){this.pa.ra||Xa(this);this.pa.Aa&&!this.pa.Da&&M("Object already scheduled for deletion");Za(this);$a(this.pa);this.pa.Da||(this.pa.ua=void 0,this.pa.ra=void 0)};S.prototype.isDeleted=function(){return!this.pa.ra};S.prototype.deleteLater=function(){this.pa.ra||Xa(this);this.pa.Aa&&!this.pa.Da&&M("Object already scheduled for deletion");R.push(this);1===R.length&&Q&&Q(ab);this.pa.Aa=!0;return this};W.prototype.Sa=function(a){this.Na&&(a=this.Na(a));return a};
W.prototype.Ma=function(a){this.za&&this.za(a)};W.prototype.argPackAdvance=8;W.prototype.readValueFromPointer=jb;W.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
W.prototype.fromWireType=function(a){function b(){return this.Ha?mb(this.qa.Ba,{sa:this.Wa,ra:c,va:this,ua:a}):mb(this.qa.Ba,{sa:this,ra:a})}var c=this.Sa(a);if(!c)return this.Ma(a),null;var e=lb(this.qa,c);if(void 0!==e){if(0===e.pa.count.value)return e.pa.ra=c,e.pa.ua=a,e.clone();e=e.clone();this.Ma(a);return e}e=this.qa.Ra(c);e=bb[e];if(!e)return b.call(this);e=this.Ga?e.Oa:e.pointerType;var f=kb(c,this.qa,e.qa);return null===f?b.call(this):this.Ha?mb(e.qa.Ba,{sa:e,ra:f,va:this,ua:a}):mb(e.qa.Ba,
{sa:e,ra:f})};d.getInheritedInstanceCount=function(){return Object.keys(V).length};d.getLiveInheritedInstances=function(){var a=[],b;for(b in V)V.hasOwnProperty(b)&&a.push(V[b]);return a};d.flushPendingDeletes=ab;d.setDelayFunction=function(a){Q=a;R.length&&Q&&Q(ab)};ob=d.UnboundTypeError=Ta("UnboundTypeError");d.count_emval_handles=function(){for(var a=0,b=5;b<Z.length;++b)void 0!==Z[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<Z.length;++a)if(void 0!==Z[a])return Z[a];return null};
var Mb=d.asm({},{i:r,g:function(a){ia=a},e:function(){return ia},n:function(a){return Hb(a)},m:function(a){"uncaught_exception"in Lb?Lb.Ca++:Lb.Ca=1;throw a;},K:function(){return Lb.Ca},J:function(){},I:function(){La(1);return-1},y:La,H:function(a,b){E=b;try{return H.Ta(),F(),F(),F(),F(),0}catch(c){return r(c),-c.Ja}},G:function(a,b){E=b;try{var c=F(),e=F(),f=F();for(b=a=0;b<f;b++){for(var g=z[e+8*b>>2],h=z[e+(8*b+4)>>2],k=0;k<h;k++){var p=x[g+k],l=Ma[c];0===p||10===p?((1===c?fa:u)(la(l,0)),l.length=
0):l.push(p)}a+=h}return a}catch(n){return r(n),-n.Ja}},U:function(a,b){E=b;try{return H.Ta(),0}catch(c){return r(c),-c.Ja}},T:function(a,b){E=b;try{var c=F();var e=F();if(-1===c||0===e)var f=-22;else{var g=H.Va[c];if(g&&e===g.gb){var h=(void 0).eb(g.fd);H.cb(c,h,e,g.flags);(void 0).ib(h);H.Va[c]=null;g.bb&&Y(g.hb)}f=0}return f}catch(k){return r(k),-k.Ja}},F:function(){},S:function(a,b,c,e,f){var g=Na(c);b=I(b);O(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:f},
argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var e=y;else if(2===c)e=sa;else if(4===c)e=z;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>g])},xa:null})},E:function(a,b,c,e,f,g,h,k,p,l,n,v,Oa){n=I(n);g=X(f,g);k&&(k=X(h,k));l&&(l=X(p,l));Oa=X(v,Oa);var G=Ra(n);db(G,function(){rb("Cannot construct "+n+" due to unbound types",[e])});N([a,b,c],e?[e]:[],function(b){b=b[0];if(e){var c=b.qa;var f=c.Ba}else f=S.prototype;b=Sa(G,function(){if(Object.getPrototypeOf(this)!==
h)throw new L("Use 'new' to construct "+n);if(void 0===p.ya)throw new L(n+" has no accessible constructor");var a=p.ya[arguments.length];if(void 0===a)throw new L("Tried to invoke ctor of "+n+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(p.ya).toString()+") parameters instead!");return a.apply(this,arguments)});var h=Object.create(f,{constructor:{value:b}});b.prototype=h;var p=new eb(n,b,h,Oa,c,g,k,l);c=new W(n,p,!0,!1);f=new W(n+"*",p,!1,!1);var v=new W(n+" const*",
p,!1,!0);bb[a]={pointerType:f,Oa:v};nb(G,b);return[c,f,v]})},D:function(a,b,c,e,f,g){var h=sb(b,c);f=X(e,f);N([],[a],function(a){a=a[0];var c="constructor "+a.name;void 0===a.qa.ya&&(a.qa.ya=[]);if(void 0!==a.qa.ya[b-1])throw new L("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+a.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");a.qa.ya[b-1]=function(){rb("Cannot construct "+a.name+" due to unbound types",
h)};N([],h,function(e){a.qa.ya[b-1]=function(){arguments.length!==b-1&&M(c+" called with "+arguments.length+" arguments, expected "+(b-1));var a=[],h=Array(b);h[0]=g;for(var k=1;k<b;++k)h[k]=e[k].toWireType(a,arguments[k-1]);h=f.apply(null,h);tb(a);return e[0].fromWireType(h)};return[]});return[]})},q:function(a,b,c,e,f,g,h,k){var p=sb(c,e);b=I(b);g=X(f,g);N([],[a],function(a){function e(){rb("Cannot call "+f+" due to unbound types",p)}a=a[0];var f=a.name+"."+b;k&&a.qa.Xa.push(b);var l=a.qa.Ba,G=
l[b];void 0===G||void 0===G.ta&&G.className!==a.name&&G.Fa===c-2?(e.Fa=c-2,e.className=a.name,l[b]=e):(cb(l,b,f),l[b].ta[c-2]=e);N([],p,function(e){e=vb(f,e,a,g,h);void 0===l[b].ta?(e.Fa=c-2,l[b]=e):l[b].ta[c-2]=e;return[]});return[]})},R:function(a,b){b=I(b);O(a,{name:b,fromWireType:function(a){var b=Z[a].value;xb(a);return b},toWireType:function(a,b){return U(b)},argPackAdvance:8,readValueFromPointer:jb,xa:null})},C:function(a,b,c){c=Na(c);b=I(b);O(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,
b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+T(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:yb(b,c),xa:null})},h:function(a,b,c,e,f,g){var h=sb(b,c);a=I(a);f=X(e,f);db(a,function(){rb("Cannot call "+a+" due to unbound types",h)},b-1);N([],h,function(c){c=[c[0],null].concat(c.slice(1));nb(a,vb(a,c,null,f,g),b-1);return[]})},p:function(a,b,c,e,f){function g(a){return a}b=I(b);-1===f&&(f=4294967295);var h=Na(c);if(0===e){var k=32-8*c;
g=function(a){return a<<k>>>k}}var p=-1!=b.indexOf("unsigned");O(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+T(c)+'" to '+this.name);if(c<e||c>f)throw new TypeError('Passing a number "'+T(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+f+"]!");return p?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:zb(b,h,0!==e),xa:null})},k:function(a,b,c){function e(a){a>>=
2;var b=A;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=I(c);O(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{Ua:!0})},B:function(a,b){b=I(b);var c="std::string"===b;O(a,{name:b,fromWireType:function(a){var b=A[a>>2];if(c){var e=x[a+4+b],h=0;0!=e&&(h=e,x[a+4+b]=0);var k=a+4;for(e=0;e<=b;++e){var p=a+4+e;if(0==x[p]){k=ma(k);if(void 0===l)var l=k;else l+=String.fromCharCode(0),l+=k;k=p+
1}}0!=h&&(x[a+4+b]=h)}else{l=Array(b);for(e=0;e<b;++e)l[e]=String.fromCharCode(x[a+4+e]);l=l.join("")}Y(a);return l},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var e="string"===typeof b;e||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||M("Cannot pass non-string to std::string");var f=(c&&e?function(){return oa(b)}:function(){return b.length})(),k=Hb(4+f+1);A[k>>2]=f;if(c&&e)na(b,x,k+4,f+1);else if(e)for(e=0;e<f;++e){var p=b.charCodeAt(e);
255<p&&(Y(k),M("String has UTF-16 code units that do not fit in 8 bits"));x[k+4+e]=p}else for(e=0;e<f;++e)x[k+4+e]=b[e];null!==a&&a.push(Y,k);return k},argPackAdvance:8,readValueFromPointer:jb,xa:function(a){Y(a)}})},Q:function(a,b,c){c=I(c);if(2===b){var e=function(){return ta};var f=1}else 4===b&&(e=function(){return A},f=2);O(a,{name:c,fromWireType:function(a){for(var b=e(),c=A[a>>2],g=Array(c),l=a+4>>f,n=0;n<c;++n)g[n]=String.fromCharCode(b[l+n]);Y(a);return g.join("")},toWireType:function(a,
c){var g=e(),h=c.length,l=Hb(4+h*b);A[l>>2]=h;for(var n=l+4>>f,v=0;v<h;++v)g[n+v]=c.charCodeAt(v);null!==a&&a.push(Y,l);return l},argPackAdvance:8,readValueFromPointer:jb,xa:function(a){Y(a)}})},P:function(a,b){b=I(b);O(a,{fb:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},s:function(a,b,c){a=Ab(a);b=Bb(b,"emval::as");var e=[],f=U(e);z[c>>2]=f;return b.toWireType(e,a)},x:function(a,b,c,e){a=Ab(a);for(var f=Array(b),g=0;g<b;++g)f[g]=Bb(z[(c>>2)+g],"parameter "+g);c=
Array(b);for(g=0;g<b;++g){var h=f[g];c[g]=h.readValueFromPointer(e);e+=h.argPackAdvance}a=a.apply(void 0,c);return U(a)},c:xb,w:function(a){a=Db(a);return U(d[a])},f:function(a,b){a=Ab(a);b=Ab(b);return U(a[b])},v:function(a){4<a&&(Z[a].La+=1)},j:function(a){return U(Db(a))},o:function(a){tb(Z[a].value);xb(a)},t:function(a,b){a=Bb(a,"_emval_take_value");a=a.readValueFromPointer(b);return U(a)},d:function(){d.abort()},A:function(a){return Ja[a]()},z:function(a,b){return Ja[a](b)},r:function(a,b,c){return Ja[a](b,
c)},l:function(a,b,c,e){return Ja[a](b,c,e)},O:Eb,N:function(a,b,c){x.set(x.subarray(b,b+c),a)},M:function(a){if(2147418112<a)return!1;for(var b=Math.max(Eb(),16777216);b<a;)536870912>=b?b=ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);if(!Ib(b))return!1;wa();return!0},u:Gb,L:function(){r("OOM")},a:14864,b:14848},buffer);d.asm=Mb;var Lb=d.__ZSt18uncaught_exceptionv=function(){return d.asm.V.apply(null,arguments)};
d.___embind_register_native_and_builtin_types=function(){return d.asm.W.apply(null,arguments)};var qb=d.___getTypeName=function(){return d.asm.X.apply(null,arguments)},Y=d._free=function(){return d.asm.Y.apply(null,arguments)};d._main=function(){return d.asm.Z.apply(null,arguments)};var Hb=d._malloc=function(){return d.asm._.apply(null,arguments)},Ka=d.globalCtors=function(){return d.asm.na.apply(null,arguments)},qa=d.stackAlloc=function(){return d.asm.oa.apply(null,arguments)};
d.dynCall_i=function(){return d.asm.$.apply(null,arguments)};d.dynCall_ii=function(){return d.asm.aa.apply(null,arguments)};d.dynCall_iii=function(){return d.asm.ba.apply(null,arguments)};d.dynCall_iiii=function(){return d.asm.ca.apply(null,arguments)};d.dynCall_iiiii=function(){return d.asm.da.apply(null,arguments)};d.dynCall_iiiiii=function(){return d.asm.ea.apply(null,arguments)};d.dynCall_iiiiiiiii=function(){return d.asm.fa.apply(null,arguments)};
d.dynCall_v=function(){return d.asm.ga.apply(null,arguments)};d.dynCall_vi=function(){return d.asm.ha.apply(null,arguments)};d.dynCall_vii=function(){return d.asm.ia.apply(null,arguments)};d.dynCall_viii=function(){return d.asm.ja.apply(null,arguments)};d.dynCall_viiii=function(){return d.asm.ka.apply(null,arguments)};d.dynCall_viiiii=function(){return d.asm.la.apply(null,arguments)};d.dynCall_viiiiii=function(){return d.asm.ma.apply(null,arguments)};d.asm=Mb;d.UTF8ToString=ma;
d.then=function(a){if(d.calledRun)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}t.prototype=Error();t.prototype.constructor=t;C=function Nb(){d.calledRun||Ob();d.calledRun||(C=Nb)};
d.callMain=function(a){a=a||[];var b=a.length+1,c=qa(4*(b+1));z[c>>2]=pa(d.thisProgram);for(var e=1;e<b;e++)z[(c>>2)+e]=pa(a[e-1]);z[(c>>2)+b]=0;try{var f=d._main(b,c);if(!d.noExitRuntime||0!==f){if(!d.noExitRuntime&&(ja=!0,d.onExit))d.onExit(f);d.quit(f,new t(f))}}catch(g){g instanceof t||("SimulateInfiniteLoop"==g?d.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),u("exception thrown: "+a),d.quit(1,g)))}finally{}};
function Ob(a){function b(){if(!d.calledRun&&(d.calledRun=!0,!ja)){ya(Aa);ya(Ba);if(d.onRuntimeInitialized)d.onRuntimeInitialized();d._main&&Pb&&d.callMain(a);if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var b=d.postRun.shift();Ca.unshift(b)}ya(Ca)}}a=a||d.arguments;if(!(0<B)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Da();ya(za);0<B||d.calledRun||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},
1);b()},1)):b())}}d.run=Ob;function r(a){if(d.onAbort)d.onAbort(a);fa(a);u(a);ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}d.abort=r;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();var Pb=!0;d.noInitialRun&&(Pb=!1);d.noExitRuntime=!0;Ob();


  return Module
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = Module;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return Module; });
    else if (typeof exports === 'object')
      exports["Module"] = Module;
    