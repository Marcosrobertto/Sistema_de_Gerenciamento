--DML

Use Sistema_de_Gerenciamento;
Go

Insert into Usuario(Nome,CPF,Senha)
Values		('Paulo','413.842.290-00','paulo123');
			
Go

Insert into TipoEquipamentos(TipoEquipamento)
Values		('Mobiliário'),
			('Informatica'),
			('EletroEletronico'),
			('Som'),
			('Multimidia');
Go

Insert Into Equipamentos(IdTipoEquipamento,NomeEquipamento,Marca,NumeroSerie,Descricao,NumeroPatrimonio,Situacao)
Values		('1','Cadeira','Finora','524632','Cadeira de Escritorio','532459','1'),
			('3','Notebook','HP','575236','Notebook Focado para trabalho em Escritorio','615796','1'),
			('4','Caixa Ambiente','Bravox','978649', 'Caixa de som para Ambiente Escolar','386818','1'),
			('2','Teclado & Mouse','Logitech','381298','Teclado & Mouse MK120','197529','1'),
			('5','Projetor HDMI','Acer','675255','Projetor Acer 400 Lumens','949296','1'),
			('2','Teclado & Mouse Sem Fio','Multilaser','895967','Teclado e mouse Wireless','833798','0');
Go

Insert Into Sala(Andar,Nome,Metragem)
Values		('2º Andar','Sala de Multimídia','20m²'),
			('3º Andar','Sala De Video','24m²'),
			('1º Andar','Sala De Informática','15m²');
Go

Insert Into EquipamentoSala(IdEquipamento,IdSala,DataEntrada,DataSaida)
Values			('2','3','2019-07-26','2023-04-15'),
				('5','2','2018-08-25','2022-11-23'),
				('3','2','2018-08-25','2023-04-15'),
				('1','1','2017-06-18','2024-03-29'),
				('4','1','2017-06-18','2022-11-23'),
				('3','3','2016-11-28','2025-09-14');
Go