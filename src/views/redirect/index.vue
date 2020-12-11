<script>
export default {
  created () {
    this.$router.push({
      name: this.$route.query.routename
    })
  }
}
</script>
