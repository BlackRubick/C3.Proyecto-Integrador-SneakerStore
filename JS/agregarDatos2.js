var conexion = require('../JS/conectar');
/*PARTE DE ESTEBAN*/


function cargarDatos(){
	var modelo = document.getElementById("modelo").value;
	var talla = document.getElementById("talla").value;
	var precio = document.getElementById("precio").value;
	var cantidad = document.getElementById("cantidad").value;


	if(precio >= 0 && cantidad >= 0){

		$query = `INSERT INTO Inventario VALUES (0,'${modelo}','${talla}','${precio}','${cantidad}',0,1)`;
			conexion.query($query, function (err,rows){
				if(err){
					console.log("no cala el query");
					console.log(err);
					return;
				}
				alert('se insertaron los datos correctamente')
				recargar();
			});

	}else{
		console.log('por favor inserte datos positivos')
	}
	

	
}

function select (){

		var tablaR= document.getElementById("tabla");

		$query =`SELECT * FROM Inventario`;
		conexion.query($query, function(err,rows){
			if(err){
				console.log("no cala el query");
			console.log(err);
			return;
			}else{
				console.log("todo cala bien",rows);
			
				const long = rows.length;
				for(i=0; i<long;i++){
					var cadena = rows[i].id_sneakers+" "+rows[i].Modelo+" "+rows[i].Talla+" "+rows[i].Precio+" "+rows[i].Cantidad+'\n';
				
					var newRow = tablaR.insertRow(-1);
					var celdaId = newRow.insertCell(0);
					var celdaModelo = newRow.insertCell(1);
					var celdaTalla = newRow.insertCell(2);
					var celdaPrecio = newRow.insertCell(3);
					var celdaCantidad = newRow.insertCell(4);
	
					var textoId = document.createTextNode(rows[i].id_sneakers);
					var textoModelo= document.createTextNode(rows[i].Modelo);
					var textoTalla= document.createTextNode(rows[i].Talla);
					var textoPrecio= document.createTextNode(rows[i].Precio);
					var textoCantidad= document.createTextNode(rows[i].Cantidad);
	
					celdaId.appendChild(textoId);
					celdaModelo.appendChild(textoModelo);
					celdaTalla.appendChild(textoTalla);
					celdaPrecio.appendChild(textoPrecio);
					celdaCantidad.appendChild(textoCantidad);


					console.log(cadena);

					
				}
			}
		});
		
	}

document.addEventListener('DOMContentLoaded', select, false)

	function Busqueda (){
		var Busqueda= document.getElementById("buscar").value;
		$query =`SELECT * FROM Inventario WHERE nombre = '${Busqueda}'`;
		var tablaR = document.getElementById('tabla');
		conexion.query($query, function(err,rows,fields){
			if(err){
				console.log("no cala el query");
				console.log(err);
			return;
			}else{
				console.log("todo cala",rows,fields);
				
				if(rows.length == 0){
					alert("no te lo encontre carnal");
				}else{
					var cadena='';
					
					const long = rows.length;
					for(let i=0;i<long;i++){
						const element = rows[i];
						var cadena = rows[i].id_sneakers+" "+rows[i].Nombre+" "+rows[i].Marca+rows[i].Talla+rows[i].Precio+rows[i].Cantidad+rows[i].Ventas+rows[i].usuario_id_usuario+'\n';

						var newRow = tablaR.insertRow(-1);
						var celdaId = newRow.insertCell(0);
						var celdaNombre = newRow.insertCell(1);
						var celdaMarca = newRow.insertCell(2);
						var celdaTalla = newRow.insertCell(3);
						var celdaPrecio = newRow.insertCell(4);
						var celdaCantidad = newRow.insertCell(5);
						var celdaVentas = newRow.insertCell(6);
						var celdaUsuario_id_usuario = newRow.insertCell(7);
	
						var textoId = document.createTextNode(rows[i].id_sneakers);
						var textoNombre= document.createTextNode(rows[i].Nombre);
						var textoMarca= document.createTextNode(rows[i].Marca);
						var textoTalla= document.createTextNode(rows[i].Talla);
						var textoPrecio= document.createTextNode(rows[i].Precio);
						var textoCantidad= document.createTextNode(rows[i].Cantidad);
						var textoVentas= document.createTextNode(rows[i].Ventas);
						var textoUsuario_id_usuario= document.createTextNode(rows[i].usuario_id_usuario);
	
	
						celdaId.appendChild(textoId);
						celdaNombre.appendChild(textoNombre);
						celdaMarca.appendChild(textoMarca);
						celdaTalla.appendChild(textoTalla);
						celdaPrecio.appendChild(textoPrecio);
						celdaCantidad.appendChild(textoCantidad);
						celdaVentas.appendChild(textoVentas);
						celdaUsuario_id_usuario.appendChild(textoUsuario_id_usuario);
					console.log(cadena);
					}
				}	
			}
		});
	}

	function edit (){
		var modelo = document.getElementById("modelo2").value;
		var talla = document.getElementById("talla2").value;
		var precio = document.getElementById("precio2").value;
		var cantidad = document.getElementById("cantidad2").value;

		var id = document.getElementById("id").value;
			
		if (precio >= 0 && cantidad >= 0){
			console.log(id)
			$query = `UPDATE Inventario SET Modelo='${modelo}',Talla='${talla}',Precio='${precio}',Cantidad='${cantidad}' where id_sneakers = '${id}'`;
			conexion.query($query, function (err,rows){
				if(err){
					console.log("no cala el query");
					console.log(err);
					return;
				}
				console.log("todo cala bien",rows);
			});
		}else{
			alert('por favor inserte datos positivos')
		};

	}

	function borrar (){
		var id = document.getElementById("id1").value;

		console.log(id)
		$query = `DELETE FROM Inventario WHERE id_sneakers = '${id}'`;
		conexion.query($query, function (err,rows){
			if(err){
				console.log("no cala el query");
				console.log(err);
				return;
			}
			console.log("todo cala bien",rows);
		});
	}

/*================================================================================================*/



function cargarDatos2(){
	var nombre = document.getElementById("nombre3").value;
	var marca = document.getElementById("marca3").value;
	var talla = document.getElementById("talla3").value;

	$query = `INSERT INTO Usuario VALUES (0,'${nombre}','${marca}','${talla}',0,1)`;
	conexion.query($query, function (err,rows){
		if(err){
			console.log("no cala el query");
			console.log(err);
			return;
		}
		console.log("todo cala bien",rows);
	});
}

function select2 (){

		var tablaR= document.getElementById("tabla2");

		$query =`SELECT * FROM Usuario`;
		conexion.query($query, function(err,rows){
			if(err){
				console.log("no cala el query");
			console.log(err);
			return;
			}else{
				console.log("todo cala bien",rows);
			
				const long = rows.length;
				for(i=0; i<long;i++){
					var cadena = rows[i].id_usuario+" "+rows[i].Nombre+" "+rows[i].Pass+rows[i].Cargo+'\n';
					
					var newRow = tablaR.insertRow(-1);
					var celdaId = newRow.insertCell(0);
					var celdaNombre = newRow.insertCell(1);
					var celdaMarca = newRow.insertCell(2);
					var celdaCargo = newRow.insertCell(3);

					var textoId = document.createTextNode(rows[i].id_usuario);
					var textoNombre= document.createTextNode(rows[i].Nombre);
					var textoMarca= document.createTextNode(rows[i].Pass);
					var textoCargo= document.createTextNode(rows[i].Cargo);

					celdaId.appendChild(textoId);
					celdaNombre.appendChild(textoNombre);
					celdaMarca.appendChild(textoMarca);
					celdaCargo.appendChild(textoCargo)



					console.log(cadena);
				}
			}
		});
	}

	document.addEventListener('DOMContentLoaded', select2, false)

	function Busqueda2 (){
		var Busqueda= document.getElementById("buscar2").value;
		$query =`SELECT * FROM Inventario WHERE nombre = '${Busqueda}'`;
		var tablaR = document.getElementById('tabla2');
		conexion.query($query, function(err,rows,fields){
			if(err){
				console.log("no cala el query");
				console.log(err);
			return;
			}else{
				console.log("todo cala",rows,fields);
				
				if(rows.length == 0){
					alert("no te lo encontre carnal");
				}else{
					var cadena='';
					
					const long = rows.length;
					for(let i=0;i<long;i++){
						const element = rows[i];
						var cadena = rows[i].id_sneakers+" "+rows[i].Nombre+" "+rows[i].Marca+rows[i].Talla+rows[i].Precio+rows[i].Cantidad+rows[i].Ventas+rows[i].usuario_id_usuario+'\n';

						var newRow = tablaR.insertRow(-1);
						var celdaId = newRow.insertCell(0);
						var celdaNombre = newRow.insertCell(1);
						var celdaMarca = newRow.insertCell(2);
						var celdaTalla = newRow.insertCell(3);
						var celdaPrecio = newRow.insertCell(4);
						var celdaCantidad = newRow.insertCell(5);
						var celdaVentas = newRow.insertCell(6);
						var celdaUsuario_id_usuario = newRow.insertCell(7);
	
						var textoId = document.createTextNode(rows[i].id_sneakers);
						var textoNombre= document.createTextNode(rows[i].Nombre);
						var textoMarca= document.createTextNode(rows[i].Marca);
						var textoTalla= document.createTextNode(rows[i].Talla);
						var textoPrecio= document.createTextNode(rows[i].Precio);
						var textoCantidad= document.createTextNode(rows[i].Cantidad);
						var textoVentas= document.createTextNode(rows[i].Ventas);
						var textoUsuario_id_usuario= document.createTextNode(rows[i].usuario_id_usuario);
	
	
						celdaId.appendChild(textoId);
						celdaNombre.appendChild(textoNombre);
						celdaMarca.appendChild(textoMarca);
						celdaTalla.appendChild(textoTalla);
						celdaPrecio.appendChild(textoPrecio);
						celdaCantidad.appendChild(textoCantidad);
						celdaVentas.appendChild(textoVentas);
						celdaUsuario_id_usuario.appendChild(textoUsuario_id_usuario);
					console.log(cadena);
					}
				}	
			}
		});
	}

	function edit2 (){
		var nombre = document.getElementById("nombre4").value;
		var marca = document.getElementById("marca4").value;
		var talla = document.getElementById("talla4").value;

	

		var id = document.getElementById("id4").value;

		console.log(id)
		$query = `UPDATE Usuario SET Nombre='${nombre}',Pass='${marca}',Cargo='${talla}' where id_usuario = '${id}'`;
		conexion.query($query, function (err,rows){
			if(err){
				console.log("no cala el query");
				console.log(err);
				return;
			}
			console.log("todo cala bien",rows);
		});
	}

	function borrar2 (){
		var id = document.getElementById("id5").value;

		console.log(id)
		$query = `DELETE FROM Usuario WHERE id_usuario = '${id}'`;
		conexion.query($query, function (err,rows){
			if(err){
				console.log("no cala el query");
				console.log(err);
				return;
			}
			console.log("todo cala bien",rows);
		});
	}

/*================================================================================================*/

function select3 (){
	var num = 3;
	var tablaR= document.getElementById("tabla3");
	$query = `SELECT * FROM Inventario WHERE Cantidad = '${num}'`;
	conexion.query($query, function (err,rows){
		if(err){
			console.log("no funcia");
			console.log(err);
			return;
		}
		else{
			console.log("bien hecho",rows);
		
			const long = rows.length;
			for(i=0; i<long;i++){
				var cadena = rows[i].id_sneakers+" "+rows[i].Modelo+" "+rows[i].Talla+" "+rows[i].Precio+" "+rows[i].Cantidad+'\n';
				
				var newRow = tablaR.insertRow(-1);
				var celdaId = newRow.insertCell(0);
				var celdaModelo = newRow.insertCell(1);
				var celdaTalla = newRow.insertCell(2);
				var celdaPrecio = newRow.insertCell(3);
				var celdaCantidad = newRow.insertCell(4);

				var textoId = document.createTextNode(rows[i].id_sneakers);
				var textoModelo= document.createTextNode(rows[i].Modelo);
				var textoTalla= document.createTextNode(rows[i].Talla);
				var textoPrecio= document.createTextNode(rows[i].Precio);
				var textoCantidad= document.createTextNode(rows[i].Cantidad);

				celdaId.appendChild(textoId);
				celdaModelo.appendChild(textoModelo);
				celdaTalla.appendChild(textoTalla);
				celdaPrecio.appendChild(textoPrecio);
				celdaCantidad.appendChild(textoCantidad);

				console.log(cadena);
			}
		}
	});	
}
document.addEventListener('DOMContentLoaded', select3, false)





function openModal(){
	var ModalAdd = document.querySelector('#modalAdd')

	ModalAdd.style.display = 'flex';
}

function closeModal(){
	var ModalAdd = document.querySelector('#modalAdd')

	ModalAdd.style.display = 'none';
}

function openModal2(){
	var ModalAdd = document.querySelector('#modalAdd2')

	ModalAdd.style.display = 'flex';
}

function closeModal2(){
	var ModalAdd = document.querySelector('#modalAdd2')

	ModalAdd.style.display = 'none';
}

function openModal3(){
	var ModalAdd = document.querySelector('#modalAdd3')

	ModalAdd.style.display = 'flex';
}

function closeModal3(){
	var ModalAdd = document.querySelector('#modalAdd3')

	ModalAdd.style.display = 'none';
}

function openModal4(){
	var ModalAdd = document.querySelector('#modalAdd4')

	ModalAdd.style.display = 'flex';
}

function closeModal4(){
	var ModalAdd = document.querySelector('#modalAdd4')

	ModalAdd.style.display = 'none';
}

function recargar(){
	location.reload();
}