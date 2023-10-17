--1. Найти мин/стоимость товаров для каждой категории
SELECT
    CategoryID,
    MIN(Price) as min_price
FROM
    Products
GROUP BY
    CategoryID --2. Вывести названия категорий, в которых более 10 товаров
SELECT
    CategoryName,
    COUNT(*) AS quantity
FROM
    Products
    JOIN Categories ON Products.CategoryID = Categories.CategoryID
GROUP BY
    Products.CategoryID
HAVING
    COUNT(*) > 10 --3. Очистить тел / номер поставщикам из USA 
UPDATE
    Suppliers
SET
    Phone = ''
WHERE
    Country = 'USA' --4. Вывести имена и фамилии (и ко - во заказов) менеджеров, у которых ко - во заказов менее 15
SELECT
    Employees.FirstName,
    Employees.LastName,
    count(*) AS qty_orders
FROM
    Orders
    JOIN Employees on Orders.EmployeeID = Employees.EmployeeID
GROUP BY
    Employees.EmployeeID
HAVING
    qty_orders < 15