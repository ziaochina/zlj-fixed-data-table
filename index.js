import pkgJson from './package.json'
import { actionMixin, componentFactory } from 'mk-meta-engine'
import './style.less'
import FixedDataTable from 'fixed-data-table-2'

//注册组件
componentFactory.registerComponent('FixedDataTable', FixedDataTable)


const meta = { name: 'root', component: '::div', _visible: 'false' }

const state = { data: {} }

@actionMixin()
class action { }

export default {
    name: pkgJson.name,
    version: pkgJson.version,
    description: pkgJson.description,
    meta,
    state,
    action
}