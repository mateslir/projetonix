ALTER USER 'root'@'localhost' 
IDENTIFIED 
with 
mysql_nativepassword	
BY 'nix123';

create database IF NOT EXISTS NixWear;
use NixWear;

DROP TABLE IF EXISTS usuario;
create table usuario(
id_usuario int primary key auto_increment not null,
user_name varchar(30) not null,
email varchar(100) not null,
senha varchar(60) not null,
telefone varchar(14) not null,
foto varchar(150) not null
);
DROP TABLE IF EXISTS vender_nix;
create table vender_nix(
id_vender_nix int primary key auto_increment not null,
usuario_id_usuario int,
nome_loja varchar(30) not null,
cpf varchar(11) not null,
nome_dono varchar(30) not null
);
DROP TABLE IF EXISTS cartao;
create table cartao(
id_cartao int primary key auto_increment not null,
usuario_id_usuario int,
card_number varchar(16) not null,
card_name varchar(30) not null,
expiry_date date not null,
cvv varchar(3) not null
);
DROP TABLE IF EXISTS perfil_usuario;
create table perfil_usuario(
id_perfil_usuario int primary key auto_increment not null,
usuario_id_usuario	int,
foreign key (user_name) references usuario(user_name),
foreign key (email) references usuario(email),
foreign key (senha) references usuario(senha),
foreign key (telefone) references usuario(telefone)
);

DROP TABLE IF EXISTS endereco;
create table endereco(
id_endereco int primary key auto_increment not null,
usuario_id_usuario int,
cep varchar(9) not null,
estado varchar(45) not null,
cidade varchar(45) not null,
bairro varchar(45) not null,	
rua_numero varchar(45) not null,
complemento varchar(45) not null
);

DROP TABLE IF EXISTS produto_nix;
create table produto_nix(
id_produto_nix int primary key auto_increment not null,
vender_nix_id_vender_nix int,
nome_produto varchar(100) not null,
preco decimal(6,2) not null,
loja varchar(30) not null
);