import { Routes, Route } from "react-router-dom";
import Recipe from "./components/pages/RecipeDetails";
import RecipesList from "./components/pages/RecipesList";
import Layout from "./components/templates/Layout";
import Home from "./components/pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<RecipesList />}>
          <Route path=":id" element={<Recipe />} />
        </Route>
      </Route>
    </Routes>
  );
}
