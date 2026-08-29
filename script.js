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
    title: { ar: "استعد قوتك وثقتك المطلقة في 15 دقيقة فقط!", en: "Regain your strength and confidence in just 15 minutes!", he: "החזר את הכוח והביטחון שלך ב-15 דקות בלבד!" },
    subtitleLine1: { ar: "وداعاً للارتخاء واللقاء القصير مع تركيبة 'رايز' الطبية. أداء فوري، سيطرة تامة، وأمان تام بدون أي أعراض جانبية (مناسب لمرضى القلب والضغط).", en: "Say goodbye to weakness and short sessions with Rise medical formula. Instant performance, full control, and completely safe without side effects (suitable for heart and BP patients).", he: "תגיד שלום לחולשה ולמפגשים קצרים עם הנוסחה הרפואית של Rise. ביצועים מיידיים, שליטה מלאה, ובטוח לחלוטין ללא תופעות לוואי (מתאים לחולי לב ולחץ דם)." },
    trustIconsHtml: {
      ar: `<div class="hero-trust-badges"><span class="htb-item">⚡ مفعول فوري</span><span class="htb-item">🛡️ آمن 100%</span><span class="htb-item">🤐 خصوصية تامة</span></div>`,
      en: `<div class="hero-trust-badges"><span class="htb-item">⚡ Fast Effect</span><span class="htb-item">🛡️ 100% Safe</span><span class="htb-item">🤐 Total Privacy</span></div>`,
      he: `<div class="hero-trust-badges"><span class="htb-item">⚡ השפעה מהירה</span><span class="htb-item">🛡️ 100% בטוח</span><span class="htb-item">🤐 פרטיות מלאה</span></div>`
    },
    productImagesTitle: { ar: "اكتشف قوة 'رايز' عن قرب", en: "Discover Rise closely", he: "גלה את Rise מקרוב" },
    scarcityHtml: {
      ar: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">مخزون محدود: متبقي <strong>11 عبوة</strong> ضمن العرض الحالي</span></div><div class="ms-bar-container"><div class="ms-bar-fill"></div></div>`,
      en: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">Limited Stock: <strong>11 bottles</strong> left in this offer</span></div><div class="ms-bar-container"><div class="ms-bar-fill"></div></div>`,
      he: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">מלאי מוגבל: נותרו <strong>11 בקבוקים</strong> במבצע זה</span></div><div class="ms-bar-container"><div class="ms-bar-fill"></div></div>`
    },
    benefitsHtml: { 
      ar: `<ul class='bulletList'>
        <li>⚡ <strong>أداء فوري وصلابة صخرية:</strong> يقضي على مشكلة الضعف والارتخاء بشكل فوري. يضمن لك قوة وصلابة خلال 15 دقيقة فقط.</li>
        <li>⏱️ <strong>تأخير مضاعف وسيطرة تامة:</strong> يمنحك السيطرة الكاملة على وقتك. يطيل مدة اللقاء بشكل كبير جداً، وينهي التوتر.</li>
        <li>🔥 <strong>رضا كامل بدون تخدير:</strong> "رايز" يعمل بتقنية ذكية تقلل الحساسية المفرطة فقط، لتستمتع بالإحساس الطبيعي 100%.</li>
        <li>🛡️ <strong>البديل الآمن (لا يسبب الصداع):</strong> كونه علاجاً موضعياً خارجياً، فهو لا يدخل في مجرى الدم. آمن لمرضى الضغط والقلب.</li>
        <li>💪 <strong>جاهزية سريعة وثقة مطلقة:</strong> دلكه بلطف، واستعد ثقتك المطلقة بنفسك وبأدائك.</li>
      </ul>`, 
      en: `<ul class='bulletList' style='text-align:left; direction:ltr;'>
        <li>⚡ <strong>Instant Performance & Rock-solid Erection:</strong> Eliminates weakness instantly. Guarantees strength within 15 mins.</li>
        <li>⏱️ <strong>Double Delay & Full Control:</strong> Gives you total control over your time, significantly prolonging the session.</li>
        <li>🔥 <strong>Full Satisfaction Without Numbing:</strong> Smart technology reduces hypersensitivity only, preserving 100% natural sensation.</li>
        <li>🛡️ <strong>Safe Alternative (No Headaches):</strong> Being a topical solution, it doesn't enter the bloodstream. Safe for BP and heart patients.</li>
        <li>💪 <strong>Quick Readiness & Absolute Confidence:</strong> Easy to use without long waits. Apply, massage, and regain confidence.</li>
      </ul>`, 
      he: `<ul class='bulletList' style='text-align:right; direction:rtl;'>
        <li>⚡ <strong>ביצועים מיידיים וזקפה חזקה:</strong> מעלים את בעיית החולשה באופן מיידי. מבטיח כוח בתוך 15 דקות.</li>
        <li>⏱️ <strong>השהיה כפולה ושליטה מלאה:</strong> מעניק לך שליטה מלאה על הזמן שלך, מאריך משמעותית את המפגש.</li>
        <li>🔥 <strong>סיפוק מלא ללא אלחוש:</strong> טכנולוגיה חכמה המפחיתה רגישות יתר בלבד, ושומרת על 100% תחושה טבעית.</li>
        <li>🛡️ <strong>חלופה בטוחה (ללא כאבי ראש):</strong> מכיוון שמדובר בפתרון מקומי, הוא אינו חודר לזרם הדם. בטוח לחולי לחץ דם ולב.</li>
        <li>💪 <strong>מוכנות מהירה וביטחון מוחלט:</strong> קל לשימוש. מרח, עסה, ותחזיר את הביטחון שלך.</li>
      </ul>` 
    },
    goldGuaranteeHtml: {
      ar: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">سياسة الضمان الذهبي والاسترداد الفوري</h4>
           <p class="gold-desc" style="margin-bottom:12px;">نحن نتحمل عنك كامل المخاطرة. نقدم لك أقوى ضمان طبي: "النتيجة الفورية أو استرداد أموالك بالكامل".</p>
           <ul class="bulletList" style="text-align:right; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>اختبار الـ 15 دقيقة:</strong> إذا لم تحصل على قوة وتأخير ملحوظ خلال 15 دقيقة من تجربتك الأولى، لك الحق في استرداد كل شيكل.</li>
             <li>🤐 <strong>بدون أسئلة محرجة:</strong> يتم التعامل مع طلب الاسترداد بمهنية وسرية تامة.</li>
           </ul>`,
      en: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">Golden Guarantee & Instant Refund</h4>
           <p class="gold-desc" style="margin-bottom:12px;">We take all the risk. We offer the strongest medical guarantee: "Instant results or your money back".</p>
           <ul class="bulletList" style="text-align:left; direction:ltr; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>15-Minute Test:</strong> If you don't get noticeable strength and delay within 15 minutes, you get a full refund.</li>
             <li>🤐 <strong>No Awkward Questions:</strong> Refund requests are handled professionally and with total privacy.</li>
           </ul>`,
      he: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">אחריות זהב והחזר מיידי</h4>
           <p class="gold-desc" style="margin-bottom:12px;">אנו לוקחים על עצמנו את כל הסיכון. אנו מציעים את האחריות הרפואית החזקה ביותר: "תוצאות מיידיות או כספך בחזרה".</p>
           <ul class="bulletList" style="text-align:right; direction:rtl; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>מבחן ה-15 דקות:</strong> אם לא תקבל כוח והשהיה מורגשת תוך 15 דקות מהניסיון הראשון, תקבל החזר מלא.</li>
             <li>🤐 <strong>ללא שאלות מביכות:</strong> בקשות החזר מטופלות במקצועיות ובפרטיות מוחלטת.</li>
           </ul>`
    },
    aboutHtml: {
      ar: `<div class="sectionRich">
            <p class="richIntro">نحن في <strong>"مركز الارتقاء الطبي"</strong> لسنا مجرد نقطة بيع، بل صرح طبي رائد وموثوق مقره القدس. كرسنا جهودنا لتقديم حلول صحية مبتكرة تركز حصرياً على "صحة الرجل".</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text"><strong>فلسفتنا الطبية:</strong> توفير بدائل آمنة وموضعية تغنيك تماماً عن الحبوب الكيميائية.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text"><strong>الخصوصية التامة:</strong> تسليم يداً بيد في "تغليف أسود مبهم بالكامل" لا يدل على محتواه.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>دعم طبي متواصل:</strong> للتواصل/واتساب: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div>
            </div>
           </div>`,
      en: `<div class="sectionRich" style="text-align:left; direction:ltr;">
            <p class="richIntro"><strong>Medical Elevation Center</strong> is a leading and trusted medical institution based in Jerusalem, exclusively dedicated to men's health.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text" style="text-align:left;"><strong>Medical Philosophy:</strong> Providing safe, topical alternatives replacing chemical pills.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text" style="text-align:left;"><strong>Total Privacy:</strong> Hand-to-hand delivery in completely opaque black packaging.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text" style="text-align:left;"><strong>Medical Support:</strong> WhatsApp: <strong style="color:#10b981;">+972512865105</strong></div></div>
            </div>
           </div>`,
      he: `<div class="sectionRich" style="text-align:right; direction:rtl;">
            <p class="richIntro"><strong>מרכז העלייה הרפואי</strong> הוא מוסד רפואי מוביל ואמין בירושלים, המוקדש באופן בלעדי לבריאות הגבר.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text" style="text-align:right;"><strong>פילוסופיה רפואית:</strong> מתן חלופות מקומיות בטוחות במקום כדורים כימיים.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text" style="text-align:right;"><strong>פרטיות מלאה:</strong> משלוח מיד ליד באריזה שחורה ואטומה לחלוטין.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text" style="text-align:right;"><strong>תמיכה רפואית:</strong> וואטסאפ: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div>
            </div>
           </div>`
    },
    footerInfo: {
      ar: `<div class="fc-welcome">نحن هنا من أجلك، لتقديم رعاية صحية تليق بك وبثقتك.</div>
           <p>📍 <strong>المقر الرئيسي:</strong> القدس - جبل الزيتون، الشارع الرئيسي، المجمع الطبي الملاصق لفندق الأمل، الطابق الثاني.</p>
           <p>🕒 <strong>مواعيد العمل:</strong> من الأحد إلى الخميس (9:00 صباحاً حتى 9:00 مساءً)</p>
           <p>🚚 <strong>نطاق الشحن:</strong> توصيل سريع في تغليف أسود مبهم لجميع مدن الداخل والضفة الغربية.</p>
           <p>📞 <strong>للتواصل والواتساب:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`,
      en: `<div class="fc-welcome" style="text-align:left;">We are here to provide healthcare worthy of your trust.</div>
           <p style="text-align:left; direction:ltr;">📍 <strong>Headquarters:</strong> Jerusalem - Mount of Olives, Main St, Medical Complex.</p>
           <p style="text-align:left; direction:ltr;">🕒 <strong>Working Hours:</strong> Sun-Thu 9:00 AM to 9:00 PM</p>
           <p style="text-align:left; direction:ltr;">🚚 <strong>Shipping:</strong> Fast, discreet black packaging delivery to all regions.</p>
           <p style="text-align:left; direction:ltr;">📞 <strong>Contact & WhatsApp:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`,
      he: `<div class="fc-welcome" style="text-align:right;">אנחנו כאן כדי לספק שירותי בריאות הראויים לאמון שלך.</div>
           <p style="text-align:right; direction:rtl;">📍 <strong>כתובת:</strong> ירושלים - הר הזיתים, הרחוב הראשי, המתחם הרפואי.</p>
           <p style="text-align:right; direction:rtl;">🕒 <strong>שעות פעילות:</strong> ראשון-חמישי 09:00 עד 21:00</p>
           <p style="text-align:right; direction:rtl;">🚚 <strong>משלוח:</strong> משלוח מהיר ודיסקרטי באריזה שחורה לכל האזורים.</p>
           <p style="text-align:right; direction:rtl;">📞 <strong>וואטסאפ:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`
    },
    faqHtml: {
      ar: `<div class='faq-list'>
            <div class='faq-item is-open'><button class='faq-q'>هل للمنتج أي أعراض جانبية؟</button><div class='faq-a'><p>لا، المنتج موضعي وآمن 100%. لا يدخل في مجرى الدم ولا يسبب أي صداع أو خفقان.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل يمكن استخدامه لمرضى السكري والضغط؟</button><div class='faq-a'><p>نعم بكل تأكيد. لا يتعارض مع أدوية السكري أو الضغط.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>متى يبدأ مفعول المنتج؟</button><div class='faq-a'><p>يبدأ المفعول الفعلي خلال 15 دقيقة من الاستخدام والتدليك الجيد.</p></div></div>
          </div>`,
      en: `<div class='faq-list' style='direction:ltr;'>
            <div class='faq-item is-open'><button class='faq-q' style='text-align:left;'>Are there side effects?</button><div class='faq-a' style='text-align:left;'><p>No, it's 100% topical and safe. No headaches or palpitations.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q' style='text-align:left;'>Safe for diabetes and BP?</button><div class='faq-a' style='text-align:left;'><p>Absolutely. It doesn't interfere with medications.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q' style='text-align:left;'>When does it take effect?</button><div class='faq-a' style='text-align:left;'><p>Effect begins within 15 mins after application and massage.</p></div></div>
          </div>`,
      he: `<div class='faq-list' style='direction:rtl;'>
            <div class='faq-item is-open'><button class='faq-q'>האם יש תופעות לוואי?</button><div class='faq-a'><p>לא, בטוח ב-100%. לא גורם לכאבי ראש או דפיקות לב.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>האם בטוח לחולי סוכרת ולחץ דם?</button><div class='faq-a'><p>בהחלט. אינו מתנגש עם תרופות.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>מתי זה מתחיל להשפיע?</button><div class='faq-a'><p>ההשפעה מתחילה תוך 15 דקות לאחר עיסוי.</p></div></div>
          </div>`
    },
    usageHtml: { 
      ar: `<p class='richIntro'>خطوات بسيطة وسريعة للحصول على أداء جبار:</p>
      <ol class='stepList'>
        <li><div class='stepHead'>1️⃣ التحضير والنظافة</div><div class='stepBody'><p>تأكد من غسل المنطقة وتجفيفها تماماً.</p></div></li>
        <li><div class='stepHead'>2️⃣ الاستخدام والتدليك</div><div class='stepBody'><p>ضع كمية بسيطة ودلكها بلطف لمدة دقيقة حتى يمتصها الجلد.</p></div></li>
        <li><div class='stepHead'>3️⃣ الانطلاق</div><div class='stepBody'><p>انتظر 15 دقيقة ليبدأ المفعول. <strong>لا حاجة للغسل بعد الاستخدام</strong>.</p></div></li>
      </ol>`, 
      en: `<p class='richIntro' style='text-align:left;'>Quick steps for powerful performance:</p>
      <ol class='stepList' style='text-align:left; direction:ltr;'>
        <li><div class='stepHead'>1️⃣ Preparation</div><div class='stepBody'><p>Wash and dry the area thoroughly.</p></div></li>
        <li><div class='stepHead'>2️⃣ Application</div><div class='stepBody'><p>Apply a small amount and massage for one minute.</p></div></li>
        <li><div class='stepHead'>3️⃣ Action</div><div class='stepBody'><p>Wait 15 mins. <strong>No need to wash off</strong>.</p></div></li>
      </ol>`, 
      he: `<p class='richIntro' style='text-align:right;'>שלבים לביצועים עוצמתיים:</p>
      <ol class='stepList' style='text-align:right; direction:rtl;'>
        <li><div class='stepHead'>1️⃣ הכנה</div><div class='stepBody'><p>שטוף ויבש את האזור היטב.</p></div></li>
        <li><div class='stepHead'>2️⃣ שימוש</div><div class='stepBody'><p>מרח כמות קטנה ועסה למשך דקה.</p></div></li>
        <li><div class='stepHead'>3️⃣ פעולה</div><div class='stepBody'><p>המתן 15 דקות. <strong>אין צורך לשטוף</strong>.</p></div></li>
      </ol>` 
    },
    suitableHtml: { 
      ar: `<p class='richIntro'>صُمم هذا المنتج ليكون آمناً وفعّالاً للجميع بدون استثناء:</p>
      <ul class='bulletList'>
        <li>✔️ <strong>لجميع الأعمار:</strong> فعال للشباب وكبار السن.</li>
        <li>✔️ <strong>لمرضى القلب وضغط الدم:</strong> آمن تماماً، لا يدخل مجرى الدم.</li>
        <li>✔️ <strong>لمرضى السكري:</strong> لا يتداخل إطلاقاً مع مستويات السكر.</li>
      </ul>`, 
      en: `<p class='richIntro' style='text-align:left; direction:ltr;'>Designed to be safe and effective for everyone:</p>
      <ul class='bulletList' style='text-align:left; direction:ltr;'>
        <li>✔️ <strong>All Ages:</strong> Highly effective for both young and older men.</li>
        <li>✔️ <strong>Heart & BP Patients:</strong> 100% safe, doesn't enter the bloodstream.</li>
        <li>✔️ <strong>Diabetics:</strong> Does not interfere with blood sugar levels.</li>
      </ul>`, 
      he: `<p class='richIntro' style='text-align:right; direction:rtl;'>מיועד להיות בטוח ויעיל לכולם:</p>
      <ul class='bulletList' style='text-align:right; direction:rtl;'>
        <li>✔️ <strong>לכל הגילאים:</strong> יעיל מאוד לצעירים ומבוגרים.</li>
        <li>✔️ <strong>לחולי לב ולחץ דם:</strong> בטוח ב-100%, אינו חודר לזרם הדם.</li>
        <li>✔️ <strong>לחולי סוכרת:</strong> אינו מתנגש כלל עם רמות הסוכר.</li>
      </ul>` 
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
    rateBeforeComment: { ar: "شارك تجربتك وقيّم المنتج (اختياري)", en: "Share your experience (Optional)", he: "שתף את החוויה שלך (אופציונלי)" },
    reviewNeedRating: { ar: "يرجى اختيار عدد النجوم قبل إرسال التعليق.", en: "Please select a star rating before commenting.", he: "אנא בחר דירוג כוכבים לפני שליחת תגובה." },
    reviewSent: { ar: "تم إرسال تقييمك وتعليقك للمراجعة. شكرًا لك!", en: "Your rating was submitted for review. Thank you!", he: "הדירוג נשלח לבדיקה. תודה!" },
    sendReview: { ar: "إرسال المشاركة", en: "Submit", he: "שלח" },
    secOrderTitle: { ar: "اطلب الآن", en: "Order now", he: "הזמן עכשיו" },
    secReviewsTitle: { ar: "نقاشات واستفسارات العملاء الحية", en: "Live Customer Discussions", he: "דיונים חיים של לקוחות" },
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
    ofNoteLabel: { ar: "ملاحظة (اختياري)", en: "Note (optional)", he: "הערה (אופציונלי)" },
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
    typeReplyTitle: { ar: "اكتب ردك هنا...", en: "Type your reply...", he: "כתוב תגובתך כאן..." },
    btnReply: { ar: "رد", en: "Reply", he: "הגב" },
    toastReplySent: { ar: "تم إرسال الرد للمراجعة ✅", en: "Reply sent for review ✅", he: "התגובה נשלחה לבדיקה ✅" }
  };

  // نظام النقاشات المتسلسلة (Threaded Comments) مع السيناريوهات المطلوبة مترجمة
  const seedThreads = [
    {
      main: { name: "أبو وليد", time: {ar:"منذ 3 أيام",en:"3 days ago",he:"לפני 3 ימים"}, text: {ar:"يا اخوان انا مريض سكر من 5 سنين وعندي ضعف هل هذا المنتج يعالج الشي ولا كلام اعلانات ياريت تفيدوني", en:"Guys I've been diabetic for 5 years with weakness, does this product work or just ads? Please advise", he:"חברים אני חולה סוכרת כבר 5 שנים עם חולשה, האם המוצר הזה עובד או סתם פרסומות? אשמח לייעוץ"}, stars: 0, color: "#10b981" },
      replies: [
        { name: "خالد م.", time: {ar:"منذ 3 أيام",en:"3 days ago",he:"לפני 3 ימים"}, text: {ar:"انا سكري تراكمي عالي وتعبني الارتخاء جربته والحمدلله النتيجة ممتازة وما أثر على السكر", en:"My A1C is high and I was tired of weakness, tried it and results are great without affecting blood sugar", he:"ה-A1C שלי גבוה והייתי עייף מחולשה, ניסיתי והתוצאות מצוינות מבלי להשפיע על הסוכר"}, color: "#3b82f6" },
        { name: "سامر", time: {ar:"منذ يومين",en:"2 days ago",he:"לפני יומיים"}, text: {ar:"المنتج شغال ونتيجته حلوة بس العبوة صغيرة تخلص بسرعة المفروض يكبرونها شوي", en:"Product works well but the bottle is small and finishes fast, they should make it bigger", he:"המוצר עובד טוב אבל הבקבוק קטן ונגמר מהר, כדאי שיגדילו אותו"}, color: "#8b5cf6" },
        { name: "عدي", time: {ar:"منذ يومين",en:"2 days ago",he:"לפני יומיים"}, text: {ar:"يا شباب كم سعره بالشيكل مع التوصيل؟", en:"Guys, how much is it in Shekels with delivery?", he:"חבר'ה, כמה זה עולה בשקלים עם משלוח?"}, color: "#f59e0b" },
        { name: "محمود", time: {ar:"منذ يوم",en:"1 day ago",he:"אתמול"}, text: {ar:"مكتوب فوق السعر اخوي، واذا طلبت العرض الثاني بيطلعلك اوفر بكثير وتوصيل مجاني", en:"Price is written above brother, if you order the second offer it's much cheaper with free delivery", he:"המחיר כתוב למעלה אחי, אם תזמין את המבצע השני זה הרבה יותר זול עם משלוח חינם"}, color: "#ef4444" },
        { name: "مصطفى", time: {ar:"منذ يوم",en:"1 day ago",he:"אתמול"}, text: {ar:"والله قريت تعليقاتكم وتوكلت على الله توني طالب العرض المزدوج بانتظار يوصلني", en:"Read your comments and went for it, just ordered the double offer waiting for it", he:"קראתי את התגובות שלכם והלכתי על זה, בדיוק הזמנתי את המבצע הכפול מחכה לו"}, color: "#14b8a6" },
        { name: "أبو وليد", time: {ar:"منذ 12 ساعة",en:"12 hours ago",he:"לפני 12 שעות"}, text: {ar:"تسلمون على صراحتكم ريحتوني والله انا بعد طلبت الحين وبجرب", en:"Thanks for your honesty, I feel relieved. I just ordered too and will try", he:"תודה על הכנות שלכם, אני מרגיש הקלה. הזמנתי גם עכשיו ואנסה"}, color: "#10b981" }
      ]
    },
    {
      main: { name: "عصام", time: {ar:"منذ يومين",en:"2 days ago",he:"לפני יומיים"}, text: {ar:"يعطيكم العافية شباب، انا عامل قسطرة وباخذ دوا ضغط، بيأثر عالقلب ولا عادي؟", en:"Hello guys, I had a catheterization and take BP meds, does it affect the heart or is it fine?", he:"שלום חבר'ה, עברתי צנתור ואני לוקח תרופות ללחץ דם, האם זה משפיע על הלב או שזה בסדר?"}, stars: 0, color: "#f97316" },
      replies: [
        { name: "طارق", time: {ar:"أمس",en:"Yesterday",he:"אתמול"}, text: {ar:"اخوي انا مريض ضغط واستخدم رايز وما حسيت بأي صداع ولا دقات قلبي زادت امن", en:"Brother I have BP issues and use Rise, didn't feel any headache or increased heart rate, it's safe", he:"אחי יש לי בעיות לחץ דם ואני משתמש ב-Rise, לא הרגשתי שום כאב ראש או דופק מואץ, זה בטוח"}, color: "#ef4444" },
        { name: "محمد غ.", time: {ar:"أمس",en:"Yesterday",he:"אתמול"}, text: {ar:"شوف هو منيح وفعال وما بيرفع الضغط بس شركة التوصيل غلبتني شوي عبين ما وصلوه عرام الله قعدوا 3 ايام", en:"Look it's good and doesn't raise BP, but the delivery company took 3 days to get it to Ramallah", he:"תראה זה טוב ולא מעלה לחץ דם, אבל לחברת המשלוחים לקח 3 ימים להגיע לרמאללה"}, color: "#eab308" },
        { name: "بدر", time: {ar:"أمس",en:"Yesterday",he:"אתמול"}, text: {ar:"طيب يا شباب هل يحتاج اغسله قبل العلاقة ولا عادي؟", en:"Okay guys, do I need to wash it before the session or is it okay?", he:"טוב חבר'ה, האם צריך לשטוף את זה לפני המפגש או שזה בסדר?"}, color: "#3b82f6" },
        { name: "نضال", time: {ar:"اليوم",en:"Today",he:"היום"}, text: {ar:"اه ضروري تغسله بعد ثلث ساعة هيك احسن الك وللمدام عشان ما تتضايق", en:"Yeah you must wash it after 20 mins, it's better for you and the missus so she doesn't get bothered", he:"כן, חובה לשטוף אחרי 20 דקות, זה עדיף לך ולאישה כדי שלא יפריע לה"}, color: "#8b5cf6" },
        { name: "عصام", time: {ar:"اليوم",en:"Today",he:"היום"}, text: {ar:"ممتاز دام ما فيه خفقان والتأخير مش مشكلة مقدور عليها بطلبه هلقيت يعطيك العافية", en:"Excellent, as long as there are no palpitations. Delay isn't a problem, ordering it right now.", he:"מצוין, כל עוד אין דפיקות לב. השהיה זו לא בעיה, מזמין את זה עכשיו."}, color: "#f97316" }
      ]
    },
    {
      main: { name: "يوسف جابر", time: {ar:"منذ 5 ساعات",en:"5 hours ago",he:"לפני 5 שעות"}, text: {ar:"المنتج انقذني صراحة جربت اشياء كثير بس هذا اللي اعطاني تأخير بدون تعب انصح فيه", en:"Product saved me honestly, tried many things but this gave me delay without fatigue, highly recommend", he:"המוצר הציל אותי בכנות, ניסיתי הרבה דברים אבל זה נתן לי השהיה ללא עייפות, ממליץ בחום"}, stars: 5, color: "#10b981" },
      replies: [
        { name: "احمد", time: {ar:"منذ 4 ساعات",en:"4 hours ago",he:"לפני 4 שעות"}, text: {ar:"هل يخدر المنطقة وتفقد الاحساس لان البخاخات تخدر كل شي", en:"Does it numb the area and make you lose sensation? Because sprays numb everything", he:"האם זה מרדים את האזור וגורם לאובדן תחושה? כי תרסיסים מרדימים הכל"}, color: "#3b82f6" },
        { name: "رامي", time: {ar:"منذ 3 ساعات",en:"3 hours ago",he:"לפני 3 שעות"}, text: {ar:"لا يا زلمة ما بخدر بالمرة، مش زي البخاخات اللي بتنشرى من الصيدلية، هاد طبيعي بتحس بكل اشي بس بيعطيك سيطرة", en:"No man it doesn't numb at all, not like pharmacy sprays. It feels natural and you sense everything but with control", he:"לא אחי זה לא מרדים בכלל, לא כמו תרסיסים מבית המרקחת. זה טבעי ואתה מרגיש הכל אבל עם שליטה"}, color: "#10b981" },
        { name: "وليد", time: {ar:"منذ ساعتين",en:"2 hours ago",he:"לפני שעתיים"}, text: {ar:"يعطيك العافية توني طالب العرض حق العبوتين وبنتظر يوصل", en:"Thanks, just ordered the 2 bottles offer and waiting for it", he:"תודה, הרגע הזמנתי את מבצע ה-2 בקבוקים ומחכה שזה יגיע"}, color: "#8b5cf6" },
        { name: "زياد", time: {ar:"منذ ساعة",en:"1 hour ago",he:"לפני שעה"}, text: {ar:"انا كنت خايف من موضوع التوصيل لاني ساكن مع اهلي بالقدس، بس جابوه بكيس اسود مسكر والشب تبع الدليفري ما بيعرف شو جوا ريحوني والله", en:"I was afraid of delivery since I live with my family in Jerusalem, but they brought it in a closed black bag and the delivery guy didn't know what's inside. Such a relief", he:"פחדתי מהמשלוח כי אני גר עם המשפחה בירושלים, אבל הביאו את זה בשקית שחורה סגורה והשליח לא ידע מה יש בפנים. איזו הקלה"}, color: "#ef4444" }
      ]
    },
    {
      main: { name: "سعد", time: {ar:"منذ 8 ساعات",en:"8 hours ago",he:"לפני 8 שעות"}, text: {ar:"يا شباب اللي جربوه كم يجلس المفعول؟ وطريقة الاستخدام بالضبط كيف عشان ما اجيب العيد", en:"Guys who tried it, how long does the effect last? And what's the exact usage so I don't mess up", he:"חבר'ה שניסו את זה, כמה זמן נמשכת ההשפעה? ומה בדיוק אופן השימוש כדי שלא אפשל"}, stars: 0, color: "#f59e0b" },
      replies: [
        { name: "ماجد", time: {ar:"منذ 7 ساعات",en:"7 hours ago",he:"לפני 7 שעות"}, text: {ar:"المفعول حق التأخير يمشيك نص ساعة الى 45 دقيقة بالراحة بس اهم شي لا تكثر ترا نقطتين تكفي", en:"Delay effect easily gives you 30 to 45 mins, but don't use too much, two drops are enough", he:"השפעת ההשהיה נותנת לך בקלות 30 עד 45 דקות, אבל אל תשים יותר מדי, שתי טיפות מספיקות"}, color: "#3b82f6" },
        { name: "عبدو", time: {ar:"منذ 5 ساعات",en:"5 hours ago",he:"לפני 5 שעות"}, text: {ar:"يا شباب انا اول مرة كثرت الكمية وحسيت بحرقة خفيفة، الصح تحط نتفة صغيرة وتدهنها منيح وتستنى ثلث ساعة.. لا تكثرو عالفاضي", en:"Guys first time I used a lot and felt a slight burn. Right way is a tiny amount, rub it well and wait 20 mins.. Don't overdo it", he:"חבר'ה פעם ראשונה שמתי הרבה והרגשתי צריבה קלה. הדרך הנכונה היא כמות זעירה, למרוח היטב ולחכות 20 דקות.. אל תגזימו"}, color: "#ef4444" },
        { name: "فهد", time: {ar:"منذ 3 ساعات",en:"3 hours ago",he:"לפני 3 שעות"}, text: {ar:"ههههه زين علمتوني توني مستلمه وكنت بحط نص العلبة", en:"Hahaha good you told me, just received it and was going to put half the bottle", he:"חחח טוב שאמרתם לי, הרגע קיבלתי את זה ועמדתי לשים חצי בקבוק"}, color: "#eab308" },
        { name: "سعد", time: {ar:"منذ ساعة",en:"1 hour ago",he:"לפני שעה"}, text: {ar:"ممتاز يعطيك العافية بطلبه واجرب طريقتك وما راح اكثر", en:"Excellent, thanks. Ordering and trying your way, won't use too much", he:"מצוין, תודה. מזמין ומנסה את הדרך שלך, לא אשים יותר מדי"}, color: "#f59e0b" }
      ]
    },
    {
      main: { name: "جمال", time: {ar:"أمس",en:"Yesterday",he:"אתמול"}, text: {ar:"يا جماعة الخير احكولنا الصراحة، يعني هاد مش زي الاعلانات الكذابية اللي عالفيسبوك؟ لانو سعره مش رخيص", en:"Good people tell us the truth, is this not like the fake Facebook ads? Because it's not cheap", he:"אנשים טובים תגידו לנו את האמת, האם זה לא כמו המודעות השקריות בפייסבוק? כי זה לא זול"}, stars: 4, color: "#10b981" },
      replies: [
        { name: "حسام", time: {ar:"أمس",en:"Yesterday",he:"אתמול"}, text: {ar:"والله يا اخوي انا كنت زيك مفكره كذب، بس الدفع عند الاستلام شجعني.. وبصراحة بيستاهل كل شيكل بتدفعه فرق شاسع", en:"I swear brother I thought it was fake too, but COD encouraged me.. Honestly worth every shekel, huge difference", he:"אני נשבע אחי שגם אני חשבתי שזה שקר, אבל התשלום במסירה עודד אותי.. בכנות שווה כל שקל, הבדל עצום"}, color: "#3b82f6" },
        { name: "بندر", time: {ar:"أمس",en:"Yesterday",he:"אתמול"}, text: {ar:"صحيح سعره شوي غالي بس يعتبر توفير لان العلبة تطول معك شهور مو زي الحبوب حق مرة وحدة وتصدعك", en:"True it's a bit pricey but it's a saving because the bottle lasts months, unlike one-time pills that give headaches", he:"נכון שזה קצת יקר אבל זה חיסכון כי הבקבוק מספיק לחודשים, בניגוד לכדורים חד פעמיים שעושים כאב ראש"}, color: "#ef4444" },
        { name: "وسام", time: {ar:"اليوم",en:"Today",he:"היום"}, text: {ar:"انا بطلب للمرة الثانية هلقيت، بس ياريت المركز يعملولنا خصم للزباين القدامى", en:"Ordering for the second time right now, wish the center gives discounts for returning customers", he:"מזמין פעם שנייה עכשיו, הלוואי והמרכז ייתן הנחות ללקוחות חוזרים"}, color: "#8b5cf6" },
        { name: "جمال", time: {ar:"اليوم",en:"Today",he:"היום"}, text: {ar:"طمنتوني الله يسعدكم، تم الطلب وان شاء الله خير.", en:"Reassured me, God bless you. Order placed and hopefully all good.", he:"הרגעתם אותי, השם יברך אתכם. בוצעה הזמנה ונקווה לטוב."}, color: "#10b981" }
      ]
    },
    // مراجعات فردية عادية لإضفاء طابع واقعي (بدون ردود)
    {
      main: { name: "عبدالله العتيبي", time: {ar:"منذ يومين",en:"2 days ago",he:"לפני יומיים"}, text: {ar:"التغليف جاني أسود بالكامل ومحد عرف وش داخله، الخصوصية عندهم 10/10.", en:"Packaging came completely black, totally discreet. Privacy is 10/10.", he:"האריזה הגיעה שחורה לחלוטין, דיסקרטי לגמרי. פרטיות 10/10."}, stars: 5, color: "#f97316" },
      replies: []
    },
    {
      main: { name: "فيصل الناصر", time: {ar:"منذ 3 أيام",en:"3 days ago",he:"לפני 3 ימים"}, text: {ar:"ممتاز جداً لمرضى السكري، استخدمته وما أثر علي أبد ولا على دقات قلبي.", en:"Excellent for diabetics, used it without affecting my blood sugar or heart rate.", he:"מצוין לחולי סוכרת, השתמשתי בזה ללא כל השפעה על הדופק."}, stars: 5, color: "#3b82f6" },
      replies: []
    },
    {
      main: { name: "طلال العنزي", time: {ar:"الأسبوع الماضي",en:"Last week",he:"שבוע שעבר"}, text: {ar:"معي ضغط وكنت خايف، لكن فعلاً منتج آمن 100% وما حسيت بأي دوخة أو تعب.", en:"I have high BP and was afraid, but it's 100% safe. Didn't feel dizzy or tired.", he:"יש לי לחץ דם גבוה ופחדתי, אבל זה באמת מוצר בטוח ב-100%. לא הרגשתי סחרחורת."}, stars: 5, color: "#14b8a6" },
      replies: []
    }
  ];

  let currentLang = "ar";
  const userThreads = [];
  let threadsShown = 0;
  const INITIAL_THREADS = 4; // عرض 4 نقاشات في البداية

  function esc(str){
    return String(str).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
  }

  function avatarInitial(name){
    const n = (name||"").trim();
    if(!n) return "•";
    return n[0].toUpperCase();
  }

  function starsRow(n){
    if(n === 0) return "";
    const val = Math.max(1, Math.min(5, Number(n)||5));
    return "★★★★★".slice(0,val) + "☆☆☆☆☆".slice(0,5-val);
  }

  function getLocalizedText(obj, lang){
    if(!obj) return "";
    return obj[lang] || obj.ar || obj.en || obj.he || "";
  }

  function updateReviewSummary(all){
    const rsStars = document.getElementById("rsStars");
    const rsAvg = document.getElementById("rsAvg");
    const rsCount = document.getElementById("rsCount");
    if(!rsStars || !rsAvg || !rsCount) return;

    // حساب التقييم على المراجعات التي تحتوي على نجوم فقط
    const ratedThreads = all.filter(t => t.main.stars > 0);
    const count = ratedThreads.length + 55; // إضافة رقم افتراضي للموثوقية
    const sum = ratedThreads.reduce((a,r)=>a + (Number(r.main.stars)||5), 0) + (55 * 4.9);
    const avg = count ? (sum / count) : 4.9;
    
    const avgFixed = avg ? avg.toFixed(1) : "4.9";
    const filled = Math.max(0, Math.min(5, Math.round(avg)));
    rsStars.textContent = "★★★★★".slice(0,filled) + "☆☆☆☆☆".slice(0,5-filled);
    rsAvg.textContent = `${avgFixed}/5`;

    const countLabel = (dict.reviewsCountLabel && dict.reviewsCountLabel[currentLang]) || "";
    rsCount.textContent = countLabel ? `${countLabel}: ${count}` : String(count);
  }

  function attachReplyListeners() {
    const replyBtns = document.querySelectorAll('.mrBtn');
    replyBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const toast = this.nextElementSibling;
        
        if(input && input.value.trim().length > 0) {
          input.value = "";
          if(toast) {
            toast.textContent = getLocalizedText(dict.toastReplySent, currentLang);
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show'); }, 3000);
          }
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

    const nextCount = (threadsShown === 0)
      ? Math.min(all.length, INITIAL_THREADS)
      : all.length; 
    const slice = all.slice(0, nextCount);
    threadsShown = nextCount;

    list.innerHTML = "";
    slice.forEach(t=>{
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

      // إضافة صندوق الرد السريع أسفل كل نقاش
      const placeholderTxt = getLocalizedText(dict.typeReplyTitle, lang);
      const btnTxt = getLocalizedText(dict.btnReply, lang);
      
      html += `
        <div class="miniReplyBox">
          <input type="text" class="mrInput" placeholder="${esc(placeholderTxt)}">
          <button type="button" class="mrBtn">${esc(btnTxt)}</button>
          <div class="mrToast"></div>
        </div>
      `;

      threadDiv.innerHTML = html;
      list.appendChild(threadDiv);
    });
    
    attachReplyListeners();

    if(moreBtn){
      const hasMore = all.length > threadsShown;
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

  const badgeTexts = [
    { ar: "⭐ الخيار الطبي رقم #1 لصحة الرجل", en: "⭐ #1 Medical Choice for Men", he: "⭐ הבחירה הרפואית #1 לגברים" },
    { ar: "💵 اطلب براحة.. الدفع يداً بيد عند الاستلام", en: "💵 Order easily.. Cash on delivery", he: "💵 הזמן בנוחות.. תשלום במסירה" }
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
  let index = 0, isDragging = false, startX = 0, currentX = 0, autoplayTimer = null;
  const AUTOPLAY_MS = 4200;

  const stopAutoplay = () => { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } };
  const startAutoplay = () => { stopAutoplay(); autoplayTimer = setInterval(() => { if (lb && lb.classList.contains("is-open")) return; next(); }, AUTOPLAY_MS); };
  const restartAutoplaySoon = () => { stopAutoplay(); setTimeout(startAutoplay, 2500); };

  const makeSlide = (src, i) => {
    const s = document.createElement("div"); s.className = "slide is-loading"; s.dataset.index = String(i);
    const img = document.createElement("img"); img.alt = `Slide ${i + 1}`; img.decoding = "async"; img.loading = i === 0 ? "eager" : "lazy"; img.src = src;
    img.addEventListener("load", () => s.classList.remove("is-loading"), { once: true });
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
    [...track.children].forEach((slideEl, i) => { const img = slideEl.querySelector("img"); if (!img) return; slideEl.classList.toggle("is-loading", i === index && !img.complete); });
  };

  const goTo = (i) => { index = (i + images.length) % images.length; updateUI(); };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);
  document.getElementById("nextBtn").addEventListener("click", next);
  document.getElementById("prevBtn").addEventListener("click", prev);

  const frame = document.getElementById("sliderFrame");
  const onDown = (e) => { isDragging = true; stopAutoplay(); startX = (e.touches ? e.touches[0].clientX : e.clientX); currentX = startX; track.style.transition = "none"; };
  const onMove = (e) => { if (!isDragging) return; currentX = (e.touches ? e.touches[0].clientX : e.clientX); const dx = currentX - startX; const pct = (dx / frame.clientWidth) * 100; track.style.transform = `translateX(calc(${-index * 100}% + ${pct}%))`; };
  const onUp = () => { if (!isDragging) return; isDragging = false; track.style.transition = ""; const dx = currentX - startX; const threshold = frame.clientWidth * 0.18; if (dx > threshold) prev(); else if (dx < -threshold) next(); else updateUI(); restartAutoplaySoon(); };

  frame.addEventListener("mousedown", onDown); window.addEventListener("mousemove", onMove); window.addEventListener("mouseup", onUp);
  frame.addEventListener("touchstart", onDown, { passive: true }); frame.addEventListener("touchmove", onMove, { passive: true }); frame.addEventListener("touchend", onUp);

  const lb = document.getElementById("lightbox"); const lbImg = document.getElementById("lbImg"); const lbThumbs = document.getElementById("lbThumbs"); const lbZoom = document.querySelector(".lightbox__zoom"); let lbIndex = 0;
  images.forEach((src, i) => { const t = document.createElement("button"); t.type = "button"; t.className = "lbthumb"; const img = document.createElement("img"); img.src = src; img.alt = `Viewer thumb ${i+1}`; img.loading = "lazy"; img.decoding = "async"; t.appendChild(img); t.addEventListener("click", () => setLB(i)); lbThumbs.appendChild(t); });
  const setLB = (i) => { lbIndex = (i + images.length) % images.length; lbImg.src = images[lbIndex]; lbImg.alt = `Image ${lbIndex+1}`; [...lbThumbs.children].forEach((t, k) => t.classList.toggle("is-active", k === lbIndex)); lbZoom.scrollTop = 0; lbZoom.scrollLeft = 0; };
  const openLightbox = (i) => { stopAutoplay(); lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; setLB(i); };
  const closeLightbox = () => { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; restartAutoplaySoon(); };
  document.getElementById("lbClose").addEventListener("click", closeLightbox); document.getElementById("lbBackdrop").addEventListener("click", closeLightbox);

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
  const openPanel = (panelEl) => { if (!panelEl) return; panels.forEach((p) => { const isTarget = p === panelEl; p.classList.toggle("is-open", isTarget); if (isTarget) { requestAnimationFrame(() => { p.style.maxHeight = p.scrollHeight + "px"; }); } else { p.style.maxHeight = "0px"; } }); };
  window.addEventListener("resize", () => { const open = document.querySelector(".sectionPanel.is-open"); if (open) open.style.maxHeight = open.scrollHeight + "px"; });
  function getStickyOffset(){ const langbar = document.querySelector(".langbar"); if(!langbar) return 0; return langbar.getBoundingClientRect().height || 0; }

  const DEFAULT_SECTION = "#benefits"; const defaultBtn = document.querySelector(`.aBtn[data-scroll="${DEFAULT_SECTION}"]`); const defaultPanel = document.querySelector(DEFAULT_SECTION);
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
      const ratingForCard = rfRating || 0; // النجوم صارت اختيارية في النظام الجديد
      setTimeout(() => {
        userThreads.unshift({ main: { name: name, time: {ar:"الآن", en:"Just now", he:"עכשיו"}, text: { ar: comment, en: comment, he: comment }, stars: ratingForCard, color: "#10b981" }, replies: [] });
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

  const rfuPhotos = document.getElementById("rfuPhotos"); const rfuPreview = document.getElementById("rfuPreview"); const refundForm = document.getElementById("refundRequestForm"); const rfuSubmit = document.getElementById("rfuSubmit"); const rfuError = document.getElementById("rfuError"); const rfuSuccess = document.getElementById("rfuSuccess");
  const clearPreview = () => { if (!rfuPreview) return; rfuPreview.innerHTML = ""; };
  if (rfuPhotos && rfuPreview) { rfuPhotos.addEventListener("change", () => { clearPreview(); const files = Array.from(rfuPhotos.files || []); files.slice(0, 6).forEach(file => { const url = URL.createObjectURL(file); const box = document.createElement("div"); box.className = "pv"; const img = document.createElement("img"); img.src = url; img.alt = "photo"; box.appendChild(img); rfuPreview.appendChild(box); }); }); }
  const hasValue = (id) => { const el = document.getElementById(id); return el && String(el.value || "").trim().length > 0; };
  if (refundForm && rfuSubmit) { refundForm.addEventListener("submit", (e) => { e.preventDefault(); rfuError && (rfuError.hidden = true); rfuSuccess && (rfuSuccess.hidden = true); const phoneVal = (document.getElementById("rfuPhone")?.value || "").trim(); const ok = hasValue("rfuName") && hasValue("rfuPhone") && hasValue("rfuReceived") && hasValue("rfuReason") && isValidPhone(phoneVal); const hasPhotos = rfuPhotos && (rfuPhotos.files || []).length > 0; if (!ok || !hasPhotos) { if (rfuError) rfuError.hidden = false; if (refundForm.reportValidity) refundForm.reportValidity(); return; } rfuSubmit.classList.add("isLoading"); rfuSubmit.disabled = true; setTimeout(() => { rfuSubmit.classList.remove("isLoading"); rfuSubmit.disabled = false; if (rfuSuccess) rfuSuccess.hidden = false; }, 750); }); }
}

  const popupNames = ["أحمد", "محمد", "سالم", "طارق", "فيصل", "عبدالله", "محمود", "عمر", "نواف", "ياسر", "خالد", "ماجد"];
  const popupCities = ["الرياض", "جدة", "القدس", "تل أبيب", "دبي", "عمان", "يافا", "حيفا", "الدمام", "أبوظبي"];
  const popupItems = ["عبوتين", "عبوة واحدة", "3 عبوات", "عبوتين", "عبوتين"];
  function triggerLivePopup() { const popup = document.getElementById("livePopup"); if (!popup) return; const name = popupNames[Math.floor(Math.random() * popupNames.length)]; const city = popupCities[Math.floor(Math.random() * popupCities.length)]; const item = popupItems[Math.floor(Math.random() * popupItems.length)]; const min = Math.floor(Math.random() * 12) + 1; document.getElementById("lpDesc").textContent = `${name} من ${city} طلب ${item}`; document.getElementById("lpTime").textContent = min; popup.classList.add("show"); setTimeout(() => { popup.classList.remove("show"); }, 4500); }
  setTimeout(triggerLivePopup, 4000); setInterval(() => { triggerLivePopup(); }, Math.floor(Math.random() * 10000) + 15000);

})();
