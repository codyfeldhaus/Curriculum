# Week 7: React Styling and UI/UX

## Wednesday - Demos and Project Walkthroughs

### Demo: Integrating Mantine-UI in a React Project
- **Objective**: Show how to add Mantine-UI to a React project and use its components.
- **Code Snippet**:
  ```javascript
  import { Button, TextInput } from '@mantine/core';

  function SampleComponent() {
      return (
          <div>
              <TextInput label="Name" placeholder="Enter your name" />
              <Button>Submit</Button>
          </div>
      );
  }
  ```

### Demo: Building a Responsive Layout with Mantine-UI
- **Objective**: Create a responsive layout using Mantine-UI components.
- **Code Snippet**:
  ```javascript
  import { Grid, Col } from '@mantine/core';

  function ResponsiveLayout() {
      return (
          <Grid>
              <Col span={12} md={6} lg={4}>
                  {/* Content */}
              </Col>
              {/* More columns */}
          </Grid>
      );
  }
  ```

### Demo: Custom Theming with Mantine-UI
- **Objective**: Customize themes in a React project using Mantine-UI.
- **Code Snippet**:
  ```javascript
  import { MantineProvider } from '@mantine/core';

  function CustomThemeApp() {
      return (
          <MantineProvider theme={{ colorScheme: 'dark' }}>
              {/* App components */}
          </MantineProvider>
      );
  }
  ```

### Demo: Accessibility Features in Mantine-UI
- **Objective**: Implement accessible components using Mantine-UI.
- **Code Snippet**:
  ```javascript
  import { Button, Alert } from '@mantine/core';

  function AccessibleComponents() {
      return (
          <div>
              <Alert title="Accessibility Notice" color="blue">
                  This is an accessible alert component.
              </Alert>
              <Button>Accessible Button</Button>
          </div>
      );
  }
  ```

### Demo: Implementing a Responsive Navbar
- **Objective**: Create a responsive navigation bar using Mantine-UI.
- **Code Snippet**:
  ```javascript
  import { Navbar, MediaQuery, Burger, useMantineTheme } from '@mantine/core';

  function ResponsiveNavbar() {
      const theme = useMantineTheme();
      const [opened, setOpened] = useState(false);

      return (
          <Navbar
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 200, lg: 300 }}
          >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                  />
              </MediaQuery>
              {/* Navbar content */}
          </Navbar>
      );
  }
  ```
