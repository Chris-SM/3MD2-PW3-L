Create database BancodeDados;
use BancodeDados;

create table tb_usuario(
id_usuario int auto_increment primary key,
nm_login varchar(60) not null,
nm_usuario varchar(60) not null,
nm_email varchar(70) not null,
nm_senha varchar(20) not null,
nr_telefone char(11),
nm_local_foto text
);

insert into tb_usuario value(null,"ChrisSales","Admin","Admin@gmail.com","Admin@123",null,null);