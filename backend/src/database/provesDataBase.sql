CALL insertUser("PruebaWorkbench", "Prueba01", "abc", "LOCALHOST", 99, "This is a prove", "prove@Workbench");
INSERT INTO interests(description) 
	VALUES('comer');

CALL insertInterest("Dormir");
SELECT LAST_INSERT_ID();

CALL insertInterest('GTG', 2);

INSERT INTO user_interests(idUser, nameInterest)
	VALUES( 2,'COMER');