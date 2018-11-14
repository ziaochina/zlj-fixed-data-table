
zlj-fixed-data-table application for registering the maka-fixed-data-table component

## Usage
Your application can use maka-fixed-data-table components by add zlj-fixed-data-table dependency.

1. Add dependency
```bash
$ maka add zlj-fixed-data-table
```

2. Modify the view
```javascript
const view = {
    component: 'div',
    children: [{
        component: 'antd.Button',
        children: 'submit'
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

