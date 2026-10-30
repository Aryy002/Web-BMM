import { useState, useEffect, useRef } from 'react';
import './App.css';

// Logo asset
import logoSm from './assets/logo/logo_sm.svg';

// Batch 1 Donasi Landingpage assets
import donasiLogoWhite from './assets/donasi/logo/Logo.svg';
import iconIndonesia from './assets/donasi/icons/indonesia.svg';
import donasiHeroImg from './assets/donasi/images/image_hero.png';
import heroSlide2Img from './assets/donasi/images/image_hero_slide2.jpg';
import heroSlide3Img from './assets/donasi/images/image_hero_slide3.png';
import iconPenerima from './assets/donasi/icons/Penerima.svg';
import iconDonatur from './assets/donasi/icons/donatur.svg';
import iconProgram from './assets/donasi/icons/Program.svg';
import donasiProgramImg from './assets/donasi/images/image_program.jpg';
import decorationKiri from './assets/donasi/decoration/Decoration-kiri.png';
import imageSalurkan from './assets/donasi/images/image_salurkan.png';
import bgSalurkan from './assets/donasi/images/bg-salurkan.png';
import iconZakat3D from './assets/donasi/icons/zakat_3d.png';
import iconDonate3D from './assets/donasi/icons/donate_3d.png';

// Batch 2 Master Assets
import decorationKanan from './assets/donasi/decoration/Decoration-kanan.png';
import imageDonasi from './assets/donasi/images/image_donasi.png';
import imageQurban from './assets/donasi/images/image_qurban.png';
import dekorGarisProsesQurban from './assets/donasi/images/dekor-garis-proses-qurban.png';

// Qurban Icons
import iconCow from './assets/donasi/icons/icons_qurban/cow-2 1.svg';
import iconGoat from './assets/donasi/icons/icons_qurban/goat-2 1.svg';
import iconDonaturQurban from './assets/donasi/icons/icons_qurban/donatur.svg';
import iconGeoLocation from './assets/donasi/icons/icons_qurban/geolocation.svg';
import iconElementPlus from './assets/donasi/icons/icons_qurban/element-plus.svg';

// QnA (Mengapa Qurban) Icons
import iconAkad from './assets/donasi/icons/icons_qna/akad.png';
import iconPenerimaManfaat from './assets/donasi/icons/icons_qna/penerima-manfaat.png';
import iconHarga from './assets/donasi/icons/icons_qna/harga.png';
import iconKayaManfaat from './assets/donasi/icons/icons_qna/kaya-manfaat.png';
import iconLiveReport from './assets/donasi/icons/icons_qna/live-report.png';
import iconTepatSasaran from './assets/donasi/icons/icons_qna/tepat-sasaran.png';

// Proses Qurban Icons
import iconPilihQurban from './assets/donasi/icons/icons_prosesqurban/pilih-qurban.png';
import iconLengkapiQurban from './assets/donasi/icons/icons_prosesqurban/lengkapi-qurban.png';

// Donasi Grid Icons
import iconGridBencana from './assets/donasi/icons/icons_donasipilihan/bencana.svg';
import iconGridPendidikan from './assets/donasi/icons/icons_donasipilihan/pendidikan.svg';
import iconGridZakat from './assets/donasi/icons/icons_donasipilihan/zakat.svg';
import iconGridKemanusiaan from './assets/donasi/icons/icons_donasipilihan/kemanusiaan.svg';
import iconGridLainnya from './assets/donasi/icons/icons_donasipilihan/lainnya.svg';
import iconGridElementPlus from './assets/donasi/icons/icons_donasipilihan/element-plus.svg';
import iconDonasiTime from './assets/donasi/icons/time.svg';

// Batch 3 Master Assets
import imageBerita from './assets/donasi/images/image_berita.jpg';
import imageDonasiSekarang from './assets/donasi/images/image_donasisekarang.jpg';
import imageFooterAwards from './assets/donasi/images/image_footerawards.png';

// Batch 3 Footer Social Icons
import footerIconFacebook from './assets/donasi/icons/icons_footer/facebook.svg';
import footerIconInstagram from './assets/donasi/icons/icons_footer/instagram-2.svg';
import footerIconYoutube from './assets/donasi/icons/icons_footer/youtube.svg';
import footerIconTiktok from './assets/donasi/icons/icons_footer/tiktok.svg';
import footerIconX from './assets/donasi/icons/icons_footer/x.svg';

// Image assets (used in earlier sections and bottom nav)
import imageHero from './assets/image/image_hero.png';
import imageCard from './assets/image/image_card.png';
import imageProgram from './assets/image/image_program.jpg';
import imageKegiatan from './assets/image/image_kegiatan.png';
import imageProfil from './assets/image/image_profil.png';

// Bottom Navigation icons
import iconCourier from './assets/icons/icons_layanan/courier-express-.svg';
import iconLovely from './assets/icons/icons_layanan/lovely.svg';

// =========================================================================
// BATCH 3 STATIC DATA DEFINITIONS
// =========================================================================

const newsItems = [
  {
    id: 1,
    title: 'BMM Salurkan Bantuan Dapur Umum untuk Korban Banjir Solok Sumatera Barat',
    date: '24 Sep, 2026',
    img: imageBerita
  },
  {
    id: 2,
    title: 'BMM Salurkan Bantuan Dapur Umum untuk Korban Banjir Solok Sumatera Barat',
    date: '24 Sep, 2026',
    img: imageBerita
  },
  {
    id: 3,
    title: 'BMM Salurkan Bantuan Dapur Umum untuk Korban Banjir Solok Sumatera Barat',
    date: '24 Sep, 2026',
    img: imageBerita
  }
];

const footerProgramLinks = [
  { label: 'Sosial Dakwah', href: '#program' },
  { label: 'Kemanusiaan', href: '#program' },
  { label: 'Kesehatan', href: '#program' },
  { label: 'Ekonomi', href: '#program' },
  { label: 'Pendidikan', href: '#program' }
];

const footerLinkLinks = [
  { label: 'Berita', href: '#berita' },
  { label: 'Donasi', href: '#donasi-grid' },
  { label: 'Kajian', href: '#kajian' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Rekening Donasi', href: '#rekening' }
];

const footerLayananLinks = [
  { label: 'Ziswaf Prioritas', href: '#layanan' },
  { label: 'Konsultasi Zakat', href: '#layanan' },
  { label: 'Kalkulator Zakat', href: '#layanan' },
  { label: 'Jemput Ziswaf', href: '#layanan' }
];

const footerLainnyaLinks = [
  { label: 'Karir & Kerelawanan', href: '#karir' },
  { label: 'Kontak Kami', href: '#kontak' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kebijakan & Privasi', href: '#kebijakan' },
  { label: 'Syarat & Ketentuan', href: '#syarat' }
];

// =========================================================================
// BATCH 2 STATIC DATA DEFINITIONS
// =========================================================================

const donasiPilihanPrograms = [
  {
    id: 'donasi-1',
    category: 'kemanusiaan',
    title: 'Jantung Bocor, Almaira (4 bulan) Butuh Pengobatan Segera',
    collected: 'Rp 117.550.291',
    sisaHari: 168,
    progress: '32%',
    progressValue: 32,
    img: imageDonasi
  },
  {
    id: 'donasi-2',
    category: 'pendidikan',
    title: 'Bantu Anak-Anak Yatim dan Dhuafa Meraih Cita-Cita Pendidikan Tinggi',
    collected: 'Rp 45.500.000',
    sisaHari: 120,
    progress: '45.5%',
    progressValue: 45.5,
    img: imageCard
  },
  {
    id: 'donasi-3',
    category: 'zakat',
    title: 'Tunaikan Zakat Maal Anda Untuk Pemberdayaan Ekonomi Ummat',
    collected: 'Rp 128.000.000',
    sisaHari: 60,
    progress: '64%',
    progressValue: 64,
    img: imageProgram
  },
  {
    id: 'donasi-4',
    category: 'bencana',
    title: 'Tanggap Darurat Banjir dan Longsor Sulawesi Tengah',
    collected: 'Rp 55.000.000',
    sisaHari: 14,
    progress: '68.8%',
    progressValue: 68.8,
    img: imageKegiatan
  },
  {
    id: 'donasi-5',
    category: 'kemanusiaan',
    title: 'Solidaritas Palestina: Bantuan Darurat untuk Saudara Kita',
    collected: 'Rp 320.000.000',
    sisaHari: 365,
    progress: '64%',
    progressValue: 64,
    img: imageProgram
  },
  {
    id: 'donasi-6',
    category: 'lainnya',
    title: 'Wakaf Pembangunan Rumah Tahfidz Qur\'an dan Sarana Ibadah',
    collected: 'Rp 210.000.000',
    sisaHari: 200,
    progress: '42%',
    progressValue: 42,
    img: imageCard
  }
];

const qurbanPackagesData = [
  {
    id: 'qurban-1',
    category: 'kambing',
    title: 'Qurban Kambing di Uganda Afrika Selatan',
    originalPrice: 'Rp.1.550.000',
    discount: '20%',
    price: 'Rp 1.350.000',
    location: 'Uganda UG Afrika',
    donors: '3 Orang',
    img: imageQurban
  },
  {
    id: 'qurban-2',
    category: 'kambing',
    title: 'Qurban Kambing di Uganda Afrika Selatan',
    originalPrice: 'Rp.1.550.000',
    discount: '20%',
    price: 'Rp 1.350.000',
    location: 'Uganda UG Afrika',
    donors: '3 Orang',
    img: imageQurban
  },
  {
    id: 'qurban-3',
    category: 'kambing',
    title: 'Qurban Kambing di Uganda Afrika Selatan',
    originalPrice: 'Rp.1.550.000',
    discount: '20%',
    price: 'Rp 1.350.000',
    location: 'Uganda UG Afrika',
    donors: '3 Orang',
    img: imageQurban
  }
];

const mengapaQurbanFeatures = [
  {
    id: 'feat-1',
    title: 'Akad Jelas',
    desc: 'Menggunakan akad wakalah, Pequrban mewakilkan kepada pihak pengelola Baitulmaal Muamalat untuk membeli, mengurus, mengelola dan menyalurkan hewan Qurban',
    icon: iconAkad
  },
  {
    id: 'feat-2',
    title: 'Penerima Manfaat',
    desc: 'Masyarakat dhuafa, muallaf dan warga binaan dari mitra lokal Baitulmaal Muamalat.',
    icon: iconPenerimaManfaat
  },
  {
    id: 'feat-3',
    title: 'Harga Terjangkau',
    desc: 'Harga hewan qurban murah dengan kualitas daging yang baik.',
    icon: iconHarga
  },
  {
    id: 'feat-4',
    title: 'Kaya Manfaat',
    desc: 'Memberi banyak manfaat kepada seluruh asia untuk kebahagiaan bersama.',
    icon: iconKayaManfaat
  },
  {
    id: 'feat-5',
    title: 'Live Report',
    desc: 'Saat distribusi hewan qurban, sahibulqurban akan mendapatkan live report berupa foto dan video saat penyembelihan hewan.',
    icon: iconLiveReport
  },
  {
    id: 'feat-6',
    title: 'Tepat Sasaran',
    desc: 'Hasil qurban telah dipilih sesuai dengan kebutuhan agar lebih tepat sasaran.',
    icon: iconTepatSasaran
  }
];

const prosesQurbanStepsData = [
  {
    id: 'step-1',
    title: 'Pilih Hewan Qurban',
    desc: 'Nikmati layanan dan pendampingan khusus yang memberikan kemudahan bagi Sahabat BMM dalam menyalurkan ZISWAF secara lebih nyaman dan terarah.',
    icon: iconPilihQurban
  },
  {
    id: 'step-2',
    title: 'Lengkapi Data Qurban',
    desc: 'Isi nama pekurban, kontak, jumlah hewan atau bagian Qurban, serta nama yang akan dicantumkan dalam doa atau laporan Qurban.',
    icon: iconPilihQurban
  },
  {
    id: 'step-3',
    title: 'Lakukan Pembayaran',
    desc: 'Periksa ringkasan pesanan, nominal pembayaran, dan metode pembayaran sebelum menyelesaikan transaksi.',
    icon: iconLengkapiQurban
  },
  {
    id: 'step-4',
    title: 'Qurban Dilaksanakan',
    desc: 'BMM mengelola pelaksanaan Qurban dan penyaluran daging kepada penerima manfaat. Pekurban memperoleh konfirmasi dan informasi dokumentasi sesuai layanan yang tersedia.',
    icon: iconLengkapiQurban
  }
];

const donasiGridCategoriesList = [
  { id: 'semua', label: 'Semua', icon: iconGridElementPlus },
  { id: 'bencana', label: 'Bencana', icon: iconGridBencana },
  { id: 'pendidikan', label: 'Pendidikan', icon: iconGridPendidikan },
  { id: 'zakat', label: 'Zakat', icon: iconGridZakat },
  { id: 'kemanusiaan', label: 'Kemanusiaan', icon: iconGridKemanusiaan },
  { id: 'lainnya', label: 'Lainnya', icon: iconGridLainnya }
];

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const searchRef = useRef(null);

  // Hero Slider State (Autoplay 5.5s, pause on hover, manual indicator navigation)
  const heroSlides = [
    {
      id: 1,
      image: donasiHeroImg,
      alt: 'Sucikan Harta dan Jiwa — Tunaikan Zakat Maal Hanya 2,5%'
    },
    {
      id: 2,
      image: heroSlide2Img,
      alt: 'Kemitraan Kebaikan — Sinergi Bersama Baitulmaal Muamalat'
    },
    {
      id: 3,
      image: heroSlide3Img,
      alt: 'Zakat dan Sedekah Membuka Pintu Keberkahan'
    },
    {
      id: 4,
      image: imageHero,
      alt: 'Baitulmaal Muamalat — Mengalirkan Kebaikan untuk Ummat'
    }
  ];

  const [heroActiveIndex, setHeroActiveIndex] = useState(0);
  const [heroIsPaused, setHeroIsPaused] = useState(false);
  const [heroIsDragging, setHeroIsDragging] = useState(false);
  const [heroDragOffset, setHeroDragOffset] = useState(0);
  const heroDragStartXRef = useRef(0);
  const heroIsDraggingRef = useRef(false);

  useEffect(() => {
    if (heroIsPaused || heroIsDragging) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setHeroActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [heroIsPaused, heroIsDragging, heroSlides.length]);

  const handleHeroPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    if (e.target.closest('.donasi-hero-notch')) return;

    heroDragStartXRef.current = e.clientX;
    heroIsDraggingRef.current = true;
    setHeroIsDragging(true);
    setHeroDragOffset(0);
    setHeroIsPaused(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
  };

  const handleHeroPointerMove = (e) => {
    if (!heroIsDraggingRef.current) return;
    const diff = e.clientX - heroDragStartXRef.current;
    let offset = diff;
    if (
      (heroActiveIndex === 0 && diff > 0) ||
      (heroActiveIndex === heroSlides.length - 1 && diff < 0)
    ) {
      offset = diff * 0.4;
    }
    setHeroDragOffset(offset);
  };

  const handleHeroPointerUp = (e) => {
    if (!heroIsDraggingRef.current) return;
    heroIsDraggingRef.current = false;
    setHeroIsDragging(false);
    setHeroIsPaused(false);

    const diff = e.clientX - heroDragStartXRef.current;
    const threshold = 50;

    if (diff < -threshold) {
      setHeroActiveIndex((prev) => (prev + 1) % heroSlides.length);
    } else if (diff > threshold) {
      setHeroActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }
    setHeroDragOffset(0);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore
    }
  };

  const handleHeroPointerCancel = () => {
    if (!heroIsDraggingRef.current) return;
    heroIsDraggingRef.current = false;
    setHeroIsDragging(false);
    setHeroIsPaused(false);
    setHeroDragOffset(0);
  };

  // Program Pilihan Slider State (Sync cards track & progress fill)
  const [programSlideIndex, setProgramSlideIndex] = useState(0);
  const maxProgramSlideIndex = 2;

  const handleProgramPrev = () => {
    setProgramSlideIndex((prev) => Math.max(0, prev - 1));
  };

  const handleProgramNext = () => {
    setProgramSlideIndex((prev) => Math.min(maxProgramSlideIndex, prev + 1));
  };


  // Close search popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [searchOpen]);

  // =========================================================================
  // BATCH 2 COMPONENT STATE & HANDLERS
  // =========================================================================

  // Window width tracking for responsive carousel counts
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1366
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Group A: Donasi Pilihan Carousel State ---
  const [donasiCarouselIndex, setDonasiCarouselIndex] = useState(0);
  const [donasiDragOffset, setDonasiDragOffset] = useState(0);
  const donasiIsDraggingRef = useRef(false);
  const donasiDragStartXRef = useRef(0);
  const donasiTrackRef = useRef(null);

  const visibleDonasiCards = windowWidth < 640 ? 1 : windowWidth < 992 ? 2 : 3;
  const maxDonasiIndex = Math.max(0, donasiPilihanPrograms.length - visibleDonasiCards);

  const handleDonasiPrev = () => {
    setDonasiCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleDonasiNext = () => {
    setDonasiCarouselIndex((prev) => Math.min(maxDonasiIndex, prev + 1));
  };

  const handleDonasiPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    donasiDragStartXRef.current = e.clientX;
    donasiIsDraggingRef.current = true;
    setDonasiDragOffset(0);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
  };

  const handleDonasiPointerMove = (e) => {
    if (!donasiIsDraggingRef.current) return;
    const diff = e.clientX - donasiDragStartXRef.current;
    let offset = diff;
    if (
      (donasiCarouselIndex === 0 && diff > 0) ||
      (donasiCarouselIndex === maxDonasiIndex && diff < 0)
    ) {
      offset = diff * 0.35;
    }
    setDonasiDragOffset(offset);
  };

  const handleDonasiPointerUp = (e) => {
    if (!donasiIsDraggingRef.current) return;
    donasiIsDraggingRef.current = false;
    const diff = e.clientX - donasiDragStartXRef.current;
    const threshold = 45;

    if (diff < -threshold) {
      setDonasiCarouselIndex((prev) => Math.min(maxDonasiIndex, prev + 1));
    } else if (diff > threshold) {
      setDonasiCarouselIndex((prev) => Math.max(0, prev - 1));
    }
    setDonasiDragOffset(0);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore
    }
  };

  const handleDonasiPointerCancel = () => {
    if (!donasiIsDraggingRef.current) return;
    donasiIsDraggingRef.current = false;
    setDonasiDragOffset(0);
  };

  // --- Group B.1: Qurban Tebar Kebahagiaan State ---
  const [activeQurbanFilter, setActiveQurbanFilter] = useState('semua');
  const [qurbanCarouselIndex, setQurbanCarouselIndex] = useState(0);
  const [qurbanDragOffset, setQurbanDragOffset] = useState(0);
  const qurbanIsDraggingRef = useRef(false);
  const qurbanDragStartXRef = useRef(0);
  const qurbanTrackRef = useRef(null);

  const filteredQurban = activeQurbanFilter === 'semua'
    ? qurbanPackagesData
    : qurbanPackagesData.filter((item) => item.category === activeQurbanFilter);

  const visibleQurbanCards = windowWidth < 640 ? 1 : windowWidth < 992 ? 2 : 3;
  const maxQurbanIndex = Math.max(0, filteredQurban.length - visibleQurbanCards);

  const handleQurbanFilterChange = (cat) => {
    setActiveQurbanFilter(cat);
    setQurbanCarouselIndex(0);
    setQurbanDragOffset(0);
  };

  const handleQurbanPrev = () => {
    setQurbanCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleQurbanNext = () => {
    setQurbanCarouselIndex((prev) => Math.min(maxQurbanIndex, prev + 1));
  };

  const handleQurbanPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    qurbanDragStartXRef.current = e.clientX;
    qurbanIsDraggingRef.current = true;
    setQurbanDragOffset(0);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
  };

  const handleQurbanPointerMove = (e) => {
    if (!qurbanIsDraggingRef.current) return;
    const diff = e.clientX - qurbanDragStartXRef.current;
    let offset = diff;
    if (
      (qurbanCarouselIndex === 0 && diff > 0) ||
      (qurbanCarouselIndex === maxQurbanIndex && diff < 0)
    ) {
      offset = diff * 0.35;
    }
    setQurbanDragOffset(offset);
  };

  const handleQurbanPointerUp = (e) => {
    if (!qurbanIsDraggingRef.current) return;
    qurbanIsDraggingRef.current = false;
    const diff = e.clientX - qurbanDragStartXRef.current;
    const threshold = 45;

    if (diff < -threshold) {
      setQurbanCarouselIndex((prev) => Math.min(maxQurbanIndex, prev + 1));
    } else if (diff > threshold) {
      setQurbanCarouselIndex((prev) => Math.max(0, prev - 1));
    }
    setQurbanDragOffset(0);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore
    }
  };

  const handleQurbanPointerCancel = () => {
    if (!qurbanIsDraggingRef.current) return;
    qurbanIsDraggingRef.current = false;
    setQurbanDragOffset(0);
  };

  // --- Group C: Donasi Pilihan Grid State ---
  const [activeGridCategory, setActiveGridCategory] = useState('semua');

  const filteredGridPrograms = activeGridCategory === 'semua'
    ? donasiPilihanPrograms
    : donasiPilihanPrograms.filter((item) => item.category === activeGridCategory);

  // Card click navigation handler
  const handleDonasiCardClick = () => {
    if (Math.abs(donasiDragOffset) > 8) return;
    window.location.assign('#donasi-pilihan');
  };

  const handleQurbanCardClick = () => {
    if (Math.abs(qurbanDragOffset) > 8) return;
    window.location.assign('#qurban');
  };

  return (
    <div className="app-container">
      {/* 1. NAVBAR / HEADER (CONTAINED 1366px INNER CONTENT) */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="header-left-group">
            <a href="#" className="header-logo">
              <img src={donasiLogoWhite} alt="Baitulmaal Muamalat Logo" />
            </a>

            <nav className="header-nav desktop-only">
              <a href="#program" className="nav-link">Program</a>
              <a href="#donasi" className="nav-link">Donasi</a>
              <a href="#kajian" className="nav-link">Kajian</a>
              <a href="#berita" className="nav-link">Berita</a>
              <a href="#tentang" className="nav-link">Tentang Kami</a>
            </nav>
          </div>

          <div className="header-actions-group" ref={searchRef}>
            <button
              className="search-trigger-btn desktop-only"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Cari"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            <button className="nav-flag-btn desktop-only" aria-label="Bahasa Indonesia">
              <img src={iconIndonesia} alt="Bahasa Indonesia" className="nav-flag-icon" />
            </button>

            <a href="#masuk" className="btn-masuk-outline desktop-only">Masuk</a>

            {/* Popover Search Panel */}
            <div className={`search-popover ${searchOpen ? 'open' : ''}`}>
              <div className="search-popover-content">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder="Cari..." autoFocus={searchOpen} />
                <button className="search-popover-close" onClick={() => setSearchOpen(false)} aria-label="Close search">
                  &times;
                </button>
              </div>
            </div>

            <button className="mobile-search-btn mobile-only" onClick={() => setSearchOpen(!searchOpen)} aria-label="Cari">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            <button
              className="mobile-menu-btn mobile-only"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Buka Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <img src={logoSm} alt="BMM Logo" className="mobile-menu-logo" />
              <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label="Tutup Menu">&times;</button>
            </div>
            <nav className="mobile-nav-links">
              <a href="#program" onClick={() => setMobileMenuOpen(false)}>Program</a>
              <a href="#donasi" onClick={() => setMobileMenuOpen(false)}>Donasi</a>
              <a href="#kajian" onClick={() => setMobileMenuOpen(false)}>Kajian</a>
              <a href="#berita" onClick={() => setMobileMenuOpen(false)}>Berita</a>
              <a href="#tentang" onClick={() => setMobileMenuOpen(false)}>Tentang Kami</a>
              <a href="#masuk" className="btn btn-outline" style={{ marginTop: '16px', justifyContent: 'center' }} onClick={() => setMobileMenuOpen(false)}>Masuk</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* 2. HERO SECTION — DONASI LANDINGPAGE */}
        <section
          className={`donasi-hero-section ${heroIsDragging ? 'is-dragging' : ''}`}
          id="hero"
          onMouseEnter={() => setHeroIsPaused(true)}
          onMouseLeave={() => {
            if (!heroIsDraggingRef.current) setHeroIsPaused(false);
          }}
          onPointerDown={handleHeroPointerDown}
          onPointerMove={handleHeroPointerMove}
          onPointerUp={handleHeroPointerUp}
          onPointerCancel={handleHeroPointerCancel}
        >
          <div className="donasi-hero-bg-wrapper">
            <div
              className="donasi-hero-track"
              style={{
                transform: `translateX(calc(-${heroActiveIndex * 100}% + ${heroDragOffset}px))`,
                transition: heroIsDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {heroSlides.map((slide, idx) => (
                <div key={slide.id} className="donasi-hero-slide-item">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="donasi-hero-bg-img"
                    draggable="false"
                    fetchPriority={idx === 0 ? "high" : "auto"}
                  />
                </div>
              ))}
            </div>
            <div className="donasi-hero-gradient-overlay" />
          </div>

          <div className="visually-hidden">
            <h1>Sucikan Harta dan Jiwa</h1>
            <p>Tunaikan Zakat Maal Hanya 2,5%</p>
            <blockquote>
              &ldquo;Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka...&rdquo;
              <cite>QS. At Taubah: 103</cite>
            </blockquote>
          </div>

          {/* Hero Bottom Notch with Carousel Indicators */}
          <div
            className="donasi-hero-notch"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={idx === heroActiveIndex ? 'donasi-dot-pill active' : 'donasi-dot-circle'}
                onClick={() => setHeroActiveIndex(idx)}
                aria-label={`Slide ${idx + 1}${idx === heroActiveIndex ? ' (Aktif)' : ''}`}
              />
            ))}
          </div>
        </section>

        {/* 3. IMPACT STATS SECTION */}
        <section className="impact-stats-section" aria-label="Statistik Dampak Kebaikan">
          <div className="impact-stats-grid">
            <div className="impact-stat-item">
              <div className="impact-stat-icon-wrapper">
                <img src={iconPenerima} alt="" aria-hidden="true" />
              </div>
              <div className="impact-stat-info">
                <span className="impact-stat-label">Penerima Manfaat</span>
                <span className="impact-stat-value">480 Penerima</span>
              </div>
            </div>

            <div className="impact-stat-item">
              <div className="impact-stat-icon-wrapper">
                <img src={iconDonatur} alt="" aria-hidden="true" />
              </div>
              <div className="impact-stat-info">
                <span className="impact-stat-label">Total Donatur</span>
                <span className="impact-stat-value">320 Donatur</span>
              </div>
            </div>

            <div className="impact-stat-item">
              <div className="impact-stat-icon-wrapper">
                <img src={iconProgram} alt="" aria-hidden="true" />
              </div>
              <div className="impact-stat-info">
                <span className="impact-stat-label">Total Program</span>
                <span className="impact-stat-value">123 Program</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROGRAM PILIHAN SECTION */}
        <section className="program-pilihan-section" id="program">
          <img src={decorationKiri} alt="" className="program-pilihan-decor-left" aria-hidden="true" />
          <div className="container">
            <div className="section-header">
              <div className="salurkan-tag" style={{ justifyContent: 'center' }}>
                <span>✦</span> PROGRAM
              </div>
              <h2 className="section-title">
                Program Pilihan <br />
                <span className="text-gradient-primary">Baitulmaal Muamalat</span>
              </h2>
              <p className="section-subtitle">
                Beragam program kebaikan untuk memberdayakan masyarakat dan menghadirkan manfaat yang berkelanjutan bagi umat.
              </p>
            </div>

            <div className="program-collage-wrapper">
              <div className="program-collage-row-top">
                <div className="program-collage-card">
                  <img src={donasiProgramImg} alt="Sosial Dakwah & Pendidikan" className="program-collage-card-img" />
                  <div className="program-collage-card-overlay">
                    <h3 className="program-card-title-lg">Sosial Dakwah &amp; Pendidikan</h3>
                    <p className="program-card-desc-lg">
                      Memastikan pendidikan yang inklusif dan berkualitas setara, serta mendukung kesempatan belajar seumur hidup bagi santri dan anak dhuafa.
                    </p>
                  </div>
                  <div className="program-collage-card-badge-btn" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="program-collage-card">
                  <img src={imageKegiatan} alt="Kemanusiaan & Bencana" className="program-collage-card-img" />
                  <div className="program-collage-card-overlay">
                    <h3 className="program-card-title-lg">Kemanusiaan &amp; Bencana</h3>
                    <p className="program-card-desc-lg">
                      Respon tanggap darurat, evakuasi, dan distribusi bantuan logistik medis bagi penyintas bencana di seluruh pelosok negeri.
                    </p>
                  </div>
                </div>
              </div>

              <div className="program-collage-row-bottom">
                <div className="program-collage-card">
                  <img src={imageCard} alt="Pemberdayaan Ekonomi Ummat" className="program-collage-card-img" />
                  <div className="program-collage-card-overlay">
                    <h3 className="program-card-title-lg">Pemberdayaan Ekonomi Ummat</h3>
                    <p className="program-card-desc-lg">
                      Bantuan modal usaha mikro, pelatihan kejuruan, dan pendampingan kemandirian bagi keluarga prasejahtera.
                    </p>
                  </div>
                </div>

                <div className="program-collage-card">
                  <img src={heroSlide2Img} alt="Kemitraan Kebaikan" className="program-collage-card-img" />
                  <div className="program-collage-card-overlay">
                    <h3 className="program-card-title-lg">Kemitraan Kebaikan</h3>
                    <p className="program-card-desc-lg">
                      Kolaborasi strategis dengan berbagai institusi dan korporasi guna memperluas jangkauan manfaat program sosial.
                    </p>
                  </div>
                </div>

                <div className="program-collage-card">
                  <img src={imageProgram} alt="Advokasi & Dakwah" className="program-collage-card-img" />
                  <div className="program-collage-card-overlay">
                    <h3 className="program-card-title-lg">Advokasi &amp; Dakwah</h3>
                    <p className="program-card-desc-lg">
                      Syiar literasi zakat dan penguatan dakwah Islamiyah di daerah terdepan, terluar, dan tertinggal (3T).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="program-slider-nav-bar">
              <button
                className="program-nav-btn"
                onClick={handleProgramPrev}
                disabled={programSlideIndex === 0}
                aria-label="Sebelumnya"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <div className="program-nav-track">
                <div
                  className="program-nav-track-fill"
                  style={{
                    left: `${programSlideIndex === 0 ? 0 : programSlideIndex === 1 ? 41 : 81.5}%`
                  }}
                />
              </div>
              <button
                className="program-nav-btn"
                onClick={handleProgramNext}
                disabled={programSlideIndex === maxProgramSlideIndex}
                aria-label="Selanjutnya"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

            <div className="program-center-btn-wrapper">
              <a href="#program" className="btn-lihat-semua">
                <span className="btn-circle-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <span>Lihat Semua</span>
              </a>
            </div>
          </div>
        </section>

        {/* 5. SALURKAN KEBAIKAN BANNER SECTION */}
        <section className="salurkan-section" id="salurkan">
          <div className="container">
            <div className="salurkan-banner">
              <div className="salurkan-illustration-col">
                <div className="salurkan-card-frame">
                  <img src={bgSalurkan} alt="" className="salurkan-frame-bg" aria-hidden="true" />
                  <img src={imageSalurkan} alt="Ilustrasi Salurkan Kebaikan" className="salurkan-main-img" />
                </div>
              </div>

              <div className="salurkan-content-col">
                <div className="salurkan-tag">
                  <span>✦</span> SALURKAN KEBAIKAN
                </div>
                <h2 className="salurkan-title">
                  Yuk Mulai <br />
                  Buat Kebaikan
                </h2>
                <p className="salurkan-subtitle">
                  Bersama Baitulmaal Muamalat (BMM) berbagi <br className="salurkan-break" />
                  kebaikan dan sebar senyuman.
                </p>

                <div className="salurkan-actions">
                  <a href="#donasi" className="salurkan-action-item">
                    <div className="salurkan-action-icon">
                      <img src={iconZakat3D} alt="Zakat" />
                    </div>
                    <span className="salurkan-action-label">Zakat</span>
                  </a>

                  <a href="#donasi" className="salurkan-action-item">
                    <div className="salurkan-action-icon">
                      <img src={iconDonate3D} alt="Infaq" />
                    </div>
                    <span className="salurkan-action-label">Infaq</span>
                  </a>

                  <a href="#donasi" className="salurkan-action-item">
                    <div className="salurkan-action-icon">
                      <img src={iconDonate3D} alt="Sedekah" />
                    </div>
                    <span className="salurkan-action-label">Sedekah</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BATCH 2 - BAGIAN A: DONASI PILIHAN CAROUSEL */}
        {/* ========================================================================= */}
        <section className="donasi-carousel-section" id="donasi-pilihan">
          <img src={decorationKanan} alt="" className="donasi-decor-right" aria-hidden="true" />

          <div className="container">
            <div className="batch2-section-header">
              <div className="batch2-section-tag">
                <span>✦</span> DONASI PILIHAN
              </div>
              <h2 className="batch2-section-title">
                Donasi Pilihan <br />
                <span className="text-purple">Baitulmaal Muamalat</span>
              </h2>
              <p className="batch2-section-subtitle">
                Pilih dan salurkan dukungan Anda melalui berbagai program terbaik yang menghadirkan banyak manfaat.
              </p>
            </div>

            <div
              className="donasi-carousel-viewport"
              onPointerDown={handleDonasiPointerDown}
              onPointerMove={handleDonasiPointerMove}
              onPointerUp={handleDonasiPointerUp}
              onPointerCancel={handleDonasiPointerCancel}
            >
              <div
                className="donasi-carousel-track"
                ref={donasiTrackRef}
                style={{
                  transform: `translateX(calc(-${donasiCarouselIndex} * (var(--donasi-card-width) + var(--donasi-card-gap)) + ${donasiDragOffset}px))`
                }}
              >
                {donasiPilihanPrograms.map((item) => (
                  <div
                    className="bmm-donasi-card"
                    key={item.id}
                    onClick={() => handleDonasiCardClick(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleDonasiCardClick(item);
                      }
                    }}
                  >
                    <div className="bmm-donasi-card-media">
                      <img src={item.img} alt={item.title} className="bmm-donasi-card-img" />
                    </div>
                    <div className="bmm-donasi-card-body">
                      <h3 className="bmm-donasi-card-title">{item.title}</h3>
                      <div className="bmm-donasi-card-stats">
                        <div className="bmm-donasi-stat-left">
                          <span className="bmm-donasi-stat-label">Dana Terkumpul</span>
                          <span className="bmm-donasi-stat-val">{item.collected}</span>
                        </div>
                        <div className="bmm-donasi-stat-right">
                          <span className="bmm-donasi-stat-label">Sisa Hari</span>
                          <span className="bmm-donasi-stat-val">
                            <img src={iconDonasiTime} alt="" className="bmm-donasi-time-icon" aria-hidden="true" />
                            {item.sisaHari} Hari
                          </span>
                        </div>
                      </div>
                      <div className="bmm-donasi-progress-bar">
                        <div
                          className="bmm-donasi-progress-fill"
                          style={{ width: `${Math.min(100, Math.max(0, item.progressValue))}%` }}
                        >
                          <span className="bmm-donasi-progress-thumb" aria-hidden="true"></span>
                          <div className="bmm-donasi-progress-badge">
                            {item.progress}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="batch2-slider-controls">
              <button
                className="batch2-nav-btn"
                onClick={handleDonasiPrev}
                disabled={donasiCarouselIndex === 0}
                aria-label="Sebelumnya"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <div className="batch2-nav-track">
                <div
                  className="batch2-nav-track-fill"
                  style={{
                    width: `${maxDonasiIndex === 0 ? 100 : Math.max(18, 100 / (maxDonasiIndex + 1))}%`,
                    left: `${maxDonasiIndex === 0 ? 0 : (donasiCarouselIndex / maxDonasiIndex) * (100 - (maxDonasiIndex === 0 ? 100 : Math.max(18, 100 / (maxDonasiIndex + 1))))}%`
                  }}
                />
              </div>
              <button
                className="batch2-nav-btn"
                onClick={handleDonasiNext}
                disabled={donasiCarouselIndex === maxDonasiIndex}
                aria-label="Selanjutnya"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

            <div className="batch2-center-btn-wrapper">
              <a href="#donasi" className="btn-lihat-semua">
                <span className="btn-circle-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <span>Lihat Semua</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BATCH 2 - BAGIAN B.1: QURBAN TEBAR KEBAHAGIAAN */}
        {/* ========================================================================= */}
        <section className="qurban-tebar-section" id="qurban">
          <img src={decorationKiri} alt="" className="qurban-decor-left" aria-hidden="true" />

          <div className="container">
            <div className="batch2-section-header">
              <div className="batch2-section-tag">
                <span>✦</span> QURBAN TEBAR KEBAHAGIAAN
              </div>
              <h2 className="batch2-section-title">
                Tunaikan Qurban, <br />
                <span className="text-purple">Tebarkan Kebahagiaan</span>
              </h2>
              <p className="batch2-section-subtitle">
                Jadikan momen Idul Adha lebih bermakna dengan berbagi daging qurban kepada saudara-saudara kita yang membutuhkan. Salurkan qurban melalui lembaga terpercaya agar manfaatnya menjangkau lebih banyak sesama.
              </p>

              {/* Filter Tabs */}
              <div className="qurban-filter-pill-box">
                <button
                  className={`qurban-filter-btn ${activeQurbanFilter === 'semua' ? 'active' : ''}`}
                  onClick={() => handleQurbanFilterChange('semua')}
                >
                  <img src={iconElementPlus} alt="" className="qurban-filter-icon" />
                  <span>Semua</span>
                </button>
                <button
                  className={`qurban-filter-btn ${activeQurbanFilter === 'sapi' ? 'active' : ''}`}
                  onClick={() => handleQurbanFilterChange('sapi')}
                >
                  <img src={iconCow} alt="" className="qurban-filter-icon" />
                  <span>Sapi</span>
                </button>
                <button
                  className={`qurban-filter-btn ${activeQurbanFilter === 'kambing' ? 'active' : ''}`}
                  onClick={() => handleQurbanFilterChange('kambing')}
                >
                  <img src={iconGoat} alt="" className="qurban-filter-icon" />
                  <span>Kambing</span>
                </button>
              </div>
            </div>

            {filteredQurban.length > 0 ? (
              <>
                <div
                  className="donasi-carousel-viewport"
                  onPointerDown={handleQurbanPointerDown}
                  onPointerMove={handleQurbanPointerMove}
                  onPointerUp={handleQurbanPointerUp}
                  onPointerCancel={handleQurbanPointerCancel}
                >
                  <div
                    className="donasi-carousel-track"
                    ref={qurbanTrackRef}
                    style={{
                      transform: `translateX(calc(-${qurbanCarouselIndex} * (var(--donasi-card-width) + var(--donasi-card-gap)) + ${qurbanDragOffset}px))`
                    }}
                  >
                    {filteredQurban.map((item) => (
                      <div
                        className="qurban-card"
                        key={item.id}
                        onClick={handleQurbanCardClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleQurbanCardClick();
                          }
                        }}
                      >
                        <div className="qurban-card-media">
                          <img src={item.img} alt={item.title} className="qurban-card-img" />
                        </div>
                        <div className="qurban-card-body">
                          <h3 className="qurban-card-title">{item.title}</h3>

                          <div className="qurban-price-block">
                            <div className="qurban-price-row-top">
                              <span>Mulai Dari</span>
                              <span className="qurban-old-price">{item.originalPrice}</span>
                              <span className="qurban-discount-badge">{item.discount}</span>
                            </div>
                            <div className="qurban-current-price">{item.price}</div>
                          </div>

                          <div className="qurban-meta-block">
                            <div className="qurban-meta-col">
                              <span className="qurban-meta-label">Lokasi Qurban</span>
                              <span className="qurban-meta-val">
                                <img src={iconGeoLocation} alt="" className="qurban-meta-icon" />
                                {item.location}
                              </span>
                            </div>
                            <div className="qurban-meta-col text-right">
                              <span className="qurban-meta-label">Jumlah Pequrban</span>
                              <span className="qurban-meta-val">
                                <img src={iconDonaturQurban} alt="" className="qurban-meta-icon" />
                                {item.donors}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="batch2-slider-controls">
                  <button
                    className="batch2-nav-btn"
                    onClick={handleQurbanPrev}
                    disabled={qurbanCarouselIndex === 0}
                    aria-label="Sebelumnya"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <div className="batch2-nav-track">
                    <div
                      className="batch2-nav-track-fill"
                      style={{
                        width: `${maxQurbanIndex === 0 ? 100 : Math.max(18, 100 / (maxQurbanIndex + 1))}%`,
                        left: `${maxQurbanIndex === 0 ? 0 : (qurbanCarouselIndex / maxQurbanIndex) * (100 - (maxQurbanIndex === 0 ? 100 : Math.max(18, 100 / (maxQurbanIndex + 1))))}%`
                      }}
                    />
                  </div>
                  <button
                    className="batch2-nav-btn"
                    onClick={handleQurbanNext}
                    disabled={qurbanCarouselIndex === maxQurbanIndex}
                    aria-label="Selanjutnya"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <div className="qurban-empty-state">
                <p>Belum ada paket Qurban {activeQurbanFilter} yang tersedia saat ini.</p>
              </div>
            )}

            <div className="batch2-center-btn-wrapper">
              <a href="#qurban" className="btn-lihat-semua">
                <span className="btn-circle-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <span>Lihat Semua</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BATCH 2 - BAGIAN B.2: MENGAPA QURBAN DI BAITULMAAL MUAMALAT */}
        {/* ========================================================================= */}
        <section className="mengapa-qurban-section" id="mengapa-qurban">
          <img src={decorationKanan} alt="" className="mengapa-decor-right" aria-hidden="true" />

          <div className="container">
            <div className="batch2-section-header">
              <div className="batch2-section-tag">
                <span>✦</span> KENAPA
              </div>
              <h2 className="batch2-section-title">
                Mengapa Qurban <br />
                <span className="text-purple">di Baitulmaal Muamalat?</span>
              </h2>
              <p className="batch2-section-subtitle">
                Tunaikan ibadah qurban dengan tenang dan penuh makna. Bersama Baitulmaal, hadirkan penyaluran qurban yang amanah agar manfaatnya menjangkau lebih banyak saudara yang membutuhkan.
              </p>
            </div>

            <div className="mengapa-qurban-grid">
              {mengapaQurbanFeatures.map((feat) => (
                <div className="mengapa-qurban-card" key={feat.id}>
                  <div className="mengapa-card-icon-wrap">
                    <img src={feat.icon} alt={feat.title} className="mengapa-card-icon" />
                  </div>
                  <h3 className="mengapa-card-title">{feat.title}</h3>
                  <p className="mengapa-card-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BATCH 2 - BAGIAN B.3: BAGAIMANA PROSES QURBAN DI BMM */}
        {/* ========================================================================= */}
        <section className="proses-qurban-section" id="proses-qurban">

          <div className="container">
            <div className="proses-qurban-layout">
              {/* Left Column */}
              <div className="proses-qurban-left-col">
                <div className="batch2-section-tag">
                  <span>✦</span> PROSES QURBAN
                </div>
                <h2 className="proses-qurban-title">
                  Bagaimana <br />
                  <span className="text-purple">Proses Qurban</span> <br />
                  di BMM?
                </h2>
                <p className="proses-qurban-desc">
                  Berqurban bersama BMM kini lebih mudah dan praktis. Ikuti langkah-langkahnya, mulai dari memilih hewan qurban hingga penyaluran kepada penerima manfaat, dengan amanah dan penuh keberkahan.
                </p>

                <div className="proses-qurban-badges">
                  <span className="proses-badge-item">Mudah</span>
                  <span className="proses-badge-item">Transparant</span>
                  <span className="proses-badge-item">Berdampak</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="proses-qurban-right-col">
                <img src={dekorGarisProsesQurban} alt="" className="proses-decor-line" aria-hidden="true" />
                <div className="proses-steps-container">
                  {prosesQurbanStepsData.map((step) => (
                    <div className="proses-step-item" key={step.id}>
                      <div className="proses-step-header">
                        <img src={step.icon} alt={step.title} className="proses-step-img" />
                        <h3 className="proses-step-title">{step.title}</h3>
                      </div>
                      <p className="proses-step-desc">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BATCH 2 - BAGIAN C: DONASI PILIHAN GRID */}
        {/* ========================================================================= */}
        <section className="donasi-grid-section" id="donasi-grid">
          <img src={decorationKiri} alt="" className="donasi-grid-decor-left" aria-hidden="true" />

          <div className="container">
            <div className="batch2-section-header">
              <div className="batch2-section-tag">
                <span>✦</span> DONASI PILIHAN
              </div>
              <h2 className="batch2-section-title">
                Donasi Pilihan <br />
                <span className="text-purple">Baitulmaal Muamalat</span>
              </h2>
              <p className="batch2-section-subtitle">
                Pilih dan salurkan dukungan Anda melalui berbagai program terbaik yang menghadirkan banyak manfaat.
              </p>

              {/* 6 Category Filters */}
              <div className="donasi-grid-filter-box">
                {donasiGridCategoriesList.map((cat) => (
                  <button
                    key={cat.id}
                    className={`donasi-grid-filter-btn ${activeGridCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveGridCategory(cat.id)}
                  >
                    <img src={cat.icon} alt="" className="donasi-grid-filter-icon" />
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="donasi-cards-grid">
              {filteredGridPrograms.map((item) => (
                <div
                  className="bmm-donasi-card"
                  key={`grid-${item.id}`}
                  onClick={() => handleDonasiCardClick(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleDonasiCardClick(item);
                    }
                  }}
                >
                  <div className="bmm-donasi-card-media">
                    <img src={item.img} alt={item.title} className="bmm-donasi-card-img" />
                  </div>
                  <div className="bmm-donasi-card-body">
                    <h3 className="bmm-donasi-card-title">{item.title}</h3>
                    <div className="bmm-donasi-card-stats">
                      <div className="bmm-donasi-stat-left">
                        <span className="bmm-donasi-stat-label">Dana Terkumpul</span>
                        <span className="bmm-donasi-stat-val">{item.collected}</span>
                      </div>
                      <div className="bmm-donasi-stat-right">
                        <span className="bmm-donasi-stat-label">Sisa Hari</span>
                        <span className="bmm-donasi-stat-val">
                          <img src={iconDonasiTime} alt="" className="bmm-donasi-time-icon" aria-hidden="true" />
                          {item.sisaHari} Hari
                        </span>
                      </div>
                    </div>
                    <div className="bmm-donasi-progress-bar">
                      <div
                        className="bmm-donasi-progress-fill"
                        style={{ width: `${Math.min(100, Math.max(0, item.progressValue))}%` }}
                      >
                        <span className="bmm-donasi-progress-thumb" aria-hidden="true"></span>
                        <div className="bmm-donasi-progress-badge">
                          {item.progress}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="batch2-center-btn-wrapper">
              <a href="#donasi" className="btn-lihat-semua">
                <span className="btn-circle-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <span>Lihat Semua</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BATCH 3 - SECTION 1: BERITA TERBARU */}
        {/* ========================================================================= */}
        <section className="batch3-berita-section" id="berita">
          <div className="container">
            <div className="batch3-berita-header">
              <div className="batch3-berita-header-left">
                <div className="batch2-section-tag">
                  <span>✦</span> BERITA
                </div>
                <h2 className="batch3-berita-title">
                  Berita <span className="text-purple">Terbaru</span>
                </h2>
              </div>
              <a href="#berita" className="btn-lihat-semua">
                <span className="btn-circle-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <span>Lihat Semua</span>
              </a>
            </div>

            <div className="batch3-berita-grid">
              {/* Main Featured Card */}
              <div className="batch3-berita-card batch3-berita-card-main">
                <img src={newsItems[0].img} alt={newsItems[0].title} className="batch3-berita-img" />
                <div className="batch3-berita-overlay"></div>
                <div className="batch3-berita-content">
                  <h3 className="batch3-berita-card-title main-title">{newsItems[0].title}</h3>
                  <div className="batch3-berita-date">{newsItems[0].date}</div>
                </div>
              </div>

              {/* Secondary Sub Cards */}
              <div className="batch3-berita-sub-col">
                <div className="batch3-berita-card batch3-berita-card-sub">
                  <img src={newsItems[1].img} alt={newsItems[1].title} className="batch3-berita-img" />
                  <div className="batch3-berita-overlay"></div>
                  <div className="batch3-berita-content">
                    <h3 className="batch3-berita-card-title sub-title">{newsItems[1].title}</h3>
                    <div className="batch3-berita-date">{newsItems[1].date}</div>
                  </div>
                </div>

                <div className="batch3-berita-card batch3-berita-card-sub">
                  <img src={newsItems[2].img} alt={newsItems[2].title} className="batch3-berita-img" />
                  <div className="batch3-berita-overlay"></div>
                  <div className="batch3-berita-content">
                    <h3 className="batch3-berita-card-title sub-title">{newsItems[2].title}</h3>
                    <div className="batch3-berita-date">{newsItems[2].date}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BATCH 3 - SECTION 2: CTA BANNER */}
        {/* ========================================================================= */}
        <section className="batch3-cta-section">
          <div className="container">
            <div className="batch3-cta-banner">
              <img src={imageDonasiSekarang} alt="" className="batch3-cta-bg-img" aria-hidden="true" />
              <div className="batch3-cta-overlay"></div>
              <div className="batch3-cta-content">
                <h2 className="batch3-cta-headline">
                  Marilah tunaikan zakat, infak,{' '}
                  <br className="desktop-br" />
                  sedekah, dan wakaf di lembaga{' '}
                  <br className="desktop-br" />
                  terpercaya dan amanah
                </h2>
                <a href="#donasi-grid" className="batch3-cta-btn">
                  <span className="btn-circle-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                  <span>Donasi Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* BATCH 3 - SECTION 3: FOOTER */}
      {/* ========================================================================= */}
      <footer className="batch3-footer" id="footer">
        <div className="container">
          <div className="batch3-footer-top">
            {/* Container 1 (Kiri): Brand, Disclaimer, Sosial Media, Fraud Notice */}
            <div className="batch3-footer-brand-col batch3-footer-container-left">
              <a href="#" className="batch3-footer-logo-link">
                <img src={logoSm} alt="Baitulmaal Muamalat" className="batch3-footer-logo" />
              </a>

              <div className="batch3-footer-block">
                <h4 className="batch3-footer-heading">DISCLAIMER</h4>
                <p className="batch3-footer-text">
                  BMM tidak menerima dana yang bersumber dari tindak kejahatan, pencucian uang atau lainnya yang melanggar ketentuan syariah
                </p>
              </div>

              <div className="batch3-footer-block">
                <h4 className="batch3-footer-heading">TEMUKAN KAMI</h4>
                <div className="batch3-footer-socials">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="batch3-social-btn" aria-label="Facebook">
                    <img src={footerIconFacebook} alt="Facebook" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="batch3-social-btn" aria-label="Instagram">
                    <img src={footerIconInstagram} alt="Instagram" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="batch3-social-btn" aria-label="YouTube">
                    <img src={footerIconYoutube} alt="YouTube" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="batch3-social-btn" aria-label="TikTok">
                    <img src={footerIconTiktok} alt="TikTok" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="batch3-social-btn" aria-label="X">
                    <img src={footerIconX} alt="X" />
                  </a>
                </div>
              </div>

              <div className="batch3-footer-block">
                <h4 className="batch3-footer-heading">Say No To Fraud & Gratification !</h4>
                <p className="batch3-footer-text">
                  &ldquo;BMM tidak pernah menggunakan rekening atas nama perorangan dalam penerimaan dana ZISWAF. Jika ada indikasi fraud dan gratifikasi, segera hubungi kami&rdquo;.
                </p>
                <a href="#kontak" className="batch3-footer-btn-outline">Hubungi Kami</a>
              </div>
            </div>

            {/* Container 2 (Kanan): Program, Layanan, Link, Lainnya */}
            <div className="batch3-footer-nav-col batch3-footer-container-right">
              {/* Sub-column 1: Program & Link */}
              <div className="batch3-footer-nav-subcol">
                <div className="batch3-footer-nav-group">
                  <h4 className="batch3-footer-nav-title">Program</h4>
                  <ul className="batch3-footer-nav-list">
                    {footerProgramLinks.map((link, idx) => (
                      <li key={idx}><a href={link.href}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>

                <div className="batch3-footer-nav-group">
                  <h4 className="batch3-footer-nav-title">Link</h4>
                  <ul className="batch3-footer-nav-list">
                    {footerLinkLinks.map((link, idx) => (
                      <li key={idx}><a href={link.href}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sub-column 2: Layanan & Lainnya */}
              <div className="batch3-footer-nav-subcol">
                <div className="batch3-footer-nav-group">
                  <h4 className="batch3-footer-nav-title">Layanan</h4>
                  <ul className="batch3-footer-nav-list">
                    {footerLayananLinks.map((link, idx) => (
                      <li key={idx}><a href={link.href}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>

                <div className="batch3-footer-nav-group">
                  <h4 className="batch3-footer-nav-title">Lainnya</h4>
                  <ul className="batch3-footer-nav-list">
                    {footerLainnyaLinks.map((link, idx) => (
                      <li key={idx}><a href={link.href}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright and Awards */}
          <div className="batch3-footer-bottom">
            <p className="batch3-footer-copyright">
              Copyright &copy; 2026 Baitulmaal Muamalat
            </p>
            <div className="batch3-footer-awards">
              <img src={imageFooterAwards} alt="Penghargaan Baitulmaal Muamalat" />
            </div>
          </div>
        </div>
      </footer>

      {/* 14. MOBILE BOTTOM NAVIGATION */}
      <nav className="bottom-navigation mobile-only">
        <div className="bottom-nav-container">
          <a href="#home" className="bottom-nav-item active">
            <div className="bottom-nav-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <span className="bottom-nav-label">Home</span>
            <div className="active-indicator"></div>
          </a>

          <a href="#donasi-grid" className="bottom-nav-item">
            <div className="bottom-nav-icon-wrapper">
              <img src={iconLovely} alt="Donasi" />
            </div>
            <span className="bottom-nav-label">Donasi</span>
          </a>

          <a href="#transaksi" className="bottom-nav-item">
            <div className="bottom-nav-icon-wrapper">
              <img src={iconCourier} alt="Transaksi" />
            </div>
            <span className="bottom-nav-label">Transaksi</span>
          </a>

          <a href="#akun" className="bottom-nav-item">
            <div className="bottom-nav-icon-wrapper">
              <img src={imageProfil} alt="Akun" className="nav-avatar" />
            </div>
            <span className="bottom-nav-label">Akun</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
