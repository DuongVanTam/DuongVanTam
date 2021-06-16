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
        <template #cell(text)="data">
          {{data.value | dsText}}
        </template>
        <template #cell(action)="data">
          <b-icon icon="trash" @click="deleteA(data)"></b-icon>
        </template>
      </b-table>
    </div>
</template>

<script>
import mixin from '../mixins'
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
      fields: [{ key: 'img', label: 'Avatar' }, 'name', 'categories', 'text', 'action']
    }
  },
  mixins: [mixin],
  computed: {
    a: function () {
      return this.$store.state.art.articles
    }
  },
  methods: {
    deleteA (ar) {
      this.$store.dispatch('art/deleteArticle', ar)
    }
  }
}
</script>
