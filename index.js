import React from 'react'
import pkgJson from './package.json'
import { actionMixin, registerComponent } from 'maka'
import FixedDataTable from 'maka-fixed-data-table'

import './style.less'

const name = pkgJson.name

registerComponent('FixedDataTable', FixedDataTable)

const state = {
    data: {
        list: [{
            name: 'name1',
            description: 'description1'
        }, {
            name: 'name2',
            description: 'description2'
        }]
    }
}

@actionMixin('base')
class action { 
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view ={
    component: 'FixedDataTable.Table',
    rowHeight: 50,
    headerHeight: 50,
    rowsCount: '{{data.list.length}}',
    width: 1000,
    height: 500,
    children: [{
        component: 'FixedDataTable.Column',
        columnKey: 'name',
        header: {
            component: 'FixedDataTable.Cell',
            children: 'Name'
        },
        cell:{
            _function: '(row)',
            component: 'FixedDataTable.Cell',
            children: '{{ data.list[row.rowIndex].name}}'
        },
        width: 100
    },{
        component: 'FixedDataTable.Column',
        columnKey: 'descrption',
        header: {
            component: 'FixedDataTable.Cell',
            children: 'Descrption'
        },
        cell: {
            _function: '(row)',
            component: 'FixedDataTable.Cell',
            children: '{{ data.list[row.rowIndex].description}}'
        },
        width: 100
    }]
}

export {
    name,
    view,
    state,
    action
}