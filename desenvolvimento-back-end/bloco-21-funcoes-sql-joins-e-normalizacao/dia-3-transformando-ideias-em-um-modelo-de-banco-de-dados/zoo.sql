create database if not exists zoologico;
use zoologico;
create table if not exists Gerente (
  id int primary key auto_increment,
  nome varchar(50) not null
);
create table if not exists Cuidador (
  id int primary key auto_increment,
  nome varchar(50) not null,
  gerente_id int not null,
  foreign key (gerente_id) references Gerente (id)
);
create table if not exists Animal (
  id int primary key auto_increment,
  nome varchar(50),
  sexo varchar(50),
  idade int,
  especie varchar(50) not null,
  localiza ç ã o varchar(50)
);
create table if not exists Cuidador_Animal (
  cuidador_id int not null,
  animal_id int not null,
  constraint primary key (cuidador_id, animal_id)
);