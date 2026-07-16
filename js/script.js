function changeLanguage(lang) {
    console.log("Language:", lang);

    localStorage.setItem("language", lang);

    document.documentElement.lang = lang;

    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

const menu = document.getElementById("menuContent");

if (menu) {
    if (lang === "ar") {
        menu.style.right = "0";
        menu.style.left = "auto";
        menu.style.textAlign = "right";
    } else {
        menu.style.left = "0";
        menu.style.right = "auto";
        menu.style.textAlign = "left";
    }
}


    const texts = {

        ar: {

            clinicName:"عيادات الدكتور إيهاب محمود إبراهيم",

            homeLink: "الرئيسية",
            aboutLink: "من نحن",
            servicesLink: "الخدمات",
            doctorLink: "الطبيب",
            contactLink: "تواصل معنا",

            bookingBtn: "احجز موعد",
            menuBookingBtn: "احجز موعد",

            
title: "مرحبًا بكم في عيادات الدكتور إيهاب محمود إبراهيم",
description: "ابتسامتكم مسؤوليتنا... وسلامتكم أولويتنا",

            aboutTitle: "من نحن",
            aboutDescription:
            "مرحبًا بكم في عيادة الدكتور ايهاب محمود ، نقدم خدمات طب الأسنان بأحدث الأجهزة والتقنيات الحديثة، ونحرص دائمًا على توفير أفضل رعاية صحية لجميع المرضى في بيئة آمنة ومريحة، لأن ابتسامتكم هي هدفنا الأول.",
visionTitle: "رؤيتنا",

visionText:
"أن نكون من العيادات الرائدة في تقديم خدمات طب الأسنان المتكاملة، من خلال الجمع بين الخبرة الطبية، والتقنيات الحديثة، وتطبيق أعلى معايير الجودة وسلامة المرضى؛ للوصول إلى ابتسامة صحية وعلاج آمن لكل مريض.",


missionTitle: "رسالتنا",

missionText:
"نلتزم في عيادة الدكتور إيهاب محمود إبراهيم لطب الأسنان بتقديم رعاية متكاملة ومتميزة في مختلف تخصصات طب الأسنان، قائمة على التشخيص الدقيق، ووضع خطة علاج مناسبة لكل حالة، واستخدام التقنيات والمواد الحديثة، مع الاهتمام الكامل براحة المريض وسلامته وتحقيق أفضل النتائج العلاجية والتجميلية الممكنة.",


aboutClinicTitle: "نبذة عن العيادة",

aboutClinicText:
`عيادة الدكتور إيهاب محمود إبراهيم لطب الأسنان هي عيادة متخصصة في تقديم خدمات طب الأسنان المتكاملة للأطفال والكبار، وفق أسس علمية ومعايير مهنية تهدف إلى توفير تجربة علاجية آمنة ومريحة.

نؤمن بأن كل مريض له احتياجات مختلفة؛ لذلك تبدأ رحلتنا بالتشخيص الدقيق والاستماع إلى المريض، ثم وضع خطة علاج متكاملة تناسب حالته واحتياجاته.

تقدم العيادة خدمات علاج وتجميل الأسنان، والحشوات التجميلية، وعلاج الجذور، والتركيبات، وتبييض الأسنان، وعلاج أسنان الأطفال، وغيرها من خدمات طب الأسنان، مع الالتزام بمعايير الجودة وسلامة المرضى في جميع مراحل تقديم الخدمة.

ابتسامتك… مسؤوليتنا، وسلامتك أولويتنا.`,

doctorName: "د. إيهاب محمود ابراهيم",
            doctorSpecialty: "استشاري طب وجراحة الأسنان",

            doctorDescription:
            "يتمتع الدكتور إيهاب محمود بخبرة في مجال طب الأسنان، ويحرص على تقديم أفضل رعاية للمرضى باستخدام أحدث الأجهزة والتقنيات الحديثة، مع الاهتمام براحة المريض وجودة العلاج.",



            servicesTitle: "خدماتنا",

            service1: "🦷 الكشف والتشخيص ووضع خطة العلاج",
serviceDesc1: "تبدأ رحلة العلاج بفحص شامل للأسنان واللثة، والاستعانة بالأشعات اللازمة عند الحاجة، للوصول إلى تشخيص دقيق ووضع خطة علاج متكاملة تناسب احتياجات كل حالة.",

service2: "✨ تبييض الأسنان",
serviceDesc2: "إجراء تجميلي يهدف إلى تفتيح لون الأسنان وتقليل التصبغات الناتجة عن العادات اليومية والعوامل المختلفة، باستخدام مواد وتقنيات مخصصة وتحت إشراف طبي.",

service3: "🤍 الحشوات التجميلية",
serviceDesc3: "حشوات بلون الأسنان تستخدم لعلاج التسوس وإصلاح بعض العيوب البسيطة، مع الحرص على استعادة شكل ووظيفة السن وتحقيق مظهر طبيعي ومتناسق.",

service4: "🦷 علاج الجذور وحشو العصب",
serviceDesc4: "يهدف إلى علاج الالتهاب أو العدوى التي تصل إلى عصب السن، من خلال تنظيف وتطهير قنوات الجذور وحشوها للمساعدة في الحفاظ على السن الطبيعي.",

service5: "😁 تقويم الأسنان",
serviceDesc5: "يهدف تقويم الأسنان إلى تصحيح اعوجاج وتزاحم الأسنان وتحسين انتظامها، بالإضافة إلى علاج بعض مشكلات الإطباق والعلاقة بين الفكين.",

service6: "👑 تركيبات وتيجان الأسنان",
serviceDesc6: "تستخدم لتعويض أو حماية الأسنان المتضررة واستعادة شكلها ووظيفتها، مع اختيار النوع المناسب لكل حالة.",

service7: "😁 تجميل وتصميم الابتسامة",
serviceDesc7: "خطة تجميلية متكاملة تهدف إلى تحسين شكل الابتسامة واختيار الإجراءات المناسبة لكل حالة.",

service8: "🪞 قشور الأسنان التجميلية – الفينير",
serviceDesc8: "قشور تجميلية رقيقة تستخدم لتحسين لون أو شكل أو تناسق الأسنان الأمامية.",

service9: "🦷 علاج اللثة وتنظيف الجير",
serviceDesc9: "يشمل إزالة الجير والترسبات وعلاج التهابات اللثة.",

service10: "🔩 زراعة الأسنان",
serviceDesc10: "تعويض الأسنان المفقودة بأحدث تقنيات زراعة الأسنان.",

service11: "🦷 خلع الأسنان وضروس العقل",
serviceDesc11: "خلع الأسنان غير القابلة للعلاج وضروس العقل عند الحاجة الطبية.",

service12: "👶 طب أسنان الأطفال",
serviceDesc12: "رعاية متخصصة لأسنان الأطفال في بيئة آمنة ومريحة.",


            contactTitle: "تواصل معنا",

            contactDescription:
            "يمكنك التواصل مع عيادة الدكتور ايهاب محمود ابراهيم للحجز والاستفسار.",

            address: "📍 العنوان: دمياط",

            phone: "📞 الهاتف: 01000000000",

            email: "📧 البريد الإلكتروني: info@clinic.com"

        },




        en: {

            clinicName: "Dr. Ehab Mahmoud Ibrahim Dentist Clinics",

            homeLink: "Home",
            aboutLink: "About",
            servicesLink: "Services",
            doctorLink: "Doctor",
            contactLink: "Contact",

            bookingBtn: "Book Appointment",
            menuBookingBtn: "Book Appointment",

           
title: "Welcome to Dr. Ehab Mahmoud Ibrahim Dentist Clinics",
description: "Your Smile Is Our Responsibility... Your Safety Is Our Priority",


            aboutTitle: "About Us",

            aboutDescription:
"Welcome to Dr. Ehab Mahmoud Ibrahim Dentist Clinics. We provide high-quality dental care using the latest equipment and modern technologies in a safe and comfortable environment because your smile is our priority.",

visionTitle: "Our Vision",

visionText:
"To be one of the leading dental  Dentist clinics providing integrated dental services by combining medical expertise, modern technologies, and the highest standards of quality and patient safety to achieve a healthy smile and safe treatment for every patient.",


missionTitle: "Our Mission",

missionText:
"At Dr. Ehab Mahmoud Ibrahim Dental Dentist Clinic, we are committed to providing comprehensive and distinguished dental care in different specialties, based on accurate diagnosis, personalized treatment plans, modern technologies and materials, while ensuring patient comfort, safety, and the best possible therapeutic and cosmetic results.",


aboutClinicTitle: "About The Clinic",

aboutClinicText:
`Dr. Ehab Mahmoud Ibrahim Dental Clinic is a specialized dental clinic providing comprehensive dental services for children and adults according to scientific principles and professional standards to ensure a safe and comfortable treatment experience.

We believe that every patient has different needs. Therefore, our journey begins with accurate diagnosis and listening carefully to the patient, followed by creating a comprehensive treatment plan that suits each case and its requirements.

The clinic provides dental treatment and cosmetic services, including cosmetic fillings, root canal treatment, dental crowns, teeth whitening, pediatric dentistry, and other dental services, while maintaining quality standards and patient safety throughout all stages of care.

Your Smile... Our Responsibility, Your Safety Is Our Priority.`,

doctorName: "Dr. Ehab Mahmoud Ibrahim",
            doctorSpecialty: "Consultant of Dentistry and Oral Surgery",

            doctorDescription:
            "Dr. Ehab Mahmoud has experience in dentistry and provides high-quality dental care using modern equipment and techniques while focusing on patient comfort and treatment quality.",




            servicesTitle: "Our Services",

            service1: "🦷 Examination, Diagnosis & Treatment Planning",
serviceDesc1: "Comprehensive examination of the teeth and gums with X-rays when needed to create an appropriate treatment plan.",

service2: "✨ Teeth Whitening",
serviceDesc2: "A cosmetic procedure to brighten teeth and reduce stains using professional whitening techniques.",

service3: "🤍 Cosmetic Fillings",
serviceDesc3: "Tooth-colored fillings used to treat cavities while restoring the natural appearance of the tooth.",

service4: "🦷 Root Canal Treatment",
serviceDesc4: "Treatment of infected dental pulp by cleaning and filling the root canals to preserve the natural tooth.",

service5: "😁 Orthodontics",
serviceDesc5: "Correcting crooked and crowded teeth while improving bite alignment and smile appearance.",

service6: "👑 Dental Crowns & Bridges",
serviceDesc6: "Restoring damaged or missing teeth with durable and aesthetic dental restorations.",

service7: "😁 Smile Design",
serviceDesc7: "A customized cosmetic treatment plan to improve the overall appearance of your smile.",

service8: "🪞 Dental Veneers",
serviceDesc8: "Thin cosmetic shells placed on the front teeth to improve shape, color, and alignment.",

service9: "🦷 Gum Treatment & Scaling",
serviceDesc9: "Professional cleaning, tartar removal, and treatment of gum diseases.",

service10: "🔩 Dental Implants",
serviceDesc10: "Replacing missing teeth with modern dental implant technology.",

service11: "🦷 Tooth & Wisdom Tooth Extraction",
serviceDesc11: "Safe extraction of damaged teeth and wisdom teeth when medically necessary.",

service12: "👶 Pediatric Dentistry",
serviceDesc12: "Comprehensive dental care for children in a friendly and comfortable environment.",



            contactTitle: "Contact Us",

            contactDescription:
            "You can contact Al Shifa Clinic for booking and inquiries.",

            address: "📍 Address: Damietta",

            phone: "📞 Phone: 01101080403",

            email: "📧 Email: info@clinic.com"

        }

    };



    const data = texts[lang];


    for (let id in data) {

        const element = document.getElementById(id);

        if (element) {

            element.innerHTML = data[id];

        }

    }

}





window.addEventListener("load", function () {


    const savedLanguage = localStorage.getItem("language") || "ar";

    changeLanguage(savedLanguage);



    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");


        const btn = document.getElementById("themeBtn");


        if (btn) {

            btn.innerHTML = "☀️";

        }

    }

});






function toggleTheme() {


    document.body.classList.toggle("dark");


    const btn = document.getElementById("themeBtn");



    if (document.body.classList.contains("dark")) {


        localStorage.setItem("theme", "dark");


        if (btn) {

            btn.innerHTML = "☀️";

        }


    } else {


        localStorage.setItem("theme", "light");


        if (btn) {

            btn.innerHTML = "🌙";

        }

    }

}
// WhatsApp Booking

function sendWhatsApp() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const date = document.getElementById("date").value;
    let service = document.getElementById("service").value;
    if (service === "") {
    service = "لم يتم تحديد الخدمة";
}
const branch = document.getElementById("branch").value;
const caseDescription = document.getElementById("caseDescription").value;

if (service === "other") {
    service = document.getElementById("otherService").value;
}

    if (name === "" || phone === ""   || date === "") {
        alert("من فضلك املأ جميع البيانات");
        return;
    }

    let whatsappNumber = "";
    if (branch === "فرع كفر سعد") {
    whatsappNumber = "201010171499";
}
else if (branch === "فرع دمياط الجديدة") {
    whatsappNumber = "201101080403";
}
if (whatsappNumber === "") {
    alert("من فضلك اختر الفرع");
    return;
}

   const message =
`السلام عليكم،
أرغب في حجز موعد.

 الاسم: ${name}
 رقم الهاتف: ${phone}
 السن: ${age}
 تاريخ الحجز: ${date}
 الخدمة: ${service}
 الفرع: ${branch}
 وصف الحالة: ${caseDescription}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
function toggleMenu() {

    const menu = document.getElementById("menuContent");

    menu.classList.toggle("show");

}

window.onclick = function(event){

    if(!event.target.matches(".menu-btn")){

        const menu = document.getElementById("menuContent");

        if(menu.classList.contains("show")){

            menu.classList.remove("show");

        }

    }

}
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function toggleWhatsapp(e){
    e.preventDefault();

    document.getElementById("whatsappOptions")
    .classList.toggle("show");
}
const service = document.getElementById("service");
const otherServiceBox = document.getElementById("otherServiceBox");

if (service) {
    service.addEventListener("change", function () {
        if (this.value === "other") {
            otherServiceBox.style.display = "block";
        } else {
            otherServiceBox.style.display = "none";
        }
    });
}