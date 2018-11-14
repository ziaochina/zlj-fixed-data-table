
zlj-fixed-data-table application for registering the maka-fixed-data-table component

## Usage
Your application can use maka-fixed-data-table components by add zlj-fixed-data-table dependency.

1. Add dependency
```bash
$ maka add zlj-fixed-data-table
```

2. Modify the view
```javascript

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

const view = {
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
        cell: {
            _function: '(row)',
            component: 'FixedDataTable.Cell',
            children: '{{ data.list[row.rowIndex].name}}'
        },
        width: 100
    }, {
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
```

3. Modify the index.html
```html
<script>
    window.main = function (maka) {
        maka.load(['zlj-fixed-data-table']).then(()=>{
            maka.render('yourApp','app')
        })
    }
<script>
```

## Download and run

1. Download
2. Decompress
3. Enter decompress directory
4. Run
```bash
$ yarn install
$ yarn start
```

## License

MIT

