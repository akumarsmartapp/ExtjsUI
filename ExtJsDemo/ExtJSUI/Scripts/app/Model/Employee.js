Ext.define('ExtJSUI.Model.Employee', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'empId',
        type: 'int',
        useNull: true
    }, 'empName', 'department', 'empAddress'],
    validations: [{
        type: 'length',
        field: 'email',
        min: 1
    }, {
        type: 'length',
        field: 'first',
        min: 1
    }, {
        type: 'length',
        field: 'last',
        min: 1
    },
    {
        name: 'empAge',
        type: 'int',
        useNull: false
    }]
});
