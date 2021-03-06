const ProductsController = require('../controller/Products.controller');
module.exports = function(app){
    app.get('/api', ProductsController.index);
    app.post('/api/product', ProductsController.createProduct);
    app.get('/api/product',ProductsController.findAllPrpduct);
    app.get('/api/product/:id',ProductsController.findOneSingleProduct);
    app.put('/api/product/:id', ProductsController.ubdateProduct);
    app.delete('/api/product/:id', ProductsController.deleteProduct);


}
