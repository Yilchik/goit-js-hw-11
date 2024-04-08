import{i as n,S as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(i){const o=document.querySelector(".gallery");return o.innerHTML="",i.map(({webformatURL:r,largeImageURL:a,tags:e,id:t,likes:s,views:c,comments:l,downloads:u})=>`
    <li class="gallery-item" data-id = ${t}>
        <a class="gallery-link" href="${a}">
            <img
                class="gallery-image"
                src="${r}"
                alt="${e}" />
                <figcaption>likes${s}  views${c}  comments${l}  downloads${u}</figcaption>
               
        </a>
    </li>`).join("")}const p="43275871-c76d4a7895f35b3cf58095282";function h(i){const o=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{console.log(r),gallery.insertAdjacentHTML("beforeend",m(r.hits))}).catch(r=>{n.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})})}const d=document.querySelector(".search-form"),g=document.querySelector(".search-input");d.addEventListener("submit",y);function y(i){i.preventDefault();const o=g.value.trim();if(o===""){n.error({title:"Error",message:"Please enter a search images",position:"topRight"});return}h(o)}const b=new f("gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});b.refresh();
//# sourceMappingURL=commonHelpers.js.map
