<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>hola mundo</h1>
    <button @click="goToDaybook"  class="btn btn-primary">primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">secondar</button>
    <button @click="goToDaybook" class="btn btn-success">sucesss</button>
  </div>


</template>

<script>
export default{
  methods: {
    goToDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>




