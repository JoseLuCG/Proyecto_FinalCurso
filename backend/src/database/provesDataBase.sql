CALL insertUser("PruebaWorkbench", "Prueba01", "abc", "LOCALHOST", 99, "This is a prove", "prove@Workbench");
INSERT INTO interests(description) 
	VALUES('comer');

CALL insertInterest("Dormir");
SELECT LAST_INSERT_ID();

CALL insertInterest_user(2, 3);

