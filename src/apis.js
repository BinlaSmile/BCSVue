const apis = {
  
}
for (let attr in apis) {
  apis[attr] = process.env.VUE_APP_PROXY + apis[attr]
}
export default apis
