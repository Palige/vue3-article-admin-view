import{aA as X,q,i as W,b9 as G,B as F,f as h,aw as P,w as Y,N as Z,S as ee,r as A,au as _,bV as R,a8 as he,aq as H,e as L,y as ae,u as O,o as C,j as le,k as ne,U as J,p as g,h as n,a1 as N,g as V,aR as $,V as z,bW as w,m as M,W as ke,ab as te,ac as oe,R as T,l as ue,_ as j,n as pe,b as ge,d as Ce,A as xe,as as Ve,t as ye,z as se}from"./index-CyOCBvwo.js";import{b as ie,U,p as Se}from"./el-input-BoF7YTLz.js";import{h as Le,c as K,e as re,a as Q,d as ce,b as D}from"./_plugin-vue_export-helper-vTAooe8W.js";import{i as Be}from"./isEqual-CZTB74ls.js";const de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:X,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...ie(["ariaControls"])},be={[U]:e=>q(e)||W(e)||G(e),change:e=>q(e)||W(e)||G(e)},B=Symbol("checkboxGroupContextKey"),Ee=({model:e,isChecked:c})=>{const i=F(B,void 0),l=h(()=>{var r,d;const t=(r=i==null?void 0:i.max)==null?void 0:r.value,v=(d=i==null?void 0:i.min)==null?void 0:d.value;return!P(t)&&e.value.length>=t&&!c.value||!P(v)&&e.value.length<=v&&c.value});return{isDisabled:Le(h(()=>(i==null?void 0:i.disabled.value)||l.value)),isLimitDisabled:l}},Ie=(e,{model:c,isLimitExceeded:i,hasOwnLabel:l,isDisabled:b,isLabeledByFormItem:r})=>{const d=F(B,void 0),{formItem:t}=K(),{emit:v}=ee();function s(a){var k,p,u,f;return[!0,e.trueValue,e.trueLabel].includes(a)?(p=(k=e.trueValue)!=null?k:e.trueLabel)!=null?p:!0:(f=(u=e.falseValue)!=null?u:e.falseLabel)!=null?f:!1}function o(a,k){v("change",s(a),k)}function m(a){if(i.value)return;const k=a.target;v("change",s(k.checked),a)}async function x(a){i.value||!l.value&&!b.value&&r.value&&(a.composedPath().some(u=>u.tagName==="LABEL")||(c.value=s([!1,e.falseValue,e.falseLabel].includes(c.value)),await Z(),o(c.value,a)))}const y=h(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return Y(()=>e.modelValue,()=>{y.value&&(t==null||t.validate("change").catch(a=>re()))}),{handleChange:m,onClickRoot:x}},_e=e=>{const c=A(!1),{emit:i}=ee(),l=F(B,void 0),b=h(()=>P(l)===!1),r=A(!1),d=h({get(){var t,v;return b.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(v=e.modelValue)!=null?v:c.value},set(t){var v,s;b.value&&_(t)?(r.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>d.value.length,r.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,t))):(i(U,t),c.value=t)}});return{model:d,isGroup:b,isLimitExceeded:r}},Fe=(e,c,{model:i})=>{const l=F(B,void 0),b=A(!1),r=h(()=>R(e.value)?e.label:e.value),d=h(()=>{const o=i.value;return G(o)?o:_(o)?he(r.value)?o.map(H).some(m=>Be(m,r.value)):o.map(H).includes(r.value):o!=null?o===e.trueValue||o===e.trueLabel:!!o}),t=Q(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),v=Q(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),s=h(()=>!!c.default||!R(r.value));return{checkboxButtonSize:t,isChecked:d,isFocused:b,checkboxSize:v,hasOwnLabel:s,actualValue:r}},ve=(e,c)=>{const{formItem:i}=K(),{model:l,isGroup:b,isLimitExceeded:r}=_e(e),{isFocused:d,isChecked:t,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,actualValue:m}=Fe(e,c,{model:l}),{isDisabled:x}=Ee({model:l,isChecked:t}),{inputId:y,isLabeledByFormItem:a}=ce(e,{formItemContext:i,disableIdGeneration:o,disableIdManagement:b}),{handleChange:k,onClickRoot:p}=Ie(e,{model:l,isLimitExceeded:r,hasOwnLabel:o,isDisabled:x,isLabeledByFormItem:a});return(()=>{function f(){var E,I;_(l.value)&&!l.value.includes(m.value)?l.value.push(m.value):l.value=(I=(E=e.trueValue)!=null?E:e.trueLabel)!=null?I:!0}e.checked&&f()})(),D({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>b.value&&R(e.value))),D({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>!!e.trueLabel)),D({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>!!e.falseLabel)),{inputId:y,isLabeledByFormItem:a,isChecked:t,isDisabled:x,isFocused:d,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,model:l,actualValue:m,handleChange:k,onClickRoot:p}},Ne=L({name:"ElCheckbox"}),$e=L({...Ne,props:de,emits:be,setup(e){const c=e,i=ae(),{inputId:l,isLabeledByFormItem:b,isChecked:r,isDisabled:d,isFocused:t,checkboxSize:v,hasOwnLabel:s,model:o,actualValue:m,handleChange:x,onClickRoot:y}=ve(c,i),a=O("checkbox"),k=h(()=>[a.b(),a.m(v.value),a.is("disabled",d.value),a.is("bordered",c.border),a.is("checked",r.value)]),p=h(()=>[a.e("input"),a.is("disabled",d.value),a.is("checked",r.value),a.is("indeterminate",c.indeterminate),a.is("focus",t.value)]);return(u,f)=>(C(),le(ue(!n(s)&&n(b)?"span":"label"),{class:g(n(k)),"aria-controls":u.indeterminate?u.ariaControls:null,onClick:n(y)},{default:ne(()=>{var E,I;return[J("span",{class:g(n(p))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?N((C(),V("input",{key:0,id:n(l),"onUpdate:modelValue":S=>$(o)?o.value=S:null,class:g(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,name:u.name,tabindex:u.tabindex,disabled:n(d),"true-value":(E=u.trueValue)!=null?E:u.trueLabel,"false-value":(I=u.falseValue)!=null?I:u.falseLabel,onChange:n(x),onFocus:S=>t.value=!0,onBlur:S=>t.value=!1,onClick:z(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[w,n(o)]]):N((C(),V("input",{key:1,id:n(l),"onUpdate:modelValue":S=>$(o)?o.value=S:null,class:g(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,disabled:n(d),value:n(m),name:u.name,tabindex:u.tabindex,onChange:n(x),onFocus:S=>t.value=!0,onBlur:S=>t.value=!1,onClick:z(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[w,n(o)]]),J("span",{class:g(n(a).e("inner"))},null,2)],2),n(s)?(C(),V("span",{key:0,class:g(n(a).e("label"))},[M(u.$slots,"default"),u.$slots.default?T("v-if",!0):(C(),V(ke,{key:0},[te(oe(u.label),1)],64))],2)):T("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var ze=j($e,[["__file","checkbox.vue"]]);const we=L({name:"ElCheckboxButton"}),Ue=L({...we,props:de,emits:be,setup(e){const c=e,i=ae(),{isFocused:l,isChecked:b,isDisabled:r,checkboxButtonSize:d,model:t,actualValue:v,handleChange:s}=ve(c,i),o=F(B,void 0),m=O("checkbox"),x=h(()=>{var a,k,p,u;const f=(k=(a=o==null?void 0:o.fill)==null?void 0:a.value)!=null?k:"";return{backgroundColor:f,borderColor:f,color:(u=(p=o==null?void 0:o.textColor)==null?void 0:p.value)!=null?u:"",boxShadow:f?`-1px 0 0 0 ${f}`:void 0}}),y=h(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",r.value),m.is("checked",b.value),m.is("focus",l.value)]);return(a,k)=>{var p,u;return C(),V("label",{class:g(n(y))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?N((C(),V("input",{key:0,"onUpdate:modelValue":f=>$(t)?t.value=f:null,class:g(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),"true-value":(p=a.trueValue)!=null?p:a.trueLabel,"false-value":(u=a.falseValue)!=null?u:a.falseLabel,onChange:n(s),onFocus:f=>l.value=!0,onBlur:f=>l.value=!1,onClick:z(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[w,n(t)]]):N((C(),V("input",{key:1,"onUpdate:modelValue":f=>$(t)?t.value=f:null,class:g(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),value:n(v),onChange:n(s),onFocus:f=>l.value=!0,onBlur:f=>l.value=!1,onClick:z(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[w,n(t)]]),a.$slots.default||a.label?(C(),V("span",{key:2,class:g(n(m).be("button","inner")),style:pe(n(b)?n(x):void 0)},[M(a.$slots,"default",{},()=>[te(oe(a.label),1)])],6)):T("v-if",!0)],2)}}});var me=j(Ue,[["__file","checkbox-button.vue"]]);const De=ge({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:X,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...ie(["ariaLabel"])}),Ge={[U]:e=>_(e),change:e=>_(e)},Pe=L({name:"ElCheckboxGroup"}),Ae=L({...Pe,props:De,emits:Ge,setup(e,{emit:c}){const i=e,l=O("checkbox"),{formItem:b}=K(),{inputId:r,isLabeledByFormItem:d}=ce(i,{formItemContext:b}),t=async s=>{c(U,s),await Z(),c("change",s)},v=h({get(){return i.modelValue},set(s){t(s)}});return xe(B,{...Se(Ve(i),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:t}),Y(()=>i.modelValue,()=>{i.validateEvent&&(b==null||b.validate("change").catch(s=>re()))}),(s,o)=>{var m;return C(),le(ue(s.tag),{id:n(r),class:g(n(l).b("group")),role:"group","aria-label":n(d)?void 0:s.ariaLabel||"checkbox-group","aria-labelledby":n(d)?(m=n(b))==null?void 0:m.labelId:void 0},{default:ne(()=>[M(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var fe=j(Ae,[["__file","checkbox-group.vue"]]);const je=ye(ze,{CheckboxButton:me,CheckboxGroup:fe});se(me);se(fe);export{je as E};
