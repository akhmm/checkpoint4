DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, `password` VARCHAR(150) NOT NULL, `is_administrator` BOOLEAN
);

CREATE TABLE `menu` (
  `id` INT PRIMARY KEY AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, `image` VARCHAR(150) NOT NULL, `price` INT NOT NULL, `description` VARCHAR(150) NOT NULL
);

INSERT INTO menu (name, image, price, description)
VALUES
    ('Margherita Pizza', 'margherita.jpg', 10, 'Tomato, mozzarella, and basil.'),
    ('Chicken Alfredo', 'chicken_alfredo.jpg', 15, 'Creamy Alfredo sauce with grilled chicken.'),
    ('Caesar Salad', 'caesar_salad.jpg', 8, 'Fresh romaine lettuce with Caesar dressing.');
