var listorder = [
    {
        idOrder: 15542356,
        user: 'john',
        address: 'Patumthani',
        product: [
            {
                idProduct: 2,
                size: "M",
                quantity: 1,
                pirece: 390000,
                img: 'img'
            },
            {
                idProduct: 7,
                size: "M",
                quantity: 1,
                pirece: 390000,
                img: 'img'
            },
            {
                idProduct: 5,
                size: "M",
                quantity: 1,
                pirece: 390000,
                img: 'img'
            }
        ],
        pirece: 45645645646,
        date: '13/04/2024',
        status: 'sending'
    },
    {
        idOrder: 15542357,
        user: 'JongSog',
        address: 'Patumthani',
        product: [
            {
                idProduct: 4,
                size: "M",
                quantity: 1,
                pirece: 390000,
                img: 'img'
            },
            {
                idProduct: 7,
                size: "M",
                quantity: 1,
                pirece: 390000,
                img: 'img'
            },
            {
                idProduct: 9,
                size: "M",
                quantity: 1,
                pirece: 390000,
                img: 'img'
            }
        ],
        pirece: 45645645646,
        date: '13/04/2024',
        status: 'Finished'
    },
];

function getOrderAll() {
    return listorder;
}

export { getOrderAll };