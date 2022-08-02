const mysql = require("mysql")
const conecta = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:"3306",
    database:"ProyectAten"
});
conecta.connect((error)=>{
    if(error){
        conecta.log('Hay un error' +error);
    }else{
        console.log('Conectado');
    }
})
module.exports=conecta;