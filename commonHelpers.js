import{i as n,S as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector(".search-form"),g=document.querySelector(".search-input"),c=document.querySelector(".gallery"),h="43275871-c76d4a7895f35b3cf58095282";m.addEventListener("submit",p);function p(i){i.preventDefault();const o=g.value.trim();if(o===""){n.error({title:"Error",message:"Please enter a search images",position:"topRight"});return}d(o)}function d(i){n.info({title:"Loading",message:"Loading images, please wait...",position:"topRight"}),c.innerHTML="";const o=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):c.insertAdjacentHTML("beforeend",y(r.hits))}).catch(r=>{n.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})})}function y(i){return i.map(({webformatURL:o,largeImageURL:r,tags:a,id:e,likes:t,views:s,comments:l,downloads:u})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${r}">
            <img
                class="gallery-image"
                src="${o}"
                alt="${a}" />
                <figcaption>likes${t}  views${s}  comments${l}  downloads${u}</figcaption>
               
        </a>
    </li>`).join("")}const L=new f("gallery a",{});L.refresh();
//# sourceMappingURL=commonHelpers.js.map
