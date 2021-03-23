<template>
   <div>
  <h1>{{message}}</h1>  
  <Card/>
</div>
</template>

<script>
   import Card from '@/components/Card.vue'
export default {
   name: 'Info-Section',
   data() {
      return {
         message: "Hello. It's Info-Section",
         components: {
            Card
         }
      }
   }

}
</script>

<style>

</style>