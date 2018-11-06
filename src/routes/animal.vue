<template>
      <div>
            animal
        {{animalInfo}}
      </div>
</template>


<script>
export default {
  serverRequest(store) {
    return store.dispatch('getAnimalInfo')
  },
  mounted() {
    if (this.animalInfo == '') {
      this.$store.dispatch('getAnimalInfo')
    }
  },
  computed: {
    animalInfo() {
      return this.$store.state.animalInfo
    }
  }
}
</script>


<style scoped>

</style>