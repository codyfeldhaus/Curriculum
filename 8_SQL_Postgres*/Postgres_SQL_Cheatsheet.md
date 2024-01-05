**************

# PostgreSQL Shortcuts & Essential SQL Commands Cheat Sheet

## PostgreSQL Shortcuts

### General Shortcuts for psql (Postgres Command Line Interface)
- `\?` - Display help on psql commands
- `\h` - Help on SQL commands
- `\l` - List all databases
- `\c [database_name]` - Connect to a different database
- `\dt` - List all tables in the current database
- `\dv` - List all views in the current database
- `\dn` - List all schemas
- `\df` - List all functions
- `\di` - List all indexes
- `\du` - List all roles/users
- `\x` - Toggle expanded display mode
- `\q` - Quit psql

### Editing Commands
- `\e` - Open an external text editor
- `\i [filename]` - Execute commands from a file

### Execution and History
- `CTRL + R` - Reverse-i-search through command history
- `UP ARROW`/`DOWN ARROW` - Navigate through command history
- `\s` - Display command history
- `\s [filename]` - Save command history to a file

### Transaction Controls
- `BEGIN;` - Start a transaction
- `COMMIT;` - Commit the current transaction
- `ROLLBACK;` - Roll back the current transaction

### Platform-Specific Differences
- **Windows**:
  - Copy: `CTRL + C` (outside of psql)
  - Paste: `CTRL + V` (outside of psql)
- **macOS**:
  - Copy: `Command + C` (in terminal)
  - Paste: `Command + V` (in terminal)

## Essential SQL Commands

### Basic SQL Queries
- **Select Data**
  ```sql
  SELECT column1, column2, ... FROM table_name;
  ```
- **Select All Data**
  ```sql
  SELECT * FROM table_name;
  ```
- **Select With Condition**
  ```sql
  SELECT * FROM table_name WHERE condition;
  ```
- **Select Distinct Rows**
  ```sql
  SELECT DISTINCT column1, column2, ... FROM table_name;
  ```
- **Count Rows**
  ```sql
  SELECT COUNT(column_name) FROM table_name;
  ```

### Filtering and Sorting
- **Order By**
  ```sql
  SELECT * FROM table_name ORDER BY column1, column2, ... ASC|DESC;
  ```
- **Where Clause**
  ```sql
  SELECT * FROM table_name WHERE condition;
  ```
- **Like Clause**
  ```sql
  SELECT * FROM table_name WHERE column LIKE pattern;
  ```
- **Limit Results**
  ```sql
  SELECT * FROM table_name LIMIT number;
  ```

### Joining Tables (with brief explanations)
- **Inner Join**: Combines rows from two or more tables based on a related column between them.
  ```sql
  SELECT columns FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;
  ```
- **Left Join**: Returns all rows from the left table, and the matched rows from the right table. If no match, returns NULL on the right side.
  ```sql
  SELECT columns FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;
  ```
- **Right Join**: Returns all rows from the right table, and the matched rows from the left table. If no match, returns NULL on the left side.
  ```sql
  SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column_name = table2.column_name;
  ```
- **Full Outer Join**: Combines rows from both tables as long as there is a match in one of the tables. If there is no match, the missing side will contain NULL.
  ```sql
  SELECT columns FROM table1 FULL OUTER JOIN table2 ON table1.column_name = table2.column_name;
  ```

### Modifying Data
- **Insert Data**
  ```sql
  INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
  ```
- **Update Data**
  ```sql
  UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
  ```
- **Delete Data**
  ```sql
  DELETE FROM table_name WHERE condition;
  ```

### Database and Table Management
- **Create Database**
  ```sql
  CREATE DATABASE dbname;
  ```
- **Drop Database**
  ```sql
  DROP DATABASE dbname;
  ```
- **Create Table**
  ```sql
  CREATE TABLE table_name (column1 datatype, column2 datatype, ...);
  ```
- **Drop Table**
  ```sql
  DROP TABLE table_name;
  ```
- **Alter Table (Add/Drop Column)**
  ```sql
  ALTER TABLE table_name ADD column_name datatype;
  ALTER TABLE table_name DROP COLUMN column_name;
  ```
