// ===== i18n helper for runtime messages (do not translate user comments) =====
(function () {
  const KEY = "site_lang";
  window.__getLang = () => {
    const v = (localStorage.getItem(KEY) || "ar").toLowerCase();
    return (v === "ar" || v === "en" || v === "he") ? v : "ar";
  };
  window.__t = (key, fallback) => {
    try {
      const packs = window.__I18N;
      const lang = window.__getLang();
      if (packs && packs[lang] && packs[lang][key]) return packs[lang][key];
      if (packs && packs.ar && packs.ar[key]) return packs.ar[key];
    } catch (e) {}
    return fallback || "";
  };

  // Tiny formatter: supports {var} replacements
  window.__tf = (key, vars, fallback) => {
    let s = window.__t(key, fallback);
    try {
      if (vars && typeof vars === "object") {
        Object.keys(vars).forEach(k => {
          const val = String(vars[k]);
          s = s.replace(new RegExp("\\{"+k+"\\}", "g"), val);
        });
      }
    } catch(e){}
    return s;
  };

})();

const output = document.getElementById("output");

// قد يكون موجود/غير موجود حسب الأزرار
const btnFeatures = document.getElementById("btnFeatures");
const btnReviews  = document.getElementById("btnReviews");
const btnOrder    = document.getElementById("btnOrder");
const btnPrice    = document.getElementById("btnPrice");
const btnPrivacy  = document.getElementById("btnPrivacy");

// ✅ أزرار جديدة
const btnWarranty = document.getElementById("btnWarranty");
const btnRefund   = document.getElementById("btnRefund");

const orderForm = document.getElementById("orderForm");
const reviewsSection = document.getElementById("reviewsSection");
const aboutSection = document.getElementById("aboutSection");
const warrantyRefundSection = document.getElementById("warrantyRefundSection");
const privacySection = document.getElementById("privacySection");
const productInfoSection = document.getElementById("productInfoSection");
const infoBadgesWrap = document.getElementById("infoBadges");
const infoPanel = document.getElementById("infoPanel");
const infoPanelTitle = document.getElementById("infoPanelTitle");
const infoPanelText  = document.getElementById("infoPanelText");
const infoBadgeBtns = infoBadgesWrap ? Array.from(infoBadgesWrap.querySelectorAll(".infoBadge")) : [];

// ✅ معلومات المنتج: تفعيل شارات الفتح/الطي
let _activeInfoBadge = null;
function bindInfoBadges(){
  if(!infoBadgeBtns || !infoBadgeBtns.length) return;
  infoBadgeBtns.forEach(btn => {
    if(btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      // إذا ضغط نفس الشارة وهي مفتوحة: اطوِ اللوحة
      const isSame = (_activeInfoBadge === btn);
      const isOpen = infoPanel && infoPanel.classList.contains('open');
      if(isSame && isOpen){
        if(infoPanel) infoPanel.classList.remove('open');
        setActiveBadge(null);
        _activeInfoBadge = null;
        return;
      }
      _activeInfoBadge = btn;
      setActiveBadge(btn);
      renderInfoBadge(btn);
      openInfoPanel();
    });
  });
}



// الطلب
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const orderNotesInput = document.getElementById("orderNotes");
// ✅ جديد: الدولة + المدينة
const countrySelect = document.getElementById("country");
const cityInput = document.getElementById("city");
const qtyInput = document.getElementById("qty");
const priceHint = document.getElementById("priceHint");
const paySelect = document.getElementById("pay");
const submitOrder = document.getElementById("submitOrder");

// التعليقات
const reviewsList = document.getElementById("reviewsList");
const commentName = document.getElementById("commentName");
const replyText   = document.getElementById("replyText");
const sendReply   = document.getElementById("sendReply");
const policyDetails = document.getElementById("policyDetails");
const useLocationBtn = document.getElementById("useLocation");

// قسم الضمان والاسترداد
const refundName = document.getElementById("refundName");
const refundPhone = document.getElementById("refundPhone");
const refundReason = document.getElementById("refundReason");
const refundPhoto = document.getElementById("refundPhoto");
const submitRefund = document.getElementById("submitRefund");

// Custom file input UI (translatable)
const refundPhotoBtn = document.getElementById("refundPhotoBtn");
const refundPhotoName = document.getElementById("refundPhotoName");
if(refundPhotoBtn && refundPhoto){
  refundPhotoBtn.addEventListener('click', () => refundPhoto.click());
}
if(refundPhoto && refundPhotoName){
  const sync = () => {
    const f = refundPhoto.files && refundPhoto.files[0];
    refundPhotoName.textContent = f ? f.name : window.__t("fileNoChosen", "لم يتم تحديد أي ملف");
  };
  refundPhoto.addEventListener('change', sync);
  sync();
}



// ✅ نجوم التقييم قبل التعليق
const miniStarsWrap = document.getElementById("miniStars");
const miniStarBtns  = miniStarsWrap ? Array.from(miniStarsWrap.querySelectorAll(".miniStar")) : [];


// ✅ رابط سياسة الضمان والاسترداد داخل نموذج الطلب (يعمل حتى لو القسم مخفي)
const policyAnchor = document.querySelector(".policyAnchor");
if(policyAnchor){
  policyAnchor.addEventListener("click", (e) => {
    e.preventDefault();

    // افتح قسم الضمان والاسترداد
    if(typeof showWarrantyRefund === "function"){
      showWarrantyRefund();
    }else{
      // fallback: أظهر العنصر إن وُجد
      const sec = document.getElementById("warrantyRefundSection");
      if(sec) sec.classList.remove("hidden");
    }

    // فعّل الزر إن وُجد
    if(btnRefund) setActive(btnRefund);

    // مرّر ناعماً للقسم بعد إظهاره
    requestAnimationFrame(() => {
      const sec = document.getElementById("warrantyRefundSection");
      if(sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ===== Modal =====
const modal = document.getElementById("modal");
const modalOk = document.getElementById("modalOk");

// ✅ Loading (آخر إضافة: تأخير المودال)
const loading = document.getElementById("loading");

// ✅ تأثير active للأزرار (مثل أزرار التنقل)
function tapActive(btn){
  if(!btn) return;
  btn.classList.add("active");
  setTimeout(() => btn.classList.remove("active"), 450);
}

function showLoading(){
  if(!loading) return;
  loading.classList.remove("hidden");
  loading.setAttribute("aria-hidden","false");
  // ✅ سلاسة الظهور
  requestAnimationFrame(() => loading.classList.add("show"));
}
function hideLoading(){
  if(!loading) return;
  // ✅ سلاسة الإخفاء
  loading.classList.remove("show");
  setTimeout(() => {
    loading.classList.add("hidden");
    loading.setAttribute("aria-hidden","true");
  }, 250);
}
// ✅ لودينغ ثم مودال
function openModalWithDelay(title, text, delayMs = 2000){
  showLoading();
  setTimeout(() => {
    hideLoading();
    openModal(title, text);
  }, delayMs);
}

function openModal(title, text){
  modal.querySelector(".modalTitle").textContent = title;
  modal.querySelector(".modalText").innerHTML = text;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
  requestAnimationFrame(() => modal.classList.add("show"));
}

function closeModal(){
  modal.classList.remove("show");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden","true");
  }, 220);
}

// ✅ نفس الإغلاق لكن مع تأثير زر "حسناً"
modalOk.addEventListener("click", () => {
  tapActive(modalOk);
  closeModal();
});
modal.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});


// ===== Order Privacy Toggle (compact) =====
function syncOrderPrivacy(card){
  const more = card.querySelector(".orderPrivacyMore");
  const btn = card.querySelector(".orderPrivacyToggle");
  if(!more || !btn) return;
  if(card.classList.contains("open")){
    more.style.maxHeight = more.scrollHeight + "px";
    btn.setAttribute("aria-expanded","true");
    more.setAttribute("aria-hidden","false");
  }else{
    more.style.maxHeight = "0px";
    btn.setAttribute("aria-expanded","false");
    more.setAttribute("aria-hidden","true");
  }
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".orderPrivacyToggle");
  if(!btn) return;
  const card = btn.closest(".orderPrivacyCard");
  if(!card) return;
  card.classList.toggle("open");
  syncOrderPrivacy(card);
});

// ===== حفظ مكان السكرول حتى لا يطلع لفوق =====
function preserveScroll(fn){
  const y = window.scrollY;
  fn();
  requestAnimationFrame(() => window.scrollTo({ top: y }));
}

// ===== أنيميشن نص =====
function changeTextWithAnimation(text){
  output.classList.add("fade-out");
  setTimeout(() => {
    output.textContent = text;
    output.classList.remove("fade-out");
    output.classList.add("fade-in");
    setTimeout(() => output.classList.remove("fade-in"), 500);
  }, 220);
}

// ===== Active Button =====
const navButtons = document.querySelectorAll(".buttons button");
function setActive(btn){
  navButtons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// ===== إظهار/إخفاء أقسام =====
function hideAllSections(){
  if(orderForm) orderForm.classList.add("hidden");
  if(reviewsSection) reviewsSection.classList.add("hidden");
  if(aboutSection) aboutSection.classList.add("hidden");
  if(warrantyRefundSection) warrantyRefundSection.classList.add("hidden");
  if(privacySection) privacySection.classList.add("hidden");
  if(productInfoSection) productInfoSection.classList.add("hidden");
}


function showOrder(){
  hideAllSections();
  orderForm.classList.remove("hidden");
}

function showReviews(){
  hideAllSections();
  reviewsSection.classList.remove("hidden");
}


function showAbout(){
  hideAllSections();
  if(aboutSection) aboutSection.classList.remove("hidden");
}
function showWarrantyRefund(){
  hideAllSections();
  if(warrantyRefundSection) warrantyRefundSection.classList.remove("hidden");
}

function showProductInfo(){
  hideAllSections();
  if(productInfoSection) productInfoSection.classList.remove("hidden");
  bindInfoBadges();

  // افتح اللوحة افتراضياً على أول شارة
  if(infoBadgeBtns && infoBadgeBtns.length){
    const first = infoBadgeBtns[0];
    setActiveBadge(first);
    renderInfoBadge(first);
    openInfoPanel();
  }
}

function setActiveBadge(btn){
  if(!infoBadgeBtns) return;
  infoBadgeBtns.forEach(b => b.classList.remove("active"));
  if(btn) btn.classList.add("active");
}

function renderInfoBadge(btn){
  if(!btn) return;
  const title = btn.getAttribute("data-title") || btn.textContent.trim();
  const text  = btn.getAttribute("data-text")  || "";
  if(infoPanelTitle) infoPanelTitle.textContent = title;
  if(infoPanelText)  infoPanelText.textContent  = text;
}

function openInfoPanel(){
  if(!infoPanel) return;
  infoPanel.classList.add("open");
}

function showPrivacy(){
  hideAllSections();
  if(privacySection) privacySection.classList.remove("hidden");
}



// ✅ زر "قدّم طلب استرداد" داخل القسم الحديث
const wrGoRefund = document.getElementById("wrGoRefund");
const refundFormCard = document.getElementById("refundFormCard");
if(wrGoRefund){
  wrGoRefund.addEventListener("click", () => {
    tapActive(wrGoRefund);
    // افتح القسم إن كان مخفيًا
    if(warrantyRefundSection) warrantyRefundSection.classList.remove("hidden");
    requestAnimationFrame(() => {
      const target = refundFormCard || document.getElementById("refundForm");
      if(target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}



// ===== السلايدر =====
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");
const slideItems = slides ? Array.from(slides.children) : [];
let current = 0;
let autoTimer = null;
let isAnimating = false;

function setDots(){
  dots.forEach(d => d.classList.remove("active"));
  if(dots[current]) dots[current].classList.add("active");
}

function hideAllSlides(){
  slideItems.forEach(el => {
    el.classList.remove("is-active","from-left","from-right","to-left","to-right");
    el.style.display = "none";
    el.setAttribute("aria-hidden","true");
  });
}

function showInitial(){
  if(!slideItems.length) return;
  hideAllSlides();
  current = 0;
  const first = slideItems[0];
  first.style.display = "flex";
  first.classList.add("is-active");
  first.setAttribute("aria-hidden","false");
  setDots();
}

function goToSlide(i){
  const n = slideItems.length;
  if(!n) return;
  const nextIndex = ((i % n) + n) % n;
  if(nextIndex === current || isAnimating) return;

  isAnimating = true;

  const prevIndex = current;
  const prevEl = slideItems[prevIndex];
  const nextEl = slideItems[nextIndex];

  // نظّف الشرائح الأخرى (لا نلمس غير السلايدر)
  slideItems.forEach((el, idx) => {
    if(idx !== prevIndex && idx !== nextIndex){
      el.classList.remove("is-active","from-left","from-right","to-left","to-right");
      el.style.display = "none";
      el.setAttribute("aria-hidden","true");
    }
  });

  // تحديد الاتجاه (التالي/السابق) بشكل منطقي حتى مع القفز عبر النقاط
  const forwardSteps = (nextIndex - prevIndex + n) % n;
  const backwardSteps = (prevIndex - nextIndex + n) % n;
  const isForward = forwardSteps <= backwardSteps;

  const exitClass  = isForward ? "to-left"   : "to-right";
  const enterClass = isForward ? "from-right": "from-left";

  // جهّز العرض
  prevEl.style.display = "flex";
  nextEl.style.display = "flex";
  nextEl.classList.remove("to-left","to-right","from-left","from-right","is-active");
  prevEl.classList.remove("to-left","to-right");

  nextEl.classList.add(enterClass);
  // reflow لضمان تطبيق التحريك
  nextEl.getBoundingClientRect();

  nextEl.classList.add("is-active");
  nextEl.setAttribute("aria-hidden","false");

  prevEl.classList.add(exitClass);

  // حدّث النقاط فوراً
  current = nextIndex;
  setDots();

  // بعد انتهاء الانيميشن نخفي السابقة
  setTimeout(() => {
    prevEl.classList.remove("is-active","to-left","to-right");
    prevEl.style.display = "none";
    prevEl.setAttribute("aria-hidden","true");

    nextEl.classList.remove("from-left","from-right");
    isAnimating = false;
  }, 480);
}

function nextSlide(){
  if(!slideItems.length) return;
  goToSlide(current + 1);
}

function prevSlide(){
  if(!slideItems.length) return;
  goToSlide(current - 1);
}

function startAuto(){
  stopAuto();
  if(slideItems.length <= 1) return;
  autoTimer = setInterval(nextSlide, 4500);
}
function stopAuto(){
  if(autoTimer){
    clearInterval(autoTimer);
    autoTimer = null;
  }
}

dots.forEach((d, idx) => {
  d.addEventListener("click", () => {
    stopAuto();
    goToSlide(idx);
    startAuto();
  });
});

// الأسهم (إن وجدت)
const prevBtn = document.querySelector(".carousel .prev");
const nextBtn = document.querySelector(".carousel .next");
if(prevBtn) prevBtn.addEventListener("click", () => { stopAuto(); prevSlide(); startAuto(); });
if(nextBtn) nextBtn.addEventListener("click", () => { stopAuto(); nextSlide(); startAuto(); });

// تشغيل أولي
showInitial();
startAuto();


// ===== التقييم (متجر بلاي ستايل) =====
const starsWrap = document.getElementById("stars");
const starBtns = Array.from(document.querySelectorAll(".star"));
const ratingOverlay = document.getElementById("ratingOverlay");
const ratingValueEl = document.getElementById("ratingValue");

const RATED_KEY = "demo_rated_once";
const RATED_VALUE_KEY = "demo_rated_value";

// ✅ جديد: مصدر التقييم (top / mini)
const RATED_SOURCE_KEY = "demo_rated_source";

// ✅ تقييم وهمي ثابت يظهر دائمًا فوق الصورة
const FAKE_AVG_RATING = 4.5;
if(ratingValueEl) ratingValueEl.textContent = FAKE_AVG_RATING.toFixed(1);

// ✅ جديد: إظهار/إخفاء miniStars حسب مصدر التقييم
function updateMiniStarsVisibility(){
  if(!miniStarsWrap) return;

  const ratedOnce = localStorage.getItem(RATED_KEY) === "1";
  const source = localStorage.getItem(RATED_SOURCE_KEY); // "top" أو "mini"

  // نخفي تقييم قبل التعليق فقط إذا التقييم تم من الأعلى
  const shouldHide = ratedOnce && source === "top";

  // نخفي أقرب بلوك أو نفس العنصر
  const block = miniStarsWrap.closest(".rateBeforeComment") || miniStarsWrap;
  block.style.display = shouldHide ? "none" : "";
}

// عرض تقييم المستخدم إذا سبق قيّم
let savedRating = Number(localStorage.getItem(RATED_VALUE_KEY) || "0");
let locked = localStorage.getItem(RATED_KEY) === "1";

/* ✅ تعديل: دعم نصف نجمة + preview */
function paintStars(n, mode="on"){
  const full = Math.floor(n);
  const hasHalf = (n - full) >= 0.5;

  starBtns.forEach(btn => {
    const s = Number(btn.dataset.star);
    btn.classList.remove("on","preview","half");

    // أثناء preview نخليه نجوم كاملة فقط
    if(mode === "preview"){
      if(s <= n) btn.classList.add("preview");
      return;
    }

    // العادي (on / half)
    if(s <= full){
      btn.classList.add("on");
    }else if(hasHalf && s === full + 1){
      btn.classList.add("half");
    }
  });
}

// ✅ رسم نجوم miniStars
function paintMiniStars(n, mode="on"){
  if(!miniStarBtns.length) return;
  miniStarBtns.forEach(btn => {
    const s = Number(btn.dataset.star);
    btn.classList.remove("on","preview");
    if(s <= n){
      btn.classList.add(mode === "preview" ? "preview" : "on");
    }
  });
}

function lockStars(){
  locked = true;
  localStorage.setItem(RATED_KEY, "1");
  starBtns.forEach(b => b.disabled = true);
  if(miniStarBtns.length) miniStarBtns.forEach(b => b.disabled = true);
  starsWrap.classList.add("locked");
}

function unlockStars(){
  locked = false;
  localStorage.removeItem(RATED_KEY);
  starBtns.forEach(b => b.disabled = false);
  if(miniStarBtns.length) miniStarBtns.forEach(b => b.disabled = false);
}

function applyRatingUI(val){
  // ✅ ملاحظة: لا نغيّر الرقم فوق الصورة أبداً (يبقى 4.5)
  paintStars(val, "on");
  paintMiniStars(val, "on");
}

/* ✅ جديد: إذا ما في تقييم مستخدم → اعرض 4.5 نجمة افتراضيًا */
if(savedRating > 0){
  applyRatingUI(savedRating);
}else{
  paintStars(FAKE_AVG_RATING, "on");
}
if(locked){
  lockStars();
}
updateMiniStarsVisibility();
  updatePriceHint();

// ===== نجوم التقييم أعلى الصورة =====
starBtns.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    if(locked) return;
    paintStars(Number(btn.dataset.star), "preview");
  });

  btn.addEventListener("mouseleave", () => {
    if(locked) return;
    if(savedRating > 0) paintStars(savedRating, "on");
    else paintStars(FAKE_AVG_RATING, "on"); // ✅ يرجع لـ 4.5 بدل ما يصير 0
  });

  btn.addEventListener("click", () => {
    if(locked) return;

    const chosen = Number(btn.dataset.star);
    savedRating = chosen;
    localStorage.setItem(RATED_VALUE_KEY, String(chosen));

    // ✅ جديد: هذا التقييم جاء من الأعلى
    localStorage.setItem(RATED_SOURCE_KEY, "top");

    // حركة: اختفاء بطيء ثم ظهور بطيء
    starsWrap.classList.remove("fadeIn");
    starsWrap.classList.add("fadeOut");
    setTimeout(() => {
      applyRatingUI(chosen);
      starsWrap.classList.remove("fadeOut");
      starsWrap.classList.add("fadeIn");
      setTimeout(() => starsWrap.classList.remove("fadeIn"), 420);
    }, 320);

    // ✅ مودال شكر (بتأخير ثانيتين)
    openModalWithDelay(window.__t("modalRateTitle","⭐ شكراً لتقييمك"), window.__tf("modalRateBody",{stars: chosen},"تم تسجيل تقييمك بنجاح.<br>تقييمك: <b>{stars}</b> نجوم"), 2000);

    lockStars();

    // ✅ جديد: حدّث إخفاء miniStars
    updateMiniStarsVisibility();
  });
});

// ===== ✅ نجوم "قم بالتقييم قبل التعليق" (miniStars) =====
if(miniStarBtns.length){
  miniStarBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      if(locked) return;
      paintMiniStars(Number(btn.dataset.star), "preview");
    });

    btn.addEventListener("mouseleave", () => {
      if(locked) return;
      if(savedRating > 0) paintMiniStars(savedRating, "on");
      else paintMiniStars(0, "on");
    });

    btn.addEventListener("click", () => {
      if(locked) return;

      const chosen = Number(btn.dataset.star);
      savedRating = chosen;
      localStorage.setItem(RATED_VALUE_KEY, String(chosen));

      // ✅ جديد: هذا التقييم جاء من miniStars
      localStorage.setItem(RATED_SOURCE_KEY, "mini");

      // حركة اختفاء/ظهور للـ miniStars + نجوم الأعلى
      starsWrap.classList.remove("fadeIn");
      starsWrap.classList.add("fadeOut");
      setTimeout(() => {
        applyRatingUI(chosen);
        starsWrap.classList.remove("fadeOut");
        starsWrap.classList.add("fadeIn");
        setTimeout(() => starsWrap.classList.remove("fadeIn"), 420);
      }, 320);

      // ✅ مودال شكر (بتأخير ثانيتين)
      openModalWithDelay(window.__t("modalRateTitle","⭐ شكراً لتقييمك"), window.__tf("modalRateBody",{stars: chosen},"تم تسجيل تقييمك بنجاح.<br>تقييمك: <b>{stars}</b> نجوم"), 2000);

      lockStars();

      // ✅ جديد: حدّث إخفاء miniStars (لن يُخفى لأنه source=mini)
      updateMiniStarsVisibility();
    });
  });
}

// ===== آراء وهمية (عصرية) =====
const fakeReviews = [
  { name:"سارة", stars:5, time:"قبل ساعة", text:"منتج ممتاز جدًا! الجودة أعلى من المتوقع والتوصيل سريع." },
  { name:"أحمد", stars:4, time:"اليوم", text:"جميل وسهل الاستخدام، أنصح به خصوصًا لمن يريد شيء عملي." },
  { name:"مريم", stars:5, time:"أمس", text:"تجربة رائعة! الشكل أنيق والنتيجة ممتازة." },
  { name:"خالد", stars:4, time:"قبل يومين", text:"السعر مناسب مقارنة بالجودة، خدمة ممتازة." }
];

function starsText(n){
  let html = "";
  for(let i=1;i<=5;i++){
    html += `<span class="${i<=n ? "on":"off"}">★</span>`;
  }
  return html;
}

function firstLetter(name){
  const t = (name || "").trim();
  return t ? t[0] : "م";
}


function renderFakeReviews(){
  reviewsList.innerHTML = fakeReviews.map((r, idx) => {
    const replies = Array.isArray(r.replies) ? r.replies : [];
    const repliesHtml = replies.map(entry => {
      const rName = (typeof entry === "object" && entry && entry.name ? String(entry.name).trim() : "") || "زائر";
      const txt = (typeof entry === "object" && entry && "text" in entry ? String(entry.text || "") : String(entry || "")).trim();
      const rLetter = firstLetter(rName);
      return `
      <div class="replyCard">
        <div class="replyAvatar">${rLetter}</div>
        <div class="replyBody">
          <div class="replyTop">
            <div class="replyName">${rName}</div>
          </div>
          <div class="replyText">${txt}</div>
        </div>
      </div>
      `;
    }).join("");

    return `
    <div class="reviewItem" data-idx="${idx}">
      <div class="reviewBody">
        <div class="reviewTop">
          <div class="reviewUser">
            <div class="avatar">${firstLetter(r.name)}</div>
            <div class="reviewName">${r.name}</div>
          </div>
          <div class="reviewTime">${r.time}</div>
        </div>

        <div class="reviewStars">${starsText(r.stars)}</div>
        <div class="reviewText">${r.text}</div>

        <div class="repliesWrap">${repliesHtml}</div>

        <div class="replyToggle" data-action="toggleReply">${window.__t("commentsAddReply", "إضافة رد")}</div>

        <div class="replyBox" data-replybox style="display:none">
          <input class="replyNameInput" type="text" placeholder="${window.__t("replyNameOptionalPh", "الاسم (اختياري)")}" />
          <textarea class="replyInput" placeholder="${window.__t("replyTextPh", "اكتب ردك...")}" rows="3"></textarea>
          <button class="replySend" type="button" data-action="sendReply" aria-label="${window.__t("commentsSend", "إرسال")}">➤</button>
        </div>
      </div>
    </div>
    `;
  }).join("");
}

renderFakeReviews();

// ===== الردود على التعليقات (بدون اسم) =====
reviewsList.addEventListener("click", (e) => {
  const toggle = e.target.closest("[data-action='toggleReply']");
  const send = e.target.closest("[data-action='sendReply']");
  const item = e.target.closest(".reviewItem");
  if(!item) return;

  const idx = Number(item.dataset.idx || "0");
  const replyBox = item.querySelector("[data-replybox]");
  const nameInput = item.querySelector(".replyNameInput");
  const input = item.querySelector(".replyInput");

  if(toggle){
    if(replyBox){
      const isHidden = replyBox.style.display === "none" || !replyBox.style.display;
      replyBox.style.display = isHidden ? "flex" : "none";
      if(isHidden){
        if(nameInput) nameInput.focus();
        else if(input) input.focus();
      }
    }
    return;
  }

  if(send){
    const text = (input?.value || "").trim();
    if(!text) return;

    if(!Array.isArray(fakeReviews[idx].replies)) fakeReviews[idx].replies = [];
    const rName = (nameInput?.value || "").trim() || "زائر";
    fakeReviews[idx].replies.push({ name: rName, text });

    // تفريغ الحقل وإغلاقه
    if(nameInput) nameInput.value = "";
    if(input) input.value = "";
    if(replyBox) replyBox.style.display = "none";

    // مودال الرد (بتأخير ثانيتين)
    openModalWithDelay(window.__t("modalReplyTitle", "↩️ تم إرسال الرد"), window.__t("modalReplyText", "تم إضافة ردك بنجاح."), 2000);

    renderFakeReviews();
  }
});


// ===== أزرار التنقل =====
if(btnFeatures){
  btnFeatures.addEventListener("click", () => preserveScroll(() => {
    setActive(btnFeatures);
    hideAllSections();
    changeTextWithAnimation(window.__t("hintFeatures", "ميزات المنتج: سريع، خفيف، سهل الاستخدام."));
  }));
}

btnReviews.addEventListener("click", () => preserveScroll(() => {
  setActive(btnReviews);
  showReviews();
  changeTextWithAnimation(window.__t("hintReviews", "آراء العملاء: يمكنك قراءة التقييمات وإضافة تعليقك بالأسفل."));
}));

btnPrice.addEventListener("click", () => preserveScroll(() => {
  setActive(btnPrice);
  changeTextWithAnimation(window.__t("hintProductInfo", "معلومات المنتج: اضغط على أي شارة لعرض التفاصيل."));
  showProductInfo();
}));

// ===== انتقال سريع إلى قسم فوائد المنتج (من سلايدر الأعلى) =====
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-jump='benefits']");
  if(!el) return;
  e.preventDefault();
  try{ tapActive(el); }catch(_){/* ignore */}

  // بدون preserveScroll حتى لا يرجع لفوق
  setActive(btnPrice);
  changeTextWithAnimation(window.__t("hintProductInfo", "معلومات المنتج: اضغط على أي شارة لعرض التفاصيل."));
  showProductInfo();

  requestAnimationFrame(() => {
    if(productInfoSection) productInfoSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

btnPrivacy.addEventListener("click", () => preserveScroll(() => {
  setActive(btnPrivacy);
  showPrivacy();
  changeTextWithAnimation(window.__t("hintPrivacy", "الخصوصية: نلتزم بتغليف محايد وحماية بياناتك."));
}));

btnOrder.addEventListener("click", () => preserveScroll(() => {
  setActive(btnOrder);
  showOrder();
  changeTextWithAnimation(window.__t("hintOrder", "املأ نموذج الطلب بالأسفل ثم اضغط إرسال الطلب."));
}));

if(btnWarranty){
  btnWarranty.addEventListener("click", () => preserveScroll(() => {
    setActive(btnWarranty);
    showAbout();
    changeTextWithAnimation(window.__t("hintAbout", "من نحن: مركز الارتقاء الطبي."));
  }));
}
if(btnRefund){
  btnRefund.addEventListener("click", () => preserveScroll(() => {
    setActive(btnRefund);
    showWarrantyRefund();
    changeTextWithAnimation(window.__t("hintWarrantyRefund", "الضمان والاسترداد: يمكنك الاطلاع على التفاصيل وتقديم طلب استرداد."));
  }));
}
// ===== تقييد رقم الهاتف: أرقام فقط + 10 أرقام =====
phoneInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});

// ===== مساعد أخطاء الحقول =====
function markError(el){
  el.classList.add("fieldError");
  setTimeout(() => el.classList.remove("fieldError"), 900);
}

// ===== سعر حسب الكمية (يظهر فوق زر الإرسال) =====
function updatePriceHint(){
  if(!priceHint || !qtyInput) return;

  const q = Number(qtyInput.value || "0");
  if(!q){
    priceHint.textContent = "";
    priceHint.classList.add("hidden");
    return;
  }

  const price = (q === 1) ? 200 : (q === 2) ? 300 : 400;
  priceHint.textContent = window.__t("priceHintTpl", `السعر  شيكل شامل التوصيل`).replace("{price}", price);
  priceHint.classList.remove("hidden");
}

if(qtyInput){
  qtyInput.addEventListener("change", updatePriceHint);
}

// ===== إرسال الطلب =====
submitOrder.addEventListener("click", () => {
  tapActive(submitOrder);

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput.value.trim();
  const country = countrySelect ? countrySelect.value : "";
  const city = cityInput ? cityInput.value.trim() : "";
  const qty = qtyInput.value;
  const pay = paySelect.value;
  const notes = orderNotesInput ? orderNotesInput.value.trim() : "";

  if(!name){
    markError(nameInput);
    changeTextWithAnimation(window.__t("msgFillName", "رجاءً املأ الاسم."));
    return;
  }
  if(countrySelect && !country){
    markError(countrySelect);
    changeTextWithAnimation(window.__t("msgChooseCountry", "رجاءً اختر الدولة."));
    return;
  }
  if(cityInput && !city){
    markError(cityInput);
    changeTextWithAnimation(window.__t("msgFillCity", "رجاءً اكتب المدينة."));
    return;
  }
  if(!qty){
    markError(qtyInput);
    changeTextWithAnimation(window.__t("msgChooseQty", "رجاءً اختر الكمية."));
    return;
  }
  if(!address){
    markError(addressInput);
    changeTextWithAnimation(window.__t("msgFillAddress", "رجاءً املأ العنوان."));
    return;
  }
  if(phone.replace(/\D/g,"").length < 10){
    markError(phoneInput);
    changeTextWithAnimation(window.__t("msgPhoneInvalid", "رقم الهاتف غير صحيح."));
    return;
  }

  hideAllSections();

  
  function buildOrderModalHTML(data){
    const lang = window.__getLang ? window.__getLang() : "ar";
    const payLabel = (data.pay === "cash") ? window.__t("payCash","عند الاستلام") : window.__t("payCard","بطاقة");
    const rows = [];
    rows.push(`<b>${window.__t("fieldName","الاسم")}:</b> ${data.name}`);
    rows.push(`<b>${window.__t("fieldPhone","الهاتف")}:</b> ${data.phone}`);
    if(data.country) rows.push(`<b>${window.__t("fieldCountry","الدولة")}:</b> ${data.country}`);
    if(data.city) rows.push(`<b>${window.__t("fieldCity","المدينة")}:</b> ${data.city}`);
    rows.push(`<b>${window.__t("fieldAddress","العنوان")}:</b> ${data.address}`);
    rows.push(`<b>${window.__t("fieldQty","الكمية")}:</b> ${data.qty}`);
    rows.push(`<b>${window.__t("fieldPay","الدفع")}:</b> ${payLabel}`);
    if(data.notes) rows.push(`<b>${window.__t("fieldNotes","ملاحظات")}:</b> ${data.notes}`);
    const delivery = window.__t("modalOrderDelivery","سيتم توصيل طلبك خلال <b>48 ساعة</b>.");
    return `${delivery}<br><br>` + rows.join("<br>");
  }

// ✅ مودال الطلب (بتأخير ثانيتين)
  openModalWithDelay(window.__t("modalOrderTitle","✅ تم استلام طلبك"), buildOrderModalHTML({name,phone,country,city,address,qty,pay,notes}), 2000);

  changeTextWithAnimation(window.__t("msgOrderReceived", "تم استلام طلبك ✅ شكراً لك."));
});

const COMMENTED_KEY = "demo_commented_once";


// ===== زر "تفاصيل" في نموذج الطلب =====
if(policyDetails){
  policyDetails.addEventListener("click", () => {
    if(btnRefund){
      setActive(btnRefund);
      showWarrantyRefund();
    }
    // سكرول للقسم
    setTimeout(() => {
      warrantyRefundSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  });
}

// ===== زر "استخدم موقعي" =====
if(useLocationBtn && navigator.geolocation){
  useLocationBtn.addEventListener("click", () => {
    tapActive(useLocationBtn);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(5);
        const lng = pos.coords.longitude.toFixed(5);
        // تعبئة تقريبية (يمكنك لاحقًا ربطه بخدمة خرائط)
        addressInput.value = `موقعي التقريبي: ${lat}, ${lng}`;
        openModalWithDelay(window.__t("modalGeoOkTitle","📍 تم تحديد الموقع"), window.__t("modalGeoOkBody","تم إدراج موقعك التقريبي في العنوان."), 1200);
      },
      () => openModalWithDelay(window.__t("modalGeoFailTitle","⚠️ تعذر تحديد الموقع"), window.__t("modalGeoFailBody","يرجى السماح بالوصول للموقع أو اكتب العنوان يدويًا."), 1200),
      { enableHighAccuracy: false, timeout: 8000 }
    );
  });
}

// ===== Accordion (بطاقات بسهم) =====
document.addEventListener("click", (e) => {
  const header = e.target.closest(".accHeader");
  if(!header) return;
  const item = header.closest(".accItem");
  const body = item?.querySelector(".accBody");
  if(!item || !body) return;

  const isOpen = item.classList.contains("open");
  // أغلق الكل داخل نفس الـ accordion
  const wrap = item.closest(".accordion");
  if(wrap){
    wrap.querySelectorAll(".accItem").forEach(it => {
      it.classList.remove("open");
      const b = it.querySelector(".accBody");
      if(b) b.style.maxHeight = "0px";
    });
  }
  if(!isOpen){
    item.classList.add("open");
    body.style.maxHeight = body.scrollHeight + "px";
  }
});

// ===== إرسال طلب الاسترداد =====
if(submitRefund){
  submitRefund.addEventListener("click", () => {
    tapActive(submitRefund);

    const n = (refundName?.value || "").trim();
    const p = (refundPhone?.value || "").trim().replace(/\D/g,"");
    const r = (refundReason?.value || "").trim();

    if(!n){ if(refundName) markError(refundName); return; }
    if(!p){ if(refundPhone) markError(refundPhone); return; }
    if(!r){ if(refundReason) markError(refundReason); return; }

    openModalWithDelay(window.__t("modalRefundTitle","✅ تم إرسال الطلب"), window.__t("modalRefundBody","تم استلام طلب الاسترداد وسيتم التواصل معك قريبًا."), 2000);

    if(refundName) refundName.value = "";
    if(refundPhone) refundPhone.value = "";
    if(refundReason) refundReason.value = "";
    if(refundPhoto) refundPhoto.value = "";
  });
}


// ===== إرسال تعليق (الاسم مطلوب + لازم تقييم + ربط التقييم بالتعليق) =====
sendReply.addEventListener("click", () => {
  tapActive(sendReply);

  const n = commentName.value.trim();
  const text = replyText.value.trim();

  if(!n){
    markError(commentName);
    changeTextWithAnimation(window.__t("msgWriteNameThenComment", "اكتب اسمك ثم التعليق."));
    return;
  }
  if(!text){
    markError(replyText);
    changeTextWithAnimation(window.__t("msgWriteCommentThenSend", "اكتب تعليقك ثم اضغط إرسال."));
    return;
  }

  const ratedVal = Number(localStorage.getItem(RATED_VALUE_KEY) || "0");
  const ratedOnce = localStorage.getItem(RATED_KEY) === "1";

  if(!ratedOnce || ratedVal <= 0){
    ratingOverlay.classList.add("shake");
    setTimeout(() => ratingOverlay.classList.remove("shake"), 350);
    openModalWithDelay(window.__t("modalRateReqTitle","⭐ التقييم مطلوب"), window.__t("modalRateReqBody","رجاءً قم باختيار تقييم بالنجوم قبل إرسال التعليق."), 800);
    changeTextWithAnimation(window.__t("msgRateBeforeComment", "قيّم المنتج بالنجوم ثم اكتب تعليقك."));
    return;
  }

  fakeReviews.unshift({
    name: n,
    stars: ratedVal,
    time: "الآن",
    text
  });

  renderFakeReviews();

  commentName.value = "";
  replyText.value = "";

  // ✅ تعليق مرة واحدة فقط
  localStorage.setItem(COMMENTED_KEY, "1");
  const formWrap = document.getElementById("commentFormWrap");
  if(formWrap) formWrap.style.display = "none";

  // ✅ مودال التعليق (بتأخير ثانيتين)
  openModalWithDelay(window.__t("modalCommentTitle", "💬 تم إضافة تعليقك"), window.__t("modalCommentText", "شكراً <b>{name}</b>! تم نشر تعليقك بنجاح.").replace("{name}", n), 2000);

  changeTextWithAnimation(window.__t("msgCommentSent", "تم إرسال تعليقك ✅ شكراً لك."));
});

// ✅ عند فتح الصفحة: تفعيل زر آراء العملاء تلقائياً
window.addEventListener("load", () => {
  setActive(btnReviews);
  showReviews();
  changeTextWithAnimation(window.__t("hintReviews", "آراء العملاء: يمكنك قراءة التقييمات وإضافة تعليقك بالأسفل."));
  updateMiniStarsVisibility();

  // ✅ عروض 24 ساعة (عداد يعيد تلقائياً)
  initOfferCountdown();

  // ✅ إظهار أقسام الأكوردين المفتوحة افتراضياً (خصوصاً نموذج الاسترداد)
  document.querySelectorAll(".accItem.open .accBody").forEach(body => {
    body.style.maxHeight = body.scrollHeight + "px";
  });

  // ✅ تأكيد إظهار نجوم 4.5 عند البداية إذا ما في تقييم مستخدم
  if(!locked && savedRating <= 0){
    paintStars(FAKE_AVG_RATING, "on");
  }
});

// =========================
// Offers Countdown (24h)
// =========================
function initOfferCountdown(){
  const countdownEls = Array.from(document.querySelectorAll(".offerCountdown"));
  if(!countdownEls.length) return;

  const KEY = "demo_offer_end_ms";
  const DAY = 24 * 60 * 60 * 1000;

  function getEnd(){
    const saved = Number(localStorage.getItem(KEY) || "0");
    const now = Date.now();
    if(saved && saved > now) return saved;
    const fresh = now + DAY;
    localStorage.setItem(KEY, String(fresh));
    return fresh;
  }

  function pad2(n){ return String(n).padStart(2,"0"); }

  let end = getEnd();

  function tick(){
    const now = Date.now();
    let diff = end - now;

    // إذا انتهى العرض: أعِد ضبطه 24 ساعة تلقائياً
    if(diff <= 0){
      end = now + DAY;
      localStorage.setItem(KEY, String(end));
      diff = end - now;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const fmt = `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
    countdownEls.forEach(el => el.textContent = fmt);
  }

  tick();
  setInterval(tick, 1000);
}


/* ===== Warranty/Refund: make .wrSub collapsible (one open at a time per card) ===== */
document.addEventListener("DOMContentLoaded", () => {
  bindInfoBadges();
  // روابط السياسات أسفل معلومات المنتج
  const policyLinkWarranty = document.getElementById("policyLinkWarranty");
  const policyLinkPrivacy  = document.getElementById("policyLinkPrivacy");
  if(policyLinkWarranty){
    policyLinkWarranty.addEventListener("click", () => {
      if(btnRefund) btnRefund.click();
    });
  }
  if(policyLinkPrivacy){
    policyLinkPrivacy.addEventListener("click", () => {
      if(btnPrivacy) btnPrivacy.click();
    });
  }

  const subs = Array.from(document.querySelectorAll(".wrCard .wrSub"));
  if (!subs.length) return;

  // Wrap bodies once
  subs.forEach(sub => {
    if (sub.querySelector(".wrSubBody")) return;

    const title = sub.querySelector(".wrSubTitle");
    if (!title) return;

    const body = document.createElement("div");
    body.className = "wrSubBody";

    // move all nodes after title into body
    const nodes = [];
    let n = title.nextSibling;
    while (n) {
      const next = n.nextSibling;
      nodes.push(n);
      n = next;
    }
    nodes.forEach(node => body.appendChild(node));
    sub.appendChild(body);

    // accessibility
    title.setAttribute("role", "button");
    title.setAttribute("tabindex", "0");
  });

  const closeSub = (sub) => {
    sub.classList.remove("open");
    const body = sub.querySelector(".wrSubBody");
    if (body) body.style.maxHeight = null;
  };

  const openSub = (sub) => {
    sub.classList.add("open");
    const body = sub.querySelector(".wrSubBody");
    if (body) body.style.maxHeight = body.scrollHeight + "px";
  };

  const toggle = (sub) => {
    const card = sub.closest(".wrCard");
    // close others in same card
    card?.querySelectorAll(".wrSub.open").forEach(other => {
      if (other !== sub) closeSub(other);
    });

    if (sub.classList.contains("open")) closeSub(sub);
    else openSub(sub);
  };

  document.querySelectorAll(".wrCard .wrSubTitle").forEach(title => {
    const sub = title.closest(".wrSub");
    if (!sub) return;

    title.addEventListener("click", () => toggle(sub));
    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(sub); }
    });
  });
});



// ===== About accordion (scoped) =====
(function initAboutAccordion(){
  const run = () => {
    const about = document.getElementById("aboutSection");
    if(!about) return;

    const headers = about.querySelectorAll(".aboutAccH");
    const bodies  = about.querySelectorAll(".aboutAccB");
    if(!headers.length || headers.length !== bodies.length) return;

    const closeAllExcept = (keepIndex) => {
      headers.forEach((h, i) => {
        if(i !== keepIndex){
          h.classList.remove("isOpen");
          h.setAttribute("aria-expanded","false");
          bodies[i].style.maxHeight = null;
          bodies[i].setAttribute("aria-hidden","true");
        }
      });
    };

    headers.forEach((h, i) => {
      h.addEventListener("click", () => {
        const isOpen = h.classList.contains("isOpen");
        closeAllExcept(i);

        if(isOpen){
          h.classList.remove("isOpen");
          h.setAttribute("aria-expanded","false");
          bodies[i].style.maxHeight = null;
          bodies[i].setAttribute("aria-hidden","true");
        }else{
          h.classList.add("isOpen");
          h.setAttribute("aria-expanded","true");
          bodies[i].setAttribute("aria-hidden","false");
          bodies[i].style.maxHeight = bodies[i].scrollHeight + "px";
        }
      });
    });
  };

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", run);
  }else{
    run();
  }
})();


// ===== شاشة ترحيب لمدة ثانيتين (بدون لمس أي شيء آخر) =====
(function(){
  const splash = document.getElementById("welcomeSplash");
  if(!splash) return;

  // اختفاء بعد ثانيتين
  setTimeout(() => {
    splash.classList.add("hide");
    setTimeout(() => { try{ splash.remove(); }catch(e){} }, 450);
  }, 2000);
})();




// ===== Language chips (UI translation: AR / EN / HE) =====
document.addEventListener("DOMContentLoaded", () => {
  const chips = Array.from(document.querySelectorAll(".lang-chip"));
  if (!chips.length) return;

    const I18N = {
    ar: {
      dir: "rtl",
      lang: "ar",

      // Brand
      centerName: "مركز الارتقاء الطبي",
      tagline: "صحة أفضل، حياة أجمل",

      // Welcome
      welcomeTitle: "أهلاً وسهلاً بكم في مركز الارتقاء الطبي",
      welcomeSub: "نجهّز لك الصفحة…",

      // Slider
      heroTitle: "مركز الارتقاء الطبي",
      slideBenefitsTitle: "فوائد المنتج",
      slideBenefitsText: "تركيبة تساعد على تعزيز الإحساس بالراحة والثبات، وتدعم التركيز وتقليل التوتر بما ينعكس على جودة التجربة.",
      slideBenefitsMore: "للمزيد اذهب لقسم فوائد المنتج",

      slideHowTitle: "طريقة الاستخدام",
      slideHowText: "ضع كمية مناسبة ووزّعها بلطف وبشكل متساوٍ على موضع الاستخدام، ثم اتركها مدة لا تقل عن 15 دقيقة قبل البدء.",
      slideHowHint: "ابدأ بكمية قليلة ثم عدّل تدريجيًا حسب الحاجة.",

      slideCenterText: "نحرص على تقديم معلومات وإرشادات واضحة لضمان استخدام صحيح وتجربة أكثر اطمئنانًا، مع متابعة للاستفسارات عند الحاجة.",
      slideCenterHint: "لأي سؤال، راجع قسم “من نحن” وتواصل مع المركز.",

      slideWarrantyTitle: "الضمان",
      slideWarrantyText: "في حال لم تحصل على نتيجة خلال 15 دقيقة من الاستخدام وفق التعليمات، راجع سياسة الضمان لمعرفة تفاصيل التغطية وخيارات الحل.",
      slideWarrantyHint: "التفاصيل الكاملة داخل قسم الضمان.",

      slideRefundTitle: "الاسترداد",
      slideRefundText: "نوفّر سياسة استرداد واضحة وشفافة. راجع الشروط لمعرفة الحالات المؤهلة والخطوات المطلوبة لإتمام الطلب.",
      slideRefundHint: "التفاصيل الكاملة داخل قسم الاسترداد.",

      // Offers
      offersTitle: "🔥 عروض لمدة 24 ساعة",
      offersEndsIn: "ينتهي بعد:",
      offerEndsAfter: "ينتهي العرض بعد",
      offer1Name: "عبوة واحدة",
      offer1Badge: "شامل التوصيل",
      offer1Price: "200 شيكل",
      offer2Name: "عبوتين",
      offer2Badge: "أفضل قيمة",
      offer2Price: "300 شيكل",
      offer3Name: "ثلاث عبوات",
      offer3Badge: "الأكثر طلباً",
      offer3Price: "400 شيكل",

      // Main buttons
      btnReviews: "آراء العملاء",
      btnOrder: "طلب المنتج",
      btnPrice: "معلومات المنتج",
      btnAbout: "من نحن",
      btnWarrantyRefund: "الضمان والاسترداد",
      btnPrivacy: "الخصوصية",

      outputHint: "اضغط زر لعرض التفاصيل",

      // Sections & misc UI
      sectionWarrantyRefund: "الضمان والاسترداد",
      sectionPrivacy: "الخصوصية",
      sectionAbout: "من نحن",
      sectionOrder: "الطلب",
      aboutLocationsTitle: "مواقعنا",
      btnWhatsapp: "مراسلة واتساب",
      submitOrder: "إرسال الطلب",
      submitRefund: "إرسال طلب الاسترداد",
      refundAttachPhoto: "إرفاق صورة للمنتج",

      // Placeholders (order)
      phName: "الاسم الكامل",
      phPhone: "رقم الهاتف",
      phAddress: "العنوان",
      phCity: "المدينة",
      phQty: "الكمية",
      phNotes: "ملاحظات الطلب (اختياري)",
      // Placeholders (refund)
      phRefundName: "اسم العميل",
      phRefundPhone: "رقم العميل",
      phRefundReason: "سبب الاسترداد",

      // Product info section
      sectionProductInfo: "معلومات المنتج",
      badge_benefits: "فوائد المنتج",
      badge_how: "طريقة الاستخدام",
      badge_ingredients: "المكوّنات",
      badge_forWho: "لمن يناسب؟",
      badge_when: "متى يبدأ المفعول؟",
      badge_tips: "إرشادات مهمة",
      badge_storage: "التخزين",
      badge_privacyPack: "التغليف السري",

      // Badge panel defaults (will update from selected badge too)
      infoPanelTitle: "فوائد المنتج",
      infoPanelText: "اختر أحد العناوين بالأعلى لعرض التفاصيل هنا.",

      policyWarrantyRefund: "سياسة الضمان والاسترداد",
      policyPrivacy: "سياسة الخصوصية",

      // Footer
      footerRights: "جميع الحقوق محفوظة لدى مركز الارتقاء الطبي",

      // Dataset titles/texts for product badges
      badge_benefits_title: "فوائد المنتج",
      badge_benefits_text:
        "يقدّم المنتج دعمًا عمليًا لتحسين جودة التجربة بشكل عام عبر تركيبة مصممة لتوفير إحساس أعلى بالراحة والثبات.\n\n- يعزّز الإحساس بالثقة والاطمئنان\n- يدعم الاستقرار والثبات\n- يساهم في تهدئة التوتر وتحسين التركيز\n- يعزّز الانسجام والرضا المتبادل\n- يوفّر إحساسًا أفضل بالطاقة والحيوية",

      badge_how_title: "طريقة الاستخدام",
      badge_how_text:
        "لضمان أفضل تجربة، يُستخدم المنتج وفق خطوات واضحة:\n\n1- ضع كمية مناسبة ووزّعها بلطف وبشكل متساوٍ.\n2- اترك المنتج لمدة لا تقل عن 15 دقيقة قبل البدء.\n3- ابدأ بكمية قليلة ثم عدّل تدريجيًا حسب الحاجة.\n\nتوصية: الالتزام بالطريقة الصحيحة يعزّز من ثبات التجربة وجودتها.",

      badge_ingredients_title: "المكوّنات",
      badge_ingredients_text:
        "يعتمد المنتج على تركيبة مختارة بعناية من الزيوت النباتية والمكوّنات ذات المنشأ الطبيعي.\n\n- زيوت نباتية مختارة\n- تركيبة للاستخدام الموضعي وفق التعليمات\n- اهتمام بثبات وجودة المكوّنات",

      badge_forWho_title: "لمن يناسب؟",
      badge_forWho_text:
        "يناسب لمن يبحث عن تعزيز الراحة والثقة ضمن استخدام موضعي وفق الإرشادات.\n\n- لمن يرغب بإحساس أعلى بالثبات\n- لمن يفضّل حلولًا موضعية\n- لمن يسعى لتقليل التوتر وتحسين التركيز\n- لمن يهمّه الخصوصية (تغليف سري وتواصل محترم)",

      badge_when_title: "متى يبدأ المفعول؟",
      badge_when_text:
        "قد يبدأ المفعول خلال حوالي 15 دقيقة عند الالتزام بالتعليمات.\n\nقد تختلف الاستجابة بحسب:\n- الكمية وطريقة التطبيق\n- الاستجابة الفردية\n- انتظام الاستخدام",

      badge_tips_title: "إرشادات مهمة",
      badge_tips_text:
        "لأفضل تجربة:\n\n- تأكد من نظافة وجفاف موضع الاستخدام\n- ابدأ بكمية بسيطة ثم زد تدريجيًا\n- تجنّب الإفراط\n- في حال عدم الارتياح، أوقف الاستخدام",

      badge_storage_title: "التخزين",
      badge_storage_text:
        "للحفاظ على الجودة:\n\n- يُحفظ في مكان جاف وبارد بعيدًا عن الشمس والحرارة\n- أغلق العبوة بإحكام بعد الاستخدام\n- يُحفظ بعيدًا عن متناول الأطفال",

      badge_privacyPack_title: "التغليف السري",
      badge_privacyPack_text:
        "نلتزم بتغليف سري ومحترم يحافظ على خصوصيتك.\n\n- لا يُذكر اسم المنتج على الغلاف الخارجي\n- تغليف غير شفاف وبمظهر اعتيادي\n- بيانات الشحنة بالقدر الضروري للتسليم",
      pageTitle: "صفحة المنتج",
      wrLead: "نوضح لك كل ما يخص الضمان والاسترداد بكل شفافية.",
      wrBadgeClear: "واضح ومباشر",
      wrBadgeFastSupport: "دعم سريع",
      wrBadgeYourRight: "حقك محفوظ",
      wrWarrantyTitle: "الضمان",
      wrWarrantyBlock: "<p>يؤكد مركز الارتقاء الطبي التزامه بمعايير الجودة ورضا العملاء، ويقدّم ضمانًا خدميًا يشمل الدعم الفني والإرشادي والمتابعة وفق السياسة المعتمدة لدى المركز.</p><p>في حال عدم ملاحظة نتيجة خلال 15 دقيقة من الاستخدام الصحيح، يُرجى التواصل فورًا مع فريق الدعم المختص لإجراء مراجعة إجرائية لطريقة الاستخدام وتقديم الإرشادات اللازمة لضمان أفضل استفادة.</p>",
      wrScopeTitle: "نطاق الضمان",
      wrWarrantyScopeList: "<li>تقديم الإرشادات الفنية المعتمدة لطريقة الاستخدام الصحيحة.</li><li>متابعة الحالة والإجابة عن الاستفسارات المتعلقة بالاستخدام.</li><li>توجيه العميل للخطوة الأنسب وفق تقييم فريق الدعم.</li>",
      wrExclusionsTitle: "استثناءات الضمان",
      wrWarrantyExclusionsList: "<li>عدم الالتزام بإرشادات الاستخدام أو الاستخدام غير الصحيح.</li><li>الاستخدام المفرط أو بما يخالف الغرض المخصص.</li><li>أي ضرر ناتج عن سوء الاستخدام أو سوء التخزين أو العبث بالمنتج.</li>",
      wrRefundTitle: "الاسترداد",
      wrRefundPolicyTitle: "سياسة الاسترداد",
      wrRefundPolicyP: "تُتاح إمكانية تقديم طلب الاسترداد خلال <b>72 ساعة</b> من استلام المنتج، وذلك وفق الشروط التالية:",
      wrRefundConditionsList: "<li>أن يكون المنتج قد استُخدم مرة أو مرتين فقط وبشكل غير مفرط.</li><li>تقديم سبب واضح لطلب الاسترداد.</li><li>إرفاق صورة واضحة للمنتج عند تقديم الطلب (حسب ما يطلبه النموذج).</li>",
      wrRefundMechanismTitle: "آلية الاسترداد",
      wrRefundMechanismList: "<li>يتم استرداد قيمة المنتج كاملة.</li><li>لا تشمل عملية الاسترداد تكلفة التوصيل.</li>",
      wrRefundIneligibleTitle: "حالات عدم الأهلية للاسترداد",
      wrRefundIneligibleList: "<li>تجاوز مدة 72 ساعة من الاستلام.</li><li>ثبوت الاستخدام المفرط أو غير المتوافق مع الإرشادات.</li><li>عدم إرفاق المستندات/الصور المطلوبة أو عدم وضوحها بشكل يمنع التحقق.</li>",
      wrRefundStepsTitle: "إجراءات تقديم الطلب",
      wrRefundStepsList: "<li>تعبئة نموذج الاسترداد بدقة (الاسم، رقم الهاتف، السبب، وإرفاق الصورة).</li><li>يقوم فريق الدعم بمراجعة الطلب وفق السياسة المعتمدة.</li><li>يتم التواصل مع العميل بالنتيجة والإجراء التالي.</li>",
      wrStepFill: "تعبئة الطلب",
      wrStepAttach: "إرفاق المطلوب",
      wrStepReview: "مراجعة الطلب",
      wrStepConfirm: "تأكيد الإجراء",
      wrRefundFormTitle: "نموذج طلب الاسترداد",
      wrContactTitle: "التواصل",
      wrWhatsappText: "للتواصل مع مركز الارتقاء الطبي عبر واتساب:",
      wrWhatsappCta: "اضغط هنا",
      privacyIntro: "نحن نحترم خصوصيتك، خاصة في الطلبات الحساسة، ونلتزم بتغليف محايد وتواصل مختصر وحماية بياناتك.",
      privacyAccSensitive: "خصوصية الطلبات الحساسة",
      privacySensitiveList: "<li><strong>تغليف سري ومحكم:</strong> تغليف غير شفاف دون أي إشارات واضحة لمحتوى المنتج.</li><li><strong>اسم محايد على الطرد:</strong> وصف عام/محايد دون ذكر تفاصيل حساسة.</li><li><strong>التواصل بخصوصية:</strong> التواصل فقط لتأكيد الطلب والتوصيل، دون ذكر تفاصيل المنتج إلا عند الحاجة وباختصار.</li><li><strong>مشاركة للضرورة:</strong> مشاركة المعلومات فقط مع جهة التوصيل بالقدر اللازم لإتمام التسليم.</li><li><strong>فاتورة محايدة:</strong> صياغة عامة لا تُظهر تفاصيل حساسة عند وجود فاتورة.</li><li><strong>وقت مناسب للتسليم:</strong> يمكنك كتابة ملاحظة لتحديد وقت أو طريقة تسليم مناسبة لخصوصيتك.</li>",
      privacyNote: "ℹ️ ملاحظة: اكتب في ملاحظات الطلب <strong>“تغليف سري”</strong> لخصوصية أعلى.",
      privacyAccDataWeCollect: "البيانات التي نجمعها ولماذا",
      privacyDataP: "نجمع بيانات أساسية مثل الاسم ورقم الهاتف والعنوان وتفاصيل الطلب بهدف تأكيد الطلب، تنظيم التوصيل، وخدمة العملاء عند الحاجة.",
      privacyAccSharing: "مشاركة البيانات",
      privacyShareP: "لا نقوم ببيع بياناتك. قد نشارك الحد الأدنى من البيانات مع جهة التوصيل فقط لإتمام عملية التسليم.",
      privacyNoteInline: "ℹ️ ملاحظة: اكتب في ملاحظات الطلب <strong>“تغليف سري”</strong> لخصوصية أعلى.",
      aboutCenterNameStrong: "مركز الارتقاء الطبي",
      aboutIntro: "نقدّم خدمات ومنتجات تهدف لتحسين تجربة العميل، مع دعم وإرشاد واضح واهتمام بجودة الخدمة ورضا العملاء.",
      aboutVisionTitle: "رؤيتنا",
      aboutMissionTitle: "رسالتنا",
      aboutApproachTitle: "نهج العمل",
      aboutVisionP: "أن يكون مركز الارتقاء الطبي مرجعًا موثوقًا في تقديم خدمات الرعاية والمتابعة وفق معايير تنظيم وجودة ثابتة، مع تطوير مستمر يواكب احتياجات العملاء.",
      aboutMissionP: "تقديم خدمات تتسم بالمهنية والوضوح واحترام الخصوصية، عبر مسار منظم يبدأ بالتواصل والتقييم وينتهي بدعم ومتابعة تساعد على رضا العميل.",
      aboutApproachP: "نعتمد خطوات واضحة للتعامل مع الطلبات والاستفسارات: توجيه مناسب، متابعة منظمة، وتواصل مختصر يحافظ على الخصوصية ويضمن وضوح المعلومات.",
      orderBadgeWarranty: "✅ ضمان واسترداد",
      orderBadgeFastShip: "🚚 شحن سريع",
      orderBadgeDataSafe: "🔒 بياناتك محفوظة",
      orderStep1: "اكتب بياناتك",
      orderStep2: "نراجع الطلب",
      orderStep3: "نتواصل لتأكيده",
      orderPrivacyTitle: "🔒 خصوصية الطلب",
      orderPrivacySub: "تغليف سري ومحايد للطلبات الحساسة.",
      opTag1: "🔒 تغليف غير شفاف",
      opTag2: "🧾 وصف محايد",
      opTag3: "📞 تواصل مختصر",
      opTag4: "🚚 مشاركة للضرورة فقط",
      opTag5: "📄 فاتورة بصياغة عامة",
      opTag6: "⏰ وقت تسليم مناسب",
      opShowDetails: "عرض التفاصيل",
      phoneHint: "تأكد من رقمك لتأكيد الطلب.",
      countryPlaceholder: "الدولة",
      countryIsrael: "اسرائيل",
      countryPalestine: "فلسطين",
      countryUSA: "الولايات المتحدة",
      countryUAE: "الامارات",
      countryQatar: "قطر",
      countryKuwait: "الكويت",
      countrySpain: "اسبانيا",
      payCash: "الدفع عند الاستلام",
      payCard: "بطاقة",
      qtyPlaceholder: "الكمية",
      modalOk: "حسناً",
    
      hintFeatures: "ميزات المنتج: سريع، خفيف، سهل الاستخدام.",
    
      hintReviews: "آراء العملاء: يمكنك قراءة التقييمات وإضافة تعليقك بالأسفل.",
    
      hintProductInfo: "معلومات المنتج: اضغط على أي شارة لعرض التفاصيل.",
    
      hintPrivacy: "الخصوصية: نلتزم بتغليف محايد وحماية بياناتك.",
    
      hintOrder: "املأ نموذج الطلب بالأسفل ثم اضغط إرسال الطلب.",
    
      hintAbout: "من نحن: مركز الارتقاء الطبي.",
    
      hintWarrantyRefund: "الضمان والاسترداد: يمكنك الاطلاع على التفاصيل وتقديم طلب استرداد.",
    
      badgeBenefits: "فوائد المنتج",
    
      badgeHow: "طريقة الاستخدام",
    
      msgFillName: "رجاءً املأ الاسم.",
    
      msgChooseCountry: "رجاءً اختر الدولة.",
    
      msgFillCity: "رجاءً اكتب المدينة.",
    
      msgFillAddress: "رجاءً املأ العنوان.",
    
      msgPhoneInvalid: "رقم الهاتف غير صحيح.",
    
      msgChooseQty: "رجاءً اختر الكمية.",
    
      msgOrderReceived: "تم استلام طلبك ✅ شكراً لك.",
    
      msgRateBeforeComment: "قيّم المنتج بالنجوم ثم اكتب تعليقك.",
    
      msgWriteNameThenComment: "اكتب اسمك ثم التعليق.",
    
      msgWriteCommentThenSend: "اكتب تعليقك ثم اضغط إرسال.",
    
      msgCommentSent: "تم إرسال تعليقك ✅ شكراً لك.",
    
      aboutBadgeTransparency: "الشفافية",
      aboutBadgeResponsibility: "المسؤولية",
      aboutBadgePrivacy: "الخصوصية",
      aboutBadgeQuality: "الجودة",
      aboutBadgeHumanity: "الإنسانية",
      locJerusalem: "القدس – بيت حنينا",
      locUAE: "الإمارات – أبو ظبي",
      locQatar: "قطر – الدوحة",
      locKSA: "السعودية – الرياض",
      locUSA: "الولايات المتحدة – نيويورك",
      priceHintTpl: "السعر {price} شيكل شامل التوصيل",
      policyAnchor: "سياسة الضمان والاسترداد",
      commentsAddTitle: "أضف رأيك",
      commentsRateBefore: "قم بالتقييم قبل التعليق",
      commentsNamePh: "الاسم",
      commentsTextPh: "اكتب رأيك هنا...",
      commentsSend: "إرسال",
      commentsAddReply: "إضافة رد",
      replyNameOptionalPh: "الاسم (اختياري)",
      replyTextPh: "اكتب ردك...",
      fileChoose: "اختيار ملف",
      fileNoChosen: "لم يتم تحديد أي ملف",
      modalReplyTitle: "↩️ تم إرسال الرد",
      // Modal + common buttons
      btnOk: "حسنًا",
      modalRateTitle: "⭐ شكرًا لتقييمك",
      modalCommentAddedBody: "شكرًا لمشاركتك. تم حفظ تعليقك بنجاح.",
      modalCommentAddedTitle: "💬 تم إضافة تعليقك",
      modalRateReqBody: "رجاءً قم باختيار تقييم بالنجوم قبل إرسال التعليق.",
      modalRateReqTitle: "⭐ التقييم مطلوب",
      modalGeoFailBody: "يرجى السماح بالوصول للموقع أو اكتب العنوان يدويًا.",
      modalGeoFailTitle: "⚠️ تعذر تحديد الموقع",
      modalGeoOkBody: "تم إدراج موقعك التقريبي في العنوان.",
      modalGeoOkTitle: "📍 تم تحديد الموقع",
      modalRateBody: "تم تسجيل تقييمك بنجاح.<br>تقييمك: <b>{stars}</b> نجوم",
      modalOrderTitle: "✅ تم استلام طلبك",
      modalOrderDelivery: "سيتم توصيل طلبك خلال <b>48 ساعة</b>.",
      modalRefundTitle: "✅ تم إرسال الطلب",
      modalRefundBody: "تم استلام طلب الاسترداد وسيتم التواصل معك قريبًا.",
      fieldName: "الاسم",
      fieldPhone: "الهاتف",
      fieldCountry: "الدولة",
      fieldCity: "المدينة",
      fieldAddress: "العنوان",
      fieldQty: "الكمية",
      fieldPay: "الدفع",
      fieldNotes: "ملاحظات",
      payCash: "عند الاستلام",
      payCard: "بطاقة",
      commentsRateBefore: "قم بالتقييم قبل التعليق",
      modalReplyText: "تم إضافة ردك بنجاح.",
      modalCommentTitle: "💬 تم إضافة تعليقك",
      modalCommentText: "شكراً <b>{name}</b>! تم نشر تعليقك بنجاح.",
    },

    en: {
      dir: "ltr",
      lang: "en",

      centerName: "Al-Irtiqaa Medical Center",
      tagline: "Better Health, Better Life",

      welcomeTitle: "Welcome to Al-Irtiqaa Medical Center",
      welcomeSub: "Preparing your page…",

      heroTitle: "Al-Irtiqaa Medical Center",
      slideBenefitsTitle: "Product Benefits",
      slideBenefitsText: "A formula designed to enhance comfort and stability, supporting focus and reducing tension for a better experience.",
      slideBenefitsMore: "For more, go to the Product Benefits section",

      slideHowTitle: "How to Use",
      slideHowText: "Apply an appropriate amount evenly, then wait at least 15 minutes before starting.",
      slideHowHint: "Start with a small amount, then adjust gradually as needed.",

      slideCenterText: "We provide clear guidance for correct use and a more reassuring experience, with follow‑up when needed.",
      slideCenterHint: "For questions, visit “About Us” and contact the center.",

      slideWarrantyTitle: "Warranty",
      slideWarrantyText: "If you don’t notice results within 15 minutes when used correctly, review the warranty policy for coverage and options.",
      slideWarrantyHint: "Full details are in the Warranty section.",

      slideRefundTitle: "Refund",
      slideRefundText: "We offer a clear and transparent refund policy. Review the terms to see eligible cases and the required steps.",
      slideRefundHint: "Full details are in the Refund section.",

      offersTitle: "🔥 24‑Hour Offers",
      offersEndsIn: "Ends in:",
      offerEndsAfter: "Offer ends in",
      offer1Name: "1 Bottle",
      offer1Badge: "Delivery included",
      offer1Price: "200 ₪",
      offer2Name: "2 Bottles",
      offer2Badge: "Best value",
      offer2Price: "300 ₪",
      offer3Name: "3 Bottles",
      offer3Badge: "Most popular",
      offer3Price: "400 ₪",

      btnReviews: "Customer Reviews",
      btnOrder: "Order Now",
      btnPrice: "Product Info",
      btnAbout: "About Us",
      btnWarrantyRefund: "Warranty & Refund",
      btnPrivacy: "Privacy",

      outputHint: "Tap a button to view details",

      // Sections & misc UI
      sectionWarrantyRefund: "Warranty & Refund",
      sectionPrivacy: "Privacy",
      sectionAbout: "About Us",
      sectionOrder: "Order",
      aboutLocationsTitle: "Our Locations",
      btnWhatsapp: "WhatsApp",
      submitOrder: "Submit Order",
      submitRefund: "Submit Refund Request",
      refundAttachPhoto: "Attach a product photo",

      // Placeholders (order)
      phName: "Full name",
      phPhone: "Phone number",
      phAddress: "Address",
      phCity: "City",
      phQty: "Quantity",
      phNotes: "Order notes (optional)",
      // Placeholders (refund)
      phRefundName: "Customer name",
      phRefundPhone: "Customer phone",
      phRefundReason: "Reason for refund",

      sectionProductInfo: "Product Information",
      badge_benefits: "Benefits",
      badge_how: "How to Use",
      badge_ingredients: "Ingredients",
      badge_forWho: "Who is it for?",
      badge_when: "When does it start?",
      badge_tips: "Important Tips",
      badge_storage: "Storage",
      badge_privacyPack: "Discrete Packaging",

      infoPanelTitle: "Benefits",
      infoPanelText: "Select a topic above to see the details here.",

      policyWarrantyRefund: "Warranty & Refund Policy",
      policyPrivacy: "Privacy Policy",

      footerRights: "All rights reserved © Al‑Irtiqaa Medical Center",

      badge_benefits_title: "Product Benefits",
      badge_benefits_text:
        "Designed to support overall experience by enhancing comfort and stability, while helping reduce factors that may affect performance such as tension and distraction. When used as directed, this may reflect positively on confidence and harmony.\n\n- Boosts confidence and reassurance\n- Supports stability and balance\n- Helps reduce tension and improve focus\n- Supports mutual satisfaction\n- Improves comfort and vitality",

      badge_how_title: "How to Use",
      badge_how_text:
        "For best results, follow clear, organized steps:\n\n1) Apply an appropriate amount and spread gently and evenly over the entire application area.\n2) Leave the product for at least 15 minutes before starting, to allow enough time.\n3) Start with a small amount the first time, then adjust gradually as needed.\n\nAdditional notes:\n- Consistent use as directed helps maintain a stable experience.\n- If you feel discomfort, stop use and reassess according to the tips.",

      badge_ingredients_title: "Ingredients",
      badge_ingredients_text:
        "The product relies on a carefully selected blend of plant oils and naturally derived ingredients to provide a balanced, comfortable experience.\n\nFormula standards:\n- Plant-based oils and natural-origin ingredients\n- A gentle texture designed for topical use\n- Chosen to support comfort and smooth application\n\nIf you have sensitivities, test a small area first and discontinue use if irritation occurs.",

      badge_forWho_title: "Who is it for?",
      badge_forWho_text:
        "Suitable for those seeking to improve overall experience and support a greater sense of comfort and confidence, within proper topical use guidelines.\n\n- For those who want more stability and reassurance\n- For those who prefer topical solutions with clear instructions\n- For those who value privacy and discreet packaging\n\nNot intended for:\n- Anyone with known sensitivity to topical oils or ingredients (see ingredients section)",

      badge_when_title: "When does it start?",
      badge_when_text:
        "The effect may start to be noticed in about 15 minutes when used correctly. This is an approximate reference to help you understand the expected time window, and it may vary depending on individual factors and usage method.\n\nTip: allow enough time before starting, and follow the “How to use” steps for best results.",

      badge_tips_title: "Important Tips",
      badge_tips_text:
        "For the best experience, follow usage instructions carefully and use an appropriate amount without excess. Consistency and correct method help improve results.\n\nBefore use:\n- Ensure the application area is clean and dry.\n- Start with a small amount and increase gradually if needed.\n\nDuring use:\n- Apply evenly and allow enough time (about 15 minutes).\n- If discomfort occurs, stop use and reassess.\n\nAfter use:\n- Close the container well and store properly.",

      badge_storage_title: "Storage",
      badge_storage_text:
        "To maintain quality and formula stability, follow these storage guidelines:\n\n- Store in a cool, dry place away from direct sunlight and heat sources.\n- Keep the container tightly closed after use.\n- Avoid storing in hot environments (near heaters or inside a hot car).\n- Keep out of reach of children.\n\nIf the color or scent changes noticeably, stop use.",

      badge_privacyPack_title: "Discrete Packaging",
      badge_privacyPack_text:
        "We are committed to discreet, respectful packaging that protects your privacy from preparation to delivery.\n\nWhat does “discreet packaging” mean?\n- No mention of the product name or nature on the outer package\n- Neutral external packaging with an ordinary appearance\n- Minimal communication related to sensitive orders\n- Sender information appears in a neutral form\n\nYour privacy is a priority.",
      pageTitle: "Product Page",
      wrLead: "We explain everything about warranty & refunds with full transparency.",
      wrBadgeClear: "Clear & direct",
      wrBadgeFastSupport: "Fast support",
      wrBadgeYourRight: "Your rights protected",
      wrWarrantyTitle: "Warranty",
      wrWarrantyBlock: "<p>Al-Irtiqaa Medical Center is committed to quality and customer satisfaction, and provides a service warranty that includes guidance, support, and follow-up according to the center’s policy.</p><p>If you don’t notice a result within 15 minutes of correct use, please contact support immediately so we can review the steps and provide the proper guidance.</p>",
      wrScopeTitle: "Warranty coverage",
      wrWarrantyScopeList: "<li>Approved guidance on correct usage.</li><li>Follow-up and answers to usage questions.</li><li>Directing you to the best next step based on support evaluation.</li>",
      wrExclusionsTitle: "Warranty exclusions",
      wrWarrantyExclusionsList: "<li>Not following instructions or incorrect use.</li><li>Overuse or use beyond the intended purpose.</li><li>Any damage caused by misuse, improper storage, or tampering.</li>",
      wrRefundTitle: "Refunds",
      wrRefundPolicyTitle: "Refund policy",
      wrRefundPolicyP: "You can submit a refund request within <b>72 hours</b> of receiving the product, under the following conditions:",
      wrRefundConditionsList: "<li>The product was used once or twice only, without excessive use.</li><li>A clear reason is provided.</li><li>A clear photo of the product is attached when submitting the request (as required by the form).</li>",
      wrRefundMechanismTitle: "How refunds work",
      wrRefundMechanismList: "<li>The product price is refunded in full.</li><li>Delivery fees are not included in the refund.</li>",
      wrRefundIneligibleTitle: "Not eligible for refund",
      wrRefundIneligibleList: "<li>More than 72 hours have passed since delivery.</li><li>Excessive use or use not aligned with instructions is confirmed.</li><li>Required documents/photos are missing or unclear.</li>",
      wrRefundStepsTitle: "How to submit",
      wrRefundStepsList: "<li>Fill out the refund form accurately (name, phone, reason, and attach the photo).</li><li>Support reviews the request according to policy.</li><li>We contact you with the result and next step.</li>",
      wrStepFill: "Fill the request",
      wrStepAttach: "Attach required info",
      wrStepReview: "Review",
      wrStepConfirm: "Confirm action",
      wrRefundFormTitle: "Refund request form",
      wrContactTitle: "Contact",
      wrWhatsappText: "Contact Al-Irtiqaa Medical Center via WhatsApp:",
      wrWhatsappCta: "Tap here",
      privacyIntro: "We respect your privacy—especially for sensitive orders—and we commit to neutral packaging, minimal communication, and protecting your data.",
      privacyAccSensitive: "Sensitive orders privacy",
      privacySensitiveList: "<li><strong>Discreet sealed packaging:</strong> Opaque packaging with no clear hints about the product.</li><li><strong>Neutral label:</strong> General/neutral description without sensitive details.</li><li><strong>Private communication:</strong> Communication only to confirm the order and delivery, with minimal details.</li><li><strong>Share only what’s necessary:</strong> Share information only with the delivery provider to the extent needed to complete delivery.</li><li><strong>Neutral invoice:</strong> General wording that doesn’t reveal sensitive details on invoices.</li><li><strong>Suitable delivery time:</strong> You can add a note to choose a delivery time/method that fits your privacy.</li>",
      privacyNote: "ℹ️ Note: write <strong>“Discreet packaging”</strong> in order notes for extra privacy.",
      privacyAccDataWeCollect: "Data we collect & why",
      privacyDataP: "We collect basic data such as name, phone number, address, and order details to confirm your order, arrange delivery, and support you if needed.",
      privacyAccSharing: "Data sharing",
      privacyShareP: "We do not sell your data. We may share the minimum required data with the delivery provider to complete delivery.",
      privacyNoteInline: "ℹ️ Note: write <strong>“Discreet packaging”</strong> in order notes for extra privacy.",
      aboutCenterNameStrong: "Al-Irtiqaa Medical Center",
      aboutIntro: "We provide services and products aimed at improving your experience, with clear guidance, quality focus, and customer satisfaction.",
      aboutVisionTitle: "Our vision",
      aboutMissionTitle: "Our mission",
      aboutApproachTitle: "How we work",
      aboutVisionP: "To be a trusted reference for care and follow-up services under consistent quality standards, with continuous improvement that meets clients’ needs.",
      aboutMissionP: "To deliver professional, clear services that respect privacy through an organized path—from communication and assessment to support and follow-up.",
      aboutApproachP: "We follow clear steps for orders and inquiries: proper guidance, organized follow-up, and concise communication that protects privacy and ensures clarity.",
      orderBadgeWarranty: "✅ Warranty & refund",
      orderBadgeFastShip: "🚚 Fast shipping",
      orderBadgeDataSafe: "🔒 Your data is safe",
      orderStep1: "Enter your details",
      orderStep2: "We review the order",
      orderStep3: "We contact to confirm",
      orderPrivacyTitle: "🔒 Order privacy",
      orderPrivacySub: "Discreet, neutral packaging for sensitive orders.",
      opTag1: "🔒 Opaque packaging",
      opTag2: "🧾 Neutral description",
      opTag3: "📞 Minimal contact",
      opTag4: "🚚 Share only needed",
      opTag5: "📄 Neutral invoice",
      opTag6: "⏰ Flexible delivery time",
      opShowDetails: "Show details",
      phoneHint: "Make sure your number is correct for order confirmation.",
      countryPlaceholder: "Country",
      countryIsrael: "Israel",
      countryPalestine: "Palestine",
      countryUSA: "United States",
      countryUAE: "UAE",
      countryQatar: "Qatar",
      countryKuwait: "Kuwait",
      countrySpain: "Spain",
      payCash: "Cash on delivery",
      payCard: "Card",
      qtyPlaceholder: "Quantity",
      modalOk: "OK",
      aboutBadgeTransparency: "Transparency",
      aboutBadgeResponsibility: "Responsibility",
      aboutBadgePrivacy: "Privacy",
      aboutBadgeQuality: "Quality",
      aboutBadgeHumanity: "Humanity",
      locJerusalem: "Jerusalem – Beit Hanina",
      locUAE: "UAE – Abu Dhabi",
      locQatar: "Qatar – Doha",
      locKSA: "Saudi Arabia – Riyadh",
      locUSA: "United States – New York",
    
      hintFeatures: "Product features: fast, lightweight, easy to use.",
    
      hintReviews: "Customer reviews: read ratings and add your comment below.",
    
      hintProductInfo: "Product info: tap any badge to view details.",
    
      hintPrivacy: "Privacy: we use neutral packaging and protect your data.",
    
      hintOrder: "Fill in the order form below, then tap Submit Order.",
    
      hintAbout: "About us: Al-Irtiqaa Medical Center.",
    
      hintWarrantyRefund: "Warranty & refund: view details and submit a refund request.",
    
      badgeBenefits: "Benefits",
    
      badgeHow: "How to Use",
    
      msgFillName: "Please enter your name.",
    
      msgChooseCountry: "Please choose a country.",
    
      msgFillCity: "Please enter the city.",
    
      msgFillAddress: "Please enter the address.",
    
      msgPhoneInvalid: "Phone number is not valid.",
    
      msgChooseQty: "Please choose a quantity.",
    
      msgOrderReceived: "Your order has been received ✅ Thank you.",
    
      msgRateBeforeComment: "Please rate the product with stars, then write your comment.",
    
      msgWriteNameThenComment: "Enter your name, then your comment.",
    
      msgWriteCommentThenSend: "Write your comment, then tap Submit.",
    
      msgCommentSent: "Your comment was sent ✅ Thank you.",
    
      priceHintTpl: "Price {price} ₪ incl. delivery",
      policyAnchor: "Warranty & Refund Policy",
      commentsAddTitle: "Add your review",
      commentsRateBefore: "Please rate before commenting",
      commentsNamePh: "Name",
      commentsTextPh: "Write your review here...",
      commentsSend: "Send",
      commentsAddReply: "Add reply",
      replyNameOptionalPh: "Name (optional)",
      replyTextPh: "Write your reply...",
      fileChoose: "Choose file",
      fileNoChosen: "No file chosen",
      modalReplyTitle: "↩️ Reply sent",
      // Modal + common buttons
      btnOk: "OK",
      modalRateTitle: "⭐ Thank you for rating",
      modalCommentAddedBody: "Thanks for sharing. Your review was saved successfully.",
      modalCommentAddedTitle: "💬 Review added",
      modalRateReqBody: "Please choose a star rating before submitting your review.",
      modalRateReqTitle: "⭐ Rating required",
      modalGeoFailBody: "Please allow location access or type the address manually.",
      modalGeoFailTitle: "⚠️ Location unavailable",
      modalGeoOkBody: "Your approximate location was added to the address.",
      modalGeoOkTitle: "📍 Location set",
      modalRateBody: "Your rating was saved successfully.<br>Your rating: <b>{stars}</b> stars",
      modalOrderTitle: "✅ Order received",
      modalOrderDelivery: "Your order will be delivered within <b>48 hours</b>.",
      modalRefundTitle: "✅ Request sent",
      modalRefundBody: "Your refund request has been received. We will contact you soon.",
      fieldName: "Name",
      fieldPhone: "Phone",
      fieldCountry: "Country",
      fieldCity: "City",
      fieldAddress: "Address",
      fieldQty: "Quantity",
      fieldPay: "Payment",
      fieldNotes: "Notes",
      payCash: "Cash on delivery",
      payCard: "Card",
      commentsRateBefore: "Please rate before commenting",
      modalReplyText: "Your reply has been added successfully.",
      modalCommentTitle: "💬 Comment added",
      modalCommentText: "Thanks <b>{name}</b>! Your comment has been posted.",
    },

    he: {
      dir: "rtl",
      lang: "he",

      centerName: "מרכז אל־אירתיקאא הרפואי",
      tagline: "בריאות טובה יותר, חיים יפים יותר",
      // Modal + common buttons
      btnOk: "אישור",
      modalRateTitle: "⭐ תודה על הדירוג",
      modalCommentAddedBody: "תודה על השיתוף. התגובה נשמרה בהצלחה.",
      modalCommentAddedTitle: "💬 התגובה נוספה",
      modalRateReqBody: "בחר דירוג כוכבים לפני שליחת התגובה.",
      modalRateReqTitle: "⭐ נדרש דירוג",
      modalGeoFailBody: "אשר גישה למיקום או הזן כתובת ידנית.",
      modalGeoFailTitle: "⚠️ לא ניתן לקבוע מיקום",
      modalGeoOkBody: "המיקום המשוער נוסף לכתובת.",
      modalGeoOkTitle: "📍 המיקום נקבע",
      modalRateBody: "הדירוג נשמר בהצלחה.<br>הדירוג שלך: <b>{stars}</b> כוכבים",
      modalOrderTitle: "✅ ההזמנה התקבלה",
      modalOrderDelivery: "ההזמנה תימסר בתוך <b>48 שעות</b>.",
      modalRefundTitle: "✅ הבקשה נשלחה",
      modalRefundBody: "בקשת ההחזר התקבלה. ניצור איתך קשר בקרוב.",
      fieldName: "שם",
      fieldPhone: "טלפון",
      fieldCountry: "מדינה",
      fieldCity: "עיר",
      fieldAddress: "כתובת",
      fieldQty: "כמות",
      fieldPay: "תשלום",
      fieldNotes: "הערות",
      payCash: "תשלום בעת מסירה",
      payCard: "כרטיס",
      commentsRateBefore: "נא לדרג לפני תגובה",

      welcomeTitle: "ברוכים הבאים למרכז אל־אירתיקאא הרפואי",
      welcomeSub: "מכינים את הדף…",

      heroTitle: "מרכז אל־אירתיקאא הרפואי",
      slideBenefitsTitle: "יתרונות המוצר",
      slideBenefitsText: "פורמולה שנועדה לשפר נוחות ויציבות, לתמוך בריכוז ולהפחית מתח לחוויה טובה יותר.",
      slideBenefitsMore: "לעוד מידע, עברו לסעיף יתרונות המוצר",

      slideHowTitle: "אופן השימוש",
      slideHowText: "מרחו כמות מתאימה באופן אחיד והמתינו לפחות 15 דקות לפני התחלה.",
      slideHowHint: "התחילו בכמות קטנה ואז התאימו בהדרגה לפי הצורך.",

      slideCenterText: "אנו מספקים הנחיות ברורות לשימוש נכון וחוויה רגועה יותר, עם מעקב בעת הצורך.",
      slideCenterHint: "לשאלות, עברו ל“אודות” וצרו קשר עם המרכז.",

      slideWarrantyTitle: "אחריות",
      slideWarrantyText: "אם לא מורגשת תוצאה בתוך 15 דקות בשימוש נכון, עיינו במדיניות האחריות לפרטי הכיסוי והאפשרויות.",
      slideWarrantyHint: "הפרטים המלאים בסעיף האחריות.",

      slideRefundTitle: "החזר",
      slideRefundText: "מדיניות החזר ברורה ושקופה. עיינו בתנאים לזכאות ולשלבים הנדרשים.",
      slideRefundHint: "הפרטים המלאים בסעיף ההחזר.",

      offersTitle: "🔥 מבצעים ל‑24 שעות",
      offersEndsIn: "נגמר בעוד:",
      offerEndsAfter: "המבצע נגמר בעוד",
      offer1Name: "בקבוק 1",
      offer1Badge: "משלוח כלול",
      offer1Price: "200 ₪",
      offer2Name: "2 בקבוקים",
      offer2Badge: "הכי משתלם",
      offer2Price: "300 ₪",
      offer3Name: "3 בקבוקים",
      offer3Badge: "הכי פופולרי",
      offer3Price: "400 ₪",

      btnReviews: "חוות דעת",
      btnOrder: "הזמנה",
      btnPrice: "מידע על המוצר",
      btnAbout: "אודות",
      btnWarrantyRefund: "אחריות והחזר",
      btnPrivacy: "פרטיות",

      outputHint: "לחצו על כפתור להצגת פרטים",

      // Sections & misc UI
      sectionWarrantyRefund: "אחריות והחזר",
      sectionPrivacy: "פרטיות",
      sectionAbout: "אודות",
      sectionOrder: "הזמנה",
      aboutLocationsTitle: "המיקומים שלנו",
      btnWhatsapp: "וואטסאפ",
      submitOrder: "שליחת הזמנה",
      submitRefund: "שליחת בקשת החזר",
      refundAttachPhoto: "צירוף תמונת מוצר",

      // Placeholders (order)
      phName: "שם מלא",
      phPhone: "מספר טלפון",
      phAddress: "כתובת",
      phCity: "עיר",
      phQty: "כמות",
      phNotes: "הערות להזמנה (אופציונלי)",
      // Placeholders (refund)
      phRefundName: "שם הלקוח",
      phRefundPhone: "טלפון הלקוח",
      phRefundReason: "סיבת ההחזר",

      sectionProductInfo: "מידע על המוצר",
      badge_benefits: "יתרונות",
      badge_how: "אופן השימוש",
      badge_ingredients: "רכיבים",
      badge_forWho: "למי זה מתאים?",
      badge_when: "מתי זה מתחיל?",
      badge_tips: "הנחיות חשובות",
      badge_storage: "אחסון",
      badge_privacyPack: "אריזה דיסקרטית",

      infoPanelTitle: "יתרונות",
      infoPanelText: "בחרו נושא למעלה כדי לראות כאן את הפרטים.",

      policyWarrantyRefund: "מדיניות אחריות והחזר",
      policyPrivacy: "מדיניות פרטיות",

      footerRights: "כל הזכויות שמורות © מרכז אל־אירתיקאא הרפואי",

      badge_benefits_title: "יתרונות המוצר",
      badge_benefits_text:
        "נועד לתמוך בחוויה הכללית באמצעות שיפור תחושת הנוחות והיציבות, תוך הפחתת גורמים שעלולים להשפיע כמו מתח והסחת דעת. בשימוש לפי ההנחיות, הדבר עשוי לתרום לביטחון ולהרמוניה.\n\n- מחזק תחושת ביטחון ורוגע\n- תומך ביציבות ואיזון\n- מסייע להפחתת מתח ולשיפור ריכוז\n- תומך בשביעות רצון הדדית\n- משפר נוחות וחיוניות",

      badge_how_title: "אופן השימוש",
      badge_how_text:
        "כדי לקבל את התוצאה הטובה ביותר, מומלץ לפעול לפי שלבים ברורים:\n\n1) מרחו כמות מתאימה ופזרו בעדינות ובאופן אחיד על אזור המריחה.\n2) המתינו לפחות 15 דקות לפני ההתחלה כדי לאפשר זמן מספיק.\n3) בפעם הראשונה התחילו בכמות קטנה ולאחר מכן התאימו בהדרגה לפי הצורך.\n\nהערות:\n- שימוש עקבי לפי ההנחיות מסייע לשמירה על חוויה יציבה.\n- במקרה של אי־נוחות, הפסיקו שימוש ועיינו ב״טיפים חשובים״.",

      badge_ingredients_title: "רכיבים",
      badge_ingredients_text:
        "המוצר מבוסס על שילוב מוקפד של שמנים צמחיים ורכיבים ממקור טבעי, לחוויה מאוזנת ונעימה.\n\nעקרונות ההרכב:\n- שמנים צמחיים ורכיבים ממקור טבעי\n- מרקם עדין המתאים לשימוש מקומי\n- רכיבים שנבחרו לתמיכה בנוחות ובמריחה חלקה\n\nבמקרה של רגישות, נסו תחילה כמות קטנה והפסיקו שימוש אם יש גירוי.",

      badge_forWho_title: "למי זה מתאים?",
      badge_forWho_text:
        "מתאים למי שמחפש לשפר את איכות החוויה ולתמוך בתחושת נוחות וביטחון, במסגרת שימוש מקומי לפי ההנחיות.\n\n- למי שרוצה יותר יציבות ורוגע\n- למי שמעדיף פתרון מקומי עם הוראות ברורות\n- למי שמעריך פרטיות ואריזה דיסקרטית\n\nלא מומלץ למי שרגיש לשמנים או לרכיבים (ראו רכיבים).",

      badge_when_title: "מתי זה מתחיל?",
      badge_when_text:
        "ייתכן שההשפעה תתחיל להיות מורגשת לאחר כ־15 דקות בשימוש נכון. זהו זמן משוער שעוזר להבין את חלון הזמן הצפוי, והוא עשוי להשתנות בין אנשים ובהתאם לשיטת השימוש.\n\nטיפ: הקפידו על זמן המתנה ופעלו לפי “כיצד להשתמש”.",

      badge_tips_title: "הנחיות חשובות",
      badge_tips_text:
        "להמלצות חשובות לחוויה טובה יותר:\n\nלפני השימוש:\n- ודאו שהאזור נקי ויבש.\n- התחילו בכמות קטנה והגדילו בהדרגה במידת הצורך.\n\nבמהלך השימוש:\n- מרחו באופן אחיד והמתינו מספיק זמן (כ־15 דקות).\n- במקרה של אי־נוחות, הפסיקו שימוש.\n\nלאחר השימוש:\n- סגרו היטב ואחסנו בהתאם להנחיות.",

      badge_storage_title: "אחסון",
      badge_storage_text:
        "כדי לשמור על איכות ויציבות ההרכב:\n\n- אחסנו במקום קריר ויבש, הרחק משמש ישירה וממקורות חום.\n- סגרו היטב לאחר השימוש.\n- הימנעו מאחסון בסביבה חמה (ליד תנור/ברכב חם).\n- הרחיקו מהישג ידם של ילדים.\n\nאם יש שינוי ניכר בצבע או בריח, הפסיקו שימוש.",

      badge_privacyPack_title: "אריזה דיסקרטית",
      badge_privacyPack_text:
        "אנו מתחייבים לאריזה דיסקרטית ומכבדת, השומרת על פרטיותך מרגע ההכנה ועד למסירה.\n\nמה כוללת “אריזה דיסקרטית”?\n- אין ציון של שם המוצר או אופיו על האריזה החיצונית\n- אריזה חיצונית ניטרלית ובמראה רגיל\n- תקשורת מינימלית לגבי הזמנות רגישות\n- פרטי השולח מופיעים בצורה ניטרלית\n\nהפרטיות שלך בראש סדר העדיפויות.",
      pageTitle: "דף מוצר",
      wrLead: "אנחנו מסבירים בצורה שקופה את כל נושא האחריות וההחזר.",
      wrBadgeClear: "ברור וישיר",
      wrBadgeFastSupport: "תמיכה מהירה",
      wrBadgeYourRight: "הזכויות שלך שמורות",
      wrWarrantyTitle: "אחריות",
      wrWarrantyBlock: "<p>מרכז אל־אירתיקאא הרפואי מחויב לאיכות ולשביעות רצון הלקוחות, ומציע אחריות שירות הכוללת הדרכה, תמיכה ומעקב בהתאם למדיניות המרכז.</p><p>אם לא הבחנת בתוצאה בתוך 15 דקות של שימוש נכון, אנא פנו מיד לתמיכה כדי שנבדוק את השלבים ונספק הנחיות מדויקות.</p>",
      wrScopeTitle: "כיסוי האחריות",
      wrWarrantyScopeList: "<li>הנחיות מאושרות לשימוש נכון.</li><li>מעקב ומענה לשאלות לגבי השימוש.</li><li>הכוונה לצעד הבא המתאים לפי הערכת התמיכה.</li>",
      wrExclusionsTitle: "חריגים לאחריות",
      wrWarrantyExclusionsList: "<li>אי־עמידה בהנחיות או שימוש לא נכון.</li><li>שימוש יתר או שימוש מעבר למטרה.</li><li>נזק שנגרם עקב שימוש לא נכון, אחסון לא תקין או התערבות במוצר.</li>",
      wrRefundTitle: "החזר",
      wrRefundPolicyTitle: "מדיניות החזר",
      wrRefundPolicyP: "ניתן להגיש בקשת החזר בתוך <b>72 שעות</b> מקבלת המוצר, בכפוף לתנאים הבאים:",
      wrRefundConditionsList: "<li>המוצר שומש פעם-פעמיים בלבד, ללא שימוש יתר.</li><li>נמסרה סיבה ברורה לבקשה.</li><li>מצורפת תמונה ברורה של המוצר בעת ההגשה (לפי דרישות הטופס).</li>",
      wrRefundMechanismTitle: "איך ההחזר מתבצע",
      wrRefundMechanismList: "<li>מחיר המוצר מוחזר במלואו.</li><li>דמי משלוח אינם כלולים בהחזר.</li>",
      wrRefundIneligibleTitle: "לא זכאי להחזר",
      wrRefundIneligibleList: "<li>חלפו יותר מ‑72 שעות ממועד המסירה.</li><li>אושר שימוש יתר או שימוש שאינו בהתאם להנחיות.</li><li>מסמכים/תמונות חסרים או לא ברורים.</li>",
      wrRefundStepsTitle: "איך מגישים בקשה",
      wrRefundStepsList: "<li>מלאו את טופס ההחזר במדויק (שם, טלפון, סיבה וצירוף תמונה).</li><li>התמיכה בודקת את הבקשה בהתאם למדיניות.</li><li>ניצור קשר עם התוצאה והצעד הבא.</li>",
      wrStepFill: "מילוי הבקשה",
      wrStepAttach: "צירוף הנדרש",
      wrStepReview: "בדיקה",
      wrStepConfirm: "אישור פעולה",
      wrRefundFormTitle: "טופס בקשת החזר",
      wrContactTitle: "יצירת קשר",
      wrWhatsappText: "יצירת קשר עם מרכז אל־אירתיקאא הרפואי בוואטסאפ:",
      wrWhatsappCta: "לחצו כאן",
      privacyIntro: "אנו מכבדים את פרטיותך—במיוחד בהזמנות רגישות—ומתחייבים לאריזה ניטרלית, תקשורת מינימלית ושמירה על הנתונים שלך.",
      privacyAccSensitive: "פרטיות בהזמנות רגישות",
      privacySensitiveList: "<li><strong>אריזה אטומה ודיסקרטית:</strong> ללא סימנים ברורים על המוצר.</li><li><strong>תיאור ניטרלי:</strong> ללא פרטים רגישים על המדבקה.</li><li><strong>תקשורת פרטית:</strong> רק לאישור הזמנה ומסירה, בקיצור.</li><li><strong>שיתוף לפי צורך:</strong> רק מינימום נתונים למסירה.</li><li><strong>חשבונית ניטרלית:</strong> ניסוח כללי ללא פרטים רגישים.</li><li><strong>זמן מסירה מתאים:</strong> ניתן להוסיף הערה לזמן/שיטה נוחים לפרטיות.</li>",
      privacyNote: "ℹ️ הערה: כתבו <strong>\"אריזה דיסקרטית\"</strong> בהערות להזמנה לפרטיות גבוהה יותר.",
      privacyAccDataWeCollect: "אילו נתונים אנו אוספים ולמה",
      privacyDataP: "אנו אוספים נתונים בסיסיים כמו שם, טלפון, כתובת ופרטי הזמנה כדי לאשר את ההזמנה, לארגן משלוח ולתת שירות במידת הצורך.",
      privacyAccSharing: "שיתוף נתונים",
      privacyShareP: "אנו לא מוכרים את הנתונים שלך. ייתכן שנשתף מינימום נתונים עם חברת המשלוחים לצורך המסירה בלבד.",
      privacyNoteInline: "ℹ️ הערה: כתבו <strong>\"אריזה דיסקרטית\"</strong> בהערות להזמנה לפרטיות גבוהה יותר.",
      aboutCenterNameStrong: "מרכז אל־אירתיקאא הרפואי",
      aboutIntro: "אנו מספקים שירותים ומוצרים לשיפור החוויה, עם הנחיות ברורות, דגש על איכות ושביעות רצון.",
      aboutVisionTitle: "החזון שלנו",
      aboutMissionTitle: "המשימה שלנו",
      aboutApproachTitle: "איך אנחנו עובדים",
      aboutVisionP: "להיות מקור אמין לשירותי טיפול ומעקב לפי סטנדרטים עקביים של איכות, עם שיפור מתמיד לצורכי הלקוחות.",
      aboutMissionP: "להעניק שירות מקצועי וברור שמכבד פרטיות, במסלול מסודר—from תקשורת והערכה ועד תמיכה ומעקב.",
      aboutApproachP: "אנו עובדים בשלבים ברורים להזמנות ופניות: הכוונה מתאימה, מעקב מסודר ותקשורת קצרה השומרת על פרטיות ובהירות.",
      orderBadgeWarranty: "✅ אחריות והחזר",
      orderBadgeFastShip: "🚚 משלוח מהיר",
      orderBadgeDataSafe: "🔒 הנתונים שלך מוגנים",
      orderStep1: "הזנת פרטים",
      orderStep2: "בדיקת ההזמנה",
      orderStep3: "יצירת קשר לאישור",
      orderPrivacyTitle: "🔒 פרטיות ההזמנה",
      orderPrivacySub: "אריזה ניטרלית ודיסקרטית להזמנות רגישות.",
      opTag1: "🔒 אריזה אטומה",
      opTag2: "🧾 תיאור ניטרלי",
      opTag3: "📞 תקשורת מינימלית",
      opTag4: "🚚 שיתוף לפי צורך",
      opTag5: "📄 חשבונית ניטרלית",
      opTag6: "⏰ זמן מסירה גמיש",
      opShowDetails: "הצג פרטים",
      phoneHint: "ודאו שהמספר נכון כדי לאשר את ההזמנה.",
      countryPlaceholder: "מדינה",
      countryIsrael: "ישראל",
      countryPalestine: "פלסטין",
      countryUSA: "ארצות הברית",
      countryUAE: "איחוד האמירויות",
      countryQatar: "קטאר",
      countryKuwait: "כווית",
      countrySpain: "ספרד",
      payCash: "תשלום במזומן בעת המסירה",
      payCard: "כרטיס",
      qtyPlaceholder: "כמות",
      modalOk: "אישור",
      aboutBadgeTransparency: "שקיפות",
      aboutBadgeResponsibility: "אחריות",
      aboutBadgePrivacy: "פרטיות",
      aboutBadgeQuality: "איכות",
      aboutBadgeHumanity: "אנושיות",
      locJerusalem: "ירושלים – בית חנינא",
      locUAE: "איחוד האמירויות – אבו דאבי",
      locQatar: "קטאר – דוחה",
      locKSA: "ערב הסעודית – ריאד",
      locUSA: "ארצות הברית – ניו יורק",
    
      hintFeatures: "תכונות המוצר: מהיר, קל ונוח לשימוש.",
    
      hintReviews: "חוות דעת לקוחות: ניתן לקרוא דירוגים ולהוסיף תגובה למטה.",
    
      hintProductInfo: "מידע על המוצר: לחצו על כל תג להצגת הפרטים.",
    
      hintPrivacy: "פרטיות: אריזה ניטרלית והגנה על הנתונים שלך.",
    
      hintOrder: "מלאו את טופס ההזמנה למטה ואז לחצו על שליחת הזמנה.",
    
      hintAbout: "אודותינו: מרכז אל־אירתיקאא הרפואי.",
    
      hintWarrantyRefund: "אחריות והחזר: צפו בפרטים והגישו בקשת החזר.",
    
      badgeBenefits: "יתרונות",
    
      badgeHow: "כיצד להשתמש",
    
      msgFillName: "אנא הזינו את השם.",
    
      msgChooseCountry: "אנא בחרו מדינה.",
    
      msgFillCity: "אנא הזינו עיר.",
    
      msgFillAddress: "אנא הזינו כתובת.",
    
      msgPhoneInvalid: "מספר הטלפון אינו תקין.",
    
      msgChooseQty: "אנא בחרו כמות.",
    
      msgOrderReceived: "ההזמנה התקבלה ✅ תודה.",
    
      msgRateBeforeComment: "אנא דרגו בכוכבים ואז כתבו תגובה.",
    
      msgWriteNameThenComment: "הזינו שם ואז תגובה.",
    
      msgWriteCommentThenSend: "כתבו תגובה ואז לחצו שלח.",
    
      msgCommentSent: "התגובה נשלחה ✅ תודה.",
    },
  };

  window.__I18N = I18N;
const KEY = "site_lang";
  const getSaved = () => {
    const v = (localStorage.getItem(KEY) || "").toLowerCase();
    return (v === "ar" || v === "en" || v === "he") ? v : "ar";
  };

  const setActiveChip = (langCode) => {
    chips.forEach(c => {
      const active = c.dataset.lang === langCode;
      c.classList.toggle("is-active", active);
      c.setAttribute("aria-selected", active ? "true" : "false");
    });
  };

  const applyLang = (langCode) => {
    const pack = I18N[langCode] || I18N.ar;

    document.documentElement.setAttribute("lang", pack.lang);
    document.documentElement.setAttribute("dir", pack.dir);

    // Keep it minimal: direction on body for layout
    document.body.style.direction = pack.dir;

    // Swap only the UI strings we tagged
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key]; else if (I18N.ar && I18N.ar[key] != null) el.textContent = I18N.ar[key];
    });

    // HTML blocks
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (pack[key] != null) el.innerHTML = pack[key]; else if (I18N.ar && I18N.ar[key] != null) el.innerHTML = I18N.ar[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      if (pack[key] != null) el.setAttribute("placeholder", pack[key]); else if (I18N.ar && I18N.ar[key] != null) el.setAttribute("placeholder", I18N.ar[key]);
    });

    // Update datasets used by "معلومات المنتج" badges (title/text)
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      if (pack[key] != null) el.setAttribute("data-title", pack[key]); else if (I18N.ar && I18N.ar[key] != null) el.setAttribute("data-title", I18N.ar[key]);
    });
    document.querySelectorAll("[data-i18n-text]").forEach(el => {
      const key = el.getAttribute("data-i18n-text");
      if (pack[key] != null) el.setAttribute("data-text", pack[key]); else if (I18N.ar && I18N.ar[key] != null) el.setAttribute("data-text", I18N.ar[key]);
    });

    // If the info panel is open, re-render current badge in the selected language
    try {
      const panel = document.getElementById("infoPanel");
      const open = panel && panel.classList.contains("open");
      if (open && typeof renderInfoBadge === "function") {
        const activeBtn = document.querySelector("#infoBadges .infoBadge.active") || document.querySelector("#infoBadges .infoBadge");
        if (activeBtn) renderInfoBadge(activeBtn);
      }
    } catch(e){}

    // Menu button label (if present)
    const menuBtn = document.querySelector(".header-icon");
    if (menuBtn) {
      menuBtn.setAttribute("aria-label", langCode === "en" ? "Menu" : (langCode === "he" ? "תפריט" : "القائمة"));
    }

    setActiveChip(langCode);
    try { localStorage.setItem(KEY, langCode); } catch(e){}
  };


  // Init
  applyLang(getSaved());
  // Restore scroll after reload (language switch)
  try {
    const s = sessionStorage.getItem("lang_scrollY");
    if (s != null) {
      sessionStorage.removeItem("lang_scrollY");
      const y = parseInt(s,10);
      if (!isNaN(y)) setTimeout(() => window.scrollTo(0,y), 50);
    }
  } catch(e){}


  // Click handlers
  chips.forEach(btn => {
    btn.addEventListener("click", () => {
      const next = (btn.dataset.lang || "ar").toLowerCase();
      const cur = window.__getLang ? window.__getLang() : (localStorage.getItem(KEY)||"ar");
      if (next === cur) return;
      try { sessionStorage.setItem("lang_scrollY", String(window.scrollY||0)); } catch(e){}
      try { localStorage.setItem(KEY, next); } catch(e){}
      // full refresh to avoid mixed-language UI
      location.reload();
    });
  });
});
