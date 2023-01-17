import { Route, Switch } from "react-router-dom";

import { Activities, Clients } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Clients} />
      <Route path="/atividades" component={Activities} />
      <Route path="/clientes" component={Clients} />
    </Switch>
  );
}

export default App;
