require("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const _=require("lodash");
const mongoose=require("mongoose");
const ejs=require("ejs");
const bcrypt=require("bcrypt");
const saltRounds=10;



const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/pharmacy",{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex",true);
var printMedName;
var printStock;

const pharmSchema=new mongoose.Schema({
  medName:{
    type:String,
    required:[true,"Please provide the medicine name!!"],
    unique:[true,"Name already exists!"]
  },
  stock:Number,
  price:Number,
  location:String
});

const Medicine=mongoose.model("medicine",pharmSchema);

const adminSchema=new mongoose.Schema({
  userName:{
    type:String,
    required:[true,"Please provide username"],
    unique:[true,"Please provide another username,this already exists!"]
  },
  password:String
});
// adminSchema.plugin(encrypt,{secret:process.env.SECRET,encryptedFields:['password']});
const Admin=mongoose.model("admin",adminSchema);


app.get("/",function(req,res){
  res.render("home");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.post("/",function(req,res){
  res.redirect("/");
});

app.post("/login",function(req,res){
  const buttonValue1=req.body.login;
  const buttonValue2=req.body.sign;
  if(buttonValue1==="login"){
    res.render("login");
  }
  if(buttonValue2==="sign"){
    res.render("signin");
  }

});

app.get("/signin",function(req,res){
  res.render("signin");
});



app.post("/signin",function(req,res){

  bcrypt.hash(req.body.password,saltRounds,function(err,hash){
    const admin1=new Admin({
      userName:req.body.username,
      password:hash
    });
    admin1.save(function(err){
      if(err){
        console.log(err);
      }else{
        res.render("search");
      }
    });



  });
  // const username=req.body.username;
  // const email=req.body.email;
  // const password=req.body.password;
  // const admin1=new Admin({
  //   userName:username,
  //   password:password
  // });
  // admin1.save();
  // res.render("search");

});

app.get("/contact",function(req,res){
    res.render("contact");
});

app.post("/work",function(req,res){
  var adminname=req.body.username;
  var adminpassword=req.body.password;
  Admin.findOne({userName:adminname},function(err,result){
if(err){
  console.log(err);
  return res.status(500).send();
}
if(!result){
  res.render("loginfail");
}
else{
  if(result){
    bcrypt.compare(adminpassword,result.password,function(err,same){
      if(same===true){
        res.render("search");
      }
    });
  }

}
  });
});


app.post("/add",function(req,res){
  const name=req.body.name;
  const stock=req.body.stock;
  const price=req.body.price;
  const location=req.body.location;

  const newmed=new Medicine({
    medName:name,
    stock:stock,
    price:price,
    location:location
  });
  newmed.save();
  res.render("search");
});

app.post("/return",function(req,res){
  const button1=req.body.searchbutton;
  const button2=req.body.printbutton;
  if(button1==="searchbutton"){
  res.render("search");
  }
  if(button2==="printbutton"){
    printStock=printStock-1;
    Medicine.findOneAndUpdate({medName:printMedName},{stock:printStock},function(err,result){
      if(err){
        console.log(err);
        return res.status(500).send();
      }

      else{
        res.render("print",{
          Name:result.medName,
          Price:result.price


        });
      }
    });

  }

});



app.post("/search",function(req,res){
  printMedName=req.body.smed;
  Medicine.findOne({medName:printMedName},function(err,result){

    if(err){
      console.log(err);
      return res.status(500).send();
    }
    if(!result){
      res.render("noresult");
    }
    else{
      res.render("result",{
        Name:result.medName,
        Stock:result.stock,
        price:result.price,
        location:result.location
      });
      printStock=result.stock;
    }
  });
});

app.post("/delete",function(req,res){
  const name=req.body.delmed;
  Medicine.findOneAndRemove({medName:name},function(err,result){
    if(err){
      console.log(err);
      return res.status(500).send();
    }
    if(!result){
      res.render("noresult");
    }
    else{
      // sweetalert.fire('deleted');
      res.render("search");
    }
  });




});

app.post("/back",function(req,res){
  res.render("search");
})


app.listen(3000,function(){
  console.log("server listening on port 3000");
})
