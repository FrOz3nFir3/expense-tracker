import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./Home.js";
// dynamic import non visuale components
const DashBoard = React.lazy(() => import("./DashBoard/index.js"));
const Authenticate = React.lazy(() => import("./Authentication/index.js"));
const Logout = React.lazy(() => import("./Authentication/Logout.js"));
const NotFound = React.lazy(() => import("./NotFound/index.js"));

const SuspenseLoader = () => {
  {/* could load actual page sekeleton in fallback instead */ }
  return (
    <div className="container">
      <h2 className="text-center">Loading...</h2>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="dashboard" element={<React.Suspense fallback={<SuspenseLoader />}>
          <DashBoard />
        </React.Suspense>} />

        <Route path="authenticate" element={<React.Suspense fallback={<SuspenseLoader />}>
          <Authenticate />
        </React.Suspense>} />

        <Route path="logout" element={<React.Suspense fallback={<SuspenseLoader />}>
          <Logout />
        </React.Suspense>} />

        <Route path="*" element={<React.Suspense fallback={<SuspenseLoader />}>
          <NotFound />
        </React.Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
