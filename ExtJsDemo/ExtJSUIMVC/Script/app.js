//Ext.Loader.setConfig({ enabled: true });
//Ext.application({

//    name: 'myApp',
//    appFolder: 'app',

//    controllers: ['EmployeeController'],

//    launch: function () {
//        Ext.create('Ext.container.Container', {
//            renderTo: 'myExample',
//            height: 250,
//            width: 500,
//            margin: '5 5 5 5 ',
//            layout: 'fit',
//            items: [
//                {
//                    xtype: 'employeedetails'
//                }
//            ]
//        });
//    }
//});


Ext.Loader.setConfig({ enabled: true });
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'ExtJSUI',
    renderTo: 'myExample',
    stores: ['Employees'],
    launch: function () {
        Ext.create('Ext.container.Viewport',
        {
            layout: 'fit',
            items: [{
                alias: 'employeedetails'
            }]
        });
    }
});

