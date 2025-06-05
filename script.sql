Create database BancodeDados;
use BancodeDados;

create table tb_usuario(
id_usuario int auto_increment primary key,
nm_login varchar(60),
nm_usuario varchar(60),
nm_email varchar(70),
nm_senha varchar(20),
nr_telefone char(11),
nm_local_foto varchar(250)
);

