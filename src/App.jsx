import './App.css'
import Question from './Question/Question';

const questions =  [
    {
        "id": 1,
        "questionTitle": "Allahın 'Ar-Rahman' isminin mənası nədir?",
        "img": "https://example.com/images/ar-rahman.png",
        "answers": [
            "Hər şeyi bilən",
            "Çox mərhəmətli",
            "Yaradan",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Çox mərhəmətli"
        ]
    },
    {
        "id": 2,
        "questionTitle": "Allahın 'Ar-Rahim' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/ar-rahim.png",
        "answers": [
            "Sonsuz mərhəmət sahibi",
            "Ədalətli",
            "Hikmət sahibi",
            "Çox bağışlayan"
        ],
        "correctAnswers": [
            "Sonsuz mərhəmət sahibi"
        ]
    },
    {
        "id": 3,
        "questionTitle": "Allahın 'Al-Malik' ismi nədir?",
        "img": "https://example.com/images/al-malik.png",
        "answers": [
            "Hökm sahibi",
            "Qoruyan",
            "Yaradan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Hökm sahibi"
        ]
    },
    {
        "id": 4,
        "questionTitle": "Allahın 'Al-Quddus' isminin mənası nədir?",
        "img": "https://example.com/images/al-quddus.png",
        "answers": [
            "Çox mərhəmətli",
            "Ədalətli",
            "Müqəddəs",
            "Yaradan"
        ],
        "correctAnswers": [
            "Müqəddəs"
        ]
    },
    {
        "id": 5,
        "questionTitle": "Allahın 'As-Salam' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/as-salam.png",
        "answers": [
            "Sülh və əmin-amanlıq təmin edən",
            "Bağışlayan",
            "Yaradan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Sülh və əmin-amanlıq təmin edən"
        ]
    },
    {
        "id": 6,
        "questionTitle": "Allahın 'Al-Mu’min' ismi nədir?",
        "img": "https://example.com/images/al-mu'min.png",
        "answers": [
            "İman verən",
            "Ruzini təmin edən",
            "Səxavətli",
            "Yaradan"
        ],
        "correctAnswers": [
            "İman verən"
        ]
    },
    {
        "id": 7,
        "questionTitle": "Allahın 'Al-Muhaymin' isminin mənası nədir?",
        "img": "https://example.com/images/al-muhaymin.png",
        "answers": [
            "Qoruyan",
            "Hikmət sahibi",
            "Müqəddəs",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Qoruyan"
        ]
    },
    {
        "id": 8,
        "questionTitle": "Allahın 'Al-Aziz' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-aziz.png",
        "answers": [
            "Güclü",
            "Hökm sahibi",
            "Yaradan",
            "Çox mərhəmətli"
        ],
        "correctAnswers": [
            "Güclü"
        ]
    },
    {
        "id": 9,
        "questionTitle": "Allahın 'Al-Jabbar' ismi nədir?",
        "img": "https://example.com/images/al-jabbar.png",
        "answers": [
            "Məcbur edən",
            "Hər şeyi bilən",
            "Səxavətli",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Məcbur edən"
        ]
    },
    {
        "id": 10,
        "questionTitle": "Allahın 'Al-Mutakabbir' isminin mənası nədir?",
        "img": "https://example.com/images/al-mutakabbir.png",
        "answers": [
            "Güclü",
            "Hikmət sahibi",
            "Məğrur",
            "Hər şeyi bilən"
        ],
        "correctAnswers": [
            "Məğrur"
        ]
    },
    {
        "id": 11,
        "questionTitle": "Allahın 'Al-Khaliq' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-khaliq.png",
        "answers": [
            "Yaradan",
            "Müqəddəs",
            "İman verən",
            "Səxavətli"
        ],
        "correctAnswers": [
            "Yaradan"
        ]
    },
    {
        "id": 12,
        "questionTitle": "Allahın 'Al-Bari' isminin mənası nədir?",
        "img": "https://example.com/images/al-bari.png",
        "answers": [
            "Hikmət sahibi",
            "Çox mərhəmətli",
            "Yoxdan var edən",
            "Ruzini təmin edən"
        ],
        "correctAnswers": [
            "Yoxdan var edən"
        ]
    },
    {
        "id": 13,
        "questionTitle": "Allahın 'Al-Musawwir' ismi nədir?",
        "img": "https://example.com/images/al-musawwir.png",
        "answers": [
            "Yaradan",
            "Hər şeyi bilən",
            "Görən",
            "Forma verən"
        ],
        "correctAnswers": [
            "Forma verən"
        ]
    },
    {
        "id": 14,
        "questionTitle": "Allahın 'Al-Ghaffar' isminin mənası nədir?",
        "img": "https://example.com/images/al-ghaffar.png",
        "answers": [
            "Çox bağışlayan",
            "Məcbur edən",
            "İman verən",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Çox bağışlayan"
        ]
    },
    {
        "id": 15,
        "questionTitle": "Allahın 'Al-Qahhar' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-qahhar.png",
        "answers": [
            "Məcbur edən",
            "Güclü",
            "Hikmət sahibi",
            "Çox mərhəmətli"
        ],
        "correctAnswers": [
            "Məcbur edən"
        ]
    },
    {
        "id": 16,
        "questionTitle": "Allahın 'Al-Wahhab' isminin mənası nədir?",
        "img": "https://example.com/images/al-wahhab.png",
        "answers": [
            "Sonsuz mərhəmət sahibi",
            "Verən",
            "Hər şeyi bilən",
            "Güclü"
        ],
        "correctAnswers": [
            "Verən"
        ]
    },
    {
        "id": 17,
        "questionTitle": "Allahın 'Ar-Razzaq' ismi nədir?",
        "img": "https://example.com/images/ar-razzaq.png",
        "answers": [
            "Ruzini təmin edən",
            "İman verən",
            "Hikmət sahibi",
            "Hər şeyi bilən"
        ],
        "correctAnswers": [
            "Ruzini təmin edən"
        ]
    },
    {
        "id": 18,
        "questionTitle": "Allahın 'Al-Fattah' isminin mənası nədir?",
        "img": "https://example.com/images/al-fattah.png",
        "answers": [
            "Bağışlayan",
            "Hüquq sahibi",
            "Açıcı",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Açıcı"
        ]
    },
    {
        "id": 19,
        "questionTitle": "Allahın 'Al-Alim' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-alim.png",
        "answers": [
            "Hər şeyi bilən",
            "Məcbur edən",
            "Güclü",
            "Yaradan"
        ],
        "correctAnswers": [
            "Hər şeyi bilən"
        ]
    },
    {
        "id": 20,
        "questionTitle": "Allahın 'Al-Kabir' isminin mənası nədir?",
        "img": "https://example.com/images/al-kabir.png",
        "answers": [
            "Böyük",
            "Güclü",
            "Hikmət sahibi",
            "İman verən"
        ],
        "correctAnswers": [
            "Böyük"
        ]
    },
    {
        "id": 21,
        "questionTitle": "Allahın 'Al-Hafiz' ismi nədir?",
        "img": "https://example.com/images/al-hafiz.png",
        "answers": [
            "Qoruyan",
            "İman verən",
            "Yaradan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Qoruyan"
        ]
    },
    {
        "id": 22,
        "questionTitle": "Allahın 'Al-Muqit' isminin mənası nədir?",
        "img": "https://example.com/images/al-muqit.png",
        "answers": [
            "Susturucu",
            "Ruzini təmin edən",
            "İman verən",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Susturucu"
        ]
    },
    {
        "id": 23,
        "questionTitle": "Allahın 'Al-Hasib' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-hasib.png",
        "answers": [
            "Hesab görən",
            "Hikmət sahibi",
            "Ruzini təmin edən",
            "İman verən"
        ],
        "correctAnswers": [
            "Hesab görən"
        ]
    },
    {
        "id": 24,
        "questionTitle": "Allahın 'Al-Jalil' isminin mənası nədir?",
        "img": "https://example.com/images/al-jalil.png",
        "answers": [
            "Müqəddəs",
            "Böyük",
            "Yaradan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Böyük"
        ]
    },
    {
        "id": 25,
        "questionTitle": "Allahın 'Al-Karim' ismi nədir?",
        "img": "https://example.com/images/al-karim.png",
        "answers": [
            "Səxavətli",
            "İman verən",
            "Yaradan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Səxavətli"
        ]
    },
    {
        "id": 26,
        "questionTitle": "Allahın 'Ar-Raqib' isminin mənası nədir?",
        "img": "https://example.com/images/ar-raqib.png",
        "answers": [
            "Nəzarət edən",
            "Hikmət sahibi",
            "Çox mərhəmətli",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Nəzarət edən"
        ]
    },
    {
        "id": 27,
        "questionTitle": "Allahın 'Al-Mujib' ismi nədir?",
        "img": "https://example.com/images/al-mujib.png",
        "answers": [
            "Cavab verən",
            "Sonsuz mərhəmət sahibi",
            "İman verən",
            "Yaradan"
        ],
        "correctAnswers": [
            "Cavab verən"
        ]
    },
    {
        "id": 28,
        "questionTitle": "Allahın 'Al-Wasi'' isminin mənası nədir?",
        "img": "https://example.com/images/al-wasi.png",
        "answers": [
            "Hər şeyi əhatə edən",
            "Güclü",
            "İman verən",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Hər şeyi əhatə edən"
        ]
    },
    {
        "id": 29,
        "questionTitle": "Allahın 'Al-Hakim' ismi nədir?",
        "img": "https://example.com/images/al-hakim.png",
        "answers": [
            "Hikmət sahibi",
            "Ruzini təmin edən",
            "Yaradan",
            "Səxavətli"
        ],
        "correctAnswers": [
            "Hikmət sahibi"
        ]
    },
    {
        "id": 30,
        "questionTitle": "Allahın 'Al-Wadud' isminin mənası nədir?",
        "img": "https://example.com/images/al-wadud.png",
        "answers": [
            "Çox sevən",
            "Bağışlayan",
            "Hikmət sahibi",
            "Yaradan"
        ],
        "correctAnswers": [
            "Çox sevən"
        ]
    },
    {
        "id": 31,
        "questionTitle": "Allahın 'Al-Majid' ismi nədir?",
        "img": "https://example.com/images/al-majid.png",
        "answers": [
            "Şanlı",
            "Hikmət sahibi",
            "Bağışlayan",
            "İman verən"
        ],
        "correctAnswers": [
            "Şanlı"
        ]
    },
    {
        "id": 32,
        "questionTitle": "Allahın 'Al-Ba'ith' isminin mənası nədir?",
        "img": "https://example.com/images/al-ba'ith.png",
        "answers": [
            "Dirildən",
            "Hikmət sahibi",
            "Ruzini təmin edən",
            "Müqəddəs"
        ],
        "correctAnswers": [
            "Dirildən"
        ]
    },
    {
        "id": 33,
        "questionTitle": "Allahın 'Ash-Shahid' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/ash-shahid.png",
        "answers": [
            "Şahid olan",
            "Sonsuz mərhəmət sahibi",
            "Hikmət sahibi",
            "Ruzini təmin edən"
        ],
        "correctAnswers": [
            "Şahid olan"
        ]
    },
    {
        "id": 34,
        "questionTitle": "Allahın 'Al-Haqq' isminin mənası nədir?",
        "img": "https://example.com/images/al-haqq.png",
        "answers": [
            "Həqiqət",
            "Yaradan",
            "Hikmət sahibi",
            "Güclü"
        ],
        "correctAnswers": [
            "Həqiqət"
        ]
    },
    {
        "id": 35,
        "questionTitle": "Allahın 'Al-Wakil' ismi nədir?",
        "img": "https://example.com/images/al-wakil.png",
        "answers": [
            "Vəkil",
            "Hikmət sahibi",
            "Bağışlayan",
            "Ruzini təmin edən"
        ],
        "correctAnswers": [
            "Vəkil"
        ]
    },
    {
        "id": 36,
        "questionTitle": "Allahın 'Al-Qawiyy' isminin mənası nədir?",
        "img": "https://example.com/images/al-qawiyy.png",
        "answers": [
            "Güclü",
            "Sonsuz mərhəmət sahibi",
            "Bağışlayan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Güclü"
        ]
    },
    {
        "id": 37,
        "questionTitle": "Allahın 'Al-Matin' ismi nədir?",
        "img": "https://example.com/images/al-matin.png",
        "answers": [
            "Möhkəm",
            "Yaradan",
            "Hikmət sahibi",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Möhkəm"
        ]
    },
    {
        "id": 38,
        "questionTitle": "Allahın 'Al-Waliyy' isminin mənası nədir?",
        "img": "https://example.com/images/al-waliyy.png",
        "answers": [
            "Dost",
            "Hikmət sahibi",
            "Məcbur edən",
            "Yaradan"
        ],
        "correctAnswers": [
            "Dost"
        ]
    },
    {
        "id": 39,
        "questionTitle": "Allahın 'Al-Hamid' ismi nədir?",
        "img": "https://example.com/images/al-hamid.png",
        "answers": [
            "Şükür edən",
            "Çox mərhəmətli",
            "Ruzini təmin edən",
            "İman verən"
        ],
        "correctAnswers": [
            "Şükür edən"
        ]
    },
    {
        "id": 40,
        "questionTitle": "Allahın 'Al-Muhsi' isminin mənası nədir?",
        "img": "https://example.com/images/al-muhsi.png",
        "answers": [
            "Hesab edən",
            "Hikmət sahibi",
            "Yaradan",
            "Çox bağışlayan"
        ],
        "correctAnswers": [
            "Hesab edən"
        ]
    },
    {
        "id": 41,
        "questionTitle": "Allahın 'Al-Mubdi' ismi nədir?",
        "img": "https://example.com/images/al-mubdi.png",
        "answers": [
            "Başlatan",
            "İman verən",
            "Hikmət sahibi",
            "Yaradan"
        ],
        "correctAnswers": [
            "Başlatan"
        ]
    },
    {
        "id": 42,
        "questionTitle": "Allahın 'Al-Mu’id' isminin mənası nədir?",
        "img": "https://example.com/images/al-mu'id.png",
        "answers": [
            "Geri qaytaran",
            "Çox mərhəmətli",
            "Yaradan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Geri qaytaran"
        ]
    },
    {
        "id": 43,
        "questionTitle": "Allahın 'Al-Muhyi' ismi nədir?",
        "img": "https://example.com/images/al-muhyi.png",
        "answers": [
            "Dirildən",
            "Bağışlayan",
            "Hikmət sahibi",
            "Ruzini təmin edən"
        ],
        "correctAnswers": [
            "Dirildən"
        ]
    },
    {
        "id": 44,
        "questionTitle": "Allahın 'Al-Mumit' isminin mənası nədir?",
        "img": "https://example.com/images/al-mumit.png",
        "answers": [
            "Öldürən",
            "Hikmət sahibi",
            "İman verən",
            "Çox bağışlayan"
        ],
        "correctAnswers": [
            "Öldürən"
        ]
    },
    {
        "id": 45,
        "questionTitle": "Allahın 'Al-Hayy' ismi nədir?",
        "img": "https://example.com/images/al-hayy.png",
        "answers": [
            "Canlı",
            "Çox mərhəmətli",
            "Bağışlayan",
            "Yaradan"
        ],
        "correctAnswers": [
            "Canlı"
        ]
    },
    {
        "id": 46,
        "questionTitle": "Allahın 'Al-Qayyum' isminin mənası nədir?",
        "img": "https://example.com/images/al-qayyum.png",
        "answers": [
            "Daim var olan",
            "Güclü",
            "Hikmət sahibi",
            "Ruzini təmin edən"
        ],
        "correctAnswers": [
            "Daim var olan"
        ]
    },
    {
        "id": 47,
        "questionTitle": "Allahın 'Al-Wajid' ismi nədir?",
        "img": "https://example.com/images/al-wajid.png",
        "answers": [
            "Tapılan",
            "Hikmət sahibi",
            "Yaradan",
            "Çox bağışlayan"
        ],
        "correctAnswers": [
            "Tapılan"
        ]
    },
    {
        "id": 48,
        "questionTitle": "Allahın 'Al-Majid' isminin mənası nədir?",
        "img": "https://example.com/images/al-majid.png",
        "answers": [
            "Şanlı",
            "Yaradan",
            "Sonsuz mərhəmət sahibi",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Şanlı"
        ]
    },
    {
        "id": 49,
        "questionTitle": "Allahın 'Al-Wahid' ismi nədir?",
        "img": "https://example.com/images/al-wahid.png",
        "answers": [
            "Bir olan",
            "Hikmət sahibi",
            "Çox bağışlayan",
            "Ruzini təmin edən"
        ],
        "correctAnswers": [
            "Bir olan"
        ]
    },
    {
        "id": 50,
        "questionTitle": "Allahın 'Al-Ahad' isminin mənası nədir?",
        "img": "https://example.com/images/al-ahad.png",
        "answers": [
            "Tək olan",
            "Hikmət sahibi",
            "Güclü",
            "İman verən"
        ],
        "correctAnswers": [
            "Tək olan"
        ]
    },
    {
        "id": 51,
        "questionTitle": "Allahın 'As-Samad' ismi nədir?",
        "img": "https://example.com/images/as-samad.png",
        "answers": [
            "Heç bir şeyə ehtiyacı olmayan",
            "Hikmət sahibi",
            "Bağışlayan",
            "İman verən"
        ],
        "correctAnswers": [
            "Heç bir şeyə ehtiyacı olmayan"
        ]
    },
    {
        "id": 52,
        "questionTitle": "Allahın 'Al-Qadir' isminin mənası nədir?",
        "img": "https://example.com/images/al-qadir.png",
        "answers": [
            "Güclü",
            "Hikmət sahibi",
            "İman verən",
            "Hər şeyi bilən"
        ],
        "correctAnswers": [
            "Güclü"
        ]
    },
    {
        "id": 53,
        "questionTitle": "Allahın 'Al-Muqtadir' ismi nədir?",
        "img": "https://example.com/images/al-muqtadir.png",
        "answers": [
            "Qadir",
            "Yaradan",
            "Sonsuz mərhəmət sahibi",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Qadir"
        ]
    },
    {
        "id": 54,
        "questionTitle": "Allahın 'Al-Muqaddim' isminin mənası nədir?",
        "img": "https://example.com/images/al-muqaddim.png",
        "answers": [
            "İrəlilədən",
            "Bağışlayan",
            "Hikmət sahibi",
            "Yaradan"
        ],
        "correctAnswers": [
            "İrəlilədən"
        ]
    },
    {
        "id": 55,
        "questionTitle": "Allahın 'Al-Mu’akhkhir' ismi nədir?",
        "img": "https://example.com/images/al-mu'akhkhir.png",
        "answers": [
            "Gecikdirən",
            "Çox mərhəmətli",
            "Hikmət sahibi",
            "İman verən"
        ],
        "correctAnswers": [
            "Gecikdirən"
        ]
    },
    {
        "id": 56,
        "questionTitle": "Allahın 'Al-Awwal' isminin mənası nədir?",
        "img": "https://example.com/images/al-awwal.png",
        "answers": [
            "İlk",
            "Bağışlayan",
            "Güclü",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "İlk"
        ]
    },
    {
        "id": 57,
        "questionTitle": "Allahın 'Al-Akhir' ismi nədir?",
        "img": "https://example.com/images/al-akhir.png",
        "answers": [
            "Son",
            "Hikmət sahibi",
            "İman verən",
            "Ruzini təmin edən"
        ],
        "correctAnswers": [
            "Son"
        ]
    },
    {
        "id": 58,
        "questionTitle": "Allahın 'Al-Zahir' isminin mənası nədir?",
        "img": "https://example.com/images/al-zahir.png",
        "answers": [
            "Aşkar",
            "Hikmət sahibi",
            "Bağışlayan",
            "Yaradan"
        ],
        "correctAnswers": [
            "Aşkar"
        ]
    },
    {
        "id": 59,
        "questionTitle": "Allahın 'Al-Batin' ismi nədir?",
        "img": "https://example.com/images/al-batin.png",
        "answers": [
            "Gizli",
            "Hikmət sahibi",
            "İman verən",
            "Çox bağışlayan"
        ],
        "correctAnswers": [
            "Gizli"
        ]
    },
    {
        "id": 60,
        "questionTitle": "Allahın 'Al-Wali' isminin mənası nədir?",
        "img": "https://example.com/images/al-wali.png",
        "answers": [
            "Dost",
            "Hikmət sahibi",
            "Bağışlayan",
            "Yaradan"
        ],
        "correctAnswers": [
            "Dost"
        ]
    },
    {
        "id": 61,
        "questionTitle": "Allahın 'Al-Mutaali' ismi nədir?",
        "img": "https://example.com/images/al-mutaali.png",
        "answers": [
            "Uca",
            "Güclü",
            "Hikmət sahibi",
            "İman verən"
        ],
        "correctAnswers": [
            "Uca"
        ]
    },
    {
        "id": 62,
        "questionTitle": "Allahın 'Al-Barr' isminin mənası nədir?",
        "img": "https://example.com/images/al-barr.png",
        "answers": [
            "Xeyirxah",
            "Yaradan",
            "Bağışlayan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Xeyirxah"
        ]
    },
    {
        "id": 63,
        "questionTitle": "Allahın 'At-Tawwab' ismi nədir?",
        "img": "https://example.com/images/at-tawwab.png",
        "answers": [
            "Tövbələri qəbul edən",
            "İman verən",
            "Güclü",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Tövbələri qəbul edən"
        ]
    },
    {
        "id": 64,
        "questionTitle": "Allahın 'Al-Muntaqim' isminin mənası nədir?",
        "img": "https://example.com/images/al-muntaqim.png",
        "answers": [
            "İntiqam alan",
            "Yaradan",
            "Hikmət sahibi",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "İntiqam alan"
        ]
    },
    {
        "id": 65,
        "questionTitle": "Allahın 'Al-Afuww' ismi nədir?",
        "img": "https://example.com/images/al-afuww.png",
        "answers": [
            "Bağışlayan",
            "Hikmət sahibi",
            "Çox mərhəmətli",
            "Yaradan"
        ],
        "correctAnswers": [
            "Bağışlayan"
        ]
    },
    {
        "id": 66,
        "questionTitle": "Allahın 'Ar-Ra'uf' isminin mənası nədir?",
        "img": "https://example.com/images/ar-ra'uf.png",
        "answers": [
            "Çox mərhəmətli",
            "Yaradan",
            "Hikmət sahibi",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Çox mərhəmətli"
        ]
    },
    {
        "id": 67,
        "questionTitle": "Allahın 'Al-Mu’min' ismi nədir?",
        "img": "https://example.com/images/al-mu'min.png",
        "answers": [
            "İman verən",
            "Hikmət sahibi",
            "Sonsuz mərhəmət sahibi",
            "Yaradan"
        ],
        "correctAnswers": [
            "İman verən"
        ]
    },
    {
        "id": 68,
        "questionTitle": "Allahın 'Al-Muhaymin' isminin mənası nədir?",
        "img": "https://example.com/images/al-muhaymin.png",
        "answers": [
            "Nəzarət edən",
            "Bağışlayan",
            "Yaradan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Nəzarət edən"
        ]
    },
    {
        "id": 69,
        "questionTitle": "Allahın 'Al-Aziz' ismi nədir?",
        "img": "https://example.com/images/al-aziz.png",
        "answers": [
            "İzzətli",
            "Hikmət sahibi",
            "Ruzini təmin edən",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "İzzətli"
        ]
    },
    {
        "id": 70,
        "questionTitle": "Allahın 'Al-Jabbar' isminin mənası nədir?",
        "img": "https://example.com/images/al-jabbar.png",
        "answers": [
            "Qüvvətli",
            "Yaradan",
            "Hikmət sahibi",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Qüvvətli"
        ]
    },
    {
        "id": 71,
        "questionTitle": "Allahın 'Al-Mutakabbir' ismi nədir?",
        "img": "https://example.com/images/al-mutakabbir.png",
        "answers": [
            "Böyüklükdə tək olan",
            "Hikmət sahibi",
            "İman verən",
            "Sonsuz mərhəmət sahibi"
        ],
        "correctAnswers": [
            "Böyüklükdə tək olan"
        ]
    },
    {
        "id": 72,
        "questionTitle": "Allahın 'Al-Khaliq' isminin mənası nədir?",
        "img": "https://example.com/images/al-khaliq.png",
        "answers": [
            "Yaradan",
            "Hikmət sahibi",
            "Bağışlayan",
            "İman verən"
        ],
        "correctAnswers": [
            "Yaradan"
        ]
    },
    {
        "id": 73,
        "questionTitle": "Allahın 'Al-Bari' ismi nədir?",
        "img": "https://example.com/images/al-bari.png",
        "answers": [
            "Yaradan",
            "Hikmət sahibi",
            "Sonsuz mərhəmət sahibi",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Yaradan"
        ]
    },
    {
        "id": 74,
        "questionTitle": "Allahın 'Al-Musavvir' isminin mənası nədir?",
        "img": "https://example.com/images/al-musavvir.png",
        "answers": [
            "Şəkil verən",
            "Hikmət sahibi",
            "Yaradan",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Şəkil verən"
        ]
    },
    {
        "id": 75,
        "questionTitle": "Allahın 'Al-Ghaffar' ismi nədir?",
        "img": "https://example.com/images/al-ghaffar.png",
        "answers": [
            "Bağışlayan",
            "İman verən",
            "Güclü",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Bağışlayan"
        ]
    },
    {
        "id": 76,
        "questionTitle": "Allahın 'Al-Qahhar' isminin mənası nədir?",
        "img": "https://example.com/images/al-qahhar.png",
        "answers": [
            "Qahir",
            "Hikmət sahibi",
            "Ruzini təmin edən",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Qahir"
        ]
    },
    {
        "id": 77,
        "questionTitle": "Allahın 'Al-Wadud' ismi nədir?",
        "img": "https://example.com/images/al-wadud.png",
        "answers": [
            "Çox sevən",
            "İman verən",
            "Bağışlayan",
            "Yaradan"
        ],
        "correctAnswers": [
            "Çox sevən"
        ]
    },
    {
        "id": 78,
        "questionTitle": "Allahın 'Al-Hafiz' isminin mənası nədir?",
        "img": "https://example.com/images/al-hafiz.png",
        "answers": [
            "Qoruyan",
            "Sonsuz mərhəmət sahibi",
            "Yaradan",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Qoruyan"
        ]
    },
    {
        "id": 79,
        "questionTitle": "Allahın 'Al-Muqit' ismi nədir?",
        "img": "https://example.com/images/al-muqit.png",
        "answers": [
            "Susturucu",
            "Ruzini təmin edən",
            "İman verən",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Susturucu"
        ]
    },
             {
        "id": 80,
        "questionTitle": "Allahın 'Al-Hasib' isminin mənası nədir?",
        "img": "https://example.com/images/al-hasib.png",
        "answers": [
            "Hesab görən",
            "Hikmət sahibi",
            "Ruzini təmin edən",
            "İman verən"
        ],
        "correctAnswers": [
            "Hesab görən"
        ]
    }
];
  



function App() {
    return (
        <>
            <Question questions={questions} />
        </>
    )
}

export default App
