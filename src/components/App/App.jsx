import React, { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderBar from "../HeaderBar/HeaderBar";
import Container from "../Container/Container";
import Loader from "../../pages/Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactFormPage = lazy(() =>
  import("../../pages/ContactFormPage/ContactFormPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<ContactFormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </Suspense>
    </>
  );
};

export default App;
