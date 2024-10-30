<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const products = ref([])

onMounted(() => { axios.get('http://localhost:3000/product').then((res) => { products.value = res.data }) })

const handleDelete = async (id) => {
  await axios.delete(`http://localhost:3000/product/${id}`)
  products.value = products.value.filter( (product) => product.id !== id )
}
</script>

<template>
  <h1>Index view</h1>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>description</th>
        <th>quantity</th>
        <th>actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.quantity }}</td>
        <td>
          <RouterLink :to="`/edit/${product.id}`">Edit</RouterLink>
          <button @click="handleDelete(product.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>