let rules = [
  {
    name: 'phone',
    getMessage: () => `手机号码格式不正确`,
    validate (value) {
      return (
        value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
      )
    }
  },
  {
    name: 'pwd',
    validate (value) {
      // 必须含有字母和数字，长度在6-16位之间
      return /(?=.*[a-z])(?=.*\d)(?![#@!~%^&*])[a-z\d#@!~%^&*]{6,16}$/i.test(value)
    }
  },
  {
    name: 'rate',
    validate (value) {
      // 100以内的正数，最多2位小数
      return /^(100(\.0{1,2})?|(([1-9]\d{0,1}|0)(\.\d{1,2})?))$/g.test(value)
    }
  },
  {
    name: 'twoDecimal',
    validate (value) {
      // 2位小数
      return /^\d{1,}\.\d{2}$/.test(value)
    }
  },
  {
    name: 'maxTwoDecimal',
    validate (value) {
      // 最多2位小数
      return /^([1-9][0-9]*(\.\d{1,2})?|(0(\.\d{1,2})?))$/g.test(value)
    }
  },
  {
    name: 'numbers',
    validate (value) {
      // 最多2位小数
      return /^[1-9]\d*$/g.test(value)
    }
  }
]

export default rules
