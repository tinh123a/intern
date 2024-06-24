import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import './index.css';
import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "./routes/contact";
/* existing code */
import EditContact, {
  action as editAction,
} from "./routes/edit";

'./routes/contact';

import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    
    children:[
      {
        path: "contacts/:contactId",
        element: <Contact/>,
        loader: contactLoader,
        action: contactAction,

      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
