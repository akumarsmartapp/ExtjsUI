//Ext.define('EA.store.Employees',
//{
//    extend: 'Ext.data.Store',
//   // models: ['EA.model.EmployeeModel'],
//    fields: ['empId', 'empName', 'empAge', 'department', 'empAddress'],
    
//    storeId: 'Employees',
    
//    proxy:
//    {
//        type: 'ajax',
//        reader:
//        {
//            root: 'value',
//            type: 'json'
//        },
//        api:
//        {
//            read: '/WebApiEmployees/api/Employee/FindEmployee',
//            create: '/WebApiEmployees/api/Employee/AddEmployeeDetails',
//            update: '/WebApiEmployees/api/Employee/UpdateEmployee',
//            destroy: '/WebApiEmployees/api/Employee/DeleteEmployee/'
//        },
//        actionMethods:
//        {
//            destroy: 'DELETE',
//            read: 'GET',
//            create: 'POST',
//            update: 'PUT'
//        }

//    },
//    autoLoad:true,
//});



var mystore = Ext.define('EA.store.Employees', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    proxy:
    {
        type: 'ajax',
        reader:
        {
            root: 'value',
            type: 'json'
        }
    },
    fields: ['empId', 'empName', 'empAge', 'department', 'empAddress'],
    data: [
        { empId: '1', empName: 'ABC', empAge: '20', department: 'IT', empAddress: 'Bangalore' },
        { empId: '2', empName: 'ABC', empAge: '20', department: 'IT', empAddress: 'Bangalore' },
    ],
    
});