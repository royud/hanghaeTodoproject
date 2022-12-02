import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//page
import Index from "../pages/Index";
import TodoListPage from "../pages/TodoList";
import Layout from "../component/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/list/:id" element={<TodoListPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
