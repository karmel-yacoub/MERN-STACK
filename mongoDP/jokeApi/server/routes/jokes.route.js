const JokeController= require ('../controller/jokes.controller');

module.exports = app =>{
    app.get('/api/jokes',JokeController.findAllJokes);
    app.get('/api/jokes/:id',JokeController.findOneSingleJoke);
    app.post('/api/jokes',JokeController.createJoke);
    app.put('/api/jokes/:id',JokeController.updateExistingJokes);
    app.delete('/api/jokes/:id',JokeController.deleteAnExistingJoke);
}