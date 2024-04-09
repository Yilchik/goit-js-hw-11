import{S as l,i as n}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="43275871-c76d4a7895f35b3cf58095282",m="https://pixabay.com/api";function f(i){const t=new URLSearchParams({key:u,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${m}?${t}`;return fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function h(i){return i.map(({webformatURL:t,largeImageURL:o,tags:s,id:e,likes:r,views:a,comments:y,downloads:d})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${o}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${s}" />
                
               
        </a>
    </li>`).join("")}const c=document.querySelector(".gallery");new l("gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,close:!0});const g=document.querySelector(".search-form");g.addEventListener("submit",p);function p(i){i.preventDefault(),c.innerHTML="";const t=i.currentTarget.elements.search.value.trim();if(t===""){n.error({title:"Error",message:"Please enter a search images",position:"topRight"});return}f(t).then(o=>{console.log(o),o.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):c.insertAdjacentHTML("beforeend",h(o.hits))}).catch(o=>{n.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
