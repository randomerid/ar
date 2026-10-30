/**
 * Ar. Radhi Dinata, IAI — Architectural Studio & Spatial Design
 * Client Application Logic: Bilingual Engine, Design Needs Calculator, Portfolio Engine, Project Modal, and ArchiAI Chatbot
 */

// ============================================================================
// 1. Bilingual Translation Dictionary (i18n)
// ============================================================================
const translations = {
  id: {
    topBarBadge: "🏛️ Arsitek Anggota IAI & ASEAN Architect",
    topBarText: "Menerima Konsultasi Perancangan Hunian Tropis, Villa, & Komersial Periode 2026/2027",
    langLabel: "Bahasa:",
    logoSub: "Architect & Spatial Design Studio",
    navHome: "Beranda",
    navAbout: "Profil Arsitek",
    navCalculator: "Kalkulator Desain",
    navPortfolio: "Portofolio Karya",
    navServices: "Layanan",
    navProcess: "Alur Kerja",
    navAskAI: "Konsultasi AI Arsitek",
    heroPill: "Arsitektur Tropis Berkelanjutan & Biophilic Living",
    heroTitlePart1: "Mewujudkan Ruang Hidup Bernyawa &",
    heroTitleHighlight: "Arsitektur Berkelanjutan",
    heroDesc: "Saya Ar. Radhi Dinata, ST., IAI. Bersama studio kami, kami mendampingi Anda merancang bangunan impian—mulai dari hunian pribadi yang sejuk alami, villa peristirahatan bernuansa alam, hingga ruang komersial yang berkarakter kuat dan efisien biaya.",
    heroBtnExplore: "Rancang Kebutuhan Bangunan Anda",
    heroBtnChat: "Konsultasi AI Arsitek (24/7)",
    statExp: "Tahun Praktik Desain",
    statProjects: "Karya Bangunan Terbangun",
    statCustom: "Kustom Sesuai Anggaran",
    statAwards: "Penghargaan Arsitektur",
    badgeAwardTitle: "IAI Design Excellence",
    badgeAwardSub: "Kategori Hunian Tropis Berkelanjutan",
    badgeHeritageTitle: "Bioclimatic Passive Cooling",
    badgeHeritageSub: "Ventilasi Silang & Bukaan Cahaya Terukur",
    previewTag: "Karya Pilihan Unggulan",
    previewProjectBrief: "Hunian tropis 2 lantai dengan inner courtyard terbuka, kisi-kisi kayu jati daur ulang, dan beton ekspos yang memaksimalkan sirkulasi udara alami tanpa boros energi.",
    viewDetails: "Lihat Detail & Gambar Kerja →",
    valuesTag: "Filosofi Desain",
    valuesTitle: "Membangun Bukan Sekadar Mendirikan Dinding, Tapi Menganyam Kehidupan",
    valuesSub: "Setiap proyek arsitektur bermula dari mendengar: bagaimana kebiasaan harian Anda, karakter tanah tempat berpijak, serta arah pergerakan matahari dan angin. Inilah 4 prinsip utama di setiap karya studio kami.",
    val1Title: "Respon Iklim & Hemat Energi",
    val1Desc: "Penerapan teritisan lebar, orientasi massa bangunan menghindari panas barat, dan ventilasi silang yang membuat hunian 3-4°C lebih sejuk secara alami.",
    val2Title: "Kejujuran Material Alami",
    val2Desc: "Memadukan keelokan kayu jati lestari, batu alam andesit, bata terakota bernafas, dan beton ekspos yang menua dengan anggun tanpa biaya perawatan rumit.",
    val3Title: "Integrasi Ruang Luar & Dalam",
    val3Desc: "Inner courtyard, taman saku, dan bukaan kaca besar menghubungkan penghuni dengan alam hijau, suara gemercik air, dan langit terbuka dari setiap sudut ruangan.",
    val4Title: "Presisi Struktur & Disiplin Anggaran",
    val4Desc: "Setiap garis gambar kerja (DED) dihitung cermat bersama insinyur struktur dan diselaraskan dengan Rencana Anggaran Biaya (RAB) transparan sejak awal.",
    helperTag: "Alat Interaktif Klien",
    helperTitle: "Bantu Rancang Kebutuhan Bangunan Anda",
    helperSub: "Gunakan kalkulator interaktif ini untuk memetakan kebutuhan ruang, estimasi luasan, gaya arsitektur, dan rekomendasi bujet sebelum memulai konsultasi resmi.",
    step1Label: "1. Pilih Tipologi Bangunan:",
    typeRes: "🏡 Rumah Tinggal Pribadi",
    typeVilla: "🌴 Villa / Resort Komersial",
    typeCafe: "☕ Cafe & Restoran / Retail",
    typeOffice: "🏢 Studio Kantor Kreatif",
    typeReno: "🔨 Renovasi Fasad & Ruang",
    step2Label: "2. Luas Lahan / Tanah Anda:",
    landAreaLabel: "Luas Lahan:",
    step3Label: "3. Gaya Arsitektur yang Diinginkan:",
    styleTrop: "🌿 Modern Tropis",
    styleJap: "🎋 Japandi & Minimalis Hangat",
    styleBrut: "🧱 Brutalis & Beton Ekspos",
    styleEco: "🍃 Biophilic & Bambu/Kayu",
    styleCont: "🏛️ Kontemporer Elegan",
    step4Label: "4. Fitur Ruang Tambahan (Pilih yang Diinginkan):",
    chkCourtyard: "Taman Dalam (Inner Courtyard)",
    chkPool: "Kolam Renang / Kolam Refleksi",
    chkRooftop: "Rooftop Garden / Sky Terrace",
    chkOffice: "Studio / Ruang Kerja Terpisah",
    chkVoid: "High Ceiling Void (Plafon Tinggi)",
    resultBadge: "💡 Rangkuman Rekomendasi Desain",
    resGfaLabel: "Luas Bangunan Ideal (GFA)",
    resKdbLabel: "Koefisien Dasar Bangunan (KDB)",
    resBudgetLabel: "Rentang Estimasi Bangun",
    resTimeLabel: "Estimasi Pengerjaan Desain",
    resStrategyTitle: "Strategi Arsitektur yang Disarankan:",
    resCtaNote: "Ingin mendiskusikan angka ini atau mengirimkan denah lahan Anda untuk dibedah langsung?",
    btnConsultThisPlan: "Bahas Rencana Ini dengan AI Arsitek",
    btnCopySummary: "Salin Ringkasan Desain",
    recsTag: "Portofolio Desain Terpilih",
    recsTitle: "Eksplorasi Karya Arsitektur & Spasial",
    recsSub: "Kumpulan proyek yang telah terbangun dan konsep spasial yang menggabungkan keindahan estetika, kenyamanan termal, dan ketahanan jangka panjang.",
    dishesFound: "Karya Arsitektur Ditampilkan",
    searchPlaceholder: "Cari nama proyek, gaya, lokasi, atau material (contoh: Villa, Beton, Bali, Kayu Jati, Courtyard)...",
    filterTasteLabel: "Tipologi Bangunan:",
    catAll: "Semua Tipologi",
    catResidential: "🏡 Hunian Pribadi",
    catVilla: "🌴 Villa & Resort",
    catCommercial: "☕ Cafe & Komersial",
    catRenovation: "🔨 Renovasi & Interior",
    filterRegionLabel: "Gaya & Pendekatan:",
    regAll: "Semua Gaya",
    regTrop: "Modern Tropis",
    regJap: "Japandi & Minimalis",
    regBrut: "Beton & Brutalis",
    regEco: "Biophilic & Ramah Lingkungan",
    emptyTitle: "Karya Tidak Ditemukan",
    emptyDesc: "Coba kata kunci pencarian lain atau klik tombol di bawah untuk mereset seluruh filter portofolio.",
    emptyBtnReset: "Reset Semua Filter",
    servicesTag: "Layanan Profesional",
    servicesTitle: "Bagaimana Studio Kami Membantu Mewujudkan Kebutuhan Anda",
    servicesSub: "Pendekatan menyeluruh dari tahap konsep ide, gambar perizinan PBG, hingga pengawasan pembangunan fisik di lapangan.",
    srv1Title: "Desain Arsitektur Terpadu (Full Architectural Design)",
    srv1Desc: "Paket lengkap mencakup studi kelayakan tapak, denah tata ruang fungsional, 3D visualisasi photorealistic, gambar kerja Detail Engineering Design (DED), perhitungan struktur tahan gempa, dan berkas perizinan PBG/IMB.",
    srv2Title: "Desain Interior & Custom Built-In Furniture",
    srv2Desc: "Menyelaraskan arsitektur luar dengan kenyamanan ruang dalam. Perancangan skema pencahayaan (lighting design), pemilihan material finishing, sirkulasi perabot, dan gambar kerja custom cabinetry yang presisi.",
    srv3Title: "Renovasi & Transformasi Fasad Bangunan",
    srv3Desc: "Menghidupkan kembali bangunan eksisting tanpa harus merobohkan keseluruhan struktur. Optimalisasi tata cahaya, peremajaan fasad modern tropis, dan penataan ulang sekat ruang agar lebih lapang dan bernapas.",
    srv4Title: "Pengawasan Berkala & Manajemen Anggaran (RAB)",
    srv4Desc: "Memastikan apa yang digambar di atas kertas terwujud akurat di lapangan. Kami menyusun RAB rinci dan melakukan inspeksi konstruksi berkala untuk menjaga kualitas material dan ketepatan detail.",
    regionsTag: "Alur Kolaborasi Desain",
    regionsTitle: "4 Tahap Menyenangkan Menuju Bangunan Impian Anda",
    regionsSub: "Kami mengutamakan transparansi dan komunikasi cair di setiap fase. Anda akan selalu dilibatkan dalam pengambilan keputusan desain.",
    regTabSumatraTitle: "Tahap 1: Wawancara & Analisis Tapak",
    regTabSumatraSub: "Eksplorasi Gaya Hidup & Orientasi Lahan",
    regTabJavaTitle: "Tahap 2: Konsep Skematik & 3D Visual",
    regTabJavaSub: "Denah Ruang, Moodboard & Model 3D",
    regTabBaliTitle: "Tahap 3: Gambar Kerja (DED) & RAB",
    regTabBaliSub: "Detail Teknis, Struktur & Anggaran Rinci",
    regTabSulawesiTitle: "Tahap 4: Pelaksanaan & Pengawasan Lapangan",
    regTabSulawesiSub: "Seleksi Kontraktor & Supervisi Berkala",
    guideTag: "Wawasan Membangun",
    guideTitle: "Tips Penting Sebelum Anda Mulai Membangun",
    guideSub: "Panduan praktis dari arsitek untuk menghindari pembengkakan biaya, kesalahan zonasi ruang, dan masalah kenyamanan suhu bangunan.",
    guide1Title: "Manajemen Bujet & Alokasi RAB",
    guide1Sub: "Kunci Menghindari Proyek Mangkrak",
    guide1Point1Head: "Rasio 50-30-20:",
    guide1Point1Body: " Alokasikan ~50% untuk struktur & dinding, ~30% untuk finishing arsitektur & sanitair, dan 20% untuk MEP serta dana cadangan (contingency).",
    guide1Point2Head: "Pentingnya DED Lengkap:",
    guide1Point2Body: " Jangan memulai konstruksi tanpa Detail Engineering Design. Ketidakjelasan gambar kerja adalah penyebab utama biaya bengkak di tengah jalan.",
    guide1Point3Head: "Prioritas Material Kunci:",
    guide1Point3Body: " Investasikan lebih pada waterproofing, rangka atap, pipa, dan kusen kedap air. Material estetika dekoratif selalu bisa ditingkatkan kemudian.",
    guide2Title: "Orientasi Bangunan & Bukaan Udara",
    guide2Sub: "Rumah Sejuk Tanpa Ketergantungan AC",
    orientIdealDesc: "Bukaan jendela besar sebaiknya menghadap utara atau selatan untuk menangkap cahaya terang alami tanpa radiasi panas terik langsung.",
    orientWestDesc: "Sinar matahari sore membawa panas tinggi. Lindungi dengan dinding masif tanpa bukaan besar, taman vertikal, atau secondary skin kisi-kisi.",
    crossVentDesc: "Sediakan bukaan masuk dan bukaan keluar udara di dua sisi berbeda dengan elevasi bertingkat agar udara segar selalu bersirkulasi.",
    guide3Title: "Kamus Singkat Regulasi Lahan",
    guide3Sub: "Istilah Kunci Perizinan PBG & Zonasi",
    vocabKdb: "Koefisien Dasar Bangunan (Maksimal luas lantai dasar)",
    vocabKlb: "Koefisien Lantai Bangunan (Total seluruh lantai)",
    vocabGsb: "Garis Sempadan Bangunan (Batas terluar ke jalan)",
    vocabKdh: "Koefisien Daerah Hijau (Minimal area resapan air)",
    vocabPbg: "Persetujuan Bangunan Gedung (Pengganti IMB resmi)",
    vocabDed: "Detail Engineering Design (Gambar kerja acuan tukang)",
    vocabTip: "Tips: Seluruh klien studio kami mendapatkan pendampingan penuh untuk pengurusan kelengkapan berkas teknis PBG!",
    chatLauncherTitle: "Konsultasi AI Arsitek",
    chatLauncherSub: "Studio Radhi Dinata 24/7",
    chatStatusText: "Konsultan Desain & Analisis Spasial Arsitektur",
    chatGreeting: "Halo! Selamat datang di studio personal <strong>Ar. Radhi Dinata, IAI</strong>. Saya asisten AI arsitektur Anda. Apakah Anda sedang merencanakan membangun rumah, mencari ide tata ruang lahan, ingin menghitung estimasi bujet, atau butuh bantuan menganalisis sketsa denah? Silakan tanyakan apa saja atau unggah foto/gambar denah Anda!",
    chatInputPlaceholder: "Tanyakan seputar desain arsitektur, bujet, denah...",
    chipBudget: "Estimasi Bujet Bangun",
    chipVentilation: "Rumah Sejuk & Alami",
    chipFloorPlan: "Ide Tata Ruang Tanah",
    chipStyles: "Perbandingan Gaya",
    footerTagline: "Studio arsitektur personal berdedikasi menciptakan ruang hidup yang selaras dengan alam tropis, mengoptimalkan pencahayaan dan sirkulasi alami, serta mewujudkan visi hunian impian Anda secara berkesinambungan.",
    footNavTitle: "Navigasi Utama",
    footIconsTitle: "Karya Unggulan",
    footAITitle: "Konsultasi Desain & Kontak",
    footAIDesc: "Terbuka untuk konsultasi proyek residensial, villa, dan renovasi. Didukung asisten AI arsitek 24 jam untuk membedah ide awal kebutuhan Anda.",
    footAIBtn: "Mulai Percakapan AI Arsitek",
    footerCredit: "Dirancang dengan dedikasi untuk keindahan arsitektur tropis nusantara & kenyamanan hidup manusia.",
    btnAskAIAbout: "Konsultasikan Desain Serupa dengan AI",
    projectChallengeLabel: "Tantangan Klien & Konteks Tapak:",
    projectSolutionLabel: "Solusi Desain & Pendekatan Arsitektur:",
    projectSpecsLabel: "Spesifikasi Proyek:",
    projectMaterialsLabel: "Material Utama & Detail:",
    architectNoteLabel: "Catatan Arsitek (Ar. Radhi Dinata):",
    btnCopyDone: "✓ Berhasil Disalin ke Clipboard!",
    unitSqm: "m²",
    locationLabel: "Lokasi:",
    yearLabel: "Tahun Selesai:",
    siteAreaLabel: "Luas Tanah:",
    builtAreaLabel: "Luas Bangunan:"
  },
  en: {
    topBarBadge: "🏛️ IAI Member & ASEAN Registered Architect",
    topBarText: "Accepting Commissions for Modern Tropical Residences, Private Villas & Commercial Spaces 2026/2027",
    langLabel: "Language:",
    logoSub: "Architect & Spatial Design Studio",
    navHome: "Home",
    navAbout: "About Architect",
    navCalculator: "Design Calculator",
    navPortfolio: "Portfolio Works",
    navServices: "Services",
    navProcess: "Workflow",
    navAskAI: "Consult ArchiAI",
    heroPill: "Sustainable Tropical Architecture & Biophilic Living",
    heroTitlePart1: "Crafting Soulful Living Spaces &",
    heroTitleHighlight: "Sustainable Architecture",
    heroDesc: "I am Ar. Radhi Dinata, ST., IAI. Alongside our atelier team, we guide you through designing your bespoke architecture—from naturally ventilated modern homes and serene retreat villas to distinctive commercial spaces optimized for budget efficiency.",
    heroBtnExplore: "Shape Your Building Needs",
    heroBtnChat: "Consult ArchiAI (24/7)",
    statExp: "Years in Practice",
    statProjects: "Completed Works",
    statCustom: "Tailored to Budget",
    statAwards: "Architecture Awards",
    badgeAwardTitle: "IAI Design Excellence",
    badgeAwardSub: "Sustainable Tropical Living Category",
    badgeHeritageTitle: "Bioclimatic Passive Cooling",
    badgeHeritageSub: "Cross Ventilation & Daylight Shading",
    previewTag: "Flagship Feature Project",
    previewProjectBrief: "Two-storey tropical residence featuring an open inner courtyard, recycled teak solar screens, and exposed architectural concrete that maximizes natural airflow without excess cooling energy.",
    viewDetails: "View Details & Blueprints →",
    valuesTag: "Design Philosophy",
    valuesTitle: "Building is Never Just Erecting Walls—It is Weaving Life",
    valuesSub: "Every architectural commission starts by listening: your daily family rituals, the orientation of the land, sun paths, and prevailing breeze. Here are our studio's four enduring design pillars.",
    val1Title: "Climate-Responsive & Passive Energy",
    val1Desc: "Deep roof overhangs, massing positioned away from harsh western sun, and cross-ventilation corridors that keep interiors 3-4°C cooler naturally.",
    val2Title: "Honesty of Raw Materials",
    val2Desc: "Celebrating seasoned teak timber, volcanic andesite stone, breathable terracotta masonry, and off-form concrete that weathers gracefully over generations.",
    val3Title: "Indoor-Outdoor Biophilic Harmony",
    val3Desc: "Inner courtyards, pocket lightwells, and frameless sliding glass merge daily living with lush tropical greenery, ambient water, and skyward vistas.",
    val4Title: "Structural Precision & Budget Discipline",
    val4Desc: "Every architectural blueprint (DED) is engineered in close collaboration with structural consultants and paired with a transparent Bill of Quantities (BoQ) from day one.",
    helperTag: "Interactive Client Helper",
    helperTitle: "Design Your Building Needs",
    helperSub: "Use this interactive calculator to map out spatial requirements, floor areas, architectural style, and budget benchmarks before your official consultation.",
    step1Label: "1. Select Building Typology:",
    typeRes: "🏡 Private Residence",
    typeVilla: "🌴 Villa / Hospitality Resort",
    typeCafe: "☕ Cafe & Restaurant / Retail",
    typeOffice: "🏢 Creative Office & Studio",
    typeReno: "🔨 Facade & Spatial Renovation",
    step2Label: "2. Your Plot / Land Area:",
    landAreaLabel: "Plot Area:",
    step3Label: "3. Desired Architectural Style:",
    styleTrop: "🌿 Modern Tropical",
    styleJap: "🎋 Warm Japandi Minimalist",
    styleBrut: "🧱 Raw Brutalist Concrete",
    styleEco: "🍃 Biophilic Timber & Bamboo",
    styleCont: "🏛️ Elegant Contemporary",
    step4Label: "4. Desired Spatial Features:",
    chkCourtyard: "Inner Courtyard Garden",
    chkPool: "Swimming / Reflection Pool",
    chkRooftop: "Rooftop Garden / Sky Terrace",
    chkOffice: "Dedicated Workspace / Atelier",
    chkVoid: "Double-Height Ceiling Void",
    resultBadge: "💡 Tailored Design Recommendation",
    resGfaLabel: "Estimated Built Area (GFA)",
    resKdbLabel: "Footprint Ratio (KDB)",
    resBudgetLabel: "Estimated Build Budget",
    resTimeLabel: "Design Timeline",
    resStrategyTitle: "Recommended Architectural Strategy:",
    resCtaNote: "Want to discuss these figures or submit your land plot sketch for personalized architectural feedback?",
    btnConsultThisPlan: "Discuss This Plan with ArchiAI",
    btnCopySummary: "Copy Design Brief",
    recsTag: "Curated Architectural Portfolio",
    recsTitle: "Explore Selected Works & Spatial Concepts",
    recsSub: "A curated body of realized residences, boutique villas, and spatial transformations balancing aesthetic refinement, thermal comfort, and longevity.",
    dishesFound: "Architectural Works Exhibited",
    searchPlaceholder: "Search project name, style, location, or materials (e.g., Villa, Concrete, Bali, Teak, Courtyard)...",
    filterTasteLabel: "Building Typology:",
    catAll: "All Typologies",
    catResidential: "🏡 Private Residential",
    catVilla: "🌴 Villa & Resort",
    catCommercial: "☕ Cafe & Commercial",
    catRenovation: "🔨 Renovation & Interior",
    filterRegionLabel: "Style & Approach:",
    regAll: "All Styles",
    regTrop: "Modern Tropical",
    regJap: "Japandi & Minimalist",
    regBrut: "Raw Concrete & Brutalist",
    regEco: "Biophilic & Sustainable",
    emptyTitle: "No Projects Found",
    emptyDesc: "Try another search term or click below to reset the entire portfolio filter.",
    emptyBtnReset: "Reset All Filters",
    servicesTag: "Professional Services",
    servicesTitle: "How Our Atelier Delivers Your Building Needs",
    servicesSub: "Comprehensive oversight spanning initial creative concepts, regulatory PBG permit blueprints, to rigorous on-site construction supervision.",
    srv1Title: "Full Architectural Design (A to Z)",
    srv1Desc: "End-to-end package including site feasibility, functional space zoning, 4K photorealistic 3D visualization, Detail Engineering Design (DED), earthquake-resilient structural drawings, and PBG permit documentation.",
    srv2Title: "Interior Architecture & Custom Joinery",
    srv2Desc: "Seamless dialogue between outer envelope and internal sanctuaries. Architectural mood lighting design, material palettes, spatial flow, and detailed cabinetry workshop drawings.",
    srv3Title: "Building Renovation & Facade Transformation",
    srv3Desc: "Revitalizing existing structures without unnecessary structural demolition. Daylight optimization, modern tropical secondary skin shading, and open-plan spatial reorganization.",
    srv4Title: "Construction Supervision & BoQ Budget Control",
    srv4Desc: "Ensuring drawings materialize with craftsmanship on site. We draft transparent Bill of Quantities (BoQ) and conduct periodic technical inspections to safeguard material standards.",
    regionsTag: "Collaborative Design Workflow",
    regionsTitle: "4 Clear Phases Toward Your Dream Building",
    regionsSub: "We prioritize open dialogue and clarity at every juncture. You are an active co-creator in shaping your physical sanctuary.",
    regTabSumatraTitle: "Phase 1: Briefing & Site Investigation",
    regTabSumatraSub: "Lifestyle Profiling & Sun/Wind Analysis",
    regTabJavaTitle: "Phase 2: Schematic Concept & 3D Modeling",
    regTabJavaSub: "Space Planning, Moodboards & 3D Form",
    regTabBaliTitle: "Phase 3: Detail Engineering (DED) & Budget",
    regTabBaliSub: "Technical Blueprints & Itemized BoQ",
    regTabSulawesiTitle: "Phase 4: Construction & Quality Supervision",
    regTabSulawesiSub: "Contractor Tender & Regular Site Visits",
    guideTag: "Building Intelligence",
    guideTitle: "Essential Wisdom Before You Start Building",
    guideSub: "Practical advice from a seasoned architect to prevent budget overruns, spatial dysfunction, and uncomfortable thermal living.",
    guide1Title: "Budget Allocation & BoQ Mastery",
    guide1Sub: "Key to Completing on Time & Budget",
    guide1Point1Head: "50-30-20 Rule:",
    guide1Point1Body: " Dedicate ~50% to structure & core walls, ~30% to architectural finishes & sanitary fittings, and 20% to MEP utilities and contingency reserve.",
    guide1Point2Head: "Never Build Without DED:",
    guide1Point2Body: " Detailed Engineering Design eliminates vague assumptions. Ambiguity in contractor drawings is the #1 reason for budget blowouts.",
    guide1Point3Head: "Invest in Hidden Quality:",
    guide1Point3Body: " Prioritize waterproofing, roof engineering, plumbing, and precision window seals. Aesthetic accents can always be refined over time.",
    guide2Title: "Solar Orientation & Breeze Pathways",
    guide2Sub: "Cool Living Without Continuous Air Conditioning",
    orientIdealDesc: "Extensive glass glazing should face North or South to harvest bright ambient daylight without the searing heat of direct tropical radiation.",
    orientWestDesc: "Afternoon sun creates intense thermal load. Shield western elevations with solid thermal mass, vertical plantings, or louvered timber screens.",
    crossVentDesc: "Integrate paired inlets and outlets across varying heights to stimulate a continuous thermosiphon stack effect that purges trapped heat.",
    guide3Title: "Zoning & Municipal Permitting",
    guide3Sub: "Key Terms for Indonesian & International Building Codes",
    vocabKdb: "Site Coverage Ratio (Maximum ground floor footprint)",
    vocabKlb: "Floor Area Ratio (Total permissible build area)",
    vocabGsb: "Building Setback Line (Distance required from street boundary)",
    vocabKdh: "Green Open Space Ratio (Permeable ground catchment)",
    vocabPbg: "Building Approval Permit (Official construction license in Indonesia)",
    vocabDed: "Detail Engineering Design (Contractor-grade technical blueprints)",
    vocabTip: "Tip: Every client of our studio receives end-to-end guidance for local zoning and PBG technical submissions!",
    chatLauncherTitle: "Consult ArchiAI",
    chatLauncherSub: "Studio Radhi Dinata 24/7",
    chatStatusText: "Architectural Design Consultant & Spatial Analyst",
    chatGreeting: "Hello! Welcome to the personal studio of <strong>Ar. Radhi Dinata, IAI</strong>. I am your architectural AI assistant. Are you planning a new residence, analyzing a land plot, evaluating construction budgets, or looking for blueprint feedback? Feel free to ask anything or upload site photos and sketches!",
    chatInputPlaceholder: "Ask about architectural design, budgeting, space planning...",
    chipBudget: "Construction Budget Range",
    chipVentilation: "Naturally Cool Living",
    chipFloorPlan: "Plot Space Layout Ideas",
    chipStyles: "Style Comparisons",
    footerTagline: "Personal architectural studio committed to crafting living sanctuaries in harmony with tropical nature, optimizing natural light, and realizing your bespoke vision for generations to come.",
    footNavTitle: "Navigation",
    footIconsTitle: "Selected Works",
    footAITitle: "Design Inquiries & Studio",
    footAIDesc: "Available for residential commissions, boutique villas, and adaptive renovations. Supported by 24/7 AI architectural guidance for initial feasibility.",
    footAIBtn: "Launch ArchiAI Consultation",
    footerCredit: "Crafted with dedication to Indonesian modern architecture and authentic human-centered spaces.",
    btnAskAIAbout: "Consult Similar Design with AI",
    projectChallengeLabel: "Client Challenge & Site Context:",
    projectSolutionLabel: "Architectural Solution & Strategy:",
    projectSpecsLabel: "Project Specifications:",
    projectMaterialsLabel: "Key Materials & Detailing:",
    architectNoteLabel: "Architect's Perspective (Ar. Radhi Dinata):",
    btnCopyDone: "✓ Brief Copied to Clipboard!",
    unitSqm: "sqm",
    locationLabel: "Location:",
    yearLabel: "Completion Year:",
    siteAreaLabel: "Plot Area:",
    builtAreaLabel: "Gross Built Area:"
  }
};

let currentLang = localStorage.getItem('radhi_arch_lang') || 'id';

// ============================================================================
// 2. Curated Architectural Projects Dataset (12 Masterworks)
// ============================================================================
const projectData = [
  {
    id: "omah-semilir",
    nameId: "The Omah Semilir Courtyard Residence",
    nameEn: "The Omah Semilir Courtyard Residence",
    typology: "residential",
    style: "modern-tropical",
    location: "Sentul, Jawa Barat",
    year: "2024",
    siteArea: 320,
    builtArea: 280,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Modern Tropical", "Inner Courtyard", "Passive Cooling", "Wood Slats"],
    descId: "Hunian keluarga tropis kontemporer yang berpusat pada inner courtyard hijau dengan pohon kamboja tua dan kolam refleksi, menciptakan iklim mikro yang menyejukkan seluruh ruangan.",
    descEn: "Contemporary tropical family residence centered around a verdant inner courtyard with an ancient frangipani and reflective pool, generating a cooling microclimate for all interior wings.",
    challengeId: "Lahan berkontur menurun di kawasan perbukitan Sentul dengan paparan matahari barat yang terik dan kebutuhan privasi tinggi dari jalan perumahan.",
    challengeEn: "Sloping hill terrain in Sentul with intense western solar radiation and the client's desire for utmost visual privacy from the street.",
    solutionId: "Fasad depan menggunakan secondary skin kisi-kisi kayu jati daur ulang bermotor, sementara massa bangunan dipecah menjadi dua sayap yang mengapit void taman tengah untuk sirkulasi angin silang 24 jam.",
    solutionEn: "Louvered reclaimed teak secondary screen along the front elevation, paired with a fragmented two-pavilion massing flanking an open courtyard for continuous diurnal air movement.",
    materialsId: ["Beton Ekspos Cetak Papan", "Kayu Jati Daur Ulang", "Batu Andesit Bakar", "Kaca Low-E Double Glazed", "Baja Hitam Finishing Matte"],
    materialsEn: ["Board-marked Off-form Concrete", "Reclaimed Solid Teak", "Flamed Andesite Volcanic Stone", "Low-E Double Glazed Glass", "Matte Black Structural Steel"],
    architectNoteId: "Rumah ini membuktikan bahwa tanpa menyalakan pendingin ruangan di siang hari sekalipun, suhu interior tetap stabil di 25-26°C berkat efek cerobong termal dan keteduhan pohon pelindung.",
    architectNoteEn: "This residence exemplifies how passive thermal chimney effects and canopy shade stabilize interior temperatures at 25-26°C without daylight mechanical air conditioning."
  },
  {
    id: "bale-wening",
    nameId: "Bale Wening Sanctuary Ubud",
    nameEn: "Bale Wening Sanctuary Ubud",
    typology: "villa",
    style: "japandi",
    location: "Ubud, Bali",
    year: "2023",
    siteArea: 650,
    builtArea: 340,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    tags: ["Japandi Minimalist", "Boutique Villa", "Infinity Edge", "Travertine"],
    descId: "Villa peristirahatan privat berkonsep Japandi tropis yang memadukan ketenangan wabi-sabi Jepang dengan kelapangan arsitektur wantilan Bali.",
    descEn: "Private boutique retreat villa blending Japanese wabi-sabi serenity with the spaciousness of traditional Balinese wantilan pavilion architecture.",
    challengeId: "Menghadirkan kenyamanan modern bintang lima di atas lahan lereng sungai yang curam tanpa merusak formasi batu alam dan vegetasi bambu eksisting.",
    challengeEn: "Creating five-star contemporary living on a steep riverbank slope while preserving indigenous rock formations and ancient bamboo clusters.",
    solutionId: "Struktur kantilever baja ringan beralas pondasi titik (micropile), memungkinkan lantai living room melayang dramatis di atas lembah dengan dinding geser kaca tanpa kusen sudut.",
    solutionEn: "Cantilevered steel frame seated on discrete micropiles, allowing the pavilion living floor to float over the ravine with frameless corner-opening sliding glass partitions.",
    materialsId: ["Batu Travertine Alami", "Kayu Bengkirai Abu-Abu", "Plester Semen Halus Skim Coat", "Batu Candi Hitam", "Kain Linen Alami"],
    materialsEn: ["Natural Travertine Slabs", "Weathered Bengkirai Hardwood", "Honed Micro-cement Plaster", "Volcanic Candi Stone", "Organic Undyed Linen"],
    architectNoteId: "Kemewahan sejati di villa ini terletak pada keheningan: suara gemericik air sungai di bawah dan cahaya pagi yang menyelinap menembus kisi-kisi kayu.",
    architectNoteEn: "True luxury here is defined by stillness: the whispering river beneath and dawn light filtering delicately through rhythmic timber louvers."
  },
  {
    id: "kasama-roastery",
    nameId: "Kasama Artisan Roastery & Courtyard",
    nameEn: "Kasama Artisan Roastery & Courtyard",
    typology: "commercial",
    style: "modern-tropical",
    location: "Bandung, Jawa Barat",
    year: "2024",
    siteArea: 480,
    builtArea: 310,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    tags: ["Commercial Cafe", "Adaptive Reuse", "Rooftop Terrace", "Exposed Brick"],
    descId: "Revitalisasi bangunan gudang kolonial 1950-an menjadi kafe roastery kopi spesialti dengan ampiteater komunal dan atrium kaca terbuka.",
    descEn: "Adaptive revitalization of a 1950s colonial warehouse into a specialty coffee roastery featuring an urban stepped amphitheater and skylit atrium.",
    challengeId: "Struktur eksisting gelap dan memiliki sirkulasi udara buruk dengan plafon rendah yang pengap bila dipadati pengunjung.",
    challengeEn: "Existing masonry structure was dark and poorly ventilated with low ceilings prone to overheating during peak customer occupancy.",
    solutionId: "Membuka skylight atap sepanjang 12 meter dengan insulasi peredam panas, menggabungkan dinding bata ekspos terakota lokal Bandung dan kisi ventilasi industrial.",
    solutionEn: "Carving out a 12-meter linear roof skylight with thermal film insulation, juxtaposed with porous local terracotta bricks and industrial ventilation louvers.",
    materialsId: ["Bata Terakota Press Lokal", "Rangka Baja I-Beam Ekspos", "Terrazzo Cor di Tempat", "Kaca Tempered Laminate", "Tembaga Antik"],
    materialsEn: ["Locally Pressed Terracotta Brick", "Exposed Structural I-Beams", "Cast-in-situ Terrazzo Flooring", "Tempered Laminated Glass", "Patinated Copper Accents"],
    architectNoteId: "Kafe ini langsung menjadi landmark kuliner di Bandung karena tata ruangnya yang ramah pejalan kaki dan sirkulasi angin sejuk khas kota kembang.",
    architectNoteEn: "The space immediately emerged as a community landmark, celebrated for its pedestrian porosity and breezy mountain town ambiance."
  },
  {
    id: "terra-sancta",
    nameId: "Terra Sancta Cliff Pavilion",
    nameEn: "Terra Sancta Cliff Pavilion",
    typology: "villa",
    style: "brutalist",
    location: "Uluwatu, Bali",
    year: "2023",
    siteArea: 900,
    builtArea: 420,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    tags: ["Brutalist Concrete", "Cliff Villa", "Ocean View", "Minimalist"],
    descId: "Karya arsitektur brutalis monumental di tepi tebing kapur Uluwatu, memadukan kekokohan dinding beton abu-abu dengan kelembutan panorama laut Hindia.",
    descEn: "Monumental brutalist coastal residence poised upon Uluwatu's limestone cliffs, contrasting raw monolith concrete walls with sweeping Indian Ocean panoramas.",
    challengeId: "Kondisi angin laut berkadar garam tinggi yang korosif serta tantangan struktural tebing kapur bersudut tajam.",
    challengeEn: "High-salinity marine winds causing rapid corrosion, coupled with intricate seismic engineering on razor-sharp limestone cliff edges.",
    solutionId: "Penggunaan beton masif impermeabel dengan coating nano-silika tahan garam, orientasi bukaan terarah yang memecah hembusan angin kencang.",
    solutionEn: "Self-consolidating waterproof concrete infused with anti-salt silica nano-coatings, paired with aerodynamic aerodynamic massing to disperse sea gusts.",
    materialsId: ["Beton Monolitik Exposed", "Batu Kapur Uluwatu Lokal", "Kayu Ulin Kalimantan", "Stainless Steel Grade 316", "Kaca Insulated 12mm"],
    materialsEn: ["Monolithic Architectural Concrete", "Native Uluwatu Limestone", "Ironwood (Ulin)", "Marine-grade 316 Stainless Steel", "12mm Insulated Double Glaze"],
    architectNoteId: "Bagi kami, beton bukanlah material dingin; saat diterpa sinar senja Uluwatu, teksturnya berubah menjadi keemasan hangat yang sangat puitis.",
    architectNoteEn: "To us, raw concrete is not cold; bathed in Uluwatu sunset light, its textured surfaces radiate warm golden hues of quiet poetry."
  },
  {
    id: "selaras-angin",
    nameId: "Rumah Selaras Angin (Urban Split-Level)",
    nameEn: "Rumah Selaras Angin (Urban Split-Level)",
    typology: "residential",
    style: "modern-tropical",
    location: "Surabaya, Jawa Timur",
    year: "2024",
    siteArea: 160,
    builtArea: 210,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    tags: ["Compact Lot", "Split Level", "Cross Vent", "Family Home"],
    descId: "Rumah perkotaan split-level di kavling sempit 8x20 meter di kota Surabaya yang panas, dirancang untuk bernapas bebas tanpa terasa sumpek.",
    descEn: "Urban split-level residence on a compact 8x20m plot in tropical Surabaya, designed to breathe effortlessly despite dense neighborhood surroundings.",
    challengeId: "Kavling diapit dinding tetangga yang tinggi di sisi kanan-kiri dan suhu siang hari Surabaya yang terkenal terik.",
    challengeEn: "Narrow plot flanked by towering neighbor party walls on both sides, with scorching daytime temperatures typical of Surabaya.",
    solutionId: "Skema split-level 5 lantai mezzanine dengan void vertikal di tengah rumah yang dilengkapi roster tanah liat berlubang di fasad atas.",
    solutionEn: "Five-level staggered mezzanine layout centered around a vertical stack void, paired with decorative terracotta breeze blocks along the top elevation.",
    materialsId: ["Roster Keramik Terakota", "Plester Dinding Acian Alami", "Kayu Kamper Samarinda", "Lantai Granit Polished", "Kusen Aluminium YKK"],
    materialsEn: ["Custom Terracotta Breeze Blocks", "Natural Lime Plaster Finish", "Kiln-dried Kamper Hardwood", "Honed Porcelain Slabs", "Architectural Grade Aluminium"],
    architectNoteId: "Rumah kompak tidak boleh terasa sempit. Dengan split level, pandangan mata selalu terhubung antar lantai sehingga keluarga tetap merasa dekat.",
    architectNoteEn: "Compact lots must never feel suffocating. Split-level zoning keeps sightlines fluid, nurturing family togetherness across levels."
  },
  {
    id: "monolith-studio",
    nameId: "The Monolith Atelier & Gallery",
    nameEn: "The Monolith Atelier & Gallery",
    typology: "commercial",
    style: "brutalist",
    location: "Tangerang Selatan, Banten",
    year: "2023",
    siteArea: 350,
    builtArea: 290,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tags: ["Creative Studio", "Brutalist", "Gallery", "Skylight Gallery"],
    descId: "Studio desain dan galeri seni arsitektur berwujud monolit skulptural dengan pencahayaan dramatis dari bukaan atap miring.",
    descEn: "Sculptural monolithic design atelier and art gallery harnessing dramatic indirect daylighting from an asymmetrical saw-tooth roof.",
    challengeId: "Kebutuhan ruang kerja hening bebas bising dari jalan raya utama dengan tetap menampilkan karakter visual yang kuat.",
    challengeEn: "Requirement for an acoustic sanctuary isolated from busy urban traffic, whilst asserting an authoritative architectural statement.",
    solutionId: "Fasad depan dibuat masif tanpa jendela konvensional, mengalihkan seluruh suplai cahaya alami melalui rooftop light-well dan taman belakang tertutup.",
    solutionEn: "Solid blind facade facing the street, funneling 100% of natural daylight through a central rooftop light-well and private rear zen garden.",
    materialsId: ["Beton Cor Tekstur Kayu", "Pelat Baja Cor-Ten Karat", "Kaca Double Tempered", "Semen Epoksi Self-Leveling", "Kayu Oak Terang"],
    materialsEn: ["Board-formed Cast Concrete", "Weathering Cor-Ten Steel", "Double Tempered Acoustic Glass", "Self-leveling Epoxy Screed", "Light European White Oak"],
    architectNoteId: "Cahaya adalah material utama di proyek ini. Dari fajar hingga petang, bayangan garis matahari bergerak anggun di atas bidang dinding beton.",
    architectNoteEn: "Daylight is the primary building material here. From sunrise to dusk, shifting sun lines choreograph poetry across concrete surfaces."
  },
  {
    id: "kiara-renovation",
    nameId: "Kiara Townhouse Facade Transformation",
    nameEn: "Kiara Townhouse Facade Transformation",
    typology: "renovation",
    style: "modern-tropical",
    location: "Jakarta Selatan",
    year: "2024",
    siteArea: 180,
    builtArea: 220,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Renovation", "Modern Makeover", "Steel Pergola", "Energy Efficient"],
    descId: "Transformasi dramatis rumah tinggal 1990-an yang gelap dan lembap menjadi townhouse modern tropis yang terang, segar, dan hemat listrik.",
    descEn: "Dramatic overhaul of a dark 1990s suburban townhouse into a luminous, breezy modern tropical residence optimized for energy savings.",
    challengeId: "Struktur kolom dan balok eksisting tidak boleh dibongkar demi menghemat anggaran pemilik rumah hingga 40%.",
    challengeEn: "Strict constraint to preserve all existing load-bearing columns and beams, slashing client construction expenditure by 40%.",
    solutionId: "Memasang secondary skin fasad aluminium bermotif kayu ringan dan membongkar atap belakang untuk menciptakan void tangga ber-skylight.",
    solutionEn: "Attaching an ultra-light wood-grain aluminum screen to existing structural points and puncturing the rear roof for a sun-drenched stair void.",
    materialsId: ["Wood-plastic Composite (WPC)", "Aluminium Composite Panel", "Kaca Reflektif Panas", "Batu Paras Jogja", "Baja Hollow Galvanis"],
    materialsEn: ["Wood-plastic Composite (WPC)", "Powder-coated Aluminium Panels", "Solar Control Glass", "Paras Jogja Limestone", "Galvanized Steel Subframe"],
    architectNoteId: "Renovasi yang cerdas tidak membuang semua yang lama, melainkan menemukan potensi tersembunyi dari struktur yang sudah ada.",
    architectNoteEn: "Intelligent architectural renovation does not discard history; it unlocks the latent spatial magic inside existing structural bones."
  },
  {
    id: "padma-valley",
    nameId: "Padma Valley Bamboo & Teak Resort",
    nameEn: "Padma Valley Bamboo & Teak Resort",
    typology: "villa",
    style: "sustainable",
    location: "Lombok Barat, NTB",
    year: "2023",
    siteArea: 1200,
    builtArea: 480,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sustainable Resort", "Bamboo Architecture", "Eco Living", "Biophilic"],
    descId: "Resort ekologis berbasis bambu petung lengkung parametrik dan kayu jati legal, dirancang menyatu harmonis dengan perkebunan kelapa di lereng bukit.",
    descEn: "Eco-hospitality pavilion resort constructed from curved parametric Petung bamboo and certified teak, nestled harmoniously within a hillside palm grove.",
    challengeId: "Tapak terpencil tanpa akses kendaraan berat dan komitmen zero carbon footprint dalam proses konstruksi.",
    challengeEn: "Remote site with zero heavy machinery access, bound by strict commitments to zero carbon emissions during construction.",
    solutionId: "Sistem prefabrikasi bambu yang diawetkan alami dengan garam boraks ramah lingkungan dan atap rumbia gajah berventilasi aerodinamis.",
    solutionEn: "Prefabricated bamboo joinery preserved with eco-friendly borax salts, crowned by aerodynamic woven thatch roofs ensuring natural buoyancy.",
    materialsId: ["Bambu Petung & Tali Terawat", "Kayu Jati Sertifikasi FSC", "Batu Kali Alami", "Atap Alang-Alang Rumbia", "Plester Tanah Liat"],
    materialsEn: ["Treated Giant Petung Bamboo", "FSC Certified Plantation Teak", "Local River Boulders", "Traditional Thatch Roof", "Natural Clay & Lime Plaster"],
    architectNoteId: "Bangunan ini dapat bernapas sepenuhnya dengan alam. Saat masa pakainya berakhir kelak, materialnya akan kembali ke tanah tanpa mencemari bumi.",
    architectNoteEn: "This building breathes with the earth. When its lifecycle concludes decades from now, its organic materials return gently to soil."
  },
  {
    id: "taman-sela",
    nameId: "Rumah Taman Sela (Biophilic Narrow Home)",
    nameEn: "Rumah Taman Sela (Biophilic Narrow Home)",
    typology: "residential",
    style: "sustainable",
    location: "Yogyakarta",
    year: "2024",
    siteArea: 140,
    builtArea: 175,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    tags: ["Biophilic Living", "Narrow Lot", "Pocket Garden", "Clay Tiles"],
    descId: "Hunian hijau mikro di Yogyakarta yang memasukkan 3 kantong taman saku di antara ruang tidur, ruang keluarga, dan dapur.",
    descEn: "Micro-biophilic urban dwelling in Yogyakarta integrating three distinct pocket gardens between bedrooms, living lounge, and open kitchen.",
    challengeId: "Lebar tanah hanya 6 meter dengan kebutuhan 3 kamar tidur, 1 ruang kerja, dan ruang komunal yang lega.",
    challengeEn: "Plot width of just 6 meters requiring three bedrooms, dedicated home studio, and expansive family communal living.",
    solutionId: "Menggunakan denah berbentuk gerigi (staggered footprint) sehingga setiap ruangan memiliki setidaknya dua sisi bukaan yang menghadap taman saku.",
    solutionEn: "Deploying a staggered serrated floor plan so every single habitable room commands two wall exposures opening directly to green pocket gardens.",
    materialsId: ["Bata Merah Expose Bakar Kayu", "Kayu Merbau Anti Rayap", "Lantai Semen Poles Teraso", "Genteng Keramik M-Class", "Rangka Baja Ringan"],
    materialsEn: ["Kiln-fired Heritage Brick", "Termite-resistant Merbau Wood", "Polished Terrazzo Cement", "Glazed Ceramic Clay Tiles", "Structural Lightweight Steel"],
    architectNoteId: "Menatap dedaunan hijau saat bangun pagi dan mendengar desir angin di sela daun adalah hak setiap penghuni rumah, tak peduli berapa ukuran lahannya.",
    architectNoteEn: "Greeting green leaves at dawn and sensing the morning breeze is every dweller's birthright, regardless of how modest the plot may be."
  },
  {
    id: "lumina-house",
    nameId: "Lumina Glass & Steel Pavilion",
    nameEn: "Lumina Glass & Steel Pavilion",
    typology: "residential",
    style: "contemporary",
    location: "Semarang, Jawa Tengah",
    year: "2023",
    siteArea: 450,
    builtArea: 380,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Contemporary", "Steel Pavilion", "Swimming Pool", "Cantilever"],
    descId: "Rumah kontemporer elegan di perbukitan Candi Semarang dengan kantilever kaca melayang menghadap panorama gemerlap lampu kota.",
    descEn: "Sophisticated contemporary hillside residence in Semarang featuring a dramatic cantilevered glass pavilion overlooking shimmering city lights.",
    challengeId: "Kontur tanah miring 20 derajat yang rawan pergerakan tanah serta angin kencang dari lembah.",
    challengeEn: "Challenging 20-degree hillside slope prone to soil movement and intense seasonal valley updrafts.",
    solutionId: "Pondasi tiang pancang dalam (bored pile) dengan dinding penahan tanah bertingkat dan struktur baja wide-flange yang lentur dan kokoh.",
    solutionEn: "Deep bored-pile foundations tied to terraced retaining crib walls, supporting a resilient wide-flange structural steel skeleton.",
    materialsId: ["Baja Wide Flange (WF)", "Kaca Smart Tint Glass", "Marmer Travertine Perak", "Panel Kayu Solid Teak", "Aluminium Architectural"],
    materialsEn: ["Wide-flange Structural Steel", "Smart Tint Solar Glazing", "Silver Travertine Marble", "Solid Teak Paneling", "Architectural Grade Anodized Aluminium"],
    architectNoteId: "Struktur kantilever di sini bukan sekadar pamer teknik, melainkan meminimalisir pembongkaran tanah alami di bawahnya.",
    architectNoteEn: "The cantilever here is not a mere structural spectacle; it preserves the pristine natural slope ecology undisturbed beneath."
  },
  {
    id: "ruang-teduh",
    nameId: "Ruang Teduh Co-Working & Garden Hub",
    nameEn: "Ruang Teduh Co-Working & Garden Hub",
    typology: "commercial",
    style: "sustainable",
    location: "BSD City, Tangerang",
    year: "2024",
    siteArea: 750,
    builtArea: 520,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Co-Working", "Biophilic Hub", "Green Building", "Social Spaces"],
    descId: "Pusat kerja kreatif bersama dan ruang sosial yang didesain dengan konsep biophilic urban oasis, mengurangi tingkat stres para profesional digital.",
    descEn: "Creative co-working sanctuary and social hub conceived as an urban biophilic oasis, proven to reduce cognitive fatigue for digital creators.",
    challengeId: "Menciptakan ruang kerja fleksibel berdensitas tinggi namun tetap terasa sejuk, intim, dan memicu produktivitas.",
    challengeEn: "Creating high-density flexible workstations that remain acoustically soothing, thermally comfortable, and cognitively inspiring.",
    solutionId: "Sistem zoning modular dengan partisi tanaman hidup penyerap polutan (sansevieria & monstera) serta ventilasi atap bertenaga surya.",
    solutionEn: "Modular acoustic zoning with living plant partitions that purify air, paired with solar-powered continuous roof air extractors.",
    materialsId: ["Baja Ringan Daur Ulang", "Dinding Akustik Panel Sabut Kelapa", "Lantai Kayu Engineered", "Kaca Double Glazing", "Pot Beton Terakota"],
    materialsEn: ["Recycled Structural Steel", "Coconut Coir Acoustic Panels", "Engineered Wood Flooring", "Double Insulated Acoustic Glass", "Terracotta Planters"],
    architectNoteId: "Ruang kerja masa depan bukanlah deretan bilik kubikal tertutup, melainkan ekosistem terbuka tempat ide mengalir sebebas oksigen segar.",
    architectNoteEn: "The workplace of tomorrow is not an array of isolated cubicles, but an open ecosystem where ideas flow as freely as fresh oxygen."
  },
  {
    id: "samudra-biru",
    nameId: "Villa Samudra Biru Cliff Haven",
    nameEn: "Villa Samudra Biru Cliff Haven",
    typology: "villa",
    style: "contemporary",
    location: "Labuan Bajo, NTT",
    year: "2024",
    siteArea: 850,
    builtArea: 390,
    image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Ocean Front", "Luxury Villa", "Infinity Pool", "Sunset View"],
    descId: "Villa peristirahatan tropis tepi laut Labuan Bajo dengan teras tanpa batas menghadap kepulauan Komodo dan matahari terbenam spektakuler.",
    descEn: "Seaside tropical haven in Labuan Bajo featuring seamless infinity terraces gazing toward the Komodo archipelago and breathtaking sunsets.",
    challengeId: "Iklim sabana Labuan Bajo yang kering dan panas pada musim kemarau serta keterbatasan air tawar lokal.",
    challengeEn: "Dry savannah climate with intense dry season heat, combined with municipal freshwater scarcity.",
    solutionId: "Pemanenan air hujan terintegrasi (rainwater harvesting cistern 40.000 liter), pengolahan limbah air abu-abu untuk taman, dan atap teritisan dalam 3 meter.",
    solutionEn: "Integrated 40,000L rainwater harvesting cistern with greywater filtration for irrigation, shielded by 3-meter deep shading eaves.",
    materialsId: ["Batu Alam Flores Lokal", "Kayu Ulin Tahan Cuaca", "Beton Tekstur Pasir Laut", "Kaca Polarized Solar", "Kuningan Antik"],
    materialsEn: ["Indigenous Flores Slate", "Weather-hardened Ironwood", "Marine Sand-textured Concrete", "Polarized Solar Glass", "Brushed Antique Brass"],
    architectNoteId: "Arsitektur di sini dengan rendah hati menunduk pada kemegahan laut Labuan Bajo; ia hadir bukan untuk mendominasi, melainkan membingkai keagungan alam.",
    architectNoteEn: "Architecture here bows humbly to the sheer majesty of the Flores Sea; it does not aim to dominate, but to frame nature's masterpiece."
  }
];

// ============================================================================
// 3. 4-Phase Design Workflow Content
// ============================================================================
const workflowPhases = {
  phase1: {
    titleId: "Tahap 1: Wawancara Mendalam & Analisis Tapak",
    titleEn: "Phase 1: In-depth Briefing & Site Investigation",
    stepBadgeId: "Langkah Awal (Minggu 1 - 2)",
    stepBadgeEn: "Step 01 (Week 1 - 2)",
    descId: "Kami memulai dengan mendengarkan cerita dan visi Anda: bagaimana ritme keseharian keluarga, kebutuhan ruang privat vs publik, serta alokasi anggaran yang nyaman. Dilanjutkan dengan survei lapangan untuk membaca kontur tanah, arah matahari (sun path), arah angin dominan, dan regulasi zonasi setempat (KDB, GSB, KLB).",
    descEn: "We begin by listening intently to your story and vision: daily family rituals, desired public vs. private zones, and target budget parameters. This is accompanied by an on-site investigation mapping terrain contours, solar radiation angles, prevailing breeze, and local municipal zoning mandates (KDB, GSB).",
    deliverablesId: [
      "Notulensi Program Ruang & Kebutuhan Klien",
      "Diagram Analisis Matahari, Angin & Kebisingan Tapak",
      "Laporan Batasan Regulasi Lahan & Garis Sempadan (GSB)",
      "Peta Moodboard Awal & Eksplorasi Material"
    ],
    deliverablesEn: [
      "Spatial Programming & Client Brief Document",
      "Solar Path, Prevailing Wind & Acoustic Site Diagram",
      "Municipal Setback (GSB) & Site Coverage (KDB) Feasibility Report",
      "Curated Initial Moodboards & Material Direction"
    ]
  },
  phase2: {
    titleId: "Tahap 2: Konsep Skematik & 3D Realistic Modeling",
    titleEn: "Phase 2: Schematic Concept & 3D Realistic Modeling",
    stepBadgeId: "Eksplorasi Bentuk (Minggu 3 - 5)",
    stepBadgeEn: "Form Exploration (Week 3 - 5)",
    descId: "Ide-ide awal diterjemahkan menjadi gambar skematik denah tata ruang yang fungsional dan model 3D visual realistis. Anda dapat melihat proporsi massa bangunan, bayangan sinar matahari di berbagai jam, sirkulasi udara antar ruangan, hingga interaksi material sebelum pondasi digali.",
    descEn: "Initial spatial ideas materialize into functional floor plan layouts and photorealistic 3D virtual models. You will experience the volumetric massing, daylight shadows at varying times of day, airflow pathways, and tactile material interactions before a single trench is dug.",
    deliverablesId: [
      "Gambar Denah Tata Ruang Seluruh Lantai (Skala 1:100)",
      "Potongan & Tampak Arsitektur Awal",
      "Visualisasi Render 3D Eksterior & Interior 4K Realistis",
      "Revisi & Penyelarasan Desain Bersama Klien"
    ],
    deliverablesEn: [
      "Comprehensive Floor Plans Across All Levels (1:100 Scale)",
      "Schematic Elevations & Cross-Sections",
      "4K Photorealistic Exterior & Interior 3D Visual Renderings",
      "Collaborative Client Review & Refinement Sessions"
    ]
  },
  phase3: {
    titleId: "Tahap 3: Gambar Kerja (DED), Struktur & RAB Detail",
    titleEn: "Phase 3: Detail Engineering Design (DED) & Itemized BoQ",
    stepBadgeId: "Dokumen Teknis (Minggu 6 - 8)",
    stepBadgeEn: "Technical Dossier (Week 6 - 8)",
    descId: "Tahap krusial di mana desain arsitektur diterjemahkan menjadi cetak biru teknis lengkap (DED) bersama insinyur struktur dan mekanikal-elektrikal (MEP). Kami juga menyusun Rencana Anggaran Biaya (RAB) rinci per item pekerjaan sehingga Anda tahu persis ke mana setiap rupiah dialokasikan.",
    descEn: "The critical juncture where aesthetic designs transform into contractor-grade technical blueprints (DED) alongside structural and MEP engineers. We simultaneously draft an itemized Bill of Quantities (BoQ) ensuring complete clarity on every cost line item.",
    deliverablesId: [
      "Buku Gambar Kerja DED Lengkap (Arsitektur, Struktur, MEP)",
      "Perhitungan Struktur Tahan Gempa SNI & Tanah Pondasi",
      "Rencana Anggaran Biaya (RAB / BoQ) Rinci Transparan",
      "Berkas Teknis untuk Pengajuan Perizinan PBG/IMB"
    ],
    deliverablesEn: [
      "Complete Master DED Dossier (Architectural, Structural, MEP)",
      "Earthquake-Resilient Structural & Foundation Calculations",
      "Transparent Itemized Bill of Quantities (BoQ)",
      "Official Technical Dossier for Municipal PBG Permit Approval"
    ]
  },
  phase4: {
    titleId: "Tahap 4: Pendampingan Tender & Pengawasan Lapangan",
    titleEn: "Phase 4: Contractor Bidding & Periodic Site Supervision",
    stepBadgeId: "Konstruksi Nyata (Fase Pembangunan)",
    stepBadgeEn: "Construction Phase (On Site)",
    descId: "Kami mendampingi Anda memilih kontraktor yang kompeten dan bertanggung jawab melalui proses tender yang adil. Selama pembangunan fisik berjalan, tim studio melakukan kunjungan berkala ke proyek untuk memeriksa presisi ukuran, kualitas material beton dan kayu, serta kesesuaian eksekusi dengan gambar kerja.",
    descEn: "We assist you in evaluating and vetting reputable contractors through an objective bidding process. Once ground is broken, our atelier conducts regular quality inspections on site to verify dimensional tolerances, concrete curing, joinery standards, and faithful execution of blueprints.",
    deliverablesId: [
      "Pendampingan Seleksi & Penilaian Penawaran Kontraktor",
      "Inspeksi Berkala Kualitas Fisik di Lapangan",
      "Laporan Kemajuan Proyek & Koordinasi Masalah Lapangan",
      "Uji Kelayakan Akhir (Defect List) Sebelum Serah Terima Kunci"
    ],
    deliverablesEn: [
      "Contractor Bidding Review & Tender Appraisal",
      "Periodic On-site Technical & Quality Inspections",
      "Progress Reports & Proactive Site Problem Solving",
      "Comprehensive Punch List & Final Handover Audit"
    ]
  }
};

// ============================================================================
// 4. Interactive State Management
// ============================================================================
let activeCategoryFilter = "all";
let activeRegionFilter = "all";
let searchQuery = "";
let currentRegionTab = "phase1";
let chatSessionId = localStorage.getItem("radhi_arch_chat_sessionId") || null;
let selectedChatImageFile = null;

// Design Helper State
const designHelperState = {
  typology: "residential",
  landArea: 180,
  style: "modern-tropical",
  features: ["courtyard", "homeoffice", "void"]
};

// Hero Showcase Slides Data
const heroSlides = [
  {
    id: "omah-semilir",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badgeTopIcon: "🏆",
    badgeTopTitleId: "IAI Design Excellence",
    badgeTopTitleEn: "IAI Design Excellence",
    badgeTopSubId: "Kategori Hunian Tropis Berkelanjutan",
    badgeTopSubEn: "Sustainable Tropical Living Category",
    badgeBottomIcon: "🍃",
    badgeBottomTitleId: "Bioclimatic Passive Cooling",
    badgeBottomTitleEn: "Bioclimatic Passive Cooling",
    badgeBottomSubId: "Ventilasi Silang & Bukaan Cahaya Terukur",
    badgeBottomSubEn: "Cross Ventilation & Daylight Shading",
    spiceId: "🏡 Modern Tropical Courtyard",
    spiceEn: "🏡 Modern Tropical Courtyard",
    titleId: "The Omah Semilir Residence",
    titleEn: "The Omah Semilir Residence",
    descId: "Hunian tropis 2 lantai dengan inner courtyard terbuka, kisi-kisi kayu jati daur ulang, dan beton ekspos yang memaksimalkan sirkulasi udara alami tanpa boros energi.",
    descEn: "Two-storey tropical residence featuring an open inner courtyard, recycled teak solar screens, and exposed architectural concrete that maximizes natural airflow without excess cooling energy.",
    originId: "📍 Sentul, Jawa Barat",
    originEn: "📍 Sentul, West Java"
  },
  {
    id: "bale-wening",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    badgeTopIcon: "⭐",
    badgeTopTitleId: "ASEAN Architect Selection",
    badgeTopTitleEn: "ASEAN Architect Selection",
    badgeTopSubId: "Best Luxury Retreat Villa 2023",
    badgeTopSubEn: "Best Luxury Retreat Villa 2023",
    badgeBottomIcon: "🎋",
    badgeBottomTitleId: "Floating Cantilever",
    badgeBottomTitleEn: "Floating Cantilever",
    badgeBottomSubId: "Struktur Baja Ringan Tanpa Rusak Tebing",
    badgeBottomSubEn: "Lightweight Steel Frame Preserving Terrain",
    spiceId: "🌴 Japandi Minimalist Sanctuary",
    spiceEn: "🌴 Japandi Minimalist Sanctuary",
    titleId: "Bale Wening Sanctuary Ubud",
    titleEn: "Bale Wening Sanctuary Ubud",
    descId: "Villa peristirahatan privat berkonsep Japandi tropis yang memadukan ketenangan wabi-sabi Jepang dengan kelapangan arsitektur wantilan Bali.",
    descEn: "Private boutique retreat villa blending Japanese wabi-sabi serenity with the spaciousness of traditional Balinese wantilan pavilion architecture.",
    originId: "📍 Ubud, Bali",
    originEn: "📍 Ubud, Bali"
  },
  {
    id: "terra-sancta",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    badgeTopIcon: "🏛️",
    badgeTopTitleId: "Coastal Masterwork",
    badgeTopTitleEn: "Coastal Masterwork",
    badgeTopSubId: "Struktur Tahan Angin Garam Laut",
    badgeTopSubEn: "Marine Salt & Wind Resilient Structure",
    badgeBottomIcon: "🧱",
    badgeBottomTitleId: "Monolith Off-Form Concrete",
    badgeBottomTitleEn: "Monolith Off-Form Concrete",
    badgeBottomSubId: "Beton Bertekstur Hangat Sinar Senja",
    badgeBottomSubEn: "Concrete Textures Warming at Sunset",
    spiceId: "🧱 Brutalist Ocean Pavilion",
    spiceEn: "🧱 Brutalist Ocean Pavilion",
    titleId: "Terra Sancta Cliff Pavilion",
    titleEn: "Terra Sancta Cliff Pavilion",
    descId: "Karya arsitektur brutalis monumental di tepi tebing kapur Uluwatu, memadukan kekokohan dinding beton abu-abu dengan kelembutan panorama laut Hindia.",
    descEn: "Monumental brutalist coastal residence poised upon Uluwatu's limestone cliffs, contrasting raw monolith concrete walls with sweeping Indian Ocean panoramas.",
    originId: "📍 Uluwatu, Bali",
    originEn: "📍 Uluwatu, Bali"
  },
  {
    id: "kasama-roastery",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    badgeTopIcon: "☕",
    badgeTopTitleId: "Adaptive Reuse Excellence",
    badgeTopTitleEn: "Adaptive Reuse Excellence",
    badgeTopSubId: "Revitalisasi Gudang Kolonial 1950",
    badgeTopSubEn: "1950s Colonial Warehouse Revitalization",
    badgeBottomIcon: "☀️",
    badgeBottomTitleId: "Linear Roof Skylight",
    badgeBottomTitleEn: "Linear Roof Skylight",
    badgeBottomSubId: "Atrium Kaca 12m & Ventilasi Sejuk",
    badgeBottomSubEn: "12m Glass Atrium & Cooling Breezes",
    spiceId: "☕ Commercial Cafe & Roastery",
    spiceEn: "☕ Commercial Cafe & Roastery",
    titleId: "Kasama Artisan Roastery",
    titleEn: "Kasama Artisan Roastery",
    descId: "Revitalisasi bangunan gudang kolonial 1950-an menjadi kafe roastery kopi spesialti dengan ampiteater komunal dan atrium kaca terbuka.",
    descEn: "Adaptive revitalization of a 1950s colonial warehouse into a specialty coffee roastery featuring an urban stepped amphitheater and skylit atrium.",
    originId: "📍 Bandung, Jawa Barat",
    originEn: "📍 Bandung, West Java"
  }
];

let currentHeroSlideIndex = 0;
let heroSlideTimer = null;

function setHeroSlide(index) {
  if (index < 0) index = heroSlides.length - 1;
  if (index >= heroSlides.length) index = 0;
  currentHeroSlideIndex = index;
  const slide = heroSlides[index];
  const isEn = currentLang === "en";

  const heroMainImg = document.getElementById("heroMainImg");
  const heroBadgeTopIcon = document.getElementById("heroBadgeTopIcon");
  const heroBadgeTopTitle = document.getElementById("heroBadgeTopTitle");
  const heroBadgeTopSub = document.getElementById("heroBadgeTopSub");
  const heroBadgeBottomIcon = document.getElementById("heroBadgeBottomIcon");
  const heroBadgeBottomTitle = document.getElementById("heroBadgeBottomTitle");
  const heroBadgeBottomSub = document.getElementById("heroBadgeBottomSub");
  const heroPreviewSpice = document.getElementById("heroPreviewSpice");
  const previewDishTitle = document.getElementById("previewDishTitle");
  const previewDishDesc = document.getElementById("previewDishDesc");
  const heroPreviewOrigin = document.getElementById("heroPreviewOrigin");
  const btnPreviewDetails = document.getElementById("btnPreviewDetails");
  const heroDots = document.querySelectorAll(".hero-dot");

  if (heroMainImg) {
    heroMainImg.style.opacity = "0.75";
    heroMainImg.src = slide.image;
    heroMainImg.alt = isEn ? slide.titleEn : slide.titleId;
    setTimeout(() => { heroMainImg.style.opacity = "1"; }, 150);
  }

  if (heroBadgeTopIcon) heroBadgeTopIcon.textContent = slide.badgeTopIcon;
  if (heroBadgeTopTitle) heroBadgeTopTitle.textContent = isEn ? slide.badgeTopTitleEn : slide.badgeTopTitleId;
  if (heroBadgeTopSub) heroBadgeTopSub.textContent = isEn ? slide.badgeTopSubEn : slide.badgeTopSubId;

  if (heroBadgeBottomIcon) heroBadgeBottomIcon.textContent = slide.badgeBottomIcon;
  if (heroBadgeBottomTitle) heroBadgeBottomTitle.textContent = isEn ? slide.badgeBottomTitleEn : slide.badgeBottomTitleId;
  if (heroBadgeBottomSub) heroBadgeBottomSub.textContent = isEn ? slide.badgeBottomSubEn : slide.badgeBottomSubId;

  if (heroPreviewSpice) heroPreviewSpice.textContent = isEn ? slide.spiceEn : slide.spiceId;
  if (previewDishTitle) previewDishTitle.textContent = isEn ? slide.titleEn : slide.titleId;
  if (previewDishDesc) previewDishDesc.textContent = isEn ? slide.descEn : slide.descId;
  if (heroPreviewOrigin) heroPreviewOrigin.textContent = isEn ? slide.originEn : slide.originId;
  if (btnPreviewDetails) btnPreviewDetails.setAttribute("data-project-id", slide.id);

  // Update hero dot indicators
  heroDots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

// ============================================================================
// 5. DOM References
// ============================================================================
const langSwitchBtns = document.querySelectorAll(".lang-btn");
const foodGrid = document.getElementById("foodGrid");
const emptyState = document.getElementById("emptyState");
const foodSearchInput = document.getElementById("foodSearchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const btnResetFilters = document.getElementById("btnResetFilters");
const foodCountNum = document.getElementById("foodCountNum");
const categoryPills = document.querySelectorAll(".pill-btn");
const regionPills = document.querySelectorAll(".region-btn");
const regionNavTabs = document.querySelectorAll(".region-tab");
const regionTabContent = document.getElementById("regionTabContent");

// Modal References
const dishModalBackdrop = document.getElementById("dishModalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalDynamicContent = document.getElementById("modalDynamicContent");

// Mobile Nav
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");

// Chatbot References
const chatbotContainer = document.getElementById("chatbotContainer");
const chatLauncherBtn = document.getElementById("chatLauncherBtn");
const chatWindow = document.getElementById("chatWindow");
const chatCloseBtn = document.getElementById("chatCloseBtn");
const chatResetBtn = document.getElementById("chatResetBtn");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatPromptInput = document.getElementById("chatPromptInput");
const btnSendChat = document.getElementById("btnSendChat");
const btnAttachFile = document.getElementById("btnAttachFile");
const chatFileInput = document.getElementById("chatFileInput");
const chatAttachmentPreview = document.getElementById("chatAttachmentPreview");
const attachmentPreviewImg = document.getElementById("attachmentPreviewImg");
const attachmentFileName = document.getElementById("attachmentFileName");
const btnRemoveAttachment = document.getElementById("btnRemoveAttachment");
const chatQuickChips = document.getElementById("chatQuickChips");
const navChatTrigger = document.getElementById("navChatTrigger");
const btnHeroChat = document.getElementById("btnHeroChat");
const btnFooterOpenChat = document.getElementById("btnFooterOpenChat");

// Design Helper References
const typologySelectGroup = document.getElementById("typologySelectGroup");
const landAreaSlider = document.getElementById("landAreaSlider");
const landAreaDisplay = document.getElementById("landAreaDisplay");
const styleSelectGroup = document.getElementById("styleSelectGroup");
const featuresGroup = document.getElementById("featuresGroup");
const resultProjectTitle = document.getElementById("resultProjectTitle");
const resGfa = document.getElementById("resGfa");
const resKdb = document.getElementById("resKdb");
const resBudget = document.getElementById("resBudget");
const resTimeline = document.getElementById("resTimeline");
const resStrategyDesc = document.getElementById("resStrategyDesc");
const btnSendPlanToAI = document.getElementById("btnSendPlanToAI");
const btnCopyPlanSummary = document.getElementById("btnCopyPlanSummary");

// ============================================================================
// 6. Internationalization (i18n) Engine
// ============================================================================
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('radhi_arch_lang', lang);
  document.documentElement.lang = lang;

  // Update button active state
  langSwitchBtns.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  document.querySelectorAll(".btn-footer-lang").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Apply translations to all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // HTML content for rich text
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Re-render dynamic sections
  setHeroSlide(currentHeroSlideIndex);
  renderProjectCards();
  renderWorkflowPhase(currentRegionTab);
  calculateDesignNeeds();
}

// ============================================================================
// 7. Interactive Design Needs Calculator Engine
// ============================================================================
function calculateDesignNeeds() {
  const { typology, landArea, style, features } = designHelperState;
  const isEn = currentLang === "en";

  let gfaRatio = 1.2; // Floor Area Ratio (KLB)
  let kdbRatio = 0.6; // Ground Coverage
  let storeys = 2;
  let budgetBase = 6.5; // Juta Rp per m2
  let timelineWeeks = "6 - 8";
  let title = "";
  let strategy = "";

  // Typology parameters
  switch (typology) {
    case "residential":
      gfaRatio = landArea < 120 ? 1.4 : 1.15;
      kdbRatio = 0.6;
      storeys = landArea < 100 ? 3 : 2;
      budgetBase = 6.0;
      timelineWeeks = "6 - 8";
      title = isEn ? `Modern Family Residence (${storeys} Storeys)` : `Hunian Keluarga Tropis Modern (${storeys} Lantai)`;
      strategy = isEn
        ? "Maximizes natural cross-ventilation by allocating 40% permeable ground for greenery and inner courtyards. Secondary skin louvers protect private bedroom zones from western solar heat gain."
        : "Memaksimalkan sirkulasi udara silang dengan mengalokasikan 40% lahan sebagai area resapan hijau dan taman saku. Kisi-kisi secondary skin melindungi ruang tidur utama dari radiasi panas matahari barat.";
      break;
    case "villa":
      gfaRatio = 0.65;
      kdbRatio = 0.45;
      storeys = 1.5;
      budgetBase = 8.5;
      timelineWeeks = "8 - 10";
      title = isEn ? "Private Sanctuary Villa & Retreat Pavilion" : "Villa Peristirahatan Privat & Paviliun Terbuka";
      strategy = isEn
        ? "Emphasizes expansive semi-outdoor communal living, infinity reflection water features, and framed vistas. Blends private en-suite suites with generous terrace overhangs."
        : "Menekankan ruang komunal semi-terbuka dengan pemandangan lepas, kolam renang refleksi, serta keterhubungan langsung kamar tidur privat dengan taman hijau asri.";
      break;
    case "commercial":
      gfaRatio = 0.85;
      kdbRatio = 0.55;
      storeys = 2;
      budgetBase = 7.0;
      timelineWeeks = "5 - 7";
      title = isEn ? "Artisan Cafe, Roastery & Creative Retail" : "Cafe Spesialti, Roastery & Ruang Komersial";
      strategy = isEn
        ? "Prioritizes customer flow, high acoustic comfort, photogenic focal points, and breezy shaded outdoor dining. Flexible seating layouts maximize seat turnover."
        : "Memprioritaskan alur barista/pelanggan yang efisien, kenyamanan akustik, area outdoor teduh yang estetik, serta fleksibilitas tata letak meja untuk omzet optimal.";
      break;
    case "office":
      gfaRatio = 1.4;
      kdbRatio = 0.65;
      storeys = 2.5;
      budgetBase = 6.5;
      timelineWeeks = "6 - 8";
      title = isEn ? "Biophilic Creative Studio & Workspace Hub" : "Studio Kantor Kreatif & Hub Kolaboratif";
      strategy = isEn
        ? "Integrated biophilic acoustic partitions, ample soft north-south daylighting, and energy-efficient climate control minimizing workday cognitive stress."
        : "Partisi tanaman hidup peredam dengung suara, pencahayaan alami difus dari utara-selatan yang tidak menyilaukan mata monitor, serta ruang meeting fleksibel.";
      break;
    case "renovation":
      gfaRatio = 1.1;
      kdbRatio = 0.65;
      storeys = 2;
      budgetBase = 4.2;
      timelineWeeks = "4 - 6";
      title = isEn ? "Adaptive Reuse & Modern Facade Transformation" : "Transformasi Fasad & Penataan Ruang Adaptif";
      strategy = isEn
        ? "Preserves existing structural columns to cut demolition waste and budget, while punching strategic skylights and installing lightweight shading envelopes."
        : "Mempertahankan rangka balok-kolom utama untuk memangkas biaya hingga 40%, membongkar sekat masif yang gelap, dan menyelimuti fasad dengan kisi-kisi modern hemat energi.";
      break;
  }

  // Feature adjustments
  let calculatedGfa = Math.round(landArea * gfaRatio);
  if (features.includes("pool")) budgetBase += 0.8;
  if (features.includes("rooftop")) budgetBase += 0.5;
  if (features.includes("void")) calculatedGfa = Math.round(calculatedGfa * 1.05);

  const budgetMin = (budgetBase * 0.9).toFixed(1);
  const budgetMax = (budgetBase * 1.25).toFixed(1);

  // Update UI Elements
  if (resultProjectTitle) resultProjectTitle.textContent = title;
  if (resGfa) {
    resGfa.textContent = isEn
      ? `~${calculatedGfa} sqm (${Math.ceil(storeys)} Floors)`
      : `~${calculatedGfa} m² (${Math.ceil(storeys)} Lantai)`;
  }
  if (resKdb) {
    resKdb.textContent = isEn
      ? `${Math.round(kdbRatio * 100)}% Footprint (~${Math.round(landArea * (1 - kdbRatio))} sqm Greenery)`
      : `${Math.round(kdbRatio * 100)}% Lahan (~${Math.round(landArea * (1 - kdbRatio))} m² Resapan Hijau)`;
  }
  if (resBudget) {
    resBudget.textContent = isEn
      ? `IDR ${budgetMin} - ${budgetMax} M / sqm`
      : `Rp ${budgetMin} - ${budgetMax} Jt / m²`;
  }
  if (resTimeline) {
    resTimeline.textContent = isEn
      ? `${timelineWeeks} Weeks (Concept to DED)`
      : `${timelineWeeks} Minggu (Konsep s/d DED)`;
  }
  if (resStrategyDesc) {
    resStrategyDesc.textContent = strategy;
  }
}

// ============================================================================
// 8. Render Curated Architectural Projects
// ============================================================================
function renderProjectCards() {
  if (!foodGrid) return;
  const isEn = currentLang === "en";

  const filtered = projectData.filter(proj => {
    // Category match
    const matchesCategory = activeCategoryFilter === "all" || proj.typology === activeCategoryFilter;
    // Style match
    const matchesStyle = activeRegionFilter === "all" || proj.style === activeRegionFilter;
    // Search query match
    let matchesQuery = true;
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      const name = (isEn ? proj.nameEn : proj.nameId).toLowerCase();
      const loc = proj.location.toLowerCase();
      const styleName = proj.style.toLowerCase();
      const tags = proj.tags.join(" ").toLowerCase();
      const desc = (isEn ? proj.descEn : proj.descId).toLowerCase();
      matchesQuery = name.includes(q) || loc.includes(q) || styleName.includes(q) || tags.includes(q) || desc.includes(q);
    }
    return matchesCategory && matchesStyle && matchesQuery;
  });

  if (foodCountNum) {
    foodCountNum.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    foodGrid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  foodGrid.innerHTML = filtered.map(proj => {
    const title = isEn ? proj.nameEn : proj.nameId;
    const desc = isEn ? proj.descEn : proj.descId;
    const unit = isEn ? "sqm" : "m²";

    // Typology badge label
    let typeLabel = "Residential";
    if (proj.typology === "residential") typeLabel = isEn ? "Residential" : "Hunian Pribadi";
    if (proj.typology === "villa") typeLabel = isEn ? "Villa & Resort" : "Villa & Resort";
    if (proj.typology === "commercial") typeLabel = isEn ? "Commercial" : "Komersial & Cafe";
    if (proj.typology === "renovation") typeLabel = isEn ? "Renovation" : "Renovasi Fasad";

    return `
      <article class="food-card" data-project-id="${proj.id}">
        <div class="card-media">
          <img src="${proj.image}" alt="${title}" loading="lazy" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'">
          <div class="card-badges-top">
            <span class="badge-region">${typeLabel}</span>
            <span class="badge-tag">${proj.year}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="card-origin">
            <span class="origin-pin">📍</span>
            <span>${proj.location}</span>
          </div>

          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${desc}</p>

          <div class="card-specs-row">
            <div class="card-spec-item">
              <span class="spec-k">${isEn ? "Site Area:" : "L. Tanah:"}</span>
              <strong class="spec-v">${proj.siteArea} ${unit}</strong>
            </div>
            <div class="card-spec-divider"></div>
            <div class="card-spec-item">
              <span class="spec-k">${isEn ? "Built Area:" : "L. Bangunan:"}</span>
              <strong class="spec-v">${proj.builtArea} ${unit}</strong>
            </div>
          </div>

          <div class="card-tags-row">
            ${proj.tags.slice(0, 3).map(tag => `<span class="mini-tag">${tag}</span>`).join("")}
          </div>
        </div>

        <div class="card-footer">
          <button type="button" class="btn-card-action" data-project-id="${proj.id}">
            <span>${isEn ? "View Concept & Details" : "Lihat Detail Konsep"}</span>
            <span class="arrow">→</span>
          </button>
        </div>
      </article>
    `;
  }).join("");

  // Attach card click handlers
  document.querySelectorAll(".food-card, .btn-card-action").forEach(el => {
    el.addEventListener("click", (e) => {
      const projId = el.getAttribute("data-project-id");
      if (projId) {
        openProjectModal(projId);
      }
    });
  });
}

// ============================================================================
// 9. Interactive Project Deep-Dive Modal
// ============================================================================
function openProjectModal(projectId) {
  const proj = projectData.find(p => p.id === projectId);
  if (!proj) return;
  const isEn = currentLang === "en";
  const unit = isEn ? "sqm" : "m²";

  const title = isEn ? proj.nameEn : proj.nameId;
  const desc = isEn ? proj.descEn : proj.descId;
  const challenge = isEn ? proj.challengeEn : proj.challengeId;
  const solution = isEn ? proj.solutionEn : proj.solutionId;
  const materials = isEn ? proj.materialsEn : proj.materialsId;
  const architectNote = isEn ? proj.architectNoteEn : proj.architectNoteId;

  modalDynamicContent.innerHTML = `
    <div class="modal-project-layout">
      <div class="modal-banner-img-wrap">
        <img src="${proj.image}" alt="${title}" class="modal-banner-img">
        <div class="modal-img-overlay">
          <div class="modal-title-box">
            <span class="modal-kicker">📍 ${proj.location} • Selesai ${proj.year}</span>
            <h2 class="modal-main-title">${title}</h2>
          </div>
        </div>
      </div>

      <div class="modal-details-body">
        <div class="modal-specs-strip">
          <div class="m-spec">
            <span class="m-spec-label">${isEn ? "Site Area (Land)" : "Luas Tanah"}</span>
            <strong class="m-spec-val">${proj.siteArea} ${unit}</strong>
          </div>
          <div class="m-spec">
            <span class="m-spec-label">${isEn ? "Gross Built Area" : "Luas Bangunan"}</span>
            <strong class="m-spec-val">${proj.builtArea} ${unit}</strong>
          </div>
          <div class="m-spec">
            <span class="m-spec-label">${isEn ? "Typology" : "Tipologi"}</span>
            <strong class="m-spec-val">${proj.typology.toUpperCase()}</strong>
          </div>
          <div class="m-spec">
            <span class="m-spec-label">${isEn ? "Style" : "Gaya Desain"}</span>
            <strong class="m-spec-val">${proj.style.replace("-", " ").toUpperCase()}</strong>
          </div>
        </div>

        <div class="modal-section-block">
          <p class="modal-lead-desc">${desc}</p>
        </div>

        <div class="modal-two-cols">
          <div class="modal-col-card">
            <h4>🎯 ${isEn ? "Client Brief & Site Challenges" : "Tantangan Klien & Konteks Tapak"}</h4>
            <p>${challenge}</p>
          </div>
          <div class="modal-col-card highlight-col">
            <h4>💡 ${isEn ? "Architectural Solution" : "Solusi & Strategi Arsitektur"}</h4>
            <p>${solution}</p>
          </div>
        </div>

        <div class="modal-materials-block">
          <h4>🪵 ${isEn ? "Key Materials & Tectonic Details" : "Material Utama & Detail Tektonika"}</h4>
          <div class="modal-chips-row">
            ${materials.map(m => `<span class="mat-chip">${m}</span>`).join("")}
          </div>
        </div>

        <div class="modal-quote-block">
          <div class="quote-icon">“</div>
          <div class="quote-content">
            <p class="quote-text">${architectNote}</p>
            <span class="quote-author">— Ar. Radhi Dinata, ST., IAI, AA (Principal Architect)</span>
          </div>
        </div>

        <div class="modal-actions-footer">
          <button type="button" class="btn btn-primary" id="btnModalChatAbout">
            <span class="icon">💬</span>
            <span>${isEn ? "Consult Similar Building Needs with ArchiAI" : "Konsultasikan Kebutuhan Serupa dengan AI Arsitek"}</span>
          </button>
          <button type="button" class="btn btn-secondary" id="btnModalCloseSecondary">
            <span>${isEn ? "Close" : "Tutup"}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  dishModalBackdrop.classList.add("open");
  dishModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Modal Buttons
  const btnModalChatAbout = document.getElementById("btnModalChatAbout");
  if (btnModalChatAbout) {
    btnModalChatAbout.addEventListener("click", () => {
      closeProjectModal();
      openChatWindow();
      const prompt = isEn
        ? `Hello Ar. Radhi Dinata, I am inspired by your project "${proj.nameEn}" located in ${proj.location}. Could we explore a similar architectural approach for my property?`
        : `Halo Ar. Radhi Dinata, saya sangat tertarik dengan karya arsitektur Anda "${proj.nameId}" di ${proj.location}. Bisakah kita mendiskusikan konsep dan estimasi serupa untuk rencana lahan saya?`;
      sendChatMessage(prompt);
    });
  }

  const btnModalCloseSecondary = document.getElementById("btnModalCloseSecondary");
  if (btnModalCloseSecondary) {
    btnModalCloseSecondary.addEventListener("click", closeProjectModal);
  }
}

function closeProjectModal() {
  dishModalBackdrop.classList.remove("open");
  dishModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ============================================================================
// 10. 4-Phase Design Workflow Tab Renderer
// ============================================================================
function renderWorkflowPhase(phaseKey) {
  if (!regionTabContent) return;
  const phase = workflowPhases[phaseKey] || workflowPhases.phase1;
  const isEn = currentLang === "en";

  const title = isEn ? phase.titleEn : phase.titleId;
  const badge = isEn ? phase.stepBadgeEn : phase.stepBadgeId;
  const desc = isEn ? phase.descEn : phase.descId;
  const deliverables = isEn ? phase.deliverablesEn : phase.deliverablesId;

  regionTabContent.innerHTML = `
    <div class="workflow-detail-card">
      <div class="workflow-header-row">
        <span class="workflow-step-pill">${badge}</span>
        <h3 class="workflow-phase-title">${title}</h3>
      </div>
      <p class="workflow-desc-text">${desc}</p>

      <div class="workflow-deliverables-box">
        <h4 class="deliverables-heading">📦 ${isEn ? "Key Client Deliverables & Milestones:" : "Hasil Kerja & Dokumen yang Anda Dapatkan:"}</h4>
        <div class="deliverables-grid">
          ${deliverables.map(item => `
            <div class="deliverable-item">
              <span class="chk-icon">✓</span>
              <span>${item}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="workflow-footer-cta">
        <button type="button" class="btn btn-secondary btn-sm" id="btnWorkflowConsult">
          <span>${isEn ? "Ask Architect About This Phase" : "Tanyakan Detail Tahap Ini ke AI Arsitek"}</span>
          <span class="icon">💬</span>
        </button>
      </div>
    </div>
  `;

  const btnWorkflowConsult = document.getElementById("btnWorkflowConsult");
  if (btnWorkflowConsult) {
    btnWorkflowConsult.addEventListener("click", () => {
      openChatWindow();
      const prompt = isEn
        ? `Could you explain more about ${title} and what documents I need to prepare as a client?`
        : `Bisa jelaskan lebih dalam mengenai ${title} dan dokumen apa saja yang perlu saya siapkan sebagai klien?`;
      sendChatMessage(prompt);
    });
  }
}

// ============================================================================
// 11. ArchiAI Chatbot Widget Integration
// ============================================================================
function toggleChatWindow() {
  const isOpen = chatWindow.classList.contains("open");
  if (isOpen) {
    closeChatWindow();
  } else {
    openChatWindow();
  }
}

function openChatWindow() {
  chatWindow.classList.add("open");
  chatWindow.setAttribute("aria-hidden", "false");
  chatLauncherBtn.classList.add("active");
  setTimeout(() => {
    chatPromptInput.focus();
  }, 200);
}

function closeChatWindow() {
  chatWindow.classList.remove("open");
  chatWindow.setAttribute("aria-hidden", "true");
  chatLauncherBtn.classList.remove("active");
}

function appendUserMessage(text, imageSrc = null) {
  const row = document.createElement("div");
  row.className = "message-row user-row";

  let imgMarkup = "";
  if (imageSrc) {
    imgMarkup = `<div class="msg-attached-img"><img src="${imageSrc}" alt="Lampiran Pengguna"></div>`;
  }

  row.innerHTML = `
    <div class="msg-bubble">
      ${imgMarkup}
      <p>${escapeHtml(text)}</p>
    </div>
    <div class="msg-avatar">👤</div>
  `;
  chatMessages.appendChild(row);
  scrollToChatBottom();
}

function appendBotMessage(markdownText) {
  const row = document.createElement("div");
  row.className = "message-row bot-row";
  row.innerHTML = `
    <div class="msg-avatar">📐</div>
    <div class="msg-bubble">
      ${formatMarkdown(markdownText)}
    </div>
  `;
  chatMessages.appendChild(row);
  scrollToChatBottom();
}

function appendTypingIndicator() {
  const id = "typing-" + Date.now();
  const row = document.createElement("div");
  row.className = "message-row bot-row typing-row";
  row.id = id;
  row.innerHTML = `
    <div class="msg-avatar">📐</div>
    <div class="msg-bubble typing-bubble">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  `;
  chatMessages.appendChild(row);
  scrollToChatBottom();
  return id;
}

function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollToChatBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.innerText = string;
  return div.innerHTML;
}

function formatMarkdown(text) {
  if (!text) return "";
  let html = text
    .replace(/^### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^## (.*$)/gim, '<h3>$1</h3>')
    .replace(/^# (.*$)/gim, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/^\s*[-•*]\s+(.*$)/gim, '<li>$1</li>');

  html = html.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');
  html = html.replace(/\n\n/gim, '</p><p>');
  html = html.replace(/\n/gim, '<br>');
  return `<p>${html}</p>`;
}

async function sendChatMessage(promptText, file = null) {
  if (!promptText && !file) return;

  // Display user message in UI
  let previewUrl = null;
  if (file && file.type.startsWith("image/")) {
    previewUrl = URL.createObjectURL(file);
  }
  appendUserMessage(promptText || (currentLang === "en" ? "[Attached Sketch / Document]" : "[Melampirkan Sketsa / Dokumen]"), previewUrl);

  // Prepare FormData
  const formData = new FormData();
  if (promptText) formData.append("prompt", promptText);
  if (chatSessionId) formData.append("sessionId", chatSessionId);
  if (file) formData.append("file", file);

  const typingId = appendTypingIndicator();

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: formData
    });

    removeTypingIndicator(typingId);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    if (data.sessionId) {
      chatSessionId = data.sessionId;
      localStorage.setItem("radhi_arch_chat_sessionId", chatSessionId);
    }

    let replyText = "";
    if (data.result && Array.isArray(data.result)) {
      const lastStep = data.result[data.result.length - 1];
      if (lastStep && lastStep.content) {
        if (Array.isArray(lastStep.content)) {
          replyText = lastStep.content.map(c => c.text || "").join("\n");
        } else if (typeof lastStep.content === "string") {
          replyText = lastStep.content;
        }
      }
    }

    if (!replyText) {
      replyText = currentLang === "en"
        ? "Thank you! I am ready to guide you in realizing your dream architecture."
        : "Terima kasih! Saya siap membantu mewujudkan rancangan arsitektur impian Anda.";
    }

    appendBotMessage(replyText);

  } catch (error) {
    console.error("Error communicating with /api/chat:", error);
    removeTypingIndicator(typingId);
    const errText = currentLang === "en"
      ? "Sorry, I had trouble connecting to the architectural consultation server. Please verify your connection or try again shortly."
      : "Mohon maaf, terjadi kendala saat menghubungi server konsultasi arsitek. Silakan periksa koneksi Anda atau coba sesaat lagi.";
    appendBotMessage(errText);
  } finally {
    clearAttachment();
  }
}

function clearAttachment() {
  selectedChatImageFile = null;
  if (chatFileInput) chatFileInput.value = "";
  if (chatAttachmentPreview) chatAttachmentPreview.style.display = "none";
  if (attachmentPreviewImg) attachmentPreviewImg.src = "";
  if (attachmentFileName) attachmentFileName.textContent = "";
}

// ============================================================================
// 12. Event Listeners & Interactive Initialization
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Set initial language
  setLanguage(currentLang);

  // Language switch triggers
  langSwitchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      setLanguage(selected);
    });
  });

  document.querySelectorAll(".btn-footer-lang").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      setLanguage(selected);
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Navbar Active Click & ScrollSpy Indicator Tracking
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      if (navLinks && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    });
  });

  const sectionIds = ["hero", "about", "design-helper", "portfolio", "services", "process"];
  function handleScrollSpy() {
    const scrollPos = window.scrollY + 130;
    let currentId = "hero";
    for (const id of sectionIds) {
      const sec = document.getElementById(id);
      if (sec) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = id;
          break;
        }
      }
    }
    navItems.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${currentId}`) {
        navItems.forEach(n => n.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", handleScrollSpy, { passive: true });
  handleScrollSpy();

  // Design Helper: Typology chips
  if (typologySelectGroup) {
    typologySelectGroup.querySelectorAll(".helper-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        typologySelectGroup.querySelectorAll(".helper-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        designHelperState.typology = chip.getAttribute("data-type");
        calculateDesignNeeds();
      });
    });
  }

  // Design Helper: Land Area Slider
  if (landAreaSlider && landAreaDisplay) {
    landAreaSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      designHelperState.landArea = val;
      landAreaDisplay.textContent = `${val} m²`;
      calculateDesignNeeds();
    });
  }

  // Design Helper: Style chips
  if (styleSelectGroup) {
    styleSelectGroup.querySelectorAll(".helper-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        styleSelectGroup.querySelectorAll(".helper-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        designHelperState.style = chip.getAttribute("data-style");
        calculateDesignNeeds();
      });
    });
  }

  // Design Helper: Feature checkboxes
  if (featuresGroup) {
    featuresGroup.querySelectorAll("input[type='checkbox']").forEach(chk => {
      chk.addEventListener("change", () => {
        const checked = [];
        featuresGroup.querySelectorAll("input[type='checkbox']:checked").forEach(c => {
          checked.push(c.value);
        });
        designHelperState.features = checked;
        calculateDesignNeeds();
      });
    });
  }

  // Design Helper: "Bahas Rencana Ini dengan AI Arsitek"
  if (btnSendPlanToAI) {
    btnSendPlanToAI.addEventListener("click", () => {
      const isEn = currentLang === "en";
      const { typology, landArea, style, features } = designHelperState;
      const gfaText = resGfa ? resGfa.textContent : "";
      const budgetText = resBudget ? resBudget.textContent : "";

      const prompt = isEn
        ? `Hello Ar. Radhi Dinata, I used your interactive design calculator for my project:
- Typology: ${typology}
- Plot Area: ${landArea} sqm
- Architectural Style: ${style}
- Special Features: ${features.join(", ")}
- Estimated GFA: ${gfaText}
- Estimated Build Budget: ${budgetText}

Could you provide architectural zoning suggestions, orientation tips, and how we can proceed with design consultation?`
        : `Halo Ar. Radhi Dinata, saya telah menggunakan kalkulator desain di web Anda dengan ringkasan rencana:
- Tipologi Bangunan: ${typology}
- Luas Lahan: ${landArea} m²
- Gaya Arsitektur: ${style}
- Fitur Spesial: ${features.join(", ")}
- Estimasi Luas Bangunan: ${gfaText}
- Estimasi Bujet Bangun: ${budgetText}

Bisakah Anda memberikan rekomendasi zonasi ruang, tips arah hadap bangunan, dan langkah awal untuk memulai perancangan bersama studio Anda?`;

      openChatWindow();
      sendChatMessage(prompt);
    });
  }

  // Design Helper: "Salin Ringkasan Desain"
  if (btnCopyPlanSummary) {
    btnCopyPlanSummary.addEventListener("click", () => {
      const isEn = currentLang === "en";
      const { typology, landArea, style, features } = designHelperState;
      const title = resultProjectTitle ? resultProjectTitle.textContent : "";
      const gfaText = resGfa ? resGfa.textContent : "";
      const budgetText = resBudget ? resBudget.textContent : "";
      const timelineText = resTimeline ? resTimeline.textContent : "";

      const summaryText = `[STUDIO AR. RADHI DINATA, IAI — DESIGN BRIEF]
Project: ${title}
Typology: ${typology}
Land Area: ${landArea} m²
Style: ${style}
Special Features: ${features.join(", ")}
Estimated Built GFA: ${gfaText}
Estimated Build Budget: ${budgetText}
Design Timeline: ${timelineText}`;

      navigator.clipboard.writeText(summaryText).then(() => {
        const originalText = btnCopyPlanSummary.innerHTML;
        btnCopyPlanSummary.innerHTML = `<span class="icon">✓</span> <span>${translations[currentLang].btnCopyDone}</span>`;
        setTimeout(() => {
          btnCopyPlanSummary.innerHTML = originalText;
        }, 2500);
      });
    });
  }

  // Portfolio Filters: Typology pills
  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategoryFilter = pill.getAttribute("data-category");
      renderProjectCards();
    });
  });

  // Portfolio Filters: Style pills
  regionPills.forEach(pill => {
    pill.addEventListener("click", () => {
      regionPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeRegionFilter = pill.getAttribute("data-region");
      renderProjectCards();
    });
  });

  // Search input typing
  if (foodSearchInput) {
    foodSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery.trim().length > 0 ? "flex" : "none";
      }
      renderProjectCards();
    });
  }

  // Search clear button
  if (searchClearBtn && foodSearchInput) {
    searchClearBtn.addEventListener("click", () => {
      foodSearchInput.value = "";
      searchQuery = "";
      searchClearBtn.style.display = "none";
      renderProjectCards();
      foodSearchInput.focus();
    });
  }

  // Reset all filters button
  if (btnResetFilters) {
    btnResetFilters.addEventListener("click", () => {
      activeCategoryFilter = "all";
      activeRegionFilter = "all";
      searchQuery = "";
      if (foodSearchInput) foodSearchInput.value = "";
      if (searchClearBtn) searchClearBtn.style.display = "none";

      categoryPills.forEach(p => p.classList.remove("active"));
      document.querySelector(".pill-btn[data-category='all']")?.classList.add("active");

      regionPills.forEach(p => p.classList.remove("active"));
      document.querySelector(".region-btn[data-region='all']")?.classList.add("active");

      renderProjectCards();
    });
  }

  // Workflow Tabs
  regionNavTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      regionNavTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentRegionTab = tab.getAttribute("data-reg-tab");
      renderWorkflowPhase(currentRegionTab);
    });
  });

  // Hero Slide Indicators (Dots) Click Handlers
  const heroDots = document.querySelectorAll(".hero-dot");
  heroDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      setHeroSlide(idx);
      resetHeroAutoPlay();
    });
  });

  // Hero Nav Arrows
  const heroNavPrev = document.getElementById("heroNavPrev");
  const heroNavNext = document.getElementById("heroNavNext");
  if (heroNavPrev) {
    heroNavPrev.addEventListener("click", () => {
      setHeroSlide(currentHeroSlideIndex - 1);
      resetHeroAutoPlay();
    });
  }
  if (heroNavNext) {
    heroNavNext.addEventListener("click", () => {
      setHeroSlide(currentHeroSlideIndex + 1);
      resetHeroAutoPlay();
    });
  }

  // Hero Auto-play timer
  function startHeroAutoPlay() {
    heroSlideTimer = setInterval(() => {
      setHeroSlide(currentHeroSlideIndex + 1);
    }, 6000);
  }
  function resetHeroAutoPlay() {
    if (heroSlideTimer) clearInterval(heroSlideTimer);
    startHeroAutoPlay();
  }
  startHeroAutoPlay();

  // Pause Hero Auto-play on hover
  const heroImgContainer = document.getElementById("heroImgContainer");
  if (heroImgContainer) {
    heroImgContainer.addEventListener("mouseenter", () => {
      if (heroSlideTimer) clearInterval(heroSlideTimer);
    });
    heroImgContainer.addEventListener("mouseleave", () => {
      resetHeroAutoPlay();
    });
  }

  // Hero Preview details button
  const btnPreviewDetails = document.getElementById("btnPreviewDetails");
  if (btnPreviewDetails) {
    btnPreviewDetails.addEventListener("click", () => {
      const projId = btnPreviewDetails.getAttribute("data-project-id") || heroSlides[currentHeroSlideIndex].id;
      openProjectModal(projId);
    });
  }

  // Footer quick links
  document.querySelectorAll(".quick-dish-link").forEach(link => {
    link.addEventListener("click", () => {
      const projId = link.getAttribute("data-project-id");
      if (projId) openProjectModal(projId);
    });
  });

  // Modal Close triggers
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (dishModalBackdrop) {
    dishModalBackdrop.addEventListener("click", (e) => {
      if (e.target === dishModalBackdrop) closeProjectModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dishModalBackdrop?.classList.contains("open")) {
      closeProjectModal();
    }
  });

  // Chat Triggers
  if (chatLauncherBtn) chatLauncherBtn.addEventListener("click", toggleChatWindow);
  if (chatCloseBtn) chatCloseBtn.addEventListener("click", closeChatWindow);
  if (navChatTrigger) navChatTrigger.addEventListener("click", openChatWindow);
  if (btnHeroChat) btnHeroChat.addEventListener("click", openChatWindow);
  if (btnFooterOpenChat) btnFooterOpenChat.addEventListener("click", openChatWindow);

  // Chat Reset
  if (chatResetBtn) {
    chatResetBtn.addEventListener("click", () => {
      chatSessionId = null;
      localStorage.removeItem("radhi_arch_chat_sessionId");
      if (chatMessages) {
        chatMessages.innerHTML = `
          <div class="message-row bot-row">
            <div class="msg-avatar">📐</div>
            <div class="msg-bubble">
              <p>${translations[currentLang].chatGreeting}</p>
            </div>
          </div>
        `;
      }
      clearAttachment();
    });
  }

  // Quick Suggestion Chips
  if (chatQuickChips) {
    chatQuickChips.querySelectorAll(".chip-item").forEach(chip => {
      chip.addEventListener("click", () => {
        const prompt = chip.getAttribute("data-prompt");
        sendChatMessage(prompt);
      });
    });
  }

  // Chat Form Submit
  if (chatForm && chatPromptInput) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const promptText = chatPromptInput.value.trim();
      if (!promptText && !selectedChatImageFile) return;

      const fileToSend = selectedChatImageFile;
      chatPromptInput.value = "";
      sendChatMessage(promptText, fileToSend);
    });
  }

  // Chat File Attachment
  if (btnAttachFile && chatFileInput) {
    btnAttachFile.addEventListener("click", () => {
      chatFileInput.click();
    });

    chatFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        selectedChatImageFile = e.target.files[0];
        if (attachmentFileName) attachmentFileName.textContent = selectedChatImageFile.name;
        if (selectedChatImageFile.type.startsWith("image/")) {
          if (attachmentPreviewImg) attachmentPreviewImg.src = URL.createObjectURL(selectedChatImageFile);
        } else {
          if (attachmentPreviewImg) attachmentPreviewImg.src = "";
        }
        if (chatAttachmentPreview) chatAttachmentPreview.style.display = "flex";
      }
    });
  }

  if (btnRemoveAttachment) {
    btnRemoveAttachment.addEventListener("click", clearAttachment);
  }
});
