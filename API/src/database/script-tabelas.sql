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
    erros int,
    pontuacao int,	
    data_realizada datetime,
    fk_usuario int,
    foreign key (fk_usuario) references usuario(id),
    primary key (id)
    );
    
   
    insert into jogador(posicao)
    values ('Goleiro'),
		   ('zagueiro'),
           ('Lateral'),
           ('Meio-Campo'),
           ('Atacante'),
           ('Treinador');
                      
	select u.nome as Nome, q.erros as Erros, q.pontuacao as Pontuação, data_realizada as Data_Realizada
    from quiz q
    inner join usuario u on u.id = q.fk_usuario;
   

   select*from quiz;
   
   
   
   select s.nome, s.email , j.posicao
   from jogador j
   inner join usuario s on s.fk_jogador = j.id
   where s.nome like '%bruno%';
