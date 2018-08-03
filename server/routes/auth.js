const User = require('../models/user');
const passport = require('passport');
const router = require('express').Router();
const Hub = require('../models/hub');

//middlewares
function isAuthenticated(req,res,next){
  if(req.isAuthenticated()){
      return next()
  }else{
      res.redirect('/login');
  }
}

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
      res.redirect('/')
  }else{
      next();
  }
}

router.post('/login', passport.authenticate('local', {failureRedirect:'/login'}), (req,res,next)=>{
  res.json(req.user)
})

router.post('/signup', (req,res,next)=>{
  User.register(req.body, req.body.password)
  .then(user=>{
    res.json(user)
  })
  .catch(err=>res.send(err))
})

router.post('/newHub', isAuthenticated, (req,res,next)=>{
  //req.body.owner = req.user._id;      //PODRIA FALLAR
  Hub.create(req.body)
  .then(hub=>{
    res.json(hub)
  })
  .catch(err=>res.json(err))
})

router.get('/myProfile', isAuthenticated, (req,res,next)=>{
  User.findById(req.user._id)
  .then(user=>{
    res.json(user)
  })
  .catch(err=>res.json(err))
})

router.get('/profile/:id', (req,res,next)=>{
  User.findById(req.params.id)
  .then(user=>{
    res.json(user)
  })
  .catch(err=>res.json(err))
})

module.exports = router;