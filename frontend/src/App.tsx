import { Route, Switch } from "react-router-dom";

import {
  Activities,
  Dashboard,
  PageNotFound,
  ClientList,
  ClientForm,
} from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/atividade/lista" component={Activities} />
      <Route path="/cliente/lista" component={ClientList} />
      <Route path="/cliente/detalhe/:id?" component={ClientForm} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
