<template>
      <div>
        <b-table
          :items="a"
          :fields="fields"
          striped
          responsive
          class="mb-0"
        >
          <!-- full detail on click -->

          <template #cell(img)="data">
            <b-avatar :src="data.value" />
          </template>
          <template #cell(categories)="data">
            {{data.value[0]}}
          </template>
          <template #cell(action)="data">
            <b-icon icon="trash" @click="deleteP(data)"></b-icon>
          </template>
        </b-table>
      </div>
</template>

<script>
import mixin from '../mixins'
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
    a: function () {
      return this.$store.state.data.products
    }
  },
  methods: {
    deleteP (p) {
      this.$store.dispatch('data/deleteProduct', p)
    }
  }
}
</script>
