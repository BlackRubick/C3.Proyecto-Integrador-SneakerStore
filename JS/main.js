const { ipcMain } = require("electron");

ipcMain.handle('login',(event,obj) =>{
    validatelogin(obj)
});

function validatelogin(obj){
const {Username,password} = obj
const Usuarios = "SELECT * FROM Usuarios WHERE Usuario =? AND contrasena=?"


}