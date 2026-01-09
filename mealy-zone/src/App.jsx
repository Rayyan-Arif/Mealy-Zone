import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import RecipePage from '../pages/RecipePage';
import FavouritesPage from '../pages/FavouritesPage';
import CategoriesPage from '../pages/CategoriesPage';
import CategoryPage from '../pages/CategoryPage';
import NotFoundPage from '../pages/NotFoundPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/recipe/:id' element={<RecipePage />}/>
        <Route path='/favourites' element={<FavouritesPage />}/>
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:name' element={<CategoryPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Route>
    )
  );

  return <RouterProvider router={router}/>
}

export default App