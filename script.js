document.getElementById("year").textContent=new Date().getFullYear();
const btn=document.querySelector(".menu-toggle"), nav=document.querySelector("#main-nav");
btn?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.top="68px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px";nav.style.background="#fff";nav.style.borderBottom="1px solid #e9e6e2"});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<901)nav.style.display="none"}));