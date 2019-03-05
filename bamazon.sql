DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
  id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(70) NULL,
  department_name VARCHAR(70) NULL,
  price INTEGER NULL,
  stock_quantity INTEGER NULL,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Household", 10.00, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Led Zeppelin", "Music/Media", 11.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bananas", "Produce", 0.51, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo", "Electronics", 39.99, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drano 2pk", "Household", 11.49, 157);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coke Zero", "Beverage", 3.99, 6700);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Free Will", "Audio Book", 22.50, 78);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stratocaster", "Instruments", 1100, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pop Tarts", "Essentials", 11.49, 39);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bagel Bites", "Essentials", 4.49, 4300);

SELECT * FROM products;
