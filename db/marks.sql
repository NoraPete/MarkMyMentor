CREATE DATABASE IF NOT EXISTS marking;

USE marking;

CREATE TABLE mentors (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  class varchar(30) NOT NULL,
  fullstack int(11) NOT NULL,
  backend int(11) NOT NULL,
  devops int(11) NOT NULL,
  embedded int(11) NOT NULL,
  explanation int(11) NOT NULL,
  knowledge int(11) NOT NULL,
  helpfulness int(11) NOT NULL,
  mark_sum int(11) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO mentors VALUES (1, 'Sanyi', 'Rapgod', 1, 1, 1, 0, 5, 5, 5, 1);
INSERT INTO mentors VALUES (2, 'Barni', 'Create', 1, 1, 0, 0, 5, 5, 5, 1);
INSERT INTO mentors VALUES (3, 'Mark', 'Create', 1, 1, 0, 0, 5, 5, 5, 1);
INSERT INTO mentors VALUES (4, 'Évi', 'Create', 1, 0, 0, 0, 5, 5, 5, 1);
INSERT INTO mentors VALUES (5, 'István', 'Create', 1, 1, 1, 0, 5, 5, 5, 1);
INSERT INTO mentors VALUES (6, 'Tojás', 'The coolest for sure', 1, 1, 1, 0, 5, 5, 5, 1);
INSERT INTO mentors VALUES (7, 'Kond', 'A4M', 1, 1, 0, 0, 5, 5, 5, 1);