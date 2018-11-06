<template>
  <div>
    home
    <div>{{ homeInfo }}</div>
  </div>
</template>


<script>
export default {
  serverRequest(store) {
    return store.dispatch('getHomeInfo')
  },
  mounted() {
    if (this.homeInfo == '') {
      this.$store.dispatch('getHomeInfo')
    }
  },
  computed: {
    homeInfo() {
      return this.$store.state.homeInfo
    }
  }
}
</script>


<style scoped>

</style>
