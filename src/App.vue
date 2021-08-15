<template>
  <div id="app">
    <Heade></Heade>
    <router-view></router-view>
    <Foote></Foote>
  </div>
</template>


<script>
import Heade from "./components/Heade/heade.vue"
import Foote from "./components/Foote/foote.vue"

export default {
    components:{
      Heade,
      Foote
    }
}
</script>

<style>

</style>
