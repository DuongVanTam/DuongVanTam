<template>
  <div>
    <b-table
      :items="dataProducts"
      :fields="fields"
      striped
      responsive
      class="mb-0"
    >
      <template #cell(img)="data">
        <b-avatar :src="data.value" />
      </template>
      <template #cell(categories)="data">
        {{ data.value[0] }}
      </template>
      <template #cell(action)="data">
        <b-icon
          icon="trash"
          @click="deleteProduct(data)"
        />
      </template>
    </b-table>
  </div>
</template>

<script>
import {
  BTable, BAvatar, BIcon,
} from 'bootstrap-vue'
import mixin from '../../mixins'

export default {
  name: 'ProductsTable',
  components: {
    BTable,
    BAvatar,
    BIcon,
  },
  mixins: [mixin],
  data() {
    return {
      fields: [{ key: 'img', label: 'Avatar' }, 'name', 'price', 'categories', 'action'],
    }
  },
  computed: {
    dataProducts() {
      return this.$store.state.danhMuc.products
    },
  },
  methods: {
    deleteProduct(product) {
      this.$store.dispatch('products/deleteProduct', product)
    },
  },
}
</script>
