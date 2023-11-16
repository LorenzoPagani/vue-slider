const { createApp } = Vue

createApp({
  data () {
    return {
      slides: [
        {
          immagine:
            'https://img.freepik.com/free-vector/welcome-pattern-different-languages_23-2147870141.jpg',
          titolo: 'Benvenuti nel nostro sito',
          testo:
            'Esplora la nostra vasta gamma di prodotti e scopri offerte speciali.'
        },
        {
          immagine:
            'https://img.freepik.com/free-vector/spring-sale-instagram-post_23-2148849921.jpg',
          titolo: 'Nuova collezione primavera',
          testo:
            'Scopri le ultime tendenze della moda con la nostra collezione primavera.'
        },
        {
          immagine:
            'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg',
          titolo: 'Offerte speciali',
          testo:
            'Approfitta delle nostre offerte speciali. Sconti incredibili solo per te!'
        }
      ],
      counter: 0
    }
  },
  methods: {
    back () {
      if (this.counter == 0) {
        this.counter = this.slides.length - 1
      } else {
        this.counter--
      }
    },
    next () {
      if (this.counter < this.slides.length - 1) {
        this.counter++
      } else {
        this.counter = 0
      }
    },
    selectImg (index) {
      this.counter = index
    },
    startAutoSlide () {
      this.autoplay = setInterval(() => {
        this.next()
      }, 3000)
    },
    stopAutoSlide () {
      clearInterval(this.autoplay)
    }
  }
  /* mounted () {
    this.startAutoSlide() 
  } */
}).mount('#app')
