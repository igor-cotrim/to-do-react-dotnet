import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Check, Plus, X } from "phosphor-react";

import { IActivity } from "../../models";
import { ActivityList, ActivityForm, Title } from "../../components";
import {
  addActivity,
  cancelActivity,
  deleteActivity,
  editActivity,
  getAllActivities,
  initialActivity,
  updateActivity,
} from "./data";

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

  useEffect(() => {
    (async () => {
      const allActivities = await getAllActivities();

      if (allActivities) setActivities(allActivities);
    })();
  }, []);

  return (
    <>
      <Title title={`Atividade ${activity.id !== 0 ? activity.id : ""}`}>
        <Button
          variant="outline-secondary"
          onClick={() => {
            handleActivityModal();
            setActivity(initialActivity);
          }}
        >
          <Plus size={28} />
        </Button>
      </Title>
      <ActivityList
        activities={activities}
        editActivity={(id: number) =>
          editActivity(id, activities, setActivity, handleActivityModal)
        }
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
            addActivity={(activity: IActivity) =>
              addActivity(activity, handleActivityModal, setActivities)
            }
            updateActivity={(activity: IActivity) =>
              updateActivity(
                activity,
                handleActivityModal,
                setActivities,
                activities,
                setActivity
              )
            }
            cancelActivity={() =>
              cancelActivity(handleActivityModal, setActivity)
            }
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
            onClick={() =>
              deleteActivity(
                activity.id,
                () => handleConfirmModal(0),
                activities,
                setActivities
              )
            }
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
