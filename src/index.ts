import mongoose from 'mongoose';//Funcionó ok, Fazt decidio imp {connect} en vez de mongoose
//import User from './models/User';
import Product from './models/Product';

async function connectDB() {
    const db = await mongoose.connect('mongodb://localhost/typegoosedb')
    console.log('database is connectd to', db.connection.name);
}

connectDB()
async function executeQueries(){
   /*  const user = new User({
        firstname: "Joe",
        lastname: "Doe",
        email: "    joedoe@gmail.com",
        password: "012345"
    })
    
    console.log(user)
    await user.save(); */

   /*  const users = await User.find({}, {firstname:1, _id:0})
    console.log(users) */

   /* const user =  await User.findById("63333a6dfd632f503845b890", {firstname: 1, _id:0})
    console.log(user)*/

   /* const user =  await User.findOneAndUpdate({_id:"63332fccacb08524e779d6a3"}, {firstname: "Ryan"})
    console.log(user)*/

   /*const user =  await User.findByIdAndDelete("633339016d021c545ada554e")
   console.log(user)*/

   const product = await Product.create({
    name: "laptop",
    price: 300,
    url: "product-01",
    tags: ['laptop', 'gaming', 'razer'],
    comments: [
        {
            text: 'Very good product'
        },
        {
            text: 'product x'
        }
    ]
   })
   console.log(product)

}
executeQueries()