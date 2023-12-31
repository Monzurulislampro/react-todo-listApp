import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes";

function App() {
  return (
    <div className="container mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
