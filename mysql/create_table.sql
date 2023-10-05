use muce;

CREATE TABLE USERS (
    uid VARCHAR(7),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(uid)
);

CREATE TABLE CATEGORIES (
    category_id int AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(category_id)
);

CREATE TABLE QUALIFICATIONS (
    qualification_id int AUTO_INCREMENT,
    qualification_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(qualification_id)
);

CREATE TABLE MY_QUALIFICATIONS (
    my_id INT AUTO_INCREMENT,
    uid VARCHAR(7),
    category_id INT,
    qualification_id INT,
    FOREIGN KEY (uid) REFERENCES `USERS` (uid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (category_id) REFERENCES `CATEGORIES` (category_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (qualification_id) REFERENCES `QUALIFICATIONS` (qualification_id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (my_id)
);