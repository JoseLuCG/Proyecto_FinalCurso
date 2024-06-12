SET GLOBAL log_bin_trust_function_creators = 1;
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

/* Procedure that insert a INTEREST in the database: */
DELIMITER $$
DROP PROCEDURE IF EXISTS insertInterest; $$
CREATE PROCEDURE insertInterest (p_description VARCHAR(20), p_idUser INT)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		SHOW ERRORS;
        ROLLBACK;
	END;

	START TRANSACTION;
		INSERT INTO interests (description)
			VALUES (p_description);
        
        INSERT INTO user_interests(idUser, description)
			VALUES(p_idUser, p_description);
            
	COMMIT;
END; $$

/* Function that log a user in the app. Returns the user id. */
/*
DELIMITER $$
DROP FUNCTION IF EXISTS logUser; $$
CREATE FUNCTION logUserEmail ( p_email VARCHAR(50), password VARCHAR(50)) RETURNS INT
BEGIN
	 DECLARE v_idUser INT default 0;
    SELECT id 
        INTO v_idUser
        FROM Users
        WHERE passwd = p_password
        and phoneNumber = p_phoneNumber;
    RETURN (v_idUser);
END; $$
*/

