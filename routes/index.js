var express = require('express');
var router = express.Router();

const credentials={
  email:"saymyname@gmail.com",
  password:'walterwhite'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login System' });
});

router.post('/login',(req,res)=>{
  if(req.body.email==credentials.email&&req.body.password==credentials.password){
    req.session.user=req.body.email;
    res.redirect('/dashboard')
  }else{
    res.end('Invalid Username')
  }
})

router.get('/dashboard',(req,res)=>{
  if(req.session.user){
    res.render('dashboard',{user:req.session.user})
  }
  else{
    res.send("invalid user")
  }
})
router.get('/logout',(req,res)=>{
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    }else{
      res.render('index',{title:"Express",logout:"logout successfully..!"})
    }
  })
})

module.exports = router;
