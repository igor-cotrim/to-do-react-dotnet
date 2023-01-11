import { useEffect, useState } from "react";

import { IActivity } from "./models";
import { ActivityList, ActivityForm } from "./components";
import { api } from "./api";

export const initialActivity: IActivity = {
  id: 0,
  title: "",
  description: "",
  priority: "",
};

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [activity, setActivity] = useState<IActivity>(initialActivity);

  const handleAllActivities = async () => {
    const response = await api.get("activity");

    return response.data;
  };

  const editActivity = (id: number) => {
    const filtedActivities = activities.filter(
      (activity) => activity.id === id
    );

    setActivity(filtedActivities[0]);
  };

  const deleteActivity = async (id: number) => {
    const response = await api.delete(`activity/${id}`);

    if (response) {
      const filtedActivities = activities.filter(
        (activity) => activity.id !== id
      );

      setActivities([...filtedActivities]);
    }
  };

  const cancelActivity = () => {
    setActivity(initialActivity);
  };

  const updateActivity = async (activity: IActivity) => {
    const response = await api.put(`activity/${activity.id}`, activity);
    const { id } = response.data;

    setActivities(
      activities.map((item) => (item.id === id ? response.data : item))
    );
    setActivity(initialActivity);
  };

  const addActivity = async (activity: IActivity) => {
    const response = await api.post("activity", activity);
    console.log("response", response.data);
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
      <ActivityForm
        addActivity={addActivity}
        updateActivity={updateActivity}
        cancelActivity={cancelActivity}
        selectedActivity={activity}
      />
      <ActivityList
        activities={activities}
        editActivity={editActivity}
        deleteActivity={deleteActivity}
      />
    </>
  );
}

export default App;
