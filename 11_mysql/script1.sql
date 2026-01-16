-- Creating the Database
CREATE DATABASE house_listings_db;
USE house_listings_db;

-- Create the agents table
CREATE TABLE agents(
    agent_id INT AUTO_INCREMENT PRIMARY KEY,
    agent_name VARCHAR(50) NOT NULL,
    agent_email VARCHAR(100) UNIQUE,
    agent_phone VARCHAR(10)
);

-- Look at the structure
DESCRIBE agents;

-- Add data into table
INSERT INTO agents(agent_name, agent_email) VALUES
('vishwas','vishwas@example.com'),
('vishwas1','vishwas1@example.com'),
('vishwas2','vishwas2@example.com')

-- See the data
SELECT * FROM agents;
SELECT agent_name FROM agents;

USE Northwind;
SHOW TABLES;

SELECT * FROM Products;
SELECT * FROM Orders;

-- Get all the customers from UK
SELECT * FROM Customers where Country = 'UK';

-- Get all the Customers & their orders
SELECT * FROM Orders;

SELECT c.CustomerName,c.CustomerID,o.OrderID
FROM Customers c
INNER JOIN Orders o
ON c.CustomerID = o.CustomerID;
