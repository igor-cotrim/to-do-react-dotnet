import { Route, Routes } from "react-router-dom";

import {
  Activities,
  Dashboard,
  PageNotFound,
  ClientList,
  ClientForm,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/atividade/*" element={<Activities />} />
      <Route path="/cliente/*" element={<ClientList />} />
      <Route path="/cliente/detalhe/" element={<ClientForm />} />
      <Route path="/cliente/detalhe/:id" element={<ClientForm />} />
    </Routes>
  );
}

export default App;
