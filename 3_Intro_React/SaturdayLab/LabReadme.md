# Week 3: Introduction to React

## Saturday Lab: E-commerce Product Listing Site

### Objective
Create a simple e-commerce product listing page in React. The page will display a list of products and allow users to add them to a virtual cart.

### Project Setup
- **Task**: Initialize and structure the React project.
- **Instructions**:
  - Create a new React project named `ecommerce-site`.
  - Structure the project with components like `ProductList`, `Product`, and `Cart`.

### Building React Components
- **ProductList and Product Components**:
  - Create components to display products.
  - Manage the list of products using state in `ProductList`.
  - **Code Snippet**:
    ```javascript
    function ProductList() {
        const [products, setProducts] = useState([
            { id: 1, name: 'Product 1', price: 100 },
            // Other products
        ]);

        return (
            <div>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        );
    }

    function Product({ product }) {
        return (
            <div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                {/* Add to Cart Button */}
            </div>
        );
    }
    ```
- **Cart Component**:
  - Implement a `Cart` component to manage the shopping cart.
  - Use state to track products added to the cart.
  - **Code Snippet**:
    ```javascript
    function Cart({ cartItems }) {
        return (
            <div>
                <h2>Cart</h2>
                {/* List cart items */}
            </div>
        );
    }
    ```

### Implementing Cart Functionality
- **Task**: Add functionality to add products to the cart.
- **Instructions**:
  - Lift state up to the parent component for shared state management.
  - Implement functions to handle adding items to the cart.

### Styling the Application
- **Task**: Apply CSS for styling the e-commerce site.
- **Instructions**:
  - Focus on a user-friendly and clean design.
  - Style each component for a cohesive look.

### Testing and Enhancements
- **Task**: Test the application and add additional features.
- **Instructions**:
  - Test the add-to-cart functionality.
  - Optionally, add features like product quantity adjustment or remove items from the cart.

---


