import { instance } from './instance'

export const getProducts = async ({ limit = 10, select = 'id' }) => {
  const { data } = await instance.get(`/products?limit=${limit}&select=${select}`)
  return data
}
