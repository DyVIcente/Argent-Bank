import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  
  import { Home, SignIn, Profil } from "./pages";
  import { RootLayout } from "./layout/RootLayout";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profil />} />
      </Route>
    )
  );
  
  const Router = () => <RouterProvider router={router} />;
  
  export default Router;