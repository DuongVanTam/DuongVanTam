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
import {getA} from '../assets/article'
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
      fields: [{ key: 'img', label: 'Avatar' }, 'name', 'categories', 'text'],
      items: []
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata: async function () {
      await getA({}, 1, 5).then(rs => {
        this.items = rs.data
      })
    }
  }
}
</script>
