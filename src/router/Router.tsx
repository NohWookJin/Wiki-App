import React from "react";
import { Route, Routes } from "react-router-dom";
// import Layout from "../layouts/Layout";
import SubLayout from "../layouts/SubLayout";
import Main from "../pages/Main";
import Wiki from "../pages/Wiki";
import Project from "../pages/Project";
import ProjectNew from "../pages/ProjectNew";
import Timer from "../pages/Timer";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Employee from "../pages/Employee";

const Router = () => {
  return (
    <Routes>
      {/* <Route element={<Layout />}>
        <Route path="/wiki" element={<Wiki />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/address-book" element={<AddressBook />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
      </Route> */}
      <Route element={<SubLayout />}>
        <Route path="/" index element={<Main />}></Route>
        <Route path="/wiki" element={<Wiki />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route
          path="/project/new"
          element={<ProjectNew isEdit={false} />}
        ></Route>
        <Route path="/project/:projectId" element={<Project />}></Route>
        <Route
          path="/project/:projectId/edit"
          element={<ProjectNew isEdit={true} />}
        ></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
