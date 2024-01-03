const express = require("express");
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3030);

app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result= result.toObject();
    delete result.password;
    res.send({ 'status': true, 'data': result });
})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.send({ result: "User not found." });
        }
    } else {
        res.send({ result: "All field required." });
    }
});

app.post('/add-product', async (req, res) =>{
    let product= new Product(req.body);
    let result= await product.save();
    res.send(result);
})

app.get('/products', async (req, res) =>{
    let products= await Product.find({});
    if(products.length){
        res.send(products);
    }else{
        res.send({result: "Product not found."});
    }
})

app.delete('/product/:id', async (req, res) =>{
    try{
        let result= await Product.deleteOne({_id: req.params.id});
        res.send(result);
    }catch(err){
        res.send({result: "Product not found."});
    }
});

app.get('/product/:id', async (req, res) =>{
    try{
        let product= await Product.findOne({_id: req.params.id});
        res.send(product);
    }catch(err){
        res.send({result: "Product not found."});
    }
});
