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
    UNIQUE (nameProfile),
    UNIQUE (email),
    CONSTRAINT id_user PRIMARY KEY (id)
);
    
CREATE TABLE IF NOT EXISTS interests (
	nameInterest VARCHAR(20) NOT NULL,
    PRIMARY KEY (nameInterest)
);
    
CREATE TABLE IF NOT EXISTS user_interests (
	idUser INTEGER NOT NULL,
    nameInterest VARCHAR(20) NOT NULL,
    CONSTRAINT idUser FOREIGN KEY (idUSer) REFERENCES users (id),
    CONSTRAINT nameInterest FOREIGN KEY (nameInterest) REFERENCES interests(nameInterest),
    PRIMARY KEY (idUser, nameInterest)
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

CREATE TABLE IF NOT EXISTS message_proves_v1 (
	id_emisor_user INTEGER NOT NULL,
    id_receptor_user INTEGER NOT NULL,
    message_body VARCHAR(1000) NOT NULL,
    message_id INTEGER NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (message_id)
);

CREATE TABLE sessions (
	sid VARCHAR(255) PRIMARY KEY,
    data_session JSON,
    expires DATETIME
);