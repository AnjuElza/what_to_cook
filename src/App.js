
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { RecipieList } from "./components/RecipieList";
import { RecipieDetail } from "./components/RecipieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipeList/:mainIngredient" element={<RecipieList />} />
      <Route path="/recipieList/:mainIngredient/:idMeal" element={<RecipieDetail />} />
    </Routes>
  );
}

export default App;

// import { Navigate, Routes, Route } from "react-router-dom";
// import { Home } from "./components/Home";
// import { RecipieList } from "./components/RecipieList";
// import {RecipieDetail } from "./components/RecipieDetail"
// function App() {
//   // const navigate = useNavigate();

//   return(
// <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recipieList/:mainIngredient" element={<RecipieList />} />
//         <Route path="/recipieList/:mainIngredient/:idMeal" element={<RecipieDetail />} />
//         {/* <Route path="/movie" element={<MovieList />} />
//         <Route path="/film" element={<Navigate replace to="/movie" />} />/recipieList/${}
        
//         <Route path="/404" element={<NotFoundPage />}/>
//         <Route path="*" element={<Navigate replace to="/404" />}/> */}
//       </Routes>
//   );
// }

// export default App;
