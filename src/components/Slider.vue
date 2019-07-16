<template>
    <div class="slide">
      <div :class="slide.description?'row card': 'row'">
        <div :class="slide.description?'column': ''">
          <slot name="media"></slot>
        </div>
        <div v-if="slide.description" class="column" style="padding: 2px">
          <p>{{slide.description}}</p>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  name: 'slider', 
  data () {
    return {
      elementWidth: 0
    }
  },
  props: [
    'slide',
    'marginLeft', // ตัวหลัง- ในไฟล์slidesต้องตัวใหญ่
    'index',
    'clientWidth'
  ]
}
</script>

    <style scoped>

        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        img{
             max-width: 100%;
             display: block;
             background-repeat: no-repeat;
             background-size: contain;
        }
        .slide{
            padding: 2px;
            display: inline-block;
        }
        .column {
          float: left;
          width: 50%;
        }

        .card{
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2)
        }

        /* Clear floats after the columns */
        .row:after {
          content: "";
          display: table;
          clear: both;
        }

    </style>
