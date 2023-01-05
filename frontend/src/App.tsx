import { useState } from "react";

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
                <h6>Prioridade: Normal</h6>
              </div>
              <p className="card-text">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
