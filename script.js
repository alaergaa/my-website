// 1. إخفاء شاشة الترحيب
setTimeout(() => {
    document.getElementById("welcomeSplash").classList.add("hide");
}, 2000);

// 2. إدارة السلايدر
const slides = document.querySelectorAll('.imageSlide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove('is-active'));
    dots.forEach(d => d.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('is-active');
    dots[currentSlide].classList.add('active');
}
document.getElementById('nextSlide').addEventListener('click', () => showSlide(currentSlide + 1));
document.getElementById('prevSlide').addEventListener('click', () => showSlide(currentSlide - 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
setInterval(() => showSlide(currentSlide + 1), 4000);

// 3. عداد الـ 24 ساعة للعروض
function startTimer() {
    let timerElements = document.querySelectorAll('.offerCountdown');
    let time = 24 * 60 * 60; // 24 ساعة بالثواني
    setInterval(() => {
        time--;
        let h = Math.floor(time / 3600), m = Math.floor((time % 3600) / 60), s = time % 60;
        let formatted = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        timerElements.forEach(el => el.innerText = formatted);
    }, 1000);
}
startTimer();

// 4. نظام الأزرار الـ 8 وتغيير المحتوى
const tabData = {
    infoSection: { title: "معلومات المنتج", body: "هذا المنتج مصمم بأعلى معايير الجودة ليلبي كافة احتياجاتك اليومية. يتميز بخامات ممتازة وعمر افتراضي طويل." },
    priceSection: { title: "سعر المنتج", body: "السعر الأساسي: <del>100$</del><br><strong style='color:#00BFFF; font-size:20px;'>السعر الحصري: 50$ فقط!</strong>" },
    orderSection: null, // سيقوم بإظهار فورم الطلب
    warrantySection: { title: "ضمان المنتج", body: "نقدم لك ضماناً ذهبياً يشمل الاستبدال الفوري في حال وجود أي عيب مصنعي خلال أول 30 يوماً من الاستخدام." },
    aboutSection: { title: "من نحن", body: "متجر <strong>Ordlix</strong> هو منصتك الموثوقة للتسوق الإلكتروني. نسعى دائماً لتوفير أفضل المنتجات وأسرع خدمة توصيل." },
    usageSection: { title: "طريقة الاستخدام", body: "1. قم بفتح العبوة بلطف.<br>2. تأكد من تركيب القطع بشكل صحيح.<br>3. المنتج جاهز للاستخدام الفوري." },
    guideSection: { title: "إرشادات المنتج", body: "يُحفظ المنتج في مكان جاف بعيداً عن درجات الحرارة المرتفعة لضمان أفضل أداء لأطول فترة ممكنة." },
    suitableSection: { title: "لمن يناسب؟", body: "مناسب لجميع الفئات العمرية ولكل من يبحث عن العملية والأناقة في منتج واحد." }
};

const buttons = document.querySelectorAll('.buttons button');
const dynamicCard = document.getElementById('dynamicContentCard');
const orderForm = document.getElementById('orderForm');
const contentTitle = document.getElementById('contentTitle');
const contentBody = document.getElementById('contentBody');
const outputText = document.getElementById('output');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // تفعيل لون الزر
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        let target = btn.getAttribute('data-target');
        outputText.innerText = btn.innerText;

        if(target === 'orderSection') {
            dynamicCard.classList.add('hidden');
            orderForm.classList.remove('hidden');
            orderForm.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            orderForm.classList.add('hidden');
            dynamicCard.classList.remove('hidden');
            contentTitle.innerHTML = tabData[target].title;
            contentBody.innerHTML = tabData[target].body;
        }
    });
});

// 5. نظام التقييم بالنجوم (تفاعلي)
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        let val = this.getAttribute('data-star');
        stars.forEach(s => s.classList.remove('on'));
        for(let i=0; i<val; i++) { stars[i].classList.add('on'); }
        showModal('⭐ شكراً لك', `تم تسجيل تقييمك: ${val} نجوم بنجاح.`);
    });
});

// 6. المودال (النافذة المنبثقة)
const modal = document.getElementById('modal');
const loading = document.getElementById('loading');

function showModal(title, text) {
    document.querySelector('.modalTitle').innerHTML = title;
    document.querySelector('.modalText').innerHTML = text;
    loading.classList.remove('hidden');
    
    setTimeout(() => {
        loading.classList.add('hidden');
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('show'), 10);
    }, 1000);
}

document.getElementById('modalOk').addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
});

// 7. إرسال الطلب
document.getElementById('submitOrder').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    if(!name || !phone) {
        alert("يرجى إدخال الاسم ورقم الهاتف!");
        return;
    }
    
    // جمع البيانات وإرسالها للإيميل عبر الفورم المخفي (FormSubmit)
    // يمكنك تعديل الإيميل في كود الـ HTML في خانة action
    document.getElementById('orderEmailForm').submit();
    
    showModal("✅ تم استلام طلبك", `شكراً <b>${name}</b>.<br>سنتواصل معك قريباً على الرقم <b>${phone}</b> لتأكيد الشحن.`);
});
