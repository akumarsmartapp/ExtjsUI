Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'EmployeeApp',
    path: 'app',
    autoCreateViewport: true,
    controllers: ['EmployeeController'],
    launch: function () {

        //Manage Application

    }
});