var taskGrid = Ext.define('ExtJSUI.view.EmployeeDetails',
{
    extend: 'Ext.grid.Panel',
    alias: 'widget.employeedetails',
    id: 'employeeGrid',
    title: 'Employee Information',
    store: 'Employees',
    model: 'ExtJSUI.store.Employees',
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
    plugins: [Ext.create('Ext.grid.plugin.RowEditing',
            {
                clicksToEdit: 2
                //if you have checkbox in first row then take clicksToEdit=2 otherwise it will go on edit mode
            })],
    columns: [{
        text: "Employee Id",
        dataIndex: 'empId',
        width: 100
    },
    {
        text: "Employee Name",
        flex: 1,
        dataIndex: 'empName',
        editor: {
            xtype: 'textfield'
        }
    },
    {
        text: "Age",
        flex: 1,
        dataIndex: 'empAge',
        editor: {
            xtype: 'numberfield'
        }
    },
    {
        text: "Department",
        flex: 1,
        dataIndex: 'department',
        editor: {
            xtype: 'textfield'
        }
    },
    {
        text: "Employee Address",
        flex: 1,
        dataIndex: 'empAddress',
        editor: {
            xtype: 'textfield'
        }
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
            listeners:{
                click: function()
                {
                    var grid = this.up('grid');
                    var selectedRow = grid.getSelectionModel().getLastSelected();
                    var employeeStore = Ext.getStore('Employees');
                    if (selectedRow)
                        employeeStore.remove(selectedRow);
                    employeeStore.sync();
                }
            }
        }]
    }],


});


