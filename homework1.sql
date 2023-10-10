--2. Вывести название и стоимость товаров от 20 EUR.
SELECT ProductName, Price 
FROM Products
WHERE Price >= 20

--3. Вывести страны поставщиков.
SELECT DISTINCT Country
FROM Suppliers

--4. В упорядоченном по стоимости виде вывести название и 
--стоимость товаров от всех поставщиков, кроме поставщика 1.
SELECT ProductName, Price 
FROM Products
WHERE SupplierID != 1
ORDER BY Price

--5. Вывести контактные имена клиентов, кроме тех, что из France и USA.
SELECT ContactName 
FROM Customers
WHERE NOT Country IN('France', 'USA')