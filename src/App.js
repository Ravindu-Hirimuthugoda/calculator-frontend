import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import LoadingPage from "./pages/LoadingPage";
import HomePage from "./pages/HomePage";
import AdditionPage from "./pages/AdditionPage";
import SubtractionPage from "./pages/SubtractionPage";
import MultiplicationPage from "./pages/MultiplicationPage";
import DivisionPage from "./pages/DivisionPage";
import SignOutPage from "./pages/SignOutPage";

function App() {
  const history = useHistory();
  return (
    <div>
      <main>
        <Switch>
          <Route path="/welcome/">
            <LoadingPage />
          </Route>
          <Route path="/home/">
            <HomePage />
          </Route>
          <Route path="/addition">
            <AdditionPage />
          </Route>
          <Route path="/subtraction">
            <SubtractionPage />
          </Route>
          <Route path="/multiplication">
            <MultiplicationPage />
          </Route>
          <Route path="/division">
            <DivisionPage />
          </Route>
          <Route path="/signout">
            <SignOutPage />
          </Route>
          <Route path="/" exact>
            {localStorage.getItem("access_token") &&
            localStorage.getItem("access_token") !== "undefined" ? (
              history.replace("/home")
            ) : (
              <SignInPage />
            )}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
