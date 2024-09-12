import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainNavigation from "./pages/MainNavigation";
import CartPage from "./pages/CartPage";
import DeliveryPage from "./pages/DeliveryPage";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Orders from "./pages/Orders";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "del",
        element: <DeliveryPage />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
