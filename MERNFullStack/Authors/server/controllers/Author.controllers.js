const { author } = require('../models/Author.models');
    module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
    }

    module.exports.createAuthor = (request, response) => {
        const {name} = request.body;
         author.create({
            name,
        })
            .then(newlyAuthor => response.json({author:newlyAuthor}))
            .catch(err => response.json({message:"something went wrong", error:err}));
    }
    module.exports.findAllAuthor = (request,response)=>{
        author.find({})
        .then(Authors => response.json(Authors ))
        .catch(err => response.json(err))
     
    }
     module.exports.findOneSingleAuthor = (req, res)=> {
        author.findOne({_id: req.params.id})
        .then(oneSingleAuthor => res.json(oneSingleAuthor))
        .catch(err => res.json({message: "something went wrong", error: err}));
     } 
    module.exports.ubdateAuthor =(req, res)=> {
        author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(updatedAuthor=> res.json(updatedAuthor))
            .catch(err => res.json(err))
    }
    module.exports.deleteAuthor =(req, res) =>{
        author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
    }
