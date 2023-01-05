import { useState } from "react";
import { Pencil, Smiley, SmileyMeh, SmileySad, Trash } from "phosphor-react";

type IActivities = {
  id: number;
  description: string;
};

let initialValues: IActivities[] = [
  { id: 1, description: "Atividade 1" },
  { id: 2, description: "Atividade 2" },
];

function App() {
  const [activities, setActivities] = useState<IActivities[]>(initialValues);

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Descrição
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <hr />
        <div className="col-12">
          <button className="btn btn-outline-secondary">+ Atividade</button>
        </div>
      </form>
      <div className="mt-3">
        {activities.map((activity) => (
          <div key={activity.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge text-bg-secondary me-2">
                    {activity.id}
                  </span>
                  - Titulo
                </h5>
                <h6 className="d-flex justify-content-center align-items-center">
                  Prioridade:
                  <span className="ms-1 text-black d-flex justify-content-center align-items-center">
                    <Smiley className="me-1" size={20} />
                    {/* <SmileySad className="me-1" size={20} />
                    <SmileyMeh className="me-1" size={20} /> */}
                    Normal
                  </span>
                </h6>
              </div>
              <p className="card-text">{activity.description}</p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-sm btn-outline-primary me-2 d-flex justify-content-center align-items-center">
                  <Pencil className="me-2" size={16} />
                  Editar
                </button>
                <button className="btn btn-sm btn-outline-danger d-flex justify-content-center align-items-center">
                  <Trash className="me-2" size={16} />
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
