import { Plus } from "phosphor-react";
import { useEffect, useState } from "react";

import { IActivity } from "../../models";

type ActivityFormProps = {
  addActivity: (activity: IActivity) => void;
  updateActivity: (activity: IActivity) => void;
  cancelActivity: () => void;
  descriptionRef: any;
  titleRef: any;
  priorityRef: any;
  selectedActivity: IActivity;
};

const initialActivity: IActivity = {
  id: 0,
  title: "",
  description: "",
  priority: "",
};

const ActivityForm = ({
  addActivity,
  updateActivity,
  cancelActivity,
  descriptionRef,
  titleRef,
  priorityRef,
  selectedActivity,
}: ActivityFormProps) => {
  const [activity, setActivity] = useState<IActivity>(currentActivity());

  const inputTextHandler = (
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

  function currentActivity(): IActivity {
    if (selectedActivity.id !== 0) {
      return selectedActivity;
    } else {
      return initialActivity;
    }
  }

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
      <h1>Atividade {activity.id !== 0 ? activity.id : ""}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            ref={titleRef}
            onChange={inputTextHandler}
            value={activity.title}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="priority" className="form-label">
            Prioridade
          </label>
          <select
            name="priority"
            className="form-select"
            ref={priorityRef}
            onChange={inputTextHandler}
            value={activity.priority}
          >
            <option defaultValue="0">Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label htmlFor="description" className="form-label">
            Descrição
          </label>
          <textarea
            name="description"
            className="form-control"
            ref={descriptionRef}
            onChange={inputTextHandler}
            value={activity.description}
          />
          <hr />
        </div>
        <div className="col-12 mt-0">
          {activity.id === 0 ? (
            <button className="btn btn-outline-secondary" type="submit">
              <Plus size={14} className="me-1" />
              Atividade
            </button>
          ) : (
            <>
              <button type="submit" className="btn btn-outline-secondary me-2">
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
