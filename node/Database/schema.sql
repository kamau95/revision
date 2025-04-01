/*form db*/
CREATE DATABASE notes_app;
USE notes_app;

/*creating the table structure*/
CREATE TABLE IF NOT EXISTS notes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(25) NOT NULL,
    content VARCHAR(300) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

/*filling the table*/
INSERT INTO notes(title, content) VALUES
('how to hunt', 'there are several hunting methods like burning the bush and arrow pointers'),
('how to cook', 'a cook needs some source of energy and cooking untensils');

