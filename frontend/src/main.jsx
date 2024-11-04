import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './routes/homepage/Homepage.jsx';

import ChatPage from './routes/chatPage/ChatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import SignInPage from './routes/signInPage/SignInPage.jsx';
import SignUppage from './routes/signUpPage/SignUpPage.jsx';

import DashboardPage from './routes/dasboardPage/DasboardPage.jsx';

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: "/", element: <Homepage /> },
            { path: "/sign-in/*", element: <SignInPage /> },
            { path: "/sign-up", element: <SignUppage /> },
            {
                element: <DashboardLayout />,
                children: [
                    { path: "/dashboard", element: <DashboardPage /> },
                    { path: "/dashboard/chats/:id", element: <ChatPage /> },
                ]
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
