import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        loader: () => fetch("../../public/booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/readList",
        loader: () => fetch("../../public/booksData.json"),
        Component: ReadList,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("../../public/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
