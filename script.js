function changeLanguage(lang) {

    localStorage.setItem("language", lang);

    document.documentElement.lang = lang;

    if (lang === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }


    const texts = {

        ar: {

            clinicName:"عيادة الدكتور ايهاب",

            homeLink: "الرئيسية",
            aboutLink: "من نحن",
            servicesLink: "الخدمات",
            doctorLink: "الطبيب",
            contactLink: "تواصل معنا",

            bookingBtn: "احجز موعد",

            title:"مرحبا بكم في عيادة الدكتور ايهاب ",
            description: "صحتكم هي أولويتنا",


            aboutTitle: "من نحن",
            aboutDescription:
            "مرحبًا بكم في عيادة الدكتور ايهاب، نقدم خدمات طب الأسنان بأحدث الأجهزة والتقنيات الحديثة، ونحرص دائمًا على توفير أفضل رعاية صحية لجميع المرضى في بيئة آمنة ومريحة، لأن ابتسامتكم هي هدفنا الأول.",



            doctorSpecialty: "استشاري طب وجراحة الأسنان",

            doctorDescription:
            "يتمتع الدكتور إيهاب محمود بخبرة في مجال طب الأسنان، ويحرص على تقديم أفضل رعاية للمرضى باستخدام أحدث الأجهزة والتقنيات الحديثة، مع الاهتمام براحة المريض وجودة العلاج.",



            servicesTitle: "خدماتنا",

            service1: "🦷 تنظيف الأسنان",
            service2: "😁 تبييض الأسنان",
            service3: "🦷 حشو الأسنان",
            service4: "✨ تقويم الأسنان",
            service5: "🦷 زراعة الأسنان",
            service6: "👶 أسنان الأطفال",

            serviceDesc1: "تنظيف احترافي وإزالة الجير للحفاظ على صحة الأسنان.",
            serviceDesc2: "ابتسامة ناصعة باستخدام أحدث تقنيات التبييض.",
            serviceDesc3: "علاج التسوس باستخدام أفضل خامات الحشو.",
            serviceDesc4: "تقويم ثابت ومتحرك للحصول على ابتسامة مثالية.",
            serviceDesc5: "تعويض الأسنان المفقودة بأحدث تقنيات الزراعة.",
            serviceDesc6: "رعاية متكاملة لأسنان الأطفال في بيئة مريحة.",



            contactTitle: "تواصل معنا",

            contactDescription:
            "يمكنك التواصل مع عيادة الشفاء للحجز والاستفسار.",

            address: "📍 العنوان: دمياط",

            phone: "📞 الهاتف: 01000000000",

            email: "📧 البريد الإلكتروني: info@clinic.com"

        },




        en: {

            clinicName: "HealthCare Clinic",

            homeLink: "Home",
            aboutLink: "About",
            servicesLink: "Services",
            doctorLink: "Doctor",
            contactLink: "Contact",

            bookingBtn: "Book Appointment",

            title: "Welcome to HealthCare Clinic",

            description: "Your Health Is Our Priority",



            aboutTitle: "About Us",

            aboutDescription:
            "Welcome to Al Shifa Clinic. We provide dental services using modern equipment and advanced techniques, while ensuring the best healthcare in a safe and comfortable environment because your smile is our first goal.",




            doctorSpecialty: "Consultant of Dentistry and Oral Surgery",

            doctorDescription:
            "Dr. Ehab Mahmoud has experience in dentistry and provides high-quality dental care using modern equipment and techniques while focusing on patient comfort and treatment quality.",




            servicesTitle: "Our Services",

            service1: "🦷 Teeth Cleaning",
            service2: "😁 Teeth Whitening",
            service3: "🦷 Dental Fillings",
            service4: "✨ Dental Braces",
            service5: "🦷 Dental Implants",
            service6: "👶 Children Dentistry",

            serviceDesc1: "Professional cleaning and tartar removal to maintain healthy teeth.",
            serviceDesc2: "A bright smile using the latest whitening techniques.",
            serviceDesc3: "Treating cavities using high-quality filling materials.",
            serviceDesc4: "Fixed and removable braces for a perfect smile.",
            serviceDesc5: "Replacing missing teeth with modern implant techniques.",
            serviceDesc6: "Complete dental care for children in a comfortable environment.",




            contactTitle: "Contact Us",

            contactDescription:
            "You can contact Al Shifa Clinic for booking and inquiries.",

            address: "📍 Address: Damietta",

            phone: "📞 Phone: 01000000000",

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

    if (name === "" || phone === "" || age === "" || date === "") {
        alert("من فضلك املأ جميع البيانات");
        return;
    }

    const whatsappNumber = "201101080403";

    const message =
`السلام عليكم،
أرغب في حجز موعد.

👤 الاسم: ${name}
📱 رقم الهاتف: ${phone}
🎂 السن: ${age}
📅 تاريخ الحجز: ${date}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}