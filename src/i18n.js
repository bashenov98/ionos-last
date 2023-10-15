import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "bannerheader": "INSTITUTE OF IONOSPHERE",
          "bannerbio": "We are one of the oldest research institutes in Kazakhstan and the only specialized institute in Central Asia studying the state of the ionosphere.",
          "labs": "LABORATORIES",
          "diagnosticlab": "SPACE WEATHER DIAGNOSIS AND FORECAST LABORATORY",
          "nonstationarylab": "LABORATORY FOR NON-STATIONARY PROCESSES IN THE ATMOSPHERE AND IONOSPHERE",
          "geomagneticlab": "GEOMAGNETIC RESEARCH LABORATORY",
          "reliabilitylab": "LABORATORY FOR RELIABILITY AND SAFETY OF ORBITAL AND GROUND SPACE SYSTEMS",
          "geodynamiclab": "LABORATORY FOR SATELLITE AND GEODYNAMIC RESEARCH",
          "complexlab": "LABORATORY FOR COMPLEX ANALYSIS OF GROUND AND SPACE RESEARCH DATA",
          "cartographylab": "CARTOGRAPHY AND GIS LABORATORY",
          "institute": "INSTITUTE",
          "performance": "PERFORMANCE",
          "services": "SERVICES",
          "committee": "Aerospace Committee of the Ministry of Digital Development, Innovation and Aerospace Industry",
          "blog": "Minister's blog",
          "news": "NEWS",
          "history": "HISTORY",
          "staff": "STAFF",
          "experimentalbase": "EXPERIMENTAL BASE",
          "technicalequipment": "TECHNICAL EQUIPMENT",
          "youngscientists": "COUNCIL OF YOUNG SCIENTISTS",
          "anticorruption": "ANTI-CORRUPTION PERFORMANCE",
          "govpurchases": "STATE PURCHASING",
          "currentprojects": "OUR PROJECTS",
          "publications": "PUBLICATIONS",
          "seminars": "SEMINARS AND CONFERENCES",
          "patents": "PATENTS",
          "geophysicalforecast": "FORECAST OF THE GEOPHYSICAL SITUATION",
          "geomagneticdimensions": "GEOMAGNETIC DIMENSIONS",
          "aerospacemonitoring": "AEROSPACE MONITORING",
          "geoinformsystemdevelopment": "DEVELOPMENT OF GEOINFORMATION SYSTEMS",
          "adminsheader": "ADMINISTRATION OF INSTITUTE",
          "latestNewsHeader": "Latest news",
          "contactUsHeader": "Contact us",
          "head": "Supervisor"
        }
      },
      ru: {
        translation: {
          "bannerheader": "ИНСТИТУТ ИОНОСФЕРЫ",
          "bannerbio": "Мы являемся одним из старейших научно-исследовательских институтов в Казахстане и единственным в Средней Азии специализированным институтом, занимающийся изучением состояния ионосферы.",
          "labs": "ЛАБОРАТОРИИ",
          "diagnosticlab": "ЛАБОРАТОРИЯ ДИАГНОСТИКИ И ПРОГНОЗА КОСМИЧЕСКОЙ ПОГОДЫ",
          "nonstationarylab": "ЛАБОРАТОРИЯ НЕСТАЦИОНАРНЫХ ПРОЦЕССОВ В АТМОСФЕРЕ И ИОНОСФЕРЕ",
          "geomagneticlab": "ЛАБОРАТОРИЯ ГЕОМАГНИТНЫХ ИССЛЕДОВАНИЙ",
          "reliabilitylab": "ЛАБОРАТОРИЯ НАДЕЖНОСТИ И БЕЗОПАСНОСТИ ОРБИТАЛЬНЫХ И НАЗЕМНЫХ КОСМИЧЕСКИХ СИСТЕМ",
          "geodynamiclab": "ЛАБОРАТОРИЯ СПУТНИКОВЫХ И ГЕОДИНАМИЧЕСКИХ ИССЛЕДОВАНИЙ",
          "complexlab": "ЛАБОРАТОРИЯ КОМПЛЕКСНОГО АНАЛИЗА ДАННЫХ НАЗЕМНО-КОСМИЧЕСКИХ ИССЛЕДОВАНИЙ",
          "cartographylab": "ЛАБОРАТОРИЯ КАРТОГРАФИИ И ГИС",
          "institute": "ИНСТИТУТ",
          "news": "НОВОСТИ",
          "history": "ИСТОРИЯ",
          "staff": "ПЕРСОНАЛ",
          "experimentalbase": "ЭКСПЕРИМЕНТАЛЬНАЯ БАЗА",
          "technicalequipment": "ТЕХНИЧЕСКОЕ ОСНАЩЕНИЕ",
          "youngscientists": "СОВЕТ МОЛОДЫХ УЧЕНЫХ",
          "anticorruption": "АНТИКОРРУПЦИОННАЯ ДЕЯТЕЛЬНОСТЬ",
          "govpurchases": "ГОСЗАКУПКИ",
          "performance": "ДЕЯТЕЛЬНОСТЬ",
          "currentprojects": "ВЫПОЛНЯЕМЫЕ ПРОЕКТЫ",
          "publications": "ПУБЛИКАЦИИ",
          "seminars": "СЕМИНАРЫ И КОНФЕРЕНЦИИ",
          "patents": "ПАТЕНТЫ",
          "services": "УСЛУГИ",
          "geophysicalforecast": "ПРОГНОЗ ГЕОФИЗИЧЕСКОЙ ОБСТАНОВКИ",
          "geomagneticdimensions": "ГЕОМАГНИТНЫЕ ИЗМЕРЕНИЯ",
          "aerospacemonitoring": "АЭРОКОСМИЧЕСКИЙ МОНИТОРИНГ",
          "geoinformsystemdevelopment": "РАЗРАБОТКА ГЕОИНФОРМАЦИОННЫХ СИСТЕМ",
          "committee": "Аэрокосмический комитет Министерства цифрового развития, инноваций и аэрокосмической промышленности",
          "adminsheader": "АДМИНИСТРАЦИЯ ИНСТИТУТА",
          "latestNewsHeader": "Последние новости",
          "contactUsHeader": "Свяжитесь с нами",
          "head": "Руководитель"
        }
      },
      kz: {
        translation: {
          "bannerheader": "ИОНОСФЕРА ИНСТИТУТЫ",
          "bannerbio": "Біз Қазақстандағы ең көне ғылыми-зерттеу институттарының бірі және ионосфера жағдайын зерттейтін Орталық Азиядағы жалғыз мамандандырылған институтпыз.",
          "labs": "ЗЕРТХАНАЛАР",
          "institute": "ИНСТИТУТ",
          "performance": "ІС-ШАРАЛАР",
          "services": "ҚЫЗМЕТТЕР",
          "committee": "Цифрлық даму, инновациялар және аэроғарыш өнеркәсібі министрлігінің Аэроғарыш комитеті",
          "adminsheader": "ИНСТИТУТ ӘКІМШІЛІГІ",
          "head": "Жетекшісі"
        }
      }
    },

    lng: 'ru',  // language to use, 
    interpolation: {
      escapeValue: false 
    }
  });
 
export default i18n;
