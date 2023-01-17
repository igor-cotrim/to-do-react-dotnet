import { Pencil, Trash } from "phosphor-react";

import { IActivity } from "../../../models";
import { changeCardWithPriority } from "./functions";

type ActivityProps = {
  activity: IActivity;
  editActivity: (id: number) => void;
  handleConfirmModal: (id: number) => void;
};

const ActivityItem = ({
  activity,
  editActivity,
  handleConfirmModal,
}: ActivityProps) => (
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
        <button
          className="btn btn-sm btn-outline-primary me-2 d-flex justify-content-center align-items-center"
          onClick={() => editActivity(activity.id)}
        >
          <Pencil className="me-2" size={16} />
          Editar
        </button>
        <button
          className="btn btn-sm btn-outline-danger d-flex justify-content-center align-items-center"
          onClick={() => handleConfirmModal(activity.id)}
        >
          <Trash className="me-2" size={16} />
          Deletar
        </button>
      </div>
    </div>
  </div>
);

export default ActivityItem;
