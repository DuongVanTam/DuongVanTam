const setArticles = (state, payload) => {
  state.articles = payload
}
const deleteArticle = (state, payload) => {
  state.articles.splice(state.articles.indexOf(payload), 1)
}
export default {
  setArticles,
  deleteArticle
}
