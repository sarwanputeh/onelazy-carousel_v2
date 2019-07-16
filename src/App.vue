<template>
  <div id="app">
    <slides :item-per-slide="1" height="300" :slides="data"/>
    <slides :item-per-slide="1" :height="150" :slides="data1"/>
    <slides :item-per-slide="1" :height="150" :slides="data2"/>
     <slides :item-per-slide="1" :height="150" :slides="data3"/>
    <counter></counter>
  </div>
</template>

<script>
import Slides from './components/slides.vue'
import Counter from './components/Counter'

export default {
  name: 'app',
  components: {
    Slides,
    Counter
  },
  data(){
    return {
      data: [
        {
          src: 'https://www.youtube.com/embed/V4X5qd3-YDg',
          type: 'video',
        
        },
        {
          src: 'https://www.youtube.com/embed/uSNK_XebOvg',
          type: 'video'
        },
        {
          src: 'https://www.youtube.com/embed/Uh17RIPq9nw',
          type: 'video'
        },
        {
          src: 'https://www.youtube.com/embed/WwjvEeZAavc',
          type: 'video'
        },
        {
          src: 'https://www.youtube.com/embed/UD9MNt2706I',
          type: 'video'
        },

        {
          src: 'https://www.youtube.com/embed/j7Tv-zVC0t0',
          type: 'video'
        },

        {
          src: 'https://www.youtube.com/embed/AvrbBntZ6YE',
          type: 'video'
        },

        {
          src: 'https://www.youtube.com/embed/Uh17RIPq9nw',
          type: 'video'
        },
        {
          src: 'https://www.youtube.com/embed/WwjvEeZAavc',
          type: 'video'
        }

      ],
      
      data1: [
        {
          src: 'https://cdn.fazwaz.com/uploads/unitType/gallery/5c6fc3465a3a601076633813/5c6fc3735a3a600f8e4f3489/medium.jpg',
          type: 'img',
          description: ' Himmapana Villas - Hills'
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5a5f275a37497d5ce75ac6c1/5c5ff2d35a3a603d1779bf34/medium.jpg',
          type: 'img',
          description: 'LUXURY POOL VILLAS HUAI YAI'
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5a5f208037497d5aaa1297f1/5a71a1e137497d752c176d21/medium.jpg',
          type: 'img',
           description: 'LUXURY POOL VILLAS HUAI YAI'
        },
        {
           src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5b8f700c37497d3b811f02fe/5b8f73dc37497d3ba85ab56c/medium.jpg',
           type: 'img',
           description: 'THE SANCTUARY HUA HIN'
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5b06313a37497d48b9158c6e/5b06328f37497d460a6fe403/medium.jpg',
          type: 'img',
           description: 'MY STYLE HUA HIN 102'
        }
      ],
      
      
      data2: [
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5d0a2f937b6aa5628c5af91a/5d0a30207b6aa562533d52e1/medium.jpg',
          type: 'img',
          description: ' THE HEIGHTS KATA'
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5bb6d34a6a478f37a82c25e2/5bbd602b6a478f1c7d5d80f8/medium.jpg',
          type: 'img',
          description: 'BAAN MAI KHAO'
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/property/gallery/581af2d337497d7e291391a7/5b18dbd437497d4885715531/medium.jpg',
          type: 'img',
           description: 'ARISTO 1'
        },
        {
           src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5c41704ae272085792451122/5c41b5b10759c2047a7875e2/medium.jpg',
           type: 'img',
           description: 'SURIN SABAI'
        }, 
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5b84b5c237497d463e5cd1e5/5b84bb7337497d47c96357c7/medium.jpg',
          type: 'img',
           description: 'SIAMESE THIRTY NINE'
        }
      ],
       
      data3: [
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5d23ea4b7b6aa5533d0e90ed/5d23eb247b6aa5522818bd07/medium.jpg',
          type: 'img',
          description: 'PATTAYA BEACH'
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unitType/gallery/58369dfb37497d195142522a/58369dfb37497d195142522b/medium.jpg',
          type: 'img',
          description: 'ARCADIA BEACH CONTINENTAL'
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5850e77137497d58180a6342/5bf233c6f9569d7cb641a382/medium.jpg',
          type: 'img',
           description: 'SIAM ROYAL VIEW'
        },
        {
           src: 'https://cdn.fazwaz.com/uploads/unitType/gallery/5836a1ef37497d195142551c/5836a1ef37497d195142551d/medium.jpg',
           type: 'img',
           description: 'THE CLOUD'
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/property/gallery/581af2d337497d7e2913915a/5c74b9c15a3a6010e5500af3/medium.jpg',
          type: 'img',
           description: 'DUSIT GRAND PARK'
        }
      ]
    }
  }
}
</script>

<style>

#app {
 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
