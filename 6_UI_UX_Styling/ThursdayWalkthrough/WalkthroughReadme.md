# Mini Online Course Catalog

## Objective
Develop a small-scale online learning platform to display a catalog of courses.

## Project Setup
- Use `create-react-app` to start the project.
- Create components: `CourseCard`, `CourseList`, `EnrollButton`, and the main `App`.

## Implementation

### CourseCard Component
- Displays individual course information.
- Includes title, description, and an `EnrollButton`.

### CourseList Component
- A container for `CourseCard` components.
- Fetch and display course data.

### EnrollButton Component
- A button for enrolling in a course.
- Changes state upon clicking (e.g., 'Enroll' to 'Enrolled').

### App Component
- Integrates all components.
- Focuses on layout and styling using Mantine-UI.

## Additional Details
- Styling: Use Mantine-UI for a polished look.
- Functionality: Implement basic interaction logic.

## Code 

### CourseCard.js
```javascript
import React from 'react';
import { Card, Text, Button } from '@mantine/core';
import EnrollButton from './EnrollButton';

function CourseCard({ title, description }) {
    return (
        <Card shadow="sm" padding="lg">
            <Text weight={500} size="lg">{title}</Text>
            <Text size="sm" style={{ marginBottom: 10 }}>{description}</Text>
            <EnrollButton />
        </Card>
    );
}

export default CourseCard;
```
### CourseList.js
```javascript
import React from 'react';
import { Grid } from '@mantine/core';
import CourseCard from './CourseCard';

function CourseList({ courses }) {
    return (
        <Grid>
            {courses.map(course => (
                <Grid.Col span={4} key={course.id}>
                    <CourseCard title={course.title} description={course.description} />
                </Grid.Col>
            ))}
        </Grid>
    );
}

export default CourseList;
```

### Enroll Button
```javascript
import React, { useState } from 'react';
import { Button } from '@mantine/core';

function EnrollButton() {
    const [enrolled, setEnrolled] = useState(false);

    return (
        <Button 
            onClick={() => setEnrolled(!enrolled)}
            color={enrolled ? "green" : "blue"}
        >
            {enrolled ? "Enrolled" : "Enroll"}
        </Button>
    );
}

export default EnrollButton;
```

### App.js
```javascript
import React from 'react';
import { Container } from '@mantine/core';
import CourseList from './CourseList';

function App() {
    const courses = [
        // Mock course data
    ];

    return (
        <Container>
            <CourseList courses={courses} />
        </Container>
    );
}

export default App;
```