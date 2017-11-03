Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'EA',
    appFolder: 'app',
    views: ['EA.view.employees.EmployeeList'],
    controllers: ['Employee'],
    //stores: ['Employees'],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
            { xtype: 'employeelist' }
            ]
        });
    }
});



