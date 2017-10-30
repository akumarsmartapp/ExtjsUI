Ext.define('controller.EmployeeController',
{
    extend: 'Ext.app.Controller',
    models: ['ExtJSUI.store.Employees'],
    stores: ['ExtJSUI.store.Employee'],
    views: ['ExtJSUI.view.EmployeeDetails'],
    refs: [{
        ref: 'employeeDetails',
        selector: 'viewport EmployeeDetails'
    }]
});
