<template>
  <!-- <q-page class="dashboard-container">
    <q-card class="q-pa-md" style="max-width: 800px; margin: auto;">
      <q-card-section>
        <q-input outlined v-model="searchQuery" placeholder="Search products..." />
        <q-select outlined v-model="selectedCategory" label="Category" :options="categoryOptions" />
      </q-card-section>

      <q-separator />

      <q-card-section class="q-pa-md">
        <q-card v-for="product in filteredProducts" :key="product.id" class="product-card">
          <q-img :src="product.image" :alt="product.name" class="q-mb-sm" />
          <q-card-section>
            <q-card-title>{{ product.name }}</q-card-title>
            <q-card-text class="text-grey">{{ /*product.price | currency*/ '1000.00' }}</q-card-text>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
  </q-page> -->
  <div>
    <p>aquí iría el dashboard</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'dash_board',
  setup () {
    const searchQuery = ref<string>('')
    const selectedCategory = ref<string>('')

    const products = ref([
      { id: 1, name: 'Product 1', price: 100, image: '/path-to-image1.jpg', category: 'electronics' },
      { id: 2, name: 'Product 2', price: 200, image: '/path-to-image2.jpg', category: 'clothing' },
      { id: 3, name: 'Product 3', price: 300, image: '/path-to-image3.jpg', category: 'home' }
      // Añadir más productos según sea necesario
    ])

    const filteredProducts = computed(() => {
      return products.value.filter(product => {
        return (
          product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
          (selectedCategory.value === '' || product.category === selectedCategory.value)
        )
      })
    })

    const categoryOptions = [
      { label: 'All Categories', value: '' },
      { label: 'Electronics', value: 'electronics' },
      { label: 'Clothing', value: 'clothing' },
      { label: 'Home', value: 'home' }
      // Añadir más opciones según las categorías de tus productos
    ]

    return {
      searchQuery,
      selectedCategory,
      filteredProducts,
      categoryOptions
    }
  }
})
</script>

<style scoped>
.product-card {
  max-width: 200px;
  margin: 10px;
}
</style>
