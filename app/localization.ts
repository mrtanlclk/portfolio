// Centralized localization strings for the app.
export type Language = 'tr' | 'en';

export const localization = {
  tr: {
    nav: {
      about: 'Hakkımda',
      career: 'Kariyer',
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
        description: 'Merhaba! Ben Mert Anıl Çelik. 27 yaşındayım. 4 yılı aşkın bir süredir yazılım geliştirmeyle ilgileniyorum. Özellikle frontend teknolojileriyle çalışıyorum. Kod yazarken, sadece çalışan ekranlar değil, aynı zamanda ritmi ve hissi olan deneyimler yaratmayı seviyorum.',
        secondary: 'Yeni teknolojileri denerken sade, hızlı ve okunabilir kalmaya odaklanıyorum.',
      },
      career: {
        title: 'Kariyer',
        caretta: {
          title: 'Caretta',
          year: '2023 - Günümüz',
          description: 'Caretta, e-ticaret ve pazarlama alanında yenilikçi çözümler sunan bir teknoloji şirketidir. Burada, kullanıcı deneyimini geliştiren ve iş süreçlerini optimize eden projelerde çalışıyorum.',
        },
        akinon: {
          title: 'Akinon',
          year: '2022 - 2023',
          description: 'Akinon, perakende sektöründe dijital dönüşümü destekleyen bir teknoloji firmasıdır. Akinon\'da, perakende çözümlerinin geliştirilmesinde yer aldım ve sektöre yönelik yenilikçi projelerde görev aldım.',
        },
        vendrops: {
          title: 'Vendrops',
          year: '2021 - 2022',
          description: 'Vendrops, şirket yönetimi ve operasyonları için dijital çözümler sunan bir teknoloji şirketidir. Vendrops\'ta, şirketlerin operasyonel verimliliğini artıran projelerde çalıştım ve yenilikçi çözümler geliştirdim.',
        }
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
      about: 'About',
      career: 'Career',
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
        description: 'Hi! I\'m Mert Anıl Çelik. I\'m 27 years old. 4 years ago, I started my journey in software development and have been passionate about frontend technologies ever since. When I write code, I enjoy creating experiences that not only work but also have rhythm and feel.',
        secondary: 'While trying new technologies, I focus on staying simple, fast, and readable.',
      },
      career: {
        title: 'Career',
        caretta: {
          title: 'Caretta',
          year: '2023 - Present',
          description: 'Caretta is a technology company that provides innovative solutions in e-commerce and marketing. Here, I work on projects that enhance user experience and optimize business processes.',
        },
        akinon: {
          title: 'Akinon',
          year: '2022 - 2023',
          description: 'Akinon is a technology firm that supports digital transformation in the retail sector. At Akinon, I was involved in the development of retail solutions and took part in innovative projects aimed at the industry.',
        },
        vendrops: {
          title: 'Vendrops',
          year: '2021 - 2022',
          description: 'Vendrops is a technology company that provides digital solutions for company management and operations. At Vendrops, I worked on projects that enhance operational efficiency for companies and developed innovative solutions.',
        }
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
