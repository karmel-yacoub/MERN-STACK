const Joke = require('../model/jokes.model');

module.exports.findAllJokes = (req,res)=>{
    console.log("hakuna matata")
    Joke.find()
    .then(allDaJokes => res.json({jokes: allDaJokes}))
    .catch(err =>res.json({message: "something went wrong", error: err}));

}
module.exports.findOneSingleJoke = (req, res)=> {
    Joke.findOne({_id: req.params.id})
    .then(oneSingleJoke => res.json({joke:oneSingleJoke}))
    .catch(err => res.json({message: "something went wrong", error: err}));
 }
 module.exports.createJoke =(req, res)=>{
     Joke.create(req.body)
     .then(newlyCreateJoke => res.json({joke: newlyCreateJoke}))
     .catch(err=> res.json({message: "somthing went wrong", error: err}));

 }
 module.exports.updateExistingJokes =(req, res)=>{
     console.log(req.params.id)
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true, runValidatores: true}
    )
    .then(updateJoke => res.json({user: updateJoke}))
    .catch(err=> res.json({message: "something went wrong", error:err}));
 }
 module.exports.deleteAnExistingJoke = (req, res)=>{
    Joke.findOneAndRemove({_id: req.params.id})
    .then(deleteJoke => res.json({joke:deleteJoke}))
    .catch(err => res.json({message: "something went wrong", error:err}));
 }