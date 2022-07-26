var conexion = require("../JS/conectar");

	function blue(){

		var cantidad = "Nike X Off White Blue";
		var id = 1 ; 
		$query= `select Modelo,Cantidad,Ventas from Inventario where Modelo = '${cantidad}' ;`;
		
		conexion.query($query, function(err, rows, fields){
			if(err){
				console.log("Error en el query");
				console.log(err);
				return;
			}else{
				tamano = rows.length;
				am = rows[0].Cantidad
				au = rows[0].Ventas
				console.log(am);
				console.log(au);
	
				if(tamano == 0){
					alert("Producto sin stock :( ");
				}else{
	
					let disminuir = am - 1;
					
					console.log(disminuir)
					$query= `update Inventario set Cantidad = ${disminuir} where id_sneakers = ${id}`;
					
					conexion.query($query, function(err, rows, fields){
						if(err){
							console.log("Error en el query");
							console.log(err);
							return;
						}else{
							console.log("si chavo")


							
						}
					});

					let aumentar = au + 1
					$query = `update Inventario set Ventas = ${aumentar} where id_sneakers = ${id}`;
					conexion.query($query, function(err1, rows, fields){
						if(err1){
							console.log("Error en el query");
							console.log(err1);
							return;
						}else{
							console.log("si chavo")
							location.reload();
						}
					});
				}
			}
		});

		
	
	}


	function chicago(){


		var cantidad = "Nike X Off White Chicago";
		var id = 2 ; 
		$query= `select Modelo, Cantidad,Ventas from Inventario where Modelo = '${cantidad}' ;`;
		
		conexion.query($query, function(err, rows, fields){
			if(err){
				console.log("Error en el query");
				console.log(err);
				return;
			}else{
				tamano = rows.length;
				am = rows[0].Cantidad
				au = rows[0].Ventas
				console.log(am);
	
				if(tamano == 0){
					alert("Producto sin stock :( ");
				}else{
	
					let disminuir = am - 1;
					console.log(disminuir)
					$query= `update inventario set Cantidad = ${disminuir} where id_sneakers = ${id}`;
					conexion.query($query, function(err, rows, fields){
						if(err){
							console.log("Error en el query");
							console.log(err);
							return;
						}else{
							console.log("si chavo")
						}
					})


					let aumentar = au + 1
					const Menos = `update Inventario set Ventas = ${aumentar} where id_sneakers = ${id}`;
					conexion.query(Menos, function(err1, rows, fields){
						if(err1){
							console.log("Error en el query");
							console.log(err1);
							return;
						}else{
							console.log("si chavo")
							location.reload();
						}
					});
				}
			}
		});
	
	}
	


	
	function bad(){


		var cantidad = "Adidas X Bad Bunny";
		var id = 6 ; 
		$query= `select Modelo, Cantidad, Ventas from Inventario where Modelo = '${cantidad}' ;`;
		
		conexion.query($query, function(err, rows, fields){
			if(err){
				console.log("Error en el query");
				console.log(err);
				return;
			}else{
				tamano = rows.length;
				am = rows[0].Cantidad
				au = rows[0].Ventas
				console.log(am);
	
				if(tamano == 0){
					alert("Producto sin stock :( ");
				}else{
	
					let disminuir = am - 1;
					console.log(disminuir)
					$query= `update inventario set Cantidad = ${disminuir} where id_sneakers = ${id}`;
					conexion.query($query, function(err, rows, fields){
						if(err){
							console.log("Error en el query");
							console.log(err);
							return;
						}else{
							console.log("si chavo")
						}
					})

					let aumentar = au + 1
					const Menos = `update Inventario set Ventas = ${aumentar} where id_sneakers = ${id}`;
					conexion.query(Menos, function(err1, rows, fields){
						if(err1){
							console.log("Error en el query");
							console.log(err1);
							return;
						}else{
							console.log("si chavo")
							location.reload();
						}
					});
				}
			}
		});
	
	}


function dior(){


	var cantidad = "Nike X Dior";
	var id = 3 ; 
	$query= `select Modelo, Cantidad, Ventas from Inventario where Modelo = '${cantidad}' ;`;
	
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            tamano = rows.length;
			am = rows[0].Cantidad
			au = rows[0].Ventas
			console.log(am);

            if(tamano == 0){
                alert("Producto sin stock :( ");
            }else{

				let disminuir = am - 1;
				console.log(disminuir)
				$query= `update inventario set Cantidad = ${disminuir} where id_sneakers = ${id}`;
				conexion.query($query, function(err, rows, fields){
					if(err){
						console.log("Error en el query");
						console.log(err);
						return;
					}else{
						console.log("si chavo")
					}
				})

				let aumentar = au + 1
					const Menos = `update Inventario set Ventas = ${aumentar} where id_sneakers = ${id}`;
					conexion.query(Menos, function(err1, rows, fields){
						if(err1){
							console.log("Error en el query");
							console.log(err1);
							return;
						}else{
							console.log("si chavo")
							location.reload();
						}
					});
			}
        }
    });

}


function yess(){


	var cantidad = "Adidas Yeezy Foam";
	var id = 4 ; 
	$query= `select Modelo, Cantidad,Ventas from Inventario where Modelo = '${cantidad}' ;`;
	
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            tamano = rows.length;
			am = rows[0].Cantidad
			au = rows[0].Ventas
			console.log(am);

            if(tamano == 0){
                alert("Producto sin stock :( ");
            }else{

				let disminuir = am - 1;
				console.log(disminuir)
				$query= `update inventario set Cantidad = ${disminuir} where id_sneakers = ${id}`;
				conexion.query($query, function(err, rows, fields){
					if(err){
						console.log("Error en el query");
						console.log(err);
						return;
					}else{
						console.log("si chavo")
					}
				})

				let aumentar = au + 1
					const Menos = `update Inventario set Ventas = ${aumentar} where id_sneakers = ${id}`;
					conexion.query(Menos, function(err1, rows, fields){
						if(err1){
							console.log("Error en el query");
							console.log(err1);
							return;
						}else{
							console.log("si chavo")
							location.reload();
						}
					});
			}
        }
    });

}



function mag(){


	var cantidad = "Nike Mag";
	var id = 5; 
	$query= `select Modelo, Cantidad,Ventas from Inventario where Modelo = '${cantidad}' ;`;
	
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            tamano = rows.length;
			am = rows[0].Cantidad
			au = rows[0].Ventas
			console.log(am);

            if(tamano == 0){
                alert("Producto sin stock :( ");
            }else{

				let disminuir = am - 1;
				console.log(disminuir)
				$query= `update inventario set Cantidad = ${disminuir} where id_sneakers = ${id}`;
				conexion.query($query, function(err, rows, fields){
					if(err){
						console.log("Error en el query");
						console.log(err);
						return;
					}else{
						console.log("si chavo")
					}
				})

				let aumentar = au + 1
					const Menos = `update Inventario set Ventas = ${aumentar} where id_sneakers = ${id}`;
					conexion.query(Menos, function(err1, rows, fields){
						if(err1){
							console.log("Error en el query");
							console.log(err1);
							return;
						}else{
							console.log("si chavo")
							location.reload();
						}
					});
			}
        }
    });

}




function tra(){


	var cantidad = "Nike X Travis Scott";
	var id = 7 ; 
	$query= `select Modelo, Cantidad, Ventas from Inventario where Modelo = '${cantidad}' ;`;
	
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            tamano = rows.length;
			am = rows[0].Cantidad
			au = rows[0].Ventas
			console.log(am);

            if(tamano == 0){
                alert("Producto sin stock :( ");
            }else{

				let disminuir = am - 1;
				console.log(disminuir)
				$query= `update inventario set Cantidad = ${disminuir} where id_sneakers = ${id}`;
				conexion.query($query, function(err, rows, fields){
					if(err){
						console.log("Error en el query");
						console.log(err);
						return;
					}else{
						console.log("si chavo")
					}
				})

				let aumentar = au + 1
					const Menos = `update Inventario set Ventas = ${aumentar} where id_sneakers = ${id}`;
					conexion.query(Menos, function(err1, rows, fields){
						if(err1){
							console.log("Error en el query");
							console.log(err1);
							return;
						}else{
							console.log("si chavo")
							location.reload();
						}
					});
			}
        }
    });

}




function buscar(){
    var nombre = document.getElementById("buscador").value;
    $query = `select * from usuario where nombre = '${nombre}';`;
    
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            tamano = rows.length;
            if(tamano == 0){
                alert("Este Usuario no existe en la tabla :( ");
            }else{
				alert("Usuario encotrado wuju :)")
                for(i=0; i<tamano; i++){
                    var tablaR = document.getElementById("tabla");
        
                    var newRow = tablaR.insertRow(-1);
                    var celdaID = newRow.insertCell(0);
                    var celdaUsuario = newRow.insertCell(1);
        
                    var textoId = document.createTextNode(rows[i].id_Usuario);
                    var textoUsuario = document.createTextNode(rows[i].Nombre);
        
                    celdaID.appendChild(textoId);
                    celdaUsuario.appendChild(textoUsuario);
					
					
                }
            }
        }
    });
}

function select (){

	var Mostrar = 1;

	$query =`SELECT * FROM Inventario WHERE id_sneakers = '${Mostrar}'`;
	conexion.query($query, function(err,rows){
		if(err){
			console.log("no cala el query");
		console.log(err);
		return;
		}else{
			console.log("todo cala bien",rows);
			var modelo = rows[0].Modelo
			document.getElementById('modelo').value =modelo;
			var talla = rows[0].Talla
			document.getElementById('talla').value =talla;
			var precio = rows[0].Precio
			document.getElementById('precio').value ='$'+ precio;
			var cantidad = rows[0].Cantidad
			document.getElementById('cantidad').value = cantidad;	
			

		}
	});
	
}

document.addEventListener('DOMContentLoaded', select, false)

function select2 (){

	var Mostrar = 2;

	$query =`SELECT * FROM Inventario WHERE id_sneakers = '${Mostrar}'`;
	conexion.query($query, function(err,rows){
		if(err){
			console.log("no cala el query");
		console.log(err);
		return;
		}else{
			console.log("todo cala bien",rows);
			var modelo1 = rows[0].Modelo
			document.getElementById('modelo1').value =modelo1;
			var talla1 = rows[0].Talla
			document.getElementById('talla1').value =talla1;
			var precio1 = rows[0].Precio
			document.getElementById('precio1').value ='$'+ precio1;
			var cantidad1 = rows[0].Cantidad
			document.getElementById('cantidad1').value = cantidad1;	
			

		}
	});
	
}

document.addEventListener('DOMContentLoaded', select2, false)

function select3 (){

	var Mostrar = 6;

	$query =`SELECT * FROM Inventario WHERE id_sneakers = '${Mostrar}'`;
	conexion.query($query, function(err,rows){
		if(err){
			console.log("no cala el query");
		console.log(err);
		return;
		}else{
			console.log("todo cala bien",rows);
			var modelo1 = rows[0].Modelo
			document.getElementById('modelo2').value =modelo1;
			var talla1 = rows[0].Talla
			document.getElementById('talla2').value =talla1;
			var precio1 = rows[0].Precio
			document.getElementById('precio2').value ='$'+ precio1;
			var cantidad1 = rows[0].Cantidad
			document.getElementById('cantidad2').value = cantidad1;	
			

		}
	});
	
}

document.addEventListener('DOMContentLoaded', select3, false)

function select4 (){

	var Mostrar = 3;

	$query =`SELECT * FROM Inventario WHERE id_sneakers = '${Mostrar}'`;
	conexion.query($query, function(err,rows){
		if(err){
			console.log("no cala el query");
		console.log(err);
		return;
		}else{
			console.log("todo cala bien",rows);
			var modelo1 = rows[0].Modelo
			document.getElementById('modelo3').value =modelo1;
			var talla1 = rows[0].Talla
			document.getElementById('talla3').value =talla1;
			var precio1 = rows[0].Precio
			document.getElementById('precio3').value ='$'+ precio1;
			var cantidad1 = rows[0].Cantidad
			document.getElementById('cantidad3').value = cantidad1;	
			

		}
	});
	
}

document.addEventListener('DOMContentLoaded', select4, false)

function select5 (){

	var Mostrar = 4;

	$query =`SELECT * FROM Inventario WHERE id_sneakers = '${Mostrar}'`;
	conexion.query($query, function(err,rows){
		if(err){
			console.log("no cala el query");
		console.log(err);
		return;
		}else{
			console.log("todo cala bien",rows);
			var modelo1 = rows[0].Modelo
			document.getElementById('modelo4').value =modelo1;
			var talla1 = rows[0].Talla
			document.getElementById('talla4').value =talla1;
			var precio1 = rows[0].Precio
			document.getElementById('precio4').value ='$'+ precio1;
			var cantidad1 = rows[0].Cantidad
			document.getElementById('cantidad4').value = cantidad1;	
			

		}
	});
	
}

document.addEventListener('DOMContentLoaded', select5, false)

function select6 (){

	var Mostrar = 5;

	$query =`SELECT * FROM Inventario WHERE id_sneakers = '${Mostrar}'`;
	conexion.query($query, function(err,rows){
		if(err){
			console.log("no cala el query");
		console.log(err);
		return;
		}else{
			console.log("todo cala bien",rows);
			var modelo1 = rows[0].Modelo
			document.getElementById('modelo5').value =modelo1;
			var talla1 = rows[0].Talla
			document.getElementById('talla5').value =talla1;
			var precio1 = rows[0].Precio
			document.getElementById('precio5').value ='$'+ precio1;
			var cantidad1 = rows[0].Cantidad
			document.getElementById('cantidad5').value = cantidad1;	
			

		}
	});
	
}

document.addEventListener('DOMContentLoaded', select6, false)

function select7 (){

	var Mostrar = 7;

	$query =`SELECT * FROM Inventario WHERE id_sneakers = '${Mostrar}'`;
	conexion.query($query, function(err,rows){
		if(err){
			console.log("no cala el query");
		console.log(err);
		return;
		}else{
			console.log("todo cala bien",rows);
			var modelo1 = rows[0].Modelo
			document.getElementById('modelo6').value =modelo1;
			var talla1 = rows[0].Talla
			document.getElementById('talla6').value =talla1;
			var precio1 = rows[0].Precio
			document.getElementById('precio6').value ='$'+ precio1;
			var cantidad1 = rows[0].Cantidad
			document.getElementById('cantidad6').value = cantidad1;	
			

		}
	});
	
}

document.addEventListener('DOMContentLoaded', (select7), false)





function recargar(){
	location.reload();
}



