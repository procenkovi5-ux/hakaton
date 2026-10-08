/* Цифровой двойник Allur: архивные данные за октябрь; детерминированная аналитика. */
(function () {
'use strict';
  const I18N = {
    ru: {
      brand: 'Allur',
      'brand-sub': 'Цифровой двойник производства',
      'system-online': 'СИСТЕМА В СЕТИ',
      dashboard: 'Панель',
      'kpi-production': 'Производство',
      'unit-pcs': 'шт',
      today: 'сегодня',
      'kpi-plan': 'Выполнение плана',
      target: 'Цель',
      'kpi-load': 'Загрузка оборудования',
      peak: 'Пик',
      'on-painting': 'на покраске',
      'kpi-quality': 'Качество',
      'this-week': 'за неделю',
      'overview-title': 'ОБЩИЙ ВИД ЗАВОДА',
      'hover-tip': 'Наведите или нажмите на участок для деталей',
      'station-warehouse': 'Склад комплектующих',
      'station-welding': 'Сварка-1',
      'station-painting': 'Окраска-1',
      'station-assembly': 'Сборка-1',
      'station-qc': 'Контроль качества',
      'station-finished': 'Склад готовой продукции',
      'welding-title': 'ЛИНИЯ СВАРКИ-1 3D',
      'drag-tip': 'Тяните для вращения · Колесо для масштаба',
      'welding-name': 'ABB-01',
      'welding-dept': 'Участок сварки',
      status: 'Статус',
      load: 'Нагрузка',
      temperature: 'Температура',
      vibration: 'Вибрация',
      production: 'Производство',
      'paint-title': 'ЛИНИЯ ОКРАСКИ-1 3D',
      'paint-name': 'Камера-02',
      'paint-dept': 'Участок окраски',
      quality: 'Качество',
      downtime: 'Простой',
      'assembly-title': 'ЛИНИЯ СБОРКИ-1 3D',
      'assembly-name': 'Конвейер-03',
      'assembly-dept': 'Участок сборки',
      'cycle-time': 'Время цикла',
      'units-today': 'Единиц сегодня',
      'inspection-title': 'ИНСПЕКЦИОННЫЙ ТОННЕЛЬ 3D',
      'inspection-name': 'Камера-04',
      'inspection-dept': 'Контроль качества',
      'defect-rate': 'Брак',
      'inspected-today': 'Проверено сегодня',
      'eq-title': 'СТАТУС ОБОРУДОВАНИЯ',
      'click-status': 'Нажмите на статус для изменения',
      'th-equipment': 'Оборудование',
      'th-department': 'Участок',
      'th-load': 'Нагрузка',
      'th-temperature': 'Температура',
      'th-status': 'Статус',
      'inc-title': 'ПОСЛЕДНИЕ ИНЦИДЕНТЫ',
      'ai-title': 'AI ПРОГНОЗ',
      'demo-data': 'Демо данные',
      'potential-risk': 'Потенциальный риск простоя',
      'main-factors': 'Основные факторы:',
      'factor-load': 'Высокая нагрузка',
      'factor-temp': 'Рост температуры',
      'factor-vib': 'Рост вибрации',
      recommendation: 'Рекомендация:',
      'recommendation-text': 'Проверьте систему охлаждения и выполните профилактическое обслуживание.',
      warning: 'ПРЕДУПРЕЖДЕНИЕ',
      'high-temp': 'Высокая температура',
      'vibration-inc': 'Увеличение вибрации',
      'shift-handover': 'Смена завершена',
      loading: 'Загрузка 3D вида...',
      'reset-view': 'Сброс',
      'auto-rotate': 'Авто-вращение',
      fullscreen: 'На весь экран',
      // Статусы
      'status-running': 'Работает',
      'status-warning': 'Предупреждение',
      'status-stopped': 'Остановлен',
      // Информация об участках
      'info-warehouse': 'Уровень запаса 92% · 14 поставок сегодня',
      'info-welding': 'ABB-01 · 98% загрузка · 15 шт/ч',
      'info-painting': 'Камера-02 · 96% загрузка · 14 шт/ч',
      'info-assembly': 'Конвейер-03 · 100% загрузка · 15 шт/ч',
      'info-qc': 'Камера-04 · 97% загрузка · Брак 1.7%',
      'info-finished': 'Готовая продукция · 700 шт на складе',
      // Единицы
      'unit-s': 'с',
      'unit-min': 'мин'
    },
    kk: {
      brand: 'Allur',
      'brand-sub': 'Цифровой егіз өндіріс платформасы',
      'system-online': 'ЖҮЙЕ ІСКЕ ҚОСЫЛҒАН',
      dashboard: 'Басқарма панелі',
      'kpi-production': 'Өндіріс',
      'unit-pcs': 'дана',
      today: 'бүгін',
      'kpi-plan': 'Жоспар орындалуы',
      target: 'Максат',
      'kpi-load': 'Жабдық жүктемесі',
      peak: 'Пик',
      'on-painting': 'бояу участогінде',
      'kpi-quality': 'Сапа',
      'this-week': 'апта ішінде',
      'overview-title': 'ЗАУОД КӨРІНІСІ',
      'hover-tip': 'Ақпарат алу үшін басыңыз',
      'station-warehouse': 'Құрамалар қоймасы',
      'station-welding': 'Дәнекерлеу-1',
      'station-painting': 'Бояу-1',
      'station-assembly': 'Жинау-1',
      'station-qc': 'Сапа бақылауы',
      'station-finished': 'Дайын өнім қоймасы',
      'welding-title': 'ДӘНКЕРЛЕУ ЖОЛЫ 3D',
      'drag-tip': 'Айналдыру үшін тартыңыз · Масштаб үшін дөңгелек',
      'welding-name': 'ABB-01',
      'welding-dept': 'Дәнекерлеу участогі',
      status: 'Күйі',
      load: 'Жүктеме',
      temperature: 'Температура',
      vibration: 'Тербеліс',
      production: 'Өндіріс',
      'paint-title': 'БОЯУ ЖОЛЫ 3D',
      'paint-name': 'Камера-02',
      'paint-dept': 'Бояу участогі',
      quality: 'Сапа',
      downtime: 'Тоқтау уақыты',
      'assembly-title': 'ЖИНАУ ЖОЛЫ 3D',
      'assembly-name': 'Конвейер-03',
      'assembly-dept': 'Жинау участогі',
      'cycle-time': 'Цикл уақыты',
      'units-today': 'Бүгін саны',
      'inspection-title': 'ТЕКСЕРУ ТОННЕЛІ 3D',
      'inspection-name': 'Камера-04',
      'inspection-dept': 'Сапа бақылауы',
      'defect-rate': 'Ақаулы',
      'inspected-today': 'Бүгін тексерілді',
      'eq-title': 'ЖАБДЫҚ КҮЙІ',
      'click-status': 'Өзгерту үшін басыңыз',
      'th-equipment': 'Жабдық',
      'th-department': 'Участок',
      'th-load': 'Жүктеме',
      'th-temperature': 'Температура',
      'th-status': 'Күйі',
      'inc-title': 'АҚЫРҒЫ ОҚИҒАЛАР',
      'ai-title': 'AI БОЛЖАМЫ',
      'demo-data': 'Демо деректер',
      'potential-risk': 'Тоқтау қаупі',
      'main-factors': 'Негізгі факторлар:',
      'factor-load': 'Жоғары жүктеме',
      'factor-temp': 'Температура өсуі',
      'factor-vib': 'Тербеліс өсуі',
      recommendation: 'Ұсыныс:',
      'recommendation-text': 'Суыту жүйесін тексеріңіз және алдын алу техникалық қызметін орындаңыз.',
      warning: 'ЕСКЕРТУ',
      'high-temp': 'Жоғары температура',
      'vibration-inc': 'Тербеліс өсті',
      'shift-handover': 'Ауысу аяқталды',
      loading: '3D көрініс жүктелуде...',
      'reset-view': 'Қалпына келтіру',
      'auto-rotate': 'Авто-айналдыру',
      fullscreen: 'Толық экран',
      // Статусы
      'status-running': 'Жұмыс істеп тұр',
      'status-warning': 'Ескерту',
      'status-stopped': 'Тоқтатылған',
      // Информация об участках
      'info-warehouse': 'Қор 92% · Бүгін 14 жеткізу',
      'info-welding': 'ABB-01 · 98% жүктеме · 15 дана/сағ',
      'info-painting': 'Камера-02 · 96% жүктеме · 14 дана/сағ',
      'info-assembly': 'Конвейер-03 · 100% жүктеме · 15 дана/сағ',
      'info-qc': 'Камера-04 · 97% жүктеме · Ақаулы 1.7%',
      'info-finished': 'Дайын өнім · 700 дана қоймада',
      // Единицы
      'unit-s': 'с',
      'unit-min': 'мин'
    }
  };

  // Нормативы: 16 рабочих часов на линию/день; брак >2%, критический >=5%.
  const NORMS = Object.freeze({ minutes:960, oee:85, defect:2, criticalDefect:5, downtime:60, monthPlan:5500 });
  const RECORDS = Object.freeze([
    { date:'2026-10-01', line:'welding', plan:120, fact:118, hours:7.8, load:98, defects:2 },
    { date:'2026-10-01', line:'painting', plan:120, fact:115, hours:7.5, load:94, defects:4 },
    { date:'2026-10-01', line:'assembly', plan:120, fact:121, hours:8.0, load:100, defects:1 },
    { date:'2026-10-02', line:'welding', plan:120, fact:111, hours:7.2, load:91, defects:3 },
    { date:'2026-10-02', line:'painting', plan:120, fact:116, hours:7.7, load:96, defects:6 },
    { date:'2026-10-02', line:'assembly', plan:120, fact:119, hours:7.9, load:99, defects:2 }
  ].map(Object.freeze));
  const STOPS = Object.freeze([
    { date:'2026-10-01', line:'welding', equipment:'ABB-01', cause:'sensor', minutes:25 },
    { date:'2026-10-01', line:'painting', equipment:'Камера-02', cause:'filter', minutes:40 },
    { date:'2026-10-02', line:'welding', equipment:'ABB-04', cause:'maintenance', minutes:30 },
    { date:'2026-10-02', line:'assembly', equipment:'Конвейер-03', cause:'chain', minutes:55 }
  ].map(Object.freeze));
  const MODEL_PLAN = Object.freeze([
    {name:'Chevrolet Onix',plan:2500}, {name:'Chevrolet Cobalt',plan:1800},
    {name:'JAC J7',plan:500}, {name:null,plan:700}
  ]);
  const STATUS_CLASS = { RUNNING:'ok', WARNING:'warn', CRITICAL:'bad', UNKNOWN:'unknown', STOPPED:'bad' };
  const equipment = {
    welding:{ name:'ABB-01', station:'welding', temp:65, vib:3.8 },
    welding4:{ name:'ABB-04', station:'welding', temp:null, vib:null },
    paint:{ name:'Камера-02', station:'painting', temp:72, vib:null },
    assembly:{ name:'Конвейер-03', station:'assembly', temp:68, vib:null },
    qc:{ name:'Камера-04', station:'qc', temp:22, vib:null }
  };
  const EXTRA = {
    'exit-fullscreen':['Выйти из полного экрана','Толық экраннан шығу'],
    'fullscreen-unavailable':['Не удалось включить полный экран. Проверьте разрешения браузера.','Толық экранды қосу мүмкін болмады. Браузер рұқсаттарын тексеріңіз.'],
    'sandbox-title':['ТЕСТОВЫЙ РЕЖИМ: ЧТО ЕСЛИ?','СЫНАҚ ОРТАСЫ: ЕГЕР…'],
    'sandbox-enable':['Включить сценарий','Сценарийді қосу'],
    'sandbox-help':['Выберите день, введите показатели трёх линий и нажмите «Применить сценарий». Все KPI, сцены, таблицы и предупреждения покажут результат сценария. Выключите режим для просмотра исходных данных. Применённые сценарии хранятся до обновления страницы; телеметрия свода показывается за 02.10.','Күнді таңдап, үш желінің көрсеткіштерін енгізіңіз де, «Сценарийді қолдану» түймесін басыңыз. Барлық KPI, көріністер, кестелер мен ескертулер сценарий нәтижесін көрсетеді. Бастапқы деректерді көру үшін режимді өшіріңіз. Қолданылған сценарийлер бет жаңартылғанша сақталады; жиынтық телеметрия 02.10 күніне көрсетіледі.'],
    'sandbox-active':['Тестовый режим активна: сценарные данные','Тест режимі қосылған: сценарий деректері'],
    'sandbox-reset':['Сбросить все изменения','Барлық өзгерістерді қалпына келтіру'],
    'sandbox-plan':['Суточный план, шт','Тәуліктік жоспар, дана'],
    'sandbox-apply':['Применить сценарий','Сценарийді қолдану'],
    'sandbox-overheat':['Пример: перегрев окраски','Мысал: бояу желісінің қызып кетуі'],
    'sandbox-shutdown':['Пример: остановка завода','Мысал: зауыттың тоқтауы'],
    'sandbox-recovery':['Пример: штатный режим','Мысал: қалыпты жұмыс'],
    'sandbox-invalid':['Проверьте диапазоны и обязательные числовые поля','Аралықтар мен міндетті сандық өрістерді тексеріңіз'],
    'sandbox-consistency':['Брак не может превышать выпуск; при выпуске >0 время должно быть >0; время работы + простой не должны превышать 16 часов','Ақау саны шығарылымнан аспауы керек; шығарылым >0 болса, уақыт >0 болуы керек; жұмыс уақыты + тоқтау 16 сағаттан аспауы керек'],
    'sandbox-stop':['Смоделированный простой','Модельденген тоқтау'],
    'sandbox-comparison':['Последствия сценария','Сценарий салдары'],
    'sandbox-indicator':['Показатель','Көрсеткіш'],
    'sandbox-original':['Исходные данные','Бастапқы деректер'],
    'sandbox-scenario':['Сценарий','Сценарий'],
    'sandbox-delta':['Изменение','Өзгеріс'],
    'sandbox-pp':['п.п.','пайыздық тармақ'],
    'sandbox-gap':['Недовыпуск относительно плана','Жоспарға жетпеген шығарылым'],
    'sandbox-limitations':['Тестовый режим пересчитывает последствия введённых значений, а не прогнозирует переток автомобилей между участками. Нулевой выпуск даёт OEE=0; качество при отсутствии выпуска не оценивается. Нормативы завода остаются фиксированными.','Тест режимі енгізілген мәндердің салдарын қайта есептейді, учаскелер арасындағы автомобиль ағынын болжамайды. Нөлдік шығарылымда OEE=0; шығарылым жоқ кезде сапа бағаланбайды. Зауыт нормативтері өзгермейді.'],
    'period':['Период','Кезең'], 'all-days':['Все дни / Свод за месяц','Барлық күндер / Айлық жиынтық'],
    'coverage':['Данные: 01-02.10.2026 · 2 смены × 8 ч','Деректер: 01-02.10.2026 · 2 ауысым × 8 сағ'],
    'analytics-title':['OEE И РЕГЛАМЕНТНЫЕ ПОКАЗАТЕЛИ','OEE ЖӘНЕ НОРМАТИВТІК КӨРСЕТКІШТЕР'],
    'oee-method':['OEE = A × P × Q; A: (960 − простой) / 960; P: факт / план; Q: годные / выпуск. Свод: A по времени, P и Q по суммарному выпуску. Цель ≥85%.','OEE = A × P × Q; A: (960 − тоқтау) / 960; P: нақты / жоспар; Q: жарамды / шығарылым. Жиынтық: A уақыт бойынша, P және Q жалпы шығарылым бойынша. Мақсат ≥85%.'],
    'critical-rule':['Брак >2%: WARNING; ≥5%: CRITICAL. Простой ≥90% лимита: WARNING; >60 мин/сутки: CRITICAL.','Ақау >2%: ЕСКЕРТУ; ≥5%: СЫНДЫ. Тоқтау шектің ≥90%: ЕСКЕРТУ; >60 мин/тәулік: СЫНДЫ.'],
    'availability':['Доступность A','Қолжетімділік A'], 'performance':['Производительность P','Өнімділік P'],
    'plan-fact':['План / Факт','Жоспар / Нақты'], 'hours':['Время, ч','Уақыт, сағ'],
    'daily-limit':['Простой / 60 мин в сутки','Тоқтау / тәулігіне 60 мин'],
    'model-title':['ПРОИЗВОДСТВЕННЫЙ ПЛАН ПО МОДЕЛЯМ','МОДЕЛЬДЕР БОЙЫНША ӨНДІРІСТІК ЖОСПАР'],
    'model':['Модель','Модель'], 'monthly-plan':['План на месяц','Айлық жоспар'],
    'mtd-fact':['Факт MTD','Ай басынан бергі нақты'], 'completion':['Выполнение','Орындалуы'],
    'mtd':['MTD: с начала месяца до выбранной даты','MTD: ай басынан таңдалған күнге дейін'],
    'other-models':['Прочие модели / Баланс','Басқа модельдер / Қалдық'], 'total':['Итого','Барлығы'],
    'model-note':['Факт по моделям и YTD не предоставлен. Проценты моделей не оцениваются; общий MTD рассчитан по доступным данным.','Модельдер бойынша нақты деректер мен жылдық деректер берілмеген. Модельдердің пайызы бағаланбайды; жалпы айлық көрсеткіш қолда бар деректерден есептеледі.'],
    'production-note':['354 и 346 - сумма выпусков трёх участков по заданию. Автомобиль может учитываться на нескольких этапах; для KPI готовых автомобилей нужны уникальные VIN / данные склада ГП.','354 және 346 - тапсырмадағы үш учаскенің шығарылым қосындысы. Автомобиль бірнеше кезеңде есептелуі мүмкін; дайын автомобиль KPI үшін бірегей VIN / дайын өнім қоймасының деректері қажет.'],
    'downtime-history':['ИСТОРИЯ ПРОСТОЕВ','ТОҚТАУ ТАРИХЫ'], 'cause':['Причина','Себеп'],
    'sensor':['Ошибка датчика','Датчик қатесі'], 'filter':['Замена фильтра','Сүзгіні ауыстыру'],
    'maintenance':['Плановое ТО','Жоспарлы техникалық қызмет'], 'chain':['Обрыв цепи','Тізбектің үзілуі'],
    'close':['Закрыть','Жабу'], 'no-data':['Нет данных','Деректер жоқ'],
    'no-stops':['В выбранный период простоев не зарегистрировано','Таңдалған кезеңде тоқтаулар тіркелмеген'],
    'unknown-station':['Для этого участка выпуск, брак и простои не предоставлены. OEE не рассчитывается.','Бұл учаскенің шығарылым, ақау және тоқтау деректері берілмеген. OEE есептелмейді.'],
    'equipment-list':['Ответственное оборудование','Жауапты жабдық'], 'defect-history':['Динамика брака за 01-02.10','01-02.10 ақау динамикасы'],
    'status-critical':['Критический','Сындарлы'], 'status-unknown':['Нет данных','Деректер жоқ'],
    'calculated-status':['Статусы рассчитываются по данным; нажмите для деталей','Күйлер деректерден есептеледі; мәліметтер үшін басыңыз'],
    'risk-method':['Эвристическая оценка PdM','PdM эвристикалық бағалауы'],
    'telemetry-note':['Температура взята из исходного интерфейса, это не архивные измерения. Вибрация известна только для ABB-01. Ввод моделирует новые показания; процент - индекс риска, не обученная вероятность.','Температура бастапқы интерфейстен алынған, бұл мұрағаттық өлшемдер емес. Діріл тек ABB-01 үшін белгілі. Енгізу жаңа көрсеткіштерді модельдейді; пайыз - тәуекел индексі, үйретілген ықтималдық емес.'],
    'risk-formula':['Индекс: 10 + 2×max(T−60,0) + 10×max(V−2,0) + 0,4×max(L−80,0) + 0,3×D; +15 при T>70; +20 при V>4; максимум 99. D - накопленный простой до выбранной даты.','Индекс: 10 + 2×max(T−60,0) + 10×max(V−2,0) + 0,4×max(L−80,0) + 0,3×D; T>70 болса +15; V>4 болса +20; ең көбі 99. D - таңдалған күнге дейінгі тоқтау қосындысы.'],
    'risk-filter':['Риск засора фильтра: очистить фильтр и проверить вентиляцию в течение 2 часов.','Сүзгінің бітелу қаупі: 2 сағат ішінде сүзгіні тазалап, желдетуді тексеру.'],
    'risk-chain':['Риск обрыва цепи: проверить натяжение, смазку и подшипники в течение 2 часов.','Тізбектің үзілу қаупі: 2 сағат ішінде керілуін, майлауды және мойынтіректерді тексеру.'],
    'risk-welding':['Риск перегрева / отказа привода: проверить охлаждение, датчики и привод в течение 2 часов.','Қызып кету / жетек істен шығу қаупі: 2 сағат ішінде салқындатуды, датчиктерді және жетекті тексеру.'],
    'risk-normal':['Продолжить мониторинг и плановое обслуживание.','Бақылауды және жоспарлы қызмет көрсетуді жалғастыру.'],
    'partial-risk':['Оценка неполная: отсутствуют показатели','Бағалау толық емес: көрсеткіштер жоқ'],
    'excess-defects':['Превышен лимит брака','Ақау шегі асып кетті'], 'near-limit':['Приближение к лимиту простоя','Тоқтау шегіне жақындау'],
    'excess-limit':['Превышен лимит простоя','Тоқтау шегі асып кетті'],
    'viewer-error':['3D недоступен: проверьте загрузку Three.js и OrbitControls.','3D қолжетімсіз: Three.js және OrbitControls жүктелуін тексеріңіз.'],
    'webgl-error':['3D недоступен: браузер не предоставил WebGL-контекст.','3D қолжетімсіз: браузер WebGL контекстін ұсынбады.'],
    'clock-label':['Текущее время','Ағымдағы уақыт'], 'language-label':['Переключатель языка','Тілді ауыстыру'],
    'kpi-label':['Ключевые показатели','Негізгі көрсеткіштер'], 'unit-hour':['ч','сағ'], 'unit-vib':['мм/с','мм/с'],
    'month-total':['MTD / месячный план','Ай басынан / айлық жоспар'], 'selected-total':['Выпуск за выбранный период','Таңдалған кезеңдегі шығарылым'],
    'weighted-quality':['Качество, взвешенное по выпуску','Шығарылым бойынша өлшенген сапа'],
    'average-load':['Средняя загрузка выбранных линий','Таңдалған желілердің орташа жүктемесі'],
    'record-details':['Детали записи','Жазба мәліметтері'], 'oee-low':['OEE ниже цели','OEE мақсаттан төмен'],
    'no-incidents':['В выбранный период инцидентов нет','Таңдалған кезеңде оқиғалар жоқ'],
    'invalid-telemetry':['Введите конечное число в указанном диапазоне','Көрсетілген аралықта ақырлы сан енгізіңіз']
  };
  Object.entries(EXTRA).forEach(([key, values]) => { I18N.ru[key]=values[0]; I18N.kk[key]=values[1]; });
  I18N.ru['units-today']='Выпуск за период'; I18N.kk['units-today']='Кезеңдегі шығарылым';
  I18N.ru['brand-sub']='Цифровой двойник производства'; I18N.kk['brand-sub']='Өндірістің цифрлық егізі';
  I18N.kk['overview-title']='ЗАУЫТТЫҢ ЖАЛПЫ КӨРІНІСІ';
  let currentLang='ru', selectedDate='all', activeStation=null, telemetryKey='paint';
  try { if (['ru','kk'].includes(localStorage.getItem('factorytwin-lang'))) currentLang=localStorage.getItem('factorytwin-lang'); } catch (_) {}
  const $=id=>document.getElementById(id);
  const t=key=>I18N[currentLang][key] || key;
  const esc=value=>String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
  const setText=(id,value)=>{if($(id)) $(id).textContent=value;};
  const fmt=(n,d=1)=>Number(n).toLocaleString(currentLang==='kk'?'kk-KZ':'ru-RU',{minimumFractionDigits:d,maximumFractionDigits:d});
  const pct=n=>n===null?t('no-data'):fmt(n*100)+'%';
  const dateLabel=date=>date.split('-').reverse().join('.');
  const periodLabel=()=>selectedDate==='all'?t('all-days'):dateLabel(selectedDate);
  const sum=(rows,key)=>rows.reduce((total,row)=>total+row[key],0);
  const selectedRows=()=>effectiveRecords().filter(row=>selectedDate==='all'||row.date===selectedDate);
  const selectedStops=()=>effectiveStops().filter(row=>selectedDate==='all'||row.date===selectedDate);
  const cutoff=()=>selectedDate==='all'?'2026-10-02':selectedDate;
  const mtdRows=()=>effectiveRecords().filter(row=>row.date<=cutoff());
  function defectStatus(percent) { if(!Number.isFinite(percent))return 'UNKNOWN'; return percent>=NORMS.criticalDefect?'CRITICAL':percent>NORMS.defect?'WARNING':'RUNNING'; }
  function downtimeStatus(minutes) { return minutes>NORMS.downtime?'CRITICAL':minutes>=NORMS.downtime*.9?'WARNING':'RUNNING'; }
  function worst(statuses) { return statuses.includes('STOPPED')?'STOPPED':statuses.includes('CRITICAL')?'CRITICAL':statuses.includes('WARNING')?'WARNING':'RUNNING'; }
  function metrics(rows, stopSource=effectiveStops()) {
    if (!rows.length) return null;
    const stops=stopSource.filter(stop=>rows.some(row=>row.date===stop.date&&row.line===stop.line));
    const fact=sum(rows,'fact'), defects=sum(rows,'defects'), plan=sum(rows,'plan'), downtime=sum(stops,'minutes');
    const availability=(rows.length*NORMS.minutes-downtime)/(rows.length*NORMS.minutes);
    const performance=fact/plan, quality=fact>0?(fact-defects)/fact:null;
    const dayStops=rows.map(row=>sum(stops.filter(stop=>stop.date===row.date&&stop.line===row.line),'minutes'));
    const status=worst(rows.map(row=>row.fact===0?'STOPPED':defectStatus(row.defects/row.fact*100)).concat(dayStops.map(downtimeStatus), availability*performance*(quality??0)<NORMS.oee/100?['WARNING']:[]));
    return {fact,defects,plan,downtime,availability,performance,quality,oee:availability*performance*(quality??0),load:sum(rows,'load')/rows.length,hours:sum(rows,'hours'),status};
  }
  const lineMetrics=line=>metrics(selectedRows().filter(row=>row.line===line));
  function syncEquipment() {
    Object.values(equipment).forEach(eq=>{
      const m=lineMetrics(eq.station);
      eq.load=m?m.load:null; eq.status=m?m.status:'UNKNOWN';
      eq.downtime=sum(selectedStops().filter(stop=>stop.equipment===eq.name),'minutes');
      eq.accumulatedDowntime=sum(effectiveStops().filter(stop=>stop.equipment===eq.name&&stop.date<=cutoff()),'minutes');
      eq.quality=m&&m.quality!==null?m.quality*100:null;
    });
  }
  function statusBadge(status) { return `<span class="pill ${STATUS_CLASS[status]}">${esc(t('status-'+status.toLowerCase()))}</span>`; }
  function bar(value,label,style='ok') {
    return `<div class="bar" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${clamp(value,0,100)}" aria-valuetext="${esc(fmt(value)+'%')}"><div class="bar-fill ${style}" style="width:${clamp(value,0,100)}%"></div></div>`;
  }
  function applyLanguage(lang) {
    currentLang=['ru','kk'].includes(lang)?lang:'ru';
    document.documentElement.lang=currentLang;
    document.title='Allur - '+t('brand-sub');
    document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
    document.querySelectorAll('.viewer-btn[data-action]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18n)));
    document.querySelectorAll('.lang-btn').forEach(el=>{el.classList.toggle('active',el.dataset.lang===currentLang);el.setAttribute('aria-pressed',String(el.dataset.lang===currentLang));});
    try { localStorage.setItem('factorytwin-lang',currentLang); } catch (_) {}
    renderAll(); renderTelemetry(); renderSandboxInputs();refreshProductLanguage(); updateClock();
  }
  function updateClock() { setText('clock',new Date().toLocaleTimeString(currentLang==='kk'?'kk-KZ':'ru-RU',{timeZone:'Asia/Qyzylorda'})); }
  function renderKpi() {
    const m=metrics(selectedRows()), monthly=sum(mtdRows(),'fact');
    setText('kpi-production',fmt(m.fact,0)); setText('kpi-plan',fmt(monthly/NORMS.monthPlan*100));
    setText('kpi-load',fmt(m.load)); setText('kpi-quality',m.quality===null?t('no-data'):fmt(m.quality*100,2));
    const notes=document.querySelectorAll('.kpi .kpi-note');
    [t('selected-total')+' · '+periodLabel(), t('month-total')+': '+fmt(monthly,0)+' / '+fmt(NORMS.monthPlan,0),t('average-load'),t('quality-count')+': '+m.defects+' '+t('unit-pcs')].forEach((text,i)=>{notes[i].textContent=text;});
    $('aggregate-oee').className='pill '+(m.oee<NORMS.oee/100?'warn':'ok');
    setText('aggregate-oee','OEE '+pct(m.oee)+' / ≥85%');
  }
  function renderTable() {
    $('equipment-body').innerHTML=Object.entries(equipment).map(([key,eq])=>`<tr data-key="${key}"><td>${esc(eq.name)}</td><td>${esc(t('station-'+eq.station))}</td><td>${eq.load===null?t('no-data'):fmt(eq.load)+'%'}</td><td>${eq.temp===null?t('no-data'):fmt(eq.temp)+'°C'}</td><td><button type="button" data-eq="${key}" class="pill ${STATUS_CLASS[eq.status]}" title="${esc(t('record-details'))}">${esc(t('status-'+eq.status.toLowerCase()))}</button></td></tr>`).join('');
    document.querySelectorAll('.viewer-info [data-eq]').forEach(btn=>{
      const eq=equipment[btn.dataset.eq];btn.className='pill '+STATUS_CLASS[eq.status];btn.textContent=t('status-'+eq.status.toLowerCase());btn.title=t('record-details');btn.setAttribute('aria-label',eq.name+' · '+t('record-details'));
    });
  }
  function renderPanels() {
    const weldingEquipment=equipment[selectedDate==='2026-10-02'?'welding4':'welding'];
    const w=lineMetrics('welding'), p=lineMetrics('painting'), a=lineMetrics('assembly');
    document.querySelector('#welding-view + .viewer-info h3').textContent=weldingEquipment.name;
    [['welding',weldingEquipment],['paint',equipment.paint],['assembly',equipment.assembly]].forEach(([prefix,eq])=>{
      setText(prefix+'-load',fmt(eq.load)+'%'); setText(prefix+'-temp',eq.temp===null?t('no-data'):fmt(eq.temp)+'°C');
      const info=$(prefix==='paint'?'paint-view':prefix+'-view').parentElement.querySelector('.viewer-info');
      let summary=info.querySelector('.line-summary');
      if (!summary) {summary=document.createElement('p');summary.className='line-summary card-meta';info.appendChild(summary);}
      const m=lineMetrics(eq.station); summary.textContent='OEE '+pct(m.oee)+' · '+t('defect-rate')+' '+(m.fact?pct(1-m.quality):t('no-data'))+' · '+t('downtime')+' '+m.downtime+' '+t('unit-min');
    });
    setText('welding-vib',weldingEquipment.vib===null?t('no-data'):fmt(weldingEquipment.vib)+' '+t('unit-vib'));
    setText('welding-rate',(w.hours?fmt(w.fact/w.hours):t('no-data'))+' '+t('unit-pcs')+'/'+t('unit-hour'));
    setText('paint-quality',pct(p.quality));setText('paint-downtime',equipment.paint.downtime+' '+t('unit-min'));
    setText('assembly-units',a.fact+' '+t('unit-pcs'));setText('assembly-cycle',(a.fact?fmt(a.hours*3600/a.fact):t('no-data'))+' '+t('unit-s'));
    ['inspection-load','inspection-defect','inspection-count'].forEach(id=>setText(id,t('no-data')));
    setText('inspection-temp',equipment.qc.temp===null?t('no-data'):fmt(equipment.qc.temp)+'°C');
  }
  function renderStations() {
    document.querySelectorAll('.station').forEach(el=>{
      const m=lineMetrics(el.dataset.station),status=m?m.status:'UNKNOWN';
      el.classList.remove('is-ok','is-warn','is-bad','is-unknown'); el.classList.add('is-'+STATUS_CLASS[status]);
      el.querySelector('.station-status').textContent=t('status-'+status.toLowerCase());
      const names=Object.values(equipment).filter(eq=>eq.station===el.dataset.station).map(eq=>eq.name).join(', ');
      const details=m?`${names} · ${t('production')}: ${m.fact} · OEE ${pct(m.oee)} · ${t('defect-rate')}: ${m.fact?pct(1-m.quality):t('no-data')} · ${t('downtime')}: ${m.downtime} ${t('unit-min')}`:t('unknown-station');
      el.querySelector('.station-tip').textContent=details;el.title=details;
    });
  }
  function renderAnalytics() {
    $('analytics-body').innerHTML=selectedRows().map(row=>{
      const m=metrics([row]),ds=defectStatus(row.defects/row.fact*100),dt=downtimeStatus(m.downtime);
      return `<tr><td>${dateLabel(row.date)}</td><td>${esc(t('station-'+row.line))}</td><td>${row.plan} / ${row.fact}</td><td>${fmt(row.hours)}</td><td>${row.load}%</td><td>${pct(m.availability)}</td><td>${pct(m.performance)}</td><td>${pct(m.quality)}</td><td class="metric-${m.oee<.85?'warn':'ok'}">${pct(m.oee)}</td><td class="metric-${STATUS_CLASS[ds]}">${row.defects} (${m.fact?pct(1-m.quality):t('no-data')}) ${statusBadge(ds)}</td><td class="metric-${STATUS_CLASS[dt]}">${m.downtime} / 60 ${t('unit-min')} (${fmt(m.downtime/60*100)}%)${bar(m.downtime/60*100,t('daily-limit'),STATUS_CLASS[dt])}</td></tr>`;
    }).join('');
    $('model-body').innerHTML=MODEL_PLAN.map(model=>`<tr><td>${esc(model.name||t('other-models'))}</td><td>${fmt(model.plan,0)}</td><td>${t('no-data')}</td><td>-</td></tr>`).join('')+`<tr><td>${t('total')}</td><td>${fmt(NORMS.monthPlan,0)}</td><td>${fmt(sum(mtdRows(),'fact'),0)}</td><td>${pct(sum(mtdRows(),'fact')/NORMS.monthPlan)}${bar(sum(mtdRows(),'fact')/NORMS.monthPlan*100,t('completion'))}</td></tr>`;
    $('downtime-body').innerHTML=stopRows(selectedStops());
  }
  function stopRows(stops) {
    return stops.length?stops.map(stop=>`<tr><td>${dateLabel(stop.date)}</td><td>${esc(t('station-'+stop.line))}</td><td>${esc(stop.equipment)}</td><td>${esc(t(stop.cause))}</td><td>${stop.minutes} ${t('unit-min')}</td></tr>`).join(''):`<tr><td colspan="5">${t('no-stops')}</td></tr>`;
  }
  function risk(eq) {
    const missing=['temp','vib','load'].filter(key=>eq[key]===null);
    if(missing.length===3) return {value:null,missing};
    const thermal=eq.temp===null?0:2*Math.max(eq.temp-60,0)+(eq.temp>70?15:0);
    const vibration=eq.vib===null?0:10*Math.max(eq.vib-2,0)+(eq.vib>4?20:0);
    const loading=eq.load===null?0:.4*Math.max(eq.load-80,0);
    return {value:Math.round(clamp(10+thermal+vibration+loading+.3*eq.accumulatedDowntime,0,99)),missing};
  }
  function renderAI() {
    const eq=equipment[telemetryKey], result=risk(eq);
    setText('ai-machine',eq.name);setText('ai-risk',result.value===null?'-':result.value);
    $('ai-bar').style.width=(result.value||0)+'%'; $('ai-progress').setAttribute('aria-valuenow',String(result.value||0));
    const urgent=(eq.temp!==null&&eq.temp>70)||(eq.vib!==null&&eq.vib>4)||eq.accumulatedDowntime>=60||(result.value!==null&&result.value>=70);
    const recommendation=urgent?(eq.station==='painting'?'risk-filter':eq.station==='assembly'?'risk-chain':'risk-welding'):'risk-normal';
    setText('ai-recommendation',eq.name+': '+t(recommendation));
    const factors=document.querySelector('.ai-factors ul');
    factors.innerHTML=[`${t('temperature')}: ${eq.temp===null?t('no-data'):fmt(eq.temp)+'°C'} / 70°C`,`${t('vibration')}: ${eq.vib===null?t('no-data'):fmt(eq.vib)+' '+t('unit-vib')} / 4.0`,`${t('load')}: ${eq.load===null?t('no-data'):fmt(eq.load)+'%'}`,`${t('downtime')}: ${eq.accumulatedDowntime} ${t('unit-min')}`,].concat(result.missing.length?[t('partial-risk')+': '+result.missing.map(key=>t({temp:'temperature',vib:'vibration',load:'load'}[key])).join(', ')]:[]).map(text=>`<li>${esc(text)}</li>`).join('');
  }
  function renderTelemetry() {
    const eq=equipment[telemetryKey];
    $('telemetry-controls').innerHTML=`<label>${t('th-equipment')}<select id="telemetry-equipment">${Object.entries(equipment).map(([key,item])=>`<option value="${key}" ${key===telemetryKey?'selected':''}>${esc(item.name)}</option>`).join('')}</select></label><label>${t('load')}<input disabled value="${eq.load===null?t('no-data'):fmt(eq.load)+'%'}"></label>`+
      [['temp','temperature',-40,200,.1],['vib','vibration',0,50,.1]].map(([key,label,min,max,step])=>`<label>${t(label)}${key==='temp'?' °C':' '+t('unit-vib')}<input type="number" id="telemetry-${key}" data-sensor="${key}" ${sandboxEnabled?'disabled':''} min="${min}" max="${max}" step="${step}" placeholder="${esc(t('no-data'))}" value="${eq[key]===null?'':eq[key]}"></label>`).join('');
  }
  function renderIncidents() {
    const entries=[];
    selectedRows().forEach(row=>{
      const defect=row.defects/row.fact*100, m=metrics([row]);
      if(defect>NORMS.defect) entries.push({status:defectStatus(defect),date:row.date,name:t('station-'+row.line),message:t('excess-defects')+': '+fmt(defect)+'% / 2.0%'});
      if(m.downtime>=54) entries.push({status:downtimeStatus(m.downtime),date:row.date,name:t('station-'+row.line),message:t(m.downtime>60?'excess-limit':'near-limit')+': '+m.downtime+' / 60 '+t('unit-min')});
      if(m.oee<.85) entries.push({status:'WARNING',date:row.date,name:t('station-'+row.line),message:t('oee-low')+': '+pct(m.oee)});
    });
    selectedStops().forEach(stop=>entries.push({status:'WARNING',date:stop.date,name:stop.equipment,message:t(stop.cause)+' · '+stop.minutes+' '+t('unit-min')}));
    entries.sort((a,b)=>(b.status==='CRITICAL')-(a.status==='CRITICAL')||b.date.localeCompare(a.date));
    $('incidents-list').innerHTML=entries.map(entry=>`<li class="incident ${STATUS_CLASS[entry.status]}"><span class="incident-level">${esc(t('status-'+entry.status.toLowerCase()))}</span><span class="incident-main"><strong>${esc(entry.name)}</strong><span>${esc(entry.message)}</span></span><time datetime="${entry.date}">${dateLabel(entry.date)}</time></li>`).join('')||`<li>${t('no-incidents')}</li>`;
  }
  function renderModal() {
    if(!activeStation) return;
    setText('modal-title',t('station-'+activeStation)+' · '+periodLabel());
    const m=lineMetrics(activeStation), names=Object.values(equipment).filter(eq=>eq.station===activeStation).map(eq=>eq.name);
    if(!m) { $('modal-content').innerHTML=`<p>${t('unknown-station')}</p><p>${t('equipment-list')}: ${esc(names.join(', ')||t('no-data'))}</p>`;return; }
    const history=effectiveRecords().filter(row=>row.line===activeStation);
    $('modal-content').innerHTML=`<dl class="metrics"><div><dt>OEE / ≥85%</dt><dd>${pct(m.oee)}</dd></div><div><dt>${t('availability')}</dt><dd>${pct(m.availability)}</dd></div><div><dt>${t('performance')}</dt><dd>${pct(m.performance)}</dd></div><div><dt>${t('quality')}</dt><dd>${pct(m.quality)}</dd></div><div><dt>${t('equipment-list')}</dt><dd>${esc(names.join(', '))}</dd></div></dl><h3>${t('defect-history')}</h3><div class="defect-chart" role="img" aria-label="${esc(history.map(row=>dateLabel(row.date)+': '+(row.fact?fmt(row.defects/row.fact*100)+'%':t('no-data'))).join('; '))}">${history.map(row=>`<div class="defect-column"><span>${row.fact?pct(row.defects/row.fact):t('no-data')}</span><div class="bar-fill ${STATUS_CLASS[defectStatus(row.defects/row.fact*100)]}" style="height:${row.fact?Math.min(160,row.defects/row.fact*2500):0}px"></div><span>${dateLabel(row.date)}</span></div>`).join('')}</div><h3>${t('downtime-history')} · 01-02.10</h3><div class="table-wrap"><table class="table"><thead><tr><th>${t('period')}</th><th>${t('th-department')}</th><th>${t('th-equipment')}</th><th>${t('cause')}</th><th>${t('downtime')}</th></tr></thead><tbody>${stopRows(effectiveStops().filter(stop=>stop.line===activeStation))}</tbody></table></div>`;
  }
  let modalReturnFocus=null;
  function openStation(station,trigger) { activeStation=station;modalReturnFocus=trigger;renderModal();if(!$('station-modal').open) $('station-modal').showModal(); }
  $('modal-close').addEventListener('click',()=>$('station-modal').close());
  $('station-modal').addEventListener('close',()=>{activeStation=null;if(modalReturnFocus)modalReturnFocus.focus();});
  $('station-modal').addEventListener('click',event=>{if(event.target===$('station-modal')) {const rect=event.target.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)event.target.close();}});
  document.querySelectorAll('.station').forEach(el=>el.addEventListener('click',()=>openStation(el.dataset.station,el)));
  document.addEventListener('click',event=>{const btn=event.target.closest('[data-eq]');if(btn&&equipment[btn.dataset.eq])openStation(equipment[btn.dataset.eq].station,btn);});
  $('date-filter').addEventListener('change',event=>{selectedDate=event.target.value;if(selectedDate!=='all')$('sandbox-date').value=selectedDate;syncScenarioTelemetry();renderAll();renderTelemetry();renderSandboxInputs();});
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));
  $('btn-dashboard').addEventListener('click',()=>switchPanel('overview'));
  $('telemetry-controls').addEventListener('change',event=>{if(event.target.id==='telemetry-equipment'){telemetryKey=event.target.value;renderTelemetry();renderAI();}});
  $('telemetry-controls').addEventListener('input',event=>{
    const input=event.target;if(!input.dataset.sensor)return;
    if(input.validity.badInput||!input.checkValidity()){input.setCustomValidity(t('invalid-telemetry'));input.reportValidity();input.setCustomValidity('');return;}
    const value=input.value===''?null:Number(input.value);if(value!==null&&!Number.isFinite(value))return;
    equipment[telemetryKey][input.dataset.sensor]=value;renderAI();renderTable();renderPanels();
  });
  function showToast(message) { const el=document.createElement('div');el.className='toast';el.textContent=message;$('toast-container').appendChild(el);setTimeout(()=>el.remove(),3500); }
  function renderAll() { syncEquipment();renderKpi();renderTable();renderPanels();renderStations();renderAnalytics();renderAI();renderIncidents();renderModal();renderSandboxResults();renderProductSummary();document.body.classList.toggle('sandbox-active',sandboxEnabled); }
  // Сценарии в памяти не изменяют замороженные исходные записи.
  let sandboxEnabled=false;
  const scenarioRecords=new Map(), scenarioStops=new Map();
  const originalTelemetry=Object.fromEntries(Object.entries(equipment).map(([key,eq])=>[key,{temp:eq.temp,vib:eq.vib}]));
  const scenarioTelemetry=new Map();
  const scenarioId=row=>row.date+':'+row.line;
  const effectiveRecords=()=>sandboxEnabled?RECORDS.map(row=>scenarioRecords.get(scenarioId(row))||row):RECORDS;
  function effectiveStops() {
    if(!sandboxEnabled)return STOPS;
    return STOPS.filter(stop=>!scenarioStops.has(scenarioId(stop))).concat([...scenarioStops.values()].filter(stop=>stop.minutes>0));
  }
  const scenarioEquipment=(line,date)=>line==='welding'?(date==='2026-10-01'?'welding':'welding4'):line==='painting'?'paint':'assembly';
  function syncScenarioTelemetry() {
    Object.entries(equipment).forEach(([key,eq])=>Object.assign(eq,originalTelemetry[key]));
    if(!sandboxEnabled)return;
    const day=selectedDate==='all'?'2026-10-02':selectedDate;
    scenarioTelemetry.forEach((values,id)=>{const [date,line]=id.split(':');if(date===day)Object.assign(equipment[scenarioEquipment(line,date)],values);});
  }
  function renderSandboxInputs() {
    const day=$('sandbox-date').value;
    $('sandbox-inputs').innerHTML=effectiveRecords().filter(row=>row.date===day).map(row=>{
      const telemetry=scenarioTelemetry.get(scenarioId(row))||originalTelemetry[scenarioEquipment(row.line,day)];
      const downtime=sum(effectiveStops().filter(stop=>stop.date===day&&stop.line===row.line),'minutes');
      return `<tr data-line="${row.line}"><th>${esc(t('station-'+row.line))}</th>`+
        [['plan',row.plan,1,100000,1,'sandbox-plan'],['fact',row.fact,0,100000,1,'production'],['defects',row.defects,0,100000,1,'defect-rate'],['downtime',downtime,0,960,1,'downtime'],['hours',row.hours,0,16,.1,'hours'],['load',row.load,0,100,.1,'load'],['temp',telemetry.temp,-40,200,.1,'temperature'],['vib',telemetry.vib,0,50,.1,'vibration']].map(([key,value,min,max,step,label])=>`<td data-label="${esc(t(label))}"><input type="number" data-field="${key}" min="${min}" max="${max}" step="${step}" ${key==='temp'||key==='vib'?'':'required'} value="${value===null?'':value}" placeholder="${esc(t('no-data'))}" aria-label="${esc(t('station-'+row.line)+' · '+t(label))}"></td>`).join('')+'</tr>';
    }).join('');
    setText('sandbox-error','');
  }
  function applySandboxForm() {
    const day=$('sandbox-date').value, drafts=[];
    for(const tr of $('sandbox-inputs').querySelectorAll('tr')) {
      const values={};
      for(const input of tr.querySelectorAll('input')) {
        if(!input.checkValidity()||(input.value!==''&&!Number.isFinite(Number(input.value)))) {setText('sandbox-error',t('sandbox-invalid')+' · '+t('station-'+tr.dataset.line));input.reportValidity();return false;}
        values[input.dataset.field]=input.value===''?null:Number(input.value);
      }
      if(values.defects>values.fact||(values.fact>0&&values.hours===0)||values.hours*60+values.downtime>NORMS.minutes) {setText('sandbox-error',t('sandbox-consistency')+' · '+t('station-'+tr.dataset.line));return false;}
      drafts.push({line:tr.dataset.line,values});
    }
    sandboxEnabled=true;$('sandbox-enabled').checked=true;
    drafts.forEach(({line,values})=>{
      const id=day+':'+line, base=RECORDS.find(row=>scenarioId(row)===id);
      scenarioRecords.set(id,{...base,plan:values.plan,fact:values.fact,defects:values.defects,hours:values.hours,load:values.load});
      scenarioStops.set(id,{date:day,line,equipment:equipment[scenarioEquipment(line,day)].name,cause:'sandbox-stop',minutes:values.downtime});
      scenarioTelemetry.set(id,{temp:values.temp,vib:values.vib});
    });
    selectedDate=day;$('date-filter').value=day;
    telemetryKey='paint';syncScenarioTelemetry();renderAll();renderTelemetry();setText('sandbox-error','');return true;
  }
  function renderSandboxResults() {
    $('sandbox-status').hidden=!sandboxEnabled;
    $('sandbox-panel').hidden=false;
    if(!sandboxEnabled){setText('sandbox-results','');return;}
    const rows=selectedRows(), base=metrics(RECORDS.filter(row=>selectedDate==='all'||row.date===selectedDate),STOPS), current=metrics(rows);
    const delta=(value,original,d=1)=>value===null||original===null?t('no-data'):(value-original>0?'+':'')+fmt(value-original,d);
    $('sandbox-results').innerHTML=`<h3>${t('sandbox-comparison')} · ${esc(periodLabel())}</h3><div class="table-wrap"><table class="table"><thead><tr><th>${t('sandbox-indicator')}</th><th>${t('sandbox-original')}</th><th>${t('sandbox-scenario')}</th><th>${t('sandbox-delta')}</th></tr></thead><tbody>`+
      [[t('production'),base.fact,current.fact,0,''],['OEE',base.oee*100,current.oee*100,1,t('sandbox-pp')],[t('quality'),base.quality===null?null:base.quality*100,current.quality===null?null:current.quality*100,2,t('sandbox-pp')],[t('downtime'),base.downtime,current.downtime,0,t('unit-min')]].map(([label,b,c,d,unit])=>`<tr><td>${esc(label)}</td><td>${b===null?t('no-data'):fmt(b,d)}</td><td>${c===null?t('no-data'):fmt(c,d)}</td><td>${delta(c,b,d)} ${esc(unit)}</td></tr>`).join('')+`</tbody></table></div><ul class="sandbox-consequences">`+
      ['welding','painting','assembly'].map(line=>{const m=lineMetrics(line);return `<li>${esc(t('station-'+line))}: ${statusBadge(m.status)} · OEE ${pct(m.oee)} · ${t('sandbox-gap')}: ${fmt(Math.max(0,m.plan-m.fact),0)} ${t('unit-pcs')}</li>`;}).join('')+`</ul><p class="card-meta">${t('sandbox-limitations')}</p>`;
  }
  $('sandbox-enabled').addEventListener('change',event=>{
    sandboxEnabled=event.target.checked;
    if(sandboxEnabled){if(selectedDate==='all')selectedDate=$('sandbox-date').value;else $('sandbox-date').value=selectedDate;$('date-filter').value=selectedDate;}
    syncScenarioTelemetry();renderAll();renderTelemetry();renderSandboxInputs();
  });
  $('sandbox-form').addEventListener('submit',event=>{event.preventDefault();applySandboxForm();});
  $('sandbox-date').addEventListener('change',()=>{
    selectedDate=$('sandbox-date').value;$('date-filter').value=selectedDate;syncScenarioTelemetry();renderAll();renderTelemetry();renderSandboxInputs();
  });
  $('sandbox-reset').addEventListener('click',()=>{
    scenarioRecords.clear();scenarioStops.clear();scenarioTelemetry.clear();syncScenarioTelemetry();renderAll();renderTelemetry();renderSandboxInputs();
  });
  $('sandbox-form').addEventListener('click',event=>{
    const button=event.target.closest('[data-preset]');if(!button)return;
    renderSandboxInputs();
    const preset=button.dataset.preset;
    $('sandbox-inputs').querySelectorAll('tr').forEach(tr=>{
      const values=preset==='shutdown'?{fact:0,defects:0,hours:0,load:0,downtime:960,temp:35,vib:0}:
        preset==='recovery'?{fact:120,defects:1,hours:8,load:95,downtime:0,temp:60,vib:2}:
        tr.dataset.line==='painting'?{fact:80,defects:12,hours:6,load:100,downtime:120,temp:85,vib:5.5}:{};
      Object.entries(values).forEach(([field,value])=>tr.querySelector(`[data-field="${field}"]`).value=value);
    });
    applySandboxForm();
  });
  const viewers = {};
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const MODEL_I18N={
    'model-loading':['Загрузка моделей…','Модельдер жүктелуде…'],
    'model-ready':['Модели загружены','Модельдер жүктелді'],
    'model-fallback':['Показана резервная схема','Резервтік сызба көрсетілген'],
    'model-note':['Визуальные аналоги оборудования. Планировка и автомобиль не являются точными CAD-моделями завода Allur.','Жабдықтың көрнекі баламалары. Жоспар мен автомобиль Allur зауытының нақты CAD модельдері емес.'],
    'model-sources':['Источники 3D-моделей и лицензии','3D модельдердің дереккөздері мен лицензиялары'],
    'model-sources-note':['Робот ABB IRB 2400 - ROS-Industrial (Apache-2.0). Универсальный седан - Kenney Car Kit (CC0). Конвейер, фильтры, стол и портал датчиков - 3D Assets (CC0; автор указывает использование ИИ). Дополнительные модели инструмента, стоек, окраски и контроля качества взяты из предоставленной папки Allur_3d models.','ABB IRB 2400 роботы - ROS-Industrial (Apache-2.0). Әмбебап седан - Kenney Car Kit (CC0). Конвейер, сүзгілер, үстел және датчик порталы - 3D Assets (CC0; автор ЖИ қолданылғанын көрсетеді). Қосымша құралдар, сөрелер, бояу және сапаны бақылау модельдері берілген Allur_3d models бумасынан алынды.']
  };
  Object.entries(MODEL_I18N).forEach(([key,pair])=>{I18N.ru[key]=pair[0];I18N.kk[key]=pair[1];});
  const modelCache=new Map();
  function loadModel(name){
    if(modelCache.has(name))return modelCache.get(name);
    const result=(async()=>{
      if(!THREE.GLTFLoader)throw new Error('Model loader unavailable');
      const loader=new THREE.GLTFLoader();
      if(location.protocol!=='file:'){
        try{return await new Promise((resolve,reject)=>loader.load('assets/models/'+name+'.glb',resolve,undefined,reject));}catch{/* Local binary fallback keeps the interface usable. */}
      }
      const encoded=window.ALLUR_MODEL_DATA?.[name];
      if(!encoded)throw new Error('Model data unavailable');
      const buffer=Uint8Array.from(atob(encoded),character=>character.charCodeAt(0)).buffer;
      return await new Promise((resolve,reject)=>loader.parse(buffer,'',resolve,reject));
    })();
    modelCache.set(name,result);return result;
  }
  function cloneModel(gltf){
    const root=gltf.scene.clone(true);
    root.traverse(object=>{
      if(!object.isMesh)return;
      object.castShadow=true;object.receiveShadow=true;
      object.material=Array.isArray(object.material)?object.material.map(material=>material.clone()):object.material.clone();
    });
    return root;
  }
  function renderModelStates(){
    Object.values(viewers).forEach(viewer=>{
      const state=viewer.container.closest('.card').querySelector('[data-model-status]');
      if(state)state.textContent=t(viewer.modelPending?'model-loading':viewer.modelFailed?'model-fallback':'model-ready');
    });
  }
  function trackModel(viewer,operation){
    viewer.modelPending=(viewer.modelPending||0)+1;renderModelStates();
    operation.then(()=>{viewer.container.dataset.modelsLoaded=String((Number(viewer.container.dataset.modelsLoaded)||0)+1);}).catch(()=>{viewer.modelFailed=true;}).finally(()=>{
      viewer.modelPending--;
      renderModelStates();viewer.resize();if(viewer.visible)viewer.renderer.render(viewer.scene,viewer.camera);
    });
  }
  function mountImportedCar(viewer,car,paintSource=null){
    trackModel(viewer,loadModel('sedan').then(gltf=>{
      const root=cloneModel(gltf);root.name='Imported_Kenney_Sedan';
      root.rotation.y=Math.PI/2;root.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(root),size=bounds.getSize(new THREE.Vector3());
      const scale=3/size.x;root.scale.setScalar(scale);
      root.position.y=-bounds.min.y*scale;
      const wheels=[];root.traverse(object=>{
        if(object.name.startsWith('wheel-')){object.userData.axle='x';wheels.push(object);}
      });
      if(wheels.length!==4)throw new Error('Four wheel pivots required');
      car.children.forEach(object=>object.visible=false);car.add(root);car.userData.wheels=wheels;
      viewer.importedCar=root;viewer.importedWheels=wheels;
      if(paintSource){
        const body=root.getObjectByName('body');
        if(body?.isMesh&&body.material.map?.image){
          const image=body.material.map.image,canvas=document.createElement('canvas');
          canvas.width=image.width;canvas.height=image.height;const context=canvas.getContext('2d');context.drawImage(image,0,0);
          const original=context.getImageData(0,0,canvas.width,canvas.height);const mask=[];
          for(let i=0;i<original.data.length;i+=4){const [r,g,b]=original.data.slice(i,i+3);if(r>g*1.4&&r>b*1.4&&r>100)mask.push(i);}
          const texture=new THREE.CanvasTexture(canvas);texture.flipY=false;texture.encoding=THREE.sRGBEncoding;texture.magFilter=THREE.NearestFilter;body.material.map=texture;
          const pixels=context.createImageData(canvas.width,canvas.height);pixels.data.set(original.data);
          let lastColor='',lastPaintTime=-Infinity;viewer.repaintImportedCar=color=>{
            const srgb=color.clone().convertLinearToSRGB(),hex=srgb.getHexString(),now=performance.now();if(hex===lastColor||now-lastPaintTime<80)return;lastColor=hex;lastPaintTime=now;
            mask.forEach(i=>{pixels.data[i]=Math.round(srgb.r*255);pixels.data[i+1]=Math.round(srgb.g*255);pixels.data[i+2]=Math.round(srgb.b*255);});
            context.putImageData(pixels,0,0);texture.needsUpdate=true;
          };
          viewer.repaintImportedCar(paintSource.color);
        }
      }

    }));
  }
  function mountFactoryProp(viewer,name,position,scale=[1,1,1],angle=0){
    trackModel(viewer,loadModel(name).then(gltf=>{
      const root=cloneModel(gltf);root.name='Imported_'+name;root.position.fromArray(position);root.scale.fromArray(scale);root.rotation.y=angle;viewer.scene.add(root);
    }));
  }
  function mountDetailProp(viewer,name,position,targetSize=2,angle=0){
    trackModel(viewer,loadModel(name).then(gltf=>{
      const root=cloneModel(gltf);root.name='Detail_'+name;
      root.position.set(0,0,0);root.rotation.set(0,0,0);root.scale.set(1,1,1);root.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(root),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
      const longest=Math.max(size.x,size.y,size.z)||1;
      root.position.set(-center.x,-bounds.min.y,-center.z);
      const wrap=new THREE.Group();wrap.add(root);wrap.scale.setScalar(targetSize/longest);wrap.position.fromArray(position);wrap.rotation.y=angle;
      viewer.scene.add(wrap);
    }));
  }
  function mountAssemblyRobots(viewer,fallbacks){
    trackModel(viewer,loadModel('abb-irb2400').then(gltf=>{
      const rigs=fallbacks.map((fallback,index)=>{
        const placement=new THREE.Group();placement.name='Imported_Assembly_ABB_'+index;
        placement.position.copy(fallback.position);placement.rotation.y=index?Math.PI/2:-Math.PI/2;
        const root=cloneModel(gltf);root.scale.setScalar(1.65);placement.add(root);
        const joints=Object.fromEntries(['joint_1','joint_2','joint_3','joint_5','joint_lever_a','joint_lever_b'].map(name=>[name,root.getObjectByName(name)]));
        if(Object.values(joints).some(joint=>!joint))throw new Error('Robot hierarchy incomplete');
        const tool=root.getObjectByName('tool0');
        [-1,1].forEach(side=>{const finger=box(.06,.08,.2,mat(0x999999,.3,.7));finger.position.set(side*.055,0,.1);tool.add(finger);});
        fallback.visible=false;viewer.scene.add(placement);return {joints,index};
      });
      const originalUpdate=viewer.update;let phase=0;
      viewer.update=(dt,time)=>{
        if(equipment.assembly.status!=='STOPPED'&&!reducedMotion)phase+=dt;
        rigs.forEach(({joints,index})=>{
          joints.joint_1.rotation.z=Math.sin(phase*.5+index)*.15;
          joints.joint_2.rotation.y=.25+Math.sin(phase*.7+index)*.06;
          joints.joint_3.rotation.y=-.2+Math.sin(phase*.7+index+1)*.04;
          joints.joint_5.rotation.y=.55;
          joints.joint_lever_a.rotation.y=joints.joint_3.rotation.y;
          joints.joint_lever_b.rotation.y=-joints.joint_3.rotation.y;
        });originalUpdate(dt,time);
      };
      viewer.update(0,0);
    }));
  }
  function mountImportedRobot(viewer,fallback,onTip,glow,arcLight){
    trackModel(viewer,loadModel('abb-irb2400').then(gltf=>{
      const root=cloneModel(gltf);root.name='Imported_ABB_IRB_2400';root.scale.setScalar(1.8);
      const joints=Object.fromEntries(['joint_1','joint_2','joint_3','joint_4','joint_5','joint_6','joint_lever_a','joint_lever_b'].map(name=>[name,root.getObjectByName(name)]));
      const tool=root.getObjectByName('tool0');if(!tool||Object.values(joints).some(joint=>!joint))throw new Error('Robot hierarchy incomplete');
      const nozzle=new THREE.Mesh(new THREE.CylinderGeometry(.035,.065,.3,16),mat(0x939393,.35,.7));nozzle.rotation.x=Math.PI/2;nozzle.position.z=.15;tool.add(nozzle);
      const tip=new THREE.Object3D();tip.position.z=.3;tool.add(tip);tip.add(glow,arcLight);onTip(tip);
      fallback.visible=false;viewer.scene.add(root);viewer.importedRobot=root;
      const originalUpdate=viewer.update;
      let phase=0;
      viewer.update=(dt,time)=>{
        const running=equipment.welding.status!=='STOPPED';
        if(running&&!reducedMotion)phase+=dt;
        joints.joint_1.rotation.z=Math.sin(phase*.5)*.12;
        joints.joint_2.rotation.y=.25+Math.sin(phase*.8)*.035;
        joints.joint_3.rotation.y=-.20+Math.sin(phase*.8+1)*.025;
        joints.joint_5.rotation.y=.65;
        joints.joint_lever_a.rotation.y=joints.joint_3.rotation.y;
        joints.joint_lever_b.rotation.y=-joints.joint_3.rotation.y;
        root.updateMatrixWorld(true);originalUpdate(dt,time);
      };
      viewer.update(0,0);
    }));
  }

  function createViewer(containerId, cfg) {
    const container = $(containerId);

    if (typeof THREE === 'undefined' || !THREE.OrbitControls) {
      container.innerHTML = '<p class="viewer-error" data-i18n="viewer-error">' + t('viewer-error') + '</p>';
      return null;
    }

    // Убрать индикатор загрузки
    const loading = container.querySelector('.viewer-loading');
    if (loading) loading.remove();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x181818);
    scene.fog = new THREE.Fog(0x181818, cfg.fog[0], cfg.fog[1]);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(cfg.camera[0], cfg.camera[1], cfg.camera[2]);

    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true }); }
    catch (error) {
      container.innerHTML = '<p class="viewer-error" data-i18n="webgl-error">' + t('webgl-error') + '</p>';
      return null;
    }
    renderer.domElement.addEventListener('webglcontextlost', event => {
      event.preventDefault();
      showToast(t('webgl-error'));
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(cfg.target[0], cfg.target[1], cfg.target[2]);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = cfg.zoom[0];
    controls.maxDistance = cfg.zoom[1];
    controls.maxPolarAngle = Math.PI / 2 - 0.04;
    controls.autoRotate = false;
    controls.update();

    // Освещение - тёмная тема
    scene.add(new THREE.HemisphereLight(0x404850, 0x1A1F26, 0.6));

    const sun = new THREE.DirectionalLight(0xffffff, 0.85);
    sun.position.set(6, 11, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const s = cfg.shadowSize;
    sun.shadow.camera.left = -s; sun.shadow.camera.right = s;
    sun.shadow.camera.top = s;   sun.shadow.camera.bottom = -s;
    sun.shadow.camera.near = 1;  sun.shadow.camera.far = 40;
    sun.shadow.bias = -0.0004;
    scene.add(sun);

    const rim = new THREE.DirectionalLight(0xE53935, 0.35);
    rim.position.set(-8, 4, -6);
    scene.add(rim);

    // Пол + сетка - тёмная тема
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80),
      new THREE.MeshStandardMaterial({ color: 0x161B22, roughness: 0.95, metalness: 0.05 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(40, 40, 0x30363D, 0x21262D);
    grid.position.y = 0.01;
    scene.add(grid);

    let responsiveScale=1;
    const initialCamera=cfg.camera.slice();
    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      const nextScale=Math.max(1,1.6/(w/h));
      if(Math.abs(nextScale-responsiveScale)>.001){
        camera.position.sub(controls.target).multiplyScalar(nextScale/responsiveScale).add(controls.target);
        responsiveScale=nextScale;
      }
      cfg.camera.forEach((value,index)=>initialCamera[index]=cfg.target[index]+(value-cfg.target[index])*responsiveScale);
      controls.maxDistance=cfg.zoom[1]*responsiveScale;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    if (window.ResizeObserver) new ResizeObserver(resize).observe(container);
    window.addEventListener('resize', resize);
    resize();

    const viewer = { 
      scene, camera, renderer, controls, resize, 
      visible: true, 
      update: function () {},
      autoRotate: false,
      initialCamera: initialCamera,
      initialTarget: cfg.target,
      container: container
    };

    if (window.IntersectionObserver) {
      new IntersectionObserver((entries) => { viewer.visible = entries[0].isIntersecting; }).observe(container);
    }

    viewers[containerId] = viewer;
    return viewer;
  }

  /* Вспомогательные функции для мешей */
  function mat(color, rough, metal) {
    return new THREE.MeshStandardMaterial({ color: color, roughness: rough, metalness: metal });
  }
  function addTo(parent, mesh, x, y, z) {
    mesh.position.set(x, y, z);
    parent.add(mesh);
    return mesh;
  }
  const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  const cyl = (rt, rb, h, m, seg) => new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg || 32), m);
  const sphere = (r, m) => new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), m);

  function cylinderBetween(a, b, radius, material, segments=16) {
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, segments), material);
    mesh.position.copy(a).add(b).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), dir.clone().normalize());
    return mesh;
  }

  function jointZ(r, len, m) {
    const j = cyl(r, r, len, m);
    j.rotation.x = Math.PI / 2;
    return j;
  }

  function enableShadows(root) {
    root.traverse((o) => {
      if (o.isMesh && !o.userData.noShadow) { o.castShadow = true; o.receiveShadow = true; }
    });
  }

  function updateBeacon(lamp, light, status, t) {
    let color = 0x3FB950;
    let on = true;
    if ((status === 'WARNING' || status === 'CRITICAL')) { color = 0xF0883E; on = Math.sin(t * 7) > 0; }
    if (status === 'STOPPED') { color = 0xF85149; }
    lamp.material.color.setHex(color);
    lamp.material.emissive.setHex(color);
    lamp.material.emissiveIntensity = on ? 1.8 : 0.1;
    if (light) { light.color.setHex(color); light.intensity = on ? 0.9 : 0; }
  }

  /* ----------------------------------------------------------
     15. 3D МОДЕЛЬ #1 - ЛИНИЯ СВАРКИ-1 (ABB-01)
     ---------------------------------------------------------- */
  function initWeldingLine() {
    const v = createViewer('welding-view', {
      camera: [9, 6.4, 10.5], target: [0.15, 1.45, 0],
      zoom: [6, 22], fog: [22, 48], shadowSize: 12
    });
    if (!v) return;
    const scene = v.scene;

    const brand  = mat(0xE53935, 0.45, 0.25);
    const dark   = mat(0x2D333B, 0.66, 0.35);
    const black  = mat(0x161B22, 0.82, 0.18);
    const steel  = mat(0x6E7681, 0.42, 0.72);
    const metal  = mat(0xA6B0BA, 0.22, 0.9);
    const white  = mat(0xD0D7DE, 0.56, 0.18);
    const glass  = new THREE.MeshStandardMaterial({ color: 0x0D1117, roughness: 0.12, metalness: 0.85 });
    const bodyMat= new THREE.MeshStandardMaterial({ color: 0xAAB4BE, roughness: 0.52, metalness: 0.62 });

    function createWeldRobot(scale=1){
      const g=new THREE.Group();
      const base=addTo(g, box(1.15,0.28,1.15,dark), 0,0.14,0);
      addTo(g, cyl(0.52,0.58,0.34,brand,24), 0,0.45,0);
      addTo(g, cyl(0.58,0.58,0.08,black,24), 0,0.18,0);

      const turret=new THREE.Group(); turret.position.set(0,0.62,0); g.add(turret);
      addTo(turret, box(0.82,0.72,0.94,brand), -0.06,0.38,0);
      addTo(turret, jointZ(0.36,0.82,black), 0.18,0.72,0);

      const shoulder=new THREE.Group(); shoulder.position.set(0.18,0.72,0); turret.add(shoulder);
      addTo(shoulder, box(0.46,1.62,0.52,white), 0,0.8,0);
      addTo(shoulder, box(0.04,1.34,0.48,brand), 0.14,0.8,0);

      const elbow=new THREE.Group(); elbow.position.set(0,1.58,0); shoulder.add(elbow);
      addTo(elbow, jointZ(0.30,0.72,black), 0,0,0);
      addTo(elbow, box(1.62,0.34,0.42,white), 0.82,0,0);
      addTo(elbow, box(0.74,0.08,0.36,brand), 0.58,0.06,0);

      const wrist=new THREE.Group(); wrist.position.set(1.62,0,0); elbow.add(wrist);
      addTo(wrist, sphere(0.24,black), 0,0,0);
      addTo(wrist, cyl(0.11,0.11,0.28,metal,16), 0,-0.18,0);
      const tool=new THREE.Group(); tool.position.set(0,-0.18,0); wrist.add(tool);
      // Горелка немного длиннее, чтобы сопло могло физически достать до кузова при сварке.
      const p0=new THREE.Vector3(.02,0,0), p1=new THREE.Vector3(.34,-.04,0), p2=new THREE.Vector3(.64,-.28,0), p3=new THREE.Vector3(.92,-.72,0);
      tool.add(cylinderBetween(p0,p1,.060,black,18));
      tool.add(cylinderBetween(p1,p2,.048,metal,18));
      tool.add(cylinderBetween(p2,p3,.028,metal,14));
      tool.add(cylinderBetween(new THREE.Vector3(.92,-.72,0), new THREE.Vector3(1.00,-.88,0), .034, dark, 14));
      const tip=new THREE.Object3D(); tip.position.set(1.03,-.95,0); tool.add(tip);
      const glow=addTo(tool, sphere(.05,new THREE.MeshStandardMaterial({ color:0xffffff, emissive:0xAED6FF, emissiveIntensity:0 })), 1.03,-.95,0);
      glow.userData.noShadow=true;

      g.scale.setScalar(scale);
      return { root:g, joints:{turret,shoulder,elbow,wrist,tool}, tip, glow };
    }

    // База и оснастка рабочего места
    addTo(scene, box(10.8,0.22,5.8,dark), 0,0.11,0);
    addTo(scene, box(4.6,0.56,2.5,black), 0,0.28,0);
    [-1.2,1.2].forEach(z=>addTo(scene, box(4.2,0.08,0.06,steel), 0,0.62,z));
    [-1.05,1.05].forEach(z=>[-1.65,-.75,.15,1.05].forEach(x=>addTo(scene, box(0.18,0.18,0.36,brand), x,0.86,z)));
    addTo(scene, box(4.4,0.08,2.35,metal), 0,0.76,0);

    // Кузов автомобиля (кузов в белом цвете)
    const car=new THREE.Group(); car.position.set(0,0.76,0); scene.add(car);
    addTo(car, box(2.85,0.46,1.46,bodyMat), 0,0.36,0);
    addTo(car, box(1.54,0.58,1.28,bodyMat), -0.08,0.92,0);
    addTo(car, box(1.12,0.18,1.34,glass), -0.08,0.96,0);
    addTo(car, box(0.72,0.16,1.36,bodyMat), -1.08,0.72,0);
    addTo(car, box(0.60,0.14,1.34,bodyMat), 1.12,0.68,0);
    // open windows / cut lines
    addTo(car, box(0.04,0.44,1.24,black), -0.12,0.92,0);
    addTo(car, box(1.02,0.04,0.04,black), -0.18,0.72,0.72);
    addTo(car, box(1.02,0.04,0.04,black), -0.18,0.72,-0.72);
    addTo(car, box(0.04,0.54,0.04,black), -0.44,0.80,0.72);
    addTo(car, box(0.04,0.54,0.04,black), -0.44,0.80,-0.72);
    addTo(car, box(0.04,0.54,0.04,black), 0.34,0.80,0.72);
    addTo(car, box(0.04,0.54,0.04,black), 0.34,0.80,-0.72);
    addTo(car, box(0.82,0.04,0.04,black), 0.86,0.66,0.72);
    addTo(car, box(0.82,0.04,0.04,black), 0.86,0.66,-0.72);
    // wheel openings
    [-0.9,0.95].forEach(x=>[-0.73,0.73].forEach(z=>addTo(car, cyl(0.28,0.28,0.16,black,20), x,0.18,z).rotation.x=Math.PI/2));

    // fence moved away from machine to avoid intersections in view
    const fenceMat = mat(0xE85D2A, 0.52, 0.25), wireMat = mat(0x7D8590, 0.72, 0.48);
    [[-5.6, -3.6, -5.6, 3.6],[ -5.6,3.6, 5.6,3.6],[ 5.6,3.6,5.6,-3.6]].forEach(seg=>{
      const [x1,z1,x2,z2]=seg; const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz);
      const grp=new THREE.Group(); grp.position.set((x1+x2)/2,0,(z1+z2)/2); grp.rotation.y=-Math.atan2(dz,dx); scene.add(grp);
      [-len/2,len/2].forEach(x=>addTo(grp, box(.08,1.75,.08,fenceMat), x,.875,0));
      [0.42,1.02,1.58].forEach(y=>addTo(grp, box(len,.04,.04,wireMat), 0,y,0));
      for(let x=-len/2+.35;x<len/2;x+=.35) addTo(grp, box(.022,1.08,.022,wireMat), x,.92,0);
    });
    addTo(scene, box(1.0,1.8,.7,dark), -4.6,0.9,-2.9);
    addTo(scene, box(.66,.42,.03,new THREE.MeshStandardMaterial({ color:0x071119, emissive:0x2E7CB8, emissiveIntensity:.4 })), -4.6,1.3,-2.53).userData.noShadow=true;

    addTo(scene, cyl(0.04,0.04,.7,steel,8), -4.1,0.55,2.6);
    const lamp = addTo(scene, cyl(0.11,0.11,.22,new THREE.MeshStandardMaterial({ color:0x3FB950, emissive:0x3FB950, emissiveIntensity:1.2, roughness:0.4 }), 16), -4.1,1.0,2.6);
    lamp.userData.noShadow=true;

    const robotConfigs=[
      // Базы придвинуты ближе, чтобы кончик горелки мог касаться панелей кузова.
      { pos:[-3.75,0,-2.05], target:new THREE.Vector3(-0.10,1.78,-0.04), zone:'roof',  pose:{ shoulder:-0.82, elbow:1.42, wrist:-0.82, tool:-0.34 }, phase:0.0 },
      { pos:[3.75,0,2.25],  target:new THREE.Vector3(-0.05,1.12,0.78),  zone:'door',  pose:{ shoulder:-1.02, elbow:1.62, wrist:-0.92, tool:-0.38 }, phase:1.8 },
      { pos:[4.00,0,-2.25], target:new THREE.Vector3(1.28,0.98,-0.72), zone:'trunk', pose:{ shoulder:-0.94, elbow:1.40, wrist:-0.76, tool:-0.30 }, phase:3.5 }
    ];

    const robots=robotConfigs.map(cfg=>{
      const unit=createWeldRobot(cfg.zone==='roof'?1.04:(cfg.zone==='door'?0.98:0.94));
      unit.root.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      // Рука моделируется направленной вдоль локальной +X, чтобы смотреть на кузов нужно инвертировать Z в atan2.
      const dx=cfg.target.x-cfg.pos[0], dz=cfg.target.z-cfg.pos[2];
      unit.root.rotation.y = Math.atan2(-dz, dx);
      scene.add(unit.root);
      return { ...unit, cfg };
    });

    // Инструменты для сцены: реквизит по периметру, чтобы роботы и автомобиль оставались читаемыми.
    mountDetailProp(v,'btf-tool-rack',[-4.75,0,-2.75],1.45,.18);
    mountDetailProp(v,'btf-weld-gun',[-4.85,0,2.25],1.55,-.22);

    // Видимые точки шва: крыша, дверь и багажник. Эффекты сварки привязаны к кузову,
    // пока робот кратко отводится для перемещения между точками.
    const weldTargets = robotConfigs.map(cfg=>{
      const spot=addTo(scene,sphere(.055,new THREE.MeshStandardMaterial({
        color:0xffffff, emissive:0x9fdcff, emissiveIntensity:.15, roughness:1
      })),cfg.target.x,cfg.target.y,cfg.target.z);
      spot.userData.noShadow=true;
      return spot;
    });
    const weldArcLight=new THREE.PointLight(0xaedcff,0,3.2,2);scene.add(weldArcLight);

    enableShadows(scene);

    const COUNT=40;
    const pos=new Float32Array(COUNT*3), vel=new Float32Array(COUNT*3), life=new Float32Array(COUNT);
    const sparkGeo=new THREE.BufferGeometry(); sparkGeo.setAttribute('position', new THREE.BufferAttribute(pos,3));
    const sparkMat=new THREE.PointsMaterial({ color:0xFFC45A, size:0.07, transparent:true, opacity:0.95, blending:THREE.AdditiveBlending, depthWrite:false });
    const sparks=new THREE.Points(sparkGeo, sparkMat); sparks.frustumCulled=false; scene.add(sparks);
    for(let i=0;i<COUNT;i++) life[i]=Math.random();

    const tipPos=new THREE.Vector3();
    let phase=0, lastBurst=0;
    v.update = function(dt,t){
      if (reducedMotion) dt *= 0.35;
      const status = equipment.welding.status;
      const running = status !== 'STOPPED';
      const speed = (status==='WARNING'||status==='CRITICAL') ? 1.18 : 0.96;
      if (running && !reducedMotion) phase += dt * speed;

      robots.forEach((r,idx)=>{
        const p=r.cfg.pose;
        const local=((phase*0.48 + r.cfg.phase)%1 + 1)%1;
        const retract = local<0.52 ? 0 : local<0.68 ? THREE.MathUtils.smoothstep(local,0.52,0.68) : local<0.86 ? 1-THREE.MathUtils.smoothstep(local,0.68,0.86) : 0;
        r.joints.turret.rotation.y = Math.sin(phase*0.55 + idx)*0.04;
        // Меньшее движение отвода, чтобы горелка в основном оставалась в контакте и лишь немного оттягивалась.
        r.joints.shoulder.rotation.z = p.shoulder + retract*0.10 + Math.sin(phase*1.4 + idx)*0.04;
        r.joints.elbow.rotation.z    = p.elbow    - retract*0.12 + Math.sin(phase*1.2 + idx + 1)*0.04;
        r.joints.wrist.rotation.z    = p.wrist    + retract*0.10 + Math.sin(phase*1.6 + idx + .4)*0.04;
        r.joints.tool.rotation.x     = p.tool     + retract*0.05 + Math.sin(phase*1.1 + idx)*0.02;
        r.glow.material.emissiveIntensity = 0;
      });

      const activeIndex=Math.floor(phase*0.7)%robots.length;
      const active = robots[activeIndex];
      const cycle=((phase*0.48 + active.cfg.phase)%1 + 1)%1;
      const weldingNow = running && (cycle < 0.48 || cycle > 0.88);
      active.tip.getWorldPosition(tipPos);
      // Видимая точка сварки и эффекты точно на кончике манипулятора.
      const seam=tipPos;
      weldTargets.forEach((spot,i)=>{
        if(i===activeIndex) spot.position.copy(seam);
        spot.material.emissiveIntensity=(weldingNow&&i===activeIndex)?3.4:.12;
      });
      active.glow.material.emissiveIntensity = weldingNow ? 2.8 : 0.25;
      weldArcLight.position.copy(seam); weldArcLight.intensity=weldingNow?2.0:0;
      sparks.visible = weldingNow;
      if (weldingNow) {
        if (phase-lastBurst>.18){
          for (let i=0;i<COUNT;i++){
            life[i]=0.45+Math.random()*0.5;
            pos[i*3]=seam.x; pos[i*3+1]=seam.y; pos[i*3+2]=seam.z;
            vel[i*3]=(Math.random()-.5)*1.2; vel[i*3+1]=0.7+Math.random()*1.5; vel[i*3+2]=(Math.random()-.5)*1.2;
          }
          lastBurst=phase;
        }
        for (let i=0;i<COUNT;i++){
          life[i]-=dt*1.6;
          vel[i*3+1]-=6*dt;
          pos[i*3]+=vel[i*3]*dt; pos[i*3+1]=Math.max(1.0,pos[i*3+1]+vel[i*3+1]*dt); pos[i*3+2]+=vel[i*3+2]*dt;
        }
        sparkGeo.attributes.position.needsUpdate=true;
      }
      updateBeacon(lamp, null, status, t);
    };
  }

  /* ----------------------------------------------------------
     16. 3D МОДЕЛЬ #2 - ЛИНИЯ ПОКРАСКИ (улучшенная детализация)
     ---------------------------------------------------------- */
  function initPaintLine() {
    const v = createViewer('paint-view', {
      camera: [11, 7, 13], target: [0, 1.3, 0],
      zoom: [5, 22], fog: [20, 44], shadowSize: 10
    });
    if (!v) return;
    const scene = v.scene;

    const dark   = mat(0x3A4048, 0.6, 0.4);
    const black  = mat(0x21262D, 0.8, 0.2);
    const steel  = mat(0x6E7681, 0.45, 0.65);
    const metal  = mat(0x8B949E, 0.3, 0.85);
    const brand  = mat(0xE53935, 0.45, 0.25);
    const white  = mat(0xC9D1D9, 0.7, 0.1);
    const chrome = mat(0xC9D1D9, 0.1, 0.95);

    const BELT_Y = 0.46;

    // Улучшенная платформа
    addTo(scene, box(15, 0.3, 4.4, dark), 0, 0.15, 0);
    addTo(scene, box(14, 0.16, 2.0, black), 0, 0.38, 0);
    // Опоры платформы
    [-6, 0, 6].forEach((x) => {
      [-2, 2].forEach((z) => {
        addTo(scene, cyl(0.08, 0.08, 0.3, steel, 8), x, 0.15, z);
      });
    });

    const c = document.createElement('canvas');
    c.width = 64; c.height = 64;
    const g = c.getContext('2d');
    g.fillStyle = '#21262D'; g.fillRect(0, 0, 64, 64);
    g.fillStyle = '#30363D'; g.fillRect(0, 0, 6, 64);
    g.fillStyle = '#1A1F26'; g.fillRect(32, 0, 3, 64);
    const beltTex = new THREE.CanvasTexture(c);
    beltTex.wrapS = THREE.RepeatWrapping;
    beltTex.wrapT = THREE.RepeatWrapping;
    beltTex.repeat.set(28, 1);
    const belt = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.7), new THREE.MeshStandardMaterial({ map: beltTex, roughness: 0.9 }));
    belt.rotation.x = -Math.PI / 2;
    belt.position.y = BELT_Y;
    scene.add(belt);

    [-0.95, 0.95].forEach((z) => addTo(scene, box(14, 0.22, 0.14, brand), 0, 0.56, z));

    const BOOTH_X = 2.3, BOOTH_Z = 1.7, BOOTH_H = 3.5;
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach((p) => {
      addTo(scene, box(0.22, BOOTH_H, 0.22, steel), p[0] * BOOTH_X, 0.3 + BOOTH_H / 2, p[1] * BOOTH_Z);
      // Горизонтальные связи
      addTo(scene, box(0.08, 0.08, BOOTH_H * 2, steel), p[0] * BOOTH_X, 0.3 + BOOTH_H / 2, 0);
    });
    [-1, 1].forEach((s) => {
      addTo(scene, box(BOOTH_X * 2 + 0.22, 0.2, 0.22, steel), 0, 0.3 + BOOTH_H, s * BOOTH_Z);
      addTo(scene, box(0.22, 0.2, BOOTH_Z * 2 + 0.22, steel), s * BOOTH_X, 0.3 + BOOTH_H, 0);
    });
    const lights = addTo(scene, box(4.0, 0.06, 0.3, new THREE.MeshStandardMaterial({
      color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.4
    })), 0, 0.3 + BOOTH_H - 0.12, 0);
    lights.userData.noShadow = true;

    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(BOOTH_X * 2, BOOTH_H - 0.3),
      new THREE.MeshStandardMaterial({ color: 0x58A6FF, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false })
    );
    glass.position.set(0, 0.3 + (BOOTH_H - 0.3) / 2, -BOOTH_Z);
    glass.userData.noShadow = true;
    scene.add(glass);

    function tunnel(x, w, h, edgeColor, fillColor) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, 2.4),
        new THREE.MeshStandardMaterial({ color: fillColor, transparent: true, opacity: 0.18, depthWrite: false })
      );
      m.position.set(x, 0.3 + h / 2, 0);
      m.userData.noShadow = true;
      scene.add(m);
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(m.geometry),
        new THREE.LineBasicMaterial({ color: edgeColor })
      );
      edges.position.copy(m.position);
      scene.add(edges);
    }
    tunnel(-4.7, 3.2, 1.9, 0x6E7681, 0x3FB950);
    tunnel(4.7, 3.2, 1.9, 0xE53935, 0xF85149);
    addTo(scene, cyl(0.2, 0.2, 1.0, steel, 16), 5.4, 2.7, 0);
    const heat = addTo(scene, box(2.6, 0.05, 0.25, new THREE.MeshStandardMaterial({
      color: 0xFF7A1C, emissive: 0xFF5A00, emissiveIntensity: 1.5
    })), 4.7, 2.15, 0);
    heat.userData.noShadow = true;

    // Улучшенный пульт управления
    addTo(scene, box(1.3, 1.8, 0.6, dark), -1.2, 0.9, -3.0);
    // Кнопки на пульте
    [[-0.3, 0.2], [0, 0.2], [0.3, 0.2]].forEach((p) => {
      addTo(scene, cyl(0.06, 0.06, 0.08, new THREE.MeshStandardMaterial({
        color: 0x3FB950, emissive: 0x3FB950, emissiveIntensity: 0.8
      }), 8), -1.2 + p[0], 1.45, -2.68);
    });
    const screen = addTo(scene, box(0.7, 0.4, 0.04, new THREE.MeshStandardMaterial({
      color: 0x1A1F26, emissive: 0xE53935, emissiveIntensity: 0.5
    })), -1.2, 1.3, -2.68);
    screen.userData.noShadow = true;

    const lamp = addTo(scene, cyl(0.13, 0.13, 0.26, new THREE.MeshStandardMaterial({
      color: 0xF0883E, emissive: 0xF0883E, emissiveIntensity: 1.5, roughness: 0.4
    }), 16), BOOTH_X, 0.3 + BOOTH_H + 0.23, BOOTH_Z);
    lamp.userData.noShadow = true;
    const lampLight = new THREE.PointLight(0xF0883E, 0.8, 6);
    lampLight.position.copy(lamp.position);
    scene.add(lampLight);

    const PAINT = new THREE.Color(0x58A6FF);
    const PRIMER = new THREE.Color(0x8B949E);

    const sprayMat = new THREE.MeshBasicMaterial({
      color: PAINT, transparent: true, opacity: 0.3, depthWrite: false, side: THREE.DoubleSide
    });

    function createPaintRobot(cfg){
      const root=new THREE.Group();
      const orange=mat(0xF3A321,.42,.34), ivory=mat(0xD9DEE3,.36,.34), joint=mat(0x202832,.42,.72);
      addTo(root,cyl(.48,.54,.28,joint,28),0,.14,0);
      addTo(root,cyl(.42,.42,.38,orange,28),0,.45,0);
      const base=new THREE.Group();base.position.y=.64;root.add(base);
      addTo(base,box(.72,.62,.76,orange),0,.30,0);
      const shoulder=new THREE.Group();shoulder.position.set(0,.60,0);base.add(shoulder);
      addTo(shoulder,jointZ(.28,.62,joint),0,0,0);
      addTo(shoulder,box(.38,1.34,.42,ivory),0,.66,0);
      const elbow=new THREE.Group();elbow.position.set(0,1.30,0);shoulder.add(elbow);
      addTo(elbow,jointZ(.25,.56,joint),0,0,0);
      addTo(elbow,box(1.25,.30,.34,ivory),.62,0,0);
      const wrist=new THREE.Group();wrist.position.set(1.22,0,0);elbow.add(wrist);
      addTo(wrist,sphere(.22,joint),0,0,0);
      addTo(wrist,cyl(.12,.12,.28,metal,18),.20,0,0).rotation.z=Math.PI/2;
      const tool=new THREE.Group();tool.position.set(.34,0,0);wrist.add(tool);
      addTo(tool,box(.34,.16,.18,joint),.16,0,0);
      addTo(tool,cyl(.045,.075,.28,metal,18),.48,0,0).rotation.z=Math.PI/2;
      const spray=new THREE.Mesh(new THREE.ConeGeometry(.30,.78,24,1,true),sprayMat);
      spray.rotation.z=Math.PI/2;spray.position.x=.92;spray.userData.noShadow=true;tool.add(spray);
      root.position.set(cfg.x,cfg.y + (cfg.baseLift||0),cfg.z);root.rotation.y=cfg.side>0?Math.PI/2:-Math.PI/2;root.scale.setScalar(.86);
      scene.add(root);
      return {root,base,shoulder,elbow,wrist,tool,spray,cfg};
    }

    const paintRobots=[
      {x:-1.55,y:.10,z:-2.45,side:-1,level:0.85,baseLift:-0.10,phase:0.0, shoulder:-.54,elbow:.86,wrist:-.40},
      {x: 1.35,y:.10,z:-2.45,side:-1,level:1.55,baseLift:0.28,phase:1.2, shoulder:-.14,elbow:.24,wrist:-.02},
      {x:-1.15,y:.10,z: 2.45,side: 1,level:1.20,baseLift:0.12,phase:2.3, shoulder:-.30,elbow:.52,wrist:-.18},
      {x: 1.65,y:.10,z: 2.45,side: 1,level:0.62,baseLift:-0.18,phase:3.4, shoulder:-.68,elbow:1.00,wrist:-.52}
    ].map(createPaintRobot);


    const bodyMat = new THREE.MeshStandardMaterial({ color: PRIMER, roughness: 0.28, metalness: 0.55 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0D1117, roughness: 0.1, metalness: 0.9 });
    const tireMat = mat(0x0D1117, 0.9, 0.1);
    const tireRubber = mat(0x1A1F26, 0.9, 0.1);

    const car = new THREE.Group();
    car.position.set(-6.5, BELT_Y, 0);
    car.userData.wheels = [];
    scene.add(car);
    
    // Нижняя часть кузова
    addTo(car, box(2.7, 0.5, 1.2, bodyMat), 0, 0.6, 0);
    // Верхняя часть
    addTo(car, box(1.35, 0.45, 1.1, bodyMat), -0.2, 1.075, 0);
    // Стёкла
    addTo(car, box(1.25, 0.28, 1.14, glassMat), -0.2, 1.1, 0);
    
    // Колёса с улучшенной детализацией
    const wheelPositions = [
      [0.85, 0.62], [0.85, -0.62], [-0.85, 0.62], [-0.85, -0.62]
    ];
    wheelPositions.forEach((p) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(p[0], 0.28, p[1]);
      car.add(wheelGroup);
      car.userData.wheels.push(wheelGroup);
      
      const w = cyl(0.28, 0.28, 0.22, tireRubber, 24);
      w.rotation.x = Math.PI / 2;
      wheelGroup.add(w);
      const hub = cyl(0.14, 0.14, 0.24, metal, 16);
      hub.rotation.x = Math.PI / 2;
      wheelGroup.add(hub);
    });
    
    const headlightMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xFFF2C4, emissiveIntensity: 0.8 });
    [0.4, -0.4].forEach((z) => addTo(car, box(0.06, 0.1, 0.22, headlightMat), 1.36, 0.68, z));

    enableShadows(scene);

    const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
    let phase = 0;

    v.update = function (dt, t) {
      if (reducedMotion) dt *= 0.35;
      const status = equipment.paint.status;
      const speed = status === 'STOPPED' ? 0 : ((status === 'WARNING' || status === 'CRITICAL') ? 0.8 : 1.1);

      beltTex.offset.x -= (speed * dt) / 0.5;
      car.position.x += speed * dt;
      if (car.position.x > 7) car.position.x = -7;

      bodyMat.color.copy(PRIMER).lerp(PAINT, smooth(-1.6, 1.6, car.position.x));
      if(v.repaintImportedCar)v.repaintImportedCar(bodyMat.color);

      // Вращение колёс
      const wheelSpeed = -speed / 0.28;
      car.userData.wheels.forEach(wheel => {
        // Ось колеса - Z; вращение группы сохраняет положение центра колеса.
        wheel.rotation[wheel.userData.axle||'z'] += wheelSpeed * dt;
      });

      if (!reducedMotion) phase += dt * (speed > 0 ? 1 : 0);
      const inBooth = Math.abs(car.position.x) < 2.25 && speed > 0;
      paintRobots.forEach((r,i)=>{
        const a=phase*1.15+r.cfg.phase;
        const levelLift=(r.cfg.level-1.0);
        r.base.rotation.y=Math.sin(a*.55)*.10;
        r.shoulder.rotation.z=r.cfg.shoulder+levelLift*.14+Math.sin(a*.82)*.07;
        r.elbow.rotation.z=r.cfg.elbow-levelLift*.18+Math.sin(a*.95+1.1)*.08;
        r.wrist.rotation.z=r.cfg.wrist-levelLift*.10+Math.sin(a*1.15+1.7)*.09;
        r.tool.rotation.x=-levelLift*.05+Math.sin(a*.72)*.05;
        r.spray.visible=inBooth && Math.abs(car.position.x-r.cfg.x)<2.2;
        r.spray.material.opacity=.16+.08*(.5+.5*Math.sin(a*5.5));
      });

      updateBeacon(lamp, lampLight, status, t);
    };
    mountImportedCar(v,car,bodyMat);
    mountFactoryProp(v,'filter-bank',[0,0,-3.6],[1.4,1.4,1.4]);
    mountDetailProp(v,'btf-paint-mix',[-5.35,0,-3.25],1.9,.10);
    mountDetailProp(v,'btf-air-handler',[5.25,0,-3.35],2.25,-.08);
    mountDetailProp(v,'btf-color-board',[5.0,0,3.0],1.45,Math.PI);
  }

  /* ----------------------------------------------------------
     17. 3D МОДЕЛЬ #3 - ЛИНИЯ СБОРКИ (улучшенная детализация)
     ---------------------------------------------------------- */
  function initAssemblyLine() {
    const v = createViewer('assembly-view', {
      camera: [12, 7.5, 14], target: [0, 1.5, 0],
      zoom: [6, 24], fog: [22, 48], shadowSize: 12
    });
    if (!v) return;
    const scene = v.scene;

    const dark   = mat(0x3A4048, 0.6, 0.4);
    const steel  = mat(0x6E7681, 0.45, 0.65);
    const metal  = mat(0x8B949E, 0.3, 0.85);
    const brand  = mat(0xE53935, 0.45, 0.25);
    const white  = mat(0xC9D1D9, 0.7, 0.1);
    const red    = mat(0xE53935, 0.5, 0.3);
    const chrome = mat(0xC9D1D9, 0.1, 0.95);

    const BELT_Y = 0.46;

    // Улучшенная платформа конвейера
    addTo(scene, box(18, 0.3, 5.0, dark), 0, 0.15, 0);
    addTo(scene, box(17, 0.16, 2.2, mat(0x21262D, 0.8, 0.2)), 0, 0.38, 0);
    // Опоры
    [-7, 0, 7].forEach((x) => {
      [-2, 2].forEach((z) => {
        addTo(scene, cyl(0.08, 0.08, 0.35, steel, 8), x, 0.175, z);
      });
    });

    // Текстура ленты
    const c = document.createElement('canvas');
    c.width = 64; c.height = 64;
    const g = c.getContext('2d');
    g.fillStyle = '#21262D'; g.fillRect(0, 0, 64, 64);
    g.fillStyle = '#30363D'; g.fillRect(0, 0, 8, 64);
    g.fillStyle = '#1A1F26'; g.fillRect(32, 0, 4, 64);
    const beltTex = new THREE.CanvasTexture(c);
    beltTex.wrapS = THREE.RepeatWrapping;
    beltTex.wrapT = THREE.RepeatWrapping;
    beltTex.repeat.set(34, 1);
    const belt = new THREE.Mesh(new THREE.PlaneGeometry(17, 1.9), new THREE.MeshStandardMaterial({ map: beltTex, roughness: 0.9 }));
    belt.rotation.x = -Math.PI / 2;
    belt.position.y = BELT_Y;
    scene.add(belt);

    [-1.05, 1.05].forEach((z) => addTo(scene, box(17, 0.22, 0.14, brand), 0, 0.56, z));

    // Конвейер сборки визуально близок к камере-02: плоская движущаяся лента с боковыми направляющими.
    const assemblyRollers=[];
    [-0.92,0.92].forEach(z=>addTo(scene,box(16.6,0.08,0.08,steel),0,0.67,z));

    // Детализированный автомобиль
    const carBodyMat = new THREE.MeshStandardMaterial({ color: 0xC9D1D9, roughness: 0.25, metalness: 0.6 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0D1117, roughness: 0.1, metalness: 0.9 });
    const tireMat = mat(0x0D1117, 0.9, 0.1);
    const tireRubber = mat(0x1A1F26, 0.9, 0.1);

    const car = new THREE.Group();
    car.position.set(-8.5, BELT_Y, 0);
    car.userData.wheels = [];
    scene.add(car);
    
    // Основной кузов
    addTo(car, box(2.8, 0.55, 1.25, carBodyMat), 0, 0.65, 0);
    // Пороги
    [-0.7, 0.7].forEach((x) => {
      addTo(car, box(0.7, 0.1, 0.06, mat(0x8B949E, 0.5, 0.6)), x, 0.52, 0);
    });
    // Крыша/кабина
    addTo(car, box(1.4, 0.48, 1.15, carBodyMat), -0.3, 1.16, 0);
    // Стёкла
    addTo(car, box(1.3, 0.30, 1.12, glassMat), -0.3, 1.18, 0);
    // Двери
    [-0.4, 0.4].forEach((x) => {
      addTo(car, box(0.02, 0.32, 0.95, mat(0x8B949E, 0.6, 0.5)), x, 0.82, 0);
    });
    // Ручки дверей
    [-0.4, 0.4].forEach((x) => {
      addTo(car, box(0.03, 0.05, 0.1, chrome), x, 0.8, 0.5);
    });
    
    // Колёса с улучшенной детализацией
    const wheelPositions = [
      [0.9, 0.65], [0.9, -0.65], [-0.9, 0.65], [-0.9, -0.65]
    ];
    const assemblyWheels=[];
    wheelPositions.forEach((p,index) => {
      // Видимая ступица остаётся на автомобиле; шина/диск устанавливается сбоку.
      const hubMount=addTo(car,cyl(.17,.17,.12,metal,20),p[0],.34,p[1]);hubMount.rotation.x=Math.PI/2;
      const side=Math.sign(p[1]);
      const wheelGroup=new THREE.Group();
      const w=cyl(.30,.30,.24,tireRubber,28);w.rotation.x=Math.PI/2;wheelGroup.add(w);
      const rim=cyl(.17,.17,.26,metal,20);rim.rotation.x=Math.PI/2;wheelGroup.add(rim);
      for(let i=0;i<5;i++){const spoke=addTo(wheelGroup,box(.025,.23,.018,chrome),0,0,0);spoke.rotation.z=i*Math.PI*2/5;}
      // Колёса ждут рядом с линией на специальных стойках, а не за механизмом установки.
      wheelGroup.position.set(p[0],BELT_Y+.34,side*1.46);scene.add(wheelGroup);
      addTo(scene,box(.56,.08,.56,dark),p[0],0.04,side*1.92);
      addTo(scene,box(.22,.24,.22,steel),p[0],0.16,side*1.92);

      // Механизм установки колёс: боковая стойка + верхняя каретка + горизонтальный шпиндель к автомобилю.
      const nutrunner=new THREE.Group();nutrunner.position.set(p[0],0,0);scene.add(nutrunner);
      const postZ=side*2.02;
      addTo(nutrunner,box(.26,1.26,.26,dark),0,0.63,postZ);
      addTo(nutrunner,box(.44,.16,.32,brand),0,1.30,postZ);
      addTo(nutrunner,box(.16,.16,.56,steel),0,1.18,side*1.74);
      addTo(nutrunner,cyl(.04,.04,.30,chrome,10),0,1.18,side*1.52).rotation.x=Math.PI/2;
      addTo(nutrunner,box(.12,.12,.12,metal),0,1.18,side*1.40);
      assemblyWheels.push({wheel:wheelGroup,nutrunner,targetZ:p[1],startZ:side*1.46,side,index,anchorX:p[0]});
    });
    
    // Передние фары
    const headlightMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xFFF2C4, emissiveIntensity: 0.8 });
    [0.45, -0.45].forEach((z) => addTo(car, box(0.06, 0.11, 0.24, headlightMat), 1.42, 0.72, z));
    // Задние фонари
    const taillightMat = new THREE.MeshStandardMaterial({ color: 0xE53935, emissive: 0xE53935, emissiveIntensity: 0.6 });
    [0.4, -0.4].forEach((z) => addTo(car, box(0.05, 0.08, 0.18, taillightMat), -1.42, 0.68, z));
    // Боковые зеркала
    [-0.6, 0.6].forEach((z) => {
      addTo(car, box(0.1, 0.06, 0.05, chrome), 0.25, 0.95, z * 0.75);
    });

    // Улучшенный манипулятор 1
    const manip1 = new THREE.Group();
    manip1.position.set(0, 0, -2.8);
    scene.add(manip1);
    
    const arm1Base = addTo(manip1, cyl(0.6, 0.6, 0.3, dark), 0, 0.15, 0);
    addTo(manip1, cyl(0.45, 0.45, 0.15, brand, 16), 0, 0.32, 0);
    const arm1Lower = new THREE.Group();
    arm1Lower.position.set(0, 0.3, 0);
    manip1.add(arm1Lower);
    addTo(arm1Lower, box(0.3, 1.8, 0.3, white), 0, 0.9, 0);
    // Пневматика
    addTo(arm1Lower, cyl(0.12, 0.12, 0.35, dark, 8), 0, 0.5, 0);
    const arm1Upper = new THREE.Group();
    arm1Upper.position.set(0, 1.8, 0);
    arm1Lower.add(arm1Upper);
    addTo(arm1Upper, box(0.25, 1.2, 0.25, white), 0.4, 0.6, 0);
    const gripper1 = addTo(arm1Upper, box(0.35, 0.15, 0.12, brand), 0.9, 1.2, 0);
    // Детали захвата
    addTo(arm1Upper, box(0.04, 0.08, 0.18, chrome), 0.95, 1.18, 0);

    // Улучшенный манипулятор 2
    const manip2 = new THREE.Group();
    manip2.position.set(3, 0, 2.8);
    scene.add(manip2);
    
    const arm2Base = addTo(manip2, cyl(0.6, 0.6, 0.3, dark), 0, 0.15, 0);
    addTo(manip2, cyl(0.45, 0.45, 0.15, brand, 16), 0, 0.32, 0);
    const arm2Lower = new THREE.Group();
    arm2Lower.position.set(0, 0.3, 0);
    manip2.add(arm2Lower);
    addTo(arm2Lower, box(0.3, 1.8, 0.3, white), 0, 0.9, 0);
    addTo(arm2Lower, cyl(0.12, 0.12, 0.35, dark, 8), 0, 0.5, 0);
    const arm2Upper = new THREE.Group();
    arm2Upper.position.set(0, 1.8, 0);
    arm2Lower.add(arm2Upper);
    addTo(arm2Upper, box(0.25, 1.2, 0.25, white), -0.4, 0.6, 0);
    const gripper2 = addTo(arm2Upper, cyl(0.18, 0.18, 0.35, brand, 16), -0.9, 1.2, 0);
    addTo(arm2Upper, cyl(0.06, 0.06, 0.15, chrome, 12), -0.9, 1.2, 0);

    // Операция сборки показана явно установкой колёс; скрываем старые абстрактные руки.
    manip1.visible=false;
    manip2.visible=false;

    // Улучшенная AGV тележка
    const agv = new THREE.Group();
    agv.position.set(6, 0.3, 0);
    agv.userData.wheels = [];
    scene.add(agv);
    addTo(agv, box(1.2, 0.25, 0.8, dark), 0, 0.125, 0);
    // Бампер
    addTo(agv, box(0.06, 0.12, 0.75, brand), 0.55, 0.2, 0);
    // Колёса AGV
    [[-0.4, -0.35], [-0.4, 0.35], [0.4, -0.35], [0.4, 0.35]].forEach((p) => {
      const w = cyl(0.12, 0.12, 0.08, steel, 12);
      w.rotation.x = Math.PI / 2;
      addTo(agv, w, p[0], 0.08, p[1]);
    });
    // Детали на тележке
    addTo(agv, box(0.3, 0.15, 0.3, brand), -0.25, 0.35, 0);
    addTo(agv, box(0.3, 0.15, 0.3, red), 0.25, 0.35, 0);
    addTo(agv, cyl(0.12, 0.12, 0.1, metal, 16), 0, 0.45, 0.25);
    // Индикатор на AGV
    addTo(agv, cyl(0.04, 0.04, 0.1, new THREE.MeshStandardMaterial({
      color: 0x3FB950, emissive: 0x3FB950, emissiveIntensity: 1.0
    }), 8), 0, 0.5, 0);

    // Улучшенная сигнальная лампа
    addTo(scene, cyl(0.05, 0.05, 0.8, steel, 8), -4, 0.6, 2.2);
    const lamp = addTo(scene, cyl(0.14, 0.14, 0.28, new THREE.MeshStandardMaterial({
      color: 0x3FB950, emissive: 0x3FB950, emissiveIntensity: 1.5, roughness: 0.4
    }), 16), -4, 1.1, 2.2);
    lamp.userData.noShadow = true;
    addTo(scene, cyl(0.18, 0.18, 0.06, dark, 8), -4, 1.27, 2.2);
    const lampLight = new THREE.PointLight(0x3FB950, 0.8, 8);
    lampLight.position.copy(lamp.position);
    scene.add(lampLight);

    // Дополнительные детали сборки: буферы колёс, верхний балансир, шкафы управления и паллеты.
    const leftWheelRack = new THREE.Group(); leftWheelRack.position.set(-6.2,0,-2.95); scene.add(leftWheelRack);
    addTo(leftWheelRack,box(1.9,0.12,1.1,dark),0,0.06,0);
    [-0.7,0,0.7].forEach(x=>[-0.26,0.26].forEach(z=>{const w=addTo(leftWheelRack,cyl(0.28,0.28,0.18,tireRubber,20),x,0.36,z);w.rotation.x=Math.PI/2; addTo(leftWheelRack,cyl(0.18,0.18,0.20,metal,16),x,0.36,z).rotation.x=Math.PI/2;}));
    const rightWheelRack = new THREE.Group(); rightWheelRack.position.set(6.0,0,2.95); scene.add(rightWheelRack);
    addTo(rightWheelRack,box(1.9,0.12,1.1,dark),0,0.06,0);
    [-0.7,0,0.7].forEach(x=>[-0.26,0.26].forEach(z=>{const w=addTo(rightWheelRack,cyl(0.28,0.28,0.18,tireRubber,20),x,0.36,z);w.rotation.x=Math.PI/2; addTo(rightWheelRack,cyl(0.18,0.18,0.20,metal,16),x,0.36,z).rotation.x=Math.PI/2;}));
    addTo(scene,box(1.1,1.4,.8,dark),-7.3,0.7,2.8);
    addTo(scene,box(.74,.52,.04,new THREE.MeshStandardMaterial({color:0x071119,emissive:0x58A6FF,emissiveIntensity:.35})),-7.28,1.02,3.22).userData.noShadow=true;
    addTo(scene,box(1.0,1.1,.8,dark),7.5,0.55,-2.9);
    addTo(scene,box(1.2,.08,.08,steel),0,3.15,2.4);
    addTo(scene,cyl(.03,.03,1.0,steel,8),-2.2,2.65,2.4);
    addTo(scene,cyl(.03,.03,1.0,steel,8),2.2,2.65,2.4);
    addTo(scene,box(.20,.24,.20,brand),-2.2,2.05,2.4);
    addTo(scene,box(.20,.24,.20,brand),2.2,2.05,2.4);
    addTo(scene,cyl(.05,.05,.55,chrome,12),-2.2,1.70,2.4);
    addTo(scene,cyl(.05,.05,.55,chrome,12),2.2,1.70,2.4);
    const pallet=new THREE.Group(); pallet.position.set(3.9,0,-3.15); scene.add(pallet);
    addTo(pallet,box(1.4,.10,1.0,mat(0xB08968,0.9,0.05)),0,0.05,0);
    [0,0.28,-0.28].forEach(z=>addTo(pallet,box(.68,.16,.22,mat(0x4E5D6C,0.55,0.55)),0,0.18,z));

    enableShadows(scene);

    const smooth=(a,b,x)=>{const q=clamp((x-a)/(b-a),0,1);return q*q*(3-2*q);};
    let phase = 0;
    let agvPhase = 0;

    v.update = function (dt, t) {
      if (reducedMotion) dt *= 0.35;
      const status = equipment.assembly.status;
      const running = status !== 'STOPPED';
      const speed = (status === 'WARNING' || status === 'CRITICAL') ? 0.6 : 1.0;

      if (running && !reducedMotion) {
        phase += dt * speed;
        agvPhase += dt * speed * 0.5;
      }

      // Движение конвейера
      beltTex.offset.x -= (running ? speed * dt : 0) / 0.5;
      
      // Полный цикл сборки: автомобиль прибывает без колёс, колёса устанавливаются, затем автомобиль покидает станцию.
      const cycle=((phase*.10)%1+1)%1;
      let carX=-8.5;
      if(cycle<.25) carX=THREE.MathUtils.lerp(-8.5,0,smooth(0,.25,cycle));
      else if(cycle<.68) carX=0;
      else carX=THREE.MathUtils.lerp(0,8.5,smooth(.68,1.0,cycle));
      car.position.x=carX;

      assemblyWheels.forEach((item)=>{
        item.nutrunner.position.x=item.anchorX;
        const pairWindow=item.index<2?[.28,.50,.54,.62]:[.40,.62,.66,.74];
        let install=0;
        if(cycle<pairWindow[0]) install=0;
        else if(cycle<pairWindow[1]) install=smooth(pairWindow[0],pairWindow[1],cycle);
        else install=1;

        // До установки колесо ждёт на боковой стойке; после установки следует за автомобилем.
        const attached = cycle >= pairWindow[1];
        item.wheel.position.x = attached ? (car.position.x + item.anchorX) : item.anchorX;
        item.wheel.position.y = BELT_Y + .34;
        item.wheel.position.z = THREE.MathUtils.lerp(item.startZ,item.targetZ,install);
        item.wheel.rotation.z += (running?dt*2.1:0)*item.side;

        // Краткое зацепление фиксирующего шпинделя после того, как колесо достигает ступицы, без пересечения шины.
        const torque=(cycle>pairWindow[1]&&cycle<pairWindow[2])?1:0;
        item.nutrunner.position.y=0;
        item.nutrunner.rotation.x=0;
        item.nutrunner.children[1].position.y = 1.30 - torque*.04; // head block
      });

      // Старые руки сборки остаются припаркованными вне рабочей зоны.
      arm1Lower.rotation.y = -0.15;
      arm1Upper.rotation.z = 0.05;
      gripper1.position.y = 1.12;
      arm2Lower.rotation.y = 0.12;
      arm2Upper.rotation.z = -0.06;
      gripper2.position.y = 1.12;

      // AGV тележка движется
      if (running) {
        agv.position.x = 6 + Math.sin(agvPhase) * 3;
      }

      updateBeacon(lamp, lampLight, status, t);
    };
    // Управляемый автомобиль сборки остаётся видимым; импорт готового седана скроет цикл установки.
    mountFactoryProp(v,'roller-conveyor',[-3,0,3.6],[1.2,.65,2],Math.PI/2);
    mountFactoryProp(v,'assembly-workbench',[-4,0,-3.4],[1.5,1.5,1.5]);
    mountDetailProp(v,'btf-seat-rack',[-5.8,0,3.55],2.15,.12);
    mountDetailProp(v,'btf-line-rack',[5.35,0,-3.55],2.2,Math.PI);
    mountDetailProp(v,'btf-dashboard-cart',[-2.2,0,3.65],1.55,.18);
    mountDetailProp(v,'btf-torque-tool',[2.8,0,3.75],2.15,-.15);
  }

  /* ----------------------------------------------------------
     18. УПРАВЛЕНИЕ ВЬЮВЕРОМ
     ---------------------------------------------------------- */
  document.querySelectorAll('.viewer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      const viewerId = btn.dataset.viewer + '-view';
      const viewer = viewers[viewerId];
      if (!viewer) return;

      if (action === 'reset') {
        viewer.camera.position.set(...viewer.initialCamera);
        viewer.controls.target.set(...viewer.initialTarget);
        viewer.controls.update();
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 200);
      } else if (action === 'rotate') {
        viewer.controls.autoRotate = !viewer.controls.autoRotate;
        btn.classList.toggle('active', viewer.controls.autoRotate);
      } else if (action === 'fullscreen') {
        const target = viewer.container.closest('.card') || viewer.container;
        const active = document.fullscreenElement || document.webkitFullscreenElement;
        const operation = active === target
          ? (document.exitFullscreen || document.webkitExitFullscreen)
          : (target.requestFullscreen || target.webkitRequestFullscreen);
        if (!operation) { showToast(t('fullscreen-unavailable')); return; }
        try {
          Promise.resolve(operation.call(active === target ? document : target))
            .catch(() => showToast(t('fullscreen-unavailable')));
        } catch (_) { showToast(t('fullscreen-unavailable')); }

      }
    });
  });

  /* ----------------------------------------------------------
     18. 3D МОДЕЛЬ #4 - ИНСПЕКЦИОННЫЙ ТОННЕЛЬ
     ---------------------------------------------------------- */
  function initInspectionTunnel() {
    const v = createViewer('inspection-view', {
      camera: [14, 8, 16], target: [0, 1.8, 0],
      zoom: [7, 28], fog: [25, 52], shadowSize: 14
    });
    if (!v) return;
    const scene = v.scene;

    const dark   = mat(0x3A4048, 0.6, 0.4);
    const steel  = mat(0x6E7681, 0.45, 0.65);
    const metal  = mat(0x8B949E, 0.3, 0.85);
    const brand  = mat(0xE53935, 0.45, 0.25);
    const white  = mat(0xC9D1D9, 0.7, 0.1);
    const blue   = mat(0x58A6FF, 0.5, 0.4);
    const glass  = mat(0x1A1F26, 0.1, 0.95);

    const BELT_Y = 0.46;

    // Платформа конвейера
    addTo(scene, box(22, 0.35, 6.0, dark), 0, 0.175, 0);
    addTo(scene, box(21, 0.18, 2.6, mat(0x21262D, 0.8, 0.2)), 0, 0.44, 0);

    // Текстура ленты
    const c = document.createElement('canvas');
    c.width = 128; c.height = 64;
    const g = c.getContext('2d');
    g.fillStyle = '#21262D'; g.fillRect(0, 0, 128, 64);
    g.fillStyle = '#30363D'; 
    for (let i = 0; i < 16; i++) {
      g.fillRect(i * 8, 0, 4, 64);
    }
    g.fillStyle = '#1A1F26';
    for (let i = 0; i < 8; i++) {
      g.fillRect(i * 16 + 6, 0, 3, 64);
    }
    const beltTex = new THREE.CanvasTexture(c);
    beltTex.wrapS = THREE.RepeatWrapping;
    beltTex.wrapT = THREE.RepeatWrapping;
    beltTex.repeat.set(42, 1);
    const belt = new THREE.Mesh(new THREE.PlaneGeometry(21, 2.3), new THREE.MeshStandardMaterial({ map: beltTex, roughness: 0.85 }));
    belt.rotation.x = -Math.PI / 2;
    belt.position.y = BELT_Y;
    scene.add(belt);

    [-1.2, 1.2].forEach((z) => addTo(scene, box(21, 0.24, 0.16, brand), 0, 0.58, z));

    // Структура туннеля
    const TUNNEL_L = 10, TUNNEL_W = 4.5, TUNNEL_H = 4.2;
    
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach((p) => {
      addTo(scene, box(0.25, TUNNEL_H, 0.25, steel), p[0] * TUNNEL_L, 0.3 + TUNNEL_H / 2, p[1] * TUNNEL_W);
    });

    addTo(scene, box(TUNNEL_L * 2 + 0.25, 0.2, 0.25, steel), 0, 0.3 + TUNNEL_H, 0);
    addTo(scene, box(0.25, 0.2, TUNNEL_W * 2 + 0.25, steel), -TUNNEL_L, 0.3 + TUNNEL_H, 0);
    addTo(scene, box(0.25, 0.2, TUNNEL_W * 2 + 0.25, steel), TUNNEL_L, 0.3 + TUNNEL_H, 0);

    const ledPanel = addTo(scene, box(TUNNEL_L * 1.8, 0.08, 0.4, new THREE.MeshStandardMaterial({
      color: 0x58A6FF, emissive: 0x58A6FF, emissiveIntensity: 1.2
    })), 0, 0.3 + TUNNEL_H - 0.2, 0);
    ledPanel.userData.noShadow = true;

    [-1, 1].forEach((side) => {
      const sideLed = addTo(scene, box(TUNNEL_L * 1.8, 2.5, 0.06, new THREE.MeshStandardMaterial({
        color: 0x58A6FF, emissive: 0x58A6FF, emissiveIntensity: 0.4, transparent: true, opacity: 0.6
      })), 0, 0.3 + TUNNEL_H / 2, side * (TUNNEL_W + 0.15));
      sideLed.userData.noShadow = true;
    });

    // Автомобиль
    const carBodyMat = new THREE.MeshStandardMaterial({ color: 0xE53935, roughness: 0.2, metalness: 0.7 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xC9D1D9, roughness: 0.1, metalness: 0.95 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0D1117, roughness: 0.05, metalness: 0.95, transparent: true, opacity: 0.85 });
    const tireRubber = mat(0x1A1F26, 0.9, 0.1);

    const car = new THREE.Group();
    car.position.set(-6, BELT_Y, 0);
    car.userData.wheels = [];
    scene.add(car);

    addTo(car, box(3.0, 0.45, 1.35, carBodyMat), 0, 0.52, 0);
    [-0.8, 0.8].forEach((x) => {
      addTo(car, box(0.8, 0.12, 0.08, mat(0x8B949E, 0.5, 0.6)), x, 0.52, 0);
    });
    addTo(car, box(0.3, 0.25, 0.9, chromeMat), 1.4, 0.55, 0);
    const headlightL = addTo(car, box(0.08, 0.12, 0.28, new THREE.MeshStandardMaterial({ 
      color: 0xffffff, emissive: 0xFFF8E7, emissiveIntensity: 1.0 
    })), 1.5, 0.6, 0.35);
    const headlightR = addTo(car, box(0.08, 0.12, 0.28, new THREE.MeshStandardMaterial({ 
      color: 0xffffff, emissive: 0xFFF8E7, emissiveIntensity: 1.0 
    })), 1.5, 0.6, -0.35);
    headlightL.userData.noShadow = true;
    headlightR.userData.noShadow = true;
    addTo(car, box(1.2, 0.15, 1.25, carBodyMat), 0.6, 0.78, 0);
    addTo(car, box(1.6, 0.42, 1.2, carBodyMat), -0.1, 1.05, 0);
    addTo(car, box(1.5, 0.35, 1.15, glassMat), 0.1, 1.12, 0);
    [-0.55, 0.55].forEach((z) => {
      addTo(car, box(0.8, 0.28, 0.05, glassMat), -0.1, 1.08, z);
    });
    addTo(car, box(0.15, 0.38, 1.1, carBodyMat), -1.4, 0.68, 0);
    [-0.35, 0.35].forEach((z) => {
      addTo(car, box(0.06, 0.1, 0.2, new THREE.MeshStandardMaterial({ 
        color: 0xE53935, emissive: 0xE53935, emissiveIntensity: 0.8 
      })), -1.47, 0.7, z);
    });
    [-0.5, 0.5].forEach((x) => {
      addTo(car, box(0.02, 0.38, 0.98, mat(0x8B949E, 0.6, 0.5)), x, 0.85, 0);
      addTo(car, box(0.04, 0.06, 0.12, chromeMat), x, 0.82, 0.5);
    });

    const wheelPositions = [
      [1.0, 0.7], [1.0, -0.7], [-0.8, 0.7], [-0.8, -0.7]
    ];
    wheelPositions.forEach((p) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(p[0], 0.32, p[1]);
      car.add(wheelGroup);
      car.userData.wheels.push(wheelGroup);
      
      const tire = cyl(0.32, 0.32, 0.26, tireRubber, 32);
      tire.rotation.x = Math.PI / 2;
      wheelGroup.add(tire);
      
      const rim = cyl(0.22, 0.22, 0.28, chromeMat, 24);
      rim.rotation.x = Math.PI / 2;
      wheelGroup.add(rim);
      
      const hub = cyl(0.08, 0.08, 0.3, mat(0x484F58, 0.6, 0.4), 16);
      hub.rotation.x = Math.PI / 2;
      wheelGroup.add(hub);
      
      for (let i = 0; i < 5; i++) {
        const spoke = addTo(wheelGroup, box(0.04, 0.24, 0.02, chromeMat), 0, 0, 0);
        spoke.rotation.z = (i / 5) * Math.PI * 2;
      }
      
      const brake = cyl(0.14, 0.14, 0.06, mat(0x6E7681, 0.7, 0.6), 24);
      brake.rotation.x = Math.PI / 2;
      wheelGroup.add(brake);
    });

    [-0.65, 0.65].forEach((z) => {
      addTo(car, box(0.12, 0.08, 0.06, chromeMat), 0.35, 0.95, z * 0.82);
    });
    addTo(car, cyl(0.01, 0.01, 0.25, mat(0x484F58, 0.5, 0.5), 16), -0.3, 1.3, 0);
    addTo(car, cyl(0.06, 0.06, 0.35, chromeMat, 12), -1.5, 0.45, 0.3);

    const cameras = [-6, -2, 2, 6].map((x, idx) => {
      const camGroup = new THREE.Group();
      camGroup.position.set(x, 2.8, 0);
      scene.add(camGroup);

      addTo(camGroup, box(0.2, 0.25, 0.15, dark), 0, 0, 0);
      const lens = addTo(camGroup, cyl(0.08, 0.12, 0.1, chromeMat, 16), 0, -0.05, 0);
      lens.rotation.x = Math.PI / 2;
      addTo(camGroup, cyl(0.04, 0.04, 0.8, steel, 8), 0, 0.55, 0);
      const camLed = addTo(camGroup, cyl(0.03, 0.03, 0.08, new THREE.MeshStandardMaterial({
        color: 0x3FB950, emissive: 0x3FB950, emissiveIntensity: 1.5
      }), 8), 0, 0.15, 0.1);
      camLed.userData.noShadow = true;

      const beam = new THREE.Mesh(
        new THREE.ConeGeometry(0.44, 1.7, 18, 1, true),
        new THREE.MeshBasicMaterial({
          color: 0x58A6FF,
          transparent: true,
          opacity: 0.15,
          side: THREE.DoubleSide,
          depthWrite: false
        })
      );
      // Переворачиваем ориентацию луча инспекции, чтобы конус читался правильно от камеры к автомобилю.
      beam.rotation.x = 0;
      beam.position.set(0, -0.92, 0);
      beam.userData.noShadow = true;
      camGroup.add(beam);

      return { group: camGroup, led: camLed, beam: beam, idx: idx };
    });

    for (let x = -5; x <= 5; x += 2.5) {
      const sensor = addTo(scene, cyl(0.08, 0.08, 0.05, brand, 16), x, 0.5, 1.8);
      const sensorLed = addTo(scene, cyl(0.04, 0.04, 0.03, new THREE.MeshStandardMaterial({
        color: 0x58A6FF, emissive: 0x58A6FF, emissiveIntensity: 1.0
      }), 8), x, 0.55, 1.8);
      sensorLed.userData.noShadow = true;
    }

    addTo(scene, cyl(0.06, 0.06, 1.0, steel, 8), -TUNNEL_L - 1, 0.7, 3.0);
    const statusLamp = addTo(scene, cyl(0.16, 0.16, 0.32, new THREE.MeshStandardMaterial({
      color: 0x3FB950, emissive: 0x3FB950, emissiveIntensity: 1.5, roughness: 0.4
    }), 16), -TUNNEL_L - 1, 1.3, 3.0);
    statusLamp.userData.noShadow = true;
    const statusLight = new THREE.PointLight(0x3FB950, 1.0, 10);
    statusLight.position.copy(statusLamp.position);
    scene.add(statusLight);

    const monitor = addTo(scene, box(1.2, 0.8, 0.08, dark), TUNNEL_L + 1.5, 2.5, -2.5);
    const screen = addTo(scene, box(1.0, 0.6, 0.04, new THREE.MeshStandardMaterial({
      color: 0x0D1117, emissive: 0x58A6FF, emissiveIntensity: 0.5
    })), TUNNEL_L + 1.5, 2.5, -2.46);
    screen.userData.noShadow = true;

    // Дополнительное оборудование контроля качества вокруг камеры-04.
    const qcDesk = new THREE.Group(); qcDesk.position.set(-6.2,0,-3.15); scene.add(qcDesk);
    addTo(qcDesk,box(1.55,.10,.70,mat(0xB08968,0.85,0.10)),0,.78,0);
    addTo(qcDesk,box(.10,.78,.10,steel),-.65,.39,-.25); addTo(qcDesk,box(.10,.78,.10,steel),.65,.39,-.25);
    addTo(qcDesk,box(.10,.78,.10,steel),-.65,.39,.25);  addTo(qcDesk,box(.10,.78,.10,steel),.65,.39,.25);
    addTo(qcDesk,box(.60,.38,.06,dark),.25,1.10,-.10);
    const qcDeskScreen=addTo(qcDesk,box(.52,.30,.03,new THREE.MeshStandardMaterial({color:0x0D1117,emissive:0x58A6FF,emissiveIntensity:.45})),.25,1.10,-.06);
    qcDeskScreen.userData.noShadow=true;
    addTo(qcDesk,box(.26,.03,.16,mat(0xEDE3B4,0.95,0.0)),-.25,.84,.10);

    const alignStand = new THREE.Group(); alignStand.position.set(4.8,0,2.75); scene.add(alignStand);
    addTo(alignStand,box(.78,.12,.78,dark),0,.06,0);
    addTo(alignStand,box(.18,1.35,.18,steel),0,.68,0);
    addTo(alignStand,box(.52,.38,.12,dark),0,1.40,0);
    const alignLens=addTo(alignStand,box(.38,.24,.03,new THREE.MeshStandardMaterial({color:0x0D1117,emissive:0x58A6FF,emissiveIntensity:.65})),0,1.40,.08);
    alignLens.userData.noShadow=true;
    addTo(alignStand,box(.18,.18,.18,brand),0,.96,.18);

    [-3.4,-0.6,2.2].forEach(x=>{
      const scanner=addTo(scene,box(.18,.86,.18,steel),x,.43,-1.95);
      const head=addTo(scene,box(.22,.18,.22,dark),x,.92,-1.95);
      const led=addTo(scene,box(.12,.08,.03,new THREE.MeshStandardMaterial({color:0x58A6FF,emissive:0x58A6FF,emissiveIntensity:.7})),x,.92,-1.84);
      led.userData.noShadow=true;
    });

    const rollingCart = new THREE.Group(); rollingCart.position.set(6.1,0,-3.05); scene.add(rollingCart);
    addTo(rollingCart,box(.90,.08,.55,mat(0x6E7681,0.65,0.20)),0,.52,0);
    addTo(rollingCart,box(.06,.46,.06,steel),-.34,.25,-.18); addTo(rollingCart,box(.06,.46,.06,steel),.34,.25,-.18);
    addTo(rollingCart,box(.06,.46,.06,steel),-.34,.25,.18);  addTo(rollingCart,box(.06,.46,.06,steel),.34,.25,.18);
    addTo(rollingCart,box(.52,.30,.06,dark),0,.88,0);
    const rollingScreen=addTo(rollingCart,box(.44,.22,.03,new THREE.MeshStandardMaterial({color:0x0D1117,emissive:0x3FB950,emissiveIntensity:.35})),0,.88,.04);
    rollingScreen.userData.noShadow=true;
    [[-.30,0,-.20],[.30,0,-.20],[-.30,0,.20],[.30,0,.20]].forEach(p=>{const w=addTo(rollingCart,cyl(.08,.08,.04,tireRubber,12),p[0],.08,p[2]);w.rotation.x=Math.PI/2;});

    // Повторное использование импортированных деталей, чтобы зона контроля выглядела более живой.
    mountDetailProp(v,'btf-tool-rack',[6.25,0,3.10],1.45,Math.PI/2);
    mountDetailProp(v,'btf-dashboard-cart',[-3.9,0,3.55],1.25,.12);

    enableShadows(scene);

    let phase = 0;
    let scanPhase = 0;

    v.update = function (dt, t) {
      if (reducedMotion) dt *= 0.35;
      const status = equipment.qc ? equipment.qc.status : (equipment.inspection ? equipment.inspection.status : 'RUNNING');
      const running = status !== 'STOPPED';
      const speed = (status === 'WARNING' || status === 'CRITICAL') ? 0.7 : 1.0;

      if (running && !reducedMotion) {
        phase += dt * speed;
        scanPhase += dt * speed * 2;
      }

      beltTex.offset.x -= (running ? speed * dt : 0) / 0.5;
      car.position.x += (running ? speed * dt : 0);
      if (car.position.x > 8) car.position.x = -8;

      const wheelSpeed = running ? -speed / 0.32 : 0;
      car.userData.wheels.forEach(wheel => {
        wheel.rotation[wheel.userData.axle||'z'] += wheelSpeed * dt;
      });

      cameras.forEach((cam) => {
        const dist = Math.abs(cam.group.position.x - car.position.x);
        const active = dist < 3 && running;
        
        cam.led.material.emissiveIntensity = active ? 
          (Math.sin(scanPhase * 3 + cam.idx) > 0 ? 2.0 : 0.5) : 0.3;
        
        cam.beam.visible = active;
        cam.beam.material.opacity = active ? 0.15 + Math.random() * 0.1 : 0;
        
        if (active) {
          cam.group.rotation.y = Math.sin(phase * 0.5 + cam.idx) * 0.15;
        } else {
          cam.group.rotation.y *= 0.95;
        }
      });

      ledPanel.material.emissiveIntensity = 1.0 + Math.sin(scanPhase * 2) * 0.3;
      screen.material.emissiveIntensity = running ? 0.5 + Math.random() * 0.3 : 0.2;

      updateBeacon(statusLamp, statusLight, status, t);
    };
    mountImportedCar(v,car);
    // Видимая рама инспекции / перекладина как в исходном снимке.
    const gateX=1.8, gateHalfZ=1.42, gateLegH=2.55, gateTopY=2.86;
    // Две основные ножки рядом с краями конвейера.
    [-gateHalfZ,gateHalfZ].forEach(z=>{
      addTo(scene,box(.18,gateLegH,.18,steel),gateX,gateLegH/2,z);
      addTo(scene,box(.28,.10,.28,dark),gateX,.05,z);
    });
    // Сильная видимая белая перекладина над конвейером.
    const gateBar=addTo(scene,box(.22,.16,gateHalfZ*2+.35,new THREE.MeshStandardMaterial({color:0xE6EEF3,emissive:0xE6EEF3,emissiveIntensity:.12})),gateX,gateTopY,0);
    gateBar.userData.noShadow=true;
    const gateLight=addTo(scene,box(.10,.05,gateHalfZ*2-.04,new THREE.MeshBasicMaterial({color:0xCFF4FF})),gateX-.10,gateTopY-.16,0);
    gateLight.userData.noShadow=true;
    // Боковые направляющие под рамой.
    addTo(scene,box(.10,.10,1.36,mat(0xF0B24A,0.4,0.16)),gateX,.78,0.96);
    addTo(scene,box(.10,.10,1.36,mat(0xD88722,0.4,0.16)),gateX,.78,-0.96);
    // Маленькие сканеры с обеих сторон рамы.
    [-0.98,0.98].forEach(z=>{
      const sensor=addTo(scene,box(.16,.24,.16,new THREE.MeshStandardMaterial({color:0x58A6FF,emissive:0x58A6FF,emissiveIntensity:.6})),gateX,1.52,z);
      sensor.userData.noShadow=true;
    });
    mountDetailProp(v,'btf-aim-board',[5.7,0,-3.45],2.45,-Math.PI/2);
    mountDetailProp(v,'btf-inspector',[-5.25,0,3.35],1.75,.55);
  }

  function refreshFullscreen() {
    const active=document.fullscreenElement||document.webkitFullscreenElement;
    document.querySelectorAll('.viewer-btn[data-action="fullscreen"]').forEach(button=>{
      const open=active===button.closest('.card');
      button.classList.toggle('active',open);
      button.setAttribute('aria-pressed',String(open));
      button.textContent=t(open?'exit-fullscreen':'fullscreen');
      button.setAttribute('aria-label',button.textContent);
    });
    requestAnimationFrame(()=>{
      Object.values(viewers).forEach(viewer=>{
        viewer.resize();
        if(active===viewer.container.closest('.card'))viewer.visible=true;
        viewer.renderer.render(viewer.scene,viewer.camera);
      });
    });
  }
  document.addEventListener('fullscreenchange',refreshFullscreen);
  document.addEventListener('webkitfullscreenchange',refreshFullscreen);

  const PRODUCT_I18N={
    'sandbox-mode':['Режим Тестовый режим','Сынақ режимі'],
    'leave-sandbox':['Выключить тестовый режим','Сынақ режимін өшіру'],
    'theme-dark':['Включить тёмную тему','Қараңғы тақырыпты қосу'],
    'theme-light':['Включить светлую тему','Ашық тақырыпты қосу'],
    'nav-overview':['Обзор','Шолу'], 'nav-analytics':['Аналитика','Талдау'], 'nav-viewers':['3D-цеха','3D цехтар'], 'nav-sandbox':['Тестовый режим','Тест режимі'],
    'page-overview':['Обзор производства','Өндіріс шолуы'], 'page-analytics':['Аналитика производства','Өндірісті талдау'], 'page-viewers':['Участки в 3D','Учаскелер 3D көріністе'], 'page-sandbox':['Проверка сценариев','Сценарийлерді тексеру'],
    'description-overview':['Главные показатели и задачи, требующие внимания.','Негізгі көрсеткіштер және назар аударуды қажет ететін міндеттер.'],
    'description-analytics':['Выпуск, качество и простои - по участкам и датам.','Шығарылым, сапа және тоқтау - учаскелер мен күндер бойынша.'],
    'description-viewers':['Выберите участок. Вращайте модель или откройте на весь экран.','Учаскені таңдаңыз. Модельді айналдырыңыз немесе толық экранда ашыңыз.'],
    'description-sandbox':['Измените показатели и сравните результат с исходными данными.','Көрсеткіштерді өзгертіп, нәтижені бастапқы деректермен салыстырыңыз.'],
    'plant-name':['Allur · Завод в Костанае','Allur · Қостанайдағы зауыт'], 'try-scenario':['Проверить сценарий','Сценарийді тексеру'],
    'workspace-label':['Рабочее пространство','Жұмыс кеңістігі'], 'sections':['Разделы','Бөлімдер'], 'local-data':['Данные загружены','Деректер жүктелді'],
    'factory-health':['Состояние производства','Өндіріс жағдайы'], 'needs-attention':['Требует внимания','Назар аудару қажет'], 'all-running':['Показатели в норме','Көрсеткіштер қалыпты'],
    'check-priority':['Открыть проблемный участок','Мәселелі учаскені ашу'], 'efficiency':['Эффективность OEE','OEE тиімділігі'],
    'target-oee':['Цель: от 85%','Мақсат: 85%-дан жоғары'], 'areas-attention':['Участков с отклонениями','Ауытқуы бар учаскелер'],
    'how-calculated':['Как это рассчитывается?','Бұл қалай есептеледі?'], 'about-data':['Что учтено в данных?','Деректерде не ескерілген?'],
    'risk-details':['Показания оборудования и факторы риска','Жабдық көрсеткіштері мен тәуекел факторлары'],
    'risk-summary':['Индекс помогает определить, какое оборудование стоит проверить.','Индекс қай жабдықты тексеру керектігін анықтауға көмектеседі.'],
    'show-all-incidents':['Показать все инциденты','Барлық оқиғаларды көрсету'], 'hide-incidents':['Свернуть список','Тізімді жинау'],
    'safe-experiment':['Безопасный эксперимент','Қауіпсіз тәжірибе'], 'sandbox-intro-title':['Что изменится, если…','Егер… болса, не өзгереді?'],
    'sandbox-intro-note':['Включите тестовый режим, выберите день и задайте показатели. Исходные данные останутся сохранены.','Тест режимін қосып, күнді таңдап, көрсеткіштерді енгізіңіз. Бастапқы деректер сақталады.'],
    'data-period':['Доступные данные: 1-2 октября 2026','Қолжетімді деректер: 2026 жылғы 1-2 қазан'],
    'quality-count':['Брак за период','Кезеңдегі ақау'], 'danger-note':['Проверьте качество и историю простоев участка.','Учаскенің сапасы мен тоқтау тарихын тексеріңіз.']
  };
  Object.entries(PRODUCT_I18N).forEach(([key,v])=>{I18N.ru[key]=v[0];I18N.kk[key]=v[1];});
  const SIMPLE_LABELS={
    'brand-home':['Allur - на главную','Allur - басты бетке'], 'brand-sub':['Панель производства','Өндіріс панелі'], 'kpi-production':['Выпуск участков','Учаскелер шығарылымы'], 'kpi-plan':['Месячный план','Айлық жоспар'],
    'kpi-load':['Загрузка','Жүктеме'], 'kpi-quality':['Качество','Сапа'], 'overview-title':['Процесс производства','Өндіріс үдерісі'],
    'hover-tip':['Нажмите на участок, чтобы узнать подробности','Мәліметтер үшін учаскені басыңыз'], 'analytics-title':['Показатели по участкам','Учаскелер бойынша көрсеткіштер'],
    'model-title':['План по моделям','Модельдер жоспары'], 'downtime-history':['История простоев','Тоқтау тарихы'], 'eq-title':['Оборудование','Жабдық'],
    'inc-title':['Требует внимания','Назар аудару қажет'], 'ai-title':['Риск простоя','Тоқтау қаупі'], 'calculated-status':['Нажмите на статус для деталей','Мәліметтер үшін күйді басыңыз'],
    'welding-title':['Сварка · 3D','Дәнекерлеу · 3D'], 'paint-title':['Окраска · 3D','Бояу · 3D'], 'assembly-title':['Сборка · 3D','Жинау · 3D'], 'inspection-title':['Контроль качества · 3D','Сапа бақылауы · 3D'],
    'sandbox-title':['Параметры сценария','Сценарий параметрлері'], 'sandbox-enable':['Включить тестовый режим','Тест режимін қосу'],
    'sandbox-help':['1. Выберите день. 2. Измените показатели. 3. Нажмите «Применить сценарий».','1. Күнді таңдаңыз. 2. Көрсеткіштерді өзгертіңіз. 3. «Сценарийді қолдану» түймесін басыңыз.'],
    'all-days':['1-2 октября · Свод','1-2 қазан · Жиынтық'], 'coverage':['Октябрь 2026 · Два дня данных','2026 жылғы қазан · Екі күндік деректер'],
    'mtd':['С начала месяца до выбранной даты','Ай басынан таңдалған күнге дейін'], 'mtd-fact':['Выпуск с начала месяца','Ай басынан бергі шығарылым'],
    'weighted-quality':['Доля годного выпуска','Жарамды шығарылым үлесі'], 'average-load':['Среднее по выбранным участкам','Таңдалған учаскелердің орташа мәні'],
    'month-total':['Выпущено / план месяца','Шығарылым / айлық жоспар'], 'selected-total':['За выбранный период','Таңдалған кезеңде'],
    'risk-method':['Индекс риска','Тәуекел индексі']
  };
  Object.entries(SIMPLE_LABELS).forEach(([key,v])=>{I18N.ru[key]=v[0];I18N.kk[key]=v[1];});
  let activePanel='overview', priorityStation='painting', incidentsExpanded=false;
  function refreshProductLanguage(){
    setText('page-title',t('page-'+activePanel));setText('page-description',t('description-'+activePanel));
    setText('incidents-toggle',t(incidentsExpanded?'hide-incidents':'show-all-incidents'));
    renderProductSummary();
    refreshModeUI();
  }
  function renderProductSummary(){
    const rows=selectedRows(),m=metrics(rows);
    const lines=['welding','painting','assembly'].map(line=>({line,m:lineMetrics(line)}));
    const attention=lines.filter(item=>item.m.status!=='RUNNING');
    lines.sort((a,b)=>{const rank={STOPPED:3,CRITICAL:2,WARNING:1,RUNNING:0};return rank[b.m.status]-rank[a.m.status]||a.m.oee-b.m.oee;});
    priorityStation=lines[0].line;
    setText('factory-health-title',t(attention.length?'needs-attention':'all-running'));
    setText('factory-health-note',attention.length?t('areas-attention')+': '+attention.length+' · '+t('station-'+priorityStation):t('coverage'));
    setText('overview-oee',pct(m.oee));setText('overview-oee-target',t('target-oee'));
    document.querySelector('.factory-summary').classList.toggle('healthy',!attention.length);
    $('open-priority').hidden=!attention.length;
    const count=$('incidents-list').querySelectorAll('.incident').length;setText('incident-count',String(count));
    $('incidents-toggle').hidden=count<=4;
    $('incidents-list').classList.toggle('expanded',incidentsExpanded);
    $('incidents-toggle').setAttribute('aria-expanded',String(incidentsExpanded));
    setText('incidents-toggle',t(incidentsExpanded?'hide-incidents':'show-all-incidents'));
    refreshModeUI();
  }
  function switchPanel(name,focusTab=false){
    if(!['overview','analytics','viewers','sandbox','assistant','faq'].includes(name))return;
    activePanel=name;
    document.querySelector('.filter-card').hidden=['faq','sandbox'].includes(name);
    document.querySelectorAll('.dashboard-panel').forEach(panel=>panel.hidden=panel.id!=='panel-'+name);
    document.querySelectorAll('.main-nav [data-panel]').forEach(button=>{const active=button.dataset.panel===name;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
    refreshProductLanguage();
    window.scrollTo({top:0,behavior:'instant'});
    if(focusTab)$('nav-'+name).focus();
    if(name==='assistant')checkAIConnection();
    requestAnimationFrame(()=>Object.values(viewers).forEach(viewer=>{viewer.resize();viewer.visible=name==='viewers';if(viewer.visible)viewer.renderer.render(viewer.scene,viewer.camera);}));
  }
  document.querySelectorAll('.main-nav [data-panel]').forEach(button=>button.addEventListener('click',()=>switchPanel(button.dataset.panel)));
  document.querySelectorAll('[data-open-panel]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();switchPanel(button.dataset.openPanel);}));
  document.querySelector('.main-nav').addEventListener('keydown',event=>{
    const names=['overview','analytics','viewers','sandbox','assistant','faq'];let index=names.indexOf(activePanel);
    if(['ArrowRight','ArrowDown'].includes(event.key))index=(index+1)%names.length;
    else if(['ArrowLeft','ArrowUp'].includes(event.key))index=(index+names.length-1)%names.length;
    else if(event.key==='Home')index=0;else if(event.key==='End')index=names.length-1;else return;
    event.preventDefault();switchPanel(names[index],true);
  });
  $('open-priority').addEventListener('click',()=>openStation(priorityStation,$('open-priority')));
  $('incidents-toggle').addEventListener('click',()=>{incidentsExpanded=!incidentsExpanded;renderProductSummary();});
  document.querySelectorAll('[data-scene-link]').forEach(button=>button.addEventListener('click',()=>$(button.dataset.sceneLink+'-view').closest('.card').scrollIntoView({behavior:reducedMotion?'instant':'smooth',block:'start'})));
  function refreshModeUI(){
    $('panel-sandbox').hidden=activePanel!=='sandbox';
    $('sandbox-enabled').checked=sandboxEnabled;
    refreshSupportUI();
    const dark=document.documentElement.dataset.theme==='dark';
    const label=t(dark?'theme-light':'theme-dark');
    $('theme-toggle').title=label;$('theme-toggle').setAttribute('aria-label',label);
    $('theme-toggle').setAttribute('aria-pressed',String(dark));setText('theme-label',label);
  }

  $('theme-toggle').addEventListener('click',()=>{
    const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=theme;
    try {localStorage.setItem('allur-theme',theme);}catch(_){}
    refreshModeUI();
  });

  const SUPPORT_I18N={
    'nav-sandbox':['Тестовый режим','Тест режимі'], 'page-sandbox':['Тестовый режим','Тест режимі'],
    'sandbox-mode':['Тестовый режим','Тест режимі'], 'sandbox-enable':['Использовать тестовые данные','Тест деректерін пайдалану'],
    'sandbox-active':['Тестовый режим: сценарные данные','Тест режимі: сценарий деректері'],
    'sandbox-intro-note':['Выберите день и измените показатели. После применения сценария все вкладки покажут тестовые данные. Выключите переключатель, чтобы вернуться к исходным данным.','Күнді таңдап, көрсеткіштерді өзгертіңіз. Сценарийді қолданған соң барлық бөлімдер тест деректерін көрсетеді. Бастапқы деректерге оралу үшін ауыстырғышты өшіріңіз.'],
    'sandbox-limitations':['Тестовый режим пересчитывает последствия введённых значений, а не прогнозирует поток автомобилей между участками. При нулевом выпуске OEE=0, качество не оценивается. Нормативы фиксированы.','Тест режимі енгізілген көрсеткіштердің салдарын қайта есептейді, учаскелер арасындағы автомобиль ағынын болжамайды. Нөлдік шығарылымда OEE=0, сапа бағаланбайды. Нормативтер тұрақты.'],
    'nav-assistant':['ИИ помощник','ЖИ көмекші'], 'page-assistant':['ИИ помощник','ЖИ көмекші'],
    'description-assistant':['Задайте вопрос о заводе, разберите сценарий или обсудите другую тему.','Зауыт туралы сұрақ қойыңыз, сценарийді талдаңыз немесе басқа тақырыпты талқылаңыз.'],
    'nav-faq':['FAQ','FAQ'], 'page-faq':['Частые вопросы','Жиі қойылатын сұрақтар'],
    'description-faq':['Короткие ответы о данных, показателях и работе системы.','Деректер, көрсеткіштер және жүйе туралы қысқа жауаптар.'],
    'faq-search':['Найти вопрос','Сұрақты іздеу'], 'faq-empty':['Вопросов не найдено. Попробуйте другое слово.','Сұрақ табылмады. Басқа сөзді іздеңіз.'],
    'ask-ai':['Спросить ИИ','ЖИ-ден сұрау'], 'chat-title':['Помощник Allur','Allur көмекшісі'],
    'chat-intro':['Помощник видит выбранный период и применённые тестовые данные.','Көмекші таңдалған кезеңді және қолданылған тест деректерін көреді.'],
    'chat-welcome':['Здравствуйте! Могу помочь разобраться в показателях завода, проанализировать тестовый сценарий или ответить на другой вопрос. С чего начнём?','Сәлеметсіз бе! Зауыт көрсеткіштерін түсіндіруге, тест сценарийін талдауға немесе басқа сұраққа жауап беруге көмектесемін. Неден бастаймыз?'],
    'chat-input':['Ваш вопрос','Сұрағыңыз'], 'chat-send':['Отправить','Жіберу'], 'chat-clear':['Новый диалог','Жаңа диалог'],
    'chat-you':['Вы','Сіз'], 'chat-agent':['Помощник','Көмекші'], 'chat-thinking':['Помощник готовит ответ…','Көмекші жауап дайындап жатыр…'],
    'chat-checking':['Проверяем подключение…','Қосылым тексерілуде…'], 'chat-ready':['ИИ подключён','ЖИ қосылған'],
    'chat-offline':['ИИ пока не подключён. Настройте подключение по инструкции запуска проекта.','ЖИ әлі қосылмаған. Жобаны іске қосу нұсқаулығына сай қосылымды баптаңыз.'],
    'chat-server':['Для ИИ откройте сайт через сервер проекта. Инструкция - в README.txt.','ЖИ үшін сайтты жоба сервері арқылы ашыңыз. Нұсқаулық README.txt файлында.'],
    'chat-note':['Ответы ИИ могут содержать ошибки. Проверяйте выводы перед принятием решений. История хранится до обновления страницы.','ЖИ жауабында қате болуы мүмкін. Шешім қабылдар алдында қорытындыларды тексеріңіз. Тарих бет жаңартылғанша сақталады.'],
    'chat-context':['Данные для ответа','Жауапқа арналған деректер'], 'chat-archive':['Архивные данные','Мұрағат деректері'], 'chat-test':['Тестовый сценарий','Тест сценарийі'],
    'chat-retry':['Повторить запрос','Сұрауды қайталау'], 'chat-stop':['Остановить','Тоқтату'],
    'chat-cancelled':['Запрос остановлен. Можно отправить вопрос снова.','Сұрау тоқтатылды. Сұрақты қайта жіберуге болады.'],
    'chat-network':['Не удалось связаться с помощником. Проверьте подключение и попробуйте снова.','Көмекшімен байланысу мүмкін болмады. Қосылымды тексеріп, қайталап көріңіз.'],
    'chat-busy':['Слишком много запросов. Подождите и попробуйте снова.','Сұраулар тым көп. Күтіп, қайталап көріңіз.'],
    'chat-auth':['Подключение ИИ требует проверки владельцем сайта.','Сайт иесі ЖИ қосылымын тексеруі керек.'],
    'chat-timeout':['Помощник не успел ответить. Попробуйте ещё раз.','Көмекші уақытында жауап бермеді. Қайталап көріңіз.'],
    'chat-blocked':['Сервис ИИ не смог ответить на этот запрос. Попробуйте переформулировать вопрос.','ЖИ қызметі бұл сұрауға жауап бере алмады. Сұрақты басқаша қойып көріңіз.'],
    'chat-model':['Выбранная модель недоступна. Проверьте название модели в .env и доступ к ней у провайдера.','Таңдалған модель қолжетімсіз. .env ішіндегі модель атауын және провайдердегі қолжетімділікті тексеріңіз.'],
    'chat-request-error':['Провайдер отклонил запрос. Проверьте API-ключ и настройки модели на сервере.','Провайдер сұрауды қабылдамады. Сервердегі API кілті мен модель баптауларын тексеріңіз.'],
    'chat-reference':['Справка сайта','Сайт анықтамасы'],
    'chat-provider':['Сервис ИИ сейчас недоступен. Повторите запрос позже.','ЖИ қызметі қазір қолжетімсіз. Сұрауды кейін қайталаңыз.'],
    'chat-empty':['Ответ не получен. Попробуйте уточнить вопрос.','Жауап алынбады. Сұрақты нақтылап көріңіз.'],
    'chat-partial':['Ответ завершён не полностью. Попросите помощника продолжить.','Жауап толық аяқталмады. Көмекшіден жалғастыруын сұраңыз.'],
    'chat-production':['Как выполняется план?','Жоспар қалай орындалуда?'],
    'chat-quality':['Что происходит с качеством?','Сапа жағдайы қандай?'],
    'chat-scenario':['Разбери текущий сценарий','Ағымдағы сценарийді талда'],
    'chat-live-region':['История диалога','Диалог тарихы']
  };
  Object.entries(SUPPORT_I18N).forEach(([key,pair])=>{I18N.ru[key]=pair[0];I18N.kk[key]=pair[1];});
  const FAQ_ITEMS=[
    [['Кто создал проект?','Жобаны кім жасады?'],['Проект создали Проценко Иван, Халыков Арман и Симоненко Глеб - учащиеся 2 курса направления «Информационные технологии и робототехника» Костанайского регионального университета имени Ахмет Байтұрсынұлы.','Жобаны Ахмет Байтұрсынұлы атындағы Қостанай өңірлік университетінің «Ақпараттық технологиялар және робототехника» бағытының 2-курс студенттері Проценко Иван, Халыков Арман және Симоненко Глеб жасады.']],
    [['Какие данные показывает сайт?','Сайт қандай деректерді көрсетеді?'],['Архивные показатели трёх участков за 1 и 2 октября 2026 года. Это заданные записи, а не поток датчиков в реальном времени. Данных для складов и отдельных моделей автомобилей пока нет.','2026 жылғы 1 және 2 қазандағы үш учаскенің мұрағат көрсеткіштері. Бұлар берілген жазбалар, нақты уақыттағы датчик ағыны емес. Қоймалар мен жеке автомобиль модельдері туралы деректер әзірше жоқ.']],
    [['Что означает «Выпуск участков»?','«Учаскелер шығарылымы» нені білдіреді?'],['Это сумма выпуска сварки, окраски и сборки: 354 операции за 01.10 и 346 за 02.10, всего 700. Один автомобиль проходит несколько участков, поэтому сумму нельзя считать количеством уникальных готовых автомобилей.','Бұл дәнекерлеу, бояу және жинау шығарылымының қосындысы: 01.10 күні 354, 02.10 күні 346 операция, барлығы 700. Бір автомобиль бірнеше учаскеден өтеді, сондықтан бұл дайын бірегей автомобиль саны емес.']],
    [['Какой месячный план установлен?','Айлық жоспар қандай?'],['Общезаводская цель - не менее 5 500 автомобилей: Onix - 2 500, Cobalt - 1 800, JAC J7 - 500, прочие модели - 700. Фактической разбивки по моделям нет. Сравнение суммы выпуска участков с целью предварительное; выполнение плана готовых автомобилей требует данных финальной приёмки.','Зауыт мақсаты - кемінде 5 500 автомобиль: Onix - 2 500, Cobalt - 1 800, JAC J7 - 500, басқа модельдер - 700. Модельдер бойынша нақты шығарылым жоқ. Учаскелер қосындысын мақсатпен салыстыру алдын ала жасалады; дайын автомобиль жоспарын бағалау үшін соңғы қабылдау деректері керек.']],
    [['Что такое OEE и какова цель?','OEE деген не және мақсаты қандай?'],['OEE показывает эффективность оборудования и учитывает доступность, производительность и качество. Цель - от 85%. Расчёт использует две смены по 8 часов. Подробная методика доступна в раскрываемых пояснениях аналитики.','OEE жабдық тиімділігін көрсетеді: қолжетімділік, өнімділік және сапа ескеріледі. Мақсат - 85%-дан бастап. Есеп екі 8 сағаттық ауысымға негізделген. Әдістеме талдау бөліміндегі ашылатын түсіндірмелерде бар.']],
    [['Почему участок отмечен предупреждением?','Учаске неге ескерту күйінде?'],['Предупреждение появляется при браке выше 2%, OEE ниже 85% или простое от 54 минут за сутки. Брак от 5% либо простой больше 60 минут - критическое отклонение. Нулевой выпуск отмечается остановкой. Нажмите участок для подробностей.','Ақау 2%-дан жоғары, OEE 85%-дан төмен немесе тәуліктік тоқтау 54 минуттан бастап болса, ескерту пайда болады. Ақау 5%-дан бастап немесе тоқтау 60 минуттан асса - сыни ауытқу. Нөлдік шығарылым тоқтау ретінде белгіленеді. Толығырақ білу үшін учаскені басыңыз.']],
    [['Какой допустимый простой?','Рұқсат етілген тоқтау қандай?'],['Максимум 60 минут за сутки. Простои сравниваются с лимитом отдельно по дню и участку; их сумма за разные даты не считается суточным простоем. Сборка 02.10 - 55 минут, поэтому показано приближение к лимиту.','Тәулігіне ең көбі 60 минут. Тоқтау шегі әр күн мен учаске бойынша жеке салыстырылады; түрлі күндердің қосындысы тәуліктік тоқтау емес. 02.10 күнгі жинау - 55 минут, сондықтан шекке жақындау көрсетіледі.']],
    [['Как использовать тестовый режим?','Тест режимін қалай қолдануға болады?'],['Откройте вкладку, выберите день, измените показатели и нажмите «Применить сценарий». Результат и сравнение появятся под формой, а другие вкладки покажут те же тестовые данные. Есть готовые примеры перегрева, остановки и штатной работы.','Бөлімді ашып, күнді таңдаңыз, көрсеткіштерді өзгертіп, «Сценарийді қолдану» түймесін басыңыз. Нәтиже мен салыстыру пішіннің астында, ал басқа бөлімдерде сол тест деректері көрсетіледі. Қызып кету, тоқтау және қалыпты жұмыс мысалдары бар.']],
    [['Как вернуть исходные данные?','Бастапқы деректерді қалай қайтаруға болады?'],['В тестовом режиме выключите «Использовать тестовые данные». Введённый сценарий можно включить снова. «Сбросить все изменения» очищает сценарии обоих дней. При обновлении страницы тестовые данные и история чата очищаются.','Тест режимінде «Тест деректерін пайдалану» ауыстырғышын өшіріңіз. Сценарийді қайта қосуға болады. «Барлық өзгерістерді қалпына келтіру» екі күннің сценарийін тазалайды. Бет жаңартылғанда тест деректері мен чат тарихы өшеді.']],
    [['Как работает риск простоя?','Тоқтау тәуекелі қалай есептеледі?'],['Показатель учитывает температуру, вибрацию, загрузку и накопленный простой. Это эвристический индекс для проверки оборудования, а не подтверждённая вероятность поломки. При температуре выше 70 °C или вибрации выше 4 мм/с внимание к обслуживанию повышается.','Көрсеткіш температураны, дірілді, жүктемені және жиналған тоқтауды ескереді. Бұл жабдықты тексеруге арналған эвристикалық индекс, істен шығудың расталған ықтималдығы емес. Температура 70 °C-тан немесе діріл 4 мм/с-тен асса, қызмет көрсетуге назар артады.']],
    [['Как управлять 3D-моделями?','3D модельдерді қалай басқаруға болады?'],['Перетаскивайте модель для вращения, используйте колесо мыши для масштаба. Кнопки под сценой сбрасывают вид, включают вращение и открывают полный экран. Для выхода из полного экрана нажмите Esc или ту же кнопку.','Айналдыру үшін модельді сүйреңіз, масштаб үшін тінтуір дөңгелегін қолданыңыз. Көрініс астындағы түймелер көріністі қалпына келтіреді, айналдыруды қосады және толық экранды ашады. Шығу үшін Esc немесе сол түймені басыңыз.']],
    [['Что умеет ИИ помощник?','ЖИ көмекші не істей алады?'],['Объясняет показатели выбранного периода, анализирует применённый сценарий и отвечает на общие вопросы. Вкладка и кнопка чата внизу слева используют один диалог. Помощнику передаются все архивные записи, FAQ, описание разделов, нормативы и текущий сценарий. Он не управляет оборудованием, не меняет данные и не имеет доступа к интернет-поиску.','Таңдалған кезең көрсеткіштерін түсіндіреді, қолданылған сценарийді талдайды және жалпы сұрақтарға жауап береді. Бөлім мен төменгі сол жақтағы чат түймесі бір диалогты пайдаланады. Көмекшіге барлық мұрағат жазбалары, FAQ, бөлім сипаттамалары, нормативтер және ағымдағы сценарий беріледі. Ол жабдықты басқармайды, деректерді өзгертпейді және интернет іздеуіне қол жеткізбейді.']],
    [['Почему ИИ не отвечает?','ЖИ неге жауап бермейді?'],['Чат требует запуска сервера проекта, подключения к интернету и действующего API-ключа. Настройку выполняет владелец сайта по README.txt. Обычный интерфейс, тестовый режим и FAQ доступны без API. При временной ошибке используйте «Повторить запрос».','Чат үшін жоба сервері, интернет және жарамды API кілті қажет. Сайт иесі README.txt нұсқаулығы бойынша баптайды. Негізгі интерфейс, тест режимі және FAQ API-сыз қолжетімді. Уақытша қатеде «Сұрауды қайталау» түймесін қолданыңыз.']]
  ];
  const chatState={messages:[],draft:'',pending:false,error:'',ready:false,status:'chat-checking',controller:null,lastQuestion:''};
  let connectionCheck=null;
  function renderFAQ(){
    const query=$('faq-search').value.trim().toLocaleLowerCase(currentLang==='kk'?'kk-KZ':'ru-RU');
    const lang=currentLang==='kk'?1:0;
    const items=FAQ_ITEMS.filter(item=>(item[0][lang]+' '+item[1][lang]).toLocaleLowerCase().includes(query));
    $('faq-list').innerHTML=items.map(item=>`<details class="faq-item"><summary>${esc(item[0][lang])}</summary><p>${esc(item[1][lang])}</p></details>`).join('');
    $('faq-empty').hidden=!!items.length;
    $('faq-search').placeholder=t('faq-search');
  }
  function refreshSupportUI(){
    renderFAQ();renderChats();renderModelStates();
    $('chat-launcher').setAttribute('aria-expanded',String($('chat-dialog').open));
  }
  function renderChats(){
    document.querySelectorAll('[data-chat-status]').forEach(el=>{el.textContent=t(chatState.status)+(chatState.ready&&chatState.provider?' · '+chatState.provider:'');el.classList.toggle('ready',chatState.ready);});
    document.querySelectorAll('[data-chat-context]').forEach(el=>el.textContent=t(sandboxEnabled?'chat-test':'chat-archive')+' · '+periodLabel());
    document.querySelectorAll('[data-chat-log]').forEach(log=>{
      const atBottom=log.scrollHeight-log.scrollTop-log.clientHeight<60;
      const previous=log.scrollTop;log.replaceChildren();
      const messages=chatState.messages.length?chatState.messages:[{role:'assistant',content:t('chat-welcome')}];
      for(const message of messages){
        const article=document.createElement('article');article.className='chat-message '+message.role;
        const label=document.createElement('strong');label.textContent=t(message.reference?'chat-reference':message.role==='user'?'chat-you':'chat-agent');
        const text=document.createElement('p');text.textContent=message.content;
        article.append(label,text);log.append(article);
      }
      if(chatState.pending){const pending=document.createElement('p');pending.className='chat-thinking';pending.textContent=t('chat-thinking');log.append(pending);}
      log.scrollTop=atBottom?log.scrollHeight:previous;
      log.setAttribute('aria-busy',String(chatState.pending));
    });
    document.querySelectorAll('[data-chat-form] textarea').forEach(input=>{input.placeholder=t('chat-input');if(input.value!==chatState.draft)input.value=chatState.draft;});
    document.querySelectorAll('[data-chat-form] button[type="submit"],[data-chat-clear],[data-chat-prompt]').forEach(button=>button.disabled=chatState.pending);
    document.querySelectorAll('[data-chat-stop]').forEach(button=>button.hidden=!chatState.pending);
    document.querySelectorAll('[data-chat-error]').forEach(el=>{el.textContent=chatState.error?t(chatState.error):'';el.hidden=!chatState.error;});
    document.querySelectorAll('[data-chat-retry]').forEach(button=>button.hidden=!chatState.error||!chatState.lastQuestion||chatState.pending);
  }
  async function checkAIConnection(){
    if(location.protocol==='file:'){chatState.status='chat-server';chatState.ready=false;renderChats();return false;}
    if(connectionCheck)return connectionCheck;
    chatState.status='chat-checking';renderChats();
    connectionCheck=(async()=>{
      try{
        const response=await fetch('/api/ai/status',{signal:AbortSignal.timeout(5000)});
        const data=await response.json();chatState.provider=['Gemini','Groq','OpenAI'].includes(data.provider)?data.provider:'';chatState.ready=response.ok&&data.ready===true;chatState.status=chatState.ready?'chat-ready':'chat-offline';
      }catch{chatState.ready=false;chatState.status='chat-network';}
      renderChats();return chatState.ready;
    })();
    try{return await connectionCheck;}finally{connectionCheck=null;}
  }
  function siteKnowledge(){
    const lang=currentLang==='kk'?1:0;
    return {
      name:'Allur Digital Twin',authors:FAQ_ITEMS[0][1][lang],
      sections:['overview','analytics','viewers','sandbox','assistant','faq'].map(name=>({name:t('page-'+name),description:t('description-'+name)})),
      process:['warehouse','welding','painting','assembly','qc','finished'].map(station=>({id:station,name:t('station-'+station),dataAvailable:['welding','painting','assembly'].includes(station)})),
      faq:FAQ_ITEMS.map(item=>({question:item[0][lang],answer:item[1][lang]})),
      methodology:{oee:t('oee-method'),status:t('critical-rule'),production:t('production-note'),sandbox:t('sandbox-limitations'),
        risk:'10 + 2*max(T-60,0) + (T>70?15:0) + 10*max(vibration-2,0) + (vibration>4?20:0) + 0.4*max(load-80,0) + 0.3*accumulated downtime; round and clamp 0..99. Missing sensors reported, not invented.'},
      controls:{theme:'Header moon/sun button; preference saved locally.',language:'Header RU/ҚАЗ switch; saved locally.',home:'Click Allur logo.',
        dates:'Overview, analytics, 3D and assistant use period; test mode has its own day picker; FAQ has no period.',
        details:'Click any process station or equipment status for OEE, defects and downtime history.',
        telemetry:'Manual temperature/vibration edits feed the risk index. These are demonstration inputs, not live plant sensors.',
        incidents:'Warnings and critical incidents are generated from current records. Show all / hide controls expand the list.'},
      modelSources:t('model-sources-note'),modelLimitations:t('model-note'),
      availability:'Static site functions and FAQ work offline. AI API requires the Node server, configured provider key and internet. Both chat views share one in-memory history.'
    };
  }
  function referenceAnswer(question){
    const normalize=value=>value.toLocaleLowerCase().replace(/[«»"'?!.,:;\u2014\u2013-]/g,' ').replace(/\s+/g,' ').trim();
    const query=normalize(question);
    for(const item of FAQ_ITEMS){
      if(item[0].some(title=>normalize(title)===query))return item[1][currentLang==='kk'?1:0];
    }
    return null;
  }
  function factorySnapshot(){
    return {source:sandboxEnabled?'hypothetical test scenario':'archival October 1-2, 2026 records',selectedDate,
      siteKnowledge:siteKnowledge(),
      archive:{rows:RECORDS,stops:STOPS.map(stop=>({...stop,cause:t(stop.cause)})),daily:RECORDS.map(row=>({date:row.date,line:row.line,...metrics([row],STOPS)}))},
      scenario:{rows:effectiveRecords(),stops:effectiveStops().map(stop=>({...stop,cause:t(stop.cause)}))},
      mtd:metrics(mtdRows()),lineMetrics:['welding','painting','assembly'].map(line=>({line,...lineMetrics(line)})),
      norms:NORMS,monthlyModelPlan:MODEL_PLAN,rows:selectedRows(),stops:selectedStops(),aggregate:metrics(selectedRows()),
      originalAggregate:metrics(RECORDS.filter(row=>selectedDate==='all'||row.date===selectedDate),STOPS),
      equipment:Object.values(equipment).map(eq=>({name:eq.name,station:eq.station,status:eq.status,qualityPercent:eq.quality,load:eq.load,temperatureC:eq.temp,vibrationMmPerSec:eq.vib,downtimeMinutes:eq.downtime,accumulatedDowntimeMinutes:eq.accumulatedDowntime,riskIndex:risk(eq)})),
      notes:['Production totals count line operations, not unique finished vehicles.','No per-model actual production, warehouse inventory, or YTD records available.','Quality, availability, performance and OEE are fractions, riskIndex is percent.','PdM is a heuristic index, not a validated probability.']};
  }
  async function sendChat(question){
    if(chatState.pending||!question.trim())return;
    question=question.trim().slice(0,4000);
    const reference=referenceAnswer(question);
    if(reference){
      chatState.messages=chatState.messages.filter(message=>!message.failed);
      chatState.messages.push({role:'user',content:question},{role:'assistant',content:reference,reference:true});
      chatState.messages=chatState.messages.slice(-40);chatState.draft='';chatState.error='';chatState.lastQuestion='';renderChats();return;
    }
    chatState.pending=true;chatState.error='';chatState.lastQuestion=question;
    chatState.controller=new AbortController();renderChats();
    try{
      const ready=await checkAIConnection();
      if(chatState.controller.signal.aborted)throw new DOMException('Aborted','AbortError');
      if(!ready){chatState.error=chatState.status;return;}
      chatState.messages=chatState.messages.filter(message=>!message.failed);
      chatState.messages.push({role:'user',content:question});chatState.draft='';renderChats();
      const timeout=setTimeout(()=>chatState.controller.abort('timeout'),40000);
      let response;
      try{response=await fetch('/api/ai/chat',{method:'POST',headers:{'Content-Type':'application/json'},signal:chatState.controller.signal,
        body:JSON.stringify({language:currentLang,messages:chatState.messages.slice(-6).map(({role,content},index,items)=>({role,content:content.slice(0,index===items.length-1?4000:1600)})),context:factorySnapshot()})});}
      finally{clearTimeout(timeout);}
      const data=await response.json();
      if(!response.ok){const codes={AI_NOT_CONFIGURED:'chat-offline',AI_MODEL_ERROR:'chat-model',AI_REQUEST_ERROR:'chat-request-error',AI_BLOCKED:'chat-blocked',AI_BUSY:'chat-busy',AI_AUTH_ERROR:'chat-auth',AI_TIMEOUT:'chat-timeout',AI_EMPTY_RESPONSE:'chat-empty',AI_PROVIDER_ERROR:'chat-provider',AI_NETWORK_ERROR:'chat-network'};throw new Error(codes[data.code]||'chat-network');}
      if(typeof data.reply!=='string'||!data.reply.trim())throw new Error('chat-empty');
      chatState.messages.push({role:'assistant',content:data.reply});chatState.messages=chatState.messages.slice(-40);
      if(data.truncated)chatState.error='chat-partial';
    }catch(error){
      chatState.error=chatState.controller.signal.aborted?(chatState.controller.signal.reason==='timeout'?'chat-timeout':'chat-cancelled'):(SUPPORT_I18N[error.message]?error.message:'chat-network');
      if(chatState.messages.at(-1)?.role==='user')chatState.messages.at(-1).failed=true;
      if(!chatState.draft)chatState.draft=question;
    }finally{chatState.pending=false;chatState.controller=null;renderChats();document.querySelectorAll('[data-chat-log]').forEach(log=>log.scrollTop=log.scrollHeight);}
  }
  $('faq-search').addEventListener('input',renderFAQ);
  $('chat-launcher').addEventListener('click',()=>{$('chat-dialog').showModal();refreshSupportUI();$('chat-dialog').querySelector('[data-chat-log]').scrollTop=$('chat-dialog').querySelector('[data-chat-log]').scrollHeight;checkAIConnection();});
  $('chat-close').addEventListener('click',()=>$('chat-dialog').close());
  $('chat-dialog').addEventListener('close',()=>{$('chat-launcher').setAttribute('aria-expanded','false');$('chat-launcher').focus();});
  document.querySelectorAll('[data-chat-form]').forEach(form=>{
    form.addEventListener('submit',event=>{event.preventDefault();sendChat(form.querySelector('textarea').value);});
    form.querySelector('textarea').addEventListener('input',event=>{chatState.draft=event.target.value;document.querySelectorAll('[data-chat-form] textarea').forEach(input=>{if(input!==event.target)input.value=chatState.draft;});});
    form.querySelector('textarea').addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing){event.preventDefault();sendChat(event.target.value);}});
  });
  document.querySelectorAll('[data-chat-prompt]').forEach(button=>button.addEventListener('click',()=>sendChat(t(button.dataset.chatPrompt))));
  document.querySelectorAll('[data-chat-clear]').forEach(button=>button.addEventListener('click',()=>{chatState.messages=[];chatState.draft='';chatState.error='';chatState.lastQuestion='';renderChats();}));
  document.querySelectorAll('[data-chat-retry]').forEach(button=>button.addEventListener('click',()=>sendChat(chatState.lastQuestion)));
  document.querySelectorAll('[data-chat-stop]').forEach(button=>button.addEventListener('click',()=>chatState.controller?.abort()));

  // Каждая сцена запускается независимо: недоступный контекст не отключит аналитику.
  [initWeldingLine, initPaintLine, initAssemblyLine, initInspectionTunnel].forEach(init => {
    try { init(); } catch (error) { console.error('Scene initialization failed:', error); }
  });
  if (typeof THREE !== 'undefined') {
    const clock = new THREE.Clock();
    (function animate() {
      requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      Object.values(viewers).forEach(v => {
        if (!v.visible || document.hidden || v.renderer.getContext().isContextLost()) return;
        v.update(dt, clock.elapsedTime);
        v.controls.update();
        v.renderer.render(v.scene, v.camera);
      });
    })();
  }
  applyLanguage(currentLang);
  updateClock();
  setInterval(updateClock, 1000);
})();
