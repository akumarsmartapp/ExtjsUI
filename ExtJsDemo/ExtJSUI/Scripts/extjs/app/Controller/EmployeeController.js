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