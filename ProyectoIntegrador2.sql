Create database TiendaSneakers;
use TiendaSneakers;


grant usage on tiendasneakers.* to Esteban identified by '1234';
grant select on tiendasneakers.* to Esteban;

use mysql;
select * from user;

create table Inventario(
id_sneakers int not null auto_increment,
Modelo varChar(255) not null,
Talla int not null,
Precio int not null,
Cantidad int not null,
id_tienda int not null,
primary key (id_sneakers),
constraint fkInventario_Tienda
foreign key (id_tienda)
references Tienda (id_tienda)
);

create table Usuario(
id_usuario int not null auto_increment,
Nombre varChar(255) not null,
Pass varChar(255) not null,
Cargo varChar(255) not null,
id_tienda int not null,
primary key (id_usuario),
constraint fkUsuario_Tienda
foreign key (id_tienda)
references Tienda (id_tienda)
);

create table Tienda(
id_tienda int not null auto_increment,
Nombre varChar(255) not null,
Localizacion varChar(255) not null,
primary key (id_tienda)
);

create table Cliente(
id_cliente int not null auto_increment,
Nombre varChar(255) not null,
Apellido varChar(255) not null,
Modelo varChar(255) not null,
Talla int not null,
id_tienda int not null,
primary key (id_cliente),
constraint fkCliente_Tienda
foreign key (id_tienda)
references Tienda (id_tienda)
);
drop table Cliente;
drop table Usuario;
drop table Inventario;
drop table Tienda;

select * from Inventario;
select * from Usuario;
select * from Cliente;
select * from Tienda;

truncate table Inventario;

drop table Inventario;
drop table Usuario;

SELECT * FROM Inventario
WHERE Cantidad = 1;

select * from Inventario;
select * from Cliente;