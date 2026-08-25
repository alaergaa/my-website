(() => {
  // Keep phone inputs numeric-only
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
    title: { ar: "مركز الارتقاء الطبي", en: "Medical Elevation Center", he: "מרכז העלייה הרפואי" },
    subtitleLine1: { ar: "الحل الطبي الأقوى لاستعادة شبابك وثقتك، معتمد من مركز الارتقاء الطبي", en: "Rise product presented by Medical Elevation Center", he: "מוצר Rise מוצג על ידי מרכז העלייה הרפואי" },
    productImagesTitle: { ar: "صور المنتج", en: "Product Images", he: "תמונות המוצר" },
    badgeCod: { ar: "الدفع عند الاستلام", en: "Cash on delivery", he: "תשלום במשלוח" },
    badgePrivacy: { ar: "خصوصية تامة", en: "Full privacy", he: "פרטיות מלאה" },
    badgeGuarantee: { ar: "ضمان واسترداد", en: "Guarantee & refund", he: "אחריות והחזר" },
    btnOrder: { ar: "اطلب الآن واستعد ثقتك", en: "Order now", he: "הזמן עכשיו" },
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

    placeholderDesc: { ar: "ضع وصف الزر هنا", en: "Put the button description here.", he: "הכנס כאן תיאור." },
    
    // النصوص التسويقية القوية
    benefitsHtml: { 
      ar: `<ul class='bulletList'>
        <li>💪 <strong>قوة صخرية لا تُقهر:</strong> يقضي على الارتخاء نهائياً ويمنحك انتصاباً قوياً كالحجر خلال دقائق معدودة، يدوم طوال فترة العلاقة.</li>
        <li>⏳ <strong>سيطرة تامة ووقت أطول:</strong> يؤخر القذف بشكل طبيعي وفعّال، لتستمتع بلقاء أطول وأكثر إشباعاً دون أي شعور بالخدر أو فقدان للإحساس.</li>
        <li>🛡️ <strong>آمن وموثوق 100%:</strong> تركيبة طبية متطورة خالية تماماً من المواد الكيميائية الضارة، لا تسبب الصداع، ولا تؤثر على نبضات القلب أو ضغط الدم.</li>
        <li>⚡ <strong>مفعول فوري ومستدام:</strong> يبدأ التأثير فوراً من أول استخدام، وتزداد قوتك وأداؤك بشكل دائم وملحوظ مع الاستخدام المنتظم.</li>
        <li>🔥 <strong>إرضاء تام وثقة مطلقة:</strong> يزيل القلق والتوتر، ويعيد لك السيطرة الكاملة لتمنح شريكتك تجربة استثنائية لا تُنسى.</li>
      </ul>`, 
      en: `<ul class='bulletList'><li>Eliminates softness permanently – transforms the penis from weakness to rock-hard erection in minutes.</li><li>Stronger, bigger, and longer-lasting erection.</li><li>Noticeable delay of ejaculation without any numbing.</li><li>Professional medical formula.</li></ul>`, 
      he: `<ul class='bulletList'><li>מבטל את הרפיון לחלוטין – הופך את הפין לזקפה קשה כמו ברזל תוך דקות.</li><li>זקפה חזקה וארוכת טווח.</li><li>דחיית שפיכה ללא חוסר תחושה.</li><li>נוסחה רפואית מקצועית.</li></ul>` 
    },
    
    usageHtml: { 
      ar: `<p class='richIntro'>خطوات بسيطة وسريعة للحصول على أداء جبار:</p>
      <ol class='stepList'>
        <li><div class='stepHead'>1️⃣ التحضير والنظافة</div><div class='stepBody'><p>تأكد من غسل المنطقة الحساسة وتجفيفها تماماً لضمان أقصى سرعة لامتصاص المنتج.</p></div></li>
        <li><div class='stepHead'>2️⃣ الاستخدام والتدليك</div><div class='stepBody'><p>ضع كمية بسيطة (بحجم حبة البازلاء) وقم بتوزيعها وتدليكها بلطف بحركات دائرية لمدة دقيقة واحدة حتى يمتصها الجلد بالكامل.</p></div></li>
        <li><div class='stepHead'>3️⃣ الانطلاق</div><div class='stepBody'><p>انتظر من 15 إلى 20 دقيقة ليبدأ المفعول الجبار. <strong>لا حاجة لغسل المنطقة بعد الاستخدام</strong>، المنتج آمن تماماً ويمكنك بدء العلاقة مباشرة!</p></div></li>
      </ol>`, 
      en: `<p class='richIntro'>Follow these simple steps:</p><ol class='stepList'><li>Wash and dry the area.</li><li>Apply a pea-sized amount and massage gently.</li><li>Wait 15-20 minutes. No need to wash off.</li></ol>`, 
      he: `<p class='richIntro'>עקוב אחר השלבים הפשוטים הבאים:</p><ol class='stepList'><li>שטוף ויבש את האזור.</li><li>מרח כמות קטנה ועסה בעדינות.</li><li>המתן 15-20 דקות. אין צורך לשטוף.</li></ol>` 
    },
    
    suitableHtml: { 
      ar: `<p class='richIntro'>صُمم هذا المنتج ليكون آمناً وفعّالاً للجميع بدون استثناء:</p>
      <ul class='bulletList'>
        <li>✔️ <strong>لجميع الأعمار:</strong> فعال بقوة للشباب وكبار السن (من الثلاثينيات وحتى ما بعد الستين) لاستعادة ذروة الأداء الجنسي.</li>
        <li>✔️ <strong>لمرضى القلب وضغط الدم:</strong> منتج موضعي آمن تماماً، لا يدخل في مجرى الدم الكلي ولا يسبب أي تسارع في نبضات القلب.</li>
        <li>✔️ <strong>لمرضى السكري:</strong> لا يتداخل إطلاقاً مع مستويات السكر في الدم أو أدوية السكري.</li>
        <li>✔️ <strong>للباحثين عن التميز:</strong> لكل رجل يرغب في الارتقاء بأدائه، كسر الروتين، وزيادة ثقته بنفسه دون اللجوء للحبوب أو الوصفات الطبية المعقدة.</li>
      </ul>`, 
      en: `<ul class='bulletList'><li>Suitable for all ages.</li><li>Safe for heart & blood pressure patients.</li><li>Safe for diabetics.</li></ul>`, 
      he: `<ul class='bulletList'><li>מתאים לכל הגילאים.</li><li>בטוח לחולי לב ולחץ דם.</li><li>בטוח לחולי סוכרת.</li></ul>` 
    },

    phName: { ar: "الاسم", en: "Name", he: "שם" },
    phComment: { ar: "اكتب تعليقك...", en: "Write your comment...", he: "כתוב תגובה..." },
    btnSendComment: { ar: "إرسال", en: "Send", he: "שלח" },
    rateBeforeComment: { ar: "قيّم المنتج أولاً", en: "Rate the product first", he: "דרג את המוצר קודם" },
    reviewNeedRating: { ar: "يرجى اختيار عدد النجوم قبل إرسال التعليق.", en: "Please select a star rating before commenting.", he: "אנא בחר דירוג כוכבים לפני שליחת תגובה." },
    reviewSent: { ar: "تم إرسال تقييمك وتعليقك. شكرًا لك!", en: "Your rating and comment were submitted. Thank you!", he: "הדירוג והתגובה נשלחו. תודה!" },
    sendReview: { ar: "إرسال التعليق", en: "Send review", he: "שלח ביקורת" },
    commentThanks: { ar: "تم استلام تعليقك. شكرًا لك!", en: "Thanks! Your comment was received.", he: "תודה! התגובה התקבלה." },

    secOrderTitle: { ar: "اطلب الآن", en: "Order now", he: "הזמן עכשיו" },
    secOrderText: { ar: "ضع وصف الزر هنا", en: "Put the button description here.", he: "הכנס כאן תיאור." },
    secReviewsTitle: { ar: "آراء العملاء", en: "Customer reviews", he: "חוות דעת" },
    secReviewsText: { ar: "هنا ستظهر آراء العملاء على المنتج.", en: "Customer reviews will appear here.", he: "כאן יופיעו חוות דעת הלקוחות על המוצר." },
    secGuaranteeTitle: { ar: "الضمان والاسترداد", en: "Guarantee & refund", he: "אחריות והחזר" },
    secGuaranteeText: { ar: "ضع وصف الزر هنا", en: "Put the button description here.", he: "הכנס כאן תיאור." },
    secUsageTitle: { ar: "طريقة الاستخدام", en: "How to use", he: "אופן שימוש" },
    secBenefitsTitle: { ar: "فوائد المنتج", en: "Benefits", he: "יתרונות המוצר" },
    secSuitableTitle: { ar: "لمن يناسب؟", en: "Who is it for?", he: "למי זה מתאים?" },
    tapToZoom: { ar: "اضغط على الصورة للتكبير", en: "Tap the image to zoom", he: "הקש על התמונה להגדלה" },
    rateThanksTitle: { ar: "تم التقييم", en: "Rated", he: "דירגת" },
    rateThanksText: { ar: "شكرًا لك! تم استلام تقييمك.", en: "Thanks! Your rating was received.", he: "תודה! הדירוג התקבל." },
    okBtn: { ar: "حسنًا", en: "OK", he: "אישור" },
    orderThanksTitle: { ar: "تم استلام طلبك", en: "Order received", he: "הזמנה התקבלה" },
    orderThanksText: { ar: "شكرًا لك! تم استلام طلبك ✅ سنتواصل معك خلال دقائق.", en: "Thanks! Your order was received ✅ We'll contact you shortly.", he: "תודה! ההזמנה התקבלה ✅ ניצור קשר בקרוב." },
    orderSendFail: { ar: "حصل خطأ أثناء إرسال الطلب. جرّب مرة أخرى.", en: "There was an error sending your order. Please try again.", he: "אירעה שגיאה בשליחת ההזמנה. נסה שוב." },
    thanksRated: { ar: "تم استلام تقييمك.", en: "Rating received.", he: "הדירוג התקבל." },
    alreadyRated: { ar: "تم استلام تقييمك مسبقًا.", en: "You already rated.", he: "כבר דירגת." },

    orderTrustLine1: { ar: "طلبك يتم عبر جهة طبية موثوقة", en: "Your order is handled by a trusted medical center.", he: "ההזמנה מטופלת על ידי מרכז רפואי אמין." },
    orderTrustLine2: { ar: "نلتزم بالخصوصية التامة، وتأكيد الطلب يتم بسرعة بدون أي تعقيد.", en: "We keep full privacy, and confirm orders quickly with no hassle.", he: "פרטיות מלאה ואישור הזמנה מהיר ללא סיבוך." },
    orderTrustMini: { ar: "بياناتك بأمان 🔒 • تأكيد سريع • شحن سري • دفع عند الاستلام", en: "Your data is safe 🔒 • Fast confirmation • Discreet delivery • Cash on delivery", he: "המידע שלך בטוח 🔒 • אישור מהיר • משלוח דיסקרטי • תשלום במשלוח" },

    ofNameLabel: { ar: "الاسم الكامل", en: "Full name", he: "שם מלא" },
    ofPhoneLabel: { ar: "رقم الهاتف/واتساب", en: "Phone / WhatsApp", he: "טלפון / וואטסאפ" },
    ofCountryLabel: { ar: "الدولة", en: "Country", he: "מדינה" },
    ofCityLabel: { ar: "المدينة", en: "City", he: "עיר" },
    ofAddressLabel: { ar: "العنوان التفصيلي", en: "Detailed address", he: "כתובת מפורטת" },
    ofNoteLabel: { ar: "ملاحظة (اختياري)", en: "Note (optional)", he: "הערה (אופציונלי)" },

    phPhone: { ar: "رقم الهاتف/واتساب", en: "Phone / WhatsApp", he: "טלפון / וואטסאפ" },
    phCity: { ar: "المدينة", en: "City", he: "עיר" },
    phAddress: { ar: "العنوان التفصيلي", en: "Detailed address", he: "כתובת מפורטת" },
    phOrder: { ar: "مثال: 10452", en: "Example: 10452", he: "דוגמה: 10452" },
    phNote: { ar: "ملاحظات إضافية (اختياري)", en: "Additional notes (optional)", he: "הערות נוספות (אופציונלי)" },

    countryIL: { ar: "إسرائيل", en: "Israel", he: "ישראל" },
    countryPS: { ar: "فلسطين", en: "Palestine", he: "פלסטין" },
    countryJO: { ar: "الأردن", en: "Jordan", he: "ירדן" },
    countryEG: { ar: "مصر", en: "Egypt", he: "מצרים" },
    countrySA: { ar: "السعودية", en: "Saudi Arabia", he: "ערב הסעודית" },
    countryAE: { ar: "الإمارات", en: "UAE", he: "איחוד האמירויות" },
    phReason: { ar: "اكتب السبب باختصار...", en: "Write the reason briefly...", he: "כתוב את הסיבה בקצרה..." },

    qtyLabel: { ar: "الكمية", en: "Quantity", he: "כמות" },
    qty1: { ar: "1 عبوة", en: "1 bottle", he: "בקבוק 1" },
    qty2: { ar: "2 عبوتان", en: "2 bottles", he: "2 בקבוקים" },
    qty3: { ar: "3 عبوات", en: "3 bottles", he: "3 בקבוקים" },
    totalLabel: { ar: "السعر الإجمالي", en: "Total price", he: "מחיר כולל" },
    shippingIncluded: { ar: "شامل التوصيل", en: "Delivery included", he: "כולל משלוח" },
    confirmOrder: { ar: "تأكيد الطلب", en: "Confirm order", he: "אישור הזמנה" },
    orderSuccess: { ar: "تم استلام طلبك ✅ سنتواصل معك خلال دقائق.", en: "Order received ✅ We will contact you shortly.", he: "ההזמנה התקבלה ✅ ניצור קשר בקרוב." },

    guarLead: { ar: "نلتزم بتجربة عادلة وواضحة للعميل.", en: "We commit to a fair and clear customer experience.", he: "אנו מחויבים לחוויה הוגנת וברורה ללקוח." },
    guar15min: { ar: "إذا لم تلاحظ المفعول خلال 15 دقيقة من الاستخدام الصحيح في أول تجربة، يمكنك طلب استرداد كامل المبلغ وفق الشروط أدناه.", en: "If you don’t notice an effect within 15 minutes with correct use on the first try, you can request a full refund.", he: "אם לא מורגש אפקט בתוך 15 דקות בשימוש נכון בפעם הראשונה, ניתן לבקש החזר מלא." },
    guar72h: { ar: "تقديم طلب الاسترداد خلال 72 ساعة من استلام الطلب.", en: "Submit the refund request within 72 hours of receiving the order.", he: "הגישו בקשת החזר בתוך 72 שעות מקבלת ההזמנה." },
    guarUseLimit: { ar: "استخدام المنتج مرة أو مرتين كحد أقصى (بدون استخدام مفرط).", en: "Use the product 1–2 times max (no excessive use).", he: "שימוש 1–2 פעמים לכל היותר (ללא שימוש מופרז)." },
    guarPackage: { ar: "توفر العبوة الأصلية + رقم الطلب/رقم الهاتف للتحقق.", en: "Keep the original package + order/phone number for verification.", he: "שמירת האריזה המקורית + מספר הזמנה/טלפון לאימות." },
    guarPhotos: { ar: "إرسال صور واضحة للمنتج والعبوة (للتوثيق فقط).", en: "Send clear photos of the product and package (for documentation only).", he: "שלחו תמונות ברורות של המוצר והאריזה (לתיעוד בלבד)." },
    guarNoTamper: { ar: "عدم وجود تلف متعمد أو عبث بالمنتج.", en: "No intentional damage or tampering.", he: "ללא נזק מכוון או התעסקות." },
    guarAfter: { ar: "بعد قبول الطلب يتم الرد خلال 24 ساعة واسترداد كامل المبلغ.", en: "After approval, we respond within 24 hours and refund the full amount.", he: "לאחר אישור, נענה תוך 24 שעות ונחזיר את מלוא הסכום." },
    guarPrivacy: { ar: "خصوصيتك محفوظة بالكامل، ويتم التعامل مع طلبات الضمان والاسترداد بسرية تامة.", en: "Your privacy is fully protected, and refund requests are handled confidentially.", he: "הפרטיות שלך מוגנת לחלוטין והבקשות מטופלות בסודיות מלאה." },

    refundFormTitle: { ar: "نموذج طلب الاسترداد", en: "Refund request form", he: "טופס בקשת החזר" },
    refundFormHint: { ar: "املأ البيانات التالية وسنتواصل معك خلال 24 ساعة.", en: "Fill in the details and we’ll contact you within 24 hours.", he: "מלאו את הפרטים וניצור קשר בתוך 24 שעות." },
    rfName: { ar: "الاسم الكامل", en: "Full name", he: "שם מלא" },
    rfPhone: { ar: "رقم الهاتف/واتساب", en: "Phone / WhatsApp", he: "טלפון / וואטסאפ" },
    rfOrder: { ar: "رقم الطلب", en: "Order number", he: "מספר הזמנה" },
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
  };

  // ---------------- Seeded Reviews (20+ New Strong Arabic Reviews Added First) ----------------
  const seedReviews = [
    { id: 101, name: "خالد عبدالرحمن", text: { ar: "نتيجة خرافية من أول استخدام، انصح فيه وبشدة! فعلاً غير حياتي للأفضل.", en: "Amazing result from first use!", he: "תוצאה מדהימה מהשימוש הראשון!" }, stars: 5 },
    { id: 102, name: "سالم المري", text: { ar: "التوصيل كان سريع جداً والمنتج فعاليته ممتازة وبدون أي تخدير، شكراً لكم من القلب.", en: "Fast delivery and excellent effectiveness.", he: "משלוח מהיר ויעילות מצוינת." }, stars: 5 },
    { id: 103, name: "ياسر عبدالله", text: { ar: "افضل منتج جربته حتى الآن، يعطيك ثقة كبيرة جداً والنتيجة تدوم لفترة طويلة.", en: "Best product I have ever tried.", he: "המוצר הכי טוב שניסיתי." }, stars: 5 },
    { id: 104, name: "عمر الفاروق", text: { ar: "كنت متردد في البداية لكن بعد التجربة تأكدت انه منتج أصلي وقوي ويستحق كل ريال.", en: "Was hesitant but it is authentic and strong.", he: "הייתי מהסס אבל זה מקורי וחזק." }, stars: 5 },
    { id: 105, name: "أبو فهد", text: { ar: "يستحق كل قرش، صلابة غير طبيعية ووقت أطول بكثير. زوجتي لاحظت الفرق فوراً.", en: "Worth every penny, unnatural hardness.", he: "שווה כל אגורה, קשיות מדהימה." }, stars: 5 },
    { id: 106, name: "طارق س.", text: { ar: "بدون أي أعراض جانبية، لا صداع ولا خفقان. هذا اللي كنت ابحث عنه من زمان.", en: "No side effects at all.", he: "בלי תופעות לוואי בכלל." }, stars: 5 },
    { id: 107, name: "محمود خليل", text: { ar: "المفعول يبدأ بسرعة، تقريبا 15 دقيقة وتكون جاهز تماماً. خدمة العملاء راقية جداً.", en: "Takes effect quickly, about 15 mins.", he: "משפיע מהר, בערך 15 דקות." }, stars: 5 },
    { id: 108, name: "عبدالكريم", text: { ar: "ممتاز جدا جدا. طلبت العرض أبو 3 عبوات ومبسوط جدا من النتيجة، شكراً لكم.", en: "Very very excellent.", he: "מצוין מאוד מאוד." }, stars: 5 },
    { id: 109, name: "نواف", text: { ar: "المنتج سحري! الإحساس طبيعي 100% بس الأداء تضاعف مرات. مستحيل استغني عنه.", en: "Magic product! Natural feeling.", he: "מוצר קסם! תחושה טבעית." }, stars: 5 },
    { id: 110, name: "سعيد باوزير", text: { ar: "أشكر المركز الطبي على هذه التركيبة. جودة لا يعلى عليها، حل جذري للارتخاء.", en: "Thanks to the medical center for this formula.", he: "תודה למרכז הרפואי על הנוסחה הזו." }, stars: 5 },
    { id: 111, name: "فيصل الشمري", text: { ar: "والله منتج بطل بطل! ما توقعت النتيجة تكون بهالقوة، فرق كبير عن منتجات الصيدلية.", en: "Hero product! Didn't expect this power.", he: "מוצר גיבור! לא ציפיתי לכוח כזה." }, stars: 5 },
    { id: 112, name: "عبدالرحمن ج.", text: { ar: "ريّحني من القلق اللي كان يرافقني، الحين الثقة فل والأداء ممتاز.", en: "Relieved my anxiety, performance is great.", he: "הקל על החרדה שלי, הביצועים מעולים." }, stars: 5 },
    { id: 113, name: "ماجد الدوسري", text: { ar: "جربت أشياء كثيرة بس هذا الوحيد اللي نفع معي بدون ما يفقدني الإحساس.", en: "The only one that worked without losing sensation.", he: "היחיד שעבד בלי לאבד תחושה." }, stars: 5 },
    { id: 114, name: "زياد العتيبي", text: { ar: "سرعة في التأثير وقوة في الأداء.. صدق اللي قال انه أفضل بديل آمن.", en: "Fast effect and strong performance.", he: "השפעה מהירה וביצועים חזקים." }, stars: 5 },
    { id: 115, name: "حامد ناصر", text: { ar: "تغليف سري ومحترم والنتيجة بيضت وجهي. بطلب منه مرة ثانية أكيد.", en: "Discreet packaging and great result.", he: "אריזה דיסקרטית ותוצאה נהדרת." }, stars: 5 },
    { id: 116, name: "بندر", text: { ar: "صار لي شهر أستخدمه والتحسن ملحوظ جداً حتى بدون ما أحط منه أحياناً.", en: "Been using it for a month, huge improvement.", he: "משתמש בזה חודש, שיפור עצום." }, stars: 5 },
    { id: 117, name: "وليد القحطاني", text: { ar: "أنصح كل شخص يعاني من سرعة القذف يطلبه وهو مغمض.", en: "Highly recommend for premature ejaculation.", he: "ממליץ בחום לשפיכה מוקדמת." }, stars: 5 },
    { id: 118, name: "صالح الفضلي", text: { ar: "خمس نجوم قليلة بحقه، فعلاً رايز اسم على مسمى.", en: "Five stars is not enough.", he: "חמישה כוכבים זה לא מספיק." }, stars: 5 },
    { id: 119, name: "عبدالله السالم", text: { ar: "أفضل استثمار صحي سويته لنفسي، رجعت شباب بفضل الله ثم هذا المنتج.", en: "Best health investment.", he: "השקעת הבריאות הטובה ביותר." }, stars: 5 },
    { id: 120, name: "ممدوح", text: { ar: "رائع جداً ولا يسبب أي لزوجة أو رائحة مزعجة، وسهل الاستخدام.", en: "Very great and leaves no sticky feeling.", he: "נהדר מאוד ולא משאיר תחושה דביקה." }, stars: 5 },
    
    // الأراء الأصلية المتبقية (تم الحفاظ عليها)
    { "id": 1, "name": "יוסי כהן", "text": { "he": "ניסיתי את הדאון החיצוני הזה מהמרכז הרפואי, אחרי שבועיים כבר הרגשתי זקפה חזקה יותר בלי שום אובדן תחושה.", "ar": "جربت الدهون الخارجي ده من المركز الطبي، بعد أسبوعين حسيت بانتصاب أقوى بدون أي فقدان في الإحساس.", "en": "I tried this external cream from the medical center, after two weeks I already felt a stronger erection without any loss of sensation." }, "stars": 3 },
    { "id": 2, "name": "دانيال لوي", "text": { "he": "טוב מאוד נגד הרפיון, הזקפה נשארת יציבה והזמן מתארך בלי להרגיש “מת” כמו בספרייים אחרים.", "ar": "ممتاز جدًا ضد الارتخاء، الانتصاب بيبقى مستقر والوقت بيطول بدون ما أحس إني “مخدر” زي السبرايات التانية.", "en": "Excellent against softness, the erection stays stable and the time lasts longer without feeling “numb” like with other sprays." }, "stars": 5 },
    { "id": 3, "name": "أورن", "text": { "he": "המריחה קלה, ספג מהר, והתוצאה – זקפה קשה יותר ויותר שליטה בקצב.", "ar": "الدهن سهل، بيتمتص بسرعة، والنتيجة – انتصاب أصلب وتحكم أكتر في السرعة.", "en": "Easy to apply, absorbs quickly, and the result — harder erection and better control over speed." }, "stars": 5 },
    { "id": 4, "name": "ألون", "text": { "he": "אחרי כמה שימושים – שיפור ברור באיכות הזקפה והשהייה ארוכה יותר, בלי תחושת קהות.", "ar": "بعد كام استخدام – تحسن واضح في قوة الانتصاب والتأخير، بدون فقدان الإحساس.", "en": "After a few uses — clear improvement in erection strength and delay, without losing feeling." }, "stars": 4 },
    { "id": 5, "name": "نير", "text": { "he": "מומלץ למי שרוצה פתרון חיצוני בלי כדורים, עוזר לי מאוד עם הרפיון הקל.", "ar": "أنصح بيه للي عايز حل خارجي بدون حبوب، ساعدني كتير في الارتخاء الخفيف.", "en": "Highly recommend for anyone wanting an external solution without pills, helped me a lot with mild softness." }, "stars": 5 }
  ];

  const userReviews = [];
  let reviewsShown = 0;
  const INITIAL_REVIEWS = 4;
  const REVIEWS_PAGE = 5;
  let currentLang = "ar";

  function esc(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#39;");
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
    return r.text[lang] || r.text.he || r.text.ar || r.text.en || "";
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
    const moreBtn = document.getElementById("reviewsMore");
    if(!list) return;

    if(reset){ reviewsShown = 0; }
    const all = userReviews.concat(seedReviews);

    updateReviewSummary(all, lang);

    const nextCount = (reviewsShown === 0)
      ? Math.min(all.length, INITIAL_REVIEWS)
      : all.length; 
    const slice = all.slice(0, nextCount);
    reviewsShown = nextCount;

    list.innerHTML = "";
    slice.forEach(r=>{
      const name = r.name || "";
      const text = getReviewText(r, lang);
      const stars = r.stars || 5;

      const card = document.createElement("article");
      card.className = "reviewCard";
      card.innerHTML = `
        <div class="reviewTop">
          <div class="reviewIdentity">
            <div class="reviewAvatar" aria-hidden="true">${esc(avatarInitial(name))}</div>
            <div class="reviewName">${esc(name)}</div>
          </div>
          <div class="reviewStars" aria-label="${stars} / 5">${starsRow(stars)}</div>
        </div>
        <div class="reviewBody">${esc(text)}</div>
      `;
      list.appendChild(card);
    });

    if(moreBtn){
      const hasMore = all.length > reviewsShown;
      moreBtn.hidden = !hasMore;
      moreBtn.onclick = () => {
        if(typeof moreBtn.blur === "function") moreBtn.blur();
        renderReviews(lang, false);
      };
    }
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
        try { setLang(target); }
        finally { setTimeout(hideLangOverlay, 260); }
      });
    });
  });

  setLang("ar");

  const track = document.getElementById("sliderTrack");
  const dots = document.getElementById("dots");
  const thumbs = document.getElementById("thumbs");

  let index = 0;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let autoplayTimer = null;
  const AUTOPLAY_MS = 4200;

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (lb && lb.classList.contains("is-open")) return;
      next();
    }, AUTOPLAY_MS);
  };

  const restartAutoplaySoon = () => {
    stopAutoplay();
    setTimeout(startAutoplay, 2500);
  };

  const makeSlide = (src, i) => {
    const s = document.createElement("div");
    s.className = "slide is-loading";
    s.dataset.index = String(i);

    const img = document.createElement("img");
    img.alt = `Slide ${i + 1}`;
    img.decoding = "async";
    img.loading = i === 0 ? "eager" : "lazy";
    img.src = src;

    const markReady = () => s.classList.remove("is-loading");
    img.addEventListener("load", markReady, { once: true });
    img.addEventListener("error", () => {
      s.classList.remove("is-loading");
      s.classList.add("is-error");
    }, { once: true });

    s.appendChild(img);
    return s;
  };

  const makeDot = (i) => {
    const d = document.createElement("button");
    d.className = "dot";
    d.type = "button";
    d.addEventListener("click", () => goTo(i));
    return d;
  };

  const makeThumb = (src, i, cls="thumb") => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = cls;
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Thumb ${i+1}`;
    img.loading = "lazy";
    img.decoding = "async";
    b.appendChild(img);
    b.addEventListener("click", () => goTo(i));
    return b;
  };

  images.forEach((src, i) => {
    track.appendChild(makeSlide(src, i));
    dots.appendChild(makeDot(i));
    thumbs.appendChild(makeThumb(src, i, "thumb"));
  });

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

  const goTo = (i) => {
    index = (i + images.length) % images.length;
    updateUI();
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  document.getElementById("nextBtn").addEventListener("click", next);
  document.getElementById("prevBtn").addEventListener("click", prev);

  const frame = document.getElementById("sliderFrame");

  const onDown = (e) => {
    isDragging = true;
    stopAutoplay();
    startX = (e.touches ? e.touches[0].clientX : e.clientX);
    currentX = startX;
    track.style.transition = "none";
  };
  const onMove = (e) => {
    if (!isDragging) return;
    currentX = (e.touches ? e.touches[0].clientX : e.clientX);
    const dx = currentX - startX;
    const pct = (dx / frame.clientWidth) * 100;
    track.style.transform = `translateX(calc(${-index * 100}% + ${pct}%))`;
  };
  const onUp = () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = "";
    const dx = currentX - startX;
    const threshold = frame.clientWidth * 0.18;
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    else updateUI();

    restartAutoplaySoon();
  };

  frame.addEventListener("mousedown", onDown);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);

  frame.addEventListener("touchstart", onDown, { passive: true });
  frame.addEventListener("touchmove", onMove, { passive: true });
  frame.addEventListener("touchend", onUp);

  ["nextBtn", "prevBtn"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("click", restartAutoplaySoon);
  });
  dots.addEventListener("click", restartAutoplaySoon);
  thumbs.addEventListener("click", restartAutoplaySoon);

  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbThumbs = document.getElementById("lbThumbs");
  const lbZoom = document.querySelector(".lightbox__zoom");
  let lbIndex = 0;

  images.forEach((src, i) => {
    const t = document.createElement("button");
    t.type = "button";
    t.className = "lbthumb";
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Viewer thumb ${i+1}`;
    img.loading = "lazy";
    img.decoding = "async";
    t.appendChild(img);
    t.addEventListener("click", () => setLB(i));
    lbThumbs.appendChild(t);
  });

  const setLB = (i) => {
    lbIndex = (i + images.length) % images.length;
    lbImg.src = images[lbIndex];
    lbImg.alt = `Image ${lbIndex+1}`;
    [...lbThumbs.children].forEach((t, k) => t.classList.toggle("is-active", k === lbIndex));
    lbZoom.scrollTop = 0;
    lbZoom.scrollLeft = 0;
  };

  const openLightbox = (i) => {
    stopAutoplay();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setLB(i);
  };

  const closeLightbox = () => {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    restartAutoplaySoon();
  };

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbBackdrop").addEventListener("click", closeLightbox);

  updateUI();
  startAutoplay();

  const preload = new Image();
  preload.src = images[0];

// Rating Overlay Modal Logic
(() => {
  const wrap = document.getElementById("srRate");
  const modal = document.getElementById("srModal");
  const srText = document.getElementById("srText");
  if (!wrap || !modal) return;

  const stars = Array.from(wrap.querySelectorAll(".srStar"));
  const KEY = "rise_slider_rating_v1";
  const AVG = Number(wrap.dataset.avg || "4.9");

  const t = (key) => {
    const lang = document.documentElement.lang || "ar";
    return (dict[key] && dict[key][lang]) ? dict[key][lang] : (dict[key] && dict[key].ar) || "";
  };

  const paint = (v) => {
    stars.forEach((b) => {
      const n = Number(b.dataset.v);
      const pct = (n <= v) ? 100 : 0;
      b.style.setProperty('--p', pct + '%');
      b.classList.toggle('isHalf', false);
    });
  };

  const paintAvg = (avg) => {
    const full = Math.floor(avg);
    const frac = Math.max(0, avg - full);
    stars.forEach((b) => {
      const n = Number(b.dataset.v);
      let pct = 0;
      if (n <= full) pct = 100;
      else if (n === full + 1 && frac > 0) pct = Math.round(frac * 100); 
      b.style.setProperty('--p', pct + '%');
      b.classList.toggle('isHalf', pct > 0 && pct < 100);
    });
  };

  const openModal = (messageKey) => {
    if (srText) srText.textContent = t(messageKey);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  const saved = Number(localStorage.getItem(KEY) || 0);
  if (saved) {
    paint(saved);
    wrap.classList.add("is-done");
  }
  else {
    paintAvg(AVG);
  }

  stars.forEach(btn => {
    btn.addEventListener("click", () => {
      const already = Number(localStorage.getItem(KEY) || 0);
      if (already) {
        openModal("alreadyRated");
        return;
      }
      const v = Number(btn.dataset.v);
      localStorage.setItem(KEY, String(v));
      paint(v);
      wrap.classList.add("is-done");
      openModal("thanksRated");
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target && e.target.hasAttribute("data-sr-close")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();

  // Quick action buttons: Accordion logic
  const panels = Array.from(document.querySelectorAll(".sectionPanel"));
  const openPanel = (panelEl) => {
    if (!panelEl) return;
    panels.forEach((p) => {
      const isTarget = p === panelEl;
      p.classList.toggle("is-open", isTarget);
      if (isTarget) {
        requestAnimationFrame(() => {
          p.style.maxHeight = p.scrollHeight + "px";
        });
      } else {
        p.style.maxHeight = "0px";
      }
    });
  };

  window.addEventListener("resize", () => {
    const open = document.querySelector(".sectionPanel.is-open");
    if (open) open.style.maxHeight = open.scrollHeight + "px";
  });
  window.addEventListener("orientationchange", () => {
    const open = document.querySelector(".sectionPanel.is-open");
    if (open) open.style.maxHeight = open.scrollHeight + "px";
  });

  function getStickyOffset(){
    const langbar = document.querySelector(".langbar");
    if(!langbar) return 0;
    const rect = langbar.getBoundingClientRect();
    return rect.height || 0;
  }

  // --- جعل نموذج "اطلب الآن" هو المفتوح افتراضياً ---
  const DEFAULT_SECTION = "#order";
  const defaultBtn = document.querySelector(`[data-scroll="${DEFAULT_SECTION}"]`);
  const defaultPanel = document.querySelector(DEFAULT_SECTION);
  if (defaultBtn && defaultPanel) {
    document.querySelectorAll("[data-scroll]").forEach((b) => b.classList.remove("is-active"));
    defaultBtn.classList.add("is-active");
    openPanel(defaultPanel);
  }

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("[data-scroll]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const sel = btn.getAttribute("data-scroll");
      if (!sel) return;

      const el = document.querySelector(sel);
      if (!el) return;

      openPanel(el);

      try{
        const offset = getStickyOffset ? getStickyOffset() : 0;
        const y = (el.getBoundingClientRect().top + (window.pageYOffset||0)) - offset - 8;
        if (typeof window.scrollTo === "function"){
          try{
            window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: "smooth" });
          setTimeout(()=>{
            try{
              const y2 = (el.getBoundingClientRect().top + (window.pageYOffset||0)) - offset - 8;
              window.scrollTo({ top: Math.max(0, Math.round(y2)), behavior: "auto" });
            }catch(_e){}
          }, 260);
          }catch(_e){
            window.scrollTo(0, Math.max(0, Math.round(y)));
          }
        }
      }catch(_e){}

      if(typeof btn.blur === "function") btn.blur();
      });
  });

  // Reviews Add Comment
  const reviewForm = document.getElementById("reviewForm");
  const rfName = document.getElementById("rfName");
  const rfComment = document.getElementById("rfComment");
  const reviewsList = document.getElementById("reviewsList");

  if (reviewForm && rfName && rfComment && reviewsList) {
    let rfRating = 0;
    const rfStars = document.getElementById("rfStars");
    const rfStarBtns = rfStars ? Array.from(rfStars.querySelectorAll(".starBtn")) : [];
    const rfStarsSpinner = document.getElementById("rfStarsSpinner");
    const rfError = document.getElementById("rfError");
    const rfSuccess = document.getElementById("rfSuccess");
    const rfSubmit = document.getElementById("rfSubmit");

    function rfSetStars(val) {
      rfRating = val;
      rfStarBtns.forEach((b) => {
        const n = Number(b.getAttribute("data-star") || 0);
        b.classList.toggle("isOn", n <= val);
      });
    }

    function rfFlashSpinner(ms = 280) {
      if (!rfStarsSpinner) return;
      rfStarsSpinner.classList.add("show");
      setTimeout(() => rfStarsSpinner.classList.remove("show"), ms);
    }

    rfStarBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = Number(btn.getAttribute("data-star") || 0);
        rfFlashSpinner();
        setTimeout(() => {
          rfSetStars(val);
          if (rfError) rfError.hidden = true;
          if (rfSuccess) rfSuccess.hidden = true;
        }, 220);
      });
    });

    function makeAvatarInitial(name) {
      const t = (name || "").trim();
      if (!t) return "؟";
      return t[0].toUpperCase();
    }

    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (rfName.value || "").trim();
      const comment = (rfComment.value || "").trim();
      if (rfSuccess) rfSuccess.hidden = true;

      if (!rfRating) {
        if (rfError) rfError.hidden = false;
        reviewForm.classList.remove("shake");
        void reviewForm.offsetWidth;
        reviewForm.classList.add("shake");
        return;
      }

      if (!name || !comment) return;

      if (rfSubmit) {
        rfSubmit.classList.add("isLoading");
        rfSubmit.disabled = true;
      }

      const ratingForCard = rfRating;

      setTimeout(() => {
        userReviews.unshift({ name: name, text: { ar: comment, en: comment, he: comment }, stars: ratingForCard });
        renderReviews(currentLang, true);
        rfName.value = "";
        rfComment.value = "";
        rfSetStars(0);
        if (rfSuccess) rfSuccess.hidden = false;
        if (rfSubmit) {
          rfSubmit.classList.remove("isLoading");
          rfSubmit.disabled = false;
        }
      }, 650);
    });
  }

  // Offers & Pricing Logic
  const qtySelect = document.getElementById("qtySelect");
  const totalPrice = document.getElementById("totalPrice");
  const prices = { "1": 200, "2": 300, "3": 400 };

  const updateTotal = () => {
    if (!qtySelect || !totalPrice) return;
    const v = qtySelect.value || "1";
    totalPrice.textContent = `${prices[v] ?? 200} ₪`;
  };
  if (qtySelect) qtySelect.addEventListener("change", updateTotal);
  updateTotal();

  const offerTimer = document.getElementById("offerTimer");
  const offerChips = Array.from(document.querySelectorAll(".offerChip"));
  const offerBuyButtons = Array.from(document.querySelectorAll(".offerBuy"));
  const orderPanel = document.getElementById("order");
  const orderBtn = document.querySelector(`[data-scroll="#order"]`);

  const OFFER_KEY = "ertqaa_offerEndsAt_v2";
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  function getOfferEndsAt(){
    try{
      const raw = localStorage.getItem(OFFER_KEY);
      const n = raw ? Number(raw) : 0;
      if (n && Number.isFinite(n) && n > Date.now()) return n;
    }catch(_e){}
    const ends = Date.now() + ONE_DAY_MS;
    try{ localStorage.setItem(OFFER_KEY, String(ends)); }catch(_e){}
    return ends;
  }

  const offerEndsAt = getOfferEndsAt();

  function pad2(x){ return String(Math.max(0, Math.floor(x))).padStart(2, "0"); }

  function updateOfferTimer(){
    if(!offerTimer) return;
    const left = offerEndsAt - Date.now();
    if(left <= 0){
      offerTimer.textContent = dict.offerExpired[currentLang] || "انتهى العرض";
      return;
    }
    const h = Math.floor(left / 3600000);
    const m = Math.floor((left % 3600000) / 60000);
    const s = Math.floor((left % 60000) / 1000);
    offerTimer.textContent = `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
  }

  updateOfferTimer();
  setInterval(updateOfferTimer, 1000);

  function selectOffer(qty){
    const q = String(qty || "1");
    offerChips.forEach(ch => ch.classList.toggle("is-selected", ch.getAttribute("data-offer") === q));
    if (qtySelect){
      qtySelect.value = q;
      try{ updateTotal(); }catch(_e){}
      try{ qtySelect.dispatchEvent(new Event("change", { bubbles:true })); }catch(_e){}
    }
  }

  function scrollToSectionStart(el){
    if(!el) return;
    const doScroll = (behavior)=>{
      try{
        const offset = (typeof getStickyOffset === "function") ? getStickyOffset() : 0;
        const y = (el.getBoundingClientRect().top + (window.pageYOffset||0)) - offset - 8;
        const top = Math.max(0, Math.round(y));
        try{ window.scrollTo({ top, behavior }); }catch(_e){ window.scrollTo(0, top); }
      }catch(_e){}
    };
    doScroll("smooth");
    try{ setTimeout(()=>doScroll("auto"), 260); }catch(_e){}
  }

  offerBuyButtons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      e.stopPropagation();
      const chip = btn.closest(".offerChip");
      const q = chip ? chip.getAttribute("data-offer") : "1";
      selectOffer(q);

      if (orderBtn) {
        document.querySelectorAll("[data-scroll]").forEach(b => b.classList.remove("is-active"));
        orderBtn.classList.add("is-active");
      }
      
      if (orderPanel){
        try{ openPanel(orderPanel); }catch(_e){}
        setTimeout(()=>scrollToSectionStart(orderPanel), 60);
        setTimeout(()=>scrollToSectionStart(orderPanel), 240);
      }
      if (typeof btn.blur === "function") btn.blur();
    });
  });

  // Order Submit Logic
  const orderForm = document.getElementById("orderForm");
  const ofSubmit = document.getElementById("ofSubmit");
  const ofSuccess = document.getElementById("ofSuccess");
  const orderModal = document.getElementById("orderModal");

  const openOrderModal = () => {
    if (!orderModal) return;
    orderModal.classList.add("is-open");
    orderModal.setAttribute("aria-hidden", "false");
  };
  const closeOrderModal = () => {
    if (!orderModal) return;
    orderModal.classList.remove("is-open");
    orderModal.setAttribute("aria-hidden", "true");
  };

  if (orderModal) {
    orderModal.addEventListener("click", (e) => {
      const t = e.target;
      if (t && (t.hasAttribute("data-order-close") || t.closest?.("[data-order-close]"))) {
        closeOrderModal();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeOrderModal();
    });
  }

  bindPhoneNumeric(document.getElementById("ofPhone"));
  bindPhoneNumeric(document.getElementById("rfuPhone"));
  
  if (orderForm && ofSubmit) {
    orderForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      ofSuccess && (ofSuccess.hidden = true);

      const name = (document.getElementById("ofName")?.value || "").trim();
      const phone = (document.getElementById("ofPhone")?.value || "").trim();
      const country = (document.getElementById("ofCountry")?.value || "").trim();
      const city = (document.getElementById("ofCity")?.value || "").trim();
      const addr = (document.getElementById("ofAddress")?.value || "").trim();
      const qty = (document.getElementById("qtySelect")?.value || "").trim();

      if (!name || !phone || !country || !city || !addr || !qty || !isValidPhone(phone)) {
        if (orderForm.reportValidity) orderForm.reportValidity();
        return;
      }

      const offerChip = document.querySelector(".offerChip.is-selected") || document.querySelector(".offerChip.is-popular") || document.querySelector(".offerChip");
      const offerName = offerChip?.querySelector(".offerQty")?.textContent?.trim() || "";
      const totalText = document.getElementById("totalPrice")?.textContent?.trim() || "";

      const hiddenOffer = document.getElementById("ofOfferName");
      const hiddenTotal = document.getElementById("ofTotalHidden");
      if (hiddenOffer) hiddenOffer.value = offerName;
      if (hiddenTotal) hiddenTotal.value = totalText;

      ofSubmit.classList.add("isLoading");
      ofSubmit.disabled = true;

      try {
        const res = await fetch(orderForm.action, {
          method: "POST",
          body: new FormData(orderForm),
          headers: { "Accept": "application/json" }
        });

        if (!res.ok) throw new Error("bad_status");

        openOrderModal();
        try { orderForm.reset(); } catch(_e) {}
      } catch (err) {
        if (ofSuccess) {
          ofSuccess.hidden = false;
          ofSuccess.textContent = (dict?.orderSendFail?.[currentLang] || "There was an error sending your order. Please try again.");
        } else {
          alert(dict?.orderSendFail?.[currentLang] || "There was an error sending your order. Please try again.");
        }
      } finally {
        ofSubmit.classList.remove("isLoading");
        ofSubmit.disabled = false;
      }
    });

  const rfuPhotos = document.getElementById("rfuPhotos");
  const rfuPreview = document.getElementById("rfuPreview");
  const refundForm = document.getElementById("refundRequestForm");
  const rfuSubmit = document.getElementById("rfuSubmit");
  const rfuError = document.getElementById("rfuError");
  const rfuSuccess = document.getElementById("rfuSuccess");

  const clearPreview = () => {
    if (!rfuPreview) return;
    rfuPreview.innerHTML = "";
  };

  if (rfuPhotos && rfuPreview) {
    rfuPhotos.addEventListener("change", () => {
      clearPreview();
      const files = Array.from(rfuPhotos.files || []);
      files.slice(0, 6).forEach(file => {
        const url = URL.createObjectURL(file);
        const box = document.createElement("div");
        box.className = "pv";
        const img = document.createElement("img");
        img.src = url;
        img.alt = "photo";
        box.appendChild(img);
        rfuPreview.appendChild(box);
      });
    });
  }

  const hasValue = (id) => {
    const el = document.getElementById(id);
    return el && String(el.value || "").trim().length > 0;
  };

  if (refundForm && rfuSubmit) {
    refundForm.addEventListener("submit", (e) => {
      e.preventDefault();
      rfuError && (rfuError.hidden = true);
      rfuSuccess && (rfuSuccess.hidden = true);

      const phoneVal = (document.getElementById("rfuPhone")?.value || "").trim();
      const ok = hasValue("rfuName") && hasValue("rfuPhone") && hasValue("rfuReceived") && hasValue("rfuReason") && isValidPhone(phoneVal);
      const hasPhotos = rfuPhotos && (rfuPhotos.files || []).length > 0;

      if (!ok || !hasPhotos) {
        if (rfuError) rfuError.hidden = false;
        if (refundForm.reportValidity) refundForm.reportValidity();
        return;
      }

      rfuSubmit.classList.add("isLoading");
      rfuSubmit.disabled = true;

      setTimeout(() => {
        rfuSubmit.classList.remove("isLoading");
        rfuSubmit.disabled = false;
        if (rfuSuccess) rfuSuccess.hidden = false;
      }, 750);
    });
  }
}
})();
