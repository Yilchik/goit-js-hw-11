import{i as n,S as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="43275871-c76d4a7895f35b3cf58095282";function p(i){return new URLSearchParams({key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),fetch("${BASE_URL}?${params}").then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function y(i){return i.map(({webformatURL:s,largeImageURL:r,tags:a,id:e,likes:t,views:o,comments:g,downloads:f})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${r}">
            <img
                class="gallery-image"
                src="${s}"
                alt="${a}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${t}</p>
      </div>
      <div class = "img-inform">
          <h2 class ="img-title">Views</h2>
          <p class = "img-text">${o}</p>
      </div>
      <div class = "img-inform">
           <h2 class ="img-title">Comments</h2>
            <p class = "img-text">${g}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${f}</p>
       </div></div>
    </li>`).join("")}function v(i){i.style.display="block"}function c(i){i.style.display="none"}const m=document.querySelector(".gallery"),u=document.querySelector(".search-form"),l=document.querySelector(".loading-indicator");u.addEventListener("submit",L);function L(i){i.preventDefault(),m.innerHTML="";const s=i.currentTarget.elements.search.value.trim();if(s==="")return n.error({title:"Error",message:"Please enter a search images",position:"topRight"});v(l),p(s).then(r=>{if(console.log(r),r.hits.length===0)return c(l),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});u.reset(),m.innerHTML=y(r.hits),P.refresh()}).catch(r=>{n.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{c(l)})}let P=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
