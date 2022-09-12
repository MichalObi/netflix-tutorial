import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path={ROUTES.HOME} element={ <Home /> } />
       <Route path={ROUTES.BROWSE} element={ <Browse /> } />
       <Route path={ROUTES.SIGN_IN} element={ <Signin /> } />
       <Route path={ROUTES.SIGN_UP} element={ <Signup /> } />
     </Routes>
    </BrowserRouter>
  );
}
