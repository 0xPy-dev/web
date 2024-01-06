"use strict";(self.webpackChunkast_block_templates=self.webpackChunkast_block_templates||[]).push([[637],{1637:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var o=r(7363),s=r(6048),a=r(1359),l=r(1882),n=r(9576),c=r(9344),i=r(5711),p=r(5868),m=r(4142),u=r(9148),d=r(6128),g=r(1569),f=r(5622),b=r(8680),y=r(6042),h=r(7712),v=r(3720);const{post:k}=wp.ajax,{parse:_}=wp.blocks;var w=(0,i.Z)((0,n.Z)((e=>{const{getImportItemInfo:t,getCurrentScreen:r,getSitePreview:o,getActivePaletteSlug:s,getDisableAi:a}=e("ast-block-templates");return{importItemInfo:t(),sitePreview:o(),currentScreen:r(),activePaletteSlug:s(),disableAI:a()}})),(0,c.Z)((e=>{const{setImportItemInfo:t,setTogglePopup:r}=e("ast-block-templates"),{insertBlocks:o}=wp.data.dispatch("core/block-editor");return{setImportItemInfo:t,onSetTogglePopup:r,insertBlocks:o}})))((0,o.memo)((e=>{let{setImportItemInfo:t,requiredPlugins:r,importItemInfo:n,title:c,btnClass:i,insertBlocks:w,onSetTogglePopup:I,item:E,onClick:P,onBlockImport:x,activePaletteSlug:B,disableAI:S,importing:C=!1}=e,[R]=(0,o.useState)(n),A=r||[];const N=i||"",[Z]=(0,o.useState)(c||"Import"),{insertIndex:j}=wp.data.select("core/block-editor").getBlockInsertionPoint(),{importInProgress:F}=(0,a.Z)((e=>{const{getImportInProgress:t}=e(v.L);return{importInProgress:t()}}),[]),{setImportInProgress:$}=(0,l.Z)(v.L),L=(e,t,r)=>{(0,y.Am)((0,h.Z)({title:e,message:t}),h.Z.getOptions({type:r}))},O=()=>{(0,u.j)({slug:"ultimate-addons-for-gutenberg",init:"ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php",name:"Spectra"}).then((()=>{})).catch((()=>{$(!1),L("Import failed!","Spectra activation failed!","error")}))},D=()=>{(0,u.j)({slug:"wpforms-lite",init:"wpforms-lite/wpforms.php",name:"WPForms Lite"}).then((()=>{W()})).catch((()=>{$(!1),L("Import failed!","WPForms activation failed!","error")}))},q=()=>{const e=R.original_content,t=R["blocks-category"][0];k({action:"ast_block_templates_import_block",content:e,category:t,_ajax_nonce:ast_block_template_vars._ajax_nonce,style:B,disableAI:S}).done((e=>{$(!1);const t=(0,s.CN)(_(e));w(t,j,"",!1),I(),document.getElementById("ast-block-templates-modal-wrap").classList.remove("open"),document.body.classList.remove("ast-block-templates-modal-open"),"function"==typeof x&&x(e,j),"active"!==ast_block_template_vars.spectra_status&&(0,f.iP)()})).fail((e=>{L("Import failed!",e,"error")}))},W=()=>{R?.["post-meta"]?.["astra-site-wpforms-path"]||""?k({action:"ast_block_templates_import_wpforms",id:R.id,_ajax_nonce:ast_block_template_vars._ajax_nonce}).done((()=>{q()})).fail((()=>{$(!1),L("Import failed!","WPForms import failed!","error")})):q()};return React.createElement(p.Z,{className:(0,s.AK)("min-w-[7rem] hover:shadow-small sp-text-sm",N,F^C&&"opacity-50 cursor-not-allowed"),type:"button",variant:"primary",onClick:e=>{F||($(!0),"function"==typeof P&&P(e),"not-installed"===ast_block_template_vars.spectra_status?(0,u.H)({slug:"ultimate-addons-for-gutenberg",init:"ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php",name:"Spectra"}).then((()=>{O()})).catch((()=>{$(!1),L("Import failed!","Spectra installation failed!","error")})):"inactive"===ast_block_template_vars.spectra_status&&O(),(0,g.I)(E.ID,"astra-blocks").then((e=>{t(e),R=e,A=e?.["post-meta"]?.["astra-blocks-required-plugins"]?d.t.parse(e["post-meta"]["astra-blocks-required-plugins"]):[],A.length?"not-installed"===ast_block_template_vars.wpforms_status?(0,u.H)({slug:"wpforms-lite",init:"wpforms-lite/wpforms.php",name:"WPForms Lite"}).then((()=>{D()})).catch((()=>{$(!1),L("Import failed!","WPForms installation failed!","error")})):"inactive"===ast_block_template_vars.wpforms_status?D():W():W()})).catch((e=>{L("Import failed!",e,"error"),$(!0)})))},isSmall:!0,hasPrefixIcon:!C},C?React.createElement(m.Z,{className:"h-[1.3rem] w-[1.3rem] !shrink-0"}):React.createElement(React.Fragment,null,React.createElement(b.Z,{className:"h-[1.3rem] w-[1.3rem] !shrink-0"}),Z))}))),I=r(10),E=o.forwardRef((function({title:e,titleId:t,...r},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"}))})),P=r(6486),x=r(2154),B=r(972);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},S.apply(this,arguments)}const{site_url:C}=ast_block_template_vars;var R=(0,i.Z)((0,n.Z)((e=>{const{getFilterBlocksByCategory:t,getFilterBlocksPagesByCategory:r}=e("ast-block-templates");return{filterBlocksByCategory:t(),filterBlocksPagesByCategory:r()}})),(0,c.Z)((e=>{const{setFavorites:t,setFilterBlocksByCategory:r,setFilterBlocksPagesByCategory:o}=e("ast-block-templates");return{setFavorites:t,setFilterBlocksByCategory:r,setFilterBlocksPagesByCategory:o}})))((e=>{let{item:t,className:r,setFavorites:l,setFilterBlocksByCategory:n,filterBlocksByCategory:c,filterBlocksPagesByCategory:i,setFilterBlocksPagesByCategory:p,...m}=e;const{favorites:u,currentScreen:d}=(0,a.Z)((e=>{const{getFavorites:t,getCurrentScreen:r}=e("ast-block-templates");return{favorites:t(),currentScreen:r()}})),g="all-blocks-grid"===d?"block":"page",[f,b]=(0,o.useState)(u[g]?.includes(+t.ID));return React.createElement("button",S({className:(0,s.AK)("flex items-center justify-center rounded-full p-2 bg-white cursor-pointer border-0 focus:outline-none",f?"":"text-icon-secondary",r),onClick:async e=>{e?.preventDefault(),e?.stopPropagation();try{await(0,I.Z)({path:`${C}/wp-json/gutenberg-templates/v1/favorite`,data:{type:t.type,block_id:t.ID,status:!f},method:"POST",headers:{"X-WP-Nonce":ast_block_template_vars.rest_api_nonce,"content-type":"application/json"}})}catch(e){console.error(e)}let r={...u};r=f?{...u,[g]:u[g].filter((e=>e!==(0,P.parseInt)(t.ID)))}:{...u,[g]:[...new Set([...u[g],(0,P.parseInt)(t.ID)])]},b(!f),l(r),r[g].length||"favorite"!==c&&"favorite"!==i||("block"===g&&n(""),"page"===g&&p(""),x.Z.emit("reset-list-count"))}},m),React.createElement(B.Z,{content:!f&&"Add to favorites"},React.createElement(E,{className:(0,s.AK)("w-6 h-6 transition-colors ease-out duration-150",f?"fill-favorite text-favorite":"hover:fill-favorite hover:text-favorite")})))}));const A=e=>{const t=["skip","logo","fav-icon"];for(const r of t)if(e.includes(r))return!0;return!1},{spectra_common_styles:N}=ast_block_template_vars,Z="visible";var j=(0,i.Z)((0,n.Z)((e=>{const{getDisableAi:t,getDisablePreview:r}=e("ast-block-templates");return{disableAi:t(),disablePreview:r()}})))((0,o.memo)((e=>{let{item:t,content:r,stylesheet:a,astraCustomizer:l,globalStylesheet:n,colorPalette:c,dynamicContent:i,selectedImages:p,disableAi:m,email:u,phone:d,address:g}=e;const f=(0,o.useRef)(null),b=(0,o.useRef)(null),y=t["thumbnail-image-url"]||"",h=t["featured-image-url"]||"";let v=0,k=0;const[_,I]=(0,o.useState)({importing:!1}),[E,P]=(0,o.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`),[x,B]=(0,o.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);function S(){const e=f?.current,t=b?.current;if(!e||!t)return;const r=e.parentNode.offsetWidth/1200,o=r*t.offsetHeight;e.style.transform=`scale(${r})`,e.style.height=`${o}px`}(0,o.useLayoutEffect)((()=>{let e=!0;const o={landscape:[],portrait:[]};p?.forEach((e=>{"landscape"===e.orientation?o.landscape.push(e):o.portrait.push(e)}));const s=o,f=new Image;f.src=y;const _=new Image;_.src=h;const w=b.current;function I(t,r){e&&(t.onload=()=>{r(t.src)})}I(f,P),I(_,B);const E=document.getElementById("astra-wp-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container"),x=document.getElementById("astra-block-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container");let R="";var j,F,$;if(a&&(j=a,F=s?.landscape,a=m||F&&0===F.length?j:j.replace(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g,(function(e,t){if(A(t))return e;if(!F[v]?.url)return"";const r=F[v]?.url;return v++,'background-image: url("'+r+'")'}))),R+=l?`<style type="text/css" id="gt-astra-customizer">${l}</style>`:"",R+=`<style type="text/css" id="gt-spectra-common-stylesheet">${N}</style>`,R=a?`${R} <style type="text/css" id="gt-common-stylesheet">${a}</style>`:R,n&&(R+=`<style type="text/css" id="gt-global-stylesheet"> ${n} </style>`),E&&(R+=`<style type="text/css" id="gt-wpeditor-css" > ${E} </style>`),x&&(R+=`<style type="text/css" id="gt-blockeditor-css"> ${x} </style>`),w&&r){let e=w.shadowRoot;if(null===e&&(e=w.attachShadow({mode:"open"})),null===e)return;let o=r;if(!m){const e=i?i[t.category]:[];e&&Object.keys(e)?.length>0&&Object.keys(e).forEach((t=>{o=null!==e[t]?o.replace(t,e[t]):o})),$=o,u&&($=$.replace("contact@example.com",u)),d&&($=$.replace("202-555-0188",d)),g&&($=$.replace("2360 Hood Avenue, San Diego, CA, 92123",g)),o=$}e.innerHTML=R+o,c.forEach(((t,r)=>{e?.host.style.setProperty(`--ast-global-color-${r}`,t)}));const a=w.shadowRoot.querySelectorAll("div")[0];a?.classList.add("st-block-container");const l=w.shadowRoot.querySelectorAll("img");e&&(l.forEach((e=>{A(e.src)||m||0===s.landscape.length||0===s.portrait.length||C(e,"hidden")})),S(),((e,t)=>{if(m)return;const r=t.landscape?t.landscape:[],o=t.portrait?t.portrait:[];0!==r.length&&0!==o.length&&e?.forEach((function(e){A(e.src)||(e.onload=()=>{const t=(e=>{const t=new Image;return t.src=e,t.width>t.height?"landscape":"portrait"})(e.src);let s;if(s="landscape"===t?r[v]:o[k],void 0!==s)if(s.url.includes("unsplash")||s.url.includes("pexels")||s.url.includes("pixabay")){if("landscape"===t?v++:k++,"PICTURE"===e.parentNode.nodeName)e.parentNode.querySelectorAll("source").forEach((e=>{e.setAttribute("srcset",s.optimized_url)})),e.parentNode.querySelector("img").setAttribute("src",s.optimized_url);else{const t=document.createElement("img");t.src=s.optimized_url,e.parentNode.replaceChild(t,e)}C(e,Z)}else C(e,Z);else C(e,Z)},e.onerror=()=>{C(e,Z)})}))})(l,s))}return()=>{e=!1}}),[t,m,i]),(0,o.useEffect)((()=>{const e=new ResizeObserver(S);return e.observe(document.documentElement),()=>{e&&e.disconnect()}}),[]),(0,o.useEffect)((()=>{const e=document.querySelector("#ast-block-templates-modal-wrap");if(!e)return;const t=new MutationObserver(S);return t.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{t&&t.disconnect()}}),[]),(0,o.useEffect)((()=>{const e=b?.current;if(e){const t=e.shadowRoot;c.forEach(((e,r)=>{null!==t&&t.host.style.setProperty(`--ast-global-color-${r}`,e)}))}}),[c]);const C=(e,t)=>{e&&(e.style.visibility=t)};return React.createElement("div",{className:(0,s.AK)("w-full h-fit p-5",!0===_.importing?"importing":"")},React.createElement("div",{className:"cursor-pointer relative border border-solid border-border-primary hover:border-accent-spectra transition duration-150 ease-in-out overflow-hidden group"},React.createElement("div",{className:"thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 origin-top-left relative pointer-events-none",ref:f},React.createElement("div",{className:"absolute w-[1200px] pointer-events-none max-h-[1600px] overflow-hidden",ref:b},!r&&React.createElement("img",{srcSet:`${x}, ${E}`,src:E,alt:"Preview"}),React.createElement("div",{className:"preview"},React.createElement("span",{className:"ast-block-templates-icon ast-block-templates-icon-search"})))),React.createElement("div",{className:"absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end"},React.createElement("div",{className:(0,s.AK)("opacity-0 group-hover:opacity-100 w-full flex items-center justify-between px-[20px] py-[14px] backdrop-blur-sm bg-white/[0.85] shadow-action-buttons transition-all duration-150 ease-in-out",!0===_.importing?"opacity-100":"")},React.createElement(w,{title:"Insert",liveRequest:!0,item:t,importing:_.importing,onClick:()=>{I({..._,importing:!0})},onBlockImport:()=>{I({..._,importing:!1})}}),React.createElement(R,{item:t})))))})))}}]);