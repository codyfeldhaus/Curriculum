# Blogging Platform Database Lab

## Objective
Design and implement a database schema for a blogging platform using SQL and PostgreSQL.

## Lab Instructions

### Step 1: Database Setup
- **Task**: Create a PostgreSQL database for the blogging platform.
- **Details**:
  - Name the database `blogging_platform`.
  - Ensure PostgreSQL server is running and accessible.

### Step 2: Define Table Structures
- **Task**: Create tables for `users`, `posts`, `comments`, and `categories`.
- **Details**:
  ```sql
  CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL
  );

  CREATE TABLE posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      user_id INT REFERENCES users(id),
      category_id INT REFERENCES categories(id),
      published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE comments (
      id SERIAL PRIMARY KEY,
      content TEXT NOT NULL,
      user_id INT REFERENCES users(id),
      post_id INT REFERENCES posts(id),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

### Step 3: Establish Relationships
- **Task**: Define foreign key relationships between tables.
- **Details**:
  - `posts` should reference `users` and `categories`.
  - `comments` should reference `users` and `posts`.

### Step 4: Seed the Database
- **Task**: Insert sample data into each table.
- **Details**:
  - Add several users, categories, posts, and comments.
  - Ensure the data inserted respects the foreign key constraints.

### Step 5: Write Complex Queries
- **Task**: Implement queries to retrieve data involving multiple tables.
- **Challenges**:
  - Retrieve all posts along with user details and category names.
  - Fetch all comments for a specific post.

### Step 6: Performance Optimization (Optional Advanced Challenge)
- **Task**: Explore the use of indexes for performance improvement.
- **Challenges**:
  - Create indexes on frequently queried columns.
  - Analyze query performance with and without indexes.

## Deliverables
- SQL scripts for creating tables and inserting data.
- A set of complex SQL queries as specified in the tasks.
- (Optional) A report or notes on performance optimization findings.

## Note
This lab project is designed to strengthen your skills in database design, SQL query writing, and understanding of relational data models. Focus on clean, efficient SQL code and accurate relationships between tables.
