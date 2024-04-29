var listorder = [
    {
        idOrder: 13,
        user: 'john',
        address: 'Patumthani',
        product: [
            {
                sku: 2,
                quantity: 1,
                pirece: 3715.00,
                img: 'img'
            },
            {
                sku: 7,
                quantity: 1,
                pirece: 690.00,
                img: 'img'
            },
            {
                sku: 8,
                quantity: 1,
                pirece: 1360.00,
                img: 'img'
            }
        ],
        totalPrice: 5765.00,
        date: "13/04/2024",
        status: "sending"
    },
    {
        idOrder: 14,
        user: 'JongSog',
        address: 'Patumthani',
        product: [
            {
                idProduct: 6,
                quantity: 1,
                pirece: 7192.89,
                img: 'img'
            },
            {
                idProduct: 10,
                quantity: 1,
                pirece: 570.00,
                img: 'img'
            },
            {
                idProduct: 9,
                quantity: 1,
                pirece: 763.00,
                img: 'img'
            }
        ],
        totalPrice: 8519.89,
        date: '13/04/2024',
        status: 'Finished'
    },
];

function getOrderAll() {
    return listorder;
}

export { getOrderAll };