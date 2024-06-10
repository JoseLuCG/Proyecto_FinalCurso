DROP DATABASE IF EXISTS social;
CREATE DATABASE social;
USE social;

CREATE TABLE IF NOT EXISTS users (
	id INTEGER NOT NULL AUTO_INCREMENT,
	nameProfile VARCHAR(50) NOT NULL, 
	nameUser VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	location VARCHAR(50) NOT NULL, 
	age INTEGER NOT NULL,
	description VARCHAR(1000),
	email VARCHAR(50) NOT NULL,
    CONSTRAINT id_user PRIMARY KEY (id)
);
    
CREATE TABLE IF NOT EXISTS interests (
	idInterest INTEGER NOT NULL AUTO_INCREMENT,
	description TEXT NOT NULL,
    PRIMARY KEY (idInterest)
);
    
CREATE TABLE IF NOT EXISTS user_interests (
	idUser INTEGER NOT NULL,
    idInterest INTEGER NOT NULL,
    PRIMARY KEY (idUser, idInterest)
);

CREATE TABLE IF NOT  EXISTS normalized_interests(
	id_normal_interest INTEGER,
	name_interest TEXT NOT NULL,
	idInterest INTEGER NOT NULL,
    PRIMARY KEY (id_normal_interest)
);

CREATE TABLE IF NOT EXISTS messages (
	messageTime DATETIME NOT NULL,
	emisorUser INTEGER NOT NULL,
	receptorUser INTEGER NOT NULL,
	content VARCHAR(1000) NOT NULL,
	messageType INTEGER NOT NULL,
    PRIMARY KEY (messageTime, emisorUser, receptorUser)
);