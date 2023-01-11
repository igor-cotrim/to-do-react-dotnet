import { useEffect, useState } from "react";
import { Plus } from "phosphor-react";

import { initialActivity } from "../../App";
import { IActivity } from "../../models";

type ActivityFormProps = {
  addActivity: (activity: IActivity) => void;
  updateActivity: (activity: IActivity) => void;
  cancelActivity: () => void;
  selectedActivity: IActivity;
};

const ActivityForm = ({
  addActivity,
  updateActivity,
  cancelActivity,
  selectedActivity,
}: ActivityFormProps) => {
  const [activity, setActivity] = useState<IActivity>(initialActivity);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setActivity({ ...activity, [name]: value });
  };

  const handleCancel = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    cancelActivity();
    setActivity(initialActivity);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedActivity.id !== 0) {
      updateActivity(activity);
    } else {
      addActivity(activity);
    }

    setActivity(initialActivity);
  };

  useEffect(() => {
    if (selectedActivity.id !== 0) {
      setActivity(selectedActivity);
    }
  }, [selectedActivity]);

  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={activity.title}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="priority" className="form-label">
            Prioridade
          </label>
          <select
            name="priority"
            className="form-select"
            onChange={handleChange}
            value={activity.priority}
          >
            <option value="undefined">Selecione...</option>
            <option value="low">Baixa</option>
            <option value="normal">Normal</option>
            <option value="high">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label htmlFor="description" className="form-label">
            Descrição
          </label>
          <textarea
            name="description"
            className="form-control"
            onChange={handleChange}
            value={activity.description}
          />
          <hr />
        </div>
        <div className="col-12 mt-0">
          {activity.id === 0 ? (
            <button className="btn btn-outline-success" type="submit">
              <Plus size={14} className="me-1" />
              Salvar
            </button>
          ) : (
            <>
              <button type="submit" className="btn btn-outline-success me-2">
                <Plus size={14} className="me-1" />
                Salvar
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default ActivityForm;
