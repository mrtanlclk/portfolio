// Centralized localization strings for the app.
export type Language = 'tr' | 'en';

export const localization = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      readings: 'Okumalar',
    },
    home: {
      hello: 'Merbaha',
      description: 'Ben Mert Anıl Çelik',
      description2: 'Frontend Developer\'ım.',
      description3: 'Kodlardan, kelimelerden ve sayfalardan oluşan dünyama hoş geldin. Burası; hayata geçirdiğim projeleri, aklımdan geçenleri ve ufkumu açan kitapları derlediğim yer.',
    },
    routes: {
      about: {
        title: 'Hakkımda',
        description: 'Arayüzleri sadece çalışan ekranlar olarak değil, ritmi ve hissi olan deneyimler olarak kurmayı seviyorum.',
        secondary: 'Yeni teknolojileri denerken sade, hızlı ve okunabilir kalmaya odaklanıyorum.',
      },
      projects: {
        title: 'Projeler',
        description: 'Burada canlıya aldığım arayüzler, denemeler ve yan ürünler yer alır.',
        secondary: 'Her projede performans, detay ve görsel tutarlılık benim için öncelikli.',
      },
      blog: {
        title: 'Blog',
        description: 'Düşüncelerimi, öğrendiklerimi ve küçük notları burada toplarım.',
        secondary: 'Kısa teknik yazılar ve üretim sürecinden çıkan notlar için bir alan.',
      },
      readings: {
        title: 'Okumalar',
        description: 'Beni etkileyen kitaplar, makaleler ve keşifler burada birikir.',
        secondary: 'Zihni açan, bakışı genişleten ve üretime yön veren okuma listesi.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      readings: 'Readings',
    },
    home: {
      hello: 'Hello',
      description: 'I am Mert Anıl Çelik',
      description2: "I am a Frontend Developer.",
      description3: "Welcome to my world of codes, words, and pages. This is where I share the projects I've brought to life, the thoughts that cross my mind, and the books that have broadened my horizons.",
    },
    routes: {
      about: {
        title: 'About',
        description: 'I like building interfaces as experiences with rhythm and feel, not just screens that work.',
        secondary: 'While trying new technologies, I focus on staying simple, fast, and readable.',
      },
      projects: {
        title: 'Projects',
        description: 'This is where I keep the interfaces, experiments, and side products I have shipped.',
        secondary: 'Performance, detail, and visual consistency stay at the top of my list on every project.',
      },
      blog: {
        title: 'Blog',
        description: 'I collect my thoughts, lessons learned, and short notes here.',
        secondary: 'A space for brief technical posts and notes that come out of the build process.',
      },
      readings: {
        title: 'Readings',
        description: 'Books, articles, and discoveries that shaped me live here.',
        secondary: 'A reading list that expands perspective and feeds future work.',
      },
    },
  },
} as const;
