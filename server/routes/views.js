const User = require('../models/user');
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


router.get('/myProfile', isAuthenticated, (req,res,next)=>{
  User.findById(req.user._id)
  .populate(hubs)
  .populate(friendList)
  .then(user=>{
    res.json(user)
  })
  .catch(err=>res.json(err))
})

router.get('/people', (req,res)=>{
  User.find()
  .then(users=>{
    res.json(users)
  })
  .catch(err=>res.json(err))
})

router.get('/people/:id', (req,res,next)=>{
  User.findById(req.params.id)
  .then(user=>{
    res.json(user)
  })
  .catch(err=>res.json(err))
})

router.post('/newHub', (req,res,next)=>{
  let hub = {}
  Hub.create(req.body)
  .then(newHub=>{
    hub = newHub;
    User.findByIdAndUpdate(hub.owner, {$push:{hubs:hub}}, {new:true})
    .catch(err=>res.json(err))
    res.json(newHub)
  })
  .catch(err=>res.json(err))
})


router.get('/hubs', (req,res)=>{
  Hub.find()
  .then(hubs=>{
    res.json(hubs)
  })
  .catch(err=>res.json(err))
})

router.get('/hubs/:id', (req,res,next)=>{
  Hub.findById(req.params.id)
  .then(hub=>{
    res.json(hub)
  })
  .catch(err=>res.json(err))
})


module.exports = router;