(() => {
  function bindPhoneNumeric(el){
    if(!el) return;
    el.addEventListener('input', ()=>{
      const v = (el.value||'').toString();
      const cleaned = v.replace(/\D+/g,'');
      if(v !== cleaned) el.value = cleaned;
    });
  }

  function isValidPhone(v){
    const digits = (v||'').toString().replace(/\D+/g,'');
    return digits.length >= 10;
  }

  const images = [
    "assets/slider/s1.jpeg",
    "assets/slider/s2.jpeg",
    "assets/slider/s3.jpeg",
    "assets/slider/s4.jpeg",
    "assets/slider/s5.jpeg",
  ];

  const dict = {
    certifiedBadge: { ar: "✔️ مركز طبي معتمد", en: "✔️ مركز طبي معتمد", he: "✔️ مركز طبي معتمد" },
    clinicName: { ar: "🏥 مركز الارتقاء الطبي", en: "🏥 مركز الارتقاء الطبي", he: "🏥 مركز الارتقاء الطبي" },
    clinicSub: { ar: "صرح طبي رائد.. وجهتك الآمنة لاستعادة صحتك وثقتك", en: "صرح طبي رائد.. وجهتك الآمنة لاستعادة صحتك وثقتك", he: "صرح طبي رائد.. وجهتك الآمنة لاستعادة صحتك وثقتك" },
    clinicLocation: { ar: "📍 موقعنا: سلطنة عمان - مسقط، شارع السلطان قابوس", en: "📍 موقعنا: سلطنة عمان - مسقط، شارع السلطان قابوس", he: "📍 موقعنا: سلطنة عمان - مسقط، شارع السلطان قابوس" },
    topBadgeText: { ar: "⭐ الخيار الطبي رقم #1 لصحة الرجل", en: "⭐ الخيار الطبي رقم #1 لصحة الرجل", he: "⭐ الخيار الطبي رقم #1 لصحة الرجل" },
    stickyOrderBtn: { ar: "اطلب الآن والدفع عند الاستلام", en: "اطلب الآن والدفع عند الاستلام", he: "اطلب الآن والدفع عند الاستلام" },
    title: { ar: "استعد قوتك وثقتك المطلقة في 15 دقيقة فقط!", en: "استعد قوتك وثقتك المطلقة في 15 دقيقة فقط!", he: "استعد قوتك وثقتك المطلقة في 15 دقيقة فقط!" },
    subtitleLine1: { ar: "وداعاً للارتخاء واللقاء القصير مع تركيبة 'رايز' الطبية. أداء فوري، سيطرة تامة، وأمان تام بدون أي أعراض جانبية.", en: "وداعاً للارتخاء واللقاء القصير مع تركيبة 'رايز' الطبية. أداء فوري، سيطرة تامة، وأمان تام بدون أي أعراض جانبية.", he: "وداعاً للارتخاء واللقاء القصير مع تركيبة 'رايز' الطبية. أداء فوري، سيطرة تامة، وأمان تام بدون أي أعراض جانبية." },
    trustIconsHtml: {
      ar: `<div class="hero-trust-badges"><span class="htb-item">⚡ مفعول فوري</span><span class="htb-item">🛡️ آمن 100%</span><span class="htb-item">🤐 خصوصية تامة</span></div>`,
      en: `<div class="hero-trust-badges"><span class="htb-item">⚡ مفعول فوري</span><span class="htb-item">🛡️ آمن 100%</span><span class="htb-item">🤐 خصوصية تامة</span></div>`,
      he: `<div class="hero-trust-badges"><span class="htb-item">⚡ مفعول فوري</span><span class="htb-item">🛡️ آمن 100%</span><span class="htb-item">🤐 خصوصية تامة</span></div>`
    },
    productImagesTitle: { ar: "اكتشف قوة 'رايز' عن قرب", en: "اكتشف قوة 'رايز' عن قرب", he: "اكتشف قوة 'رايز' عن قرب" },
    scarcityHtml: {
      ar: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 إقبال شديد: تم بيع <strong>87%</strong> من الكمية المخصصة للعرض الحالي</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`,
      en: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 إقبال شديد: تم بيع <strong>87%</strong> من الكمية المخصصة للعرض الحالي</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`,
      he: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 إقبال شديد: تم بيع <strong>87%</strong> من الكمية المخصصة للعرض الحالي</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`
    },
    benefitsHtml: { 
      ar: `<ul class='bulletList'><li>⚡ <strong>أداء فوري وصلابة صخرية:</strong> يقضي على مشكلة الضعف والارتخاء بشكل فوري.</li><li>⏱️ <strong>تأخير مضاعف وسيطرة تامة:</strong> يطيل مدة اللقاء بشكل كبير جداً.</li><li>🔥 <strong>رضا كامل بدون تخدير:</strong> لتستمتع بالإحساس الطبيعي 100%.</li><li>🛡️ <strong>البديل الآمن:</strong> آمن تماماً لمرضى الضغط والقلب والسكري.</li></ul>`, 
      en: `<ul class='bulletList'><li>⚡ <strong>أداء فوري وصلابة صخرية:</strong> يقضي على مشكلة الضعف والارتخاء بشكل فوري.</li><li>⏱️ <strong>تأخير مضاعف وسيطرة تامة:</strong> يطيل مدة اللقاء بشكل كبير جداً.</li><li>🔥 <strong>رضا كامل بدون تخدير:</strong> لتستمتع بالإحساس الطبيعي 100%.</li><li>🛡️ <strong>البديل الآمن:</strong> آمن تماماً لمرضى الضغط والقلب والسكري.</li></ul>`, 
      he: `<ul class='bulletList'><li>⚡ <strong>أداء فوري وصلابة صخرية:</strong> يقضي على مشكلة الضعف والارتخاء بشكل فوري.</li><li>⏱️ <strong>تأخير مضاعف وسيطرة تامة:</strong> يطيل مدة اللقاء بشكل كبير جداً.</li><li>🔥 <strong>رضا كامل بدون تخدير:</strong> لتستمتع بالإحساس الطبيعي 100%.</li><li>🛡️ <strong>البديل الآمن:</strong> آمن تماماً لمرضى الضغط والقلب والسكري.</li></ul>` 
    },
    goldGuaranteeHtml: {
      ar: `<div class="gold-icon">🏆</div><h4 class="gold-title">سياسة الضمان الذهبي والاسترداد الفوري</h4><p class="gold-desc" style="margin-bottom:12px;">نحن نتحمل عنك كامل المخاطرة. نقدم لك أقوى ضمان طبي: "النتيجة الفورية أو استرداد أموالك بالكامل".</p><ul class="bulletList" style="text-align:right; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;"><li>⏱️ <strong>اختبار الـ 15 دقيقة:</strong> النتيجة فورية أو استرداد كل شيكل.</li><li>🤐 <strong>بدون أسئلة محرجة:</strong> سرية تامة ومهنية عالية.</li><li>💳 <strong>تحويل سريع:</strong> خلال 24 إلى 48 ساعة عمل.</li></ul>`,
      en: `<div class="gold-icon">🏆</div><h4 class="gold-title">سياسة الضمان الذهبي والاسترداد الفوري</h4><p class="gold-desc" style="margin-bottom:12px;">نحن نتحمل عنك كامل المخاطرة. نقدم لك أقوى ضمان طبي: "النتيجة الفورية أو استرداد أموالك بالكامل".</p><ul class="bulletList" style="text-align:right; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;"><li>⏱️ <strong>اختبار الـ 15 دقيقة:</strong> النتيجة فورية أو استرداد كل شيكل.</li><li>🤐 <strong>بدون أسئلة محرجة:</strong> سرية تامة ومهنية عالية.</li><li>💳 <strong>تحويل سريع:</strong> خلال 24 إلى 48 ساعة عمل.</li></ul>`,
      he: `<div class="gold-icon">🏆</div><h4 class="gold-title">سياسة الضمان الذهبي والاسترداد الفوري</h4><p class="gold-desc" style="margin-bottom:12px;">نحن نتحمل عنك كامل المخاطرة. نقدم لك أقوى ضمان طبي: "النتيجة الفورية أو استرداد أموالك بالكامل".</p><ul class="bulletList" style="text-align:right; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;"><li>⏱️ <strong>اختبار الـ 15 دقيقة:</strong> النتيجة فورية أو استرداد كل شيكل.</li><li>🤐 <strong>بدون أسئلة محرجة:</strong> سرية تامة ومهنية عالية.</li><li>💳 <strong>تحويل سريع:</strong> خلال 24 إلى 48 ساعة عمل.</li></ul>`
    },
    aboutHtml: {
      ar: `<div class="sectionRich"><p class="richIntro">نحن في <strong>"مركز الارتقاء الطبي"</strong> لسنا مجرد نقطة بيع، بل صرح طبي رائد وموثوق بسلطنة عمان.</p><div class="modern-about"><div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>دعم طبي متواصل:</strong> التواصل المباشر/واتساب: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div></div></div>`,
      en: `<div class="sectionRich"><p class="richIntro">نحن في <strong>"مركز الارتقاء الطبي"</strong> لسنا مجرد نقطة بيع، بل صرح طبي رائد وموثوق بسلطنة عمان.</p><div class="modern-about"><div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>دعم طبي متواصل:</strong> التواصل المباشر/واتساب: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div></div></div>`,
      he: `<div class="sectionRich"><p class="richIntro">نحن في <strong>"مركز الارتقاء الطبي"</strong> لسنا مجرد نقطة بيع، بل صرح طبي رائد وموثوق بسلطنة عمان.</p><div class="modern-about"><div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>دعم طبي متواصل:</strong> التواصل المباشر/واتساب: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div></div></div>`
    },
    footerInfo: {
      ar: `<div class="fc-welcome">نحن هنا من أجلك، لتقديم رعاية صحية تليق بك وبثقتك.</div><p>📍 <strong>المقر الرئيسي:</strong> سلطنة عمان - مسقط، شارع السلطان قابوس.</p><p>📞 <strong>للتواصل والواتساب:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`,
      en: `<div class="fc-welcome">نحن هنا من أجلك، لتقديم رعاية صحية تليق بك وبثقتك.</div><p>📍 <strong>المقر الرئيسي:</strong> سلطنة عمان - مسقط، شارع السلطان قابوس.</p><p>📞 <strong>للتواصل والواتساب:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`,
      he: `<div class="fc-welcome">نحن هنا من أجلك، لتقديم رعاية صحية تليق بك وبثقتك.</div><p>📍 <strong>المقر الرئيسي:</strong> سلطنة عمان - مسقط، شارع السلطان قابوس.</p><p>📞 <strong>للتواصل والواتساب:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`
    },
    faqHtml: {
      ar: `<div class='faq-list'>
            <div class='faq-item is-open'><button class='faq-q'>هل للمنتج أي أعراض جانبية؟</button><div class='faq-a'><p>لا، المنتج موضعي وآمن 100%.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل يمكن استخدامه لمرضى السكري والضغط؟</button><div class='faq-a'><p>نعم بكل تأكيد، فهو علاج موضعي خارجي.</p></div></div>
          </div>`,
      en: `<div class='faq-list'>
            <div class='faq-item is-open'><button class='faq-q'>هل للمنتج أي أعراض جانبية؟</button><div class='faq-a'><p>لا، المنتج موضعي وآمن 100%.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل يمكن استخدامه لمرضى السكري والضغط؟</button><div class='faq-a'><p>نعم بكل تأكيد، فهو علاج موضعي خارجي.</p></div></div>
          </div>`,
      he: `<div class='faq-list'>
            <div class='faq-item is-open'><button class='faq-q'>هل للمنتج أي أعراض جانبية؟</button><div class='faq-a'><p>لا، المنتج موضعي وآمن 100%.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل يمكن استخدامه لمرضى السكري والضغط؟</button><div class='faq-a'><p>نعم بكل تأكيد، فهو علاج موضعي خارجي.</p></div></div>
          </div>`
    },
    usageHtml: { 
      ar: `<ol class='stepList'><li><div class='stepHead'>1️⃣ التحضير والنظافة</div><div class='stepBody'><p>اغسل المنطقة وجففها.</p></div></li><li><div class='stepHead'>2️⃣ الاستخدام</div><div class='stepBody'><p>ضع كمية بسيطة ودلك بلطف.</p></div></li><li><div class='stepHead'>3️⃣ الانطلاق</div><div class='stepBody'><p>انتظر 15 دقيقة. لا حاجة للغسل.</p></div></li></ol>`, 
      en: `<ol class='stepList'><li><div class='stepHead'>1️⃣ التحضير والنظافة</div><div class='stepBody'><p>اغسل المنطقة وجففها.</p></div></li><li><div class='stepHead'>2️⃣ الاستخدام</div><div class='stepBody'><p>ضع كمية بسيطة ودلك بلطف.</p></div></li><li><div class='stepHead'>3️⃣ الانطلاق</div><div class='stepBody'><p>انتظر 15 دقيقة. لا حاجة للغسل.</p></div></li></ol>`, 
      he: `<ol class='stepList'><li><div class='stepHead'>1️⃣ التحضير والنظافة</div><div class='stepBody'><p>اغسل المنطقة وجففها.</p></div></li><li><div class='stepHead'>2️⃣ الاستخدام</div><div class='stepBody'><p>ضع كمية بسيطة ودلك بلطف.</p></div></li><li><div class='stepHead'>3️⃣ الانطلاق</div><div class='stepBody'><p>انتظر 15 دقيقة. لا حاجة للغسل.</p></div></li></ol>` 
    },
    suitableHtml: { 
      ar: `<ul class='bulletList'><li>✔️ <strong>لجميع الأعمار.</strong></li><li>✔️ <strong>لمرضى القلب وضغط الدم.</strong></li><li>✔️ <strong>لمرضى السكري.</strong></li></ul>`, 
      en: `<ul class='bulletList'><li>✔️ <strong>لجميع الأعمار.</strong></li><li>✔️ <strong>لمرضى القلب وضغط الدم.</strong></li><li>✔️ <strong>لمرضى السكري.</strong></li></ul>`, 
      he: `<ul class='bulletList'><li>✔️ <strong>لجميع الأعمار.</strong></li><li>✔️ <strong>لمرضى القلب وضغط الدم.</strong></li><li>✔️ <strong>لمرضى السكري.</strong></li></ul>` 
    },

    btnOrder: { ar: "اطلب الآن", en: "اطلب الآن", he: "اطلب الآن" },
    btnFAQ: { ar: "الأسئلة الشائعة", en: "الأسئلة الشائعة", he: "الأسئلة الشائعة" },
    btnAbout: { ar: "من نحن", en: "من نحن", he: "من نحن" },
    secFAQTitle: { ar: "الأسئلة الشائعة", en: "الأسئلة الشائعة", he: "الأسئلة الشائعة" },
    secAboutTitle: { ar: "من نحن", en: "من نحن", he: "من نحن" },
    btnReviews: { ar: "آراء العملاء", en: "آراء العملاء", he: "آراء العملاء" },
    btnLoadMoreReviews: { ar: "عرض المزيد من آراء العملاء", en: "عرض المزيد من آراء العملاء", he: "عرض المزيد من آراء العملاء" },
    reviewsCountLabel: { ar: "عدد التقييمات", en: "عدد التقييمات", he: "عدد التقييمات" },
    reviewsAvgLabel: { ar: "متوسط التقييم", en: "متوسط التقييم", he: "متوسط التقييم" },
    langApplying: { ar: "جارٍ تطبيق اللغة…", en: "جارٍ تطبيق اللغة…", he: "جارٍ تطبيق اللغة…" },
    footerRights: { ar: "جميع الحقوق محفوظة لدى مركز الارتقاء الطبي", en: "جميع الحقوق محفوظة لدى مركز الارتقاء الطبي", he: "جميع الحقوق محفوظة لدى مركز الارتقاء الطبي" },
    btnGuaranteeRefund: { ar: "الضمان والاسترداد", en: "الضمان والاسترداد", he: "الضمان والاسترداد" },
    btnUsage: { ar: "طريقة الاستخدام", en: "طريقة الاستخدام", he: "طريقة الاستخدام" },
    btnBenefits: { ar: "فوائد المنتج", en: "فوائد المنتج", he: "فوائد المنتج" },
    btnSuitable: { ar: "لمن يناسب؟", en: "لمن يناسب؟", he: "لمن يناسب؟" },

    phName: { ar: "الاسم", en: "الاسم", he: "الاسم" },
    phComment: { ar: "اكتب تعليقك...", en: "اكتب تعليقك...", he: "اكتب تعليقك..." },
    btnSendComment: { ar: "إرسال", en: "إرسال", he: "إرسال" },
    rateBeforeComment: { ar: "قيّم المنتج أولاً", en: "قيّم المنتج أولاً", he: "قيّم المنتج أولاً" },
    reviewNeedRating: { ar: "يرجى اختيار عدد النجوم قبل إرسال التعليق.", en: "يرجى اختيار عدد النجوم قبل إرسال التعليق.", he: "يرجى اختيار عدد النجوم قبل إرسال التعليق." },
    reviewSent: { ar: "تم إرسال تقييمك وتعليقك. شكرًا لك!", en: "تم إرسال تقييمك وتعليقك. شكرًا لك!", he: "تم إرسال تقييمك وتعليقك. شكرًا لك!" },
    sendReview: { ar: "إرسال التعليق", en: "إرسال التعليق", he: "إرسال التعليق" },
    secOrderTitle: { ar: "اطلب الآن", en: "اطلب الآن", he: "اطلب الآن" },
    secReviewsTitle: { ar: "آراء العملاء والاستشارات الطبية", en: "آراء العملاء والاستشارات الطبية", he: "آراء العملاء والاستشارات الطبية" },
    secGuaranteeTitle: { ar: "الضمان والاسترداد", en: "الضمان والاسترداد", he: "الضمان والاسترداد" },
    secUsageTitle: { ar: "طريقة الاستخدام", en: "طريقة الاستخدام", he: "طريقة الاستخدام" },
    secBenefitsTitle: { ar: "فوائد المنتج", en: "فوائد المنتج", he: "فوائد المنتج" },
    rateThanksTitle: { ar: "تم التقييم", en: "تم التقييم", he: "تم التقييم" },
    rateThanksText: { ar: "شكرًا لك! تم استلام تقييمك.", en: "شكرًا لك! تم استلام تقييمك.", he: "شكرًا لك! تم استلام تقييمك." },
    okBtn: { ar: "حسنًا", en: "حسنًا", he: "حسنًا" },
    orderTrustMini: { ar: "بياناتك بأمان 🔒 • تأكيد سريع • شحن سري • دفع عند الاستلام", en: "بياناتك بأمان 🔒 • تأكيد سريع • شحن سري • دفع عند الاستلام", he: "بياناتك بأمان 🔒 • تأكيد سريع • شحن سري • دفع عند الاستلام" },
    ofNameLabel: { ar: "الاسم الكامل", en: "الاسم الكامل", he: "الاسم الكامل" },
    ofPhoneLabel: { ar: "رقم الهاتف/واتساب", en: "رقم الهاتف/واتساب", he: "رقم الهاتف/واتساب" },
    ofCountryLabel: { ar: "الدولة", en: "الدولة", he: "الدولة" },
    ofCityLabel: { ar: "المدينة", en: "المدينة", he: "المدينة" },
    ofAddressLabel: { ar: "العنوان التفصيلي", en: "العنوان التفصيلي", he: "العنوان التفصيلي" },
    ofNoteLabel: { ar: "ملاحظة (اختياري)", en: "ملاحظة (اختياري)", he: "ملاحظة (اختياري)" },
    phPhone: { ar: "رقم الهاتف/واتساب", en: "رقم الهاتف/واتساب", he: "رقم الهاتف/واتساب" },
    phCity: { ar: "المدينة", en: "المدينة", he: "المدينة" },
    phAddress: { ar: "العنوان التفصيلي", en: "العنوان التفصيلي", he: "العنوان التفصيلي" },
    phNote: { ar: "ملاحظات إضافية (اختياري)", en: "ملاحظات إضافية (اختياري)", he: "ملاحظات إضافية (اختياري)" },
    countryIL: { ar: "إسرائيل", en: "إسرائيل", he: "إسرائيل" },
    countryPS: { ar: "فلسطين", en: "فلسطين", he: "فلسطين" },
    countryJO: { ar: "الأردن", en: "الأردن", he: "الأردن" },
    countryEG: { ar: "مصر", en: "مصر", he: "مصر" },
    countrySA: { ar: "السعودية", en: "السعودية", he: "السعودية" },
    countryAE: { ar: "الإمارات", en: "الإمارات", he: "الإمارات" },
    countryOM: { ar: "سلطنة عمان", en: "سلطنة عمان", he: "سلطنة عمان" },
    countryQA: { ar: "قطر", en: "قطر", he: "قطر" },
    countryBH: { ar: "البحرين", en: "البحرين", he: "البحرين" },
    currency: { ar: "درهم", en: "درهم", he: "درهم" },
    price1: { ar: "130 درهم", en: "130 درهم", he: "130 درهم" },
    price2: { ar: "200 درهم", en: "200 درهم", he: "200 درهم" },
    price3: { ar: "250 درهم", en: "250 درهم", he: "250 درهم" },
    phReason: { ar: "اكتب السبب باختصار...", en: "اكتب السبب باختصار...", he: "اكتب السبب باختصار..." },
    qtyLabel: { ar: "الكمية", en: "الكمية", he: "الكمية" },
    qty1: { ar: "1 عبوة", en: "1 عبوة", he: "1 عبوة" },
    qty2: { ar: "2 عبوتان", en: "2 عبوتان", he: "2 عبوتان" },
    qty3: { ar: "3 عبوات", en: "3 عبوات", he: "3 عبوات" },
    totalLabel: { ar: "السعر الإجمالي", en: "السعر الإجمالي", he: "السعر الإجمالي" },
    shippingIncluded: { ar: "شامل التوصيل", en: "شامل التوصيل", he: "شامل التوصيل" },
    confirmOrder: { ar: "تأكيد الطلب", en: "تأكيد الطلب", he: "تأكيد الطلب" },
    orderSuccess: { ar: "تم استلام طلبك ✅ سنتواصل معك خلال دقائق.", en: "تم استلام طلبك ✅ سنتواصل معك خلال دقائق.", he: "تم استلام طلبك ✅ سنتواصل معك خلال دقائق." },
    refundFormTitle: { ar: "نموذج طلب الاسترداد", en: "نموذج طلب الاسترداد", he: "نموذج طلب الاسترداد" },
    refundFormHint: { ar: "املأ البيانات التالية وسنتواصل معك خلال 24 ساعة.", en: "املأ البيانات التالية وسنتواصل معك خلال 24 ساعة.", he: "املأ البيانات التالية وسنتواصل معك خلال 24 ساعة." },
    rfName: { ar: "الاسم الكامل", en: "الاسم الكامل", he: "الاسم الكامل" },
    rfPhone: { ar: "رقم الهاتف/واتساب", en: "رقم الهاتف/واتساب", he: "رقم الهاتف/واتساب" },
    rfReceived: { ar: "تاريخ الاستلام", en: "تاريخ الاستلام", he: "تاريخ الاستلام" },
    rfReason: { ar: "سبب طلب الاسترداد", en: "سبب طلب الاسترداد", he: "سبب طلب الاسترداد" },
    rfPhotos: { ar: "صور المنتج والعبوة", en: "صور المنتج والعبوة", he: "صور المنتج والعبوة" },
    choosePhotos: { ar: "اختيار الصور", en: "اختيار الصور", he: "اختيار الصور" },
    sendRefund: { ar: "إرسال طلب الاسترداد", en: "إرسال طلب الاسترداد", he: "إرسال طلب الاسترداد" },
    refundNeedFields: { ar: "يرجى تعبئة الحقول المطلوبة وإرفاق صور.", en: "يرجى تعبئة الحقول المطلوبة وإرفاق صور.", he: "يرجى تعبئة الحقول المطلوبة وإرفاق صور." },
    refundSuccess: { ar: "تم استلام طلب الاسترداد ✅", en: "تم استلام طلب الاسترداد ✅", he: "تم استلام طلب الاسترداد ✅" },
    offersTitle: { ar: "عروض اليوم", en: "عروض اليوم", he: "عروض اليوم" },
    offerEndsIn: { ar: "ينتهي العرض خلال", en: "ينتهي العرض خلال", he: "ينتهي العرض خلال" },
    offerExpired: { ar: "انتهى العرض", en: "انتهى العرض", he: "انتهى العرض" },
    offerPack1: { ar: "عبوة واحدة", en: "عبوة واحدة", he: "عبوة واحدة" },
    offerPack2: { ar: "عبوتين", en: "عبوتين", he: "عبوتين" },
    offerPack3: { ar: "3 عبوات", en: "3 عبوات", he: "3 عبوات" },
    buyNow: { ar: "شراء", en: "شراء", he: "شراء" },
    popularBadge: { ar: "الأكثر طلبًا", en: "الأكثر طلبًا", he: "الأكثر طلبًا" },
    timelineTitle: { ar: "خطوات الشحن السري والمريح 📦", en: "خطوات الشحن السري والمريح 📦", he: "خطوات الشحن السري والمريح 📦" },
    timelineStep1: { ar: "تأكيد الطلب بسرية تامة", en: "تأكيد الطلب بسرية تامة", he: "تأكيد الطلب بسرية تامة" },
    timelineStep2: { ar: "تغليف أسود مبهم لا يظهر محتواه", en: "تغليف أسود مبهم لا يظهر محتواه", he: "تغليف أسود مبهم لا يظهر محتواه" },
    timelineStep3: { ar: "تسليم يدوي والدفع عند الاستلام", en: "تسليم يدوي والدفع عند الاستلام", he: "تسليم يدوي والدفع عند الاستلام" },
    orderSuccessTitle: { ar: "تم إرسال طلبك بنجاح!", en: "تم إرسال طلبك بنجاح!", he: "تم إرسال طلبك بنجاح!" },
    orderSuccessDesc: { ar: "شكرًا لثقتك بنا. طلبك الآن قيد المعالجة وسيقوم فريقنا الطبي بالتواصل معك هاتفياً خلال دقائق لتأكيد الشحن.", en: "شكرًا لثقتك بنا. طلبك الآن قيد المعالجة وسيقوم فريقنا الطبي بالتواصل معك هاتفياً خلال دقائق لتأكيد الشحن.", he: "شكرًا لثقتك بنا. طلبك الآن قيد المعالجة وسيقوم فريقنا الطبي بالتواصل معك هاتفياً خلال دقائق لتأكيد الشحن." },
    successFeature1: { ar: "🔒 خصوصية تامة", en: "🔒 خصوصية تامة", he: "🔒 خصوصية تامة" },
    successFeature2: { ar: "🚚 شحن سريع وسري", en: "🚚 شحن سريع وسري", he: "🚚 شحن سريع وسري" },
    btnUnderstand: { ar: "حسنًا، فهمت", en: "حسنًا، فهمت", he: "حسنًا، فهمت" },
    stat1Label: { ar: "طلب ناجح ومكتمل", en: "طلب ناجح ومكتمل", he: "طلب ناجح ومكتمل" },
    stat2Label: { ar: "نسبة رضا العملاء", en: "نسبة رضا العملاء", he: "نسبة رضا العملاء" },
    stat3Label: { ar: "حالة استرداد فقط", en: "حالة استرداد فقط", he: "حالة استرداد فقط" },
    stat3Note: { ar: "(نعلنها بشفافية لنؤكد مصداقية الضمان)", en: "(نعلنها بشفافية لنؤكد مصداقية الضمان)", he: "(نعلنها بشفافية لنؤكد مصداقية الضمان)" },
    waMessage: { ar: "مرحباً، أريد الاستفسار عن منتج رايز", en: "مرحباً، أريد الاستفسار عن منتج رايز", he: "مرحباً، أريد الاستفسار عن منتج رايز" },
    replyPlaceholder: { ar: "اكتب ردك...", en: "اكتب ردك...", he: "اكتب ردك..." },
    replyNamePlaceholder: { ar: "الاسم", en: "الاسم", he: "الاسم" },
    replySubmit: { ar: "إرسال", en: "إرسال", he: "إرسال" },
    btnMoreReplies: { ar: "عرض المزيد من الردود", en: "عرض المزيد من الردود", he: "عرض المزيد من الردود" },
    mapModalTitle: { ar: "📍 موقع مركز الارتقاء الطبي (مسقط)", en: "📍 موقع مركز الارتقاء الطبي (مسقط)", he: "📍 موقع مركز الارتقاء الطبي (مسقط)" },
    mapPinBadge: { ar: "📍 مركز الارتقاء الطبي (مسقط - سلطنة عمان)", en: "📍 مركز الارتقاء الطبي (مسقط - سلطنة عمان)", he: "📍 مركز الارتقاء الطبي (مسقط - سلطنة عمان)" },
    popupGuarTitle: { ar: "تذكير بالضمان الذهبي", en: "تذكير بالضمان الذهبي", he: "تذكير بالضمان الذهبي" },
    popupGuarDesc: { ar: "طلبك اليوم محمي بضمان الاسترداد الفوري. النتيجة خلال 15 دقيقة أو استرد أموالك بدون أسئلة. (اضغط للتفاصيل)", en: "طلبك اليوم محمي بضمان الاسترداد الفوري. النتيجة خلال 15 دقيقة أو استرد أموالك بدون أسئلة. (اضغط للتفاصيل)", he: "طلبك اليوم محمي بضمان الاسترداد الفوري. النتيجة خلال 15 دقيقة أو استرد أموالك بدون أسئلة. (اضغط للتفاصيل)" }
  };

  const docs = {
    tariq: { name: { ar: "د. طارق عبدالرحمن" }, img: "assets/slider/طارق.jpeg", status: "online" },
    rami: { name: { ar: "د. رامي خليل" }, img: "assets/slider/رامي.jpeg", status: "busy" },
    mahmoud: { name: { ar: "د. محمود صبري" }, img: "assets/slider/محمود.jpeg", status: "online" },
    sara: { name: { ar: "د. سارة محمد" }, img: "assets/slider/سارة.jpeg", status: "online" }
  };

  const seedReviews = [
    { 
      name: { ar: "عيسى محمد" }, 
      text: { ar: "هل يتعارض المنتج مع أدوية الضغط؟ أنا استخدم حبوب ضغط يومياً وخايف يسبب لي مضاعفات." }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "راشد سالم" }, text: { ar: "فعلاً سؤال مهم جداً، كنت أبحث عن إجابة لنفس النقطة." } },
        { ...docs.tariq, text: { ar: "أهلاً بك أخي الكريم. لا تقلق أبداً، تركيبة 'رايز' صُممت كعلاج موضعي خارجي لا يدخل في مجرى الدم الكلي، لذلك هي آمنة تماماً لمرضى الضغط." } },
        { name: { ar: "م. س" }, text: { ar: "الله يعطيك العافية دكتور، كلامك ريحني كثير لأني كنت متردد." } },
        { name: { ar: "أبو سيف" }, text: { ar: "عن تجربة يا غالي انا مريض ضغط ولافيه اي تأثير الحمدلله." } },
        { name: { ar: "VIP_2023" }, text: { ar: "يعطيكم العافية منتج يستحق." } }
      ] 
    },
    { 
      name: { ar: "أبو سيف" }, 
      text: { ar: "عندي سكري من النوع الثاني وضعف شديد بالانتصاب.. هل ينفع معي؟" }, 
      stars: 4, 
      replies: [ 
        { name: { ar: "مهند العلي" }, text: { ar: "المنتج جداً ممتاز وتجربتي معه شخصياً كانت ممتازة." } },
        { ...docs.sara, text: { ar: "حياك الله. نعم فعال جداً في حالتك. مرضى السكري يعانون من ضعف التروية الدموية الطرفية، ورايز يعمل موضعياً لتنشيط التدفق الدموي فوراً." } },
        { name: { ar: "سلطان العمري" }, text: { ar: "شكراً دكتورة على التوضيح الدقيق، طلبت عبوتين وبانتظار وصولها." } },
        { name: { ar: "H.A" }, text: { ar: "انا عندي سكري وفعلا غير حياتي للأفضل." } }
      ] 
    },
    { 
      name: { ar: "خالد عبدالرحمن" }, 
      text: { ar: "نتيجة خرافية من أول استخدام، انصح فيه وبشدة! فعلاً غير حياتي للأفضل." }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "بدر الحربي" }, text: { ar: "أتفق معك تماماً، النتيجة تظهر من أول مرة بشكل مذهل." } },
        { ...docs.tariq, text: { ar: "نحمد الله أن النتيجة نالت رضاكم، وهذا هو الأثر الطبي المدروس تماماً لتركيبتنا." } },
        { name: { ar: "فيصل ناصر" }, text: { ar: "كلامكم شجعني أطلبه اليوم، شكراً لكل الفريق." } },
        { name: { ar: "عاشق الصمت" }, text: { ar: "انا استخدمه من شهر تقريبا ولا غلطة." } },
        { name: { ar: "أبو فهد" }, text: { ar: "متى يوصل اذا طلبت للرياض؟" } },
        { name: { ar: "ماجد المطيري" }, text: { ar: "أبو فهد يوصلك خلال يومين بالكثير." } }
      ] 
    },
    { 
      name: { ar: "سالم الشمري" }, 
      text: { ar: "سمعت إنه يخدر المنطقة تماماً لدرجة إنك ما تحس بشيء.. هل هذا صحيح؟" }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "عمر الحربي" }, text: { ar: "اطمئن، الإحساس طبيعي 100% ولا يوجد أي تخدير مزعج." } },
        { ...docs.mahmoud, text: { ar: "هذا اعتقاد خاطئ شائع بسبب المنتجات التجارية القديمة. رايز لا يحتوي على مخدر موضعي بل يعتمد على التنشيط الذكي للتروية دون فقدان الإحساس الطبيعي." } },
        { name: { ar: "تركي" }, text: { ar: "فعلاً الإحساس طبيعي جداً وهذا أسعدني بعد التجربة." } },
        { name: { ar: "الرحال" }, text: { ar: "منتج رائع وصدق الدفع عند الاستلام يطمن." } }
      ] 
    },
    { 
      name: { ar: "يوسف خليل" }, 
      text: { ar: "كم يدوم المفعول بالضبط؟ وهل لازم اغسله قبل اللقاء؟" }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "ماجد المطيري" }, text: { ar: "المفعول يستمر لساعات طويلة والامتصاص كامل." } },
        { ...docs.rami, text: { ar: "المفعول الفعلي يبدأ خلال 15 دقيقة ويمتد لساعات. ولا داعي لغسله أبداً لأن الجلد يمتصه بالكامل." } },
        { name: { ar: "عبدالله" }, text: { ar: "توضيح ممتاز ودقيق، شكراً لسرعة الرد." } },
        { name: { ar: "F.S" }, text: { ar: "ريحته كيف يا اخوان؟" } },
        { name: { ar: "محمد الزهراني" }, text: { ar: "بدون ريحة، تمتصه البشرة بسرعة." } }
      ] 
    },
    { 
      name: { ar: "سالم المري" }, 
      text: { ar: "التوصيل كان سريع جداً والمنتج فعاليته ممتازة وبدون أي تخدير، شكراً لكم من القلب." }, 
      stars: 5, 
      replies: [
        { ...docs.sara, text: { ar: "شكراً لثقتك بمركزنا، نتمنى لك دوام الصحة والعافية." } },
        { name: { ar: "طارق السبيعي" }, text: { ar: "التوصيل سريع والخصوصية عندهم ممتازة جداً." } },
        { name: { ar: "ناصر" }, text: { ar: "كم استغرق الشحن بالضبط يا اخوان؟" } }
      ] 
    },
    { 
      name: { ar: "فهد العتيبي" }, 
      text: { ar: "هل استخدامه باستمرار يسبب تعود؟ يعني هل ممكن بعدين ما اقدر بدونه؟" }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "مشعل الرشيدي" }, text: { ar: "استخدمته لفترات ولم ألاحظ أي تعود نهائياً." } },
        { ...docs.sara, text: { ar: "التركيبة آمنة للاستخدام المتكرر ولا تسبب أي إدمان عضوي أو تعود وظائفي نهائياً." } },
        { name: { ar: "م.خ" }, text: { ar: "شكرا دكتورة، هذا كان سؤالي بالضبط." } },
        { name: { ar: "أبو يوسف" }, text: { ar: "أنا استخدمه من 3 شهور وكل شيء تمام التمام." } }
      ] 
    },
    { 
      name: { ar: "عبدالإله" }, 
      text: { ar: "عمري 62 سنة، هل سيفيدني أم أنه مخصص للشباب فقط؟" }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "سعيد القحطاني" }, text: { ar: "أنصحك به وبقوة، النتائج ممتازة لكافة الأعمار." } },
        { ...docs.tariq, text: { ar: "المنتج فعال جداً ومناسب للأعمار المتقدمة. شريحة واسعة من عملائنا فوق الستين ويحققون نتائج ممتازة." } },
        { name: { ar: "عبدالإله" }, text: { ar: "توكلت على الله وطلبت الان." } }
      ] 
    },
    { 
      name: { ar: "ياسر عبدالله" }, 
      text: { ar: "افضل منتج جربته حتى الآن، يعطيك ثقة كبيرة جداً والنتيجة تدوم لفترة طويلة." }, 
      stars: 5, 
      replies: [
        { ...docs.mahmoud, text: { ar: "سعداء جداً بسماع هذه التجربة الإيجابية، شكراً لك." } },
        { name: { ar: "وايل العنزي" }, text: { ar: "تجربة ناجحة بكل المقاييس." } },
        { name: { ar: "N.M" }, text: { ar: "انا شفت الإعلان بالصدفة والحمدلله توفقت فيه." } }
      ] 
    },
    { 
      name: { ar: "تركي" }, 
      text: { ar: "أنا استخدمت كريمات ثانية وسببت لي صداع واحمرار بالوجه.. هل هذا نفس الشيء؟" }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "سعود الدوسري" }, text: { ar: "لا يوجد أي صداع أو أعراض جانبية نهائياً مع هذا المنتج." } },
        { ...docs.mahmoud, text: { ar: "لا أبداً. الصداع والاحمرار يحدث بسبب الحبوب الفموية، أما رايز فعلاج موضعي خارجي نقي وآمن تماماً." } },
        { name: { ar: "بن قاسم" }, text: { ar: "صدقت دكتور انا مالي غنى عنه الحين." } }
      ] 
    }
  ];

  const userReviews = [];
  let reviewsShown = 0;
  const INITIAL_REVIEWS = 5;
  let currentLang = "ar";

  function esc(str){
    return String(str).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
  }

  function avatarInitial(name){
    const n = (name||"").trim();
    if(!n) return "•";
    return n[0].toUpperCase();
  }

  function getReviewText(r, lang){
    if(!r || !r.text) return "";
    return r.text[lang] || r.text.ar || r.text.en || r.text.he || "";
  }

  function getReplyName(rep, lang) {
    if(!rep || !rep.name) return "";
    if(typeof rep.name === 'string') return rep.name;
    return rep.name[lang] || rep.name.ar || rep.name.en || "";
  }
  
  function getReplyText(rep, lang) {
    if(!rep || !rep.text) return "";
    if(typeof rep.text === 'string') return rep.text;
    return rep.text[lang] || rep.text.ar || rep.text.en || "";
  }

  function updateReviewSummary(all, lang){
    const rsStars = document.getElementById("rsStars");
    const rsAvg = document.getElementById("rsAvg");
    const rsCount = document.getElementById("rsCount");
    if(!rsStars || !rsAvg || !rsCount) return;

    const count = (all||[]).length;
    const sum = (all||[]).reduce((a,r)=>a + (Number(r.stars)||0), 0);
    const avg = count ? (sum / count) : 0;
    const avgFixed = avg ? avg.toFixed(1) : "0.0";
    const filled = Math.max(0, Math.min(5, Math.round(avg)));
    rsStars.textContent = "★★★★★".slice(0,filled) + "☆☆☆☆☆".slice(0,5-filled);
    rsAvg.textContent = `${avgFixed}/5`;

    const countLabel = (dict.reviewsCountLabel && dict.reviewsCountLabel[lang]) || "";
    rsCount.textContent = countLabel ? `${countLabel}: ${count}` : String(count);
  }

  function renderReviews(lang, reset){
    const list = document.getElementById("reviewsList");
    if(!list) return;

    const all = userReviews.concat(seedReviews);
    updateReviewSummary(all, lang);

    let countToRender = INITIAL_REVIEWS;
    if (reset) {
      list.innerHTML = "";
      countToRender = Math.max(INITIAL_REVIEWS, reviewsShown);
      reviewsShown = 0;
    } else {
      countToRender = Math.min(all.length - reviewsShown, INITIAL_REVIEWS);
    }

    if (countToRender <= 0) return;

    const slice = all.slice(reviewsShown, reviewsShown + countToRender);
    
    slice.forEach(r => {
      const name = typeof r.name === 'object' ? (r.name[lang] || r.name.ar) : (r.name || "");
      const text = getReviewText(r, lang);
      const stars = r.stars || 5;
      const replies = r.replies || [];
      
      let repliesHtml = "";
      const shownReplies = r.showAllReplies ? replies : replies.slice(0, 3);
      
      if (replies.length > 0) {
        repliesHtml += `<div class="repliesList">`;
        shownReplies.forEach(rep => {
          const rName = getReplyName(rep, lang);
          const rText = getReplyText(rep, lang);
          const isDoc = !!rep.img;
          
          if(isDoc) {
            repliesHtml += `
              <div class="replyItem doc-reply">
                <div class="doc-avatar">
                  <img src="${rep.img}" alt="${esc(rName)}" loading="lazy">
                  <span class="status-dot ${rep.status}"></span>
                </div>
                <div class="replyContent">
                  <div class="replyName">${esc(rName)} <span class="doc-badge" title="Verified Doctor">✔️</span></div>
                  <div>${esc(rText)}</div>
                </div>
              </div>
            `;
          } else {
            repliesHtml += `
              <div class="replyItem">
                <div class="replyAvatar" aria-hidden="true">${esc(avatarInitial(rName))}</div>
                <div class="replyContent">
                  <div class="replyName">${esc(rName)}</div>
                  <div>${esc(rText)}</div>
                </div>
              </div>
            `;
          }
        });
        repliesHtml += `</div>`;
        
        if (replies.length > 3 && !r.showAllReplies) {
          const moreText = (dict.btnMoreReplies && dict.btnMoreReplies[lang]) || "عرض المزيد من الردود";
          repliesHtml += `<button class="btnMoreReplies" type="button">${moreText} (${replies.length - 3})</button>`;
        }
      }

      const card = document.createElement("article");
      card.className = "reviewCard";
      
      const phName = dict.replyNamePlaceholder[lang] || "الاسم";
      const phReply = dict.replyPlaceholder[lang] || "اكتب ردك...";
      const btnSubmit = dict.replySubmit[lang] || "إرسال";

      card.innerHTML = `
        <div class="reviewTop">
          <div class="reviewIdentity">
            <div class="reviewAvatar" aria-hidden="true">${esc(avatarInitial(name))}</div>
            <div class="reviewName">${esc(name)}</div>
          </div>
          <div class="reviewStars" aria-label="${stars} / 5">★★★★★</div>
        </div>
        <div class="reviewBody">${esc(text)}</div>
        <div class="repliesSection">
          ${repliesHtml}
          <form class="replyForm">
            <input type="text" placeholder="${esc(phName)}" required class="replyNameInput" />
            <input type="text" placeholder="${esc(phReply)}" required class="replyTextInput" />
            <button type="submit">${esc(btnSubmit)}</button>
          </form>
        </div>
      `;

      const form = card.querySelector('.replyForm');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const n = form.querySelector('.replyNameInput').value.trim();
        const t = form.querySelector('.replyTextInput').value.trim();
        if (n && t) {
          if (!r.replies) r.replies = [];
          r.replies.push({
            name: { ar: n, en: n, he: n }, 
            text: { ar: t, en: t, he: t }
          });
          r.showAllReplies = true;
          renderReviews(currentLang, true);
        }
      });

      const moreBtn = card.querySelector('.btnMoreReplies');
      if (moreBtn) {
        moreBtn.addEventListener('click', () => {
          r.showAllReplies = true;
          renderReviews(currentLang, true);
        });
      }

      list.appendChild(card);
    });

    reviewsShown += countToRender;

    const btnLoadMore = document.getElementById("btnLoadMoreReviews");
    if (btnLoadMore) {
      if (all.length > reviewsShown) {
        btnLoadMore.style.display = "flex";
      } else {
        btnLoadMore.style.display = "none";
      }
    }
  }

  const btnLoadMore = document.getElementById("btnLoadMoreReviews");
  if (btnLoadMore) {
    btnLoadMore.addEventListener("click", () => {
      renderReviews(currentLang, false);
    });
  }

  const overlayEl = document.getElementById("langOverlay");
  const overlayTextEl = document.getElementById("langOverlayText");
  let overlayFailSafe = null;

  function showLangOverlay(lang){
    if(!overlayEl) return;
    const t = (dict.langApplying && dict.langApplying[lang]) || (dict.langApplying && dict.langApplying.ar) || "جارٍ تطبيق اللغة…";
    if(overlayTextEl) overlayTextEl.textContent = t;
    overlayEl.classList.add("is-on");
    overlayEl.setAttribute("aria-hidden","false");
    clearTimeout(overlayFailSafe);
    overlayFailSafe = setTimeout(hideLangOverlay, 1200);
  }
  function hideLangOverlay(){
    if(!overlayEl) return;
    overlayEl.classList.remove("is-on");
    overlayEl.setAttribute("aria-hidden","true");
    clearTimeout(overlayFailSafe);
    overlayFailSafe = null;
  }

  const badgeTexts = [
    { ar: "⭐ الخيار الطبي رقم #1 لصحة الرجل", en: "⭐ الخيار الطبي رقم #1 لصحة الرجل", he: "⭐ الخيار الطبي رقم #1 لصحة الرجل" },
    { ar: "💵 اطلب براحة.. الدفع يداً بيد عند الاستلام", en: "💵 اطلب براحة.. الدفع يداً بيد عند الاستلام", he: "💵 اطلب براحة.. الدفع يداً بيد عند الاستلام" }
  ];
  let currentBadgeIdx = 0;
  
  function updateTopBadgeText(lang) {
    const badgeEl = document.getElementById("topBadgeAnim");
    if (!badgeEl) return;
    badgeEl.textContent = badgeTexts[currentBadgeIdx][lang] || badgeTexts[currentBadgeIdx]['ar'];
  }

  function startTopBadgeAnimation() {
    const badgeEl = document.getElementById("topBadgeAnim");
    if (!badgeEl) return;
    setInterval(() => {
      badgeEl.style.opacity = '0';
      badgeEl.style.transform = 'scale(0.96)';
      setTimeout(() => {
        currentBadgeIdx = (currentBadgeIdx + 1) % badgeTexts.length;
        updateTopBadgeText(currentLang);
        badgeEl.style.opacity = '1';
        badgeEl.style.transform = 'scale(1)';
      }, 400); 
    }, 3500); 
  }
  setTimeout(startTopBadgeAnimation, 1000);

  // --- Clean Cover Slider Logic ---
  function startCoverSlider() {
    const img1 = document.getElementById("coverSlide1");
    const img2 = document.getElementById("coverSlide2");
    if(!img1 || !img2) return;
    setInterval(() => {
      const is1Active = img1.classList.contains("is-active");
      img1.classList.toggle("is-active", !is1Active);
      img2.classList.toggle("is-active", is1Active);
    }, 4500);
  }
  setTimeout(startCoverSlider, 500);

  const setLang = (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      if (el.hasAttribute("data-fixed-ar")) return;
      const key = el.getAttribute("data-i18n");
      const val = dict[key] && dict[key][lang];
      if (val) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      const val = dict[key] && dict[key][lang];
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = dict[key] && dict[key][lang];
      if (val) el.setAttribute("placeholder", val);
    });

    currentLang = lang;
    updateTopBadgeText(lang); 
    renderReviews(lang, true);

    const waBtn = document.querySelector('.floating-wa');
    if(waBtn && dict.waMessage) {
       const msg = dict.waMessage[lang] || dict.waMessage.ar;
       waBtn.href = "https://wa.me/972512865105?text=" + encodeURIComponent(msg);
    }

    document.querySelectorAll(".langchip").forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  };

  document.querySelectorAll(".langchip").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.dataset.lang;
      if(!target || target === currentLang) return;
      showLangOverlay(target);
      requestAnimationFrame(() => {
        try { 
          setLang(target); 
          if(typeof updateTotal === 'function') updateTotal();
        }
        finally { setTimeout(hideLangOverlay, 260); }
      });
    });
  });

  function detectLanguage() {
    const navLang = navigator.language || navigator.userLanguage || "en";
    const lowerLang = navLang.toLowerCase();
    if (lowerLang.startsWith("ar")) return "ar";
    if (lowerLang.startsWith("he")) return "he";
    return "en";
  }
  setLang(detectLanguage());

  const track = document.getElementById("sliderTrack");
  const dots = document.getElementById("dots");
  const thumbs = document.getElementById("thumbs");

  let index = 0;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let autoplayTimer = null;
  const AUTOPLAY_MS = 4200;

  const stopAutoplay = () => { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } };
  const startAutoplay = () => { stopAutoplay(); autoplayTimer = setInterval(() => { if (lb && lb.classList.contains("is-open")) return; next(); }, AUTOPLAY_MS); };
  const restartAutoplaySoon = () => { stopAutoplay(); setTimeout(startAutoplay, 2500); };

  const makeSlide = (src, i) => {
    const s = document.createElement("div"); s.className = "slide is-loading"; s.dataset.index = String(i);
    const img = document.createElement("img"); img.alt = `Slide ${i + 1}`; img.decoding = "async"; img.loading = i === 0 ? "eager" : "lazy"; img.src = src;
    const markReady = () => s.classList.remove("is-loading");
    img.addEventListener("load", markReady, { once: true });
    img.addEventListener("error", () => { s.classList.remove("is-loading"); s.classList.add("is-error"); }, { once: true });
    s.appendChild(img); return s;
  };
  const makeDot = (i) => { const d = document.createElement("button"); d.className = "dot"; d.type = "button"; d.addEventListener("click", () => goTo(i)); return d; };
  const makeThumb = (src, i, cls="thumb") => {
    const b = document.createElement("button"); b.type = "button"; b.className = cls;
    const img = document.createElement("img"); img.src = src; img.alt = `Thumb ${i+1}`; img.loading = "lazy"; img.decoding = "async";
    b.appendChild(img); b.addEventListener("click", () => goTo(i)); return b;
  };

  images.forEach((src, i) => { track.appendChild(makeSlide(src, i)); dots.appendChild(makeDot(i)); thumbs.appendChild(makeThumb(src, i, "thumb")); });

  const updateUI = () => {
    const isRTL = document.documentElement.getAttribute("dir") === "rtl";
    track.style.transform = `translateX(${(isRTL ? 1 : -1) * index * 100}%)`;
    [...dots.children].forEach((d, i) => d.classList.toggle("is-active", i === index));
    [...thumbs.children].forEach((t, i) => t.classList.toggle("is-active", i === index));
    [...track.children].forEach((slideEl, i) => {
      const img = slideEl.querySelector("img");
      if (!img) return;
      slideEl.classList.toggle("is-loading", i === index && !img.complete);
    });
  };

  const goTo = (i) => { index = (i + images.length) % images.length; updateUI(); };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  document.getElementById("nextBtn").addEventListener("click", next);
  document.getElementById("prevBtn").addEventListener("click", prev);

  const frame = document.getElementById("sliderFrame");
  const onDown = (e) => { isDragging = true; stopAutoplay(); startX = (e.touches ? e.touches[0].clientX : e.clientX); currentX = startX; track.style.transition = "none"; };
  const onMove = (e) => { if (!isDragging) return; currentX = (e.touches ? e.touches[0].clientX : e.clientX); const dx = currentX - startX; const pct = (dx / frame.clientWidth) * 100; track.style.transform = `translateX(calc(${-index * 100}% + ${pct}%))`; };
  const onUp = () => {
    if (!isDragging) return;
    isDragging = false; track.style.transition = "";
    const dx = currentX - startX;
    const threshold = frame.clientWidth * 0.18;
    if (dx > threshold) prev(); else if (dx < -threshold) next(); else updateUI();
    restartAutoplaySoon();
  };

  frame.addEventListener("mousedown", onDown); window.addEventListener("mousemove", onMove); window.addEventListener("mouseup", onUp);
  frame.addEventListener("touchstart", onDown, { passive: true }); frame.addEventListener("touchmove", onMove, { passive: true }); frame.addEventListener("touchend", onUp);

  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbThumbs = document.getElementById("lbThumbs");
  const lbZoom = document.querySelector(".lightbox__zoom");
  let lbIndex = 0;

  images.forEach((src, i) => {
    const t = document.createElement("button"); t.type = "button"; t.className = "lbthumb";
    const img = document.createElement("img"); img.src = src; img.alt = `Viewer thumb ${i+1}`; img.loading = "lazy"; img.decoding = "async";
    t.appendChild(img); t.addEventListener("click", () => setLB(i)); lbThumbs.appendChild(t);
  });

  const setLB = (i) => {
    lbIndex = (i + images.length) % images.length; lbImg.src = images[lbIndex]; lbImg.alt = `Image ${lbIndex+1}`;
    [...lbThumbs.children].forEach((t, k) => t.classList.toggle("is-active", k === lbIndex));
    lbZoom.scrollTop = 0; lbZoom.scrollLeft = 0;
  };

  const openLightbox = (i) => { stopAutoplay(); lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; setLB(i); };
  const closeLightbox = () => { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; restartAutoplaySoon(); };
  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbBackdrop").addEventListener("click", closeLightbox);

  updateUI(); startAutoplay();

  (() => {
    const wrap = document.getElementById("srRate"); const modal = document.getElementById("srModal"); const srText = document.getElementById("srText");
    if (!wrap || !modal) return;
    const stars = Array.from(wrap.querySelectorAll(".srStar")); const KEY = "rise_slider_rating_v1"; const AVG = Number(wrap.dataset.avg || "4.9");
    const t = (key) => { const lang = document.documentElement.lang || "ar"; return (dict[key] && dict[key][lang]) ? dict[key][lang] : (dict[key] && dict[key].ar) || ""; };
    const paint = (v) => { stars.forEach((b) => { const n = Number(b.dataset.v); const pct = (n <= v) ? 100 : 0; b.style.setProperty('--p', pct + '%'); b.classList.toggle('isHalf', false); }); };
    const paintAvg = (avg) => { const full = Math.floor(avg); const frac = Math.max(0, avg - full); stars.forEach((b) => { const n = Number(b.dataset.v); let pct = 0; if (n <= full) pct = 100; else if (n === full + 1 && frac > 0) pct = Math.round(frac * 100); b.style.setProperty('--p', pct + '%'); b.classList.toggle('isHalf', pct > 0 && pct < 100); }); };
    const openModal = (messageKey) => { if (srText) srText.textContent = t(messageKey); modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false"); };
    const closeModal = () => { modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true"); };
    const saved = Number(localStorage.getItem(KEY) || 0);
    if (saved) { paint(saved); wrap.classList.add("is-done"); } else { paintAvg(AVG); }
    stars.forEach(btn => { btn.addEventListener("click", () => { const already = Number(localStorage.getItem(KEY) || 0); if (already) { openModal("alreadyRated"); return; } const v = Number(btn.dataset.v); localStorage.setItem(KEY, String(v)); paint(v); wrap.classList.add("is-done"); openModal("thanksRated"); }); });
    modal.addEventListener("click", (e) => { if (e.target && e.target.hasAttribute("data-sr-close")) closeModal(); });
  })();

  const panels = Array.from(document.querySelectorAll(".sectionPanel"));
  const openPanel = (panelEl) => {
    if (!panelEl) return;
    panels.forEach((p) => {
      const isTarget = p === panelEl;
      p.classList.toggle("is-open", isTarget);
      if (isTarget) { requestAnimationFrame(() => { p.style.maxHeight = p.scrollHeight + "px"; }); } 
      else { p.style.maxHeight = "0px"; }
    });
  };

  window.addEventListener("resize", () => { const open = document.querySelector(".sectionPanel.is-open"); if (open) open.style.maxHeight = open.scrollHeight + "px"; });

  function getStickyOffset(){ let h = 0; const langbar = document.querySelector(".langbar"); if(langbar) h += langbar.getBoundingClientRect().height || 0; const actionRow = document.querySelector(".actionRow"); if(actionRow) h += actionRow.getBoundingClientRect().height || 0; return h; }

  const DEFAULT_SECTION = "#reviews";
  const defaultBtn = document.querySelector(`.aBtn[data-scroll="${DEFAULT_SECTION}"]`);
  const defaultPanel = document.querySelector(DEFAULT_SECTION);
  if (defaultBtn && defaultPanel) { document.querySelectorAll("[data-scroll]").forEach((b) => b.classList.remove("is-active")); defaultBtn.classList.add("is-active"); openPanel(defaultPanel); }

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const sel = btn.getAttribute("data-scroll"); if (!sel) return;
      const el = document.querySelector(sel); if (!el) return;
      if (btn.classList.contains('aBtn')) { document.querySelectorAll(".aBtn").forEach((b) => b.classList.remove("is-active")); btn.classList.add("is-active"); }
      openPanel(el);
      setTimeout(() => {
        try {
          const offset = typeof getStickyOffset === "function" ? getStickyOffset() : 0;
          const sectionsBox = document.getElementById("sections");
          const y = (sectionsBox.getBoundingClientRect().top + (window.pageYOffset || window.scrollY)) - offset - 10;
          if (typeof window.scrollTo === "function") { window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: "smooth" }); }
        } catch (_e) {}
      }, 50); 
    });
  });
  
  document.addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains('faq-q')) {
      const parent = e.target.closest('.faq-item');
      if(parent) {
        parent.classList.toggle('is-open');
        const panel = parent.closest('.sectionPanel');
        if (panel && panel.classList.contains('is-open')) { setTimeout(() => { panel.style.maxHeight = panel.scrollHeight + "px"; }, 300); }
      }
    }
  });

  const reviewForm = document.getElementById("reviewForm");
  const rfName = document.getElementById("rfName"); const rfComment = document.getElementById("rfComment"); const rfSubmit = document.getElementById("rfSubmit");
  if (reviewForm && rfName && rfComment) {
    let rfRating = 0; const rfStars = document.getElementById("rfStars"); const rfStarBtns = rfStars ? Array.from(rfStars.querySelectorAll(".starBtn")) : []; const rfStarsSpinner = document.getElementById("rfStarsSpinner"); const rfError = document.getElementById("rfError"); const rfSuccess = document.getElementById("rfSuccess");
    function rfSetStars(val) { rfRating = val; rfStarBtns.forEach((b) => { const n = Number(b.getAttribute("data-star") || 0); b.classList.toggle("isOn", n <= val); }); }
    function rfFlashSpinner(ms = 280) { if (!rfStarsSpinner) return; rfStarsSpinner.classList.add("show"); setTimeout(() => rfStarsSpinner.classList.remove("show"), ms); }
    function enableForm() { rfName.disabled = false; rfName.style.opacity = "1"; rfName.style.cursor = "text"; rfName.style.pointerEvents = "auto"; rfComment.disabled = false; rfComment.style.opacity = "1"; rfComment.style.cursor = "text"; rfComment.style.pointerEvents = "auto"; if (rfSubmit) { rfSubmit.disabled = false; rfSubmit.style.opacity = "1"; rfSubmit.style.cursor = "pointer"; rfSubmit.style.pointerEvents = "auto"; } const lbl = document.getElementById("rfRateLabel"); if (lbl) lbl.style.color = "#10b981"; }
    function disableForm() { rfName.disabled = true; rfName.style.opacity = "0.5"; rfName.style.cursor = "not-allowed"; rfName.style.pointerEvents = "none"; rfComment.disabled = true; rfComment.style.opacity = "0.5"; rfComment.style.cursor = "not-allowed"; rfComment.style.pointerEvents = "none"; if (rfSubmit) { rfSubmit.disabled = true; rfSubmit.style.opacity = "0.5"; rfSubmit.style.cursor = "not-allowed"; rfSubmit.style.pointerEvents = "none"; } const lbl = document.getElementById("rfRateLabel"); if (lbl) lbl.style.color = ""; }
    rfStarBtns.forEach((btn) => { btn.addEventListener("click", () => { const val = Number(btn.getAttribute("data-star") || 0); rfFlashSpinner(); setTimeout(() => { rfSetStars(val); enableForm(); if (rfError) rfError.hidden = true; if (rfSuccess) rfSuccess.hidden = true; }, 220); }); });
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault(); const name = (rfName.value || "").trim(); const comment = (rfComment.value || "").trim(); if (rfSuccess) rfSuccess.hidden = true;
      if (!rfRating) { if (rfError) rfError.hidden = false; reviewForm.classList.remove("shake"); void reviewForm.offsetWidth; reviewForm.classList.add("shake"); return; }
      if (!name || !comment) return;
      if (rfSubmit) { rfSubmit.classList.add("isLoading"); rfSubmit.disabled = true; }
      setTimeout(() => {
        userReviews.unshift({ name: { ar: name, en: name, he: name }, text: { ar: comment, en: comment, he: comment }, stars: rfRating, replies: [] });
        reviewsShown++; renderReviews(currentLang, true);
        rfName.value = ""; rfComment.value = ""; rfSetStars(0); disableForm();
        if (rfSuccess) rfSuccess.hidden = false; if (rfSubmit) { rfSubmit.classList.remove("isLoading"); }
      }, 650);
    });
  }

  const qtySelect = document.getElementById("qtySelect"); const totalPrice = document.getElementById("totalPrice"); const prices = { "1": 130, "2": 200, "3": 250 };
  const updateTotal = () => { if (!qtySelect || !totalPrice) return; const v = qtySelect.value || "1"; const curr = (dict.currency && dict.currency[currentLang]) || dict.currency.ar; totalPrice.textContent = `${prices[v] ?? 130} ${curr}`; };
  if (qtySelect) qtySelect.addEventListener("change", updateTotal); updateTotal();

  const offerTimer = document.getElementById("offerTimer"); const offerChips = Array.from(document.querySelectorAll(".offerChip")); const offerBuyButtons = Array.from(document.querySelectorAll(".offerBuy")); const orderPanel = document.getElementById("order"); const orderBtn = document.querySelector(`.aBtn[data-scroll="#order"]`);
  const OFFER_KEY = "ertqaa_offerEndsAt_v2"; const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  function getOfferEndsAt(){ try{ const raw = localStorage.getItem(OFFER_KEY); const n = raw ? Number(raw) : 0; if (n && Number.isFinite(n) && n > Date.now()) return n; }catch(_e){} const ends = Date.now() + ONE_DAY_MS; try{ localStorage.setItem(OFFER_KEY, String(ends)); }catch(_e){} return ends; }
  const offerEndsAt = getOfferEndsAt(); function pad2(x){ return String(Math.max(0, Math.floor(x))).padStart(2, "0"); }
  function updateOfferTimer(){ if(!offerTimer) return; const left = offerEndsAt - Date.now(); if(left <= 0){ offerTimer.textContent = dict.offerExpired[currentLang] || "انتهى العرض"; return; } const h = Math.floor(left / 3600000); const m = Math.floor((left % 3600000) / 60000); const s = Math.floor((left % 60000) / 1000); offerTimer.textContent = `${pad2(h)}:${pad2(m)}:${pad2(s)}`; }
  updateOfferTimer(); setInterval(updateOfferTimer, 1000);

  function selectOffer(qty){ const q = String(qty || "1"); offerChips.forEach(ch => ch.classList.toggle("is-selected", ch.getAttribute("data-offer") === q)); if (qtySelect){ qtySelect.value = q; try{ updateTotal(); }catch(_e){} } }
  offerBuyButtons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
      e.preventDefault(); e.stopPropagation();
      const chip = btn.closest(".offerChip"); const q = chip ? chip.getAttribute("data-offer") : "1"; selectOffer(q);
      if (orderBtn) { document.querySelectorAll(".aBtn").forEach(b => b.classList.remove("is-active")); orderBtn.classList.add("is-active"); }
      if (orderPanel){ try{ openPanel(orderPanel); }catch(_e){} setTimeout(() => { try { const offset = typeof getStickyOffset === "function" ? getStickyOffset() : 0; const sectionsBox = document.getElementById("sections"); const y = (sectionsBox.getBoundingClientRect().top + (window.pageYOffset || window.scrollY)) - offset - 10; window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: "smooth" }); } catch (_e) {} }, 50); }
    });
  });

  const orderForm = document.getElementById("orderForm"); const ofSubmit = document.getElementById("ofSubmit"); const orderModal = document.getElementById("orderModal");
  const openOrderModal = () => { if (!orderModal) return; orderModal.classList.add("is-open"); orderModal.setAttribute("aria-hidden", "false"); };
  const closeOrderModal = () => { if (!orderModal) return; orderModal.classList.remove("is-open"); orderModal.setAttribute("aria-hidden", "true"); };
  if (orderModal) { orderModal.addEventListener("click", (e) => { const t = e.target; if (t && (t.hasAttribute("data-order-close") || t.closest?.("[data-order-close]"))) { closeOrderModal(); } }); }
  bindPhoneNumeric(document.getElementById("ofPhone")); bindPhoneNumeric(document.getElementById("rfuPhone"));
  
  if (orderForm && ofSubmit) {
    orderForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const phone = (document.getElementById("ofPhone")?.value || "").trim();
      if (!isValidPhone(phone)) { if (orderForm.reportValidity) orderForm.reportValidity(); return; }
      const offerChip = document.querySelector(".offerChip.is-selected") || document.querySelector(".offerChip.is-popular") || document.querySelector(".offerChip");
      const offerName = offerChip?.querySelector(".offerQty")?.textContent?.trim() || "";
      const totalText = document.getElementById("totalPrice")?.textContent?.trim() || "";
      const hiddenOffer = document.getElementById("ofOfferName"); const hiddenTotal = document.getElementById("ofTotalHidden");
      if (hiddenOffer) hiddenOffer.value = offerName; if (hiddenTotal) hiddenTotal.value = totalText;
      ofSubmit.classList.add("isLoading"); ofSubmit.disabled = true;
      try { await fetch(orderForm.action, { method: "POST", body: new FormData(orderForm), headers: { "Accept": "application/json" } }); } catch (err) { console.log("Submit status:", err); } finally { ofSubmit.classList.remove("isLoading"); ofSubmit.disabled = false; openOrderModal(); try { orderForm.reset(); } catch(_e) {} }
    });

  const rfuPhotos = document.getElementById("rfuPhotos"); const rfuPreview = document.getElementById("rfuPreview"); const refundForm = document.getElementById("refundRequestForm"); const rfuSubmit = document.getElementById("rfuSubmit"); const rfuError = document.getElementById("rfuError"); const rfuSuccess = document.getElementById("rfuSuccess");
  const clearPreview = () => { if (!rfuPreview) return; rfuPreview.innerHTML = ""; };
  if (rfuPhotos && rfuPreview) { rfuPhotos.addEventListener("change", () => { clearPreview(); const files = Array.from(rfuPhotos.files || []); files.slice(0, 6).forEach(file => { const url = URL.createObjectURL(file); const box = document.createElement("div"); box.className = "pv"; const img = document.createElement("img"); img.src = url; img.alt = "photo"; box.appendChild(img); rfuPreview.appendChild(box); }); }); }
  const hasValue = (id) => { const el = document.getElementById(id); return el && String(el.value || "").trim().length > 0; };
  if (refundForm && rfuSubmit) {
    refundForm.addEventListener("submit", (e) => {
      e.preventDefault(); rfuError && (rfuError.hidden = true); rfuSuccess && (rfuSuccess.hidden = true);
      const phoneVal = (document.getElementById("rfuPhone")?.value || "").trim();
      const ok = hasValue("rfuName") && hasValue("rfuPhone") && hasValue("rfuReceived") && hasValue("rfuReason") && isValidPhone(phoneVal);
      const hasPhotos = rfuPhotos && (rfuPhotos.files || []).length > 0;
      if (!ok || !hasPhotos) { if (rfuError) rfuError.hidden = false; if (refundForm.reportValidity) refundForm.reportValidity(); return; }
      rfuSubmit.classList.add("isLoading"); rfuSubmit.disabled = true;
      setTimeout(() => { rfuSubmit.classList.remove("isLoading"); rfuSubmit.disabled = false; if (rfuSuccess) rfuSuccess.hidden = false; }, 750);
    });
  }
}

  // --- Map Modal Logic ---
  const mapModal = document.getElementById("mapModal");
  const btnOpenMap = document.getElementById("btnOpenMap");
  if(btnOpenMap && mapModal) {
    btnOpenMap.addEventListener("click", () => {
      mapModal.classList.add("is-open");
      mapModal.setAttribute("aria-hidden", "false");
    });
    mapModal.addEventListener("click", (e) => {
      if (e.target && e.target.hasAttribute("data-map-close")) {
        mapModal.classList.remove("is-open");
        mapModal.setAttribute("aria-hidden", "true");
      }
    });
  }

  // --- Guarantee Smart Popup Logic ---
  const guaranteePopup = document.getElementById("guaranteePopup");
  if(guaranteePopup) {
    setTimeout(() => {
      guaranteePopup.classList.add("show");
      setTimeout(() => { guaranteePopup.classList.remove("show"); }, 10000); 
    }, 15000);

    setTimeout(() => {
      guaranteePopup.classList.add("show");
      setTimeout(() => { guaranteePopup.classList.remove("show"); }, 10000);
    }, 60000);

    guaranteePopup.addEventListener("click", () => {
      guaranteePopup.classList.remove("show");
      const guarBtn = document.querySelector(`.aBtn[data-scroll="#guarantee"]`);
      if(guarBtn) guarBtn.click();
    });
  }

})();
