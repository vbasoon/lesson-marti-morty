<template>
   <div>
  <h1>{{message}}</h1>  
  <Card @initialized="handler1"/>
  <Card @initialized="handler2"/>
  <Card @initialized="handler3"/>
  <Card @initialized="handler4"/>
  <Card @initialized="handler5"/>
</div>
</template>

<script>
   import Card from '@/components/Card/Card.vue'
export default {
   name: 'Info-Section',
   components: {
            Card,
         },
   data() {
      return {
         message: "Info-Section",
         
      }
   },
   
   methods: {
      handler1(){
      console.log("Card 1 initiliazed");
   },
   handler2(){
      console.log("Card 2 initiliazed");
   },
   handler3(){
      console.log("Card 3 initiliazed");
   },
   handler4(){
      console.log("Card 4 initiliazed");
   },
   handler5(){
      console.log("Card 5 initiliazed");
   },

   }
   

}
</script>

<style>

</style>