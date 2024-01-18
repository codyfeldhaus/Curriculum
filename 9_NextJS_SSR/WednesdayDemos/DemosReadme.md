# Next.js In-Depth Demos

## Demo 1: Setting Up and Exploring a Next.js Project

### Objective
- Initialize a new Next.js project and explore its structure.

### Steps
1. **Initialize Project**:
   - Run `npx create-next-app my-next-app` in the terminal.
   - Navigate to the project directory `cd my-next-app`.

2. **Explore Project Structure**:
   - `pages` directory: Contains page components.
   - `public` directory: For static files.
   - `styles` directory: Contains CSS files.
   - `package.json`: Manages scripts and dependencies.

### Example Code
- No specific code for this step. Focus on understanding the file structure.

## Demo 2: Building Pages and Implementing Routing

### Objective
- Create static and dynamic pages, exploring file-system-based routing.

### Steps
1. **Create a Static Page (About)**:
   ```javascript
   // pages/about.js
   function About() {
       return <div>About Us</div>;
   }
   export default About;
   ```
   - Accessible via `/about`.

2. **Implement Dynamic Routing (Blog Posts)**:
   ```javascript
   // pages/posts/[id].js
   import { useRouter } from 'next/router';

   function Post() {
       const router = useRouter();
       const { id } = router.query;

       return <div>Post ID: {id}</div>;
   }
   export default Post;
   ```
   - Dynamic route for blog posts, accessible via `/posts/1`, `/posts/2`, etc.

## Demo 3: Server-Side Data Fetching with `getServerSideProps`

### Objective
- Fetch data on the server side for pre-rendering pages.

### Steps
1. **Create a Server-Side Rendered User Page**:
   ```javascript
   // pages/users.js
   export async function getServerSideProps() {
       const res = await fetch(`https://api.example.com/users`);
       const data = await res.json();
       return { props: { users: data } };
   }

   function Users({ users }) {
       return (
           <div>
               {users.map(user => (
                   <p key={user.id}>{user.name}</p>
               ))}
           </div>
       );
   }
   export default Users;
   ```
   - Fetches user data from an external API server-side and passes it to the Users component as props.

## Demo 4: API Routes for Server-Side Logic

### Objective
- Create API routes within a Next.js project for server-side logic.

### Steps
1. **Implement an API Route for User Data**:
   ```javascript
   // pages/api/users.js
   export default function handler(req, res) {
       if (req.method === 'GET') {
           // Fetch user data from a database or external API
           const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
           res.status(200).json({ users });
       } else if (req.method === 'POST') {
           // Handle new user creation logic
           res.status(201).send('User added');
       }
   }
   ```
   - This API route can handle GET requests for fetching user data and POST requests for adding new users.
