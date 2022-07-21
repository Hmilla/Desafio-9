// use ecommerce

// 1) + 2)
db.mensajes.insert([
    { email: 'hmillar1000@gmail.com', date: '20/07/2022 18:01:00', message: 'Hola' },
    { email: 'fmilla1@gmail.com', date: '20/07/2022 18:03:00', message: 'Hola' },
    { email: 'hmillar1000@gmail.com', date: '20/07/2022 18:03:00', message: 'Como estas?' },
    { email: 'fmilla1@gmail.com', date: '20/07/2022 18:03:00', message: 'Bien y tu?' },
    { email: 'hmillar1000@gmail.com', date: '20/07/2022 18:04:00', message: 'Bien' },
    { email: 'fmilla1@gmail.com', date: '20/07/2022 18:05:00', message: 'Cuando nos reunimos para hacer el trabajo' },
    { email: 'hmillar1000@gmail.com', date: '20/07/2022 18:06:00', message: 'Puedes mañana?' },
    { email: 'fmilla1@gmail.com', date: '20/07/2022 18:08:00', message: 'nop, pero puedo el viernes' },
    { email: 'hmillar1000@gmail.com', date: '20/07/2022 18:09:00', message: 'Ok entonces viernes' },
    { email: 'fmilla1@gmail.com', date: '20/07/2022 18:10:00', message: 'Ok' }
])

db.productos.insert([
    { name: 'Chocochips', price: 120, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Chocolate', price: 580, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Helado', price: 900, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Jugo', price: 1280, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Café', price: 1700, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Chifle', price: 2342, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Chip', price: 2500, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Torta', price: 2772, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Gaseosa', price: 3350, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' },
    { name: 'Gatorade', price: 4999, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' }
])

//3)
db.mensajes.find().pretty()
db.productos.find().pretty()

//4)
db.mensajes.estimatedDocumentCount()
db.productos.estimatedDocumentCount()

//5)

//a)
db.productos.insertOne({ name: 'Limonada', price: 4998, thumbnail: 'https://concepto.de/wp-content/uploads/2019/11/producto-e1572738593909.jpg' })

//b)

//I
db.productos.find({price: {$lt: 1000}}, {_id:0, name:1} ).pretty()

//II
db.productos.find({
    $and : [
        {price: {$lt: 3000} },
        {price: {$gt: 1000} }
    ],
    
},  {_id:0, name:1}).pretty()

//III   
db.productos.find({price: {$gt: 3000} }, {_id:0, name:1}).pretty()

//IV
db.productos.find({}, {_id:0, name:1}).sort({price: 1}).limit(1).skip(2)

//c)
db.productos.updateMany({}, {$set:{stock:100}})

//d)
db.productos.updateMany({price:{$gt:4000}}, {$set:{stock:0}})

//e)
db.productos.deleteMany({price:{$lt:1000}})

//6

//use admin
db.createUser(
    {
      user: "pepe",
      pwd: "asd456",
      roles: [
         { role: "read", db: "ecommerce" }
      ]
    }
)
