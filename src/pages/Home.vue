<template>
  <div class="home">
    <div class="logo">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
   <InfoSection @initialized="handler"/>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoSection from '../components/InfoSection'

export default {
  name: 'Home',
  components: {
   InfoSection
  },
  methods: {
      handler(){
      console.log("Section Info 1 initiliazed");
   },
  }
}
</script>
