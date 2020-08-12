const dictionary = {
  zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: field => `${field}不能为空`,
      pwd: field => `${field}格式不正确`,
      twoDecimal: field => `${field}必须保留两位小数`,
      rate: field => `${field}不大于100且最多2位小数`,
      maxTwoDecimal: field => `${field}最多保留两位小数`,
      numbers: filed => `${filed}只能是正整数`
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      userName: '用户名',
      encoder: '验证码',
      code: '编码',
      name: '名称',
      sort: '顺序'
    }
  }
}
export default dictionary
