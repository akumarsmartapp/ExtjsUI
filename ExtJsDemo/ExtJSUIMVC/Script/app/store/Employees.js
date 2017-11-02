Ext.define('ExtJSUI.store.Employees',
{
    extend: 'Ext.data.Store',
    fields: ['empId', 'empName', 'empAge', 'department', 'empAddress'],
    storeId: 'Employees',
    autoLoad: true,
    proxy:
    {
        type: 'ajax',
        reader:
        {
            root: 'data',
            type: 'json'
        },
        api:
        {
            read: 'http://localhost/WebApiEmployees/api/Employee/FindEmployee',
            create: 'http://localhost/WebApiEmployees/api/Employee/AddEmployeeDetails',
            update: 'http://localhost/WebApiEmployees/api/Employee/UpdateEmployee',
            destroy: 'http://localhost/WebApiEmployees/api/Employee/DeleteEmployee/'
        },
        actionMethods:
        {
            destroy: 'DELETE',
            read: 'GET',
            create: 'POST',
            update: 'PUT'
        }

    }
});







