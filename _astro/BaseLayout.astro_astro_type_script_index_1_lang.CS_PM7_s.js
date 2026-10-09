if(window.innerWidth>=769&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){let b=function(e){let t=null,n=1/0;const r=window.innerHeight*.45;return document.querySelectorAll(e).forEach(l=>{const f=l.getBoundingClientRect();if(!_(f))return;const w=Math.abs(f.top+f.height/2-r);w<n&&(n=w,t=l)}),t},z=function(e){if(d==="title"){const n=document.createRange();n.selectNodeContents(e);const r=n.getClientRects(),l=r[r.length-1]||e.getBoundingClientRect();return{x:Math.min(l.right+6,window.innerWidth-s-8),y:l.top+l.height/2-s/2}}const t=e.getBoundingClientRect();return{x:t.right-s*.75,y:t.top-s*.7}},M=function(){const e=performance.now();if(d==="title"&&i&&e-m>4500){const n=b(y);if(n){d="book",i=n,m=e;return}}d==="book"&&e-m>5e3&&(d="title");const t=b(d==="title"?u:y)||b(u);t!==i&&(i=t,m=e)};const o=document.createElement("div");o.id="buzz-bee",o.setAttribute("aria-hidden","true"),o.innerHTML=`<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
        <ellipse class="wl" cx="14" cy="12" rx="8" ry="5" fill="rgba(255,249,229,0.5)" stroke="rgba(245, 179, 53, 0.5)" stroke-width="0.8"/>
        <ellipse class="wr" cx="26" cy="12" rx="8" ry="5" fill="rgba(255,249,229,0.5)" stroke="rgba(245, 179, 53, 0.5)" stroke-width="0.8"/>
        <ellipse cx="20" cy="22" rx="7" ry="10" fill="#f5b020"/>
        <rect x="13" y="19" width="14" height="2.5" rx="1" fill="#111"/>
        <rect x="13" y="24" width="14" height="2.5" rx="1" fill="#111"/>
        <rect x="14" y="29" width="12" height="2" rx="1" fill="#111"/>
        <circle cx="20" cy="13" r="5" fill="#111"/>
        <circle cx="18" cy="12" r="1.5" fill="#fff"/>
        <circle cx="22" cy="12" r="1.5" fill="#fff"/>
        <circle cx="18.3" cy="12" r="0.6" fill="#111"/>
        <circle cx="22.3" cy="12" r="0.6" fill="#111"/>
        <path d="M17 9Q15 4 12 3" stroke="#f5b020" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M23 9Q25 4 28 3" stroke="#f5b020" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <circle cx="12" cy="3" r="1.2" fill="#f5b020"/>
        <circle cx="28" cy="3" r="1.2" fill="#f5b020"/>
      </svg>`,Object.assign(o.style,{position:"fixed",width:"52px",height:"52px",zIndex:"9999",pointerEvents:"none",opacity:"0",transition:"opacity 0.6s",filter:"drop-shadow(0 0 8px rgba(245, 179, 53, 0.6)) drop-shadow(0 2px 4px rgba(0,0,0,0.3))",top:"0",left:"0"});const p=document.createElement("style");p.textContent=`
        @keyframes beeWingL { from{transform:rotate(-15deg) scaleY(1)} to{transform:rotate(15deg) scaleY(0.6)} }
        @keyframes beeWingR { from{transform:rotate(15deg) scaleY(1)} to{transform:rotate(-15deg) scaleY(0.6)} }
        @keyframes beeBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
        #buzz-bee .wl { transform-origin:18px 14px; animation:beeWingL 0.08s ease-in-out infinite alternate; }
        #buzz-bee .wr { transform-origin:22px 14px; animation:beeWingR 0.08s ease-in-out infinite alternate; }
        #buzz-bee.landed .wl, #buzz-bee.landed .wr { animation:none; }
        #buzz-bee.landed svg { animation:beeBob 2s ease-in-out infinite; }
      `,document.head.appendChild(p),document.body.appendChild(o);const u=".section-title, .hero__title, .cine__title, .showcase__card-name, .pscroll__list li.is-active .pscroll__name",y='.float-book--show, .hero__book, .qb__next, main [id*="booking-trigger"].btn',s=52;let c=window.innerWidth*.7,a=window.innerHeight*.4,h=0,g=0,x=!1,d="title",i=null,m=0,k=0;const B=()=>(document.getElementById("site-header")?.getBoundingClientRect().bottom??80)+10,_=e=>e.width>0&&e.top>B()&&e.top<window.innerHeight-40&&e.right>0&&e.left<window.innerWidth,v=()=>{x||(x=!0,o.style.opacity="1")};setTimeout(v,2e3),window.addEventListener("scroll",()=>{v(),k=performance.now()},{passive:!0});let C=0;(function e(){if(requestAnimationFrame(e),!x)return;++C%30===0&&performance.now()-k>250&&M(),i&&!_(i.getBoundingClientRect())&&(i=null);const t=i?z(i):{x:c,y:a},n=t.x-c,r=t.y-a,f=Math.hypot(n,r)<3;h=(h+n*.024)*.84,g=(g+r*.024)*.84,c+=h,a+=g,o.classList.toggle("landed",f),c=Math.max(8,Math.min(window.innerWidth-s-8,c)),a=Math.max(8,Math.min(window.innerHeight-s-8,a));const w=h<-.3?-1:1,E=f?0:Math.max(-8,Math.min(8,g*1.5));o.style.transform=`translate(${c}px, ${a}px) scaleX(${w}) rotate(${E}deg)`})()}
