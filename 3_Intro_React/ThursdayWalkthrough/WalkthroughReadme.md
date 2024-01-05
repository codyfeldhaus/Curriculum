# Week 3: Introduction to React

## Thursday - Project Walkthrough: Personal Portfolio Website

### Instructor Guide

---

### Objective
To build a personal portfolio website using React, showcasing various components that represent different sections like About, Projects, Skills, and Contact.

### Project Setup
- **Task**: Initialize the React project.
- **Instructions**:
  - Use `create-react-app` to bootstrap the portfolio project.
  - Create a new folder `portfolio` and navigate into it:
    ```bash
    npx create-react-app portfolio
    cd portfolio
    npm start
    ```
  - Structure the project with components for each portfolio section.

### Building React Components
- **About Component**:
  - Create an `About` component to display personal information.
  - **Code Snippet**:
    ```javascript
    function About() {
        return (
            <div>
                <h2>About Me</h2>
                <p>Short bio or personal statement.</p>
            </div>
        );
    }
    ```
- **Projects Component**:
  - Develop a `Projects` component to showcase project works.
  - Use state to manage project list.
  - **Code Snippet**:
    ```javascript
    function Projects() {
        const projects = [{ name: 'Project 1', description: 'Description...' }];
        return (
            <div>
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        );
    }
    ```
- **Skills and Contact Components**:
  - Similarly, create `Skills` and `Contact` components.

### Styling the Components
- **Task**: Apply CSS to style each component.
- **Instructions**:
  - Create separate CSS files for each component or use inline styling.
  - Focus on a clean and professional layout.
  - **Code Snippet (for example, in About.css)**:
    ```css
    .about {
        margin: 20px;
        padding: 20px;
        border: 1px solid #ddd;
    }
    ```

### Assembling the Portfolio
- **Task**: Assemble all components in the `App` component.
- **Instructions**:
  - Import each section component into `App.js`.
  - Layout the components to form a complete portfolio.
  - **Code Snippet**:
    ```javascript
    import About from './About';
    import Projects from './Projects';
    // Import other components

    function App() {
        return (
            <div>
                <About />
                <Projects />
                {/* Include other components */}
            </div>
        );
    }
    ```

### Adding Interactivity
- **Optional Tasks**:
  - Implement a lightbox for project images.
  - Add a form in the Contact component with form handling.

### Testing and Debugging
- **Task**: Test the portfolio website.
- **Instructions**:
  - Ensure all components render correctly.
  - Check responsive design and fix any styling issues.

---

This walkthrough provides a foundation for building a personal portfolio site with React, offering a practical application of React components, state management, and props.
