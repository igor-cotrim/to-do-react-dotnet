import { useState } from "react";
import { Plus, UserGear, UserMinus } from "phosphor-react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

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
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filtedClients = clients.filter((client) => {
    return Object.values(client)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  const newClient = () => {
    history.push("/cliente/detalhe");
  };

  return (
    <>
      <Title title="ClientList">
        <Button variant="outline-secondary" onClick={newClient}>
          <Plus className="me-2" size={20} />
          Novo Cliente
        </Button>
      </Title>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text>Buscar:</InputGroup.Text>
        <FormControl
          onChange={handleInputChange}
          placeholder="Buscar por nome do cliente"
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
          {filtedClients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.responsible}</td>
              <td>{client.contact}</td>
              <td>{client.status}</td>
              <td>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() =>
                      history.push(`/cliente/detalhe/${client.id}`)
                    }
                  >
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
