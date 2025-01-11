-- insertUser(p_profileName, p_userName, p_password, p_location, p_age, p_description, p_email)
CALL insertUser("p01", "Prueba01", "abc", "A Coruña", 40, "This is a prove number 01.", "databaseprobe@bloomly.com");
CALL insertUser("Mercedes075", "Mercedes", "abc", "Málaga", 49, "¡Hola!, soy Mercedes. Solo estoy de paso.", "mercedes075@gmail.com");
CALL insertUser("Ramoncito34", "Ramón", "abc", "Ferrol", 34, "Hola, soy Ramón. Quiero hacer amigos.", "ramoncito34@gmail.com");
CALL insertUser("Gustavofj", "Gustavo Florencio", "abc", "Zamora", 56, "Hola. Soy de Zamora y me gusta leer.", "gustavocastro@gmail.com");
-- insertInterest (p_description, p_idUser)
CALL insertInterest("interes1",1);
CALL insertInterest("interes2",1);
CALL insertInterest("interes3",1);
CALL insertInterest("Bailar",2);
CALL insertInterest("Pasear",2);
CALL insertInterest("Cine",2);
CALL insertInterest("Hablar",3);
CALL insertInterest("Salir",3);
CALL insertInterest("Fiesta",3);
CALL insertInterest("Leer",4);
CALL insertInterest("Libros",4);
CALL insertInterest("Estudiar",4);
-- Insert messages:
INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
	VALUES (2,1,"Hola, soy Mercedes. ¿cómo estás P01?");
INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
	VALUES (1,2,"¡Hola Mercedes!. Bien, ¿y tú?");
    
INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
	VALUES (3,1,"Hola, ¿cómo estás");
    INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
	VALUES (1,3,"Hola, bien. ¿Y tú?");
INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
	VALUES (4,1,"Hola, ¿cómo estás");
    INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
	VALUES (1,4,"Hola, bien. ¿Y tú?");
INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
	VALUES (5,1,"Hola, ¿cómo estás");
    INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
	VALUES (1,5,"Hola, bien. ¿Y tú?");

DELETE FROM message_proves_v1;
/*
SELECT * 
	FROM users
		RIGHT JOIN user_interests ON users.id = user_interests.idUser
ORDER BY users.id
;
*/

SELECT *
	FROM message_proves_v1
	WHERE 
	(id_emisor_user = 1
	AND id_receptor_user = 2)
	OR
	(id_emisor_user = 2
	AND id_receptor_user = 1)
;