<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router'
import {ref, onMounted} from 'vue'
import router from '@/router/index'


const route = useRoute()
const product = ref({})

onMounted(() => {
  axios.get(`http://localhost:3000/product/${route.params.id}`)
    .then((res) => product.value = res.data)
})

const handleEdit = async () => {

  console.log("Clicked")

  await axios.put(`http://localhost:3000/product/${route.params.id}`, product.value)
  router.push('/')
}


</script>

<template>
  <form action="">
    <div>
      <label for="name">Name </label>
      <input type="text" id="name" name="name" v-model="product.name" >
    </div>

    <div>
      <label for="description">Description </label>
      <input type="text" id="description" name="description" v-model="product.description" >
    </div>

    <div>
      <label for="quantity">Quantity </label>
      <input type="number" id="quantity" name="quantity" v-model="product.quantity">
    </div>

    <div>
      <label for="price">Price</label>
      <input type="number" id="price" name="price" v-model="product.price">
    </div>

    <input @click.prevent="handleEdit" type="submit" value="Editer">
  </form>

</template>