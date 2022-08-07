import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaqsContainer } from './containers/faqs';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footer';
import * as ROUTES from './constants/routes';

console.log('ROUTES x', ROUTES.HOME);

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path={ROUTES.HOME} element=
     {
       <>
         <JumbotronContainer />
         <FaqsContainer />
         <FooterContainer />
       </>
     } />
     </Routes>
    </BrowserRouter>
  );
}
