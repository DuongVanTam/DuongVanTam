import {getA} from '@/assets/article'

const getArticles = async function (context) {
  await getA({}, 1, 5).then(rs => {
    context.commit('setArticles', rs.data)
  })
}
const deleteArticle = async (context, payload) => {
  await context.commit('deleteArticle', payload)
}
export default {
  getArticles,
  deleteArticle
}
