import { UserGear, UserMinus } from "phosphor-react";
import { Form, InputGroup } from "react-bootstrap";

import { Title } from "../../../components";

const clients = [
  {
    id: 1,
    name: "Microsoft",
    responsible: "Otto",
    contact: "1233121",
    status: "active",
  },
  {
    id: 2,
    name: "amazon",
    responsible: "Otto",
    contact: "1233121",
    status: "disabled",
  },
  {
    id: 3,
    name: "Google",
    responsible: "Otto",
    contact: "1233121",
    status: "in analysis",
  },
  {
    id: 4,
    name: "Meta",
    responsible: "Otto",
    contact: "1233121",
    status: "Active",
  },
];

const ClientList = () => {
  return (
    <>
      <Title title="ClientList" />
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text>Buscar:</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <table className="table table-striped table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Responsável</th>
            <th scope="col">Contato</th>
            <th scope="col">Situação</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.responsible}</td>
              <td>{client.contact}</td>
              <td>{client.status}</td>
              <td>
                <div>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <UserGear className="me-2" size={16} />
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <UserMinus className="me-2" size={16} />
                    Desativar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClientList;
