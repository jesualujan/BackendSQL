//* PASO 1: INSTALAR LAS DEPENDENCIAS NECESARIAS: EXPRESS 
//* ASEGURARNOS DE TENER INSTALADO NODEJS Y NPM EN NUESTROS ORDENADORES
//* LUEGO, EN LA CARPETA RAIZ DEL PROYECTO Y EJECUTAR LO SIGUIENTE:
//* npm init --y : package.json con información básica
//* npm install express 

//! VAMOS HACER UN EJEMPLO DE COMO LEVANTAR UN SERVIDOR CON EXPRESS

// PASO 2: TRAERNOS A EXPRESS Y CREAR UNA APLICACIÓN SENCILLA CON EXPRESS
const express = require('express')
const app = express()

//PASO 3 DEFINIR NUESTRAS RUTAS 
app.get('/bienvenido', function(req,res){
    res.send('HOLA DESDE EXPRESS')
})

app.get('/', function(req,res){
    res.send('PAGINA PRINCIPAL')
})

app.get('/alumnos', function(req,res){
    res.send('PORTAL PARA ALUMNOS DE DEVF! 🧑‍🎓')
})

app.get('/senseis', function(req,res){
    res.send('PORTAL PARA SENSEIS DE DEVF! 🥋')
})


//PASO 4 INICIAR EL SERVIDOR 
const port = 3000 //PUEDEN CAMBIAR EL NÚMERO DEL PUERTO SI LO DESEAN
app.listen(port, () => {
    console.log("SERVIDOR EN EJECUCION EN: " + `http://localhost:${port}`)
})