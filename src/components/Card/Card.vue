<template>
  <div>
     <h3>Card</h3>
  </div>
</template>

<script>
   import advData from '@/db.json'
   console.log(advData);
   
   export default {
      name: "Card",
      props: {
         msg: String
      },
      data() {
         return {
            advData
         }
      },
   
   }
</script>

<style>

</style>