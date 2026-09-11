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

  const dict = {
    certifiedBadge: { ar: "✔️ مركز طبي معتمد", en: "✔️ Certified Medical Center", he: "✔️ מרכז רפואי מוסמך" },
    clinicName: { ar: "🏥 مركز الارتقاء الطبي", en: "🏥 Medical Elevation Center", he: "🏥 מרכז העלייה הרפואי" },
    clinicSub: { ar: "صرح طبي رائد.. وجهتك الآمنة لاستعادة صحتك وثقتك", en: "A leading medical institution.. Your safe destination", he: "מוסד רפואי מוביל.. היעד הבטוח שלך" },
    clinicLocation: { ar: "📍 موقعنا: سلطنة عمان - مسقط، شارع السلطان قابوس", en: "📍 Location: Oman - Muscat, Sultan Qaboos St.", he: "📍 מיקום: עומאן - מוסקט, רחוב סולטאן קאבוס" },
    topBadgeText: { ar: "⭐ الخيار الطبي رقم #1 لصحة الرجل", en: "⭐ #1 Medical Choice for Men's Health", he: "⭐ הבחירה הרפואית #1 לבריאות הגבר" },
    stickyOrderBtn: { ar: "اطلب الآن والدفع عند الاستلام", en: "Order now, Pay on delivery", he: "הזמן עכשיו, תשלום במסירה" },
    title: { ar: "استعد قوتك وثقتك المطلقة في 15 دقيقة فقط!", en: "Regain your strength and confidence in just 15 minutes!", he: "החזר לעצמך את הכוח והביטחון תוך 15 דקות בלבד!" },
    subtitleLine1: { ar: "وداعاً للارتخاء واللقاء القصير مع تركيبة 'رايز' الطبية. أداء فوري، سيطرة تامة، وأمان تام بدون أي أعراض جانبية.", en: "Say goodbye to weakness with Rise medical formula. Instant performance, full control, and completely safe without side effects.", he: "היפרד מחולשה עם נוסחת 'רייז'. ביצועים מיידיים, שליטה מלאה ובטוח לחלוטין ללא תופעות לוואי." },
    trustIconsHtml: {
      ar: `<div class="hero-trust-badges"><span class="htb-item">⚡ مفعول فوري</span><span class="htb-item">🛡️ آمن 100%</span><span class="htb-item">🤐 خصوصية تامة</span></div>`,
      en: `<div class="hero-trust-badges"><span class="htb-item">⚡ Instant Effect</span><span class="htb-item">🛡️ 100% Safe</span><span class="htb-item">🤐 Total Privacy</span></div>`,
      he: `<div class="hero-trust-badges"><span class="htb-item">⚡ השפעה מיידית</span><span class="htb-item">🛡️ 100% בטוח</span><span class="htb-item">🤐 פרטיות מוחלטת</span></div>`
    },
    scarcityHtml: {
      ar: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 إقبال شديد: تم بيع <strong>87%</strong> من الكمية المخصصة للعرض الحالي</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`,
      en: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 High Demand: <strong>87%</strong> of stock sold</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`,
      he: `<div class="ms-header"><span class="ms-pulse"></span><span class="ms-text">🔥 ביקוש גבוה: <strong>87%</strong> מהמלאי נמכר</span></div><div class="ms-bar-container"><div class="ms-bar-fill" style="width:87%"></div></div>`
    },
    benefitsHtml: { 
      ar: `<ul class='bulletList'>
            <li>⚡ <strong>أداء فوري وصلابة صخرية:</strong> يقضي على مشكلة الضعف والارتخاء بشكل فوري. يضمن لك قوة وصلابة خلال 15 دقيقة فقط، ويحافظ عليها طوال مدة اللقاء.</li>
            <li>⏱️ <strong>تأخير مضاعف وسيطرة تامة:</strong> يمنحك السيطرة الكاملة على وقتك. يطيل مدة اللقاء بشكل كبير جداً، وينهي التوتر والإحراج المرتبط بسرعة الانتهاء نهائياً.</li>
            <li>🔥 <strong>رضا كامل بدون تخدير (لن تفقد الإحساس):</strong> "رايز" يعمل بتقنية ذكية تقلل الحساسية المفرطة فقط، لتستمتع بالإحساس الطبيعي 100% دون أي شعور بالخدر المزعج.</li>
            <li>🛡️ <strong>البديل الآمن (لا يسبب الصداع):</strong> كونه علاجاً موضعياً خارجياً، فهو لا يدخل في مجرى الدم الكلي. بدون صداع، بدون احمرار، آمن تماماً لمرضى الضغط والقلب والسكري.</li>
            <li>💪 <strong>جاهزية سريعة وثقة مطلقة:</strong> لا يحتاج لخطوات معقدة أو انتظار طويل. استخدمه، دلكه بلطف، واستعد ثقتك المطلقة بنفسك وبأدائك.</li>
          </ul>`, 
      en: `<ul class='bulletList'>
            <li>⚡ <strong>Instant Performance:</strong> Eliminates weakness instantly. Gives you strength in just 15 minutes, lasting the entire session.</li>
            <li>⏱️ <strong>Double Delay & Full Control:</strong> Extends time significantly, ending anxiety and premature finishing completely.</li>
            <li>🔥 <strong>Full Satisfaction (No Numbness):</strong> Works smartly to reduce hypersensitivity only, keeping 100% natural sensation.</li>
            <li>🛡️ <strong>Safe Alternative:</strong> Topical treatment that doesn't enter the bloodstream. No headache, totally safe for heart & diabetes patients.</li>
            <li>💪 <strong>Fast Readiness:</strong> Easy to use. Apply, massage gently, and regain your ultimate confidence.</li>
          </ul>`, 
      he: `<ul class='bulletList'>
            <li>⚡ <strong>ביצועים מיידיים:</strong> מבטל חולשה באופן מיידי. מעניק כוח תוך 15 דקות בלבד, המחזיק מעמד לאורך כל המפגש.</li>
            <li>⏱️ <strong>עיכוב כפול ושליטה מלאה:</strong> מאריך את הזמן באופן משמעותי, מסיים לחלוטין חרדות וסיום מוקדם.</li>
            <li>🔥 <strong>סיפוק מלא (ללא חוסר תחושה):</strong> פועל בחוכמה להפחתת רגישות יתר בלבד, שומר על תחושה טבעית ב-100%.</li>
            <li>🛡️ <strong>חלופה בטוחה:</strong> טיפול מקומי שלא חודר לזרם הדם. ללא כאבי ראש, בטוח לחלוטין לחולי לב וסוכרת.</li>
            <li>💪 <strong>מוכנות מהירה:</strong> קל לשימוש. מרחו, עסו בעדינות והחזירו לעצמכם את הביטחון המוחלט.</li>
          </ul>` 
    },
    goldGuaranteeHtml: {
      ar: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">سياسة الضمان الذهبي والاسترداد الفوري</h4>
           <p class="gold-desc" style="margin-bottom:12px;">نحن نتحمل عنك كامل المخاطرة. نقدم لك أقوى ضمان طبي: "النتيجة الفورية أو استرداد أموالك بالكامل".</p>
           <ul class="bulletList" style="text-align:right; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>اختبار الـ 15 دقيقة:</strong> إذا لم تحصل على قوة وتأخير ملحوظ خلال 15 دقيقة، لك الحق في استرداد كل درهم.</li>
             <li>🤐 <strong>بدون أسئلة محرجة:</strong> يتم التعامل مع طلب الاسترداد بمهنية وسرية تامة دون الحاجة لتبريرات معقدة.</li>
             <li>💳 <strong>تحويل سريع:</strong> يتم تحويل المبلغ كاملاً إلى حسابك خلال 24 إلى 48 ساعة عمل كحد أقصى.</li>
             <li>📜 <strong>شروط عادلة:</strong> تقديم الطلب خلال 72 ساعة، الاستخدام للتجربة فقط، وإرفاق صورة العبوة الأصلية.</li>
           </ul>`,
      en: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">Golden Guarantee & Refund Policy</h4>
           <p class="gold-desc" style="margin-bottom:12px;">We take all the risk. "Instant results or full money back."</p>
           <ul class="bulletList" style="text-align:left; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>15-Min Test:</strong> Instant results or every dirham back.</li>
             <li>🤐 <strong>No Questions:</strong> Full privacy & professionalism.</li>
             <li>💳 <strong>Fast Transfer:</strong> Within 24-48 working hours.</li>
             <li>📜 <strong>Fair Terms:</strong> Valid within 72 hours, original package photo required.</li>
           </ul>`,
      he: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">אחריות זהב ומדיניות החזרים</h4>
           <p class="gold-desc" style="margin-bottom:12px;">אנחנו לוקחים את כל הסיכון. "תוצאות מיידיות או החזר מלא."</p>
           <ul class="bulletList" style="text-align:right; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>מבחן 15 הדקות:</strong> תוצאות מיידיות או כל דירהם בחזרה.</li>
             <li>🤐 <strong>בלי שאלות:</strong> פרטיות מלאה ומקצועיות.</li>
             <li>💳 <strong>העברה מהירה:</strong> תוך 24-48 שעות עבודה.</li>
             <li>📜 <strong>תנאים הוגנים:</strong> תקף תוך 72 שעות, נדרשת תמונת אריזה מקורית.</li>
           </ul>`
    },
    aboutHtml: {
      ar: `<div class="sectionRich">
            <p class="richIntro">نحن في <strong>"مركز الارتقاء الطبي"</strong> لسنا مجرد نقطة بيع، بل صرح طبي رائد وموثوق بسلطنة عمان. كرسنا جهودنا لتقديم حلول صحية مبتكرة تركز حصرياً على "صحة الرجل"، وتوفير علاجات جذرية وآمنة لمشاكل الضعف والارتخاء.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text"><strong>فلسفتنا الطبية:</strong> توفير بدائل آمنة وموضعية تغنيك تماماً عن الحبوب الكيميائية التي تؤثر سلباً على نبضات القلب والضغط.</div></div>
              <div class="about-item"><div class="about-icon">🛡️</div><div class="about-text"><strong>جودة لا تُضاهى:</strong> تركيبات مفحوصة وصارمة، سريعة الامتصاص، تمنحك مفعولاً خلال 15 دقيقة مع الحفاظ على الإحساس 100%.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text"><strong>الخصوصية التامة:</strong> نظام صارم لحماية البيانات. تسليم يداً بيد في "تغليف أسود مبهم بالكامل" لا يدل على محتواه.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>دعم طبي متواصل:</strong> فريقنا متواجد للرد على استفساراتكم بسرية.<br>التواصل المباشر/واتساب: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div>
            </div>
           </div>`,
      en: `<div class="sectionRich">
            <p class="richIntro">At <strong>Medical Elevation Center</strong>, we are a leading and trusted medical institution in Oman dedicated exclusively to men's health.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text"><strong>Medical Philosophy:</strong> Providing safe topical alternatives instead of chemical pills.</div></div>
              <div class="about-item"><div class="about-icon">🛡️</div><div class="about-text"><strong>Unmatched Quality:</strong> Strict formulas, fast absorption, results in 15 mins.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text"><strong>Total Privacy:</strong> Strict data protection. Hand delivery in opaque packaging.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>Medical Support:</strong> Direct contact/WhatsApp: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div>
            </div>
           </div>`,
      he: `<div class="sectionRich">
            <p class="richIntro">ב-<strong>מרכז העלייה הרפואי</strong>, אנו מוסד רפואי מוביל ואמין בעומאן, המוקדש בלעדית לבריאות הגבר.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text"><strong>פילוסופיה רפואית:</strong> אספקת חלופות מקומיות בטוחות במקום כדורים כימיים.</div></div>
              <div class="about-item"><div class="about-icon">🛡️</div><div class="about-text"><strong>איכות ללא תחרות:</strong> נוסחאות קפדניות, ספיגה מהירה, תוצאות ב-15 דקות.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text"><strong>פרטיות מוחלטת:</strong> הגנת נתונים קפדנית. מסירה ידנית באריזה אטומה.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>תמיכה רפואית:</strong> קשר ישיר/וואטסאפ: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div>
            </div>
           </div>`
    },
    footerInfo: {
      ar: `<div class="fc-welcome">نحن هنا من أجلك، لتقديم رعاية صحية تليق بك وبثقتك.</div><p>📍 <strong>المقر الرئيسي:</strong> سلطنة عمان - مسقط، شارع السلطان قابوس.</p><p>📞 <strong>للتواصل والواتساب:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p><p>🕒 <strong>مواعيد العمل (بتوقيت مسقط):</strong> السبت إلى الخميس: 9:00 صباحاً - 9:00 مساءً (الجمعة عطلة).</p>`,
      en: `<div class="fc-welcome">We are here for you, providing health care worthy of your trust.</div><p>📍 <strong>Headquarters:</strong> Oman - Muscat, Sultan Qaboos St.</p><p>📞 <strong>WhatsApp:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p><p>🕒 <strong>Working Hours (Muscat Time):</strong> Sat-Thu: 9:00 AM - 9:00 PM (Friday closed).</p>`,
      he: `<div class="fc-welcome">אנחנו כאן בשבילך, מספקים שירותי בריאות הראויים לאמון שלך.</div><p>📍 <strong>מטה:</strong> עומאן - מוסקט, רחוב סולטאן קאבוס.</p><p>📞 <strong>וואטסאפ:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p><p>🕒 <strong>שעות פעילות (שעון מוסקט):</strong> שבת-חמישי: 9:00 - 21:00 (שישי סגור).</p>`
    },
    faqHtml: {
      ar: `<div class='faq-list'>
            <div class='faq-item is-open'><button class='faq-q'>هل للمنتج أي أعراض جانبية (مثل الصداع أو خفقان القلب)؟</button><div class='faq-a'><p>لا، المنتج موضعي وآمن 100%. لا يدخل في مجرى الدم ولا يسبب أي صداع، احمرار للوجه، أو تسارع في نبضات القلب نهائياً.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل يمكن استخدامه لمرضى السكري والضغط والقلب؟</button><div class='faq-a'><p>نعم بكل تأكيد. نظراً لأنه علاج موضعي خارجي، فهو لا يتعارض مع أدوية السكري أو الضغط، ويعتبر البديل الطبي الأكثر أماناً.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل يسبب المنتج أي تخدير أو فقدان للإحساس؟</button><div class='faq-a'><p>إطلاقاً. على عكس المنتجات التقليدية، تركيبتنا الطبية تقلل الحساسية المفرطة مع الحفاظ على المتعة والإحساس الطبيعي 100%.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>متى يبدأ مفعول المنتج وكم يدوم؟</button><div class='faq-a'><p>يبدأ المفعول الفعلي خلال 15 إلى 20 دقيقة من الاستخدام، ويستمر التأثير لساعات لضمان تجربة مرضية بالكامل.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>هل التوصيل سري؟ وكيف يتم الدفع؟</button><div class='faq-a'><p>نلتزم بخصوصيتك التامة؛ يتم شحن المنتج بتغليف أسود مبهم لا يوضح محتواه. والدفع يكون براحة وأمان عند الاستلام.</p></div></div>
          </div>`,
      en: `<div class='faq-list'>
            <div class='faq-item is-open'><button class='faq-q'>Are there any side effects?</button><div class='faq-a'><p>No, the product is topical and 100% safe. No headaches or heart palpitations.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>Can it be used by diabetic/blood pressure patients?</button><div class='faq-a'><p>Absolutely. It doesn't interact with internal medications.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>Does it cause numbness?</button><div class='faq-a'><p>Not at all. It maintains 100% natural sensation.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>When does it work and for how long?</button><div class='faq-a'><p>Works in 15-20 minutes, lasts for hours.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>Is shipping discreet?</button><div class='faq-a'><p>Yes, 100% opaque packaging. Payment is cash on delivery.</p></div></div>
          </div>`,
      he: `<div class='faq-list'>
            <div class='faq-item is-open'><button class='faq-q'>האם יש תופעות לוואי?</button><div class='faq-a'><p>לא, המוצר מקומי ו-100% בטוח. ללא כאבי ראש או דפיקות לב.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>האם מתאים לחולי סוכרת/לחץ דם?</button><div class='faq-a'><p>בהחלט. זה לא מתנגש עם תרופות פנימיות.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>האם זה גורם לחוסר תחושה?</button><div class='faq-a'><p>ממש לא. שומר על 100% תחושה טבעית.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>מתי זה משפיע ולכמה זמן?</button><div class='faq-a'><p>פועל תוך 15-20 דקות, מחזיק שעות.</p></div></div>
            <div class='faq-item is-open'><button class='faq-q'>האם המשלוח דיסקרטי?</button><div class='faq-a'><p>כן, אריזה אטומה ב-100%. תשלום במעמד המסירה.</p></div></div>
          </div>`
    },
    usageHtml: { 
      ar: `<p class='richIntro'>خطوات بسيطة وسريعة للحصول على أداء جبار:</p>
           <ol class='stepList'>
             <li><div class='stepHead'>1️⃣ التحضير والنظافة</div><div class='stepBody'><p>تأكد من غسل المنطقة الحساسة وتجفيفها تماماً لضمان أقصى سرعة لامتصاص المنتج.</p></div></li>
             <li><div class='stepHead'>2️⃣ الاستخدام والتدليك</div><div class='stepBody'><p>ضع كمية بسيطة وقم بتوزيعها وتدليكها بلطف بحركات دائرية لمدة دقيقة واحدة حتى يمتصها الجلد.</p></div></li>
             <li><div class='stepHead'>3️⃣ الانطلاق</div><div class='stepBody'><p>انتظر 15 دقيقة ليبدأ المفعول الجبار. <strong>لا حاجة للغسل بعد الاستخدام</strong>.</p></div></li>
           </ol>
           <div class="usage-note">💡 <strong>ملاحظة:</strong> العبوة اقتصادية ومركزة جداً، وتكفي حتى 30 استخداماً.</div>`, 
      en: `<p class='richIntro'>Simple steps for ultimate performance:</p>
           <ol class='stepList'>
             <li><div class='stepHead'>1️⃣ Preparation</div><div class='stepBody'><p>Wash and dry the area completely.</p></div></li>
             <li><div class='stepHead'>2️⃣ Application</div><div class='stepBody'><p>Apply a small amount and massage gently for 1 minute.</p></div></li>
             <li><div class='stepHead'>3️⃣ Ready</div><div class='stepBody'><p>Wait 15 mins. No need to wash off.</p></div></li>
           </ol>
           <div class="usage-note">💡 <strong>Note:</strong> One bottle is highly concentrated and lasts up to 30 uses.</div>`, 
      he: `<p class='richIntro'>צעדים פשוטים לביצועים אולטימטיביים:</p>
           <ol class='stepList'>
             <li><div class='stepHead'>1️⃣ הכנה</div><div class='stepBody'><p>שטפו ויבשו את האזור לחלוטין.</p></div></li>
             <li><div class='stepHead'>2️⃣ יישום</div><div class='stepBody'><p>מרחו כמות קטנה ועסו בעדינות במשך דקה.</p></div></li>
             <li><div class='stepHead'>3️⃣ מוכן</div><div class='stepBody'><p>המתן 15 דקות. אין צורך לשטוף.</p></div></li>
           </ol>
           <div class="usage-note">💡 <strong>הערה:</strong> בקבוק אחד מרוכז מאוד ומספיק לעד 30 שימושים.</div>` 
    },

    btnOrder: { ar: "اطلب الآن", en: "Order Now", he: "הזמן עכשיו" },
    btnFAQ: { ar: "الأسئلة الشائعة", en: "FAQ", he: "שאלות נפוצות" },
    btnAbout: { ar: "من نحن", en: "About Us", he: "מי אנחנו" },
    secFAQTitle: { ar: "الأسئلة الشائعة", en: "FAQ", he: "שאלות נפוצות" },
    secAboutTitle: { ar: "من نحن", en: "About Us", he: "מי אנחנו" },
    btnReviews: { ar: "آراء العملاء", en: "Reviews", he: "חוות דעת" },
    btnLoadMoreReviews: { ar: "عرض المزيد من آراء العملاء", en: "Load more reviews", he: "טען עוד ביקורות" },
    reviewsCountLabel: { ar: "عدد التقييمات", en: "Ratings Count", he: "מספר דירוגים" },
    reviewsAvgLabel: { ar: "متوسط التقييم", en: "Average Rating", he: "דירוג ממוצע" },
    langApplying: { ar: "جارٍ تطبيق اللغة…", en: "Applying language...", he: "מיישם שפה..." },
    btnGuaranteeRefund: { ar: "الضمان والاسترداد", en: "Guarantee & Refund", he: "אחריות והחזר" },
    btnUsage: { ar: "طريقة الاستخدام", en: "How to Use", he: "אופן השימוש" },
    
    // تم التعديل إلى مميزات المنتج
    btnBenefits: { ar: "مميزات المنتج", en: "Product Features", he: "מאפייני המוצר" },
    secBenefitsTitle: { ar: "مميزات المنتج", en: "Product Features", he: "מאפייני המוצר" },

    phName: { ar: "الاسم", en: "Name", he: "שם" },
    phComment: { ar: "اكتب تعليقك...", en: "Write your comment...", he: "כתוב תגובה..." },
    btnSendComment: { ar: "إرسال", en: "Send", he: "שלח" },
    rateBeforeComment: { ar: "قيّم المنتج أولاً", en: "Rate the product first", he: "דרג את המוצר קודם" },
    reviewNeedRating: { ar: "يرجى اختيار عدد النجوم قبل إرسال التعليق.", en: "Please select a star rating.", he: "אנא בחר דירוג כוכבים." },
    reviewSent: { ar: "تم إرسال تقييمك وتعليقك. شكرًا لك!", en: "Review sent. Thank you!", he: "הביקורת נשלחה. תודה!" },
    sendReview: { ar: "إرسال التعليق", en: "Submit Review", he: "שלח ביקורת" },
    secOrderTitle: { ar: "اطلب الآن", en: "Order Now", he: "הזמן עכשיו" },
    secReviewsTitle: { ar: "آراء العملاء والاستشارات الطبية", en: "Reviews & Consultations", he: "חוות דעת וייעוץ רפואי" },
    secGuaranteeTitle: { ar: "الضمان والاسترداد", en: "Guarantee & Refund", he: "אחריות והחזר" },
    secUsageTitle: { ar: "طريقة الاستخدام", en: "How to Use", he: "אופן השימוש" },
    rateThanksTitle: { ar: "تم التقييم", en: "Rated Successfully", he: "דורג בהצלחה" },
    rateThanksText: { ar: "شكرًا لك! تم استلام تقييمك.", en: "Thank you! Your rating was received.", he: "תודה! הדירוג שלך התקבל." },
    okBtn: { ar: "حسنًا", en: "OK", he: "אישור" },
    orderTrustMini: { ar: "بياناتك بأمان 🔒 • تأكيد سريع • شحن سري • دفع عند الاستلام", en: "Safe Data 🔒 • Fast Confirmation • Discreet Shipping • Cash on Delivery", he: "נתונים בטוחים 🔒 • אישור מהיר • משלוח דיסקרטי • תשלום במסירה" },
    ofNameLabel: { ar: "الاسم الكامل", en: "Full Name", he: "שם מלא" },
    ofPhoneLabel: { ar: "رقم الهاتف/واتساب", en: "Phone/WhatsApp", he: "טלפון/וואטסאפ" },
    ofCountryLabel: { ar: "الدولة", en: "Country", he: "מדינה" },
    ofCityLabel: { ar: "المدينة", en: "City", he: "עיר" },
    ofAddressLabel: { ar: "العنوان التفصيلي", en: "Detailed Address", he: "כתובת מפורטת" },
    ofNoteLabel: { ar: "ملاحظة (اختياري)", en: "Note (Optional)", he: "הערה (אופציונלי)" },
    phPhone: { ar: "رقم الهاتف/واتساب", en: "Phone/WhatsApp", he: "טלפון/וואטסאפ" },
    phCity: { ar: "المدينة", en: "City", he: "עיר" },
    phAddress: { ar: "العنوان التفصيلي", en: "Detailed Address", he: "כתובת מפורטת" },
    phNote: { ar: "ملاحظات إضافية (اختياري)", en: "Additional Notes (Optional)", he: "הערות נוספות (אופציונלי)" },
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
    phReason: { ar: "اكتب السبب باختصار...", en: "Briefly write the reason...", he: "כתוב את הסיבה בקצרה..." },
    qtyLabel: { ar: "الكمية", en: "Quantity", he: "כמות" },
    qty1: { ar: "1 عبوة", en: "1 Bottle", he: "בקבוק 1" },
    qty2: { ar: "2 عبوتان", en: "2 Bottles", he: "2 בקבוקים" },
    qty3: { ar: "3 عبوات", en: "3 Bottles", he: "3 בקבוקים" },
    totalLabel: { ar: "السعر الإجمالي", en: "Total Price", he: "מחיר כולל" },
    shippingIncluded: { ar: "شامل التوصيل", en: "Delivery Included", he: "כולל משלוח" },
    confirmOrder: { ar: "تأكيد الطلب", en: "Confirm Order", he: "אשר הזמנה" },
    orderSuccess: { ar: "تم استلام طلبك ✅ سنتواصل معك خلال دقائق.", en: "Order received ✅ We will contact you shortly.", he: "ההזמנה התקבלה ✅ ניצור קשר בקרוב." },
    refundFormTitle: { ar: "نموذج طلب الاسترداد", en: "Refund Form", he: "טופס החזר" },
    refundFormHint: { ar: "املأ البيانات التالية وسنتواصل معك خلال 24 ساعة.", en: "Fill the details and we'll contact you within 24h.", he: "מלא את הפרטים וניצור קשר תוך 24 שעות." },
    rfName: { ar: "الاسم الكامل", en: "Full Name", he: "שם מלא" },
    rfPhone: { ar: "رقم الهاتف/واتساب", en: "Phone/WhatsApp", he: "טלפון/וואטסאפ" },
    rfReceived: { ar: "تاريخ الاستلام", en: "Received Date", he: "תאריך קבלה" },
    rfReason: { ar: "سبب طلب الاسترداد", en: "Reason for Refund", he: "סיבה להחזר" },
    rfPhotos: { ar: "صور المنتج والعبوة", en: "Product & Package Photos", he: "תמונות מוצר ואריזה" },
    choosePhotos: { ar: "اختيار الصور", en: "Choose Photos", he: "בחר תמונות" },
    sendRefund: { ar: "إرسال طلب الاسترداد", en: "Submit Refund Request", he: "שלח בקשת החזר" },
    refundNeedFields: { ar: "يرجى تعبئة الحقول المطلوبة وإرفاق صور.", en: "Please fill required fields and attach photos.", he: "אנא מלא את השדות הנדרשים וצרף תמונות." },
    refundSuccess: { ar: "تم استلام طلب الاسترداد ✅", en: "Refund request received ✅", he: "בקשת החזר התקבלה ✅" },
    offersTitle: { ar: "عروض اليوم", en: "Today's Offers", he: "מבצעי היום" },
    offerEndsIn: { ar: "ينتهي العرض خلال", en: "Offer ends in", he: "המבצע מסתיים בעוד" },
    offerExpired: { ar: "انتهى العرض", en: "Offer Expired", he: "המבצע פג" },
    offerPack1: { ar: "عبوة واحدة", en: "1 Bottle", he: "בקבוק אחד" },
    offerPack2: { ar: "عبوتين", en: "2 Bottles", he: "2 בקבוקים" },
    offerPack3: { ar: "3 عبوات", en: "3 Bottles", he: "3 בקבוקים" },
    buyNow: { ar: "شراء", en: "Buy Now", he: "קנה עכשיו" },
    popularBadge: { ar: "الأكثر طلبًا", en: "Most Popular", he: "הנפוץ ביותר" },
    orderSuccessTitle: { ar: "تم إرسال طلبك بنجاح!", en: "Order Submitted Successfully!", he: "ההזמנה נשלחה בהצלחה!" },
    orderSuccessDesc: { ar: "شكرًا لثقتك بنا. طلبك الآن قيد المعالجة وسيقوم فريقنا الطبي بالتواصل معك هاتفياً خلال دقائق لتأكيد الشحن.", en: "Thank you. Your order is processing and our medical team will call you shortly.", he: "תודה. ההזמנה שלך בטיפול והצוות הרפואי שלנו יתקשר אליך בקרוב." },
    successFeature1: { ar: "🔒 خصوصية تامة", en: "🔒 Total Privacy", he: "🔒 פרטיות מוחלטת" },
    successFeature2: { ar: "🚚 شحن سريع وسري", en: "🚚 Fast & Discreet Shipping", he: "🚚 משלוח מהיר ודיסקרטי" },
    btnUnderstand: { ar: "حسنًا، فهمت", en: "Understood", he: "הבנתי" },
    waMessage: { ar: "مرحباً، أريد الاستفسار عن منتج رايز", en: "Hello, I want to inquire about Rise", he: "שלום, אני רוצה לברר על רייז" },
    replyPlaceholder: { ar: "اكتب ردك...", en: "Write your reply...", he: "כתוב את תגובתך..." },
    replyNamePlaceholder: { ar: "الاسم", en: "Name", he: "שם" },
    replySubmit: { ar: "إرسال", en: "Send", he: "שלח" },
    btnMoreReplies: { ar: "عرض المزيد من الردود", en: "Show more replies", he: "הצג תגובות נוספות" },
    mapModalTitle: { ar: "📍 موقع مركز الارتقاء الطبي (مسقط)", en: "📍 Medical Elevation Center Location (Muscat)", he: "📍 מיקום מרכז העלייה הרפואי (מוסקט)" },
    mapPinBadge: { ar: "📍 مركز الارتقاء الطبي (مسقط - سلطنة عمان)", en: "📍 Medical Elevation Center (Muscat)", he: "📍 מרכז העלייה הרפואי (מוסקט)" }
  };

  const docs = {
    tariq: { name: { ar: "د. طارق عبدالرحمن", en: "Dr. Tariq Abdulrahman", he: "ד״ר טארק עבדולרחמן" }, img: "assets/slider/طارق.jpeg", status: "online" },
    rami: { name: { ar: "د. رامي خليل", en: "Dr. Rami Khalil", he: "ד״ר ראמי חליל" }, img: "assets/slider/رامي.jpeg", status: "busy" },
    mahmoud: { name: { ar: "د. محمود صبري", en: "Dr. Mahmoud Sabri", he: "ד״ר מחמוד סברי" }, img: "assets/slider/محمود.jpeg", status: "online" },
    sara: { name: { ar: "د. سارة محمد", en: "Dr. Sara Mohammed", he: "ד״ר שרה מוחמד" }, img: "assets/slider/سارة.jpeg", status: "online" }
  };

  const seedReviews = [
    { 
      name: { ar: "عيسى محمد", en: "Issa Mohammed", he: "עיסא מוחמד" }, 
      text: { ar: "هل يتعارض المنتج مع أدوية الضغط؟ أنا استخدم حبوب ضغط يومياً وخايف يسبب لي مضاعفات.", en: "Does the product interact with blood pressure medications? I take BP pills daily and fear complications.", he: "האם המוצר מתנגש עם תרופות ללחץ דם? אני נוטל כדורים ללחץ דם מדי יום וחושש מסיבוכים." }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "راشد سالم", en: "Rashid Salem", he: "ראשיד סאלם" }, text: { ar: "فعلاً سؤال مهم جداً، كنت أبحث عن إجابة لنفس النقطة.", en: "Very important question indeed, I was looking for the same answer.", he: "שאלה חשובה מאוד, חיפשתי את אותה תשובה." } },
        { ...docs.tariq, text: { ar: "أهلاً بك أخي الكريم. لا تقلق أبداً، تركيبة 'رايز' صُممت كعلاج موضعي خارجي لا يدخل في مجرى الدم الكلي، لذلك هي آمنة تماماً لمرضى الضغط.", en: "Welcome. Don't worry at all, 'Rise' formula is designed as an external topical treatment that does not enter the bloodstream, so it is completely safe for BP patients.", he: "ברוך הבא. אל תדאג, נוסחת 'רייז' מיועדת כטיפול מקומי חיצוני שאינו חודר למחזור הדם, ולכן היא בטוחה לחלוטין לחולי לחץ דם." } },
        { name: { ar: "م. س", en: "M. S", he: "מ. ס" }, text: { ar: "الله يعطيك العافية دكتور، كلامك ريحني كثير لأني كنت متردد.", en: "Thank you doctor, your words relieved me a lot because I was hesitant.", he: "תודה דוקטור, המילים שלך הרגיעו אותי מאוד כי הייתי מהסס." } },
        { name: { ar: "أبو سيف", en: "Abu Saif", he: "אבו סייף" }, text: { ar: "عن تجربة يا غالي انا مريض ضغط ولافيه اي تأثير الحمدلله.", en: "From experience, I am a BP patient and there's no effect on it at all, thank God.", he: "מניסיון, אני חולה לחץ דם ואין לזה השפעה בכלל, תודה לאל." } }
      ] 
    },
    { 
      name: { ar: "أبو سيف", en: "Abu Saif", he: "אבו סייף" }, 
      text: { ar: "عندي سكري من النوع الثاني وضعف شديد بالانتصاب.. هل ينفع معي؟", en: "I have type 2 diabetes and severe erectile dysfunction.. Will it work for me?", he: "יש לי סוכרת סוג 2 ובעיות זיקפה חמורות.. האם זה יעבוד עבורי?" }, 
      stars: 4, 
      replies: [ 
        { name: { ar: "مهند العلي", en: "Muhannad Al-Ali", he: "מוהנד אל-עלי" }, text: { ar: "المنتج جداً ممتاز وتجربتي معه شخصياً كانت ممتازة.", en: "The product is excellent and my personal experience with it was great.", he: "המוצר מצוין והניסיון האישי שלי איתו היה נהדר." } },
        { ...docs.sara, text: { ar: "حياك الله. نعم فعال جداً في حالتك. مرضى السكري يعانون من ضعف التروية الدموية الطرفية، ورايز يعمل موضعياً لتنشيط التدفق الدموي فوراً.", en: "Hello. Yes, it is very effective in your case. Diabetic patients suffer from poor peripheral blood perfusion, and Rise works topically to stimulate blood flow instantly.", he: "שלום. כן, זה יעיל מאוד במקרה שלך. חולי סוכרת סובלים מזילוח דם פריפריאלי לקוי, ורייז פועל באופן מקומי להמרצת זרימת הדם באופן מיידי." } },
        { name: { ar: "سلطان العمري", en: "Sultan Al-Omari", he: "סולטאן אל-עומרי" }, text: { ar: "شكراً دكتورة على التوضيح الدقيق، طلبت عبوتين وبانتظار وصولها.", en: "Thanks doctor for the precise clarification, ordered 2 bottles and waiting.", he: "תודה דוקטור על ההבהרה המדויקת, הזמנתי 2 בקבוקים וממתין." } }
      ] 
    },
    { 
      name: { ar: "خالد عبدالرحمن", en: "Khalid Abdulrahman", he: "ח'אלד עבדולרחמן" }, 
      text: { ar: "نتيجة خرافية من أول استخدام، انصح فيه وبشدة! فعلاً غير حياتي للأفضل.", en: "Fabulous result from the first use, I highly recommend it! Truly changed my life for the better.", he: "תוצאה נהדרת מהשימוש הראשון, אני ממליץ בחום! באמת שינה את חיי לטובה." }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "بدر الحربي", en: "Badr Al-Harbi", he: "בדר אל-חרבי" }, text: { ar: "أتفق معك تماماً، النتيجة تظهر من أول مرة بشكل مذهل.", en: "I totally agree with you, the result appears from the first time amazingly.", he: "אני מסכים איתך לחלוטין, התוצאה מופיעה מהפעם הראשונה בצורה מדהימה." } },
        { ...docs.tariq, text: { ar: "نحمد الله أن النتيجة نالت رضاكم، وهذا هو الأثر الطبي المدروس تماماً لتركيبتنا.", en: "We thank God that the result met your satisfaction, this is the carefully studied medical effect of our formula.", he: "אנו מודים לאל שהתוצאה עמדה לשביעות רצונך, זוהי ההשפעה הרפואית שנלמדה בקפידה של הנוסחה שלנו." } },
        { name: { ar: "أبو فهد", en: "Abu Fahad", he: "אבו פהד" }, text: { ar: "متى يوصل اذا طلبت الان؟", en: "When will it arrive if I order now?", he: "מתי זה יגיע אם אזמין עכשיו?" } }
      ] 
    },
    { 
      name: { ar: "سالم الشمري", en: "Salem Al-Shammari", he: "סאלם אל-שמארי" }, 
      text: { ar: "سمعت إنه يخدر المنطقة تماماً لدرجة إنك ما تحس بشيء.. هل هذا صحيح؟", en: "I heard it numbs the area completely so you feel nothing.. Is this true?", he: "שמעתי שזה מרדים את האזור לחלוטין כדי שלא תרגיש כלום.. האם זה נכון?" }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "عمر", en: "Omar", he: "עומר" }, text: { ar: "اطمئن، الإحساس طبيعي 100% ولا يوجد أي تخدير مزعج.", en: "Rest assured, the sensation is 100% natural and there is no annoying numbness.", he: "היה סמוך ובטוח, התחושה טבעית ב-100% ואין חוסר תחושה מעצבן." } },
        { ...docs.mahmoud, text: { ar: "هذا اعتقاد خاطئ شائع بسبب المنتجات التجارية القديمة. رايز لا يحتوي على مخدر موضعي بل يعتمد على التنشيط الذكي للتروية دون فقدان الإحساس الطبيعي.", en: "This is a common misconception due to old commercial products. Rise does not contain local anesthetics but relies on smart stimulation without losing natural sensation.", he: "זו תפיסה שגויה נפוצה בגלל מוצרים מסחריים ישנים. רייז אינו מכיל חומרי הרדמה מקומיים אלא מסתמך על גירוי חכם מבלי לאבד את התחושה הטבעית." } }
      ] 
    },
    { 
      name: { ar: "يوسف خليل", en: "Yousef Khalil", he: "יוסף חליל" }, 
      text: { ar: "كم يدوم المفعول بالضبط؟ وهل لازم اغسله قبل اللقاء؟", en: "How long does the effect last exactly? And do I have to wash it before the session?", he: "כמה זמן בדיוק נמשכת ההשפעה? והאם אני צריך לשטוף אותו לפני המפגש?" }, 
      stars: 5, 
      replies: [ 
        { ...docs.rami, text: { ar: "المفعول الفعلي يبدأ خلال 15 دقيقة ويمتد لساعات. ولا داعي لغسله أبداً لأن الجلد يمتصه بالكامل.", en: "The actual effect starts in 15 minutes and lasts for hours. And there is no need to wash it off as it gets completely absorbed by the skin.", he: "ההשפעה האמיתית מתחילה תוך 15 דקות ונמשכת שעות. ואין צורך לשטוף אותו מכיוון שהוא נספג לחלוטין בעור." } },
        { name: { ar: "عبدالله", en: "Abdullah", he: "עבדאללה" }, text: { ar: "توضيح ممتاز ودقيق، شكراً لسرعة الرد.", en: "Excellent and accurate clarification, thanks for the fast response.", he: "הבהרה מצוינת ומדויקת, תודה על התגובה המהירה." } }
      ] 
    },
    { 
      name: { ar: "سالم المري", en: "Salem Al-Marri", he: "סאלם אל-מארי" }, 
      text: { ar: "التوصيل كان سريع جداً والمنتج فعاليته ممتازة وبدون أي تخدير، شكراً لكم من القلب.", en: "Delivery was very fast and the product's effectiveness is excellent without any numbness, thank you from the heart.", he: "המשלוח היה מהיר מאוד ויעילות המוצר מצוינת ללא כל חוסר תחושה, תודה מכל הלב." }, 
      stars: 5, 
      replies: [
        { ...docs.sara, text: { ar: "شكراً لثقتك بمركزنا، نتمنى لك دوام الصحة والعافية.", en: "Thank you for trusting our center, we wish you lasting health and wellness.", he: "תודה על האמון במרכז שלנו, אנו מאחלים לך בריאות ואיכות חיים לאורך ימים." } },
        { name: { ar: "طارق السبيعي", en: "Tariq Al-Subaie", he: "טארק אל-סובאי" }, text: { ar: "التوصيل سريع والخصوصية عندهم ممتازة جداً.", en: "Fast delivery and their privacy is very excellent.", he: "משלוח מהיר והפרטיות שלהם מצוינת מאוד." } }
      ] 
    },
    { 
      name: { ar: "فهد العتيبي", en: "Fahad Al-Otaibi", he: "פהד אל-עוטייבי" }, 
      text: { ar: "هل استخدامه باستمرار يسبب تعود؟ يعني هل ممكن بعدين ما اقدر بدونه؟", en: "Does using it constantly cause dependency? I mean, might I not be able to do without it later?", he: "האם שימוש קבוע גורם לתלות? כלומר, האם אולי לא אוכל בלעדיו מאוחר יותר?" }, 
      stars: 5, 
      replies: [ 
        { ...docs.sara, text: { ar: "التركيبة آمنة للاستخدام المتكرر ولا تسبب أي إدمان عضوي أو تعود وظائفي نهائياً.", en: "The formula is safe for repeated use and does not cause any organic addiction or functional dependency at all.", he: "הנוסחה בטוחה לשימוש חוזר ואינה גורמת להתמכרות אורגנית או לתלות תפקודית כלל." } },
        { name: { ar: "أبو يوسف", en: "Abu Yousef", he: "אבו יוסף" }, text: { ar: "أنا استخدمه من 3 شهور وكل شيء تمام التمام.", en: "I have been using it for 3 months and everything is perfectly fine.", he: "אני משתמש בו כבר 3 חודשים והכל בסדר גמור." } }
      ] 
    },
    { 
      name: { ar: "عبدالإله", en: "Abdulelah", he: "עבדאללה" }, 
      text: { ar: "عمري 62 سنة، هل سيفيدني أم أنه مخصص للشباب فقط؟", en: "I am 62 years old, will it benefit me or is it only for youth?", he: "אני בן 62, האם זה יועיל לי או שזה מיועד רק לצעירים?" }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "سعيد القحطاني", en: "Saeed Al-Qahtani", he: "סעיד אל-קחטאני" }, text: { ar: "أنصحك به وبقوة، النتائج ممتازة لكافة الأعمار.", en: "I highly recommend it, excellent results for all ages.", he: "אני ממליץ בחום, תוצאות מצוינות לכל הגילאים." } },
        { ...docs.tariq, text: { ar: "المنتج فعال جداً ومناسب للأعمار المتقدمة. شريحة واسعة من عملائنا فوق الستين ويحققون نتائج ممتازة.", en: "The product is very effective and suitable for advanced ages. A large segment of our clients is over sixty and they achieve excellent results.", he: "המוצר יעיל מאוד ומתאים לגילאים מתקדמים. פלח גדול מלקוחותינו מעל גיל שישים ומשיגים תוצאות מצוינות." } }
      ] 
    },
    { 
      name: { ar: "ياسر عبدالله", en: "Yasser Abdullah", he: "יאסר עבדאללה" }, 
      text: { ar: "افضل منتج جربته حتى الآن، يعطيك ثقة كبيرة جداً والنتيجة تدوم لفترة طويلة.", en: "Best product I've tried so far, gives huge confidence and result lasts a long time.", he: "המוצר הטוב ביותר שניסיתי עד כה, נותן ביטחון עצום והתוצאה נמשכת זמן רב." }, 
      stars: 5, 
      replies: [
        { ...docs.mahmoud, text: { ar: "سعداء جداً بسماع هذه التجربة الإيجابية، شكراً لك.", en: "Very happy to hear this positive experience, thank you.", he: "שמחים מאוד לשמוע על החוויה החיובית הזו, תודה לך." } },
        { name: { ar: "وايل العنزي", en: "Wael Al-Anazi", he: "וואאל אל-ענאזי" }, text: { ar: "تجربة ناجحة بكل المقاييس.", en: "Successful experience by all standards.", he: "חוויה מוצלחת בכל קנה מידה." } }
      ] 
    },
    { 
      name: { ar: "تركي", en: "Turki", he: "טורקי" }, 
      text: { ar: "أنا استخدمت كريمات ثانية وسببت لي صداع واحمرار بالوجه.. هل هذا نفس الشيء؟", en: "I used other creams and they gave me headaches and facial redness.. Is this the same?", he: "השתמשתי בקרמים אחרים והם גרמו לי לכאבי ראש ואדמומיות בפנים.. האם זה אותו הדבר?" }, 
      stars: 5, 
      replies: [ 
        { name: { ar: "سعود الدوسري", en: "Saud Al-Dossari", he: "סעוד אל-דוסארי" }, text: { ar: "لا يوجد أي صداع أو أعراض جانبية نهائياً مع هذا المنتج.", en: "There are absolutely no headaches or side effects with this product.", he: "אין לחלוטין כאבי ראש או תופעות לוואי עם המוצר הזה." } },
        { ...docs.mahmoud, text: { ar: "لا أبداً. الصداع والاحمرار يحدث بسبب الحبوب الفموية، أما رايز فعلاج موضعي خارجي نقي وآمن تماماً.", en: "Not at all. Headaches and redness occur due to oral pills, but Rise is a pure and completely safe external topical treatment.", he: "ממש לא. כאבי ראש ואדמומיות מתרחשים בגלל כדורים דרך הפה, אבל רייז הוא טיפול מקומי טהור ובטוח לחלוטין." } }
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
  }

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

})();
