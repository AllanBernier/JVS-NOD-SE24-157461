<script setup>
import { ref } from 'vue'


  const products = ref([
    {id: 1, name: "Ordinateur portable", description: "Ordinateur portable haute performance", price: 999.99, quantity: 10},
    {id: 2, name: "Smartphone", description: "Téléphone intelligent dernière génération", price: 699.99, quantity: 15},
    {id: 3, name: "Casque audio", description: "Casque sans fil avec réduction de bruit", price: 199.99, quantity: 20},
    {id: 4, name: "Tablette", description: "Tablette tactile 10 pouces", price: 349.99, quantity: 8},
    {id: 5, name: "Montre connectée", description: "Montre intelligente avec suivi d'activité", price: 149.99, quantity: 12}
  ])

  const handleDelete = () => {
    console.log("Clicked")
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
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.description}}</td>
        <td>{{product.quantity}}</td>
        <td>
          <RouterLink :to="`/edit/${product.id}`" >Edit</RouterLink>
          <button @click="handleDelete()" >Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>