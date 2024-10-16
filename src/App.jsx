import "./App.css";
import EsmaulHusna from "./components/EsmaulHusna/EsmaulHusna";
import { Routes, Route, useLocation } from "react-router-dom";
import Tefsir from "./components/Tefsir/Tefsir";
import Home from "./components/Home/Home";
import Footer from "./layout/footer/Footer";
import NavBar from "./layout/navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Fiqh from "./components/Fiqh/Fiqh";

const questions = [
    {
        id: 1,
        questionTitle: "Allahın 'Ar-Rahman' isminin mənası nədir?",
        img: "https://example.com/images/ar-rahman.png",
        answers: ["Hər şeyi bilən", "Çox mərhəmətli", "Yaradan", "Bağışlayan"],
        correctAnswers: ["Çox mərhəmətli"],
    },
    {
        id: 2,
        questionTitle: "Allahın 'Ar-Rahim' ismi nəyi ifadə edir?",
        img: "https://example.com/images/ar-rahim.png",
        answers: [
            "Sonsuz mərhəmət sahibi",
            "Ədalətli",
            "Hikmət sahibi",
            "Çox bağışlayan",
        ],
        correctAnswers: ["Sonsuz mərhəmət sahibi"],
    },
    {
        id: 3,
        questionTitle: "Allahın 'Al-Malik' ismi nədir?",
        img: "https://example.com/images/al-malik.png",
        answers: ["Hökm sahibi", "Qoruyan", "Yaradan", "Hikmət sahibi"],
        correctAnswers: ["Hökm sahibi"],
    },
    {
        id: 4,
        questionTitle: "Allahın 'Al-Quddus' isminin mənası nədir?",
        img: "https://example.com/images/al-quddus.png",
        answers: ["Çox mərhəmətli", "Ədalətli", "Müqəddəs", "Yaradan"],
        correctAnswers: ["Müqəddəs"],
    },
    {
        id: 5,
        questionTitle: "Allahın 'As-Salam' ismi nəyi ifadə edir?",
        img: "https://example.com/images/as-salam.png",
        answers: [
            "Sülh və əmin-amanlıq təmin edən",
            "Bağışlayan",
            "Yaradan",
            "Hikmət sahibi",
        ],
        correctAnswers: ["Sülh və əmin-amanlıq təmin edən"],
    },
    {
        id: 6,
        questionTitle: "Allahın 'Al-Mu’min' ismi nədir?",
        img: "https://example.com/images/al-mu'min.png",
        answers: ["İman verən", "Ruzini təmin edən", "Səxavətli", "Yaradan"],
        correctAnswers: ["İman verən"],
    },
    {
        id: 7,
        questionTitle: "Allahın 'Al-Muhaymin' isminin mənası nədir?",
        img: "https://example.com/images/al-muhaymin.png",
        answers: ["Qoruyan", "Hikmət sahibi", "Müqəddəs", "Bağışlayan"],
        correctAnswers: ["Qoruyan"],
    },
    {
        id: 8,
        questionTitle: "Allahın 'Al-Aziz' ismi nəyi ifadə edir?",
        img: "https://example.com/images/al-aziz.png",
        answers: ["Güclü", "Hökm sahibi", "Yaradan", "Çox mərhəmətli"],
        correctAnswers: ["Güclü"],
    },
    {
        id: 9,
        questionTitle: "Allahın 'Al-Jabbar' ismi nədir?",
        img: "https://example.com/images/al-jabbar.png",
        answers: ["Məcbur edən", "Hər şeyi bilən", "Səxavətli", "Bağışlayan"],
        correctAnswers: ["Məcbur edən"],
    },
    {
        id: 10,
        questionTitle: "Allahın 'Al-Mutakabbir' isminin mənası nədir?",
        img: "https://example.com/images/al-mutakabbir.png",
        answers: ["Güclü", "Hikmət sahibi", "Məğrur", "Hər şeyi bilən"],
        correctAnswers: ["Məğrur"],
    },
];

const tafsirQuestions = [
    {
        id: 1,
        questionTitle: "Təfsir elminin əsas məqsədləri nələrdir?",
        img: "https://example.com/images/tafsir-objectives.png",
        answers: [
            "Qurani-Kərimi daha yaxşı anlamaq",
            "Dini mərasimləri yerinə yetirmək",
            "Ayələrin məna və səbəbşərhini izah etmək",
            "İslam tarixini öyrənmək",
        ],
        correctAnswers: [
            "Qurani-Kərimi daha yaxşı anlamaq",
            "Ayələrin məna və səbəbşərhini izah etmək",
        ],
    },
    {
        id: 2,
        questionTitle: "Təfsir elmi hansı mənbələrə əsaslanır?",
        img: "https://example.com/images/tafsir-sources.png",
        answers: ["Qurani-Kərim", "Hədislər", "Fəlsəfi əsərlər", "Tarixi sənədlər"],
        correctAnswers: ["Qurani-Kərim", "Hədislər"],
    },
    {
        id: 3,
        questionTitle: "Təfsirin əsas növləri hansılardır?",
        img: "https://example.com/images/tafsir-types.png",
        answers: [
            "Təfsir bi'r-Ra'y",
            "Təfsir bil-Ma'thur",
            "Sufi Təfsir",
            "Şəriət Təfsiri",
        ],
        correctAnswers: ["Təfsir bi'r-Ra'y", "Təfsir bil-Ma'thur", "Sufi Təfsir"],
    },
    {
        id: 4,
        questionTitle: "Təfsir bil-Ma'thur nə deməkdir?",
        img: "https://example.com/images/tafsir-bil-mathur.png",
        answers: [
            "Quranda və hədislərdə verilən izahlar əsasında təfsir",
            "Alimlərin şəxsi fikirləri əsasında təfsir",
            "Ərəbcə dil qaydalarına əsaslanan təfsir",
            "Quranda verilən elmi mövzuların təfsiri",
        ],
        correctAnswers: ["Quranda və hədislərdə verilən izahlar əsasında təfsir"],
    },
    {
        id: 5,
        questionTitle: "Təfsir bil-Ra'y necə izah edilir?",
        img: "https://example.com/images/tafsir-bil-ray.png",
        answers: [
            "Alimlərin şəxsi fikirlərinə əsaslanan təfsir",
            "Qurani-Kərimə əsaslanan izahlar",
            "Hədislərin təfsiri",
            "Quranda verilən elmi mövzuların izahı",
        ],
        correctAnswers: [
            "Alimlərin şəxsi fikirlərinə əsaslanan təfsir",
            "Ərəbcə dil qaydalarına əsaslanan təfsir",
        ],
    },
    {
        id: 6,
        questionTitle: "İbn Kəsir haqqında doğru olanları seçin:",
        img: "https://example.com/images/ibn-kathir.png",
        answers: [
            "Məşhur təfsirçi alim",
            "Hədis ravisi",
            "İslam filosofu",
            "Şəriət qanunlarının tərtibatçısı",
        ],
        correctAnswers: ["Məşhur təfsirçi alim", "Hədis ravisi"],
    },
    {
        id: 7,
        questionTitle: "Təfsir yazmağın şərtləri nələrdir?",
        img: "https://example.com/images/tafsir-conditions.png",
        answers: [
            "Ərəb dilini və Quranın üslubunu bilmək",
            "Sadəcə hədisləri oxumaq",
            "Fəlsəfə öyrənmək",
            "Tarix kitabları oxumaq",
        ],
        correctAnswers: [
            "Ərəb dilini və Quranın üslubunu bilmək",
            "Hədisləri və ərəb dilini yaxşı bilmək",
        ],
    },
    {
        id: 8,
        questionTitle: "Sufi təfsiri nəyi əhatə edir?",
        img: "https://example.com/images/sufi-tafsir.png",
        answers: [
            "Quranın mənəvi və batini izahları",
            "Quranın hüquqi məsələlərə aid izahları",
            "Quranın dil qaydalarına əsaslanan izahları",
            "Tarixi hadisələrin təfsiri",
        ],
        correctAnswers: [
            "Quranın mənəvi və batini izahları",
            "Quranın ruhani mənalarını açıqlamaq",
        ],
    },
    {
        id: 9,
        questionTitle: "Qurani-Kərimin ilk təfsiri hansı dilə tərcümə edilmişdir?",
        img: "https://example.com/images/quran-translation.png",
        answers: ["Ərəb dilinə", "Fars dilinə", "Türk dilinə", "İngilis dilinə"],
        correctAnswers: ["Fars dilinə", "Türk dilinə"],
    },
    {
        id: 10,
        questionTitle: "Quranın təfsiri nə vaxtdan etibarən başlayıb?",
        img: "https://example.com/images/tafsir-history.png",
        answers: [
            "Peyğəmbər dövründən",
            "Abbasi dövründən",
            "Osmanlı dövründən",
            "Əməvilər dövründən",
        ],
        correctAnswers: ["Peyğəmbər dövründən", "Əməvilər dövründən"],
    },
];

const fiqhQuestions = [
    {
        id: 1,
        questionTitle: "Fiqh nədir?",
        img: "https://example.com/image1.jpg",
        answers: [
            "İslamın ibadət və əməli hökmlərinin öyrənilməsi elmi",
            "Ərəb dilinin qrammatikası",
            "Quranın təfsiri",
            "Hədislərin öyrənilməsi",
        ],
        correctAnswers: ["İslamın ibadət və əməli hökmlərinin öyrənilməsi elmi"],
    },
    {
        id: 2,
        questionTitle: "Namazın fərzlərindən biri hansıdır?",
        img: "https://example.com/image2.jpg",
        answers: ["Zəkat vermək", "Rüku", "Oruc tutmaq", "Həccə getmək"],
        correctAnswers: ["Rüku"],
    },
    {
        id: 3,
        questionTitle: "Fiqhdə hansı kitab ən əsas mənbə sayılır?",
        img: "https://example.com/image3.jpg",
        answers: ["İcma", "Quran", "Qiyas", "Sünnə"],
        correctAnswers: ["Quran"],
    },
    {
        id: 4,
        questionTitle: "Qadının başı örtülü olmalıdırmı?",
        img: "https://example.com/image4.jpg",
        answers: [
            "Fərz deyil",
            "Ərindən icazə alaraq qərar verə bilər",
            "Yalnız məsciddə",
            "Bəli, hicab vacibdir",
        ],
        correctAnswers: ["Bəli, hicab vacibdir"],
    },
    {
        id: 5,
        questionTitle: "Hansı namaz qəza oluna bilər?",
        img: "https://example.com/image5.jpg",
        answers: [
            "Təhəccüd namazı",
            "Nafilə namazı",
            "Aşura günü namazı",
            "Vacib namaz",
        ],
        correctAnswers: ["Vacib namaz"],
    },
    {
        id: 6,
        questionTitle: "Həcdə hansı mərhələ vacibdir?",
        img: "https://example.com/image6.jpg",
        answers: [
            "Sadəcə Kəbəni görmək",
            "Ərəfatda durmaq",
            "Hər il orada olmaq",
            "Medinəyə getmək",
        ],
        correctAnswers: ["Ərəfatda durmaq"],
    },
    {
        id: 7,
        questionTitle: "Hansı hallarda oruc qəzaya qalır?",
        img: "https://example.com/image7.jpg",
        answers: [
            "Xəstəlik səbəbilə",
            "Sadəcə susuz qalanda",
            "Gecə yatdıqda",
            "Məscidə getmədikdə",
        ],
        correctAnswers: ["Xəstəlik səbəbilə"],
    },
    {
        id: 8,
        questionTitle: "Zəkat nə zaman vacib olur?",
        img: "https://example.com/image8.jpg",
        answers: [
            "Sadəcə Ramazan ayında",
            "Mal-dövlət nisab miqdarına çatdıqda",
            "Övlad sahibi olduqda",
            "Həcc vaxtı",
        ],
        correctAnswers: ["Mal-dövlət nisab miqdarına çatdıqda"],
    },
    {
        id: 9,
        questionTitle: "Fiqh elmində qiyas nədir?",
        img: "https://example.com/image9.jpg",
        answers: [
            "Hədislərin tərtibatı",
            "Şəriətdə hökm olmayan bir məsələni, hökmü olan bir məsələyə bənzədərək hökm vermək",
            "Ərəb dilinin qaydaları",
            "İslam tarixi ilə bağlı məlumatlar",
        ],
        correctAnswers: [
            "Şəriətdə hökm olmayan bir məsələni, hökmü olan bir məsələyə bənzədərək hökm vermək",
        ],
    },
    {
        id: 10,
        questionTitle: "Təharət hansı halda pozulur?",
        img: "https://example.com/image10.jpg",
        answers: [
            "Qurani-Kərim oxunduqda",
            "Sidik və ya nəcasət çıxışı",
            "Sadəcə əl yuyulmadıqda",
            "Bədənə su dəymədikdə",
        ],
        correctAnswers: ["Sidik və ya nəcasət çıxışı"],
    },
];

function App() {
    const location = useLocation();
    const isAuthPage =
        location.pathname === "/login" || location.pathname === "/register";

    return (
        <>
            {!isAuthPage && <NavBar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/esmaulhusna"
                    element={<EsmaulHusna questions={questions} />}
                />
                <Route
                    path="/tefsir"
                    element={<Tefsir questions={tafsirQuestions} />}
                />
                <Route path="/fiqh" element={<Fiqh questions={fiqhQuestions} />} />
            </Routes>
            {!isAuthPage && <Footer />}
        </>
    );
}

export default App;
