# Starships Explorer

This project is a React-based application that fetches and displays a list of Star Wars starships using the [SWAPI (Star Wars API)](https://swapi.dev/api/starships). The app demonstrates the use of React hooks (`useState` and `useEffect`) to fetch and manage data from an external API, along with basic routing and component organization.

## Project Overview

**Starships Explorer** is a simple app that retrieves and displays information about various starships from the Star Wars universe. It leverages SWAPI for data and organizes the information in a list format. This project includes modular components, navigation, and data-fetching to create an interactive user experience.

## Features

- **Fetch and Display Starships**: Retrieves starship data from SWAPI, displaying each ship’s name, model, manufacturer, and cost in credits.
- **Component-based Architecture**: Modular components for organizing UI elements and data (e.g., `Header`, `Nav`, `Home`, `Main`, and `StarshipList`).
- **React Hooks**: Uses `useEffect` for API requests and `useState` for managing starship data.
- **Basic Navigation**: A navigation bar with buttons for Home and Starships views.

## Technologies

- **React**: For building a responsive and dynamic user interface.
- **Axios**: For making HTTP requests.
- **SWAPI**: Star Wars API to fetch starship data.

## Code Structure

- **App Component** (`src/App.jsx`): The root component that renders the `Main` component.
- **Main Component** (`src/components/Main.jsx`): Manages the starships state and fetches data from SWAPI using `useEffect`. Renders the `Home` and `StarshipList` components.
- **StarshipList Component** (`src/components/StarshipList.jsx`): Displays a list of starships passed from the Main component as a prop.
- **Nav Component** (`src/components/Nav.jsx`): Provides navigation buttons for the Home and Starships views.
- **Header Component** (`src/components/Header.jsx`): Contains the `Nav` component, displayed at the top of the app.
- **Home Component** (`src/components/Home.jsx`): A landing page with a welcome message and a brief project introduction.

## Usage

1. **Home Page**: Displays a welcome message with a brief introduction to the app. This page loads automatically at the root URL (`/`).
2. **Starships List**: Accessible via the "Starships" button in the navigation bar, this page shows detailed information about each ship, including its name, model, manufacturer, and cost in credits.

