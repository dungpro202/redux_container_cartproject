

var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://file.hstatic.net/1000238589/file/600_iphone_7_plus_pink_800x800_1_13d94f47b9194d59aa7f8303ebda41b7_grande.jpg',
        description: 'Sản phẩm do apple sản phẩm',
        price: 500,
        inventory: 10,
        rating:4
    },
    {
        id: 2,
        name: 'SamSung galaxy S9',
        image: 'https://bachkhoamobile.com/wp-content/uploads/2021/06/637008702547566121_ss-note-10-pl-glow-1-1_3-600x600.jpg',
        description: 'Sản phẩm do sámung sản phẩm',
        price: 400,
        inventory: 15,
        rating:3

    },
    {
        id: 3,
        name: 'Realme x7 5G',
        image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/09/realme-x7-ngoc-trai.jpg',
        description: 'Sản phẩm do Oppo sản phẩm',
        price: 300,
        inventory: 5,
        rating:5

    },
]

const products =(state=initialState,action)=>{
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;