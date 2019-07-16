<template>
  <div>
    {{ count }}
    <button @click="increment">{{msg}}</button>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {}
    },
    data() {
      return {
        count: 0
      }
    },

    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>