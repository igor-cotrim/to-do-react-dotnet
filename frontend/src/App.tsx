import { useRef, useState } from "react";
import { Pencil, Smiley, SmileyMeh, SmileySad, Trash } from "phosphor-react";

type IActivities = {
  id: number;
  description: string;
  title: string;
  priority: string;
};

let initialValues: IActivities[] = [
  { id: 1, description: "Atividade 1", title: "Teste", priority: "1" },
  { id: 2, description: "Atividade 2", title: "Teste", priority: "3" },
];

function App() {
  const [activities, setActivities] = useState<IActivities[]>(initialValues);

  const idRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);

  const changeCardWithPriority = (priority: string) => {
    switch (priority) {
      case "1":
        return {
          label: "Baixa",
          icon: <Smiley className="me-1 text-success" size={20} />,
          color: "success",
        };
      case "2":
        return {
          label: "Normal",
          icon: <SmileyMeh className="me-1 text-dark" size={20} />,
          color: "dark",
        };
      case "3":
        return {
          label: "Alto",
          icon: <SmileySad className="me-1 text-warning" size={20} />,
          color: "warning",
        };
      default:
        return {
          label: "Não definido",
        };
    }
  };

  const deleteActivity = (id: number) => {
    const filtedActivities = activities.filter(
      (activity) => activity.id !== id
    );

    setActivities([...filtedActivities]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newActivity: IActivities = {
      id: Number(idRef.current?.value),
      description: descriptionRef.current?.value || "",
      title: titleRef.current?.value || "",
      priority: priorityRef.current?.value || "",
    };

    setActivities((prev) => [...prev, newActivity]);
  };

  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            id="id"
            type="number"
            className="form-control"
            ref={idRef}
            // value={idCount}
            value={
              Math.max.apply(
                Math,
                activities.map((item) => item.id)
              ) + 1
            }
            readOnly
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="priority" className="form-label">
            Prioridade
          </label>
          <select id="priority" className="form-select" ref={priorityRef}>
            <option defaultValue="0">Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            id="title"
            type="text"
            className="form-control"
            ref={titleRef}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Descrição
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            ref={descriptionRef}
          />
        </div>
        <hr />
        <div className="col-12">
          <button className="btn btn-outline-secondary">+ Atividade</button>
        </div>
      </form>
      <div className="mt-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`card mb-2 shadow-sm border-${
              changeCardWithPriority(activity.priority).color
            }`}
          >
            <div className="card-body border-">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge text-bg-secondary me-2">
                    {activity.id}
                  </span>
                  - {activity.title}
                </h5>
                <h6 className="d-flex justify-content-center align-items-center">
                  Prioridade:
                  <span
                    className={`ms-1 d-flex justify-content-center align-items-center text-${
                      changeCardWithPriority(activity.priority).color
                    }`}
                  >
                    {changeCardWithPriority(activity.priority).icon}
                    {changeCardWithPriority(activity.priority).label}
                  </span>
                </h6>
              </div>
              <p className="card-text">{activity.description}</p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-sm btn-outline-primary me-2 d-flex justify-content-center align-items-center">
                  <Pencil className="me-2" size={16} />
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger d-flex justify-content-center align-items-center"
                  onClick={() => deleteActivity(activity.id)}
                >
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
