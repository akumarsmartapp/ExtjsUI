Ext.define('myApp.controller.EmployeeController', {
    extend: 'Ext.app.Controller',
    stores: ['Employees'],
    models: ['EmployeeModel'],
    views: ['EmployeeDetail', 'EmployeeEdit'],

    init: function () {
        this.control({
            'container > panel': {
                render: this.onPanelRendered
            },
            'itemList': {
                itemdblclick: this.editItem
            },
            'itemList button[action=add]': {
                click: this.addItem
            },
            'itemEdit button[action=save]': {
                click: this.updateItem
            }
        });
    },

    onPanelRendered: function () {
        console.log('The panel was rendered');
    },

    editItem: function (grid, record) {
        var view = Ext.widget('employeeEdit');
        view.down('form').loadRecord(record);
    },

    updateItem: function (button) {
        var win = button.up('window');
        var form = win.down('form').getForm();
        //check of the form has any errors
        if (form.isValid()) {
            //get the record 
            var record = form.getRecord();
            //get the form values
            var values = form.getValues();
            //if a new record
            if (!record) {
                var newRecord = new myApp.model.Product(values);
                this.getProductsStore().add(newRecord);
            }
                //existing record
            else {
                record.set(values);
            }
            win.close();
            //save the data to the Web local Storage
            this.getProductsStore().sync();
        }
    },

    addItem: function (button) {
        var view = Ext.widget('employeeEdit');
    }
});