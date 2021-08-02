const { product } = require('../model/Products.models');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    product.create({
        title,
        price,
        description,
    })
        .then(newlyProduct => response.json({product:newlyProduct}))
        .catch(err => response.json({message:"something went wrong", error:err}));
}
module.exports.findAllPrpduct = (request,response)=>{
    product.find({})
    .then(products => response.json(products))
    .catch(err => response.json(err))
 
}
 module.exports.findOneSingleProduct = (req, res)=> {
    product.findOne({_id: req.params.id})
    .then(oneSingleProduct => res.json(oneSingleProduct))
    .catch(err => res.json({message: "something went wrong", error: err}));
 } 