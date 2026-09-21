// Dynamic Year[cite: 1]
document.getElementById("year").textContent = new Date().getFullYear();

// Responsive Mobile Menu Navigation[cite: 1]
const btn = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
btn?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "68px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px";
  nav.style.background = "#fff";
  nav.style.borderBottom = "1px solid #e9e6e2";
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  if (innerWidth < 901) nav.style.display = "none";
}));

// Lightbox Pop-up Feature for Machines and Samples
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-img");
const modalDetails = document.getElementById("lightbox-details");
const closeBtn = document.querySelector(".lightbox-close");
const backdrop = document.querySelector(".lightbox-backdrop");

function openLightbox(item) {
  const img = item.querySelector("img");
  if (!img) return;

  // Set the high-res image
  modalImg.src = img.src;
  modalImg.alt = img.alt || "Enlarged preview";

  // Check if item is a machine card (has .machine-info) or a sample figure (has figcaption)
  const machineInfo = item.querySelector(".machine-info");
  const figcaption = item.querySelector("figcaption");

  if (machineInfo) {
    modalDetails.innerHTML = machineInfo.innerHTML;
  } else if (figcaption) {
    const subtitle = figcaption.querySelector("span")?.textContent || "";
    const title = figcaption.querySelector("b")?.textContent || "";
    modalDetails.innerHTML = `
      <span style="font-size:11px;font-weight:800;letter-spacing:0.16em;color:var(--red);text-transform:uppercase;display:block;margin-bottom:6px;">${subtitle}</span>
      <h3 style="margin:0 0 10px;font-size:22px;">${title}</h3>
      <p style="color:#666;font-size:14px;line-height:1.5;">Custom-engineered printed laminated flexible pouch manufactured at Lalit Enterprises, Jalgaon.</p>
    `;
  } else {
    modalDetails.innerHTML = "";
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalImg.src = "";
}

// Attach click listeners to all items with data-lightbox
document.querySelectorAll("[data-lightbox]").forEach(element => {
  element.addEventListener("click", () => openLightbox(element));
});

// Close triggers: close button, background click, and Escape key
closeBtn?.addEventListener("click", closeLightbox);
backdrop?.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeLightbox();
  }
});
