
# Saturday: Lab Project - Recipe Finder Application

## Objective
Create an application to search and display recipes from an API.

## Setup
- Initialize a new React project.
- Install dependencies: `react-router-dom`, `axios`.

## Components
- **SearchBar**: Handles recipe search.
- **RecipeList**: Displays search results.
- **RecipeDetail**: Shows detailed information for a recipe.
- **App**: Main component integrating React Router.

## Implementation

### App Component
```javascript
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={SearchBar} />
                <Route path="/recipes" component={RecipeList} />
                <Route path="/recipe/:id" component={RecipeDetail} />
            </div>
        </Router>
    );
}

export default App;
```

### SearchBar Component
```javascript
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBar() {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const searchRecipes = () => {
        // API search logic
        history.push(`/recipes?query=${query}`);
    };

    return (
        <div>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={searchRecipes}>Search</button>
        </div>
    );
}

export default SearchBar;
```

### RecipeList Component
```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch recipes from API
    }, []);

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
```

### RecipeDetail Component
```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        // Fetch recipe detail from API
    }, [id]);

    return (
        <div>
            {recipe ? (
                <div>
                    <h2>{recipe.title}</h2>
                    {/* Recipe details */}
                </div>
            ) : <p>Loading...</p>}
        </div>
    );
}

export default RecipeDetail;
```

