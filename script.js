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
    certifiedBadge: { ar: "✔️ مركز طبي معتمد", en: "✔️ Certified Medical Center", he: "✔️ מרכז רפואי מוסמך" },
    stickyOrderBtn: { ar: "اطلب الآن والدفع عند الاستلام", en: "Order now, Pay on delivery", he: "הזמן עכשיו, שלם במשלוח" },
    title: { ar: "استعد قوتك وثقتك المطلقة في 15 دقيقة فقط!", en: "Regain your strength and confidence in just 15 minutes!", he: "החזר את הכוח והביטחון שלך ב-15 דקות בלבד!" },
    subtitleLine1: { ar: "وداعاً للارتخاء واللقاء القصير مع تركيبة 'رايز' الطبية. أداء فوري، سيطرة تامة، وأمان تام بدون أي أعراض جانبية (مناسب لمرضى القلب والضغط).", en: "Say goodbye to weakness with Rise medical formula. Instant performance, full control, and completely safe.", he: "תגיד שלום לחולשה עם הנוסחה הרפואית של Rise. ביצועים מיידיים, שליטה מלאה ובטוח לחלוטין." },
    trustIconsHtml: {
      ar: `<div class="hero-trust-badges"><span class="htb-item">⚡ مفعول فوري</span><span class="htb-item">🛡️ آمن 100%</span><span class="htb-item">🤐 خصوصية تامة</span></div>`,
      en: `<div class="hero-trust-badges"><span class="htb-item">⚡ Fast Effect</span><span class="htb-item">🛡️ 100% Safe</span><span class="htb-item">🤐 Total Privacy</span></div>`,
      he: `<div class="hero-trust-badges"><span class="htb-item">⚡ השפעה מהירה</span><span class="htb-item">🛡️ 100% בטוח</span><span class="htb-item">🤐 פרטיות מלאה</span></div>`
    },
    productImagesTitle: { ar: "اكتشف قوة 'رايز' عن قرب", en: "Discover Rise closely", he: "גלה את Rise מקרוב" },
    scarcityHtml: {
      ar: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 إقبال شديد: تم بيع <strong>87%</strong> من الكمية المخصصة للعرض الحالي</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`,
      en: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 High Demand: <strong>87%</strong> of the current offer stock sold</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`,
      he: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 ביקוש גבוה: <strong>87%</strong> מהמלאי במבצע הנוכחי נמכר</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`
    },
    benefitsHtml: { 
      ar: `<ul class='bulletList'>
        <li>⚡ <strong>أداء فوري وصلابة صخرية:</strong> يقضي على مشكلة الضعف والارتخاء بشكل فوري. يضمن لك قوة وصلابة خلال 15 دقيقة فقط، ويحافظ عليها طوال مدة اللقاء.</li>
        <li>⏱️ <strong>تأخير مضاعف وسيطرة تامة:</strong> يمنحك السيطرة الكاملة على وقتك. يطيل مدة اللقاء بشكل كبير جداً، وينهي التوتر والإحراج المرتبط بسرعة الانتهاء نهائياً.</li>
        <li>🔥 <strong>رضا كامل بدون تخدير (لن تفقد الإحساس):</strong> "رايز" يعمل بتقنية ذكية تقلل الحساسية المفرطة فقط، لتستمتع بالإحساس الطبيعي 100% دون أي شعور بالخدر المزعج.</li>
        <li>🛡️ <strong>البديل الآمن (لا يسبب الصداع):</strong> كونه علاجاً موضعياً خارجياً، فهو لا يدخل في مجرى الدم الكلي. بدون صداع، بدون احمرار، آمن تماماً لمرضى الضغط والقلب والسكري.</li>
        <li>💪 <strong>جاهزية سريعة وثقة مطلقة:</strong> لا يحتاج لخطوات معقدة أو انتظار طويل. استخدمه، دلكه بلطف، واستعد ثقتك المطلقة بنفسك وبأدائك.</li>
      </ul>`, 
      en: `<ul class='bulletList'><li>Eliminates softness permanently.</li><li>Stronger, bigger erection.</li><li>Noticeable delay of ejaculation.</li><li>Professional medical formula.</li></ul>`, 
      he: `<ul class='bulletList'><li>מבטל את הרפיון לחלוטין.</li><li>זקפה חזקה וארוכת טווח.</li><li>דחיית שפיכה ללא חוסר תחושה.</li><li>נוסחה רפואית מקצועית.</li></ul>` 
    },
    goldGuaranteeHtml: {
      ar: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">سياسة الضمان الذهبي والاسترداد الفوري</h4>
           <p class="gold-desc" style="margin-bottom:12px;">نحن نتحمل عنك كامل المخاطرة. نقدم لك أقوى ضمان طبي: "النتيجة الفورية أو استرداد أموالك بالكامل".</p>
           <ul class="bulletList" style="text-align:right; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>اختبار الـ 15 دقيقة:</strong> إذا لم تحصل على قوة وتأخير ملحوظ خلال 15 دقيقة من تجربتك الأولى، لك الحق في استرداد كل شيكل.</li>
             <li>🤐 <strong>بدون أسئلة محرجة:</strong> يتم التعامل مع طلب الاسترداد بمهنية وسرية تامة دون الحاجة لتبريرات معقدة.</li>
             <li>💳 <strong>تحويل سريع:</strong> يتم تحويل المبلغ كاملاً إلى حسابك خلال 24 إلى 48 ساعة عمل كحد أقصى.</li>
             <li>📜 <strong>شروط عادلة:</strong> تقديم الطلب خلال 72 ساعة، الاستخدام للتجربة فقط (مرة أو مرتين)، وإرفاق صورة العبوة الأصلية.</li>
           </ul>`,
      en: `<div class="gold-icon">🏆</div><h4 class="gold-title">100% Money Back Guarantee</h4><p class="gold-desc">If you don't see satisfactory results within 15 minutes, you can get a full refund instantly without awkward questions.</p>`,
      he: `<div class="gold-icon">🏆</div><h4 class="gold-title">100% החזר כספי מובטח</h4><p class="gold-desc">אם לא תראה תוצאות מספקות תוך 15 דקות, תוכל לקבל החזר מלא באופן מיידי וללא שאלות מביכות.</p>`
    },
    aboutHtml: {
      ar: `<div class="sectionRich">
            <p class="richIntro">نحن في <strong>"مركز الارتقاء الطبي"</strong> لسنا مجرد نقطة بيع، بل صرح طبي رائد وموثوق. كرسنا جهودنا لتقديم حلول صحية مبتكرة تركز حصرياً على "صحة الرجل"، وتوفير علاجات جذرية وآمنة لمشاكل الضعف والارتخاء.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text"><strong>فلسفتنا الطبية:</strong> توفير بدائل آمنة وموضعية تغنيك تماماً عن الحبوب الكيميائية التي تؤثر سلباً على نبضات القلب والضغط.</div></div>
              <div class="about-item"><div class="about-icon">🛡️</div><div class="about-text"><strong>جودة لا تُضاهى:</strong> تركيبات مفحوصة وصارمة، سريعة الامتصاص، تمنحك مفعولاً خلال 15 دقيقة مع الحفاظ على الإحساس 100%.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text"><strong>الخصوصية التامة:</strong> نظام صارم لحماية البيانات. تسليم يداً بيد في "تغليف أسود مبهم بالكامل" لا يدل على محتواه.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>دعم طبي متواصل:</strong> فريقنا متواجد للرد على استفساراتكم بسرية.<br>التواصل المباشر/واتساب: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div>
            </div>
           </div>`,
      en: `<p class="richIntro">Medical Elevation Center is a specialized medical institution dedicated to men's health and advanced safe solutions. Call us: +972512865105</p>`,
      he: `<p class="richIntro">מרכז העלייה הרפואי הוא מוסד רפואי מתמחה בבריאות הגבר. צור קשר: +972512865105</p>`
    },
    footerInfo: {
      ar: `<div class="fc-welcome">نحن هنا من أجلك، لتقديم رعاية صحية تليق بك وبثقتك.</div>
           <p>📍 <strong>المقر الرئيسي:</strong> سلطنة عمان - مسقط، شارع السلطان قابوس، المجمع الطبي، الطابق الثاني.</p>
           <p>🕒 <strong>مواعيد العمل:</strong> من الأحد إلى الخميس (9:00 صباحاً حتى 9:00 مساءً - الجمعة عطلة رسمية)</p>
           <p>🚚 <strong>نطاق الشحن:</strong> توصيل سريع في تغليف أسود مبهم لجميع المدن.</p>
           <p>📞 <strong>للتواصل والواتساب:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`,
      en: `<div class="fc-welcome">We are here for you, providing health care worthy of your trust.</div>
           <p>📍 <strong>Address:</strong> Oman, Muscat, Sultan Qaboos Street, Medical Complex</p>
           <p>🕒 <strong>Hours:</strong> Sun-Thu 9:00 AM to 9:00 PM (Closed Friday)</p>
           <p>📞 <strong>Contact:</strong> +972512865105</p>`,
      he: `<div class="fc-welcome">אנחנו כאן בשבילך, מספקים שירותי בריאות הראויים לאמון שלך.</div>
           <p>📍 <strong>כתובת:</strong> עומאן, מוסקט, רחוב סולטאן קאבוס, המתחם הרפואי</p>
           <p>🕒 <strong>שעות:</strong> א'-ה' 9:00 עד 21:00 (סגור בשישי)</p>
           <p>📞 <strong>צור קשר:</strong> +972512865105</p>`
    },
    faqHtml: {
      ar: `<div class='faq-list'>
            <div class='faq-item is-open'>
              <button class='faq-q'>هل للمنتج أي أعراض جانبية (مثل الصداع أو خفقان القلب)؟</button>
              <div class='faq-a'><p>لا، المنتج موضعي وآمن 100%. لا يدخل في مجرى الدم ولا يسبب أي صداع، احمرار للوجه، أو تسارع في نبضات القلب نهائياً.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q'>هل يمكن استخدامه لمرضى السكري والضغط والقلب؟</button>
              <div class='faq-a'><p>نعم بكل تأكيد. نظراً لأنه علاج موضعي خارجي، فهو لا يتعارض مع أدوية السكري أو الضغط، ويعتبر البديل الطبي الأكثر أماناً.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q'>هل يسبب المنتج أي تخدير أو فقدان للإحساس؟</button>
              <div class='faq-a'><p>إطلاقاً. على عكس البخاخات التقليدية، تركيبتنا الطبية تقلل الحساسية المفرطة وتزيد الصلابة مع الحفاظ على المتعة والإحساس الطبيعي 100%.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q'>متى يبدأ مفعول المنتج وكم يدوم؟</button>
              <div class='faq-a'><p>يبدأ المفعول الفعلي خلال 15 إلى 20 دقيقة من الاستخدام والتدليك الجيد، ويستمر التأثير لساعات لضمان تجربة مرضية بالكامل.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q'>هل التوصيل سري؟ وكيف يتم الدفع؟</button>
              <div class='faq-a'><p>نلتزم بخصوصيتك التامة؛ يتم شحن المنتج بتغليف مبهم لا يوضح محتواه. والدفع يكون براحة وأمان عند الاستلام.</p></div>
            </div>
          </div>`,
      en: `<p>FAQ available in Arabic.</p>`,
      he: `<p>שאלות נפוצות זמינות בערבית.</p>`
    },
    usageHtml: { 
      ar: `<p class='richIntro'>خطوات بسيطة وسريعة للحصول على أداء جبار:</p>
      <ol class='stepList'>
        <li><div class='stepHead'>1️⃣ التحضير والنظافة</div><div class='stepBody'><p>تأكد من غسل المنطقة الحساسة وتجفيفها تماماً لضمان أقصى سرعة لامتصاص المنتج.</p></div></li>
        <li><div class='stepHead'>2️⃣ الاستخدام والتدليك</div><div class='stepBody'><p>ضع كمية بسيطة وقم بتوزيعها وتدليكها بلطف بحركات دائرية لمدة دقيقة واحدة حتى يمتصها الجلد بالكامل.</p></div></li>
        <li><div class='stepHead'>3️⃣ الانطلاق</div><div class='stepBody'><p>انتظر من 15 إلى 20 دقيقة ليبدأ المفعول الجبار. <strong>لا حاجة للغسل بعد الاستخدام</strong>، المنتج آمن تماماً!</p></div></li>
      </ol>
      <div class="usage-note">💡 <strong>ملاحظة:</strong> العبوة اقتصادية ومركزة جداً، وتكفي حتى 30 استخداماً.</div>`, 
      en: `<p class='richIntro'>Follow these simple steps:</p><ol class='stepList'><li>Wash and dry the area.</li><li>Apply a pea-sized amount and massage gently.</li><li>Wait 15-20 minutes. No need to wash off.</li></ol><div class="usage-note">💡 <strong>Note:</strong> The bottle is highly concentrated and lasts up to 30 uses.</div>`, 
      he: `<p class='richIntro'>עקוב אחר השלבים הפשוטים הבאים:</p><ol class='stepList'><li>שטוף ויבש את האזור.</li><li>מרח כמות קטנה ועסה בעדינות.</li><li>המתן 15-20 דקות. אין צורך לשטוף.</li></ol><div class="usage-note">💡 <strong>הערה:</strong> הבקבוק מרוכז מאוד ומספיק לעד 30 שימושים.</div>` 
    },
    suitableHtml: { 
      ar: `<p class='richIntro'>صُمم هذا المنتج ليكون آمناً وفعّالاً للجميع بدون استثناء:</p>
      <ul class='bulletList'>
        <li>✔️ <strong>لجميع الأعمار:</strong> فعال بقوة للشباب وكبار السن (من الثلاثينيات وحتى ما بعد الستين) لاستعادة ذروة الأداء.</li>
        <li>✔️ <strong>لمرضى القلب وضغط الدم:</strong> منتج موضعي آمن تماماً، لا يدخل في مجرى الدم الكلي ولا يسبب أي تسارع في نبضات القلب.</li>
        <li>✔️ <strong>لمرضى السكري:</strong> لا يتداخل إطلاقاً مع مستويات السكر في الدم أو أدوية السكري.</li>
      </ul>`, 
      en: `<ul class='bulletList'><li>Suitable for all ages.</li><li>Safe for heart & blood pressure patients.</li><li>Safe for diabetics.</li></ul>`, 
      he: `<ul class='bulletList'><li>מתאים לכל הגילאים.</li><li>בטוח לחולי לב ולחץ דם.</li><li>בטוח לחולי סוכרת.</li></ul>` 
    },

    btnOrder: { ar: "اطلب الآن", en: "Order now", he: "הזמן עכשיו" },
    btnFAQ: { ar: "الأسئلة الشائعة", en: "FAQ", he: "שאלות נפוצות" },
    btnAbout: { ar: "من نحن", en: "About Us", he: "עלינו" },
    secFAQTitle: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions", he: "שאלות נפוצות" },
    secAboutTitle: { ar: "من نحن", en: "About Us", he: "עלינו" },
    btnReviews: { ar: "آراء العملاء", en: "Customer reviews", he: "חוות דעת" },
    btnLoadMoreReviews: { ar: "عرض المزيد من آراء العملاء", en: "Load more reviews", he: "טען עוד חוות דעת" },
    reviewsCountLabel: { ar: "عدد التقييمات", en: "Ratings count", he: "מספר דירוגים" },
    reviewsAvgLabel: { ar: "متوسط التقييم", en: "Average rating", he: "דירוג ממוצע" },
    langApplying: { ar: "جارٍ تطبيق اللغة…", en: "Applying language…", he: "מיישם שפה…" },
    footerRights: { ar: "جميع الحقوق محفوظة لدى مركز الارتقاء الطبي", en: "All rights reserved to Medical Elevation Center", he: "כל הזכויות שמורות למרכז העלייה הרפואי" },
    btnGuaranteeRefund: { ar: "الضمان والاسترداد", en: "Guarantee & refund", he: "אחריות והחזר" },
    btnUsage: { ar: "طريقة الاستخدام", en: "How to use", he: "אופן שימוש" },
    btnBenefits: { ar: "فوائد المنتج", en: "Benefits", he: "יתרונות" },
    btnSuitable: { ar: "لمن يناسب؟", en: "Who is it for?", he: "למי זה מתאים?" },

    phName: { ar: "الاسم", en: "Name", he: "שם" },
    phComment: { ar: "اكتب تعليقك...", en: "Write your comment...", he: "כתוב תגובה..." },
    btnSendComment: { ar: "إرسال", en: "Send", he: "שלח" },
    rateBeforeComment: { ar: "قيّم المنتج أولاً", en: "Rate the product first", he: "דרג את המוצר קודם" },
    reviewNeedRating: { ar: "يرجى اختيار عدد النجوم قبل إرسال التعليق.", en: "Please select a star rating before commenting.", he: "אנא בחר דירוג כוכבים לפני שליחת תגובה." },
    reviewSent: { ar: "تم إرسال تقييمك وتعليقك. شكرًا لك!", en: "Your rating and comment were submitted. Thank you!", he: "הדירוג והתגובה נשלחו. תודה!" },
    sendReview: { ar: "إرسال التعليق", en: "Send review", he: "שלח ביקורת" },
    secOrderTitle: { ar: "اطلب الآن", en: "Order now", he: "הזמן עכשיו" },
    secReviewsTitle: { ar: "آراء العملاء", en: "Customer reviews", he: "חוות דעת" },
    secGuaranteeTitle: { ar: "الضمان والاسترداد", en: "Guarantee & refund", he: "אחריות והחזר" },
    secUsageTitle: { ar: "طريقة الاستخدام", en: "How to use", he: "אופן שימוש" },
    secBenefitsTitle: { ar: "فوائد المنتج", en: "Benefits", he: "יתרונות המוצר" },
    rateThanksTitle: { ar: "تم التقييم", en: "Rated", he: "דירגת" },
    rateThanksText: { ar: "شكرًا لك! تم استلام تقييمك.", en: "Thanks! Your rating was received.", he: "תודה! הדירוג התקבל." },
    okBtn: { ar: "حسنًا", en: "OK", he: "אישור" },
    orderThanksTitle: { ar: "تم استلام طلبك", en: "Order received", he: "הזמנה התקבלה" },
    orderThanksText: { ar: "شكرًا لك! تم استلام طلبك ✅ سنتواصل معك خلال دقائق.", en: "Thanks! Your order was received ✅ We'll contact you shortly.", he: "תודה! ההזמנה התקבלה ✅ ניצור קשר בקרוב." },
    thanksRated: { ar: "تم استلام تقييمك.", en: "Rating received.", he: "הדירוג התקבל." },
    alreadyRated: { ar: "تم استلام تقييمك مسبقًا.", en: "You already rated.", he: "כבר דירגת." },
    orderTrustMini: { ar: "بياناتك بأمان 🔒 • تأكيد سريع • شحن سري • دفع عند الاستلام", en: "Your data is safe 🔒 • Fast confirmation • Discreet delivery • Cash on delivery", he: "המידע שלך בטוח 🔒 • אישור מהיר • משלוח דיסקרטי • תשלום במשלוח" },
    ofNameLabel: { ar: "الاسم الكامل", en: "Full name", he: "שם מלא" },
    ofPhoneLabel: { ar: "رقم الهاتف/واتساب", en: "Phone / WhatsApp", he: "טלפון / וואטסאפ" },
    ofCountryLabel: { ar: "الدولة", en: "Country", he: "מדינה" },
    ofCityLabel: { ar: "المدينة", en: "City", he: "עיר" },
    ofAddressLabel: { ar: "العنوان التفصيلي", en: "Detailed address", he: "כתובת מפורטת" },
    ofNoteLabel: { ar: "ملاحظة (اختياري)", en: "Note (optional)", he: "הערה (אופצيونלי)" },
    phPhone: { ar: "رقم الهاتف/واتساب", en: "Phone / WhatsApp", he: "טלפון / וואטסאפ" },
    phCity: { ar: "المدينة", en: "City", he: "עיר" },
    phAddress: { ar: "العنوان التفصيلي", en: "Detailed address", he: "כתובת מפורטת" },
    phNote: { ar: "ملاحظات إضافية (اختياري)", en: "Additional notes (optional)", he: "הערות נוספות (אופציונלי)" },
    countryIL: { ar: "إسرائيل", en: "Israel", he: "ישראל" },
    countryPS: { ar: "فلسطين", en: "Palestine", he: "פלסטין" },
    countryJO: { ar: "الأردن", en: "Jordan", he: "ירדן" },
    countryEG: { ar: "مصر", en: "Egypt", he: "מצרים" },
    countrySA: { ar: "السعودية", en: "Saudi Arabia", he: "ערב הסעודית" },
    countryAE: { ar: "الإمارات", en: "UAE", he: "איחוד האמירויות" },
    countryOM: { ar: "سلطنة عمان", en: "Oman", he: "עומאן" },
    countryQA: { ar: "قطر", en: "Qatar", he: "קטאר" },
    countryBH: { ar: "البحرين", en: "Bahrain", he: "בחריין" },
    currency: { ar: "درهم", en: "AED", he: "AED" },
    price1: { ar: "130 درهم", en: "130 AED", he: "130 AED" },
    price2: { ar: "200 درهم", en: "200 AED", he: "200 AED" },
    price3: { ar: "250 درهم", en: "250 AED", he: "250 AED" },
    phReason: { ar: "اكتب السبب باختصار...", en: "Write the reason briefly...", he: "כתוב את הסיבה בקצרה..." },
    qtyLabel: { ar: "الكمية", en: "Quantity", he: "כמות" },
    qty1: { ar: "1 عبوة", en: "1 bottle", he: "בקבוק 1" },
    qty2: { ar: "2 عبوتان", en: "2 bottles", he: "2 בקבוקים" },
    qty3: { ar: "3 عبوات", en: "3 bottles", he: "3 בקבוקים" },
    totalLabel: { ar: "السعر الإجمالي", en: "Total price", he: "מחיר כולל" },
    shippingIncluded: { ar: "شامل التوصيل", en: "Delivery included", he: "כולל משלוח" },
    confirmOrder: { ar: "تأكيد الطلب", en: "Confirm order", he: "אישור הזמנה" },
    orderSuccess: { ar: "تم استلام طلبك ✅ سنتواصل معك خلال دقائق.", en: "Order received ✅ We will contact you shortly.", he: "ההזמנה התקבלה ✅ ניצור קשר בקרוב." },
    refundFormTitle: { ar: "نموذج طلب الاسترداد", en: "Refund request form", he: "טופס בקשת החזר" },
    refundFormHint: { ar: "املأ البيانات التالية وسنتواصل معك خلال 24 ساعة.", en: "Fill in the details and we’ll contact you within 24 hours.", he: "מלאו את הפרטים וניצור קשר בתוך 24 שעות." },
    rfName: { ar: "الاسم الكامل", en: "Full name", he: "שם מלא" },
    rfPhone: { ar: "رقم الهاتف/واتساب", en: "Phone / WhatsApp", he: "טלפון / וואטסאפ" },
    rfReceived: { ar: "تاريخ الاستلام", en: "Received date", he: "תאריך קבלה" },
    rfReason: { ar: "سبب طلب الاسترداد", en: "Reason for refund", he: "סיבת ההחזר" },
    rfPhotos: { ar: "صور المنتج والعبوة", en: "Product & package photos", he: "תמונות המוצר והאריזה" },
    choosePhotos: { ar: "اختيار الصور", en: "Choose photos", he: "בחר תמונות" },
    sendRefund: { ar: "إرسال طلب الاسترداد", en: "Send refund request", he: "שלח בקשת החזר" },
    refundNeedFields: { ar: "يرجى تعبئة الحقول المطلوبة وإرفاق صور.", en: "Please fill required fields and attach photos.", he: "אנא מלאו את השדות הנדרשים וצרפו תמונות." },
    refundSuccess: { ar: "تم استلام طلب الاسترداد ✅", en: "Refund request received ✅", he: "בקשת ההחזר התקבלה ✅" },
    offersTitle: { ar: "عروض اليوم", en: "Today's offers", he: "מבצעי היום" },
    offerEndsIn: { ar: "ينتهي العرض خلال", en: "Offer ends in", he: "ההצעה מסתיימת בעוד" },
    offerExpired: { ar: "انتهى العرض", en: "Offer ended", he: "המבצע הסתיים" },
    offerPack1: { ar: "عبوة واحدة", en: "1 bottle", he: "בקבוק אחד" },
    offerPack2: { ar: "عبوتين", en: "2 bottles", he: "2 בקבוקים" },
    offerPack3: { ar: "3 عبوات", en: "3 bottles", he: "3 בקבוקים" },
    buyNow: { ar: "شراء", en: "Buy", he: "קנה" },
    popularBadge: { ar: "الأكثر طلبًا", en: "Most popular", he: "הכי פופולרי" },
    timelineTitle: { ar: "خطوات الشحن السري والمريح 📦", en: "Fast and Discreet Shipping Steps 📦", he: "שלבי משלוח מהיר ודיסקרטי 📦" },
    timelineStep1: { ar: "تأكيد الطلب بسرية تامة", en: "Strictly confidential order confirmation", he: "אישור הזמנה בסודיות מוחלטת" },
    timelineStep2: { ar: "تغليف أسود مبهم لا يظهر محتواه", en: "Opaque black packaging, content hidden", he: "אריזה שחורה אטומה, התוכן מוסתר" },
    timelineStep3: { ar: "تسليم يدوي والدفع عند الاستلام", en: "Hand delivery & Cash on Delivery", he: "מסירה ידנית ותשלום במעמד הקבלה" },
    orderSuccessTitle: { ar: "تم إرسال طلبك بنجاح!", en: "Your order has been submitted successfully!", he: "ההזמנה שלך נשלחה בהצלחה!" },
    orderSuccessDesc: { ar: "شكرًا لثقتك بنا. طلبك الآن قيد المعالجة وسيقوم فريقنا الطبي بالتواصل معك هاتفياً خلال دقائق لتأكيد الشحن.", en: "Thank you for trusting us. Your order is being processed, and our medical team will contact you shortly to confirm shipping.", he: "תודה על האמון שלך בנו. ההזמנה שלך בטיפול, והצוות הרפואי שלנו ייצור איתך קשר בהקדם לאישור המשלוח." },
    successFeature1: { ar: "🔒 خصوصية تامة", en: "🔒 Total Privacy", he: "🔒 פרטיות מוחלטת" },
    successFeature2: { ar: "🚚 شحن سريع وسري", en: "🚚 Fast & Discreet Shipping", he: "🚚 משלוח מהיר ודיסקרטי" },
    btnUnderstand: { ar: "حسنًا، فهمت", en: "Got it", he: "הבנתי" },
    stat1Label: { ar: "طلب ناجح ومكتمل", en: "Successful & completed orders", he: "הזמנות מוצלחות שהושלמו" },
    stat2Label: { ar: "نسبة رضا العملاء", en: "Customer satisfaction rate", he: "שיעור שביעות רצון לקוחות" },
    stat3Label: { ar: "حالة استرداد فقط", en: "Refund cases only", he: "מקרי החזר בלבד" },
    stat3Note: { ar: "(نعلنها بشفافية لنؤكد مصداقية الضمان)", en: "(Announced transparently to confirm our guarantee credibility)", he: "(מוצהר בשקיפות לאישור אמינות האחריות שלנו)" },
    waMessage: { ar: "مرحباً، أريد الاستفسار عن منتج رايز", en: "Hello, I want to inquire about the Rise product", he: "שלום, אני רוצה לברר על מוצר Rise" },
    replyPlaceholder: { ar: "اكتب ردك...", en: "Write your reply...", he: "כתוב תגובה..." },
    replyNamePlaceholder: { ar: "الاسم", en: "Name", he: "שם" },
    replySubmit: { ar: "إرسال", en: "Send", he: "שלח" },
    btnMoreReplies: { ar: "عرض المزيد من الردود", en: "Show more replies", he: "הצג תגובות נוספות" }
  };

  const docs = {
    tariq: { name: { ar: "د. طارق عبدالرحمن", en: "Dr. Tariq A.", he: "ד״ר טארק ע." }, img: "https://images.unsplash.com/photo-1612349317150-e410f624c427?w=100&h=100&fit=crop", status: "online" },
    rami: { name: { ar: "د. رامي خليل", en: "Dr. Rami Khalil", he: "ד״ר ראמי ח." }, img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop", status: "busy" },
    mahmoud: { name: { ar: "د. محمود صبري", en: "Dr. Mahmoud S.", he: "ד״ר מחמוד ס." }, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop", status: "online" }
  };

  const seedReviews = [
    // --- 20 Medical Consultations ---
    { name: { ar: "عيسى محمد", en: "Issa M." }, text: { ar: "هل يتعارض المنتج مع أدوية الضغط؟ أنا استخدم حبوب ضغط يومياً وخايف يسبب لي مضاعفات." }, stars: 5, replies: [ { ...docs.tariq, text: { ar: "أهلاً بك أخي عيسى. لا تقلق أبداً، تركيبة 'رايز' صُممت كعلاج موضعي خارجي لا يدخل في مجرى الدم الكلي، لذلك هي آمنة 100% لمرضى الضغط ولا تتعارض مع أي أدوية تتناولها." } } ] },
    { name: { ar: "أبو سيف", en: "Abu Saif" }, text: { ar: "عندي سكري من النوع الثاني وضعف شديد بالانتصاب.. هل ينفع معي؟" }, stars: 4, replies: [ { ...docs.rami, text: { ar: "حياك الله أبو سيف. نعم فعال جداً في حالتك. مرضى السكري يعانون من ضعف التروية الدموية، ورايز يعمل موضعياً لتنشيط الدورة الدموية فجأة في المنطقة، مما يعطيك صلابة ممتازة دون أي تأثير على السكر." } } ] },
    { name: { ar: "سالم الشمري", en: "Salem S." }, text: { ar: "سمعت إنه يخدر المنطقة تماماً لدرجة إنك ما تحس بشيء.. هل هذا صحيح؟" }, stars: 5, replies: [ { ...docs.mahmoud, text: { ar: "هذا هو الفرق الجوهري بين رايز والبخاخات التجارية أخي سالم. رايز لا يحتوي على ليدوكائين مخدر، بل يعمل بتقنية ذكية تخفف الحساسية المفرطة فقط، لتستمتع بالإحساس الطبيعي بالكامل مع سيطرة تامة على الوقت." } } ] },
    { name: { ar: "يوسف خليل", en: "Yousef K." }, text: { ar: "كم يدوم المفعول بالضبط؟ وهل لازم اغسله قبل اللقاء؟" }, stars: 5, replies: [ { ...docs.tariq, text: { ar: "المفعول الفعلي يبدأ خلال 15 دقيقة ويمتد لساعات لضمان راحتك التامة. ولا داعي لغسله أبداً لأن الجلد يمتصه بالكامل دون ترك أي أثر أو لزوجة." } }, { ...docs.mahmoud, text: { ar: "أتفق مع د. طارق. الأهم هو تدليك المنطقة بلطف لمدة دقيقة حتى يجف تماماً لضمان أفضل نتيجة." } } ] },
    { name: { ar: "فهد العتيبي", en: "Fahad A." }, text: { ar: "هل استخدامه باستمرار يسبب تعود؟ يعني هل ممكن بعدين ما اقدر بدونه؟" }, stars: 5, replies: [ { ...docs.rami, text: { ar: "سؤال ممتاز فهد. التركيبة آمنة للاستخدام المتكرر ولا تسبب أي إدمان عضوي أو تعود. يمكنك إيقافه في أي وقت والاعتماد عليه فقط في الأوقات التي تحتاج فيها لأداء مضاعف." } } ] },
    { name: { ar: "عبدالإله", en: "Abdulelah" }, text: { ar: "عمري 62 سنة، هل سيفيدني أم أنه مخصص للشباب فقط؟" }, stars: 5, replies: [ { ...docs.tariq, text: { ar: "المنتج فعال ومناسب جداً للأعمار المتقدمة أخي عبدالإله. في الحقيقة، شريحة كبيرة من عملائنا فوق سن الستين ويحققون نتائج ممتازة في استعادة ذروة الأداء والصلابة." } } ] },
    { name: { ar: "تركي", en: "Turki" }, text: { ar: "أنا استخدمت كريمات ثانية وسببت لي صداع واحمرار بالوجه.. هل هذا نفس الشيء؟" }, stars: 5, replies: [ { ...docs.mahmoud, text: { ar: "لا أبداً أخي تركي. الصداع والاحمرار يحدث مع الحبوب الكيميائية التي ترفع ضغط الدم، أما رايز فهو موضعي وآمن تماماً ولن تشعر بأي عرض جانبي." } } ] },
    { name: { ar: "عادل", en: "Adel" }, text: { ar: "هل ريحته قوية؟ زوجتي تنزعج من الروائح الطبية." }, stars: 4, replies: [ { ...docs.rami, text: { ar: "التركيبة شبه خالية من الروائح النفاذة. قد تلاحظ رائحة خفيفة عند وضعه تختفي تماماً بمجرد أن يمتصه الجلد." } } ] },
    { name: { ar: "محمد الزهراني", en: "Mohammed Z." }, text: { ar: "إذا طلبته، كيف تضمنون لي السرية؟ المندوب بيعرف وش داخل الكيس؟" }, stars: 5, replies: [ { ...docs.tariq, text: { ar: "نلتزم بسرية تامة. يتم الشحن في كيس أسود مبهم تماماً ومختوم، وحتى المندوب لا يعرف محتوى الشحنة (تُسجل كمنتج عناية شخصية)." } } ] },
    { name: { ar: "صالح", en: "Saleh" }, text: { ar: "هل يحتاج وصفة طبية لشرائه؟" }, stars: 5, replies: [ { ...docs.mahmoud, text: { ar: "المنتج مصنف كمستحضر طبي آمن ولا يتطلب وصفة طبية لصرفه، يمكنك طلبه مباشرة وسنصلك به بأسرع وقت." } } ] },
    { name: { ar: "وليد", en: "Waleed" }, text: { ar: "أعاني من سرعة شديدة جداً (أقل من دقيقة)، هل سيعالج هذه المشكلة؟" }, stars: 5, replies: [ { ...docs.tariq, text: { ar: "نعم وليد، التركيبة مصممة خصيصاً لهذه الحالات. ستلاحظ مضاعفة كبيرة جداً في الوقت تمنحك السيطرة والثقة لإنهاء الإحراج." } } ] },
    { name: { ar: "بدر", en: "Bader" }, text: { ar: "الكمية في العبوة كم تكفي تقريباً؟ السعر شوي مرتفع." }, stars: 4, replies: [ { ...docs.rami, text: { ar: "العبوة اقتصادية جداً أخي بدر. تحتاج لكمية بسيطة في كل مرة (بحجم حبة البازلاء)، لذا العبوة الواحدة تكفي حتى 30 استخداماً، مما يجعل التكلفة لكل استخدام بسيطة جداً." } } ] },
    { name: { ar: "أحمد الدوسري", en: "Ahmed D." }, text: { ar: "هل يسبب أي حرارة أو لسعة على الجلد وقت الاستخدام؟" }, stars: 5, replies: [ { ...docs.mahmoud, text: { ar: "التركيبة لطيفة جداً على البشرة. قد تشعر بانتعاش خفيف جداً يثبت بدء الفعالية، لكنه لا يسبب أي حرارة أو لسع مزعج." } } ] },
    { name: { ar: "ماجد", en: "Majed" }, text: { ar: "هل الضمان الذهبي حقيقي فعلاً؟ لو ما نفعني ترجعون فلوسي؟" }, stars: 5, replies: [ { ...docs.tariq, text: { ar: "ضماننا حقيقي 100% أخي ماجد. ثقتنا بالمنتج تجعلنا نتحمل كامل المخاطرة. إذا لم تحصل على النتيجة خلال 15 دقيقة، لك الحق في استرداد كامل المبلغ بدون أسئلة محرجة." } } ] },
    { name: { ar: "زياد", en: "Ziad" }, text: { ar: "هل يؤثر على الطرف الآخر (الزوجة)؟" }, stars: 5, replies: [ { ...docs.rami, text: { ar: "إذا التزمت بالطريقة الصحيحة (الانتظار 15 دقيقة حتى يمتصه الجلد تماماً)، فلن ينتقل أي أثر للزوجة ولن يسبب لها أي إزعاج." } } ] },
    { name: { ar: "سعد", en: "Saad" }, text: { ar: "متى أحط المنتج بالضبط؟" }, stars: 5, replies: [ { ...docs.mahmoud, text: { ar: "يفضل وضعه قبل اللقاء بـ 15 إلى 20 دقيقة على منطقة نظيفة ومجففة جيداً لضمان سرعة الامتصاص." } } ] },
    { name: { ar: "عبدالله", en: "Abdullah" }, text: { ar: "هل أقدر استخدمه مع الفياجرا؟" }, stars: 4, replies: [ { ...docs.tariq, text: { ar: "لا حاجة لدمجه مع الحبوب أخي عبدالله. رايز يوفر لك الصلابة والتأخير معاً بأمان تام، ويغنيك عن الحبوب وأعراضها الجانبية." } } ] },
    { name: { ar: "ناصر", en: "Nasser" }, text: { ar: "كم يوم ويوصلني الطلب؟ أنا بالرياض." }, stars: 5, replies: [ { ...docs.rami, text: { ar: "توصيلنا سريع جداً. في المدن الرئيسية كالرياض نصلك خلال 24 ساعة، وخارجها من يومين إلى 3 أيام عمل." } } ] },
    { name: { ar: "مروان", en: "Marwan" }, text: { ar: "كيف أدفع لكم؟ وهل الموقع آمن؟" }, stars: 5, replies: [ { ...docs.tariq, text: { ar: "دفعك آمن ومريح 100%، فنحن نوفر خدمة (الدفع عند الاستلام). لا تدفع أي شيء حتى تستلم العبوة بيدك." } } ] },
    { name: { ar: "خالد", en: "Khaled" }, text: { ar: "هل المنتج مسجل ومرخص؟" }, stars: 5, replies: [ { ...docs.mahmoud, text: { ar: "بكل تأكيد، المركز معتمد والمنتج خضع لفحوصات صارمة لضمان جودته وأمانه الطبي الكامل." } } ] },
    
    // --- Existing normal reviews ---
    { name: { ar: "خالد عبدالرحمن", en: "Khaled A." }, text: { ar: "نتيجة خرافية من أول استخدام، انصح فيه وبشدة! فعلاً غير حياتي للأفضل." }, stars: 5, replies: [ { name: { ar: "زائر" }, text: { ar: "هل يسبب أي حرارة على الجلد وقت الاستخدام؟" } }, { name: { ar: "خالد عبدالرحمن" }, text: { ar: "لا أبداً، لو استخدمت كمية بسيطة ودلكت زين ما تحس بشيء." } } ] },
    { name: { ar: "سالم المري", en: "Salem M." }, text: { ar: "التوصيل كان سريع جداً والمنتج فعاليته ممتازة وبدون أي تخدير، شكراً لكم من القلب." }, stars: 5, replies: [] },
    { name: { ar: "ياسر عبدالله", en: "Yasser A." }, text: { ar: "افضل منتج جربته حتى الآن، يعطيك ثقة كبيرة جداً والنتيجة تدوم لفترة طويلة." }, stars: 5, replies: [] },
    { name: { ar: "عمر الفاروق", en: "Omar F." }, text: { ar: "كنت متردد في البداية لكن بعد التجربة تأكدت انه منتج أصلي وقوي ويستحق كل ريال." }, stars: 5, replies: [] },
    { name: { ar: "أبو فهد", en: "Abu Fahd" }, text: { ar: "يستحق كل قرش، صلابة غير طبيعية ووقت أطول بكثير." }, stars: 5, replies: [] },
    { name: { ar: "محمود خليل", en: "Mahmoud K." }, text: { ar: "المفعول يبدأ بسرعة، تقريبا 15 دقيقة وتكون جاهز تماماً. خدمة العملاء راقية جداً." }, stars: 5, replies: [] },
    { name: { ar: "عبدالله العتيبي", en: "Abdullah A." }, text: { ar: "التغليف جاني أسود بالكامل ومحد عرف وش داخله، الخصوصية عندهم 10/10." }, stars: 5, replies: [] },
    { name: { ar: "سعد الشهراني", en: "Saad S." }, text: { ar: "المنتج رائع لكن تأخر المندوب نص يوم، بس للأمانة النتيجة نسّتني التأخير." }, stars: 4, replies: [] },
    { name: { ar: "علي حسن", en: "Ali Hassan" }, text: { ar: "صدقوني يا اخوان اللي يعاني من سرعة القذف هذا هو الحل السحري والنهائي." }, stars: 5, replies: [] },
    { name: { ar: "نواف الدوسري", en: "Nawaf D." }, text: { ar: "كنت خايف أدفع أونلاين بس لما شفت الدفع عند الاستلام ارتحت وطلبت، والمنتج جبار." }, stars: 5, replies: [] }
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

  function starsRow(n){
    const val = Math.max(1, Math.min(5, Number(n)||5));
    return "★★★★★".slice(0,val) + "☆☆☆☆☆".slice(0,5-val);
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
          <div class="reviewStars" aria-label="${stars} / 5">${starsRow(stars)}</div>
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
    { ar: "⭐ الخيار الطبي رقم #1 لصحة الرجل", en: "⭐ #1 Medical Choice for Men", he: "⭐ הבחירה הרפואית #1 לגברים" },
    { ar: "💵 اطلب براحة.. الدفع يداً بيد عند الاستلام", en: "💵 Order easily.. Cash on delivery", he: "💵 הזמן בנוחות.. תשלום במשלוח" }
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
      setTimeout(() => { guaranteePopup.classList.remove("show"); }, 7000); // يختفي بعد 7 ثواني
    }, 15000); // يظهر بعد 15 ثانية

    // ظهور مرة ثانية
    setTimeout(() => {
      guaranteePopup.classList.add("show");
      setTimeout(() => { guaranteePopup.classList.remove("show"); }, 7000);
    }, 60000);

    guaranteePopup.addEventListener("click", () => {
      guaranteePopup.classList.remove("show");
      const guarBtn = document.querySelector(`.aBtn[data-scroll="#guarantee"]`);
      if(guarBtn) guarBtn.click();
    });
  }

})();

