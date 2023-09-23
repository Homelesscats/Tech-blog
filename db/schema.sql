DROP DATABASE IF EXISTS GPtech_blog_db;

CREATE DATABASE GPtech_blog_db;
/*
USE GPtech_blog_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    body TEXT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    comment TEXT NOT NULL,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (post_id) REFERENCES posts (id)
);
```
*/ 