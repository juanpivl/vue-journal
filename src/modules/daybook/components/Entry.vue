

<template>
  <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name:'entry',params:{id:10}})"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">14</span>
      <span class="mx-1 fs-5">Junio</span>
      <span class="mx-2 f2-light">2023,jueves</span>
    </div>
    <div class="entry-description">
      Sint qui et est ex sint ad aute ex mollit commodo mollit esse fugiat et.
      Consequat labore adipisicing ex sit velit esse fugiat laborum ut ea Lorem
      ullamco velit id. Qui aliquip consectetur incididunt aliquip reprehenderit
      consectetur cupidatat laborum qui id.
    </div>
  </div>
</template>

<script>
export default {};
</script>



<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>

