const setProducts = (state, payload) => {
  state.products = payload
}
const delProduct = (state, payload) => {
  state.products.splice(state.products.indexOf(payload), 1)
}
export default {
  setProducts,
  delProduct
}
