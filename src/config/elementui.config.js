import Vue from 'vue'
import {
  Input,
  Button,
  Select,
  Option,
  Loading,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Container,
  Header,
  Aside,
  Table,
  Main,
  Row,
  Col,
  TableColumn,
  MessageBox,
  Message,
  Transfer,
  DatePicker,
  Form,
  FormItem,
  Pagination,
  Dialog,
  Progress,
  Breadcrumb,
  BreadcrumbItem,
  Tree,
  Radio,
  RadioGroup,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  OptionGroup,
  Upload,
  Tag,
  Tooltip
} from 'element-ui'
Vue.use(OptionGroup)
Vue.use(MenuItemGroup)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Progress)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Container)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Header)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Transfer)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tree)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Upload)
Vue.use(Tag)
Vue.use(Tooltip)
Vue.prototype.$loading = Loading
Vue.prototype.$messageBox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
