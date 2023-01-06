import { useEffect, useRef, useState } from "react";

import { IActivity } from "./models";
import { ActivityList, ActivityForm } from "./components";

let initialValues: IActivity[] = [
  { id: 1, description: "Atividade 1", title: "Teste", priority: "1" },
  { id: 2, description: "Atividade 2", title: "Teste", priority: "3" },
];

const initialActivity: IActivity = {
  id: 0,
  title: "",
  description: "",
  priority: "",
};

function App() {
  const [activities, setActivities] = useState<IActivity[]>(initialValues);
  const [activity, setActivity] = useState<IActivity>(initialActivity);
  const [index, setIndex] = useState(0);

  const descriptionRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);

  const editActivity = (id: number) => {
    const filtedActivities = activities.filter(
      (activity) => activity.id === id
    );

    setActivity(filtedActivities[0]);
  };

  const deleteActivity = (id: number) => {
    const filtedActivities = activities.filter(
      (activity) => activity.id !== id
    );

    setActivities([...filtedActivities]);
  };

  const cancelActivity = () => {
    setActivity(initialActivity);
  };

  const updateActivity = (activity: IActivity) => {
    setActivities(
      activities.map((item) => (item.id === activity.id ? activity : item))
    );
    setActivity(initialActivity);
  };

  const addActivity = (activity: IActivity) => {
    setActivities((prev) => [...prev, { ...activity, id: index }]);
  };

  useEffect(() => {
    activities.length <= 0
      ? setIndex(1)
      : setIndex(
          Math.max.apply(
            Math,
            activities.map((item) => item.id)
          ) + 1
        );
  }, [activities]);

  return (
    <>
      <ActivityForm
        addActivity={addActivity}
        updateActivity={updateActivity}
        cancelActivity={cancelActivity}
        descriptionRef={descriptionRef}
        titleRef={titleRef}
        priorityRef={priorityRef}
        // activities={activities}
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
