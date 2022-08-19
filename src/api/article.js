import axios from '@/api/axios'

const getArticle = (slug) => {
  return axios
    .get(`/articles/${slug}`)
    .then((response) => response.data.article)
}
const createArticle = (articleInput) => {
  return axios
    .post('/articles', {article: articleInput})
    .then((response) => response.data.article)
}
const updateArticle = (slug, articleInput) => {
  return axios
    .put(`/articles/${slug}`, {article: articleInput})
    .then((response) => response.data.article)
}
export default {
  getArticle,
  createArticle,
  updateArticle,
}
