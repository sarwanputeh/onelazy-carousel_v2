<template>
    <div class="slides">
        <div class="slides">
          <span class="button-left" :style="{ marginTop: (height/2)+'px'}" v-on:click="goToPrev">&#10094;</span>
          <span class="button-right" :style="{ marginTop: (height/2)+'px'}" v-on:click="goToNext">&#10095;</span>

            <div v-bind:style="{ marginLeft: '-'+slidesInnerMarginLeft+'px', width: innerWidth+'px', height: height+'px'}" class="slides-inner">
                <!-- v-bind:style  เป็นการกำหนดสไตล์โดยใช้ java script ใน htmlของvue -->
                <slider v-for="(slide,index) in slides" :key="index" :margin-left="slidesInnerMarginLeft" :client-width="innerWidth"  :index="index" v-bind:style="{ width: singleWidth+ 'px'}" v-bind:slide="slide">
                  <img slot="media" v-if="slide.show && (slide.type === 'img')" class="lazy" v-lazyload :data-src="slide.src" width="100%" :height="height?height:null" alt="A city skyline."/>
                  <iframe slot="media" v-else-if="slide.show && (slide.type === 'video')" width="100%" :height="height?height:null" v-lazyload :data-src="slide.src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </slider>
           </div>
           <div class="navigation">
             <!-- v-bind:class ="[index === currentIndex? คือเงื่อนไข่if-else ถ้าเงื่อนไขถูกก็จะเท่ากับcurrentถ้าผิดก็จะเท่ากับ'''" -->
               <span class="nav-number" v-bind:class="[index === currentIndex ? 'current': '']" v-on:click="goToSlideIndex(index)" v-for="(slide,index) in slides" :key="index" ></span>
          </div>
        <!-- <div class="image">
        </div> -->
    </div>
    </div>
</template>

<script>
import Slider from './Slider'
import lazyload from '../directives/lazyload'
export default {
  name: 'Slides',
  props: {
    height:{
      default: 200,
    },
    itemPerSlide: {
      type: null,
      default: 3
    },
    slides: {
      type: Array,
    }
  },
  components: {
    Slider
  },
  directives: {
    lazyload
  },
  data () {
    return {
      innerWidth: 0,
      singleWidth: 0,
      currentIndex: 0
    }
  },
  mounted () {
    // เป็นการดักelementที่เสร็จสมบูรณ์เข้ามาในฟังก์ชันได้
    this.$nextTick(function () {
      this.slides.map((val, index) => {
        if (index <= (this.itemPerSlide - 1)) {
          val.show = true
        }
      })
      let singleWidth = this.$el.clientWidth / this.itemPerSlide
      this.singleWidth = singleWidth // เวลาจะเรียกใช้สิ่งต่างๆที่vueมีต้องใช้this
      this.innerWidth = singleWidth * this.slides.length
    })
  },
  computed: {
    slidesInnerMarginLeft () {
      return this.currentIndex * this.singleWidth
    }
  },
  methods: {
    goToPrev () {
      //  เป็นการกำหนด this.currentIndexเท่ากับหน้าแรก
      if (this.currentIndex === 0) {
        this.currentIndex = this.slides.length - 1
        this.slides[this.currentIndex].show = true
        // คือthis.slides.length=4
        return
      }
      this.currentIndex--
      this.slides[this.currentIndex].show = true
    },
    goToNext () {
      if (this.currentIndex === this.slides.length - 1) {
        this.currentIndex = 0
        return
      }
      this.currentIndex++
      if (this.slides[(this.currentIndex + this.itemPerSlide) - 1]) {
        this.slides[(this.currentIndex + this.itemPerSlide) - 1].show = true
      }
    },
    goToSlideIndex (index) {
      this.currentIndex = index
      this.slides.map((val, i) => {
        if ((i >= (this.currentIndex)) && (i <= (this.currentIndex + this.itemPerSlide) - 1)) {
          val.show = true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slides{
    overflow: hidden;
    text-align: center;
    /* padding-top: 1200px; */
    position: relative;
}
/* slowslide */
.slides-inner {
    transition: margin 0.6s ease-out;
}

.nav-number {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.button-left,.button-right {
  cursor: pointer;
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
}
.button-right{
  right: 5px;
}
.button-left{
  left: 5px;
}
.nav-number.current{
    color:white;
    background-color:black;
}
.navigation{
  margin-top: 10px;
}
</style>
