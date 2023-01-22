import { ArrowLeft } from "phosphor-react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { Title } from "../../../components";

const ClientForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <Title title={`ClientForm ${!!id ? id : ""}`}>
        <Button
          variant="outline-secondary"
          onClick={() => navigate("/cliente/lista")}
        >
          <ArrowLeft className="me-2" size={18} />
          Voltar
        </Button>
      </Title>
      <div></div>
    </>
  );
};

export default ClientForm;
