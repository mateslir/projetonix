

create database IF NOT EXISTS NixWear;
use NixWear;

DROP TABLE IF EXISTS usuario;
create table usuario(
id_usuario int primary key auto_increment not null,
user_name varchar(30) not null,
email varchar(100) not null,
senha varchar(60) not null,
telefone varchar(30),
foto varchar(150) default 'imagens/Group 9 (1).png',
tipo_usuario int default '1'
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
img_produto varchar(255),
nome_produto varchar(100),
descricao_produto varchar (255),
preco int,
loja varchar(30),
id_vendedor int
);


create table carrinho (
	id_carrinho int auto_increment primary key,
	id_usuario int,
	id_produto_nix int,
    foreign key (id_produto_nix) references produto_nix(id_produto_nix),
    foreign key (id_usuario) references usuario(id_usuario) 
);