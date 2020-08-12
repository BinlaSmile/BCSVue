import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'
import dictionary from './dictionary'
import rules from './rules'
const config = {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: dictionary,
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur',
  fieldsBagName: 'field',
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messages will be located
  inject: true,
  locale: 'zh_CN',
  validity: false,
  useConstraintAttrs: true
}
Validator.localize('zh_CN', zh)
Vue.use(VeeValidate, config)
rules.forEach(element => {
  Validator.extend(element.name, element)
})
