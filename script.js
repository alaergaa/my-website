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
    "assets/slider/s1.jpeg", "assets/slider/s2.jpeg", "assets/slider/s3.jpeg", "assets/slider/s4.jpeg", "assets/slider/s5.jpeg"
  ];

  // 1. القاموس المكثف والعصري
  const dict = {
    title: { ar: "استعد قوتك وثقتك المطلقة في 15 دقيقة فقط!", en: "Regain your strength and confidence in just 15 minutes!", he: "החזר את הכוח והביטחון שלך ב-15 דקות בלבד!" },
    subtitleLine1: { ar: "وداعاً للارتخاء واللقاء القصير مع تركيبة 'رايز' الطبية. أداء فوري، سيطرة تامة، وأمان تام بدون أي أعراض جانبية (مناسب لمرضى القلب والضغط).", en: "Say goodbye to weakness and short sessions. Instant performance, full control, and completely safe without side effects.", he: "תגיד שלום לחולשה ולמפגשים קצרים. ביצועים מיידיים, שליטה מלאה, ובטוח לחלוטין ללא תופעות לוואי." },
    trustIconsHtml: { ar: `<div class="hero-trust-badges"><span class="htb-item">⚡ مفعول فوري</span><span class="htb-item">🛡️ آمن 100%</span><span class="htb-item">🤐 خصوصية تامة</span></div>`, en: `<div class="hero-trust-badges"><span class="htb-item">⚡ Fast Effect</span><span class="htb-item">🛡️ 100% Safe</span><span class="htb-item">🤐 Total Privacy</span></div>`, he: `<div class="hero-trust-badges"><span class="htb-item">⚡ השפעה מהירה</span><span class="htb-item">🛡️ 100% בטוח</span><span class="htb-item">🤐 פרטיות מלאה</span></div>` },
    productImagesTitle: { ar: "اكتشف قوة 'رايز' عن قرب", en: "Discover Rise closely", he: "גלה את Rise מקרוב" },
    scarcityHtml: { ar: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">مخزون محدود: متبقي <strong>11 عبوة</strong> ضمن العرض الحالي</span></div><div class="ms-bar-container"><div class="ms-bar-fill"></div></div>` },
    
    // فوائد المنتج مفصلة وعصرية
    benefitsHtml: { 
      ar: `<p class="richIntro" style="margin-bottom:16px; font-weight:800; color:#10b981; font-size:16px;">تركيبة رايز ليست مجرد منتج عادي، بل هي ثورة طبية تمنحك 5 فوائد أساسية ستغير حياتك الزوجية بالكامل:</p>
      <ul class='bulletList'>
        <li style="margin-bottom:12px;">⚡ <strong>أداء فوري وصلابة صخرية:</strong> يقضي على مشكلة الضعف والارتخاء من الجذور. يضمن لك قوة وصلابة فائقة خلال 15 دقيقة فقط، ويحافظ عليها طوال مدة اللقاء لتكون في قمة جاهزيتك.</li>
        <li style="margin-bottom:12px;">⏱️ <strong>تأخير مضاعف وسيطرة تامة:</strong> يمنحك السيطرة الكاملة على وقتك. يطيل مدة اللقاء بشكل كبير جداً (من 30 إلى 45 دقيقة إضافية)، وينهي تماماً التوتر والإحراج المرتبط بسرعة الانتهاء.</li>
        <li style="margin-bottom:12px;">🔥 <strong>رضا كامل وإحساس طبيعي 100%:</strong> بخلاف البخاخات الرديئة، "رايز" يعمل بتقنية ذكية تقلل الحساسية المفرطة في سطح الجلد فقط، لتستمتع بالإحساس الطبيعي دون أي تخدير مزعج لك أو لشريكتك.</li>
        <li style="margin-bottom:12px;">🛡️ <strong>البديل الطبي الآمن (بدون صداع أو إرهاق):</strong> كونه علاجاً موضعياً خارجياً، فهو لا يدخل في مجرى الدم الكلي. آمن تماماً، لا يسبب الصداع، ولا تورد الوجه، ولا تسارع في نبضات القلب نهائياً.</li>
        <li>💧 <strong>امتصاص سريع ولطيف على البشرة:</strong> تركيبة مطورة بخلاصة مائية سريعة الامتصاص، لا تترك أي أثر دهني، ومصممة لتكون لطيفة جداً على الأماكن الحساسة.</li>
      </ul>` 
    },
    
    // ضمان ذهبي مقنع جداً
    goldGuaranteeHtml: {
      ar: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">الضمان الذهبي والاسترداد الفوري</h4>
           <p class="gold-desc" style="margin-bottom:12px; font-weight:800; color:#92400e;">نحن نتحمل عنك كامل المخاطرة! ثقتنا المطلقة بمنتجنا جعلتنا نقدم لك أقوى ضمان طبي في السوق: <strong>"إما النتيجة الفورية أو استرداد أموالك بالكامل"</strong>.</p>
           <ul class="bulletList" style="text-align:right; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:16px 20px; border-radius:12px; margin-top:10px;">
             <li style="margin-bottom:8px;">⏱️ <strong>اختبار الـ 15 دقيقة:</strong> جرب المنتج، وإذا لم تلاحظ فرقاً جذرياً في الصلابة والتأخير خلال 15 دقيقة من تجربتك الأولى، لك الحق في استرداد كل شيكل دفعته.</li>
             <li style="margin-bottom:8px;">🤐 <strong>استرداد مرن وبدون أسئلة محرجة:</strong> نحن نحترم خصوصيتك؛ يتم التعامل مع طلب الاسترداد بمهنية وسرية تامة دون الحاجة لتبريرات أو نقاشات طويلة.</li>
             <li style="margin-bottom:8px;">💳 <strong>تحويل مالي سريع:</strong> عند تقديم طلب الاسترداد، يتم تحويل المبلغ كاملاً إلى حسابك البنكي خلال 24 ساعة عمل كحد أقصى.</li>
             <li>📜 <strong>الشروط بكل شفافية:</strong> يشترط فقط تقديم الطلب خلال 72 ساعة من الاستلام، واستخدام المنتج للتجربة فقط، مع إرفاق صورة العبوة في النموذج بالأسفل.</li>
           </ul>`
    },

    aboutHtml: {
      ar: `<div class="sectionRich">
            <p class="richIntro">نحن في <strong>"مركز الارتقاء الطبي"</strong> لسنا مجرد نقطة بيع إلكترونية، بل نحن صرح طبي رائد وموثوق مقره الرئيسي في القدس. كرسنا خبراتنا الطبية لتقديم حلول صحية مبتكرة ومفحوصة تركز حصرياً على علاج مشاكل "صحة الرجل" بأمان وفعالية.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text"><strong>فلسفتنا الطبية:</strong> توفير بدائل آمنة وموضعية سريعة المفعول، تغنيك تماماً عن الحبوب الكيميائية التي تؤثر سلباً على القلب وتسبب الإرهاق.</div></div>
              <div class="about-item"><div class="about-icon">🔬</div><div class="about-text"><strong>جودة ومقاييس صارمة:</strong> تخضع جميع منتجاتنا لاختبارات جودة صارمة لضمان الفعالية القصوى وعدم التسبب بأي حساسية أو أعراض جانبية.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text"><strong>الخصوصية التامة أولوية:</strong> نعتمد نظام تسليم يداً بيد للعميل في "تغليف أسود مبهم بالكامل" لا يدل إطلاقاً على محتواه، حمايةً لخصوصيتك المطلقة.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>دعم طبي متواصل:</strong> فريقنا الطبي متواجد دائماً للرد على استفساراتكم بسرية تامة عبر الواتساب.</div></div>
            </div>
           </div>`
    },

    suitableHtml: { 
      ar: `<p class='richIntro'>تم ابتكار وتطوير هذا المنتج ليكون البديل الطبي الأكثر أماناً، وهو مناسب للجميع بدون استثناء أو قلق:</p>
      <ul class='bulletList'>
        <li style="margin-bottom:10px;">✔️ <strong>لجميع الفئات العمرية:</strong> فعال بقوة للشباب الباحثين عن سيطرة أكبر وأداء أطول، وممتاز جداً لكبار السن (من الثلاثينيات وحتى السبعينيات) لاستعادة ذروة الأداء الشبابي.</li>
        <li style="margin-bottom:10px;">✔️ <strong>لمرضى القلب وضغط الدم:</strong> بفضل تركيبته الموضعية المتطورة، فهو لا يتسرب إلى الدورة الدموية ولا يسبب أي توسع في الأوعية أو تسارع في نبضات القلب، مما يجعله آمناً بنسبة 100%.</li>
        <li>✔️ <strong>لمرضى السكري:</strong> يعتبر الحل السحري والأمثل لمشاكل الارتخاء الناتجة عن السكري، حيث يعطي نتائج فورية ولا يتداخل إطلاقاً مع مستويات السكر في الدم أو علاجات الأنسولين.</li>
      </ul>` 
    },

    usageHtml: { 
      ar: `<p class='richIntro'>لتضمن الحصول على النتيجة الجبارة والمتوقعة، يرجى اتباع هذه الخطوات البسيطة:</p>
      <ol class='stepList'>
        <li><div class='stepHead'>1️⃣ التحضير والنظافة المسبقة</div><div class='stepBody'><p>قبل الاستخدام، تأكد من غسل المنطقة بالماء الدافئ وتجفيفها تماماً. هذه الخطوة ضرورية لتفتيح المسام وضمان أقصى سرعة لامتصاص المنتج.</p></div></li>
        <li><div class='stepHead'>2️⃣ الاستخدام والتدليك اللطيف</div><div class='stepBody'><p>ضع كمية بسيطة جداً (مقدار قطرتين إلى ثلاث) على المنطقة المطلوبة. قم بتدليكها وتوزيعها بلطف بحركات دائرية لمدة دقيقة واحدة كاملة حتى تتأكد أن الجلد قد امتصها تماماً.</p></div></li>
        <li><div class='stepHead'>3️⃣ الانتظار والانطلاق</div><div class='stepBody'><p>انتظر من 15 إلى 20 دقيقة ليبدأ المفعول الفعلي والتأثير القوي. <strong>ملاحظة هامة جداً: لا حاجة لغسل المنطقة بعد الاستخدام</strong>، فالمنتج آمن تماماً على البشرة ولا يترك أثراً.</p></div></li>
      </ol>`
    },

    footerInfo: {
      ar: `<div class="fc-welcome">نحن هنا من أجلك، لتقديم رعاية صحية تليق بك وبثقتك.</div>
           <p>📍 <strong>المقر الرئيسي:</strong> القدس - جبل الزيتون، الشارع الرئيسي، المجمع الطبي الملاصق لفندق الأمل، الطابق الثاني.</p>
           <p>🕒 <strong>مواعيد العمل:</strong> من الأحد إلى الخميس (9:00 صباحاً حتى 9:00 مساءً)</p>
           <p>🚚 <strong>نطاق الشحن:</strong> توصيل سريع في تغليف أسود مبهم لجميع مدن الداخل والضفة الغربية.</p>
           <p>📞 <strong>للتواصل والواتساب:</strong> <span style="direction:ltr; display:inline-block;">+972 51 286 5105</span></p>`
    },
    faqHtml: {
      ar: `<div class='faq-list'>
            <div class='faq-item is-open'><button class='faq-q'>هل للمنتج أي أعراض جانبية كالصداع؟</button><div class='faq-a'><p>إطلاقاً، المنتج موضعي وآمن 100%. لا يدخل في مجرى الدم ولا يسبب أي صداع، احمرار، أو خفقان في القلب كما تفعل الحبوب.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل يمكن استخدامه لمرضى السكري والضغط؟</button><div class='faq-a'><p>نعم بكل تأكيد. نظراً لكونه علاج موضعي خارجي، فهو لا يتعارض أبداً مع أدوية السكري أو أدوية سيولة الدم والضغط.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل يسبب المنتج فقدان الإحساس أو التخدير؟</button><div class='faq-a'><p>لا، تركيبتنا الطبية صممت لتقليل الحساسية المفرطة فقط مع الحفاظ على المتعة والإحساس الطبيعي 100% بدون أي تخدير مزعج.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>كيف يتم التوصيل والدفع؟</button><div class='faq-a'><p>يتم التوصيل بسرية تامة عبر مندوبنا الخاص، بتغليف أسود مبهم لا يوضح المحتوى نهائياً. الدفع يكون بكل أمان وراحة (يداً بيد) عند الاستلام.</p></div></div>
          </div>`
    },

    // تراجم وشارات إضافية
    otbCod: { ar: "الدفع عند الاستلام", en: "Cash on Delivery", he: "תשלום במסירה" },
    otbPrivacy: { ar: "تغليف أسود سري", en: "Discreet Packaging", he: "אריזה דיסקרטית" },
    otbGuarantee: { ar: "ضمان استرداد فوري", en: "Instant Refund Guarantee", he: "אחריות החזר מיידי" },

    btnOrder: { ar: "اطلب الآن" }, btnFAQ: { ar: "الأسئلة الشائعة" }, btnAbout: { ar: "من نحن" },
    secFAQTitle: { ar: "الأسئلة الشائعة" }, secAboutTitle: { ar: "من نحن" }, btnReviews: { ar: "آراء العملاء" },
    btnLoadMoreReviews: { ar: "عرض المزيد من النقاشات ⬇️" }, reviewsCountLabel: { ar: "عدد التقييمات" },
    reviewsAvgLabel: { ar: "متوسط التقييم" }, langApplying: { ar: "جارٍ تطبيق اللغة…" },
    footerRights: { ar: "جميع الحقوق محفوظة لدى مركز الارتقاء الطبي" },
    btnGuaranteeRefund: { ar: "الضمان والاسترداد" }, btnUsage: { ar: "طريقة الاستخدام" }, btnBenefits: { ar: "فوائد المنتج" }, btnSuitable: { ar: "لمن يناسب؟" },
    phName: { ar: "الاسم" }, phComment: { ar: "اكتب تجربتك أو استفسارك..." }, btnSendComment: { ar: "إرسال" },
    rateBeforeComment: { ar: "شارك تجربتك وقيّم المنتج (اختياري)" }, reviewNeedRating: { ar: "يرجى اختيار عدد النجوم قبل إرسال التعليق." },
    reviewSent: { ar: "تم إرسال تقييمك وتعليقك للمراجعة. شكرًا لك!" }, sendReview: { ar: "إرسال المشاركة" },
    secOrderTitle: { ar: "اطلب الآن" }, secReviewsTitle: { ar: "نقاشات واستفسارات العملاء الحية" },
    secGuaranteeTitle: { ar: "الضمان والاسترداد" }, secUsageTitle: { ar: "طريقة الاستخدام" }, secBenefitsTitle: { ar: "فوائد المنتج" },
    rateThanksTitle: { ar: "تم التقييم" }, rateThanksText: { ar: "شكرًا لك! تم استلام تقييمك بنجاح." }, okBtn: { ar: "حسنًا" },
    orderThanksTitle: { ar: "تم استلام طلبك" }, orderThanksText: { ar: "شكرًا لك! تم استلام طلبك ✅ سنتواصل معك خلال دقائق." },
    thanksRated: { ar: "تم استلام تقييمك." }, alreadyRated: { ar: "لقد قمت بتقييم المنتج مسبقاً، نشكرك على تفاعلك!" }, // تم تعديل رسالة التقييم المكرر
    orderTrustMini: { ar: "بياناتك محمية بتشفير 256-bit 🔒" },
    ofNameLabel: { ar: "الاسم الكامل" }, ofPhoneLabel: { ar: "رقم الهاتف/واتساب" }, ofCountryLabel: { ar: "الدولة" },
    ofCityLabel: { ar: "المدينة" }, ofAddressLabel: { ar: "العنوان التفصيلي" }, ofNoteLabel: { ar: "ملاحظة (اختياري)" },
    phPhone: { ar: "رقم الهاتف/واتساب" }, phCity: { ar: "المدينة" }, phAddress: { ar: "العنوان التفصيلي" },
    phNote: { ar: "ملاحظات إضافية (اختياري)" }, countryIL: { ar: "إسرائيل (الداخل)" }, countryPS: { ar: "فلسطين (الضفة)" }, countryJO: { ar: "الأردن" },
    countryEG: { ar: "مصر" }, countrySA: { ar: "السعودية" }, countryAE: { ar: "الإمارات" }, phReason: { ar: "اكتب السبب باختصار..." },
    qtyLabel: { ar: "الكمية" }, qty1: { ar: "1 عبوة" }, qty2: { ar: "2 عبوتان" }, qty3: { ar: "3 عبوات" },
    totalLabel: { ar: "السعر الإجمالي" }, shippingIncluded: { ar: "شامل التوصيل" }, confirmOrder: { ar: "تأكيد الطلب الآن" },
    orderSuccess: { ar: "تم استلام طلبك ✅ سنتواصل معك خلال دقائق." }, refundFormTitle: { ar: "نموذج طلب الاسترداد" },
    refundFormHint: { ar: "املأ البيانات التالية وسنتواصل معك خلال 24 ساعة." }, rfName: { ar: "الاسم الكامل" },
    rfPhone: { ar: "رقم الهاتف/واتساب" }, rfReceived: { ar: "تاريخ الاستلام" }, rfReason: { ar: "سبب طلب الاسترداد" },
    rfPhotos: { ar: "صور المنتج والعبوة" }, choosePhotos: { ar: "اختيار الصور" }, sendRefund: { ar: "إرسال طلب الاسترداد" },
    refundNeedFields: { ar: "يرجى تعبئة الحقول المطلوبة وإرفاق صور." }, refundSuccess: { ar: "تم استلام طلب الاسترداد ✅" },
    offersTitle: { ar: "عروض اليوم" }, offerEndsIn: { ar: "ينتهي العرض خلال" }, offerExpired: { ar: "انتهى العرض" },
    offerPack1: { ar: "عبوة واحدة" }, offerPack2: { ar: "عبوتين" }, offerPack3: { ar: "3 عبوات" },
    buyNow: { ar: "شراء" }, popularBadge: { ar: "الأكثر طلبًا" },
    typeNameTitle: { ar: "الاسم" }, typeReplyTitle: { ar: "اكتب ردك..." }, btnReply: { ar: "رد" }
  };

  // 2. النقاشات العفوية الكثيفة (15 نقاش منوّع وواقعي)
  const seedThreads = [
    {
      main: { name: "أبو وليد", time: {ar:"منذ 3 ساعات"}, text: {ar:"السلام عليكم، انا عمري 58 ومريض سكر من سنين وتعبني الضعف، هل فعلا بينفعني هاد؟"}, stars: 0, color: "#10b981" },
      replies: [
        { name: "خالد", time: {ar:"منذ ساعتين"}, text: {ar:"وعليكم السلام، انا سكري تراكمي عالي واستخدمته والحمدلله النتيجة ممتازة وما يأثر على دقات القلب ابد"}, color: "#3b82f6" },
        { name: "أبو وليد", time: {ar:"منذ ساعة"}, text: {ar:"الله يطمنك، بتوكل على الله وبطلب العرض الثاني"}, color: "#10b981" }
      ]
    },
    {
      main: { name: "رامي", time: {ar:"منذ 6 ساعات"}, text: {ar:"يا جماعة الخير، التوصيل للقدس قديش بوخذ وقت؟"}, stars: 0, color: "#f59e0b" },
      replies: [
        { name: "الارتقاء الطبي", time: {ar:"منذ 5 ساعات"}, text: {ar:"أهلاً بك أستاذ رامي، التوصيل للقدس وجميع مناطق الداخل والضفة يأخذ 24 إلى 48 ساعة كحد أقصى."}, color: "#14b8a6" },
        { name: "علاء", time: {ar:"منذ 4 ساعات"}, text: {ar:"انا طلبت لرام الله ووصلني ثاني يوم العصر، شباب محترمين"}, color: "#8b5cf6" }
      ]
    },
    {
      main: { name: "عصام", time: {ar:"أمس"}, text: {ar:"يعطيكم العافية، انا عامل قسطرة وباخذ دوا ضغط وسيولة، بيأثر عالقلب ولا كيف الوضع؟"}, stars: 0, color: "#f97316" },
      replies: [
        { name: "طارق", time: {ar:"أمس"}, text: {ar:"اخوي انا مريض ضغط واستخدم رايز من شهرين، ما حسيت بأي صداع ولا خفقان لانه خارجي ما بفوت الدم"}, color: "#ef4444" },
        { name: "د. سامر", time: {ar:"أمس"}, text: {ar:"بما أنه موضعي ولا يمتص في مجرى الدم فهو الخيار الآمن لك، توكل على الله"}, color: "#3b82f6" }
      ]
    },
    {
      main: { name: "جمال", time: {ar:"أمس"}, text: {ar:"احكولنا الصراحة هاد مش زي الاعلانات الكذب؟ لانو سعره مش رخيص مقارنة بالبخاخات"}, stars: 4, color: "#10b981" },
      replies: [
        { name: "حسام", time: {ar:"أمس"}, text: {ar:"والله كنت مفكره كذب بس الدفع عند الاستلام شجعني.. والبخاخات اصلا بتخدرك انت والمدام، هاد بيعطيك سيطرة بدون تخدير.. بيستاهل صراحة"}, color: "#3b82f6" },
        { name: "بندر", time: {ar:"أمس"}, text: {ar:"سعره فيه لان العلبة بتطول معك شهور، تحط نقطتين بس مو زي الحبوب"}, color: "#ef4444" }
      ]
    },
    {
      main: { name: "يوسف جابر", time: {ar:"منذ يومين"}, text: {ar:"المنتج انقذني صراحة جربت اشياء كثير بس هذا اللي اعطاني تأخير بدون ما افقد الاحساس"}, stars: 5, color: "#10b981" },
      replies: [
        { name: "احمد", time: {ar:"منذ يومين"}, text: {ar:"يعني ما يخدر المنطقة؟ لان البخاخات تخدر كل شي"}, color: "#3b82f6" },
        { name: "يوسف جابر", time: {ar:"منذ يومين"}, text: {ar:"لا ابدا ما بيخدر، هاد ميزته انه طبيعي بتحس بكل اشي بس بيعطيك صلابة وتأخير"}, color: "#10b981" }
      ]
    },
    {
      main: { name: "سعد", time: {ar:"منذ 3 أيام"}, text: {ar:"يا شباب اللي جربوه كم يجلس المفعول؟ وطريقة الاستخدام بالضبط كيف؟"}, stars: 0, color: "#f59e0b" },
      replies: [
        { name: "ماجد", time: {ar:"منذ 3 أيام"}, text: {ar:"تأخير يعطيك نص ساعة الى 45 دقيقة بالراحة. حط نتفة صغيرة وافركها منيح واستنى ثلث ساعة"}, color: "#14b8a6" }
      ]
    },
    {
      main: { name: "عبدالله العتيبي", time: {ar:"منذ 3 أيام"}, text: {ar:"التغليف جاني أسود بالكامل ومحد عرف وش داخله، الخصوصية عندهم 10/10."}, stars: 5, color: "#f97316" },
      replies: []
    },
    {
      main: { name: "نواف", time: {ar:"منذ 4 أيام"}, text: {ar:"طيب يحتاج اغسله قبل العلاقة ولا عادي؟"}, stars: 0, color: "#3b82f6" },
      replies: [
        { name: "نضال", time: {ar:"منذ 4 أيام"}, text: {ar:"مكتوب فوق انه مش ضروري تغسله لانه آمن، بس انا بفضل اغسله بعد ثلث ساعة اريح للمدام"}, color: "#8b5cf6" },
        { name: "نواف", time: {ar:"منذ 4 أيام"}, text: {ar:"تمام يعطيك العافية"}, color: "#3b82f6" }
      ]
    },
    {
      main: { name: "أمجد", time: {ar:"منذ 4 أيام"}, text: {ar:"أفضل بديل للفياجرا، ريحني من وجع الرأس والحرارة بالوجه"}, stars: 5, color: "#10b981" },
      replies: []
    },
    {
      main: { name: "منصور", time: {ar:"منذ 5 أيام"}, text: {ar:"المنتج وصلني اليوم بس العلبة شكلها صغير شوي!"}, stars: 4, color: "#eab308" },
      replies: [
        { name: "كريم", time: {ar:"منذ 5 أيام"}, text: {ar:"صغيرة بس بتكفي فترة طويلة، انت بس بتحتاج قطرتين كل مرة لا تكثر"}, color: "#3b82f6" }
      ]
    },
    {
      main: { name: "سعيد باوزير", time: {ar:"الأسبوع الماضي"}, text: {ar:"والله منتج بطل، انصح فيه وبقوة لكل متزوج. المندوب كان جدا محترم"}, stars: 5, color: "#8b5cf6" },
      replies: []
    },
    {
      main: { name: "فراس", time: {ar:"الأسبوع الماضي"}, text: {ar:"في خصم اذا طلبت مرة ثانية؟ انا بطلب لاخوي"}, stars: 0, color: "#ef4444" },
      replies: [
        { name: "الارتقاء الطبي", time: {ar:"الأسبوع الماضي"}, text: {ar:"بالتأكيد أستاذ فراس، يوجد خصم خاص للعملاء السابقين، تواصل معنا عبر الواتساب وسنقوم بخدمتك."}, color: "#14b8a6" }
      ]
    },
    {
      main: { name: "بشار محمود", time: {ar:"الأسبوع الماضي"}, text: {ar:"صراحة الضمان الذهبي هو اللي خلاني اطلب، وللأمانة ما احتجت ارجعه لانه فعلا شغال 100%"}, stars: 5, color: "#f59e0b" },
      replies: []
    },
    {
      main: { name: "وليد جابر", time: {ar:"الأسبوع الماضي"}, text: {ar:"الدفع عند الاستلام ميزة رهيبة، ريحتني كثير لاني ما بحب ادفع بالفيزا اونلاين"}, stars: 5, color: "#10b981" },
      replies: []
    },
    {
      main: { name: "راشد", time: {ar:"منذ أسبوعين"}, text: {ar:"اللي متردد يطلبه وهو مغمض، حل لي مشكلة سرعة الانتهاء اللي عانيت منها سنين"}, stars: 5, color: "#3b82f6" },
      replies: [
        { name: "حاتم", time: {ar:"منذ أسبوعين"}, text: {ar:"اتفق معك بقوة، تغيرت حياتي للاحسن بفضله"}, color: "#f97316" }
      ]
    }
  ];

  let currentLang = "ar";
  const userThreads = [];
  let threadsShown = 0;
  const INITIAL_THREADS = 3;

  function esc(str){ return String(str).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"); }
  function avatarInitial(name){ const n = (name||"").trim(); if(!n) return "•"; return n[0].toUpperCase(); }
  function starsRow(n){ if(n === 0) return ""; const val = Math.max(1, Math.min(5, Number(n)||5)); return "★★★★★".slice(0,val) + "☆☆☆☆☆".slice(0,5-val); }
  function getLocalizedText(obj, lang){ if(!obj) return ""; return obj[lang] || obj.ar || obj.en || obj.he || ""; }

  function updateReviewSummary(all){
    const rsStars = document.getElementById("rsStars"); const rsAvg = document.getElementById("rsAvg"); const rsCount = document.getElementById("rsCount");
    if(!rsStars || !rsAvg || !rsCount) return;
    const ratedThreads = all.filter(t => t.main.stars > 0);
    const count = ratedThreads.length + 55;
    const sum = ratedThreads.reduce((a,r)=>a + (Number(r.main.stars)||5), 0) + (55 * 4.9);
    const avg = count ? (sum / count) : 4.9;
    const avgFixed = avg ? avg.toFixed(1) : "4.9";
    const filled = Math.max(0, Math.min(5, Math.round(avg)));
    rsStars.textContent = "★★★★★".slice(0,filled) + "☆☆☆☆☆".slice(0,5-filled);
    rsAvg.textContent = `${avgFixed}/5`;
    rsCount.textContent = (dict.reviewsCountLabel && dict.reviewsCountLabel[currentLang]) ? `${dict.reviewsCountLabel[currentLang]}: ${count}` : String(count);
  }

  function attachReplyListeners(allArray) {
    const replyBtns = document.querySelectorAll('.mrBtn');
    replyBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const container = this.closest('.miniReplyBox');
        const index = parseInt(container.getAttribute('data-index'));
        const nameInput = container.querySelector('.mrName');
        const textInput = container.querySelector('.mrInput');
        
        const nameVal = nameInput.value.trim() || "ضيف";
        const textVal = textInput.value.trim();
        
        if(textVal.length > 0) {
          allArray[index].replies.push({
             name: nameVal,
             time: { ar: "الآن", en: "Just now", he: "עכשיו" },
             text: { ar: textVal, en: textVal, he: textVal },
             color: "#14b8a6"
          });
          nameInput.value = "";
          textInput.value = "";
          renderReviews(currentLang, false); 
        }
      });
    });
  }

  function renderReviews(lang, reset){
    const list = document.getElementById("reviewsList");
    const moreBtn = document.getElementById("reviewsMore");
    if(!list) return;

    if(reset){ threadsShown = 0; }
    const all = userThreads.concat(seedThreads);

    updateReviewSummary(all);

    const nextCount = (threadsShown === 0) ? Math.min(all.length, INITIAL_THREADS) : all.length; 
    const slice = all.slice(0, nextCount);
    threadsShown = nextCount;

    list.innerHTML = "";
    slice.forEach((t, i) => {
      const m = t.main;
      const mName = m.name || "";
      const mTime = getLocalizedText(m.time, lang);
      const mText = getLocalizedText(m.text, lang);
      const mStars = m.stars || 0;
      const mColor = m.color || "#10b981";

      const threadDiv = document.createElement("div");
      threadDiv.className = "threadWrap";
      
      let html = `
        <div class="threadMain">
          <div class="tHeader">
            <div class="tUser">
              <div class="tAvatar" aria-hidden="true" style="background:${mColor}">${esc(avatarInitial(mName))}</div>
              <div>
                <div class="tName">${esc(mName)}</div>
                <div class="tTime">${esc(mTime)}</div>
              </div>
            </div>
            ${mStars > 0 ? `<div class="tStars" aria-label="${mStars} / 5">${starsRow(mStars)}</div>` : ''}
          </div>
          <div class="tBody">${esc(mText)}</div>
        </div>
      `;

      if (t.replies && t.replies.length > 0) {
        html += `<div class="threadReplies">`;
        t.replies.forEach(r => {
          const rName = r.name || "";
          const rTime = getLocalizedText(r.time, lang);
          const rText = getLocalizedText(r.text, lang);
          const rColor = r.color || "#3b82f6";
          
          html += `
            <div class="replyItem">
              <div class="tHeader" style="margin-bottom:4px;">
                <div class="tUser">
                  <div class="tAvatar" aria-hidden="true" style="background:${rColor}; width:24px; height:24px; font-size:11px;">${esc(avatarInitial(rName))}</div>
                  <div>
                    <div class="tName" style="font-size:12px;">${esc(rName)}</div>
                    <div class="tTime" style="font-size:10px;">${esc(rTime)}</div>
                  </div>
                </div>
              </div>
              <div class="tBody" style="font-size:12.5px;">${esc(rText)}</div>
            </div>
          `;
        });
        html += `</div>`;
      }

      const phNameTxt = getLocalizedText(dict.typeNameTitle, lang);
      const phReplyTxt = getLocalizedText(dict.typeReplyTitle, lang);
      const btnTxt = getLocalizedText(dict.btnReply, lang);
      
      html += `
        <div class="miniReplyBox" data-index="${i}">
          <div class="mrInputs">
            <input type="text" class="mrName" placeholder="${esc(phNameTxt)}">
            <input type="text" class="mrInput" placeholder="${esc(phReplyTxt)}">
          </div>
          <button type="button" class="mrBtn">${esc(btnTxt)}</button>
        </div>
      `;

      threadDiv.innerHTML = html;
      list.appendChild(threadDiv);
    });
    
    attachReplyListeners(all);

    if(moreBtn){
      const hasMore = all.length > threadsShown;
      moreBtn.hidden = !hasMore;
      moreBtn.onclick = () => {
        if(typeof moreBtn.blur === "function") moreBtn.blur();
        renderReviews(lang, false);
      };
    }
  }

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
    renderReviews(lang, true);
  };
  setLang("ar");

  const track = document.getElementById("sliderTrack");
  const dots = document.getElementById("dots");
  const thumbs = document.getElementById("thumbs");
  let index = 0, isDragging = false, startX = 0, currentX = 0, autoplayTimer = null;
  const AUTOPLAY_MS = 4200;
  const stopAutoplay = () => { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } };
  const startAutoplay = () => { stopAutoplay(); autoplayTimer = setInterval(() => { const lb = document.getElementById("lightbox"); if (lb && lb.classList.contains("is-open")) return; next(); }, AUTOPLAY_MS); };
  const restartAutoplaySoon = () => { stopAutoplay(); setTimeout(startAutoplay, 2500); };
  const makeSlide = (src, i) => { const s = document.createElement("div"); s.className = "slide is-loading"; s.dataset.index = String(i); const img = document.createElement("img"); img.alt = `Slide ${i + 1}`; img.decoding = "async"; img.loading = i === 0 ? "eager" : "lazy"; img.src = src; img.addEventListener("load", () => s.classList.remove("is-loading"), { once: true }); s.appendChild(img); return s; };
  const makeDot = (i) => { const d = document.createElement("button"); d.className = "dot"; d.type = "button"; d.addEventListener("click", () => goTo(i)); return d; };
  const makeThumb = (src, i, cls="thumb") => { const b = document.createElement("button"); b.type = "button"; b.className = cls; const img = document.createElement("img"); img.src = src; img.alt = `Thumb ${i+1}`; img.loading = "lazy"; img.decoding = "async"; b.appendChild(img); b.addEventListener("click", () => goTo(i)); return b; };
  if (track && dots && thumbs) { images.forEach((src, i) => { track.appendChild(makeSlide(src, i)); dots.appendChild(makeDot(i)); thumbs.appendChild(makeThumb(src, i, "thumb")); }); }
  const updateUI = () => { if(!track || !dots || !thumbs) return; const isRTL = document.documentElement.getAttribute("dir") === "rtl"; track.style.transform = `translateX(${(isRTL ? 1 : -1) * index * 100}%)`; [...dots.children].forEach((d, i) => d.classList.toggle("is-active", i === index)); [...thumbs.children].forEach((t, i) => t.classList.toggle("is-active", i === index)); [...track.children].forEach((slideEl, i) => { const img = slideEl.querySelector("img"); if (!img) return; slideEl.classList.toggle("is-loading", i === index && !img.complete); }); };
  const goTo = (i) => { index = (i + images.length) % images.length; updateUI(); };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);
  const nBtn = document.getElementById("nextBtn"); const pBtn = document.getElementById("prevBtn"); if(nBtn) nBtn.addEventListener("click", next); if(pBtn) pBtn.addEventListener("click", prev);
  const frame = document.getElementById("sliderFrame");
  if(frame){ const onDown = (e) => { isDragging = true; stopAutoplay(); startX = (e.touches ? e.touches[0].clientX : e.clientX); currentX = startX; track.style.transition = "none"; }; const onMove = (e) => { if (!isDragging) return; currentX = (e.touches ? e.touches[0].clientX : e.clientX); const dx = currentX - startX; const pct = (dx / frame.clientWidth) * 100; track.style.transform = `translateX(calc(${-index * 100}% + ${pct}%))`; }; const onUp = () => { if (!isDragging) return; isDragging = false; track.style.transition = ""; const dx = currentX - startX; const threshold = frame.clientWidth * 0.18; if (dx > threshold) prev(); else if (dx < -threshold) next(); else updateUI(); restartAutoplaySoon(); }; frame.addEventListener("mousedown", onDown); window.addEventListener("mousemove", onMove); window.addEventListener("mouseup", onUp); frame.addEventListener("touchstart", onDown, { passive: true }); frame.addEventListener("touchmove", onMove, { passive: true }); frame.addEventListener("touchend", onUp); }
  const lb = document.getElementById("lightbox"); const lbImg = document.getElementById("lbImg"); const lbThumbs = document.getElementById("lbThumbs"); const lbZoom = document.querySelector(".lightbox__zoom"); let lbIndex = 0;
  if (lb && lbThumbs && lbImg && lbZoom) { images.forEach((src, i) => { const t = document.createElement("button"); t.type = "button"; t.className = "lbthumb"; const img = document.createElement("img"); img.src = src; img.alt = `Viewer thumb ${i+1}`; img.loading = "lazy"; img.decoding = "async"; t.appendChild(img); t.addEventListener("click", () => setLB(i)); lbThumbs.appendChild(t); }); const setLB = (i) => { lbIndex = (i + images.length) % images.length; lbImg.src = images[lbIndex]; lbImg.alt = `Image ${lbIndex+1}`; [...lbThumbs.children].forEach((t, k) => t.classList.toggle("is-active", k === lbIndex)); lbZoom.scrollTop = 0; lbZoom.scrollLeft = 0; }; const openLightbox = (i) => { stopAutoplay(); lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; setLB(i); }; const closeLightbox = () => { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; restartAutoplaySoon(); }; const lbClose = document.getElementById("lbClose"); const lbBackdrop = document.getElementById("lbBackdrop"); if (lbClose) lbClose.addEventListener("click", closeLightbox); if (lbBackdrop) lbBackdrop.addEventListener("click", closeLightbox); }
  updateUI(); startAutoplay();

  // 3. إصلاح النجوم لتبقى دائماً مشتعلة وقابلة للضغط
  (() => {
    const wrap = document.getElementById("srRate"); const modal = document.getElementById("srModal"); const srText = document.getElementById("srText");
    if (!wrap || !modal) return;
    const stars = Array.from(wrap.querySelectorAll(".srStar")); const KEY = "rise_slider_rating_v2"; const AVG = Number(wrap.dataset.avg || "4.9");
    const t = (key) => { const lang = document.documentElement.lang || "ar"; return (dict[key] && dict[key][lang]) ? dict[key][lang] : (dict[key] && dict[key].ar) || ""; };
    
    // دالة التلوين تحافظ على الألوان دائماً زاهية
    const paintAvg = (avg) => { const full = Math.floor(avg); const frac = Math.max(0, avg - full); stars.forEach((b) => { const n = Number(b.dataset.v); let pct = 0; if (n <= full) pct = 100; else if (n === full + 1 && frac > 0) pct = Math.round(frac * 100); b.style.setProperty('--p', pct + '%'); b.classList.toggle('isHalf', pct > 0 && pct < 100); }); };
    
    const openModal = (messageKey) => { if (srText) srText.textContent = t(messageKey); modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false"); };
    const closeModal = () => { modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true"); };
    
    // نعرض دائما التقييم 4.9 لتبدو النجوم مضيئة وجميلة، سواء تم التقييم مسبقاً أو لا
    paintAvg(AVG); 
    
    stars.forEach(btn => { 
      btn.addEventListener("click", () => { 
        const already = Number(localStorage.getItem(KEY) || 0); 
        if (already) { 
            // إذا ضغط وهو مقيم مسبقا، تظهر رسالة لطيفة والنجوم تبقى مشتعلة
            openModal("alreadyRated"); 
            return; 
        } 
        const v = Number(btn.dataset.v); 
        localStorage.setItem(KEY, String(v)); 
        // نعيد التلوين ليطابق تقييمه (ستبقى مضيئة)
        paintAvg(v); 
        openModal("thanksRated"); 
      }); 
    });
    modal.addEventListener("click", (e) => { if (e.target && e.target.hasAttribute("data-sr-close")) closeModal(); });
  })();

  const panels = Array.from(document.querySelectorAll(".sectionPanel"));
  const openPanel = (panelEl) => { if (!panelEl) return; panels.forEach((p) => { const isTarget = p === panelEl; p.classList.toggle("is-open", isTarget); if (isTarget) { requestAnimationFrame(() => { p.style.maxHeight = p.scrollHeight + "px"; }); } else { p.style.maxHeight = "0px"; } }); };
  window.addEventListener("resize", () => { const open = document.querySelector(".sectionPanel.is-open"); if (open) open.style.maxHeight = open.scrollHeight + "px"; });
  function getStickyOffset(){ const langbar = document.querySelector(".langbar"); if(!langbar) return 0; return langbar.getBoundingClientRect().height || 0; }

  const DEFAULT_SECTION = "#reviews"; 
  const defaultBtn = document.querySelector(`.aBtn[data-scroll="${DEFAULT_SECTION}"]`); 
  const defaultPanel = document.querySelector(DEFAULT_SECTION);
  if (defaultBtn && defaultPanel) { document.querySelectorAll("[data-scroll]").forEach((b) => b.classList.remove("is-active")); defaultBtn.classList.add("is-active"); openPanel(defaultPanel); }

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); const sel = btn.getAttribute("data-scroll"); if (!sel) return; const el = document.querySelector(sel); if (!el) return;
      if (btn.classList.contains('aBtn')) { document.querySelectorAll(".aBtn").forEach((b) => b.classList.remove("is-active")); btn.classList.add("is-active"); }
      openPanel(el);
      setTimeout(() => { try { const offset = typeof getStickyOffset === "function" ? getStickyOffset() : 0; const actionRow = document.querySelector(".actionRow"); const targetElement = actionRow ? actionRow : el; const y = (targetElement.getBoundingClientRect().top + (window.pageYOffset || 0)) - offset - 12; if (typeof window.scrollTo === "function") { window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: "smooth" }); } } catch (_e) {} }, 380); 
    });
  });
  
  document.addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains('faq-q')) {
      const parent = e.target.closest('.faq-item');
      if(parent) { parent.classList.toggle('is-open'); const panel = parent.closest('.sectionPanel'); if (panel && panel.classList.contains('is-open')) { setTimeout(() => { panel.style.maxHeight = panel.scrollHeight + "px"; }, 300); } }
    }
  });

  const reviewForm = document.getElementById("reviewForm"); const rfName = document.getElementById("rfName"); const rfComment = document.getElementById("rfComment");
  if (reviewForm && rfName && rfComment) {
    let rfRating = 0; const rfStars = document.getElementById("rfStars"); const rfStarBtns = rfStars ? Array.from(rfStars.querySelectorAll(".starBtn")) : []; const rfStarsSpinner = document.getElementById("rfStarsSpinner"); const rfError = document.getElementById("rfError"); const rfSuccess = document.getElementById("rfSuccess"); const rfSubmit = document.getElementById("rfSubmit");
    function rfSetStars(val) { rfRating = val; rfStarBtns.forEach((b) => { const n = Number(b.getAttribute("data-star") || 0); b.classList.toggle("isOn", n <= val); }); }
    function rfFlashSpinner(ms = 280) { if (!rfStarsSpinner) return; rfStarsSpinner.classList.add("show"); setTimeout(() => rfStarsSpinner.classList.remove("show"), ms); }
    rfStarBtns.forEach((btn) => { btn.addEventListener("click", () => { const val = Number(btn.getAttribute("data-star") || 0); rfFlashSpinner(); setTimeout(() => { rfSetStars(val); if (rfError) rfError.hidden = true; if (rfSuccess) rfSuccess.hidden = true; }, 220); }); });
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault(); const name = (rfName.value || "").trim(); const comment = (rfComment.value || "").trim(); if (rfSuccess) rfSuccess.hidden = true;
      if (!name || !comment) return;
      if (rfSubmit) { rfSubmit.classList.add("isLoading"); rfSubmit.disabled = true; }
      const ratingForCard = rfRating || 0; 
      setTimeout(() => {
        userThreads.unshift({ main: { name: name, time: {ar:"الآن", en:"Just now", he:"עכשיו"}, text: { ar: comment, en:comment, he:comment }, stars: ratingForCard, color: "#10b981" }, replies: [] });
        renderReviews(currentLang, true);
        rfName.value = ""; rfComment.value = ""; rfSetStars(0);
        if (rfSuccess) rfSuccess.hidden = false;
        if (rfSubmit) { rfSubmit.classList.remove("isLoading"); rfSubmit.disabled = false; }
      }, 650);
    });
  }

  const qtySelect = document.getElementById("qtySelect"); const totalPrice = document.getElementById("totalPrice"); const prices = { "1": 200, "2": 300, "3": 400 };
  const updateTotal = () => { if (!qtySelect || !totalPrice) return; const v = qtySelect.value || "1"; totalPrice.textContent = `${prices[v] ?? 200} ₪`; };
  if (qtySelect) qtySelect.addEventListener("change", updateTotal); updateTotal();

  const offerTimer = document.getElementById("offerTimer"); const offerChips = Array.from(document.querySelectorAll(".offerChip")); const offerBuyButtons = Array.from(document.querySelectorAll(".offerBuy")); const orderPanel = document.getElementById("order"); const orderBtn = document.querySelector(`.aBtn[data-scroll="#order"]`);
  const OFFER_KEY = "ertqaa_offerEndsAt_v2"; const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  function getOfferEndsAt(){ try{ const raw = localStorage.getItem(OFFER_KEY); const n = raw ? Number(raw) : 0; if (n && Number.isFinite(n) && n > Date.now()) return n; }catch(_e){} const ends = Date.now() + ONE_DAY_MS; try{ localStorage.setItem(OFFER_KEY, String(ends)); }catch(_e){} return ends; }
  const offerEndsAt = getOfferEndsAt(); function pad2(x){ return String(Math.max(0, Math.floor(x))).padStart(2, "0"); }
  function updateOfferTimer(){ if(!offerTimer) return; const left = offerEndsAt - Date.now(); if(left <= 0){ offerTimer.textContent = dict.offerExpired[currentLang] || "انتهى العرض"; return; } const h = Math.floor(left / 3600000); const m = Math.floor((left % 3600000) / 60000); const s = Math.floor((left % 60000) / 1000); offerTimer.textContent = `${pad2(h)}:${pad2(m)}:${pad2(s)}`; }
  updateOfferTimer(); setInterval(updateOfferTimer, 1000);

  function selectOffer(qty){ const q = String(qty || "1"); offerChips.forEach(ch => ch.classList.toggle("is-selected", ch.getAttribute("data-offer") === q)); if (qtySelect){ qtySelect.value = q; try{ updateTotal(); }catch(_e){} } }
  offerBuyButtons.forEach((btn)=>{ btn.addEventListener("click", (e)=>{ e.preventDefault(); e.stopPropagation(); const chip = btn.closest(".offerChip"); const q = chip ? chip.getAttribute("data-offer") : "1"; selectOffer(q); if (orderBtn) { document.querySelectorAll(".aBtn").forEach(b => b.classList.remove("is-active")); orderBtn.classList.add("is-active"); } if (orderPanel){ try{ openPanel(orderPanel); }catch(_e){} setTimeout(() => { try { const offset = typeof getStickyOffset === "function" ? getStickyOffset() : 0; const actionRow = document.querySelector(".actionRow"); const targetElement = actionRow ? actionRow : orderPanel; const y = (targetElement.getBoundingClientRect().top + (window.pageYOffset || 0)) - offset - 12; window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: "smooth" }); } catch (_e) {} }, 380); } }); });

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
  }
})();
