import { ArrowLeft } from "phosphor-react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import { Title } from "../../../components";

type paramsProps = {
  id: string | undefined;
};

const ClientForm = () => {
  const history = useHistory();
  const { id }: paramsProps = useParams();

  return (
    <>
      <Title title={`ClientForm ${!!id ? id : ""}`}>
        <Button variant="outline-secondary" onClick={() => history.goBack()}>
          <ArrowLeft className="me-2" size={18} />
          Voltar
        </Button>
      </Title>
      <div></div>
    </>
  );
};

export default ClientForm;
