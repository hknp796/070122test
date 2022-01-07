const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
app.use(express.json());
var cors = require("cors");
const PORT = process.env.PORT || "mongodb://localhost:27017";
const bodyParser = require("body-parser");
app.use(cors());

//Login

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  data = { email: email, password: password };
  MongoClient.connect("mongodb://localhost:27017", async (err, client) => {
    const user = await client
      .db("database1")
      .collection("users")
      .findOne({ email });
 
    
      app.get("/login",(req,res)=>{
        if(user){

          res.json({user:true})
        }else{
          res.json({user:false})
        }
      })
     
  });
});
//Registration

app.post("/registration", (req, res) => {
  let { name, email, password, place } = req.body;
  console.log(name, password, email, place);
  MongoClient.connect("mongodb://localhost:27017", async (err, client) => {
    const userReg = await client
      .db("database1")
      .collection("users")
      .findOne({ email });
    if (userReg) {
      console.log("user already exist");
    } else {
      MongoClient.connect("mongodb://localhost:27017", async (err, client) => {
        const userReg = await client
          .db("database1")
          .collection("users")
          .insertOne(req.body);

        console.log("new user");
      });
    }
  });
});
// Add products
app.post("/addproducts", (req, res) => {
  let { productname, price, quantity, category } = req.body;
  console.log(productname, price, quantity, category);
  MongoClient.connect("mongodb://localhost:27017", async (err, client) => {
    const product = await client
      .db("database1")
      .collection("products")
      .findOne({ productname });
    if (product) {
      console.log("product exist");
    } else {
      MongoClient.connect("mongodb://localhost:27017", async (err, client) => {
         await client
          .db("database1")
          .collection("products")
          .insertOne(req.body);

        console.log("not exist");
      });
    }
  });
});
//Get products

app.get("/addproducts", (req, res) => {
  MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    client
      .db("database1")
      .collection("products")
      .find({})
      .toArray((err, result) => {
       
        res.json(result);
      });
  });
});
app.listen(5000);
