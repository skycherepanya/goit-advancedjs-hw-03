import{a as m,S as p,i as a}from"./assets/vendor-b6X63ke0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(o){return m.get("https://pixabay.com/api/",{params:{key:"56361798-f8b70e825b8ee5840492d6dfc",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${s}">
              <img class="gallery-image" src="${i}" alt="${e}" />
            </a>
            <div class="info">
              <div class="info-item"><b>Likes</b><span>${t}</span></div>
              <div class="info-item"><b>Views</b><span>${n}</span></div>
              <div class="info-item"><b>Comments</b><span>${d}</span></div>
              <div class="info-item"><b>Downloads</b><span>${f}</span></div>
            </div>
          </li>
        `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements.searchQuery.value.trim();if(r===""){a.warning({title:"Caution",message:"Please enter a search term!",position:"topRight"});return}b(),L(),g(r).then(i=>{if(i.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i.hits)}).catch(i=>{a.error({title:"Error",message:"Something went wrong. Please check your connection.",position:"topRight"})}).finally(()=>{v(),c.reset()})});
//# sourceMappingURL=index.js.map
