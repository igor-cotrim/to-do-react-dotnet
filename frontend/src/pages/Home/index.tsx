import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Check, Plus, X } from "phosphor-react";

import { IActivity } from "../../models";
import { ActivityList, ActivityForm } from "../../components";
import { api } from "../../api";

export const initialActivity: IActivity = {
  id: 0,
  title: "",
  description: "",
  priority: "",
};

const Home = () => {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [activity, setActivity] = useState<IActivity>(initialActivity);

  const handleActivityModal = () => setShowActivityModal(!showActivityModal);

  const handleConfirmModal = (id?: number) => {
    if (id !== 0 && id !== undefined) {
      const filtedActivities = activities.filter(
        (activity) => activity.id === id
      );

      setActivity(filtedActivities[0]);
    } else {
      setActivity(initialActivity);
    }

    setShowConfirmModal(!showConfirmModal);
  };

  const handleAllActivities = async () => {
    const response = await api.get("activity");

    return response.data;
  };

  const editActivity = (id: number) => {
    const filtedActivities = activities.filter(
      (activity) => activity.id === id
    );

    setActivity(filtedActivities[0]);
    handleActivityModal();
  };

  const deleteActivity = async (id: number) => {
    handleConfirmModal(0);
    const response = await api.delete(`activity/${id}`);

    if (response) {
      const filtedActivities = activities.filter(
        (activity) => activity.id !== id
      );

      setActivities([...filtedActivities]);
    }
  };

  const cancelActivity = () => {
    handleActivityModal();
    setActivity(initialActivity);
  };

  const updateActivity = async (activity: IActivity) => {
    handleActivityModal();
    const response = await api.put(`activity/${activity.id}`, activity);
    const { id } = response.data;

    setActivities(
      activities.map((item) => (item.id === id ? response.data : item))
    );
    setActivity(initialActivity);
  };

  const addActivity = async (activity: IActivity) => {
    handleActivityModal();
    const response = await api.post("activity", activity);

    setActivities((prev) => [...prev, response.data]);
  };

  useEffect(() => {
    (async () => {
      const allActivities = await handleAllActivities();

      if (allActivities) setActivities(allActivities);
    })();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1">
        <h1 className="m-0 p-0">
          Atividade {activity.id !== 0 ? activity.id : ""}
        </h1>
        <Button
          variant="outline-secondary"
          onClick={() => {
            handleActivityModal();
            setActivity(initialActivity);
          }}
        >
          <Plus size={28} />
        </Button>
      </div>
      <ActivityList
        activities={activities}
        editActivity={editActivity}
        handleConfirmModal={handleConfirmModal}
      />
      <Modal show={showActivityModal} onHide={handleActivityModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Atividade {activity.id !== 0 ? activity.id : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ActivityForm
            addActivity={addActivity}
            updateActivity={updateActivity}
            cancelActivity={cancelActivity}
            selectedActivity={activity}
          />
        </Modal.Body>
      </Modal>

      <Modal size="sm" show={showConfirmModal} onHide={handleConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Excluindo Atividade: {activity.id !== 0 ? activity.id : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir a Atividade {activity.id}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <button
            className="btn btn-outline-success me-2 d-flex align-items-center gap-1"
            onClick={() => deleteActivity(activity.id)}
          >
            <Check size={18} />
            Sim
          </button>
          <button
            className="btn btn-danger me-2 d-flex align-items-center gap-1"
            onClick={() => handleConfirmModal(0)}
          >
            <X size={18} />
            Não
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
