import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from "./layout/Main";
import Post, { loader as postLoader } from "./pages/Post";
import Create from "./pages/Create";
import Detail, { action as deleteAction, loader as detailLoader } from "./pages/Detail";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import { action as postCreateAction} from "./components/CreateForm";
import { action as postUpdateAction} from "./components/CreateForm";





const router = createBrowserRouter(
  [{
    path: "/",
    element: <Main/>,
    errorElement: <Error/>,
    children: [{
      index: true,
      element: <Post/>,
      loader: postLoader,
    },
    {
      path: "/create-post",
      element: <Create/>,
      action: postCreateAction,
    },
    { path: ":id",
      id: "post-detail",
      loader: detailLoader,
      children: [ {
        index:true,
        element: <Detail/>,
        action: deleteAction,
      },
      {path:"edit-post",
        element: <Edit/>,
        action: postUpdateAction,
  
      }
        
      ]
    }
   
  ]
  }]
)

function App() {
  

  return (
   <><RouterProvider router ={router}/></>
  );
}

export default App;
