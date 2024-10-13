import './App.css'
import Question from './Question/Question';

const questions = [
    {
        "id": 1,
        "questionTitle": "Allahın 'Rəhman' isminin mənası nədir?",
        "img": "https://example.com/images/rahman.png",
        "answers": [
            "Bağışlayan",
            "Çox mərhəmətli",
            "Hər şeyi bilən",
            "Ədalətli"
        ],
        "correctAnswers": [
            "Çox mərhəmətli"
        ]
    },
    {
        "id": 2,
        "questionTitle": "Allahın 'Qadir' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/qadir.png",
        "answers": [
            "Hər şeyə gücü çatan",
            "Ən gözəl yaradan",
            "Qoruyan",
            "Hər şeyi eşidən"
        ],
        "correctAnswers": [
            "Hər şeyə gücü çatan"
        ]
    },
    {
        "id": 3,
        "questionTitle": "Allahın 'Əl-Alim' ismi nədir?",
        "img": "https://example.com/images/al-alim.png",
        "answers": [
            "Hər şeyi bilən",
            "Çox səxavətli",
            "Ədalətli",
            "Daim var olan"
        ],
        "correctAnswers": [
            "Hər şeyi bilən"
        ]
    },
    {
        "id": 4,
        "questionTitle": "Allahın 'Ər-Rəzzaq' isminin mənası nədir?",
        "img": "https://example.com/images/ar-razaq.png",
        "answers": [
            "Hidayət verən",
            "Ruzini təmin edən",
            "Bağışlayan",
            "Yoxdan var edən"
        ],
        "correctAnswers": [
            "Ruzini təmin edən"
        ]
    },
    {
        "id": 5,
        "questionTitle": "Allahın 'Əl-Hakim' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-hakim.png",
        "answers": [
            "Hikmət sahibi",
            "Ədalətli",
            "Çox mərhəmətli",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Hikmət sahibi"
        ]
    },
    {
        "id": 6,
        "questionTitle": "Allahın 'Əl-Basir' isminin mənası nədir?",
        "img": "https://example.com/images/al-basir.png",
        "answers": [
            "Hər şeyi eşidən",
            "Hər şeyi görən",
            "Hər şeyi bilən",
            "Əbədi olan"
        ],
        "correctAnswers": [
            "Hər şeyi görən"
        ]
    },
    {
        "id": 7,
        "questionTitle": "Allahın 'Əl-Vədud' ismi nədir?",
        "img": "https://example.com/images/al-wadud.png",
        "answers": [
            "Sevən və sevilən",
            "Bağışlayan",
            "Qoruyan",
            "Ruzini təmin edən"
        ],
        "correctAnswers": [
            "Sevən və sevilən"
        ]
    },
    {
        "id": 8,
        "questionTitle": "Allahın 'Əs-Səlam' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/as-salam.png",
        "answers": [
            "Bağışlayan",
            "Sülh və əmin-amanlıq təmin edən",
            "Qoruyan",
            "Çox mərhəmətli"
        ],
        "correctAnswers": [
            "Sülh və əmin-amanlıq təmin edən"
        ]
    },
    {
        "id": 9,
        "questionTitle": "Allahın 'Əl-Qəffar' ismi nədir?",
        "img": "https://example.com/images/al-ghaffar.png",
        "answers": [
            "Çox bağışlayan",
            "Qoruyan",
            "Hər şeyi bilən",
            "Hikmət sahibi"
        ],
        "correctAnswers": [
            "Çox bağışlayan"
        ]
    },
    {
        "id": 10,
        "questionTitle": "Allahın 'Əl-Malik' isminin mənası nədir?",
        "img": "https://example.com/images/al-malik.png",
        "answers": [
            "Hökm sahibi",
            "Ədalətli",
            "Yaratıcı",
            "Qoruyan"
        ],
        "correctAnswers": [
            "Hökm sahibi"
        ]
    },
    {
        "id": 11,
        "questionTitle": "Allahın 'Əl-Halim' isminin mənası nədir?",
        "img": "https://example.com/images/al-halim.png",
        "answers": [
            "Səbirli və mülayim",
            "Çox bağışlayan",
            "Yaradan",
            "Ədalətli"
        ],
        "correctAnswers": [
            "Səbirli və mülayim"
        ]
    },
    {
        "id": 12,
        "questionTitle": "Allahın 'Ər-Rəhman' və 'Ər-Rəhim' isimləri nəyi ifadə edir?",
        "img": "https://example.com/images/ar-rahman-ar-rahim.png",
        "answers": [
            "Sonsuz mərhəmət və rəhmət sahibi",
            "Hər şeyi görən",
            "Ədalətli",
            "Hər şeyi bilən"
        ],
        "correctAnswers": [
            "Sonsuz mərhəmət və rəhmət sahibi"
        ]
    },
    {
        "id": 13,
        "questionTitle": "Allahın 'Əl-Kərim' ismi nədir?",
        "img": "https://example.com/images/al-karim.png",
        "answers": [
            "Səxavətli",
            "Hər şeyi bilən",
            "Qoruyan",
            "Əbədi olan"
        ],
        "correctAnswers": [
            "Səxavətli"
        ]
    },
    {
        "id": 14,
        "questionTitle": "Allahın 'Əl-Mucib' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-mujib.png",
        "answers": [
            "Dualara cavab verən",
            "Bağışlayan",
            "Ruzini təmin edən",
            "Qoruyan"
        ],
        "correctAnswers": [
            "Dualara cavab verən"
        ]
    },
    {
        "id": 15,
        "questionTitle": "Allahın 'Əl-Hafiz' ismi nədir?",
        "img": "https://example.com/images/al-hafiz.png",
        "answers": [
            "Qoruyan və saxlayan",
            "Hikmət sahibi",
            "Ədalətli",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Qoruyan və saxlayan"
        ]
    },
    {
        "id": 16,
        "questionTitle": "Allahın 'Əl-Mumit' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-mumit.png",
        "answers": [
            "Həyatı sona çatdıran",
            "Ədalətli",
            "Yaradan",
            "Hər şeyi bilən"
        ],
        "correctAnswers": [
            "Həyatı sona çatdıran"
        ]
    },
    {
        "id": 17,
        "questionTitle": "Allahın 'Əl-Cami' isminin mənası nədir?",
        "img": "https://example.com/images/al-jami.png",
        "answers": [
            "Toplayıcı və birləşdirici",
            "Ədalətli",
            "Bağışlayan",
            "Qoruyan"
        ],
        "correctAnswers": [
            "Toplayıcı və birləşdirici"
        ]
    },
    {
        "id": 18,
        "questionTitle": "Allahın 'Əl-Vahhab' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-wahhab.png",
        "answers": [
            "Bağış edən",
            "Ruzini təmin edən",
            "Qoruyan",
            "Hər şeyi bilən"
        ],
        "correctAnswers": [
            "Bağış edən"
        ]
    },
    {
        "id": 19,
        "questionTitle": "Allahın 'Əl-Müqtədir' isminin mənası nədir?",
        "img": "https://example.com/images/al-muqtadir.png",
        "answers": [
            "Güc və qüdrət sahibi",
            "Ədalətli",
            "Qoruyan",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Güc və qüdrət sahibi"
        ]
    },
    {
        "id": 20,
        "questionTitle": "Allahın 'Əl-Lətif' ismi nədir?",
        "img": "https://example.com/images/al-latif.png",
        "answers": [
            "Mülayim və mərhəmətli",
            "Qoruyan",
            "Bağışlayan",
            "Hər şeyi bilən"
        ],
        "correctAnswers": [
            "Mülayim və mərhəmətli"
        ]
    },
    {
        "id": 21,
        "questionTitle": "Allahın 'Əl-Məcid' isminin mənası nədir?",
        "img": "https://example.com/images/al-majid.png",
        "answers": [
            "Uca və izzətli",
            "Ədalətli",
            "Qoruyan",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Uca və izzətli"
        ]
    },
    {
        "id": 22,
        "questionTitle": "Allahın 'Əs-Sami' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/as-sami.png",
        "answers": [
            "Hər şeyi eşidən",
            "Hər şeyi bilən",
            "Çox mərhəmətli",
            "Qoruyan"
        ],
        "correctAnswers": [
            "Hər şeyi eşidən"
        ]
    },
    {
        "id": 23,
        "questionTitle": "Allahın 'Əl-Bari' ismi nədir?",
        "img": "https://example.com/images/al-bari.png",
        "answers": [
            "Yoxdan var edən",
            "Qoruyan",
            "Ədalətli",
            "Səxavətli"
        ],
        "correctAnswers": [
            "Yoxdan var edən"
        ]
    },
    {
        "id": 24,
        "questionTitle": "Allahın 'Əl-Muizz' isminin mənası nədir?",
        "img": "https://example.com/images/al-muizz.png",
        "answers": [
            "Şərəf və izzət verən",
            "Qoruyan",
            "Hər şeyi bilən",
            "Bağışlayan"
        ],
        "correctAnswers": [
            "Şərəf və izzət verən"
        ]
    },
    {
        "id": 25,
        "questionTitle": "Allahın 'Əl-Malik' və 'Əl-Quddus' isimləri nəyi ifadə edir?",
        "img": "https://example.com/images/al-malik-al-quddus.png",
        "answers": [
            "Sahib və müqəddəs olan",
            "Bağışlayan",
            "Yaradan",
            "Qoruyan"
        ],
        "correctAnswers": [
            "Sahib və müqəddəs olan"
        ]
    },
    {
        "id": 26,
        "questionTitle": "Allahın 'Əl-Muqsit' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-muqsit.png",
        "answers": [
            "Ədalətli",
            "Qoruyan",
            "Bağışlayan",
            "Hər şeyi bilən"
        ],
        "correctAnswers": [
            "Ədalətli"
        ]
    },
    {
        "id": 27,
        "questionTitle": "Allahın 'Əl-Həmid' ismi nədir?",
        "img": "https://example.com/images/al-hamid.png",
        "answers": [
            "Təriflənən və şükür olunan",
            "Qoruyan",
            "Hər şeyi bilən",
            "Yaradan"
        ],
        "correctAnswers": [
            "Təriflənən və şükür olunan"
        ]
    },
    {
        "id": 28,
        "questionTitle": "Allahın 'Əl-Vəkil' isminin mənası nədir?",
        "img": "https://example.com/images/al-wakil.png",
        "answers": [
            "İşləri idarə edən və hifz edən",
            "Qoruyan",
            "Bağışlayan",
            "Ədalətli"
        ],
        "correctAnswers": [
            "İşləri idarə edən və hifz edən"
        ]
    },
    {
        "id": 29,
        "questionTitle": "Allahın 'Əl-Cabbar' ismi nəyi ifadə edir?",
        "img": "https://example.com/images/al-jabbar.png",
        "answers": [
            "Güclü və məcbur edən",
            "Hər şeyi bilən",
            "Ədalətli",
            "Çox mərhəmətli"
        ],
        "correctAnswers": [
            "Güclü və məcbur edən"
        ]
    },
    {
        "id": 30,
        "questionTitle": "Allahın 'Əl-Muhsi' ismi nədir?",
        "img": "https://example.com/images/al-muhsi.png",
        "answers": [
            "Hər şeyin sayını bilən",
            "Bağışlayan",
            "Qoruyan",
            "Hər şeyi görən"
        ],
        "correctAnswers": [
            "Hər şeyin sayını bilən"
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
