import e,{forwardRef as r,useRef as t,useImperativeHandle as o,useEffect as n}from"react";import a from"jquery";try{if(!document||!window)throw null;window.jQuery=a,window.$=a}catch(e){}const i=r(((r,a)=>{const i=t(),u=t(),c=t();return o(a,(()=>({summernote:function(){return window.$(i.current).summernote(...arguments)},getNoteRef:()=>i.current,getFormRef:()=>u.current}))),n((()=>{require("./dist/summernote-lite.min.js");const e={...l,...r};window.$(i.current).summernote(e)}),[]),n((()=>{c.current&&window.$(i.current).summernote({callbacks:r.callbacks}),c.current=!0}),[r.callbacks]),n((()=>{"string"==typeof r.defaultCodeValue&&r.defaultCodeValue!==window.$(i.current).val()&&window.$(i.current).summernote("code",r.defaultCodeValue||"<p><br></p>")}),[r.defaultCodeValue]),"boolean"==typeof r.useDiv&&r.useDiv?e.createElement("div",{ref:i}):e.createElement("form",{ref:u},e.createElement("textarea",{ref:i}))})),l={placeholder:"Write something here...",tabsize:2,height:370,blockquoteBreakingLevel:0,fontNames:["Arial","Brush Script MT","Calibri","Candara","Century Gothic","Consolas","Dejavu Sans","Franklin Gothic","Gill Sans","Geneva","Georgia","Garamond","Helvetica","Lucida Sans","MS Sans Serif","Neue Helvetica","Optima","Segoe UI","Tahoma","Trebuchet MS","Verdana"],toolbar:[["style",["style"]],["font",["bold","underline","clear","strikethrough","superscript","subscript"]],["fontsize",["fontsize"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video","hr"]],["view",["fullscreen","codeview","help"]]]},u=l;export{u as DEFAULT_PROPS,i as default};