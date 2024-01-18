# Basic Blogging Platform with Next.js

## Objective
Create a basic blogging platform to demonstrate key features of Next.js.

## Step 1: Project Setup
- Initialize a new Next.js project using `npx create-next-app`.
  ```bash
  npx create-next-app basic-blogging-platform
  ```
- Navigate to the project directory.
  ```bash
  cd basic-blogging-platform
  ```

## Step 2: Create Layout with Global Styles
- Create a `Layout.js` component in a new `components` directory.
- Update global styles in `styles/globals.css`.
- **Layout.js**:
  ```javascript
  import Head from 'next/head';
  import Link from 'next/link';

  export default function Layout({ children, title = 'Basic Blogging Platform' }) {
      return (
          <div>
              <Head>
                  <title>{title}</title>
                  <meta name="description" content="A basic blogging platform built with Next.js" />
              </Head>
              <header>
                  <nav>
                      <Link href="/"><a>Home</a></Link>
                  </nav>
              </header>
              <main>{children}</main>
          </div>
      );
  }
  ```
- **globals.css**:
  ```css
  /* styles/globals.css */
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
  }
  ```

## Step 3: Develop Home Page to List Blog Posts
- Create a mock data file for blog posts in `data/posts.js`.
- Use static generation in the `pages/index.js` file to list blog posts.
- **posts.js** (Mock Data):
  ```javascript
  const posts = [
      { id: '1', title: 'First Post', content: 'This is the first post.' },
      { id: '2', title: 'Second Post', content: 'This is the second post.' }
  ];
  export default posts;
  ```
- **index.js**:
  ```javascript
  import Layout from '../components/Layout';
  import Link from 'next/link';
  import posts from '../data/posts';

  export default function Home() {
      return (
          <Layout>
              <h1>Welcome to Our Blog</h1>
              <ul>
                  {posts.map(post => (
                      <li key={post.id}>
                          <Link href={`/posts/${post.id}`}>
                              <a>{post.title}</a>
                          </Link>
                      </li>
                  ))}
              </ul>
          </Layout>
      );
  }
  ```

## Step 4: Create Dynamic Blog Post Pages
- Implement dynamic routing for blog posts using `getStaticPaths` and `getStaticProps`.
- Create a dynamic route `[id].js` in the `pages/posts` directory.
- **[id].js**:
  ```javascript
  import Layout from '../../components/Layout';
  import posts from '../../data/posts';

  export async function getStaticPaths() {
      const paths = posts.map(post => ({ params: { id: post.id } }));
      return { paths, fallback: false };
  }

  export async function getStaticProps({ params }) {
      const post = posts.find(post => post.id === params.id);
      return { props: { post } };
  }

  function Post({ post }) {
      return (
          <Layout title={post.title}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
          </Layout>
      );
  }
  ```

## Step 5: Implement a Backend API (Optional)
- Create an API route to manage blog posts.
- Add a simple `posts` API in the `pages/api/posts` directory.
- **posts.js (API Route)**:
  ```javascript
  import posts from '../../data/posts';

  export default function handler(req, res) {
      if (req.method === 'GET') {
          res.status(200).json(posts);
      } else {
          // Handle other HTTP methods or return error
          res.status(405).end();
      }
  }
  ```

This comprehensive guide with markdown-formatted instructions and code snippets provides a clear and detailed walkthrough for building a basic blogging platform using Next.js. It covers project setup, global styling, static and dynamic routing, and an optional API route implementation.
