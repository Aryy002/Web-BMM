import { useState, useEffect, useRef } from 'react';
import './App.css';

// Logo asset
import logoSm from './assets/logo/logo_sm.svg';

// Image assets
import imageHero from './assets/image/image_hero.png';
import imageCard from './assets/image/image_card.png';
import imageProgram from './assets/image/image_program.jpg';
import imageKegiatan from './assets/image/image_kegiatan.png';
import imageProfil from './assets/image/image_profil.png';
import imageTestimoni from './assets/image/image_testimoni.png';
import imageCta from './assets/image/image_cta.png';
import timeIcon from './assets/icons/icons_program/time.svg';

// Brand icons
import iconFacebook from './assets/icons/icons_hero/facebook.svg';
import iconGoogle from './assets/icons/icons_hero/google.svg';
import iconLastFm from './assets/icons/icons_hero/last.fm.svg';
import iconNetflix from './assets/icons/icons_hero/netflix.svg';
import iconSpotify from './assets/icons/icons_hero/spotify.svg';

// Program Category Icons
import iconProgSemua from './assets/icons/icons_program/semua.svg';
import iconProgZakat from './assets/icons/icons_program/zakat.png';
import iconProgPendidikan from './assets/icons/icons_program/pendidikan.svg';
import iconProgKemanusiaan from './assets/icons/icons_program/kemanusiaan.svg';
import iconProgBencana from './assets/icons/icons_program/bencana.svg';
import iconProgLainnya from './assets/icons/icons_program/lainnya.svg';

// Quote Icon
import iconQuote from './assets/icons/icons_katamereka/quote.svg';
import watermarkImg from "./assets/icons/icons_katamereka/watermark.png";

// Decorations
import decorationLeft from './assets/icons/decorations/decoration_left.svg';
import decorationRight from './assets/icons/decorations/decoration_right.svg';

// Layanan icons
import iconCourier from './assets/icons/icons_layanan/courier-express-.svg';
import iconDevices from './assets/icons/icons_layanan/devices.svg';
import iconLovely from './assets/icons/icons_layanan/lovely.svg';
import iconMessages from './assets/icons/icons_layanan/messages.svg';

// Kegiatan icons
import iconCalendar from './assets/icons/icons_kegiatan/calender.svg';
import iconLocation from './assets/icons/icons_kegiatan/lokasi.svg';

// Tentang badges
import badgeAccreditation2 from './assets/icons/icons_tentang/Wo0J33FnBo6NsJMFkVFnyhsWiGwqK28RWSh4iB7h 2.png';
import badgeAccreditation3 from './assets/icons/icons_tentang/Wo0J33FnBo6NsJMFkVFnyhsWiGwqK28RWSh4iB7h 3.png';
import badgeAccreditation4 from './assets/icons/icons_tentang/Wo0J33FnBo6NsJMFkVFnyhsWiGwqK28RWSh4iB7h 4.png';

// Footer icons
import footerFacebook from './assets/icons/icons_footer/facebook.svg';
import footerInstagram from './assets/icons/icons_footer/instagram.svg';
import footerTiktok from './assets/icons/icons_footer/tiktok.svg';
import footerYoutube from './assets/icons/icons_footer/youtube.svg';
import footerX from './assets/icons/icons_footer/X.svg';
import footerVector from './assets/icons/icons_footer/Vector.png';

// Static Data Definitions
const partnerLogos = [
  { id: 'facebook', name: 'Facebook', src: iconFacebook },
  { id: 'google', name: 'Google', src: iconGoogle },
  { id: 'netflix', name: 'Netflix', src: iconNetflix },
  { id: 'spotify', name: 'Spotify', src: iconSpotify },
  { id: 'lastfm', name: 'Last.fm', src: iconLastFm }
];

const programCategories = [
  { id: 'semua', label: 'Semua', icon: iconProgSemua },
  { id: 'zakat', label: 'Zakat', icon: iconProgZakat },
  { id: 'pendidikan', label: 'Pendidikan', icon: iconProgPendidikan },
  { id: 'kemanusiaan', label: 'Kemanusiaan', icon: iconProgKemanusiaan },
  { id: 'bencana', label: 'Bencana', icon: iconProgBencana },
  { id: 'lainnya', label: 'Lainnya', icon: iconProgLainnya }
];

const programItems = [
  {
    id: 1,
    title: 'Sosial Dakwah',
    desc: 'Memastikan Pendidikan yang Inklusif dan Berkualitas Setara...',
    category: 'Pendidikan',
    img: imageProgram
  },
  {
    id: 2,
    title: 'Pemberdayaan Ekonomi',
    desc: 'Mendorong Kemandirian Mustahik Melalui Usaha Mikro Syariah...',
    category: 'Ekonomi',
    img: imageCard
  },
  {
    id: 3,
    title: 'Tanggap Darurat Bencana',
    desc: 'Aksi Cepat Tanggap Kemanusiaan untuk Korban Bencana Alam...',
    category: 'Kemanusiaan',
    img: imageKegiatan
  }
];

const serviceItems = [
  {
    id: 1,
    title: 'Jemput Zakat',
    desc: 'Layanan penjemputan donasi zakat, infaq, dan sedekah langsung ke lokasi Anda.',
    icon: iconCourier
  },
  {
    id: 2,
    title: 'Konsultasi Zakat',
    desc: 'Konsultasikan penghitungan dan kewajiban zakat Anda bersama ustadz berpengalaman.',
    icon: iconDevices
  },
  {
    id: 3,
    title: 'Kalkulator Zakat',
    desc: 'Hitung kewajiban zakat penghasilan, zakat maal, dan profesi dengan cepat & akurat.',
    icon: iconLovely
  },
  {
    id: 4,
    title: 'Layanan Muzakki',
    desc: 'Dapatkan laporan penyaluran zakat serta konfirmasi donasi secara berkala.',
    icon: iconMessages
  }
];

const donationItems = [
  {
    id: 1,
    category: 'pendidikan',
    badge: 'BEASISWA',
    title: 'Bantu Anak-Anak Yatim dan Dhuafa Meraih Cita-Cita Pendidikan Tinggi',
    collected: 'Rp 45.500.000',
    target: 'Rp 100.000.000',
    progress: '45.5%',
    sisaHari: 120,
    img: imageCard
  },
  {
    id: 2,
    category: 'zakat',
    badge: 'ZAKAT',
    title: 'Tunaikan Zakat Maal Anda Untuk Pemberdayaan Ekonomi Ummat',
    collected: 'Rp 128.000.000',
    target: 'Rp 200.000.000',
    progress: '64%',
    sisaHari: 60,
    img: imageProgram
  },
  {
    id: 3,
    category: 'kemanusiaan',
    badge: 'KEMANUSIAAN',
    title: 'Bantuan Kemanusiaan dan Tanggap Bencana untuk Korban Bencana',
    collected: 'Rp 89.200.000',
    target: 'Rp 150.000.000',
    progress: '59.4%',
    sisaHari: 45,
    img: imageKegiatan
  },
  {
    id: 4,
    category: 'lainnya',
    badge: 'WAKAF',
    title: 'Wakaf Pembangunan Rumah Tahfidz Qur\'an dan Sarana Ibadah',
    collected: 'Rp 210.000.000',
    target: 'Rp 500.000.000',
    progress: '42%',
    sisaHari: 200,
    img: imageCard
  },
  {
    id: 5,
    category: 'zakat',
    badge: 'INFAQ',
    title: 'Sedekah Subuh Berkah Paket Sembako Untuk Keluarga Prasejahtera',
    collected: 'Rp 34.000.000',
    target: 'Rp 50.000.000',
    progress: '68%',
    sisaHari: 30,
    img: imageProgram
  },
  {
    id: 6,
    category: 'bencana',
    badge: 'KESEHATAN',
    title: 'Layanan Ambulans Gratis & Operasional Kemanusiaan Pelosok Negeri',
    collected: 'Rp 76.500.000',
    target: 'Rp 120.000.000',
    progress: '63.75%',
    sisaHari: 90,
    img: imageKegiatan
  },
  {
    id: 7,
    category: 'pendidikan',
    badge: 'BEASISWA',
    title: 'Beasiswa Santri Berprestasi Program Pesantren Tahfidz Nasional',
    collected: 'Rp 22.000.000',
    target: 'Rp 75.000.000',
    progress: '29.3%',
    sisaHari: 150,
    img: imageCard
  },
  {
    id: 8,
    category: 'kemanusiaan',
    badge: 'PALESTINA',
    title: 'Solidaritas Palestina: Bantuan Darurat untuk Saudara Kita',
    collected: 'Rp 320.000.000',
    target: 'Rp 500.000.000',
    progress: '64%',
    sisaHari: 365,
    img: imageProgram
  },
  {
    id: 9,
    category: 'bencana',
    badge: 'BENCANA',
    title: 'Tanggap Darurat Banjir dan Longsor Sulawesi Tengah',
    collected: 'Rp 55.000.000',
    target: 'Rp 80.000.000',
    progress: '68.75%',
    sisaHari: 14,
    img: imageKegiatan
  }
];

const testimonials = [
  {
    id: 1,
    name: "Tuan Syarif Ja'afar Al-Habsyi",
    role: 'Donatur Baitulmaal Muamalat',
    quote: 'BMM sangat transparan dan amanah dalam mengelola dana zakat dan infaq. Program-programnya memberikan manfaat nyata dan berkelanjutan bagi masyarakat yang membutuhkan.',
    avatar: imageProfil
  },
  {
    id: 2,
    name: 'Dra. Hj. Siti Aminah',
    role: 'Mitra Program Pendidikan',
    quote: 'Kerjasama dengan BMM membawa dampak luar biasa bagi anak-anak penerima beasiswa. Penyaluran bantuan berjalan tepat waktu dan berorientasi masa depan.',
    avatar: imageProfil
  },
  {
    id: 3,
    name: 'H. Bambang Sujipto',
    role: 'Muzakki Prioritas',
    quote: 'Layanan penjemputan zakat dan laporan berkala BMM membuat ibadah zakat kami semakin tenang, profesional, dan akuntabel.',
    avatar: imageProfil
  }
];

const activityItems = [
  {
    id: 1,
    title: 'Aksi Tanggap Kemanusiaan Duka Palestina, Duka Kita Bersama',
    date: '24 September 2024',
    location: 'Jakarta Selatan',
    img: imageKegiatan
  },
  {
    id: 2,
    title: 'Penyaluran Beasiswa Sarjana BMM Angkatan IV kepada 50 Mahasiswa',
    date: '18 September 2024',
    location: 'Bandung, Jawa Barat',
    img: imageProgram
  },
  {
    id: 3,
    title: 'Peresmian Program Desa Mandiri Berdaya di Kawasan Pesisir',
    date: '10 September 2024',
    location: 'Banten',
    img: imageCard
  }
];

const beneficiaryItems = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    role: 'Penerima Beasiswa Sarjana',
    quote: 'Terima kasih banyak Baitulmaal Muamalat. Berkat beasiswa ini saya dapat menyelesaikan pendidikan sarjana dan mewujudkan impian keluarga.',
    avatar: imageTestimoni
  },
  {
    id: 2,
    name: 'Siti Rahmah',
    role: 'Penerima Program Ekonomi Mandiri',
    quote: 'Bantuan modal usaha dan pendampingan dari BMM sangat mengubah perekonomian keluarga kami. Usaha mikro kami kini semakin berkembang.',
    avatar: imageTestimoni
  },
  {
    id: 3,
    name: 'Ustadz Abdullah',
    role: 'Pengelola Rumah Tahfidz',
    quote: 'Program wakaf BMM membantu terwujudnya sarana belajar Qur\'an yang layak bagi puluhan santri di pelosok daerah.',
    avatar: imageTestimoni
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'program-donasi'
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const [heroSlideIndex, setHeroSlideIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [heroDragState, setHeroDragState] = useState({
    isDragging: false,
    startX: 0,
    dragOffset: 0
  });
  const [activeDonationCategory, setActiveDonationCategory] = useState('semua');
  const [donasiPageCategory, setDonasiPageCategory] = useState('semua');
  const [donasiShowAll, setDonasiShowAll] = useState(false);

  // Awards modal state
  const [activeAward, setActiveAward] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [activeProgressId, setActiveProgressId] = useState(null);
  const [activeServiceId, setActiveServiceId] = useState(1);

  // Dismiss mobile progress tooltip on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.donation-progress-wrapper')) {
        setActiveProgressId(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Helper to dynamically calculate progress percentage accurately
  const getProgressPercent = (item) => {
    if (item.collected && item.target) {
      const c = parseInt(String(item.collected).replace(/[^0-9]/g, ''), 10);
      const t = parseInt(String(item.target).replace(/[^0-9]/g, ''), 10);
      if (t > 0 && !isNaN(c)) {
        const pct = (c / t) * 100;
        return pct % 1 === 0 ? `${pct.toFixed(0)}%` : `${pct.toFixed(1)}%`;
      }
    }
    return item.progress || '0%';
  };

  const [awardActiveIndex, setAwardActiveIndex] = useState(0);
  const [awardVisibleItems, setAwardVisibleItems] = useState(typeof window !== 'undefined' && window.innerWidth < 992 ? 2 : 3);
  const [awardDragState, setAwardDragState] = useState({ isDragging: false, startX: 0, dragOffset: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAwardVisibleItems(2);
      } else if (window.innerWidth < 992) {
        setAwardVisibleItems(2);
      } else {
        setAwardVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const awardsData = [
    { id: 1, title: "3rd Rank The Best Institution of Amil Zakat 2010", image: badgeAccreditation2 },
    { id: 2, title: "Best Empowering In Economic Program 2010, 2011, 2012", image: badgeAccreditation3 },
    { id: 3, title: "Reka Karsa Sosial (Gold) CSR Indonesia Awards", image: badgeAccreditation4 },
    { id: 4, title: "(Islamic Social Responsibility) GIFA Excellence Award 2021", image: badgeAccreditation2 },
    { id: 5, title: "(Best Company-Based Waqf Program Fundraising) Indonesia Fundraising Award 2021", image: badgeAccreditation3 },
    { id: 6, title: "(Best Choice in Social Institutions) Indonesia Best Choice Award 2021", image: badgeAccreditation4 },
    { id: 7, title: "LAZNAS with Best Distribution Impact BAZNAS Award 2022", image: badgeAccreditation2 },
    { id: 8, title: "Indonesia’s Best Corporate Sustainability Initiatives Circular Economy Category MIX Award 2022", image: badgeAccreditation3 },
    { id: 9, title: "Innovative Strategic Partnerships for Institutional Capacity Strengthening 2025", image: badgeAccreditation4 },
    { id: 10, title: "Gold Category in MSME Capacity Building 2025", image: badgeAccreditation2 }
  ];

  const maxAwardIndex = Math.max(0, awardsData.length - awardVisibleItems);
  const safeAwardActiveIndex = Math.min(awardActiveIndex, maxAwardIndex);

  const handleAwardDragStart = (e) => {
    setAwardDragState({
      isDragging: true,
      startX: e.type.includes('mouse') ? e.pageX : e.touches[0].pageX,
      dragOffset: 0
    });
  };

  const handleAwardDragMove = (e) => {
    if (!awardDragState.isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setAwardDragState(prev => ({ ...prev, dragOffset: currentX - prev.startX }));
  };

  const handleAwardDragEnd = () => {
    if (!awardDragState.isDragging) return;

    const offset = awardDragState.dragOffset;
    const threshold = 50;

    let newIndex = safeAwardActiveIndex;
    if (offset > threshold) {
      newIndex -= 1;
    } else if (offset < -threshold) {
      newIndex += 1;
    }

    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxAwardIndex) newIndex = maxAwardIndex;

    setAwardActiveIndex(newIndex);
    setAwardDragState({ isDragging: false, startX: 0, dragOffset: 0 });
  };

  const handleAwardPrev = () => {
    setAwardActiveIndex(prev => Math.max(0, prev - 1));
  };

  const handleAwardNext = () => {
    setAwardActiveIndex(prev => Math.min(maxAwardIndex, prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveAward(null);
        setActiveTestimonial(null);
      }
    };
    if (activeAward || activeTestimonial) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeAward, activeTestimonial]);

  // Brand strip state
  const brandStripRef = useRef(null);
  const brandStripDragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0
  });

  const handleBrandStripDragStart = (e) => {
    brandStripDragRef.current.isDragging = true;
    brandStripDragRef.current.startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    brandStripDragRef.current.scrollLeft = brandStripRef.current.scrollLeft;
  };

  const handleBrandStripDragMove = (e) => {
    if (!brandStripDragRef.current.isDragging) return;
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const walk = (x - brandStripDragRef.current.startX) * 1.5;
    brandStripRef.current.scrollLeft = brandStripDragRef.current.scrollLeft - walk;
  };

  const handleBrandStripDragEnd = () => {
    brandStripDragRef.current.isDragging = false;
  };

  // === NEW TESTIMONIAL CAROUSEL STATE ===
  const N_TESTI = testimonials.length;
  const [testiActiveIndex, setTestiActiveIndex] = useState(N_TESTI);
  const [testiIsTransitioning, setTestiIsTransitioning] = useState(true);
  const [carouselMetrics, setCarouselMetrics] = useState({
    wrapperWidth: 0,
    cardWidth: 0,
    gap: 64,
    centerOffset: 0
  });

  const carouselWrapperRef = useRef(null);
  const firstCardRef = useRef(null);

  useEffect(() => {
    const updateMetrics = () => {
      if (carouselWrapperRef.current && firstCardRef.current) {
        const wrapperW = carouselWrapperRef.current.getBoundingClientRect().width;
        const cardW = firstCardRef.current.getBoundingClientRect().width;
        const gap = 64;

        setCarouselMetrics({
          wrapperWidth: wrapperW,
          cardWidth: cardW,
          gap: gap,
          centerOffset: (wrapperW - cardW) / 2
        });
      }
    };

    const observer = new ResizeObserver(() => {
      updateMetrics();
    });

    if (carouselWrapperRef.current) {
      observer.observe(carouselWrapperRef.current);
    }

    updateMetrics();

    return () => observer.disconnect();
  }, []);

  const [testiDragState, setTestiDragState] = useState({
    isDragging: false,
    startX: 0,
    dragOffset: 0
  });

  const handleTestiDragStart = (e) => {
    setTestiDragState({
      isDragging: true,
      startX: e.type.includes('mouse') ? e.pageX : e.touches[0].pageX,
      dragOffset: 0
    });
  };

  const handleTestiDragMove = (e) => {
    if (!testiDragState.isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = currentX - testiDragState.startX;
    setTestiDragState(prev => ({ ...prev, dragOffset: diff }));
  };

  const handleTestiDragEnd = () => {
    if (!testiDragState.isDragging) return;

    if (testiDragState.dragOffset > 50) {
      setTestiActiveIndex(prev => prev - 1);
    } else if (testiDragState.dragOffset < -50) {
      setTestiActiveIndex(prev => prev + 1);
    }

    setTestiDragState({
      isDragging: false,
      startX: 0,
      dragOffset: 0
    });
  };

  const handleTestiTransitionEnd = () => {
    if (testiActiveIndex < N_TESTI) {
      setTestiIsTransitioning(false);
      setTestiActiveIndex(prev => prev + N_TESTI);
    } else if (testiActiveIndex >= 2 * N_TESTI) {
      setTestiIsTransitioning(false);
      setTestiActiveIndex(prev => prev - N_TESTI);
    }
  };

  useEffect(() => {
    if (!testiIsTransitioning) {
      const timer = setTimeout(() => setTestiIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [testiIsTransitioning]);

  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials
  ];
  // =======================================


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

  const heroSlides = [
    { id: 1, img: imageHero, alt: "Sucikan Harta dan Jiwa, Tunaikan Zakat Maal Hanya 2,5%" },
    { id: 2, img: imageProgram, alt: "Program Baitulmaal Muamalat" },
    { id: 3, img: imageKegiatan, alt: "Kegiatan Kemanusiaan BMM" },
    { id: 4, img: imageCard, alt: "Pemberdayaan Ekonomi Ummat" },
  ];

  // Extended slides array for seamless infinite looping: [cloneLast, slide1, slide2, slide3, slide4, cloneFirst]
  const extendedSlides = [
    { ...heroSlides[heroSlides.length - 1], id: 'clone-last' },
    ...heroSlides,
    { ...heroSlides[0], id: 'clone-first' }
  ];

  // Auto-play slider every 2 seconds
  useEffect(() => {
    if (heroDragState.isDragging) return;

    const timer = setInterval(() => {
      setWithTransition(true);
      setHeroSlideIndex(prev => {
        let current = prev;
        if (current >= extendedSlides.length - 1) current = 1;
        return current + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [heroDragState.isDragging, extendedSlides.length]);

  // Handle boundary clone reset after transition completion
  useEffect(() => {
    if (heroSlideIndex === extendedSlides.length - 1) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setHeroSlideIndex(1);
      }, 450);
      return () => clearTimeout(timer);
    }

    if (heroSlideIndex === 0) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setHeroSlideIndex(heroSlides.length);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [heroSlideIndex, extendedSlides.length, heroSlides.length]);

  // Re-enable CSS transition after position reset
  useEffect(() => {
    if (!withTransition) {
      const timer = setTimeout(() => {
        setWithTransition(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [withTransition]);

  const handleHeroDragStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setHeroDragState({
      isDragging: true,
      startX: clientX,
      dragOffset: 0
    });
  };

  const handleHeroDragMove = (e) => {
    if (!heroDragState.isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offset = clientX - heroDragState.startX;
    setHeroDragState(prev => ({
      ...prev,
      dragOffset: offset
    }));
  };

  const handleHeroDragEnd = () => {
    if (!heroDragState.isDragging) return;
    const threshold = 40;
    const { dragOffset } = heroDragState;

    setWithTransition(true);

    if (dragOffset < -threshold) {
      // Swiped left -> next slide
      setHeroSlideIndex(prev => {
        let current = prev;
        if (current >= extendedSlides.length - 1) current = 1;
        return current + 1;
      });
    } else if (dragOffset > threshold) {
      // Swiped right -> previous slide
      setHeroSlideIndex(prev => {
        let current = prev;
        if (current <= 0) current = heroSlides.length;
        return current - 1;
      });
    }

    setHeroDragState({
      isDragging: false,
      startX: 0,
      dragOffset: 0
    });
  };

  const handleHeroTransitionEnd = () => {
    if (heroSlideIndex === 0) {
      setWithTransition(false);
      setHeroSlideIndex(heroSlides.length);
    } else if (heroSlideIndex === extendedSlides.length - 1) {
      setWithTransition(false);
      setHeroSlideIndex(1);
    }
  };

  // Active dot index calculation
  const activeDotIndex = (heroSlideIndex - 1 + heroSlides.length) % heroSlides.length;

  // Filter donation cards based on selected category (landing page)
  const filteredDonations = activeDonationCategory === 'semua'
    ? donationItems
    : donationItems.filter(item => item.category === activeDonationCategory);
  // Program Donasi page: filter + limit logic
  const donasiPageFiltered = donasiPageCategory === 'semua'
    ? donationItems
    : donationItems.filter(item => item.category === donasiPageCategory);
  const donasiPageVisible = donasiShowAll ? donasiPageFiltered : donasiPageFiltered.slice(0, 6);
  const donasiHasMore = donasiPageFiltered.length > 6 && !donasiShowAll;

  // When switching page, scroll to top and reset states
  const navigateTo = (page) => {
    setCurrentPage(page);
    setDonasiPageCategory('semua');
    setDonasiShowAll(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* 1. NAVBAR / HEADER (CONTAINED 1200px INNER CONTENT) */}
      <header className="site-header">
        <div className="header-container">
          <a href="#" className="header-logo">
            <img src={logoSm} alt="Baitulmaal Muamalat Logo" />
          </a>

          <nav className="header-nav desktop-only">
            <a href="#layanan" className="nav-link">Layanan</a>
            <a href="#program" className="nav-link">Program</a>
            <a href="#donasi" className="nav-link">Donasi</a>
            <a href="#berita" className="nav-link">Media</a>
            <a href="#tentang" className="nav-link">Tentang Kami</a>
          </nav>

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

            <a href="#masuk" className="btn-masuk desktop-only">Masuk</a>

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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
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
              <a href="#layanan" onClick={() => setMobileMenuOpen(false)}>Layanan</a>
              <a href="#program" onClick={() => setMobileMenuOpen(false)}>Program</a>
              <a href="#donasi" onClick={() => setMobileMenuOpen(false)}>Donasi</a>
              <a href="#berita" onClick={() => setMobileMenuOpen(false)}>Media</a>
              <a href="#tentang" onClick={() => setMobileMenuOpen(false)}>Tentang Kami</a>
              <a href="#masuk" className="btn btn-outline" style={{ marginTop: '16px', justifyContent: 'center' }} onClick={() => setMobileMenuOpen(false)}>Masuk</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* 2. HERO CAROUSEL (FULL WIDTH NATIVE 1346:757 ASPECT RATIO) */}
        <section className="hero-section">
          <div
            className={`hero-slider-container ${heroDragState.isDragging ? 'dragging' : ''}`}
            onMouseDown={handleHeroDragStart}
            onMouseMove={handleHeroDragMove}
            onMouseUp={handleHeroDragEnd}
            onMouseLeave={handleHeroDragEnd}
            onTouchStart={handleHeroDragStart}
            onTouchMove={handleHeroDragMove}
            onTouchEnd={handleHeroDragEnd}
          >
            <div
              className="hero-slide-track"
              onTransitionEnd={handleHeroTransitionEnd}
              style={{
                transform: `translateX(calc(-${heroSlideIndex * 100}% + ${heroDragState.dragOffset}px))`,
                transition: heroDragState.isDragging || !withTransition ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {extendedSlides.map((slide, idx) => (
                <div className="hero-slide-item" key={`${slide.id}-${idx}`}>
                  <img src={slide.img} alt={slide.alt} draggable={false} />
                </div>
              ))}
            </div>

            {/* Hero Overlay Carousel Indicators */}
            <div className="hero-indicators-overlay" onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  className={`hero-dot ${activeDotIndex === idx ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setWithTransition(true);
                    setHeroSlideIndex(idx + 1);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. BRAND / PARTNER STRIP (FULL WIDTH HORIZONTAL ROW) */}
        <section className="brand-strip-section">
          <div
            className="brand-strip-container"
            ref={brandStripRef}
            onMouseLeave={handleBrandStripDragEnd}
            onMouseDown={handleBrandStripDragStart}
            onMouseMove={handleBrandStripDragMove}
            onMouseUp={handleBrandStripDragEnd}
            onTouchStart={handleBrandStripDragStart}
            onTouchMove={handleBrandStripDragMove}
            onTouchEnd={handleBrandStripDragEnd}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, idx) => (
              <div className="brand-strip-item" key={`${partner.id}-${idx}`}>
                <a href="#" onClick={(e) => e.preventDefault()} draggable={false}>
                  <img src={partner.src} alt={partner.name} draggable={false} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PROGRAM BAITULMAAL MUAMALAT */}
        <section className="program-section section-padding" id="program">
          <img src={decorationLeft} alt="" className="decoration-left-bg" />
          <div className="container">
            <div className="section-header">

              <h2 className="section-title">Program <span className="text-gradient-primary">Baitulmaal Muamalat</span></h2>
              <p className="section-subtitle">
                Beragam program kebaikan untuk memberdayakan masyarakat dan menghadirkan manfaat yang berkelanjutan bagi umat.
              </p>
            </div>

            <div className="program-grid">
              {programItems.map((item) => (
                <div className="program-card" key={item.id}>
                  <img src={item.img} alt={item.title} className="program-card-img" />
                  <div className="program-card-overlay">
                    <h3 className="program-card-title">{item.title}</h3>
                    <p className="program-card-desc">{item.desc}</p>
                    <a href="#program" className="program-card-link">Lihat Program &rsaquo;</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="center-btn-wrapper">
              <a href="#program" className="btn btn-primary">Lihat Semua Program &rarr;</a>
            </div>
          </div>
        </section>

        {/* 5. LAYANAN PRIORITAS UNTUK SAHABAT BMM */}
        <section className="services-section section-padding" id="layanan">
          <div className="container services-layout">
            <div className="services-info">

              <h2 className="section-title">
                Layanan <br className="desktop-only" />
                <span className="text-gradient-primary">Prioritas</span> untuk <br className="desktop-only" />
                <span className="text-gradient-primary">Sahabat BMM</span>
              </h2>
              <p className="section-subtitle">
                Dapatkan akses layanan yang lebih mudah, cepat, dan personal sebagai bagian dari Sahabat BMM yang turut menguatkan kebermanfaatan bagi umat.
              </p>

              <div className="services-badges">
                <span className="service-badge">Mudah</span>
                <span className="service-badge">Dekat</span>
                <span className="service-badge">Berdampak</span>
              </div>
            </div>

            <div className="services-grid">
              {serviceItems.map((service) => (
                <a
                  href="#layanan"
                  className={`service-item ${activeServiceId === service.id ? 'active' : ''}`}
                  key={service.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveServiceId(service.id);
                  }}
                >
                  <div className="service-item-header">
                    <div className="service-icon-wrapper">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-desc">{service.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PROGRAM DONASI TERBARU */}
        <section className="donation-section section-padding" id="donasi">
          <img src={decorationRight} alt="" className="decoration-right-bg" />

          <div className="container">
            <div className="section-header">

              <h2 className="section-title">Program <span className="text-gradient-primary">Donasi</span> Terbaru</h2>
              <p className="section-subtitle">
                Salurkan infaq dan zakat Anda untuk membantu sesama melalui program pilihan terkini.
              </p>
            </div>

            <div className="donation-categories-nav">
              {programCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`donation-category-pill ${activeDonationCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveDonationCategory(cat.id)}
                >
                  <img src={cat.icon} alt={cat.label} />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            <div className="donation-grid">
              {filteredDonations.map((item) => {
                const progressPercent = getProgressPercent(item);
                return (
                  <div
                    className="donation-card"
                    key={item.id}
                    onClick={() => { window.location.hash = 'donasi'; }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.location.hash = 'donasi';
                      }
                    }}
                  >
                    <div className="donation-card-media">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="donation-card-body">
                      <h3 className="donation-card-title">{item.title}</h3>

                      <div className="donation-stats">
                        <div className="donation-stat-left">
                          <span className="stat-label">Dana Terkumpul</span>
                          <span className="stat-value">{item.collected}</span>
                        </div>
                        <div className="donation-stat-right">
                          <span className="stat-label">Sisa Hari</span>
                          <span className="stat-value"><img src={timeIcon} alt="time" className="time-icon" /> {item.sisaHari || 168} Hari</span>
                        </div>
                      </div>

                      <div
                        className={`donation-progress-wrapper ${activeProgressId === item.id ? 'active-tooltip' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProgressId(prev => prev === item.id ? null : item.id);
                        }}
                      >
                        <div className="donation-progress-bar">
                          <div className="donation-progress-fill" style={{ width: progressPercent }}>
                            <div className="progress-thumb"></div>
                            <div className="progress-tooltip">{progressPercent}</div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="#donasi"
                        className="btn btn-primary"
                        style={{ width: '100%', backgroundColor: '#4A007D', color: '#fff', borderRadius: '8px', padding: '12px', border: 'none' }}
                        onClick={(e) => { e.stopPropagation(); }}
                      >
                        Bantu Sekarang
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="center-btn-wrapper">
              <a href="#donasi" className="btn btn-outline">Lihat Semua Donasi &rarr;</a>
            </div>
          </div>
        </section>

        {/* 7. KATA MEREKA */}
        <section className="kata-mereka-section" id="kata-mereka">

          <div className="kata-mereka-purple-bg"></div>

          <div className="kata-mereka-watermark">
            <img src={watermarkImg} alt="Kata Mereka Watermark" className="watermark-img" />
          </div>

          <div className="container relative z-10" style={{ position: 'relative', zIndex: 10, maxWidth: '1320px', paddingTop: '0px' }}>
            <div className="section-header text-center" style={{ marginBottom: '24px' }}>

              <h2 className="section-title" style={{ color: '#ffffff', marginTop: '8px', marginBottom: '8px' }}>Kata Mereka</h2>
              <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)', opacity: 1 }}>
                Pandangan para tokoh tentang ikhtiar dan dampak yang kami hadirkan.
              </p>
            </div>
          </div>


          <div className="kata-mereka-carousel-wrapper"
            ref={carouselWrapperRef}
            style={{ position: 'relative', zIndex: 10, maxWidth: '1270px', margin: '0 auto', cursor: testiDragState.isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleTestiDragStart}
            onMouseMove={handleTestiDragMove}
            onMouseUp={handleTestiDragEnd}
            onMouseLeave={handleTestiDragEnd}
            onTouchStart={handleTestiDragStart}
            onTouchMove={handleTestiDragMove}
            onTouchEnd={handleTestiDragEnd}
          >
            <div
              className="kata-mereka-carousel"
              onTransitionEnd={handleTestiTransitionEnd}
              style={{
                transform: `translateX(${carouselMetrics.centerOffset - (testiActiveIndex * (carouselMetrics.cardWidth + carouselMetrics.gap)) + testiDragState.dragOffset}px)`,
                transition: testiIsTransitioning && !testiDragState.isDragging ? 'transform 0.5s ease' : 'none'
              }}
            >
              {extendedTestimonials.map((testi, idx) => (
                <div
                  className={`testimonial-card-white ${testiActiveIndex === idx ? 'active' : ''}`}
                  key={`testi-${testi.id}-${idx}`}
                  ref={idx === 0 ? firstCardRef : null}
                >
                  <div className="testimonial-image-col">
                    <img src={testi.avatar} alt={testi.name} className="testimonial-avatar-large" />
                  </div>
                  <div className="testimonial-content-col">
                    <img src={iconQuote} alt="Quote" className="quote-icon-img" />
                    <h4 className="testimonial-author-name">{testi.name}</h4>
                    <span className="testimonial-author-role">{testi.role}</span>
                    <p className="testimonial-text">&ldquo;{testi.quote}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1320px', paddingBottom: '20px' }}>
            <div className="kata-mereka-controls" style={{ marginTop: '40px' }}>
              <button
                className="nav-circle-btn"
                aria-label="Previous"
                onClick={() => setTestiActiveIndex(testiActiveIndex - 1)}
              >
                &larr;
              </button>
              <div className="slider-progress-bar">
                <div className="slider-progress-fill" style={{ width: `${(((testiActiveIndex % testimonials.length) + 1) / testimonials.length) * 100}%` }}></div>
              </div>
              <button
                className="nav-circle-btn"
                aria-label="Next"
                onClick={() => setTestiActiveIndex(testiActiveIndex + 1)}
              >
                &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* 8. KEGIATAN TERBARU */}
        <section className="activity-section section-padding" id="kegiatan">
          <div className="container">
            <div className="section-header-flex">
              <div>

                <h2 className="section-title">Kegiatan Terbaru</h2>
              </div>
              <a href="#kegiatan" className="btn btn-outline desktop-only">Lihat Semua &rarr;</a>
            </div>

            <div className="activity-grid">
              {activityItems.map((item) => (
                <div className="activity-card" key={item.id}>
                  <div className="activity-card-media">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="activity-card-body">
                    <h3 className="activity-card-title">{item.title}</h3>
                    <div className="activity-meta-list">
                      <div className="activity-meta-item">
                        <img src={iconCalendar} alt="Tanggal" />
                        <span>{item.date}</span>
                      </div>
                      <div className="activity-meta-item">
                        <img src={iconLocation} alt="Lokasi" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <a href="#kegiatan" className="activity-read-more">Selengkapnya &gt;</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="center-btn-wrapper mobile-only" style={{ marginTop: '24px' }}>
              <a href="#kegiatan" className="btn btn-outline">Lihat Semua &rarr;</a>
            </div>
          </div>
        </section>

        {/* 9. TENTANG BAITULMAAL MUAMALAT (BMM) */}
        <section className="about-section section-padding" id="tentang">

          <div className="container about-layout">
            <div className="about-left-col" style={{ minWidth: 0, width: '100%' }}>
              <div className="about-text-wrapper">
                <h2 className="about-content-title">Baitulmaal Muamalat (BMM)</h2>
                <p className="about-content-text">
                  Baitulmaal Muamalat (BMM) adalah Lembaga Amil Zakat Nasional (LAZNAS) yang berkhidmat mendayagunakan dana zakat, infaq, sedekah, dan wakaf untuk mengangkat martabat mustahik menjadi muzakki melalui berbagai program pemberdayaan yang terukur dan akuntabel.
                </p>
              </div>

              <div className="about-awards-wrapper">
                <div className="about-awards-header mobile-only" style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#333' }}>PENGHARGAAN</h3>
                </div>
                <div className="about-awards-carousel-viewport" style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
                  <div
                    className={`about-badges-grid ${awardDragState.isDragging ? 'dragging' : ''}`}
                    onMouseDown={handleAwardDragStart}
                    onMouseMove={handleAwardDragMove}
                    onMouseUp={handleAwardDragEnd}
                    onMouseLeave={handleAwardDragEnd}
                    onTouchStart={handleAwardDragStart}
                    onTouchMove={handleAwardDragMove}
                    onTouchEnd={handleAwardDragEnd}
                    style={{
                      display: 'flex',
                      flexWrap: 'nowrap',
                      gap: '16px',
                      width: '100%',
                      transform: `translateX(calc(-${safeAwardActiveIndex} * (calc((100% - ${(awardVisibleItems - 1) * 16}px) / ${awardVisibleItems}) + 16px) + ${awardDragState.dragOffset}px))`,
                      transition: awardDragState.isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                  >
                    {awardsData.map((award) => (
                      <div
                        className="about-badge-card clickable-award"
                        key={award.id}
                        onClick={(e) => {
                          if (Math.abs(awardDragState.dragOffset) < 10) {
                            setActiveAward(award);
                          } else {
                            e.preventDefault();
                          }
                        }}
                        style={{
                          flex: `0 0 calc((100% - ${(awardVisibleItems - 1) * 16}px) / ${awardVisibleItems})`,
                          boxSizing: 'border-box'
                        }}
                      >
                        <img src={award.image} alt={award.title} draggable="false" />
                        <span className="about-badge-title" style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>{award.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="about-awards-controls">
                  <button
                    className="award-control-btn prev"
                    onClick={handleAwardPrev}
                    disabled={safeAwardActiveIndex === 0}
                    aria-label="Previous awards"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button
                    className="award-control-btn next"
                    onClick={handleAwardNext}
                    disabled={safeAwardActiveIndex >= maxAwardIndex}
                    aria-label="Next awards"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="about-media-collage" style={{ minWidth: 0, width: '100%' }}>
              <div className="about-collage-img">
                <img src={imageHero} alt="Kegiatan BMM 1" />
              </div>
              <div className="about-collage-img">
                <img src={imageCard} alt="Kegiatan BMM 2" />
              </div>
              <div className="about-collage-img">
                <img src={imageKegiatan} alt="Kegiatan BMM 3" />
              </div>
              <div className="about-collage-img">
                <img src={imageProgram} alt="Kegiatan BMM 4" />
              </div>
            </div>
          </div>
        </section>

        {/* 10. BERITA TERBARU */}
        <section className="news-section section-padding" id="berita">
          <div className="container">
            <div className="section-header-flex">
              <div>

                <h2 className="section-title">Berita Terbaru</h2>
              </div>
              <a href="#berita" className="btn btn-outline desktop-only">Lihat Semua &rarr;</a>
            </div>

            <div className="news-layout">
              <div className="news-card-featured">
                <div className="news-card-featured-image-wrapper">
                  <img src={imageKegiatan} alt="Penyaluran Program Beasiswa Sarjana BMM" />
                </div>
                <div className="news-card-featured-content">
                  <h3 className="news-card-featured-title">
                    Penyaluran Program Beasiswa Sarjana BMM Angkatan IV Berlangsung Khidmat
                  </h3>
                  <span className="news-date">&#128197; 24 September 2024</span>
                </div>
              </div>

              <div className="news-side-list">
                <div className="news-card-small">
                  <div className="news-card-small-media">
                    <img src={imageProgram} alt="Berita 1" />
                  </div>
                  <div className="news-card-small-content">
                    <h4 className="news-card-small-title">
                      BMM Salurkan Bantuan Modal Usaha Bagi Pelaku UMKM Mustahik
                    </h4>
                    <span className="news-date">&#128197; 20 September 2024</span>
                  </div>
                </div>

                <div className="news-card-small">
                  <div className="news-card-small-media">
                    <img src={imageCard} alt="Berita 2" />
                  </div>
                  <div className="news-card-small-content">
                    <h4 className="news-card-small-title">
                      Pendampingan Program Desa Mandiri Berdaya Capai Hasil Positif
                    </h4>
                    <span className="news-date">&#128197; 15 September 2024</span>
                  </div>
                </div>

                <div className="news-card-small">
                  <div className="news-card-small-media">
                    <img src={imageHero} alt="Berita 3" />
                  </div>
                  <div className="news-card-small-content">
                    <h4 className="news-card-small-title">
                      BMM Gelar Pelatihan Manajemen Keuangan Syariah untuk Komunitas
                    </h4>
                    <span className="news-date">&#128197; 10 September 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="center-btn-wrapper mobile-only" style={{ marginTop: '24px' }}>
              <a href="#berita" className="btn btn-outline">Lihat Semua &rarr;</a>
            </div>
          </div>
        </section>

        {/* 11. TESTIMONI PENERIMA MANFAAT */}
        <section className="beneficiary-section section-padding" style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
          <div className="container text-center" style={{ marginBottom: '40px' }}>
            <div className="section-header" style={{ alignItems: 'center' }}>

              <h2 className="section-title">Testimoni Penerima Manfaat</h2>
              <p className="section-subtitle">
                Cerita mereka yang telah merasakan manfaat dari kebaikan Anda.
              </p>
            </div>
          </div>

          <div className="beneficiary-carousel-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '20px 0' }}>
            <div className="beneficiary-fade-left"></div>
            <div className="beneficiary-fade-right"></div>

            <div className="beneficiary-row">
              <div className="beneficiary-track track-right">
                {[...beneficiaryItems, ...beneficiaryItems, ...beneficiaryItems, ...beneficiaryItems].map((item, idx) => (
                  <div
                    className="beneficiary-card-auto"
                    key={`row1-${idx}`}
                    onClick={() => setActiveTestimonial(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveTestimonial(item);
                      }
                    }}
                  >
                    <div className="beneficiary-header-auto">
                      <img src={item.avatar} alt={item.name} className="beneficiary-avatar-auto" />
                      <div className="beneficiary-info-auto">
                        <h4 className="beneficiary-name-auto">{item.name}</h4>
                        <span className="beneficiary-role-auto">{item.role}</span>
                      </div>
                    </div>
                    <p className="beneficiary-quote-auto">&ldquo;{item.quote}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="beneficiary-row" style={{ marginBottom: 0 }}>
              <div className="beneficiary-track track-left">
                {[...beneficiaryItems, ...beneficiaryItems, ...beneficiaryItems, ...beneficiaryItems].map((item, idx) => (
                  <div
                    className="beneficiary-card-auto"
                    key={`row2-${idx}`}
                    onClick={() => setActiveTestimonial(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveTestimonial(item);
                      }
                    }}
                  >
                    <div className="beneficiary-header-auto">
                      <img src={item.avatar} alt={item.name} className="beneficiary-avatar-auto" />
                      <div className="beneficiary-info-auto">
                        <h4 className="beneficiary-name-auto">{item.name}</h4>
                        <span className="beneficiary-role-auto">{item.role}</span>
                      </div>
                    </div>
                    <p className="beneficiary-quote-auto">&ldquo;{item.quote}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12. CTA BANNER */}
        <section className="cta-banner-section">
          <div className="container">
            <div className="cta-banner">
              <img src={imageCta} alt="CTA Background" className="cta-banner-bg" />
              <div className="cta-banner-overlay"></div>
              <div className="cta-banner-content">
                <div className="cta-text-group">
                  <h2 className="cta-title desktop-only">
                    Mari Wujudkan Kebaikan Bersama Baitulmaal Muamalat
                  </h2>
                  <p className="cta-subtitle desktop-only">
                    Salurkan zakat, infaq, dan sedekah Anda melalui lembaga amil zakat terpercaya untuk keberkahan harta Anda dan kesejahteraan ummat.
                  </p>
                  <h2 className="cta-mobile-text mobile-only">
                    Marilah tunaikan zakat, infaq, sedekah, dan wakaf<br /> di lembaga terpercaya dan amanah
                  </h2>
                </div>
                <a href="#donasi" className="btn btn-white cta-btn">
                  <span className="desktop-only">Donasi Sekarang &rarr;</span>
                  <span className="mobile-only">&rarr; Donasi Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 13. FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            <div className="footer-col-main">
              <img src={logoSm} alt="BMM Logo" className="footer-brand-logo" />

              <h4 className="footer-col-title-sm">DISCLAIMER</h4>
              <p className="footer-brand-desc">
                BMM tidak menerima dana yang bersumber dari tindak kejahatan, pencucian uang atau lainnya yang melanggar ketentuan syariah
              </p>

              <h4 className="footer-col-title-sm">TEMUKAN KAMI</h4>
              <div className="footer-social-links">
                <a href="#" className="social-icon-link" aria-label="Facebook"><img src={footerFacebook} alt="Facebook" /></a>
                <a href="#" className="social-icon-link" aria-label="Instagram"><img src={footerInstagram} alt="Instagram" /></a>
                <a href="#" className="social-icon-link" aria-label="YouTube"><img src={footerYoutube} alt="YouTube" /></a>
                <a href="#" className="social-icon-link" aria-label="TikTok"><img src={footerTiktok} alt="TikTok" /></a>
                <a href="#" className="social-icon-link" aria-label="X"><img src={footerX} alt="X" /></a>
              </div>

              <h4 className="footer-col-title-sm mt-4">Say No To Fraud & Gratification !</h4>
              <p className="footer-brand-desc">
                "BMM tidak pernah menggunakan rekening atas nama perorangan dalam penerimaan dana ZISWAF. Jika ada indikasi fraud dan gratifikasi, segera hubungi kami".
              </p>

              <a href="#" className="footer-btn-outline">Hubungi Kami</a>
            </div>

            <div className="footer-col-links">
              <div className="footer-links-section">
                <h4 className="footer-col-title">Program</h4>
                <ul className="footer-link-list">
                  <li><a href="#" className="footer-link">Sosial Dakwah</a></li>
                  <li><a href="#" className="footer-link">Kemanusiaan</a></li>
                  <li><a href="#" className="footer-link">Kesehatan</a></li>
                  <li><a href="#" className="footer-link">Ekonomi</a></li>
                  <li><a href="#" className="footer-link">Pendidikan</a></li>
                </ul>
              </div>

              <div className="footer-links-section mt-4">
                <h4 className="footer-col-title">Tentang Kami</h4>
                <ul className="footer-link-list">
                  <li><a href="#" className="footer-link">Visi Misi</a></li>
                  <li><a href="#" className="footer-link">Struktur Organisasi</a></li>
                  <li><a href="#" className="footer-link">Salam BMM</a></li>
                  <li><a href="#" className="footer-link">Legal Formal</a></li>
                  <li><a href="#" className="footer-link">Perwakilan</a></li>
                  <li><a href="#" className="footer-link">Rekening Donasi</a></li>
                  <li><a href="#" className="footer-link">Pengakuan dan Penghargaan</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-col-links">
              <div className="footer-links-section">
                <h4 className="footer-col-title">Donasi</h4>
                <ul className="footer-link-list">
                  <li><a href="#" className="footer-link">Palestina</a></li>
                  <li><a href="#" className="footer-link">Al-Qu'an</a></li>
                  <li><a href="#" className="footer-link">Yatim</a></li>
                  <li><a href="#" className="footer-link">Pendidikan</a></li>
                  <li><a href="#" className="footer-link">Bencana</a></li>
                  <li><a href="#" className="footer-link">Kesehatan</a></li>
                  <li><a href="#" className="footer-link">Ekonomi</a></li>
                </ul>
              </div>

              <div className="footer-links-section mt-4">
                <h4 className="footer-col-title">Lainnya</h4>
                <ul className="footer-link-list">
                  <li><a href="#" className="footer-link">Media</a></li>
                  <li><a href="#" className="footer-link">Karir & Kerelawanan</a></li>
                  <li><a href="#" className="footer-link">Kontak Kami</a></li>
                  <li><a href="#" className="footer-link">FAQ</a></li>
                  <li><a href="#" className="footer-link">Kebijakan & Privasi</a></li>
                  <li><a href="#" className="footer-link">Syarat & Ketentuan</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>Copyright &copy; 2026 Baitulmaal Muamalat</p>
            <div className="footer-bottom-badges">
              <img src={footerVector} alt="Akreditasi & Sertifikasi" />
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

          <a href="#donasi" className="bottom-nav-item">
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

      {/* AWARDS MODAL */}
      {activeAward && (
        <div className="award-modal-overlay" onClick={() => setActiveAward(null)}>
          <div className="award-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="award-modal-close" onClick={() => setActiveAward(null)} aria-label="Close modal">
              &times;
            </button>
            <div className="award-modal-image-wrapper">
              <img src={activeAward.image} alt={activeAward.title} className="award-modal-image" />
            </div>
            <h3 className="award-modal-title">{activeAward.title}</h3>
          </div>
        </div>
      )}

      {/* TESTIMONIAL MODAL */}
      {activeTestimonial && (
        <div
          className="testimonial-modal-overlay"
          onClick={() => setActiveTestimonial(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Detail Testimoni"
        >
          <div className="testimonial-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="testimonial-modal-close"
              onClick={() => setActiveTestimonial(null)}
              aria-label="Tutup modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="testimonial-modal-header">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="testimonial-modal-avatar"
              />
              <div className="testimonial-modal-info">
                <h3 className="testimonial-modal-name">{activeTestimonial.name}</h3>
                <span className="testimonial-modal-role">{activeTestimonial.role}</span>
              </div>
            </div>
            <div className="testimonial-modal-body">
              <p className="testimonial-modal-quote">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
