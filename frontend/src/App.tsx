import { Route, Switch } from "react-router-dom";

import { ClientForm } from "./components";
import { Activities, Clients, Dashboard } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/atividade/lista" component={Activities} />
      <Route path="/cliente/lista" component={Clients} />
      <Route path="/cliente/detalhe" component={ClientForm} />
    </Switch>
  );
}

export default App;
