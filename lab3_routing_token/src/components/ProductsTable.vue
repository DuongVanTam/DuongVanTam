<template>
    <b-card-code
      title="Row details support"
      no-body
    >
      <div>
        <b-table
          :items="items"
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
        </b-table>
      </div>
    </b-card-code>
</template>

<script>
import {get} from '../assets/product'
import {
  BTable, BFormCheckbox, BAvatar
} from 'bootstrap-vue'
export default {
  name: 'ProductsTable',
  components: {
    BTable,
    BFormCheckbox,
    BAvatar
  },
  data () {
    return {
      fields: [{ key: 'img', label: 'Avatar' }, 'name', 'price', 'categories'],
      items: []
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata: async function () {
      await get({}, 1, 5).then(rs => {
        this.items = rs.data
      })
    }
  }
}
</script>
