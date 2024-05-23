-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projeto_individual;

USE projeto_individual;


create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(45));

create table quiz(
idQuiz int primary key,
Nome varchar(100));

create table resultado(
idResultado int auto_increment,
fkUsuario int,
fkQuiz int,
primary key(idResultado, fkUsuario, fkQuiz),
foreign key(fkUsuario) references usuario(idUsuario),
foreign key(fkQuiz) references quiz(idQuiz),
pontos int);