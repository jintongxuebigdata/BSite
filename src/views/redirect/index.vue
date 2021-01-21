<template>
  <div></div>
</template>

<script>
export default {
  created () {
    this.$router.push({
      name: this.$route.query.routename
    })
  }
}
</script>

<style>

</style>
