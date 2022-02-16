import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./resource/components/Layout";
import Navbar from "./resource/components/Navbar";
import About from "./resource/pages/About";
import Contact from "./resource/pages/Contact";
import PageNotFound from "./resource/pages/PageNotFound";
import Home from "./resource/pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Blog from "./resource/pages/Blog";
import PostItem from "./resource/components/PostItem";





//! For Navbar Function when use Navbar

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/blog" element={< Blog />} />
          <Route path="/postItem/:id" element={<PostItem />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;

//# Our Main Function for when use Layout

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={< Layout />} >
//             {/* if we want to see also home page then use 'index' */}
//             <Route index element={< Home />} /> 
//             <Route path="about" element={< About />} />
//             <Route path="/contact" element={< Contact />} />
//           </Route>
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

