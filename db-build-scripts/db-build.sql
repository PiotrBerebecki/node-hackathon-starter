BEGIN;


DROP TABLE IF EXISTS fruits CASCADE;


CREATE TABLE fruits (
  id           SERIAL          PRIMARY KEY,
  name         VARCHAR(64)     NOT NULL,
  image_url    VARCHAR(500)    NOT NULL
);

-- CREATE TABLE users (
--   id          SERIAL        PRIMARY KEY,
--   username    VARCHAR(64)   UNIQUE,
--   first_name  VARCHAR(64)   NOT NULL,
--   last_name   VARCHAR(64)   NOT NULL,
--   password    VARCHAR(64)   NOT NULL,
--   avatar_url  VARCHAR(500)  NOT NULL
-- );

-- INSERT INTO users (username, first_name, last_name, password, avatar_url)
-- VALUES
-- ('u1', 'Orange', 'Cat', '$2a$10$lbczBZ5YwKsO6eC2Tm.9/.Xtky/2qjoXVR607Zs0ejmriJengZFqS', './images/u1_headshot.jpg'),
-- ('u2', 'Grey', 'Kitty', '$2a$10$XP3ZfjT33e0Qf.ANb8bJGegtVfhv1V7P2xsCry4I8W8p68.hBt/i2', './images/u2_headshot.jpg');


INSERT INTO fruits (name, image_url)
VALUES
('apple', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/apple.jpg'),
('avocado', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/avocado.jpg'),
('banana', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/banana.jpg'),
('blueberry', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/blueberry.jpg'),
('cherry', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/cherry.jpg'),
('grape', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/grape.jpg'),
('kiwi', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/kiwi.jpg'),
('orange', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/orange.jpg'),
('papaya', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/papaya.jpg'),
('peach', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/peach.jpg'),
('pear', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/pear.jpg'),
('pineapple', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/pineapple.jpg'),
('plum', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/plum.jpg'),
('strawberry', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/strawberry.jpg'),
('watermelon', 'https://raw.githubusercontent.com/PiotrBerebecki/node-hackathon-starter/master/db-images/watermelon.jpg');

COMMIT;
