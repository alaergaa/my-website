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

  // القاموس الشامل (كما هو في نسختك)
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
        <li>⚡ <strong>أداء فوري وصلابة صخرية:</strong> يقضي على مشكلة الضعف والارتخاء بشكل فوري. يضمن لك قوة وصلابة خلال 15 دقيقة فقط، ويحافظ عليها طوال مدة اللقاء.</li>
        <li>⏱️ <strong>تأخير مضاعف وسيطرة تامة:</strong> يمنحك السيطرة الكاملة على وقتك. يطيل مدة اللقاء بشكل كبير جداً، وينهي التوتر والإحراج المرتبط بسرعة الانتهاء نهائياً.</li>
        <li>🔥 <strong>رضا كامل بدون تخدير (لن تفقد الإحساس):</strong> "رايز" يعمل بتقنية ذكية تقلل الحساسية المفرطة فقط، لتستمتع بالإحساس الطبيعي 100% دون أي شعور بالخدر المزعج.</li>
        <li>🛡️ <strong>البديل الآمن (لا يسبب الصداع):</strong> كونه علاجاً موضعياً خارجياً، فهو لا يدخل في مجرى الدم الكلي. بدون صداع، بدون احمرار، آمن تماماً لمرضى الضغط والقلب والسكري.</li>
        <li>💪 <strong>جاهزية سريعة وثقة مطلقة:</strong> لا يحتاج لخطوات معقدة أو انتظار طويل. استخدمه، دلكه بلطف، واستعد ثقتك المطلقة بنفسك وبأدائك.</li>
      </ul>`, 
      en: `<ul class='bulletList' style='text-align:left; direction:ltr;'>
        <li>⚡ <strong>Instant Performance & Rock-solid Erection:</strong> Eliminates weakness instantly. Guarantees strength within 15 mins, lasting throughout the session.</li>
        <li>⏱️ <strong>Double Delay & Full Control:</strong> Gives you total control over your time, significantly prolonging the session and ending performance anxiety.</li>
        <li>🔥 <strong>Full Satisfaction Without Numbing:</strong> Smart technology reduces hypersensitivity only, preserving 100% natural sensation.</li>
        <li>🛡️ <strong>Safe Alternative (No Headaches):</strong> Being a topical solution, it doesn't enter the bloodstream. No headaches, no flushing, 100% safe for BP, heart, and diabetes patients.</li>
        <li>💪 <strong>Quick Readiness & Absolute Confidence:</strong> Easy to use without long waits. Apply, massage, and regain your confidence.</li>
      </ul>`, 
      he: `<ul class='bulletList' style='text-align:right; direction:rtl;'>
        <li>⚡ <strong>ביצועים מיידיים וזקפה חזקה:</strong> מעלים את בעיית החולשה באופן מיידי. מבטיח כוח בתוך 15 דקות, שנמשך לאורך כל המפגש.</li>
        <li>⏱️ <strong>השהיה כפולה ושליטה מלאה:</strong> מעניק לך שליטה מלאה על הזמן שלך, מאריך משמעותית את המפגש ומעלים חרדת ביצוע.</li>
        <li>🔥 <strong>סיפוק מלא ללא אלחוש:</strong> טכנולוגיה חכמה המפחיתה רגישות יתר בלבד, ושומרת על 100% תחושה טבעית והנאה.</li>
        <li>🛡️ <strong>חלופה בטוחה (ללא כאבי ראש):</strong> מכיוון שמדובר בפתרון מקומי, הוא אינו חודר לזרם הדם. ללא כאבי ראש, בטוח ב-100% לחולי לחץ דם, סוכרת ולב.</li>
        <li>💪 <strong>מוכנות מהירה וביטחון מוחלט:</strong> קל לשימוש ללא המתנה ארוכה. מרח, עסה, ותחזיר את הביטחון שלך.</li>
      </ul>` 
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
      en: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">Golden Guarantee & Instant Refund</h4>
           <p class="gold-desc" style="margin-bottom:12px;">We take all the risk. We offer the strongest medical guarantee: "Instant results or your money back".</p>
           <ul class="bulletList" style="text-align:left; direction:ltr; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>15-Minute Test:</strong> If you don't get noticeable strength and delay within 15 minutes of your first try, you get a full refund.</li>
             <li>🤐 <strong>No Awkward Questions:</strong> Refund requests are handled professionally and with total privacy.</li>
             <li>💳 <strong>Fast Transfer:</strong> The full amount is transferred to your account within 24-48 business hours.</li>
             <li>📜 <strong>Fair Terms:</strong> Submit request within 72 hours, use for trial only (1-2 times), and keep the original packaging.</li>
           </ul>`,
      he: `<div class="gold-icon">🏆</div>
           <h4 class="gold-title">אחריות זהב והחזר מיידי</h4>
           <p class="gold-desc" style="margin-bottom:12px;">אנו לוקחים על עצמנו את כל הסיכון. אנו מציעים את האחריות הרפואית החזקה ביותר: "תוצאות מיידיות או כספך בחזרה".</p>
           <ul class="bulletList" style="text-align:right; direction:rtl; font-size:13.5px; color:#78350f; background:rgba(255,255,255,0.4); padding:12px 24px; border-radius:12px;">
             <li>⏱️ <strong>מבחן ה-15 דקות:</strong> אם לא תקבל כוח והשהיה מורגשת תוך 15 דקות מהניסיון הראשון, תקבל החזר מלא.</li>
             <li>🤐 <strong>ללא שאלות מביכות:</strong> בקשות החזר מטופלות במקצועיות ובפרטיות מוחלטת.</li>
             <li>💳 <strong>העברה מהירה:</strong> הסכום המלא מועבר לחשבונך תוך 24-48 שעות עסקים.</li>
             <li>📜 <strong>תנאים הוגנים:</strong> הגשת הבקשה תוך 72 שעות, שימוש לניסיון בלבד (פעם-פעמיים), ושמירה על האריזה המקורית.</li>
           </ul>`
    },
    aboutHtml: {
      ar: `<div class="sectionRich">
            <p class="richIntro">نحن في <strong>"مركز الارتقاء الطبي"</strong> لسنا مجرد نقطة بيع، بل صرح طبي رائد وموثوق مقره القدس. كرسنا جهودنا لتقديم حلول صحية مبتكرة تركز حصرياً على "صحة الرجل"، وتوفير علاجات جذرية وآمنة لمشاكل الضعف والارتخاء.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text"><strong>فلسفتنا الطبية:</strong> توفير بدائل آمنة وموضعية تغنيك تماماً عن الحبوب الكيميائية التي تؤثر سلباً على نبضات القلب والضغط.</div></div>
              <div class="about-item"><div class="about-icon">🛡️</div><div class="about-text"><strong>جودة لا تُضاهى:</strong> تركيبات مفحوصة وصارمة، سريعة الامتصاص، تمنحك مفعولاً خلال 15 دقيقة مع الحفاظ على الإحساس 100%.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text"><strong>الخصوصية التامة:</strong> نظام صارم لحماية البيانات. تسليم يداً بيد في "تغليف أسود مبهم بالكامل" لا يدل على محتواه.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text"><strong>دعم طبي متواصل:</strong> فريقنا متواجد للرد على استفساراتكم بسرية.<br>التواصل المباشر/واتساب: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div>
            </div>
           </div>`,
      en: `<div class="sectionRich" style="text-align:left; direction:ltr;">
            <p class="richIntro"><strong>Medical Elevation Center</strong> is a leading and trusted medical institution based in Jerusalem, exclusively dedicated to men's health and advanced safe treatments.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text" style="text-align:left;"><strong>Medical Philosophy:</strong> Providing safe, topical alternatives replacing chemical pills that affect heart and BP.</div></div>
              <div class="about-item"><div class="about-icon">🛡️</div><div class="about-text" style="text-align:left;"><strong>Unmatched Quality:</strong> Strict formulas, fast-absorbing, 15-minute effect while maintaining 100% sensation.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text" style="text-align:left;"><strong>Total Privacy:</strong> Strict data protection. Hand-to-hand delivery in completely opaque black packaging.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text" style="text-align:left;"><strong>Medical Support:</strong> Our team is available for private consultations.<br>WhatsApp: <strong style="color:#10b981;">+972512865105</strong></div></div>
            </div>
           </div>`,
      he: `<div class="sectionRich" style="text-align:right; direction:rtl;">
            <p class="richIntro"><strong>מרכז העלייה הרפואי</strong> הוא מוסד רפואי מוביל ואמין בירושלים, המוקדש באופן בלעדי לבריאות הגבר וטיפולים בטוחים מתקדמים.</p>
            <div class="modern-about">
              <div class="about-item"><div class="about-icon">🎯</div><div class="about-text" style="text-align:right;"><strong>פילוסופיה רפואית:</strong> מתן חלופות מקומיות בטוחות במקום כדורים כימיים המשפיעים על הלב ולחץ הדם.</div></div>
              <div class="about-item"><div class="about-icon">🛡️</div><div class="about-text" style="text-align:right;"><strong>איכות ללא תחרות:</strong> נוסחאות קפדניות, ספיגה מהירה, השפעה ב-15 דקות תוך שמירה על 100% תחושה.</div></div>
              <div class="about-item"><div class="about-icon">🔒</div><div class="about-text" style="text-align:right;"><strong>פרטיות מלאה:</strong> הגנה קפדנית על נתונים. משלוח מיד ליד באריזה שחורה ואטומה לחלוטין.</div></div>
              <div class="about-item"><div class="about-icon">📞</div><div class="about-text" style="text-align:right;"><strong>תמיכה רפואית:</strong> הצוות שלנו זמין להתייעצויות פרטיות.<br>וואטסאפ: <strong style="color:#10b981; direction:ltr; display:inline-block;">+972512865105</strong></div></div>
            </div>
           </div>`
    },
    footerInfo: {
      ar: `<div class="fc-welcome">نحن هنا من أجلك، لتقديم رعاية صحية تليق بك وبثقتك.</div>
           <p>📍 <strong>المقر الرئيسي:</strong> القدس - جبل الزيتون، الشارع الرئيسي، المجمع الطبي الملاصق لفندق الأمل، الطابق الثاني.</p>
           <p>🕒 <strong>مواعيد العمل:</strong> من الأحد إلى الخميس (9:00 صباحاً حتى 9:00 مساءً - الجمعة عطلة رسمية)</p>
           <p>🚚 <strong>نطاق الشحن:</strong> توصيل سريع في تغليف أسود مبهم لجميع مدن الداخل والضفة الغربية.</p>
           <p>📞 <strong>للتواصل والواتساب:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`,
      en: `<div class="fc-welcome" style="text-align:left;">We are here to provide healthcare worthy of your trust.</div>
           <p style="text-align:left; direction:ltr;">📍 <strong>Headquarters:</strong> Jerusalem - Mount of Olives, Main St, Medical Complex next to Al-Amal Hotel, 2nd Floor.</p>
           <p style="text-align:left; direction:ltr;">🕒 <strong>Working Hours:</strong> Sun-Thu 9:00 AM to 9:00 PM (Closed Friday)</p>
           <p style="text-align:left; direction:ltr;">🚚 <strong>Shipping:</strong> Fast, discreet black packaging delivery to all regions.</p>
           <p style="text-align:left; direction:ltr;">📞 <strong>Contact & WhatsApp:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`,
      he: `<div class="fc-welcome" style="text-align:right;">אנחנו כאן כדי לספק שירותי בריאות הראויים לאמון שלך.</div>
           <p style="text-align:right; direction:rtl;">📍 <strong>כתובת:</strong> ירושלים - הר הזיתים, הרחוב הראשי, המתחם הרפואי ליד מלון אל-אמל, קומה שנייה.</p>
           <p style="text-align:right; direction:rtl;">🕒 <strong>שעות פעילות:</strong> ראשון-חמישי 09:00 עד 21:00 (שישי סגור)</p>
           <p style="text-align:right; direction:rtl;">🚚 <strong>משלוח:</strong> משלוח מהיר ודיסקרטי באריזה שחורה לכל האזורים.</p>
           <p style="text-align:right; direction:rtl;">📞 <strong>צור קשר ו-וואטסאפ:</strong> <span style="direction:ltr; display:inline-block;">+972512865105</span></p>`
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
      en: `<div class='faq-list' style='direction:ltr;'>
            <div class='faq-item is-open'>
              <button class='faq-q' style='text-align:left;'>Are there any side effects (like headaches or heart palpitations)?</button>
              <div class='faq-a' style='text-align:left;'><p>No, the product is 100% topical and safe. It does not enter the bloodstream and causes no headaches, flushing, or increased heart rate.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q' style='text-align:left;'>Is it safe for diabetes, BP, and heart patients?</button>
              <div class='faq-a' style='text-align:left;'><p>Absolutely. As an external topical treatment, it does not interfere with any medications and is considered the safest alternative.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q' style='text-align:left;'>Does it cause numbing or loss of sensation?</button>
              <div class='faq-a' style='text-align:left;'><p>Not at all. Unlike traditional sprays, our medical formula only reduces hypersensitivity, maintaining 100% natural pleasure and sensation.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q' style='text-align:left;'>When does it take effect and how long does it last?</button>
              <div class='faq-a' style='text-align:left;'><p>The effect begins within 15 to 20 minutes after application and gentle massage, lasting for hours to ensure full satisfaction.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q' style='text-align:left;'>Is delivery discreet? How do I pay?</button>
              <div class='faq-a' style='text-align:left;'><p>Total privacy guaranteed; shipped in completely opaque packaging. Payment is cash on delivery for your convenience and safety.</p></div>
            </div>
          </div>`,
      he: `<div class='faq-list' style='direction:rtl;'>
            <div class='faq-item is-open'>
              <button class='faq-q'>האם יש תופעות לוואי (כמו כאבי ראש או דפיקות לב)?</button>
              <div class='faq-a'><p>לא, המוצר מקומי ובטוח ב-100%. הוא אינו חודר למחזור הדם ולא גורם לכאבי ראש, אדמומיות, או קצב לב מואץ.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q'>האם זה בטוח לחולי סוכרת, לחץ דם ולב?</button>
              <div class='faq-a'><p>בהחלט. כטיפול מקומי חיצוני, הוא אינו מתנגש עם תרופות נפוצות ונחשב לחלופה הבטוחה ביותר.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q'>האם המוצר גורם לאובדן תחושה?</button>
              <div class='faq-a'><p>בכלל לא. בניגוד לתרסיסים רגילים, הנוסחה שלנו רק מפחיתה רגישות יתר, ושומרת על 100% תחושה טבעית והנאה.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q'>מתי זה מתחיל להשפיע ולכמה זמן?</button>
              <div class='faq-a'><p>ההשפעה מתחילה תוך 15 עד 20 דקות לאחר המריחה ועיסוי קל, ונמשכת שעות להבטחת סיפוק מלא.</p></div>
            </div>
            <div class='faq-item is-open'>
              <button class='faq-q'>האם המשלוח דיסקרטי? איך משלמים?</button>
              <div class='faq-a'><p>אנו מתחייבים לפרטיותך; נשלח באריזה אטומה לחלוטין. התשלום במזומן במסירה לנוחותך.</p></div>
            </div>
          </div>`
    },
    usageHtml: { 
      ar: `<p class='richIntro'>خطوات بسيطة وسريعة للحصول على أداء جبار:</p>
      <ol class='stepList'>
        <li><div class='stepHead'>1️⃣ التحضير والنظافة</div><div class='stepBody'><p>تأكد من غسل المنطقة الحساسة وتجفيفها تماماً لضمان أقصى سرعة لامتصاص المنتج.</p></div></li>
        <li><div class='stepHead'>2️⃣ الاستخدام والتدليك</div><div class='stepBody'><p>ضع كمية بسيطة وقم بتوزيعها وتدليكها بلطف بحركات دائرية لمدة دقيقة واحدة حتى يمتصها الجلد بالكامل.</p></div></li>
        <li><div class='stepHead'>3️⃣ الانطلاق</div><div class='stepBody'><p>انتظر من 15 إلى 20 دقيقة ليبدأ المفعول الجبار. <strong>لا حاجة للغسل بعد الاستخدام</strong>، المنتج آمن تماماً!</p></div></li>
      </ol>`, 
      en: `<p class='richIntro' style='text-align:left;'>Quick and simple steps for powerful performance:</p>
      <ol class='stepList' style='text-align:left; direction:ltr;'>
        <li><div class='stepHead'>1️⃣ Preparation</div><div class='stepBody'><p>Wash and dry the area thoroughly to ensure maximum absorption.</p></div></li>
        <li><div class='stepHead'>2️⃣ Application</div><div class='stepBody'><p>Apply a small amount and gently massage in circular motions for one minute until fully absorbed.</p></div></li>
        <li><div class='stepHead'>3️⃣ Action</div><div class='stepBody'><p>Wait 15-20 minutes for the effect to begin. <strong>No need to wash off</strong>, completely safe!</p></div></li>
      </ol>`, 
      he: `<p class='richIntro' style='text-align:right;'>שלבים פשוטים ומהירים לביצועים עוצמתיים:</p>
      <ol class='stepList' style='text-align:right; direction:rtl;'>
        <li><div class='stepHead'>1️⃣ הכנה</div><div class='stepBody'><p>שטוף ויבש את האזור היטב כדי להבטיח ספיגה מקסימלית.</p></div></li>
        <li><div class='stepHead'>2️⃣ שימוש ועיסוי</div><div class='stepBody'><p>מרח כמות קטנה ועסה בעדינות בתנועות מעגליות למשך דקה עד לספיגה מלאה.</p></div></li>
        <li><div class='stepHead'>3️⃣ פעולה</div><div class='stepBody'><p>המתן 15-20 דקות לתחילת ההשפעה. <strong>אין צורך לשטוף לאחר מכן</strong>, המוצר בטוח לחלוטין!</p></div></li>
      </ol>` 
    },
    suitableHtml: { 
      ar: `<p class='richIntro'>صُمم هذا المنتج ليكون آمناً وفعّالاً للجميع بدون استثناء:</p>
      <ul class='bulletList'>
        <li>✔️ <strong>لجميع الأعمار:</strong> فعال بقوة للشباب وكبار السن (من الثلاثينيات وحتى ما بعد الستين) لاستعادة ذروة الأداء.</li>
        <li>✔️ <strong>لمرضى القلب وضغط الدم:</strong> منتج موضعي آمن تماماً، لا يدخل في مجرى الدم الكلي ولا يسبب أي تسارع في نبضات القلب.</li>
        <li>✔️ <strong>لمرضى السكري:</strong> لا يتداخل إطلاقاً مع مستويات السكر في الدم أو أدوية السكري.</li>
      </ul>`, 
      en: `<p class='richIntro' style='text-align:left; direction:ltr;'>Designed to be safe and effective for everyone:</p>
      <ul class='bulletList' style='text-align:left; direction:ltr;'>
        <li>✔️ <strong>All Ages:</strong> Highly effective for both young and older men (30s to 60s+) to restore peak performance.</li>
        <li>✔️ <strong>Heart & BP Patients:</strong> 100% safe topical product, doesn't enter the bloodstream or raise heart rate.</li>
        <li>✔️ <strong>Diabetics:</strong> Does not interfere with blood sugar levels or diabetes medications.</li>
      </ul>`, 
      he: `<p class='richIntro' style='text-align:right; direction:rtl;'>מיועד להיות בטוח ויעיל לכולם ללא יוצא מן הכלל:</p>
      <ul class='bulletList' style='text-align:right; direction:rtl;'>
        <li>✔️ <strong>לכל הגילאים:</strong> יעיל מאוד לצעירים ומבוגרים (משנות ה-30 ועד 60+) כדי לשחזר ביצועי שיא.</li>
        <li>✔️ <strong>לחולי לב ולחץ דם:</strong> מוצר מקומי בטוח ב-100%, אינו חודר לזרם הדם ולא מעלה את קצב הלב.</li>
        <li>✔️ <strong>לחולי סוכרת:</strong> אינו מתנגש כלל עם רמות הסוכר בדם או תרופות לסוכרת.</li>
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
    rateBeforeComment: { ar: "قيّم المنتج أولاً (اختياري)", en: "Rate the product (Optional)", he: "דרג את המוצר קודם" },
    reviewNeedRating: { ar: "يرجى اختيار عدد النجوم قبل إرسال التعليق.", en: "Please select a star rating before commenting.", he: "אנא בחר דירוג כוכבים לפני שליחת תגובה." },
    reviewSent: { ar: "تم إرسال تقييمك بنجاح. شكرًا لك!", en: "Your rating and comment were submitted. Thank you!", he: "הדירוג והתגובה נשלחו. תודה!" },
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
    typeNameTitle: { ar: "الاسم", en: "Name", he: "שם" }, 
    typeReplyTitle: { ar: "اكتب ردك...", en: "Type your reply...", he: "כתוב תגובתך..." }, 
    btnReply: { ar: "رد", en: "Reply", he: "הגב" }
  };

  // -------------------------------------------------------------
  // بناء قائمة النقاشات والردود العشوائية والواقعية (حوالي 200 رد متداخل)
  // -------------------------------------------------------------
  const baseNames = ["خالد", "ياسر", "سالم", "أبو فهد", "عمر", "طارق", "محمود", "عبدالله", "فيصل", "سعد", "علي", "نواف", "إبراهيم", "زياد", "عبدالعزيز", "عادل", "حسن", "محمد", "سامي", "راشد", "طلال", "وليد", "أحمد", "سعيد", "ماجد", "حسين", "عبدالرحمن", "فواز", "يوسف", "صالح", "هشام", "بندر", "رياض", "نايف", "عمار", "بدر", "تركي", "وسيم", "منصور", "مروان", "جابر", "سليمان", "أنس", "بشار", "حمدان", "زيد", "ممدوح", "نادر", "قصي", "هيثم", "شاكر", "جلال", "عيسى", "أمجد", "تيسير"];
  const baseQuestions = [
    "يا اخوان انا مريض سكر وعندي ضعف هل هذا المنتج يعالج الشي ولا كلام اعلانات؟",
    "يعطيكم العافية، انا عامل قسطرة وباخذ دوا ضغط، بيأثر عالقلب ولا عادي؟",
    "المنتج انقذني صراحة جربت اشياء كثير بس هذا اللي اعطاني تأخير طبيعي",
    "يا شباب اللي جربوه كم يجلس المفعول؟ وطريقة الاستخدام بالضبط كيف؟",
    "احكولنا الصراحة هاد مش زي الاعلانات الكذب؟ لانو سعره مش رخيص",
    "التغليف جاني أسود بالكامل ومحد عرف وش داخله، الخصوصية عندهم 10/10.",
    "طيب يحتاج اغسله قبل العلاقة ولا عادي؟",
    "أفضل بديل للفياجرا، ريحني من وجع الرأس والحرارة بالوجه",
    "المنتج وصلني اليوم بس العلبة شكلها صغير شوي!",
    "والله منتج بطل، انصح فيه وبقوة لكل متزوج. المندوب كان جدا محترم",
    "في خصم اذا طلبت مرة ثانية؟ انا بطلب لاخوي",
    "صراحة الضمان الذهبي هو اللي خلاني اطلب، وللأمانة ما احتجت ارجعه",
    "الدفع عند الاستلام ميزة رهيبة، ريحتني كثير لاني ما بحب ادفع بالفيزا",
    "اللي متردد يطلبه وهو مغمض، حل لي مشكلة سرعة الانتهاء اللي عانيت منها سنين",
    "هل يخدر المنطقة وتفقد الاحساس لان البخاخات تخدر كل شي",
    "النتيجة قوية لكن يحتاج مساج لمدة دقيقة كاملة عشان يمتصه الجلد صح",
    "يا جماعة الخير التوصيل للقدس قديش بوخذ وقت؟",
    "التأخير فيه طبيعي ومريح مو مزعج، يخليك تتحكم بوقتك بشكل كامل",
    "النتيجة تفوق الوصف، لكن تمنيت لو في أحجام أكبر للعبوة",
    "وداعا للحبوب والصداع، هذا الاختراع الطبي هو الأفضل حالياً في السوق"
  ];
  
  const baseReplies = [
    "انا سكري تراكمي عالي وتعبني الارتخاء جربته والحمدلله النتيجة ممتازة",
    "يا شباب كم سعره مع التوصيل؟",
    "انا مريض ضغط واستخدم رايز وما حسيت بأي صداع امن جدا",
    "اه ضروري تغسله بعد ثلث ساعة هيك احسن الك وللمدام",
    "لا ابدا ما بيخدر، هاد ميزته انه طبيعي بتحس بكل اشي بس بيعطيك سيطرة",
    "والله كنت مفكره كذب بس الدفع عند الاستلام شجعني.. بيستاهل صراحة",
    "سعره فيه لان العلبة بتطول معك شهور مو زي الحبوب",
    "مكتوب فوق انه مش ضروري تغسله لانه آمن، بس انا بفضل اغسله",
    "صغيرة بس بتكفي فترة طويلة، انت بس بتحتاج قطرتين كل مرة لا تكثر",
    "انا طلبت لرام الله ووصلني ثاني يوم العصر، شباب محترمين",
    "تأخير يعطيك نص ساعة الى 45 دقيقة بالراحة. حط نتفة صغيرة وافركها منيح",
    "اتفق معك بقوة، تغيرت حياتي للاحسن بفضله",
    "صحيح انا لاحظت هالشي، اذا سويت مساج دقيقة كاملة يصير المفعول اقوى",
    "التوصيل عندهم سريع، انا بالرياض ووصلني بنفس اليوم",
    "انا كنت متردد مثلك بس توكلت على الله وطلبته والحمدلله منتج ممتاز"
  ];

  // دالة لتوليد وقت عشوائي
  const timeStrings = ["الآن", "منذ 5 دقائق", "منذ ربع ساعة", "منذ ساعة", "منذ ساعتين", "منذ 5 ساعات", "أمس", "منذ يومين", "منذ 3 أيام", "الأسبوع الماضي"];
  function randTime() { return timeStrings[Math.floor(Math.random() * timeStrings.length)]; }

  const seedThreads = [];
  // توليد 45 نقاش متسلسل (كل نقاش قد يحتوي من 0 إلى 4 ردود) ليعطينا إجمالي حوالي 150-200 تعليق
  for(let i=0; i<45; i++) {
    const mainName = baseNames[Math.floor(Math.random() * baseNames.length)] + (Math.random()>0.5 ? " " + baseNames[Math.floor(Math.random() * baseNames.length)] : "");
    const mainText = baseQuestions[Math.floor(Math.random() * baseQuestions.length)];
    const stars = Math.random() > 0.5 ? (Math.random() > 0.2 ? 5 : 4) : 0; 
    
    const numReplies = Math.floor(Math.random() * 5); // 0 to 4 replies
    const replies = [];
    for(let j=0; j<numReplies; j++) {
      replies.push({
        name: baseNames[Math.floor(Math.random() * baseNames.length)],
        time: { ar: randTime() },
        text: { ar: baseReplies[Math.floor(Math.random() * baseReplies.length)] },
        color: "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0') // لون عشوائي للأفاتار
      });
    }

    seedThreads.push({
      main: { name: mainName, time: {ar: randTime()}, text: {ar: mainText, en: mainText, he: mainText}, stars: stars, color: "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0') },
      replies: replies
    });
  }

  // فرز النقاشات لتبدو الأحدث في الأعلى (اختياري، لكن سنتركها كما وُلدت عشوائياً)

  let currentLang = "ar";
  const userThreads = [];
  let threadsShown = 0;
  const INITIAL_THREADS = 6; // نعرض 6 نقاشات في البداية

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

  function updateReviewSummary(all, lang){
    const rsStars = document.getElementById("rsStars");
    const rsAvg = document.getElementById("rsAvg");
    const rsCount = document.getElementById("rsCount");
    if(!rsStars || !rsAvg || !rsCount) return;

    const ratedThreads = all.filter(t => t.main.stars > 0);
    const count = ratedThreads.length + 155; // رقم مبدئي ليعكس الزخم
    const sum = ratedThreads.reduce((a,r)=>a + (Number(r.main.stars)||5), 0) + (155 * 4.9);
    const avg = count ? (sum / count) : 4.9;
    const avgFixed = avg ? avg.toFixed(1) : "4.9";
    const filled = Math.max(0, Math.min(5, Math.round(avg)));
    rsStars.textContent = "★★★★★".slice(0,filled) + "☆☆☆☆☆".slice(0,5-filled);
    rsAvg.textContent = `${avgFixed}/5`;

    const countLabel = (dict.reviewsCountLabel && dict.reviewsCountLabel[lang]) || "";
    rsCount.textContent = countLabel ? `${countLabel}: ${count}` : String(count);
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

    updateReviewSummary(all, lang);

    const nextCount = (threadsShown === 0)
      ? Math.min(all.length, INITIAL_THREADS)
      : all.length; 
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

  // === حركة الشارة العلوية المتحركة (Top Badge Animation) ===
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

  const goTo = (i) => { index = (i + images.length) % images.length; updateUI(); };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  document.getElementById("nextBtn").addEventListener("click", next);
  document.getElementById("prevBtn").addEventListener("click", prev);

  const frame = document.getElementById("sliderFrame");
  const onDown = (e) => {
    isDragging = true; stopAutoplay();
    startX = (e.touches ? e.touches[0].clientX : e.clientX);
    currentX = startX; track.style.transition = "none";
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
    isDragging = false; track.style.transition = "";
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
    img.src = src; img.alt = `Viewer thumb ${i+1}`; img.loading = "lazy"; img.decoding = "async";
    t.appendChild(img);
    t.addEventListener("click", () => setLB(i));
    lbThumbs.appendChild(t);
  });

  const setLB = (i) => {
    lbIndex = (i + images.length) % images.length;
    lbImg.src = images[lbIndex];
    lbImg.alt = `Image ${lbIndex+1}`;
    [...lbThumbs.children].forEach((t, k) => t.classList.toggle("is-active", k === lbIndex));
    lbZoom.scrollTop = 0; lbZoom.scrollLeft = 0;
  };

  const openLightbox = (i) => {
    stopAutoplay();
    lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; setLB(i);
  };
  const closeLightbox = () => {
    lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; restartAutoplaySoon();
  };

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbBackdrop").addEventListener("click", closeLightbox);

  updateUI();
  startAutoplay();

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
  if (saved) { paint(saved); wrap.classList.add("is-done"); }
  else { paintAvg(AVG); }

  stars.forEach(btn => {
    btn.addEventListener("click", () => {
      const already = Number(localStorage.getItem(KEY) || 0);
      if (already) { openModal("alreadyRated"); return; }
      const v = Number(btn.dataset.v);
      localStorage.setItem(KEY, String(v));
      paint(v); wrap.classList.add("is-done"); openModal("thanksRated");
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target && e.target.hasAttribute("data-sr-close")) closeModal();
  });
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

  window.addEventListener("resize", () => {
    const open = document.querySelector(".sectionPanel.is-open");
    if (open) open.style.maxHeight = open.scrollHeight + "px";
  });

  function getStickyOffset(){
    const langbar = document.querySelector(".langbar");
    if(!langbar) return 0;
    return langbar.getBoundingClientRect().height || 0;
  }

  // ==== التعديل لفتح قسم آراء العملاء افتراضياً ====
  const DEFAULT_SECTION = "#reviews";
  const defaultBtn = document.querySelector(`.aBtn[data-scroll="${DEFAULT_SECTION}"]`);
  const defaultPanel = document.querySelector(DEFAULT_SECTION);
  
  if (defaultBtn && defaultPanel) {
    document.querySelectorAll("[data-scroll]").forEach((b) => b.classList.remove("is-active"));
    defaultBtn.classList.add("is-active");
    openPanel(defaultPanel);
  }

  // التمرير الذكي إلى مستوى الأزرار فقط
  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      
      const sel = btn.getAttribute("data-scroll");
      if (!sel) return;
      const el = document.querySelector(sel);
      if (!el) return;

      if (btn.classList.contains('aBtn')) {
        document.querySelectorAll(".aBtn").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      }

      openPanel(el);

      setTimeout(() => {
        try {
          const offset = typeof getStickyOffset === "function" ? getStickyOffset() : 0;
          const actionRow = document.querySelector(".actionRow");
          const targetElement = actionRow ? actionRow : el;
          const y = (targetElement.getBoundingClientRect().top + (window.pageYOffset || 0)) - offset - 12;
          
          if (typeof window.scrollTo === "function") {
            window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: "smooth" });
          }
        } catch (_e) {}
      }, 380); 
    });
  });
  
  document.addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains('faq-q')) {
      const parent = e.target.closest('.faq-item');
      if(parent) {
        parent.classList.toggle('is-open');
        const panel = parent.closest('.sectionPanel');
        if (panel && panel.classList.contains('is-open')) {
            setTimeout(() => { panel.style.maxHeight = panel.scrollHeight + "px"; }, 300);
        }
      }
    }
  });

  const reviewForm = document.getElementById("reviewForm");
  const rfName = document.getElementById("rfName");
  const rfComment = document.getElementById("rfComment");

  if (reviewForm && rfName && rfComment) {
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

    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (rfName.value || "").trim();
      const comment = (rfComment.value || "").trim();
      if (rfSuccess) rfSuccess.hidden = true;

      // النجوم لم تعد إجبارية لبدء نقاش جديد
      if (!name || !comment) return;

      if (rfSubmit) {
        rfSubmit.classList.add("isLoading");
        rfSubmit.disabled = true;
      }

      const ratingForCard = rfRating || 0;
      setTimeout(() => {
        userThreads.unshift({ 
          main: { name: name, time: {ar:"الآن", en:"Just now", he:"עכשיו"}, text: { ar: comment, en: comment, he: comment }, stars: ratingForCard, color: "#10b981" }, 
          replies: [] 
        });
        renderReviews(currentLang, true);
        rfName.value = ""; rfComment.value = ""; rfSetStars(0);
        if (rfSuccess) rfSuccess.hidden = false;
        if (rfSubmit) { rfSubmit.classList.remove("isLoading"); rfSubmit.disabled = false; }
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
  const orderBtn = document.querySelector(`.aBtn[data-scroll="#order"]`);

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
    }
  }

  offerBuyButtons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
      e.preventDefault(); e.stopPropagation();
      const chip = btn.closest(".offerChip");
      const q = chip ? chip.getAttribute("data-offer") : "1";
      selectOffer(q);

      if (orderBtn) {
        document.querySelectorAll(".aBtn").forEach(b => b.classList.remove("is-active"));
        orderBtn.classList.add("is-active");
      }
      
      if (orderPanel){
        try{ openPanel(orderPanel); }catch(_e){}
        setTimeout(() => {
          try {
            const offset = typeof getStickyOffset === "function" ? getStickyOffset() : 0;
            const actionRow = document.querySelector(".actionRow");
            const targetElement = actionRow ? actionRow : orderPanel;
            const y = (targetElement.getBoundingClientRect().top + (window.pageYOffset || 0)) - offset - 12;
            window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: "smooth" });
          } catch (_e) {}
        }, 380);
      }
    });
  });

  // Order Submit Logic
  const orderForm = document.getElementById("orderForm");
  const ofSubmit = document.getElementById("ofSubmit");
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
  }

  bindPhoneNumeric(document.getElementById("ofPhone"));
  bindPhoneNumeric(document.getElementById("rfuPhone"));
  
  if (orderForm && ofSubmit) {
    orderForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const phone = (document.getElementById("ofPhone")?.value || "").trim();
      if (!isValidPhone(phone)) {
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
        await fetch(orderForm.action, { method: "POST", body: new FormData(orderForm), headers: { "Accept": "application/json" } });
      } catch (err) {
        console.log("Submit status:", err);
      } finally {
        ofSubmit.classList.remove("isLoading");
        ofSubmit.disabled = false;
        openOrderModal();
        try { orderForm.reset(); } catch(_e) {}
      }
    });

  const rfuPhotos = document.getElementById("rfuPhotos");
  const rfuPreview = document.getElementById("rfuPreview");
  const refundForm = document.getElementById("refundRequestForm");
  const rfuSubmit = document.getElementById("rfuSubmit");
  const rfuError = document.getElementById("rfuError");
  const rfuSuccess = document.getElementById("rfuSuccess");

  const clearPreview = () => { if (!rfuPreview) return; rfuPreview.innerHTML = ""; };

  if (rfuPhotos && rfuPreview) {
    rfuPhotos.addEventListener("change", () => {
      clearPreview();
      const files = Array.from(rfuPhotos.files || []);
      files.slice(0, 6).forEach(file => {
        const url = URL.createObjectURL(file);
        const box = document.createElement("div"); box.className = "pv";
        const img = document.createElement("img"); img.src = url; img.alt = "photo";
        box.appendChild(img); rfuPreview.appendChild(box);
      });
    });
  }

  const hasValue = (id) => { const el = document.getElementById(id); return el && String(el.value || "").trim().length > 0; };

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
        rfuSubmit.classList.remove("isLoading"); rfuSubmit.disabled = false;
        if (rfuSuccess) rfuSuccess.hidden = false;
      }, 750);
    });
  }
}

  // Live Sales Popup Logic
  const popupNames = ["أحمد", "محمد", "سالم", "طارق", "فيصل", "عبدالله", "محمود", "عمر", "نواف", "ياسر", "خالد", "ماجد"];
  const popupCities = ["الرياض", "جدة", "القدس", "تل أبيب", "دبي", "عمان", "يافا", "حيفا", "الدمام", "أبوظبي"];
  const popupItems = ["عبوتين", "عبوة واحدة", "3 عبوات", "عبوتين", "عبوتين"];

  function triggerLivePopup() {
    const popup = document.getElementById("livePopup");
    if (!popup) return;
    
    const name = popupNames[Math.floor(Math.random() * popupNames.length)];
    const city = popupCities[Math.floor(Math.random() * popupCities.length)];
    const item = popupItems[Math.floor(Math.random() * popupItems.length)];
    const min = Math.floor(Math.random() * 12) + 1; 
    
    document.getElementById("lpDesc").textContent = `${name} من ${city} طلب ${item}`;
    document.getElementById("lpTime").textContent = min;
    
    popup.classList.add("show");
    
    setTimeout(() => {
      popup.classList.remove("show");
    }, 4500);
  }

  setTimeout(triggerLivePopup, 4000);
  setInterval(() => {
    triggerLivePopup();
  }, Math.floor(Math.random() * 10000) + 15000);

})();
