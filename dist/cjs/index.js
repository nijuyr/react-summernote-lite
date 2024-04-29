"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("jquery");try{if(!document||!window)throw null;window.jQuery=r,window.$=r}catch(e){}const t=e.forwardRef(((r,t)=>{const n=e.useRef(),o=e.useRef(),u=e.useRef();return e.useImperativeHandle(t,(()=>({summernote:function(){return window.$(n.current).summernote(...arguments)},getNoteRef:()=>n.current,getFormRef:()=>o.current}))),e.useEffect((()=>{require("./dist/summernote-lite.min.js");const e={...a,...r};window.$(n.current).summernote(e)}),[]),e.useEffect((()=>{u.current&&window.$(n.current).summernote({callbacks:r.callbacks}),u.current=!0}),[r.callbacks]),e.useEffect((()=>{"string"==typeof r.defaultCodeValue&&r.defaultCodeValue!==window.$(n.current).val()&&window.$(n.current).summernote("code",r.defaultCodeValue||"<p><br></p>")}),[r.defaultCodeValue]),"boolean"==typeof r.useDiv&&r.useDiv?e.createElement("div",{ref:n}):e.createElement("form",{ref:o},e.createElement("textarea",{ref:n}))})),a={placeholder:"Write something here...",tabsize:2,height:370,blockquoteBreakingLevel:0,fontNames:["Arial","Brush Script MT","Calibri","Candara","Century Gothic","Consolas","Dejavu Sans","Franklin Gothic","Gill Sans","Geneva","Georgia","Garamond","Helvetica","Lucida Sans","MS Sans Serif","Neue Helvetica","Optima","Segoe UI","Tahoma","Trebuchet MS","Verdana"],toolbar:[["style",["style"]],["font",["bold","underline","clear","strikethrough","superscript","subscript"]],["fontsize",["fontsize"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video","hr"]],["view",["fullscreen","codeview","help"]]]},n=a;exports.DEFAULT_PROPS=n,exports.default=t;