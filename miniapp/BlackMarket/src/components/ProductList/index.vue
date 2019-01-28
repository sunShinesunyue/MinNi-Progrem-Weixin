<template>
  <div>
     <p>产品列表</p>
     <div v-for="(item, index) in products" :key="index">
       <h3>{{item.name}}</h3>
     </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<!--
<script>
export default {
  props: ['products'],
  mounted(){
    console.log(123)
  }
}
</script>
-->

<style lang="less" scoped>

</style>
