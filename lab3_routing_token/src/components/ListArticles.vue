<template>
    <div>
      <b-table
        :items="dataArticles"
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
          <b-icon icon="trash" @click="deleteArticles(data)"></b-icon>
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
  name: 'ArticlesTable',
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
    dataArticles: function () {
      return this.$store.state.articles.articles
    }
  },
  methods: {
    deleteArticles (article) {
      this.$store.dispatch('articles/deleteArticle', article)
    }
  }
}
</script>
