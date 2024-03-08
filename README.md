### Demo Website

```
https://dashboardassignment-umber.vercel.app/
```

# Dashboard Application
This project is a dashboard application built using React, Redux, Axios, and TypeScript. It includes features such as user authentication, fetching user data from a dummy API, displaying user information in a table, and enabling user search by name.

# Features
- Login Page: Provides a simple login interface where users can enter dummy login details to access the dashboard.
- Dashboard: Upon successful login, users are redirected to the dashboard where they can view a list of users retrieved from a dummy API.
- Remember Login State: The application remembers the login state to ensure that users remain authenticated even if they navigate away from the dashboard.
- User Authentication: Unauthorized users are redirected to the login page, and only authenticated users can access the dashboard.
- User Search: Users can search for specific users by name using the search functionality provided in the dashboard.
- Custom Hook for API Integration: Utilizes a custom hook (useApi) to fetch user data from the API using Axios.
- State Management with Redux: State management is implemented using Redux to manage application state efficiently.
- TypeScript Integration: TypeScript is used for static type-checking, improving code quality and developer experience.
- Hosted on Netlify/Vercel: The application is deployed and hosted on Netlify/Vercel for easy access.

# Installation
- Clone the repository:

```
git clone https://github.com/BhupeshChauhan/dashboardassignment.git
```

- Navigate to the project directory:
```
cd dashboard-app
```

- Install dependencies:
```
npm install
```

Usage
Start the development server:

```
npm start
```
Open the application in your browser:
http://localhost:5173

# App Load Time and Performance Optimization

- Code Splitting: The application utilizes code splitting to split the bundle into smaller chunks, resulting in faster initial load times.
- Lazy Loading: Components are lazily loaded to reduce the initial bundle size and improve performance.
- Memoization: Memoization techniques are employed to optimize rendering and prevent unnecessary re-renders.
- Minimization of Network Requests: API requests are minimized by caching data locally and implementing efficient data fetching strategies.
- CSS Optimization: CSS is optimized for performance by using techniques such as minification and bundling.


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```
