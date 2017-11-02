Ext.define('myApp.view.EmployeeEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.employeeEdit',

    title: 'Employee Maintenance',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'empName',
                        fieldLabel: 'Name',
                        allowBlank: false,
                        msgTarget: 'side',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Age',
                        name: 'empAge'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Department',
                        name: 'department',
                        allowBlank: false,
                        msgTarget: 'under',
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Address',
                        name: 'empAddress',
                        allowBlank: false,
                        msgTarget: 'side',
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});