(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis","chunk-4e410830"],{"13f0":function(t,e,n){"use strict";n("450b")},"159b":function(t,e,n){var r=n("da84"),s=n("fdbc"),a=n("17c2"),i=n("9112");for(var o in s){var c=r[o],u=c&&c.prototype;if(u&&u.forEach!==a)try{i(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,s=n("a640"),a=s("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1fb6":function(t,e,n){},"3cd8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo"}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[n("h3",{domProps:{innerHTML:t._s(t.titulo)}}),n("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},s=[],a={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=a,o=(n("8385"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,null,null);e["default"]=c.exports},"438b":function(t,e,n){"use strict";n("1fb6")},"450b":function(t,e,n){},"52e5":function(t,e,n){t.exports=n.p+"img/cc.58a75e32.svg"},"5a31":function(t,e,n){t.exports=n.p+"img/sintesis-test.6fc94423.png"},"65f0":function(t,e,n){var r=n("861d"),s=n("e8b5"),a=n("b622"),i=a("species");t.exports=function(t,e){var n;return s(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"79ad":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{titulo:"UNIDAD 1. FUNDAMENTOS DEL DIBUJO TÉCNICO",subTitulo:"SÍNTESIS"}}),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[r("p",{staticClass:"mb-4 mb-md-5"},[t._v("Esta unidad presenta los conceptos básicos del dibujo técnico, una herramienta fundamental para comunicar y documentar proyectos en ingeniería y diseño. Se exploran elementos esenciales como tipos de líneas, proyecciones, escalas y normas internacionales (ISO, ANSI, DIN) que garantizan precisión y coherencia en la representación gráfica de objetos y sistemas.")]),r("figure",[r("img",{attrs:{src:n("5a31"),alt:"Texto que describa la imagen"}})])])}],a=(n("d3b7"),n("159b"),n("3cd8")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[t.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[t._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[t._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[t._v(" Base v"+t._s(t.versiones.base)+" - Paquete v"+t._s(t.versiones.pkg))])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-auto mb-2 mb-sm-0"},[r("img",{attrs:{src:n("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},u=c,l=(n("13f0"),n("2877")),f=Object(l["a"])(u,i,o,!1,null,null,null),d=f.exports,p={name:"Creditos",components:{BannerInterno:a["default"],Footer:d},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,n){e+=(n?"<br/>":"")+t})):e+=t,e}}},b=p,m=(n("438b"),Object(l["a"])(b,r,s,!1,null,null,null));e["default"]=m.exports},8385:function(t,e,n){"use strict";n("d36b")},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var r=n("0366"),s=n("44ad"),a=n("7b0b"),i=n("50c4"),o=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=7==t,p=5==t||f;return function(b,m,v,E){for(var h,g,y=a(b),C=s(y),I=r(m,v,3),S=i(C.length),_=0,O=E||o,T=e?O(b,S):n||d?O(b,0):void 0;S>_;_++)if((p||_ in C)&&(h=C[_],g=I(h,_,y),t))if(e)T[_]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return _;case 2:c.call(T,h)}else switch(t){case 4:return!1;case 7:c.call(T,h)}return f?-1:u||l?l:T}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d36b:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=sintesis.0f67e975.js.map