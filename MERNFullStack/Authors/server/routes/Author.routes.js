const AuthorController = require('../controllers/Author.controllers');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.post('/api/new', AuthorController.createAuthor);
    app.get('/api/author',AuthorController.findAllAuthor);
    app.get('/api/author/:id',AuthorController.findOneSingleAuthor);
    app.put('/api/author/:id', AuthorController.ubdateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}


