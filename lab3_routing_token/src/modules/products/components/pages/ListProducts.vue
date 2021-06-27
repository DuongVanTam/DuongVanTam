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
            {{data.value[0]}}
          </template>
          <template #cell(action)="data">
            <b-icon icon="trash" @click="deleteProduct(data)"></b-icon>
          </template>
        </b-table>
      </div>
</template>

<script>
import mixin from '../../../../mixins'
import {
  BTable, BFormCheckbox, BAvatar, BIcon
} from 'bootstrap-vue'
export default {
  name: 'ProductsTable',
  components: {
    BTable,
    BFormCheckbox,
    BAvatar,
    BIcon
  },
  data () {
    return {
      fields: [{ key: 'img', label: 'Avatar' }, 'name', 'price', 'categories', 'action']
    }
  },
  mixins: [mixin],
  computed: {
    dataProducts: function () {
      return this.$store.state.products.products
    }
  },
  methods: {
    deleteProduct (product) {
      this.$store.dispatch('products/deleteProduct', product)
    }
  }
}
</script>
