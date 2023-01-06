import { Pencil, Smiley, SmileyMeh, SmileySad, Trash } from "phosphor-react";

import { IActivity } from "../../models";

type ActivityProps = {
  activity: IActivity;
  deleteActivity: (id: number) => void;
};

const Activity = ({ activity, deleteActivity }: ActivityProps) => {
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

  return (
    <div
      key={activity.id}
      className={`card mb-2 shadow-sm border-${
        changeCardWithPriority(activity.priority).color
      }`}
    >
      <div className="card-body border-">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge text-bg-secondary me-2">{activity.id}</span>-{" "}
            {activity.title}
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
  );
};

export default Activity;
