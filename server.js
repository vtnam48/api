const App = require('./src/app.js');

const PORT = 8080;

App.listen(PORT, () => {
    console.log("Running on port: " + PORT);
});