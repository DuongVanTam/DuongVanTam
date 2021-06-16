import {get} from '@/assets/product'
// import {getA} from '../../assets/article'

const getProducts = async function (context) {
  await get({}, 1, 5).then(rs => {
    context.commit('setProducts', rs.data)
  })
}
const deleteProduct = async (context, payload) => {
  await context.commit('delProduct', payload)
}

export default {
  getProducts,
  deleteProduct
}
