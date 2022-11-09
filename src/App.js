import React from "react";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import ContentDetails from "./components/details/ContentDetails";

//Call size Context.....
import WindowSizeProvider from "./context/WindowSizeProvider";
import DubbedMovies from "./Pages/DubbedMovies";
import AllMovies from "./Pages/AllMovies";
import TrendMovies from "./Pages/TrendMovies";
import AllSeries from "./Pages/AllSeries";
import TrendSeries from "./Pages/TrendSeries";
function App() {
  return (
    <div className="App">
      <WindowSizeProvider>
        <Layout>
          <Routes>
            <Route path="/allmovies" element={<AllMovies />} />
            <Route path="/trendmovies" element={<TrendMovies />} />
            <Route path="/allseries" element={<AllSeries />} />
            <Route path="/trendseries" element={<TrendSeries />} />
            <Route path="/dubbedseries" element={<DubbedMovies />} />
            <Route
              path="/dubbedseries/:type/:slug"
              element={<ContentDetails />}
            />

            <Route path="/allseries/:type/:slug" element={<ContentDetails />} />
            <Route path="/allmovies/:type/:slug" element={<ContentDetails />} />
            <Route
              path="/trendseries/:type/:slug"
              element={<ContentDetails />}
            />
            <Route
              path="/trendmovies/:type/:slug"
              element={<ContentDetails />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/:type/:slug" element={<ContentDetails />} />
            <Route
              path="/dubbedmovies/:type/:slug"
              element={<ContentDetails />}
            />
            <Route path="/dubbedmovies" element={<DubbedMovies />} />
          </Routes>
        </Layout>
      </WindowSizeProvider>
    </div>
  );
}

export default App;
