import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import QuizCategory from "./components/QuizCategory";
import SummaryResult from "./components/SummaryResult";

const router = createBrowserRouter([
  { path: "/", element: <QuizCategory /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/quiz:categoryId", element: <Quiz /> },
  { path: "/summary", element: <SummaryResult /> },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
