import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routers";
import {DefaulLayout} from '~/components/Layout'
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
        {publicRoutes.map((router,index)=>{
          const Page=router.component;
          let Layout=DefaulLayout;
          if(router.layout){
            Layout=router.layout;
          }else if(router.layout===null){
            Layout=Fragment;
          }

          return <Route key={index} path={router.path} element={<Layout><Page/></Layout>}/>
        })}
        
       </Routes>
      </div>
    </Router>
  );
}

export default App;
