import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routers";
import {DefaulLayout} from '~/components/Layout'
function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
        {publicRoutes.map((router,index)=>{
          const Page=router.component;
          const Layout=router.layout||DefaulLayout;
          return <Route key={index} path={router.path} element={<Layout><Page/></Layout>}/>
        })}
        
       </Routes>
      </div>
    </Router>
  );
}

export default App;
