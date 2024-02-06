import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'index.css';
import '@fontsource/inter';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Recipe from 'components/recipe/Recipe';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [{ path: ':name', element: <Recipe /> }],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
