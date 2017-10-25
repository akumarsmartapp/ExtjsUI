Ext.create('Ext.data.Store', {
    storeId: 'employeeStore',
    fields: ['firstname', 'lastname', 'senority', 'dep', 'hired'],
    data: [
        { firstname: "Michael", lastname: "Scott" },
        { firstname: "Dwight", lastname: "Schrute" },
        { firstname: "Jim", lastname: "Halpert" },
        { firstname: "Kevin", lastname: "Malone" },
        { firstname: "Angela", lastname: "Martin" }
    ]
});

Ext.create('Ext.grid.Panel', {
    title: 'Action Column Demo',
    store: Ext.data.StoreManager.lookup('employeeStore'),
    columns: [
        { text: 'First Name', dataIndex: 'firstname' },
        { text: 'Last Name', dataIndex: 'lastname' },
    ],
    width: 250,
    renderTo: Ext.getBody()
});