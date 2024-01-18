# E-commerce Storefront Lab with Next.js

## Objective
Develop a basic e-commerce storefront using Next.js to practice server-side rendering and static generation.

## Lab Instructions

### Step 1: Project Initialization
- Create a new Next.js project:
  ```bash
  npx create-next-app ecommerce-storefront
  ```
- Navigate to the project directory:
  ```bash
  cd ecommerce-storefront
  ```

### Step 2: Setup Product Listing Page
- **Task**: Create a page to list all products.
- **Details**:
  - Use mock data for products (e.g., array of product objects).
  - Implement `getServerSideProps` to fetch product data server-side.
  - Render a list of products on the page.
- **Example**:
  ```javascript
  // pages/products.js
  export async function getServerSideProps() {
      const products = // Fetch or use mock data
      return { props: { products } };
  }

  export default function Products({ products }) {
      return (
          <div>
              <h1>Products</h1>
              {products.map(product => (
                  <div key={product.id}>{product.name}</div>
              ))}
          </div>
      );
  }
  ```

### Step 3: Dynamic Product Detail Pages
- **Task**: Implement dynamic routes for individual product detail pages.
- **Details**:
  - Use `getStaticPaths` and `getStaticProps` for each product.
  - Create a `[id].js` file in the `pages/products` directory for dynamic routing.
- **Example**:
  ```javascript
  // pages/products/[id].js
  import { useRouter } from 'next/router';
  import products from '../../data/products'; // Mock data

  export async function getStaticPaths() {
      const paths = products.map(product => ({ params: { id: product.id.toString() } }));
      return { paths, fallback: false };
  }

  export async function getStaticProps({ params }) {
      const product = products.find(p => p.id.toString() === params.id);
      return { props: { product } };
  }

  export default function ProductDetail({ product }) {
      return (
          <div>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              {/* Additional product details */}
          </div>
      );
  }
  ```

### Step 4: Explore Static Generation for Product Pages
- **Task**: Use static generation for fast-loading product pages.
- **Details**:
  - Implement `getStaticProps` to generate each product page at build time.
  - Discuss the benefits of static generation for e-commerce product pages.

### Step 5: Optional: Add Shopping Cart Functionality
- **Task**: Implement a basic shopping cart with client-side state management.
- **Details**:
  - Create a simple shopping cart context or state.
  - Allow users to add products to the cart and view the cart.

## Deliverables
- A functional e-commerce storefront with product listings and detail pages.
- Optional: A basic shopping cart feature.

## Note
Focus on applying Next.js features like SSR and SSG in a real-world e-commerce scenario. Experiment with different rendering strategies and optimize for performance and user experience.
