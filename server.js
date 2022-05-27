const express = require('express');
//Inyeccion de la dependencia de express
const app = express();
//App que hace la función de servidor
const mongoose = require('mongoose');
//Inyección de la dependecia de mongoose
const personsRoutes = require('./routes/persons'); //incluimos el router de persons

mongoose.Promise = global.Promise; //Valor de mongoose

app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended: false} ));
app.use(personsRoutes);

app.get('/', (req, res) => {
    res.render('main')
}) //Se modifica la vista

//Conectamos a la base de datos de Mongo
mongoose.connect(
    `mongodb+srv://AnaCarrizales:WSOPking@cluster0.ozcjg.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected successfully");
}); //Verificación de conectividad 


let PORT = process.env.PORT || 3000;
// definición del puerto de escucha

app.listen(PORT);