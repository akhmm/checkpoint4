DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `username` VARCHAR(100) NOT NULL, `password` VARCHAR(150) NOT NULL, `is_administrator` BOOLEAN
);

CREATE TABLE `menu` (
  `id` INT PRIMARY KEY AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, `image` VARCHAR(150), `price` INT NOT NULL, `description` VARCHAR(250) NOT NULL
);

INSERT INTO user (username, password, is_administrator)
VALUES
    ('admin', "pass", 1),
    ('admin2', "pass", 1);


INSERT INTO menu (name, image, price, description)
VALUES
    ('Grilled Chicken Salad', "images/donburi.png", 10, 'Dive into a culinary adventure with a Salmon Avocado Sushi Bowl. Fresh, succulent salmon slices, creamy avocado, and sushi rice come together in perfect harmony.'),
    ('Beef Teriyaki Stir-Fry', "images/donburi.png", 15, 'Dive into a culinary adventure with a Salmon Avocado Sushi Bowl. Fresh, succulent salmon slices, creamy avocado, and sushi rice come together in perfect harmony.'),
    ('Salmon Avocado Sushi', "images/donburi.png", 8, 'Dive into a culinary adventure with a Salmon Avocado Sushi Bowl. Fresh, succulent salmon slices, creamy avocado, and sushi rice come together in perfect harmony.'),
    ('Mediterranean Quinoa', "images/donburi.png", 10, 'Dive into a culinary adventure with a Salmon Avocado Sushi Bowl. Fresh, succulent salmon slices, creamy avocado, and sushi rice come together in perfect harmony.'),
    ('Pesto Pasta Primavera', "images/donburi.png", 15, 'Dive into a culinary adventure with a Salmon Avocado Sushi Bowl. Fresh, succulent salmon slices, creamy avocado, and sushi rice come together in perfect harmony.');

