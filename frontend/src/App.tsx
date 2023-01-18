import { Route, Switch } from "react-router-dom";

import { ClientForm } from "./components";
import { Activities, Clients, Dashboard, PageNotFound } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/atividade/lista" component={Activities} />
      <Route path="/cliente/lista" component={Clients} />
      <Route path="/cliente/detalhe/:id?" component={ClientForm} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
