// قاموس الترجمة
const translations = {
  ar: {
    heroTitle: "استعد سيطرتك.. بثقة وأمان تام",
    heroSub: "منتج 'رايز' الموضعي، البديل الآمن للحبوب. نتيجة فورية خلال 15 دقيقة بدون تخدير وبدون صداع.",
    ctaButton: "اطلب الآن - الدفع عند الاستلام",
    feat1Title: "آمن لمرضى القلب والضغط 🫀",
    feat1Desc: "استعمال خارجي لا يدخل مجرى الدم، لا يسبب خفقان أو ارتفاع بالضغط.",
    feat2Title: "إحساس طبيعي 100% ⚡",
    feat2Desc: "لا يسبب تخدير أو فقدان للمتعة، تركيبة متطورة تمنحك تأخيراً مع الحفاظ على الإحساس.",
    feat3Title: "سرية تامة 📦",
    feat3Desc: "يصلك في تغليف أسود مبهم تماماً، المندوب نفسه لا يعرف محتوى الطرد.",
    communityTitle: "نقاشات وتجارب العملاء 💬",
    orderTitle: "احجز طلبك الآن بسرية",
    scarcityMsg: "الكمية المتبقية من العرض: 4 عبوات فقط!",
    selectPackage: "-- اختر العرض المناسب --",
    submitOrder: "تأكيد الطلب - الدفع عند الاستلام"
  },
  he: {
    heroTitle: "החזר את השליטה.. בביטחון ובטיחות",
    heroSub: "מוצר 'רייז' המקומי, התחליף הבטוח לכדורים. תוצאה מיידית תוך 15 דקות ללא הרדמה וללא כאבי ראש.",
    ctaButton: "הזמן עכשיו - תשלום במשלוח",
    feat1Title: "בטוח לחולי לב ולחץ דם 🫀",
    feat1Desc: "שימוש חיצוני שלא נכנס למחזור הדם, אינו גורם לדפיקות לב או עלייה בלחץ דם.",
    feat2Title: "תחושה טבעית 100% ⚡",
    feat2Desc: "לא גורם להרדמה או אובדן הנאה.",
    feat3Title: "סודיות מוחלטת 📦",
    feat3Desc: "מגיע באריזה שחורה אטומה לחלוטין.",
    communityTitle: "דיונים וחוויות לקוחות 💬",
    orderTitle: "הזמן עכשיו בסודיות",
    scarcityMsg: "הכמות שנותרה במבצע: 4 יחידות בלבד!",
    selectPackage: "-- בחר את המבצע --",
    submitOrder: "אישור הזמנה - תשלום במשלוח"
  },
  en: {
    heroTitle: "Regain Control.. Safely & Confidently",
    heroSub: "Rise topical cream, the safe alternative to pills. Immediate results in 15 mins. No numbing, no headaches.",
    ctaButton: "Order Now - Pay on Delivery",
    feat1Title: "Safe for Heart & Blood Pressure 🫀",
    feat1Desc: "External use only. Doesn't enter the bloodstream.",
    feat2Title: "100% Natural Feeling ⚡",
    feat2Desc: "Advanced formula without numbing effects.",
    feat3Title: "Discreet Packaging 📦",
    feat3Desc: "Delivered in a plain black package.",
    communityTitle: "Customer Q&A & Experiences 💬",
    orderTitle: "Secure Your Order Discreetly",
    scarcityMsg: "Only 4 packages left in stock!",
    selectPackage: "-- Select Your Package --",
    submitOrder: "Confirm Order - Pay on Delivery"
  }
};

// وظيفة تغيير اللغة
function changeLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// تفعيل الخدعة الذكية (التحويل للواتساب من مربع النقاشات)
document.addEventListener("DOMContentLoaded", function() {
  const submitBtns = document.querySelectorAll('.qa-submit-btn');
  const msgBox = document.getElementById('qa-msg');

  submitBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const container = this.parentElement;
      const name = container.querySelector('.qa-name').value.trim();
      const text = container.querySelector('.qa-input').value.trim();
      
      if(text === "") {
        container.querySelector('.qa-input').focus();
        return;
      }
      
      // تغيير حالة الزر وإظهار الرسالة
      this.disabled = true;
      this.textContent = "جاري التحويل...";
      msgBox.hidden = false;
      
      // الانتظار ثانية ونصف للمصداقية ثم فتح الواتساب
      setTimeout(() => {
        const whatsappNumber = "972512865105"; // رقم المتجر
        const message = `مرحباً، أنا ${name !== "" ? name : "عميل"}.. لدي هذا الاستفسار من قسم النقاشات:\n\n${text}`;
        const encodedText = encodeURIComponent(message);
        window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
        
        // إعادة الزر لحالته
        this.disabled = false;
        this.textContent = "إرسال الرد";
        msgBox.hidden = true;
        container.querySelector('.qa-input').value = "";
      }, 1500);
    });
  });
});
