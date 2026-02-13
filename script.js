const dict = {
  ar: {
    title: "مركز الارتقاء الطبي",
    subtitle: "رعاية طبية حديثة بثقة وخصوصية.",
    lang_ar: "عربي",
    lang_en: "English",
    lang_he: "עברית",
    prevSlide: "الشريحة السابقة",
    nextSlide: "الشريحة التالية",
    sliderPagination: "التنقل بين الشرائح",
    goToSlide: "اذهب إلى الشريحة {n}"
  },
  en: {
    title: "Medical Elevation Center",
    subtitle: "Modern care with trust & privacy.",
    lang_ar: "Arabic",
    lang_en: "English",
    lang_he: "Hebrew",
    prevSlide: "Previous slide",
    nextSlide: "Next slide",
    sliderPagination: "Slider pagination",
    goToSlide: "Go to slide {n}"
  },
  he: {
    title: "מרכז ההתרוממות הרפואי",
    subtitle: "רפואה מודרנית באמון ובפרטיות.",
    lang_ar: "ערבית",
    lang_en: "אנגלית",
    lang_he: "עברית",
    prevSlide: "שקופית קודמת",
    nextSlide: "שקופית הבאה",
    sliderPagination: "ניווט בין שקופיות",
    goToSlide: "עבור לשקופית {n}"
  }
};

function t(lang, key, vars){
  let s = dict?.[lang]?.[key] || "";
  if (vars){
    for (const k in vars){
      s = s.replaceAll(`{${k}}`, String(vars[k]));
    }
  }
  return s;
}

function setLang(lang){
  const rtl = (lang === "ar" || lang === "he");
  document.documentElement.lang = lang;
  document.documentElement.dir = rtl ? "rtl" : "ltr";

  // Text
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const value = dict?.[lang]?.[key];
    if (value) el.textContent = value;
  });

  // ARIA labels
  document.querySelectorAll("[data-i18n-aria]").forEach(el=>{
    const key = el.getAttribute("data-i18n-aria");
    const value = dict?.[lang]?.[key];
    if (value) el.setAttribute("aria-label", value);
  });

  // Page title
  const pageTitle = dict?.[lang]?.title;
  if (pageTitle) document.title = pageTitle;

  document.querySelectorAll(".langchip").forEach(btn=>{
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  // Update dots aria labels
  const dots = document.querySelectorAll(".luxDot");
  dots.forEach((d,i)=>{
    d.setAttribute("aria-label", t(lang, "goToSlide", {n: i+1}));
  });

  localStorage.setItem("site_lang", lang);
}

document.querySelectorAll(".langchip").forEach(btn=>{
  btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
});
