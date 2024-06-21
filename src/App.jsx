import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from "./layout/Main";
import Post, { loader as postLoader } from "./pages/Post";
import Create,{ action as postCreateAction} from "./pages/Create";
import Detail, { action as deleteAction, loader as detailLoader } from "./pages/Detail";
import Edit from "./pages/Edit";
import Error from "./pages/Error";





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
