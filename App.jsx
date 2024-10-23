import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Createpost from "./components/Createpost";
import PostList from "./components/Postlist";

import { useState } from "react";
import PostListProvider from "./store/Post-list-store";

function App(){
  const [selectedtab,setselectedtab]=useState("Home")
  return (
     <PostListProvider>
     <div className="app-container">
      <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}></Sidebar>
      <div className="content">
  <Header></Header>
  {selectedtab=="Home"? <PostList></PostList>:
  <Createpost></Createpost>}

  <Footer></Footer>
  
  </div>
  </div>
  </PostListProvider>
  )
}
export default App;