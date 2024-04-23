// // type OrderStatus = 'incoming' | 'preparing' | 'completed' | 'cancelled'

// // submit order
// // POST
// // http://localhost:5005/api/v1/order
// const order = {
//   table: 1,
//   orderIem: [
//     {
//       name: 'Maguro Nigiri',
//       price: 45,
//       quantity: 1,
//       category: 'sushi',
//     },
//     {
//       name: 'Maguro Nigiri',
//       price: 45,
//       quantity: 1,
//       category: 'sushi',
//     },
//   ],
// }

// // get order by table Number
// // GET
// // http://localhost:5005/api/v1/order/:table
// const orderItem = [
//   {
//     name: 'Maguro Nigiri',
//     price: 45,
//     quantity: 1,
//     category: 'sushi',
//   },
//   {
//     name: 'Maguro Nigiri',
//     price: 45,
//     quantity: 1,
//     category: 'sushi',
//   },
// ]

// // Change order status
// // PUT
// // http://localhost:5005/api/v1/order/:id
// const orderStatus = {
//   status: 'completed',
// }

// // response kitchen data
// // GET
// // http://localhost:5005/api/v1/order
// const kitchenData = [
//   {
//     id: '1234',
//     status: 'peparing',
//     table: 1,
//     orderIem: [
//       {
//         name: 'Maguro Nigiri',
//         price: 45,
//         quantity: 1,
//         category: 'sushi',
//       },
//       {
//         name: 'Maguro Nigiri',
//         price: 45,
//         quantity: 1,
//         category: 'sushi',
//       },
//     ],
//   },
//   {
//     id: '1234',
//     status: 'completed',
//     table: 2,
//     orderIem: [
//       {
//         name: 'Maguro Nigiri',
//         price: 45,
//         quantity: 1,
//         category: 'sushi',
//       },
//       {
//         name: 'Maguro Nigiri',
//         price: 45,
//         quantity: 1,
//         category: 'sushi',
//       },
//     ],
//   },
// ]

// const orderData = [
//   {
//     name: 'Maguro Nigiri',
//     price: 45,
//     quantity: 1,
//     category: 'sushi',
//   },
//   {
//     name: 'Maguro Nigiri',
//     price: 45,
//     quantity: 1,
//     category: 'sushi',
//   },
//   {
//     name: 'Maguro Nigiri',
//     price: 45,
//     quantity: 1,
//     category: 'sushi',
//   },
// ]

const mockData = [
  {
    name: 'Sake Nigiri',
    price: 30,
    image: 'SakeNigiri',
    category: 'sushi',
  },
  {
    name: 'Ebi Nigiri',
    price: 45,
    image: 'EbiNigiri',
    category: 'sushi',
  },
  {
    name: 'Maguro Nigiri',
    price: 45,
    image: 'MaguroNigiri',
    category: 'sushi',
  },
  {
    name: 'Saba Nigiri',
    price: 30,
    image: 'SabaNigiri',
    category: 'sushi',
  },
  {
    name: 'Ika Nigiri',
    price: 30,
    image: 'IkaNigiri',
    category: 'sushi',
  },
  {
    name: 'Amaebi Nigiri',
    price: 45,
    image: 'AmaebiNigiri',
    category: 'sushi',
  },
  {
    name: 'Hotate Nigiri',
    price: 45,
    image: 'HotateNigiri',
    category: 'sushi',
  },
  {
    name: 'Unagi Nigiri',
    price: 20,
    image: 'UnagiNigiri',
    category: 'sushi',
  },
  {
    name: 'Green Tea',
    price: 30,
    image: 'GreenTea',
    category: 'drinks',
  },
  {
    name: 'Black Tea',
    price: 30,
    image: 'BlackTea',
    category: 'drinks',
  },
  {
    name: 'Coke can',
    price: 45,
    image: 'CokeCan',
    category: 'drinks',
  },
  {
    name: 'FIJI Water',
    price: 80,
    image: 'FijiWater',
    category: 'drinks',
  },
  {
    name: 'Bober Tea',
    price: 60,
    image: 'BoberTea',
    category: 'drinks',
  },
  {
    name: 'Dessert 01',
    price: 155,
    image: 'Dessert01',
    category: 'dessert',
  },
  {
    name: 'Dessert 02',
    price: 185,
    image: 'Dessert02',
    category: 'dessert',
  },
  {
    name: 'Dessert 03',
    price: 90,
    image: 'Dessert03',
    category: 'dessert',
  },
]

// // console.log('orderItem', JSON.stringify(orderItem))
// // console.log('kitchenData', JSON.stringify(kitchenData))
// console.log('kitchenData', JSON.stringify(order))
console.log('kitchenData', JSON.stringify(mockData))
