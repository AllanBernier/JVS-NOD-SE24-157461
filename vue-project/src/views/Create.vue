<script setup>
import {ref} from 'vue'
import axios from 'axios'
import router from '@/router/index'


const product = ref({})

const handleCreate = async () => {
  await axios.post('http://localhost:3000/product', product.value)
  router.push('/')
}

</script>

<template>
  <h1>Create view</h1>

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

    <input @click.prevent="handleCreate()" type="submit" value="Créer">
  </form>
</template>