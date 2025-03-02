import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage";
import CallforPaper from "./Pages/CallforPaper";
import PaperSubmission from "./Pages/PaperSubmission";
import Registration from "./Pages/Registration";
import Committees from "./Pages/Committees";
import Contact from "./Pages/Contact";
import Timeline from "./Pages/Timeline";
import Speakers from "./Pages/Speakers";
import SplashCursor from "./Components/SplashCursor";
import LetterGlitch from './Components/LetterGlitch';

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto">
      {/* Background effect with negative z-index */}
      <div className="fixed inset-0 z-0">
        <LetterGlitch
          glitchSpeed={200}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Main content with positive z-index */}
      <div className="relative z-10 w-full min-h-full text-white">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/callforpaper" element={<CallforPaper />} />
                <Route path="/papersubmission" element={<PaperSubmission />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/committees" element={<Committees />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/speakers" element={<Speakers />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      {/* Cursor effect on top with highest z-index */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <SplashCursor />
      </div>
    </div>
  );
}
