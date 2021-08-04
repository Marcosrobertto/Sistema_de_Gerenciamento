--DDL

Create Database Sistema_de_Gerenciamento;
Go

Use Sistema_de_Gerenciamento
Go

Create Table Usuario(
	IdUsuario Int Primary Key Identity,
	Nome VARCHAR(100) NOT NULL,
	CPF VARCHAR(30) UNIQUE NOT NULL,
	Senha VARCHAR(150) NOT NULL
);
Go

Create Table TipoEquipamentos(
	IdTipoEquipamento Int Primary Key Identity,
	TipoEquipamento VARCHAR(100) NOT NULL
);
Go

Create Table Equipamentos(
	IdEquipamento Int Primary Key Identity,
	IdTipoEquipamento Int Foreign Key References TipoEquipamentos (IdTipoEquipamento),
	NomeEquipamento VARCHAR(100) NOT NULL,
	Marca VARCHAR(50) NOT NULL,
	NumeroSerie VARCHAR(100) UNIQUE NOT NULL,
	Descricao VARCHAR(100) NOT NULL,
	NumeroPatrimonio VARCHAR(110) UNIQUE NOT NULL,
	Situacao VARCHAR(100) NOT NULL 
);
Go

Create Table Sala(
	IdSala Int Primary key identity,
	Andar VARCHAR(30) NOT NULL,
	Nome VARCHAR(50) NOT NULL UNIQUE,
	Metragem VARCHAR(60) NOT NULL,
);
Go

Create Table EquipamentoSala(
	IdEquipamento Int Foreign key References Equipamentos (IdEquipamento),
	IdSala Int Foreign Key References Sala (IdSala),
	DataEntrada Date NOT NULL,
	DataSaida Date NOT NULL
);
Go