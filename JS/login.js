const conexion = require('../JS/conectar')
function Login() {
    let user = document.getElementById("Username").value
    let pass = document.getElementById("password").value

    $query = `SELECT Nombre, Pass FROM Usuario WHERE Nombre = '${user}' AND Pass = '${pass}'`;

    conexion.query($query, function (err, rows, fields) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        }
        else {
            console.log("Todo perron pa  ", rows, fields)

            if (rows.length == 0) {
                alert("Usuario o contrasena incorrectas")
            }
            else {
                location.href="../HTML/catalogo.html"
            }
        }

    })
}