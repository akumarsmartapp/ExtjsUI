//Ext.define('myApp.view.EmployeeDetail', {
//    extend: 'Ext.grid.Panel',
//    alias: 'widget.employeedetail',
//    title: 'List of Employee',
//    store: 'Employees',
//    dockedItems: [{
//        xtype: 'pagingtoolbar',
//        store: 'Employees',
//        dock: 'bottom',
//        displayInfo: true,
//        items: [
//                {
//                    xtype: 'tbseparator'
//                },
//                {
//                    xtype: 'button',
//                    text: 'Add Product',
//                    action: 'add'
//                }
//        ]
//    }],

//    initComponent: function () {
//        console.log('initcomponent');
//        this.columns = [
//        //       {
//        //           header: 'Employee ID',
//        //           dataIndex: 'empId',
//        //           flex: 1
//        //       },
//        //       {
//        //           header: 'Employee Name',
//        //           dataIndex: 'empName',
//        //           flex: 2
//        //       },
//        //       {
//        //           header: 'Department',
//        //           dataIndex: 'department',
//        //           flex: 1
//        //       },
//        //       {
//        //           header: 'Address',
//        //           dataIndex: 'empAddress',
//        //           flex: 1
//        //       },
//        //{
//        //    header: 'Age',
//        //    dataIndex: 'empAge',
//        //    flex: 1
//        //}
//        {
//            text: "Employee Id",
//            dataIndex: 'empId',
//            width: 100
//        },
//    {
//        text: "Employee Name",
//        flex: 1,
//        dataIndex: 'empName',
//        //editor: {
//        //    xtype: 'textfield'
//        //}
//    },
//    {
//        text: "Age",
//        flex: 1,
//        dataIndex: 'empAge',
//        //editor: {
//        //    xtype: 'numberfield'
//        //}
//    },
//    {
//        text: "Department",
//        flex: 1,
//        dataIndex: 'department',
//        //editor: {
//        //    xtype: 'textfield'
//        //}
//    },
//    {
//        text: "Employee Address",
//        flex: 1,
//        dataIndex: 'empAddress',
//        //editor: {
//        //    xtype: 'textfield'
//        //}
//    }
//        ];

//        this.callParent(arguments);
//    }
//});

var taskGrid = Ext.define('ExtJSUI.view.EmployeeDetails',
{
    extend: 'Ext.grid.Panel',
    alias: 'widget.employeedetails',
    id: 'employeeGrid',
    title: 'Employee Information',
    store: 'Employees',
    model: 'EmployeeModel',
    width: '100%',
    height: 200,
    selType: 'checkboxmodel',
    selModel:
    {
        mode: 'MULTI'
    },
    viewConfig:
    {
        stripeRows: true
    },
    //plugins: [Ext.create('Ext.grid.plugin.RowEditing',
    //        {
    //            clicksToEdit: 2
    //            //if you have checkbox in first row then take clicksToEdit=2 otherwise it will go on edit mode
    //        })],
    columns: [{
        text: "Employee Id",
        dataIndex: 'empId',
        width: 100
    },
    {
        text: "Employee Name",
        flex: 1,
        dataIndex: 'empName',
        //editor: {
        //    xtype: 'textfield'
        //}
    },
    {
        text: "Age",
        flex: 1,
        dataIndex: 'empAge',
        //editor: {
        //    xtype: 'numberfield'
        //}
    },
    {
        text: "Department",
        flex: 1,
        dataIndex: 'department',
        //editor: {
        //    xtype: 'textfield'
        //}
    },
    {
        text: "Employee Address",
        flex: 1,
        dataIndex: 'empAddress',
        //editor: {
        //    xtype: 'textfield'
        //}
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        ui: 'footer',
        layout:
        {
            pack: 'center'
        },
        defaults:
        {
            minWidth: 80
        },
        items: [
        {
            text: 'Create',
            itemId: 'btnCreate',
            listeners: {
                click: function () {
                    //var employeeStore = Ext.getStore('Employees');
                    ////var employeeModel = Ext.ModelManager.getModel('Employee');
                    ////console.log(employeeModel);
                    ////employeeStore.insert(0, new employeeModel());
                    //rowEditing.startEdit(0, 0);
                    //var selectedRow = grid.getSelectionModel().getLastSelected();
                    //if (selectedRow)
                    //    employeeStore.sync();

                    var grid = this.up('grid');
                    var employeeStore = Ext.getStore('Employees');

                    var employeeModel = Ext.create('ExtJSUI.store.Employees');
                    Ext.data.employeeModel.set("empName", "New Employee's name");
                    Ext.data.employeeModel.set("empAge", "New Employee's age");
                    Ext.data.employeeModel.set("department", "New Employee's Department");
                    Ext.data.employeeModel.set("empAddress", "New Employee's Address");

                    studentStore.add(employeeModel);

                    grid.editingPlugin.startEdit(employeeModel, 3);
                }
            }
        },
        {
            text: 'Load Data',
            itemId: 'btnLoad',
            listeners: {
                click: function () {
                    var employeeStore = Ext.getStore('Employees');
                    employeeStore.load();
                }
            }
        },
        {
            text: 'Save',
            itemId: 'btnSave',
            iconCls: 'icon-save',
            listeners: {
                click: function () {
                    var employeeStore = Ext.getStore('Employees');
                    employeeStore.sync();
                }
            }
        },
        {
            text: 'Delete',
            itemId: 'btnDelete',
            iconCls: 'icon-delete',
            listeners: {
                click: function () {
                    var grid = this.up('grid');
                    var selectedRow = grid.getSelectionModel().getLastSelected();
                    var employeeStore = Ext.getStore('Employees');
                    if (selectedRow)
                        employeeStore.remove(selectedRow);
                }
            }
        },
        {
            text: 'Show Window',
            itemId: 'btnShow',

            listeners: {

                click: function () {
                    Ext.create('Ext.window.Window',
                        {
                            title: 'Employee Details',
                            id: 'newTodoListWindow',
                            minHeight: 500,
                            minWidth: 800,
                            layout: 'fit',
                            closable: true,
                            cls: 'windowPad',
                            closeAction: 'destroy',
                            defaultFocus: 'todoTitle',
                            items: [
                                    Ext.create('Ext.grid.Panel', {
                                        title: 'Grid',
                                        // ,width: 300
                                        height: 400,
                                        margin: 20,
                                        forceFit: true,
                                        store: 'Employees',
                                        tbar: [{
                                            text: 'Save',
                                            itemId: 'btnSave',
                                            iconCls: 'icon-save',
                                            listeners: {
                                                click: function () {
                                                    var employeeStore = Ext.getStore('Employees');
                                                    employeeStore.sync();
                                                }
                                            }
                                        }],
                                        plugins: [Ext.create('Ext.grid.plugin.RowEditing',
                                            {
                                                clicksToEdit: 2
                                            })],
                                        columns: [

                                            {
                                                dataIndex: 'empId',
                                                text: 'ID',
                                                width: 30,
                                            }, {
                                                dataIndex: 'empName',
                                                text: 'Name',
                                                editor: {
                                                    xtype: 'textfield'
                                                }
                                            }, {
                                                dataIndex: 'empAge',
                                                text: 'Age',
                                                editor: {
                                                    xtype: 'numberfield'
                                                }
                                            },
                                        {
                                            dataIndex: 'department',
                                            text: 'Department',
                                            editor: {
                                                xtype: 'textfield'
                                            }
                                        },
                                        {
                                            dataIndex: 'empAddress',
                                            text: 'Address',
                                            editor: {
                                                xtype: 'textfield'
                                            }
                                        }

                                        ]
                                    })
                            ]
                        }).show();
                }
            }
        },

        {
            text: 'Show Window with Form',
            itemId: 'btnShowform',
            listeners: {
                click: function () {

                }
            }

        },

        {
            text: 'Show Iframe',
            itemId: 'btnIframe',

            listeners: {
                click: function () {
                    Ext.create('Ext.Panel', {
                        width: 300,
                        height: 100,
                        title: 'Title',
                        layout: 'vbox',
                        frame: true,
                        renderTo: Ext.getBody(),
                        items: [
                            {
                                xtype: 'button',
                                text: 'Click to review and update your profile',
                                handler: function (b, e) {
                                    var myWin = Ext.create("Ext.window.Window", {
                                        title: 'HTML Window',
                                        modal: true,
                                        html: '<iframe src="http://www.cnn.com" width="100%" height="100%" ></iframe>',
                                        width: 700,
                                        height: 500
                                    });
                                    myWin.show();
                                }
                            }
                        ]
                    }
                    )
                }
            }
        }
        ]
    }],


});






