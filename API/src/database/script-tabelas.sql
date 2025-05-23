create database Varzea;
use Varzea;

create table jogador(
id int auto_increment,
posicao varchar(45),
primary key (id)
);

create table usuario (
	id int  auto_increment,
	nome varchar(50),
	email varchar(50),
	senha varchar(50),
	fk_jogador INT,
    primary key (id),
	foreign key (fk_jogador) references jogador(id)
);

create table quiz (
	id int auto_increment,
    acertos int, 
    erro int,
    pontuacao int, 
    dataRealizada date,
    fk_usuario int,
    primary key (id),
    foreign key (fk_usuario) references usuario(id)
    );
    
    insert into jogador(posicao)
    values ('Goleiro'),
		   ('zagueiro'),
           ('Lateral'),
           ('Meio-Campo'),
           ('Atacante'),
           ('Treinador');
           
           select*from jogador;
