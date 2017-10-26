create database checkpoint2; 

use checkpoint2;

CREATE TABLE posts
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    text TEXT,
    creation_date DATE,
    last_update DATE
); 

INSERT INTO posts VALUES (NULL, 'mon premier article', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', NOW(), NOW());