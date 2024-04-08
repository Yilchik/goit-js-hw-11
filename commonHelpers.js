import{i as a,S as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(s){const o=document.querySelector(".gallery");return o.innerHTML="",s.map(({webformatURL:i,largeImageURL:r,tags:e,id:t,likes:n,views:c,comments:l,downloads:u})=>`
    <li class="gallery-item" data-id = ${t}>
        <a class="gallery-link" href="${r}">
            <img
                class="gallery-image"
                src="${i}"
                alt="${e}" />
                <figcaption>likes${n}  views${c}  comments${l}  downloads${u}</figcaption>
               
        </a>
    </li>`).join("")}const p="43275871-c76d4a7895f35b3cf58095282",h="https://pixabay.com/api";async function d(s){const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${h}?${o}`;fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{console.log(r),gallery.insertAdjacentHTML("beforeend",m(r.hits))}).catch(r=>{a.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})})}const g=document.querySelector(".search-form"),y=document.querySelector(".search-input");g.addEventListener("submit",L);function L(s){s.preventDefault();const o=y.value.trim();if(o===""){a.error({title:"Error",message:"Please enter a search images",position:"topRight"});return}d(o)}const b=new f("gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});b.refresh();
//# sourceMappingURL=commonHelpers.js.map
