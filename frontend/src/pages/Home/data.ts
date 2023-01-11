import { api } from "../../api";
import { IActivity } from "../../models";

export const initialActivity: IActivity = {
  id: 0,
  title: "",
  description: "",
  priority: "",
};

export const getAllActivities = async () => {
  const response = await api.get("activity");

  return response.data;
};

export const addActivity = async (
  activity: IActivity,
  handleActivityModal: () => void,
  setActivities: (value: React.SetStateAction<IActivity[]>) => void
) => {
  handleActivityModal();
  const response = await api.post("activity", activity);

  setActivities((prev) => [...prev, response.data]);
};

export const updateActivity = async (
  activity: IActivity,
  handleActivityModal: () => void,
  setActivities: (value: React.SetStateAction<IActivity[]>) => void,
  activities: IActivity[],
  setActivity: (value: React.SetStateAction<IActivity>) => void
) => {
  handleActivityModal();
  const response = await api.put(`activity/${activity.id}`, activity);
  const { id } = response.data;

  setActivities(
    activities.map((item) => (item.id === id ? response.data : item))
  );
  setActivity(initialActivity);
};

export const deleteActivity = async (
  id: number,
  handleConfirmModal: (id?: number) => void,
  activities: IActivity[],
  setActivities: (value: React.SetStateAction<IActivity[]>) => void
) => {
  handleConfirmModal(0);
  const response = await api.delete(`activity/${id}`);

  if (response) {
    const filtedActivities = activities.filter(
      (activity) => activity.id !== id
    );

    setActivities([...filtedActivities]);
  }
};

export const editActivity = (
  id: number,
  activities: IActivity[],
  setActivity: (value: React.SetStateAction<IActivity>) => void,
  handleActivityModal: () => void
) => {
  const filtedActivities = activities.filter((activity) => activity.id === id);

  setActivity(filtedActivities[0]);
  handleActivityModal();
};

export const cancelActivity = (
  handleActivityModal: () => void,
  setActivity: (value: React.SetStateAction<IActivity>) => void
) => {
  handleActivityModal();
  setActivity(initialActivity);
};
