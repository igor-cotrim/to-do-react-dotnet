import { IActivity } from "../../models";

type ActivityFormProps = {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  idRef: any;
  descriptionRef: any;
  titleRef: any;
  priorityRef: any;
  activities: IActivity[];
};

const ActivityForm = ({
  submit,
  idRef,
  descriptionRef,
  titleRef,
  priorityRef,
  activities,
}: ActivityFormProps) => {
  return (
    <form className="row g-3" onSubmit={submit}>
      <div className="col-md-6">
        <label htmlFor="id" className="form-label">
          Id
        </label>
        <input
          id="id"
          type="number"
          className="form-control"
          ref={idRef}
          disabled
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
        <input id="title" type="text" className="form-control" ref={titleRef} />
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
  );
};

export default ActivityForm;
