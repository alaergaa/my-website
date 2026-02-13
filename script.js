const dict = {
  ar: {
    title: "مركز الارتقاء الطبي",
    subtitle: "رعاية طبية حديثة بثقة وخصوصية."
  },
  en: {
    title: "Medical Elevation Center",
    subtitle: "Modern care with trust & privacy."
  },
  he: {
    title: "מרכז ההתרוממות הרפואי",
    subtitle: "רפואה מודרנית באמון ובפרטיות."
  }
};

function setLang(lang){
  const rtl = (lang === "ar" || lang === "he");
  document.documentElement.lang = lang;
  document.documentElement.dir = rtl ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const value = dict?.[lang]?.[key];
    if (value) el.textContent = value;
  });

  document.querySelectorAll(".langchip").forEach(btn=>{
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  localStorage.setItem("site_lang", lang);
}

document.querySelectorAll(".langchip").forEach(btn=>{
  btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
});

/* Slider */
const track = document.getElementById("luxTrack");
const slides = Array.from(track.children);
const prev = document.getElementById("luxPrev");
const next = document.getElementById("luxNext");
const dotsWrap = document.getElementById("luxDots");

let index = 0;
let autoTimer = null;

function buildDots(){
  dotsWrap.innerHTML = "";
  slides.forEach((_, i)=>{
    const b = document.createElement("button");
    b.className = "luxDot" + (i===0 ? " is-active" : "");
    b.type = "button";
    b.setAttribute("aria-label", `Go to slide ${i+1}`);
    b.addEventListener("click", ()=> goTo(i, true));
    dotsWrap.appendChild(b);
  });
}

function update(){
  const dir = document.documentElement.dir; // rtl/ltr
  const sign = (dir === "rtl") ? 1 : -1; // translate direction
  track.style.transform = `translateX(${sign * index * 100}%)`;

  const dots = dotsWrap.querySelectorAll(".luxDot");
  dots.forEach((d,i)=> d.classList.toggle("is-active", i===index));
}

function goTo(i, user=false){
  index = (i + slides.length) % slides.length;
  update();
  if (user) restartAuto();
}

function restartAuto(){
  stopAuto();
  autoTimer = setInterval(()=> goTo(index+1), 3800);
}

function stopAuto(){
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = null;
}

prev.addEventListener("click", ()=> goTo(index-1, true));
next.addEventListener("click", ()=> goTo(index+1, true));

/* Touch swipe */
let startX = 0;
let dragging = false;

track.addEventListener("touchstart", (e)=>{
  dragging = true;
  startX = e.touches[0].clientX;
  stopAuto();
},{passive:true});

track.addEventListener("touchend", (e)=>{
  if (!dragging) return;
  dragging = false;
  const endX = (e.changedTouches[0] || e.touches[0]).clientX;
  const diff = endX - startX;
  if (Math.abs(diff) > 40){
    // natural swipe: right -> previous in LTR
    const dir = document.documentElement.dir;
    const isRTL = dir === "rtl";
    if (diff > 0) goTo(isRTL ? index+1 : index-1, true);
    else goTo(isRTL ? index-1 : index+1, true);
  } else {
    restartAuto();
  }
},{passive:true});

buildDots();
update();
restartAuto();

/* Init language */
setLang(localStorage.getItem("site_lang") || "ar");
