/* Procedure that insert a user in the database: */
DELIMITER $$
DROP PROCEDURE IF EXISTS insertUser; $$
CREATE PROCEDURE insertUser (
	p_profileName VARCHAR(50), 
	p_userName VARCHAR(50),
    p_password VARCHAR(50),
    p_location VARCHAR(50),
    p_age INT,
    p_description VARCHAR(1000),
    p_email VARCHAR(50))
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		SHOW ERRORS;
        ROLLBACK;
	END;

	START TRANSACTION;
		INSERT INTO users (nameProfile, nameUser, password, location, age, description, email)
			VALUES (p_profileName, p_userName, p_password, p_location, p_age, p_description, p_email);
	COMMIT;
END; $$