<template>
  <div class="full-width-container">
    <!-- Contenido del dashboard -->
    <div class="dashboard-container">
      <!-- Barra de búsqueda y filtros -->
      <q-card class="q-pa-md" style="max-width: 800px; margin: auto;">
        <q-card-section>
          <q-input outlined v-model="searchQuery" placeholder="Buscar productos..." />
          <q-select outlined v-model="selectedCategory" label="Categoría" :options="categoryOptions" />
        </q-card-section>
      </q-card>

      <q-separator />

      <!-- Espacio para productos en cards -->
      <q-card-section class="q-pa-md">
        <q-card v-for="product in filteredProducts" :key="product.id" class="product-card">
          <q-img :src="product.image" :alt="product.name" class="q-mb-sm" />
          <q-card-section>
            <q-card-text class="text-grey"></q-card-text>
          </q-card-section>
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ product.name }}
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              S/.{{ product.price }}
            </div>
            <div class="text-caption text-grey">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>
        </q-card>
      </q-card-section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'Dash_board',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const searchQuery = ref('')
    const selectedCategory = ref('')

    const products = ref([
      { id: 1, name: 'LAPTOP', price: 2400.34, image: 'https://www.lacuracao.pe/media/catalog/product/1/5/15-fd0007la-1000x1000px.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', category: 'electronics' },
      { id: 2, name: 'CASACA PARA HOMBRE', price: 176.56, image: 'https://riffandraff.pe/cdn/shop/files/STORMI-VMILITAR5.jpg?v=1683906326', category: 'clothing' },
      { id: 3, name: 'ROPERO', price: 300.12, image: 'https://oechsle.vteximg.com.br/arquivos/ids/15194570-1500-1500/image-aa268f0cc6864d308ba124a225011c50.jpg?v=638280025564800000  ', category: 'home' }
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
      { label: 'Todas las categorías', value: '' },
      { label: 'Electrónica', value: 'electronics' },
      { label: 'Ropa', value: 'clothing' },
      { label: 'Hogar', value: 'home' }
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
.full-width-container {
  width: 100%;
  max-width: 100%;
}

.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card {
  max-width: 200px;
  margin: 10px;
}
</style>
