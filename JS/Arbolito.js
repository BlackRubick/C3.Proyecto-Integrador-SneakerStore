var conexion = require('../JS/conectar');

function Base() {

    //Node class
    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }
        //insert(data)
        //remove(data)


        insert(data) {
            var newNode = new Node(data);
            if (this.root === null)
                this.root = newNode;
            else
                this.insertNode(this.root, newNode);
        }

        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null)
                    node.left = newNode;
                else
                    this.insertNode(node.left, newNode);
            }
            else {
                if (node.right === null)
                    node.right = newNode;
                else
                    this.insertNode(node.right, newNode);
            }
        }

        remove(data) {
            this.root = this.removeNode(this.root, data);
        }

        removeNode(node, key) {
            if (node === null)
                return null;
            else
                if (key < node.data) {
                    node.left = this.removeNode(node.left, key);
                    return node;
                }
                else {
                    if (node.left === null && node.right === null) {
                        node = null;
                        return node;
                    }
                    if (node.left === null) {
                        node = node.right;
                        return node;
                    }
                    else if (node.right === null) {
                        node = node.left;
                        return node;
                    }
                    var aux = this.findMinNode(node.right);
                    node.data = aux.data;
                    node.right = this.removeNode(node.right, aux.data);
                    return node;
                }
        }

        inorder(node) {
            if (node !== null) {


                this.inorder(node.left);
                
                var precio = node.data;

                    $query =`SELECT Precio,Modelo FROM Inventario WHERE Precio = '${precio}'`;
                    var tablaR = document.getElementById('tabla1');
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

                                    var newRow = tablaR.insertRow(-1);
                                    var celdaPrecio = newRow.insertCell(0);
                                    var celdaModelo = newRow.insertCell(1);
                
                                    var textoPrecio= document.createTextNode(rows[i].Precio);
                                    var textoModelo= document.createTextNode(rows[i].Modelo);

                                    celdaPrecio.appendChild(textoPrecio);
                                    celdaModelo.appendChild(textoModelo);

                                }
                            }	
                        }
                    }); 
                
                this.inorder(node.right);
            }
        }

        preorder(node) {
            if (node !== null) {
                
                var precio = node.data;

                    $query =`SELECT Precio,Modelo FROM Inventario WHERE Precio = '${precio}'`;
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

                                    var newRow = tablaR.insertRow(-1);
                                    var celdaPrecio = newRow.insertCell(0);
                                    var celdaModelo = newRow.insertCell(1);
                
                                    var textoPrecio= document.createTextNode(rows[i].Precio);
                                    var textoModelo= document.createTextNode(rows[i].Modelo);

                                    celdaPrecio.appendChild(textoPrecio);
                                    celdaModelo.appendChild(textoModelo);

                                }
                            }	
                        }
                    });
                this.preorder(node.left);
                this.preorder(node.right);
            }
        }

        postorden(node) {
            if (node !== null) {
                this.postorden(node.left);
                this.postorden(node.right);
                var precio = node.data;

                    $query =`SELECT Precio,Modelo FROM Inventario WHERE Precio = '${precio}'`;
                    var tablaR = document.getElementById('tabla3');
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

                                    var newRow = tablaR.insertRow(-1);
                                    var celdaPrecio = newRow.insertCell(0);
                                    var celdaModelo = newRow.insertCell(1);
                
                                    var textoPrecio= document.createTextNode(rows[i].Precio);
                                    var textoModelo= document.createTextNode(rows[i].Modelo);

                                    celdaPrecio.appendChild(textoPrecio);
                                    celdaModelo.appendChild(textoModelo);

                                }
                            }	
                        }
                    });
            }
        }

        findMinNode(node) {
            if (node.left === null)
                return node;
            else
                return this.findMinNode(node.left);
        }

        getRootNode() {
            return this.root;
        }

        search(node, data) {
            if (node === null)
                return null;
            else if (data < node.data)
                return this.search(node.left, data);
            else if (data > node.data)
                return this.search(node.right, data);
            else
                return node;
        }
    }
    var BST = new BinarySearchTree();

    /*BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);
    
    
    console.log("Dato encontrado" + " " + BST.search(BST.getRootNode(), 27).data);
    
    var root = BST.getRootNode();
    BST.inorder(root);
    BST.remove(5);
    
    var root = BST.getRootNode();
    BST.inorder(root);
    BST.remove(7);
    
    var root = BST.getRootNode();
    BST.inorder(root);
    BST.remove(15);
    */

    var tablaR= document.getElementById("tabla");
    const NikeBlue = `select Precio,Modelo from Inventario ;`;

    conexion.query(NikeBlue, function (err, rows) {
        if (err) {
            console.log("no cala el query");
            console.log(err);
            return;
        }else{
           
        if (rows.length == 0) {
            alert("Nada")

        } else {

            

            for (var i = 0 ; i < rows.length; i++) {
                BST.insert(rows[i].Precio )
                console.log(rows[i].Precio +','+ rows[i].Modelo);
            }
            var root = BST.getRootNode();
            console.log("inorder traversal");
            BST.inorder(root);      
            console.log("postorder traversal");
            BST.postorden(root);
            console.log("preorder traversal");
            BST.preorder(root);
        
        }
        }
    });
}

document.addEventListener('DOMContentLoaded', Base, false)

function select8 (){

	var tablaR= document.getElementById("tablaP");
	$query = `SELECT Modelo,Precio,Ventas, Precio * Ventas FROM Inventario `;
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
				
				
				var newRow = tablaR.insertRow(-1);
				var celdaModelo = newRow.insertCell(0);
				var celdaPrecio = newRow.insertCell(1);
                var celdaVendidos = newRow.insertCell(2);
                var celdaTotal = newRow.insertCell(3);

                var PrecioXVentas = rows[i].Precio * rows[i].Ventas
				var textoModelo= document.createTextNode(rows[i].Modelo);
				var textoPrecio= document.createTextNode(rows[i].Precio);
                var textoVendidos= document.createTextNode(rows[i].Ventas);
                var textoTotal = document.createTextNode(PrecioXVentas);

				celdaModelo.appendChild(textoModelo);
				celdaPrecio.appendChild(textoPrecio);
                celdaVendidos.appendChild(textoVendidos)
                celdaTotal.appendChild(textoTotal)


			}
		}
	});	
}
document.addEventListener('DOMContentLoaded', select8, false)



