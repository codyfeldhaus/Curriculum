# SQL and PostgreSQL Demos

## Demo 1: Basic SQL Queries

### Objective
Familiarize students with writing and executing basic SQL queries.

### Tasks
1. **Connect to PostgreSQL Database**:
   - Use a PostgreSQL client to connect to the database.
   - Example connection string: `postgresql://username:password@localhost:5432/mydb`

2. **Perform Simple Queries**:
   \```sql
   -- SELECT query
   SELECT * FROM users;

   -- INSERT query
   INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');

   -- UPDATE query
   UPDATE users SET name = 'Jane Doe' WHERE id = 1;

   -- DELETE query
   DELETE FROM users WHERE id = 1;
   \```

3. **Filtering Data with WHERE Clause**:
   \```sql
   SELECT * FROM users WHERE age > 30;
   \```

## Demo 2: Joining Tables

### Objective
Teach students how to join multiple tables and understand relationships.

### Tasks
1. **Create Related Tables**:
   \```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100)
   );

   CREATE TABLE orders (
       id SERIAL PRIMARY KEY,
       user_id INT,
       order_date DATE,
       FOREIGN KEY (user_id) REFERENCES users (id)
   );
   \```

2. **Demonstrate Table Joins**:
   \```sql
   -- INNER JOIN
   SELECT users.name, orders.order_date FROM users
   INNER JOIN orders ON users.id = orders.user_id;

   -- LEFT JOIN
   SELECT users.name, orders.order_date FROM users
   LEFT JOIN orders ON users.id = orders.user_id;

   -- RIGHT JOIN
   SELECT users.name, orders.order_date FROM users
   RIGHT JOIN orders ON users.id = orders.user_id;
   \```

## Demo 3: Aggregation and Grouping

### Objective
Show how to aggregate data and group results in SQL.

### Tasks
1. **Use Aggregation Functions**:
   \```sql
   SELECT COUNT(*) FROM users;
   SELECT AVG(age) FROM users;
   SELECT SUM(salary) FROM employees;
   SELECT MIN(age) FROM users;
   SELECT MAX(age) FROM users;
   \```

2. **Grouping Results**:
   \```sql
   SELECT department, COUNT(*) FROM employees GROUP BY department;
   \```

## Demo 4: Complex Queries

### Objective
Challenge students with more complex queries involving subqueries or multiple joins.

### Tasks
1. **Write a Complex SQL Query**:
   \```sql
   SELECT name, (SELECT COUNT(*) FROM orders WHERE orders.user_id = users.id) AS order_count
   FROM users;
   \```

2. **Combine Multiple Join Types**:
   \```sql
   SELECT users.name, orders.id, products.name FROM users
   LEFT JOIN orders ON users.id = orders.user_id
   INNER JOIN order_items ON orders.id = order_items.order_id
   INNER JOIN products ON order_items.product_id = products.id;
   \```
