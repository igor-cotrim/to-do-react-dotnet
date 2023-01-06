import { useRef, useState } from "react";

import { IActivity } from "./models";
import { ActivityList, ActivityForm } from "./components";

let initialValues: IActivity[] = [
  { id: 1, description: "Atividade 1", title: "Teste", priority: "1" },
  { id: 2, description: "Atividade 2", title: "Teste", priority: "3" },
];

function App() {
  const [activities, setActivities] = useState<IActivity[]>(initialValues);

  const idRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);

  const deleteActivity = (id: number) => {
    const filtedActivities = activities.filter(
      (activity) => activity.id !== id
    );

    setActivities([...filtedActivities]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newActivity: IActivity = {
      id: Number(idRef.current?.value),
      description: descriptionRef.current?.value || "",
      title: titleRef.current?.value || "",
      priority: priorityRef.current?.value || "",
    };

    setActivities((prev) => [...prev, newActivity]);
  };

  return (
    <>
      <ActivityForm
        submit={handleSubmit}
        idRef={idRef}
        descriptionRef={descriptionRef}
        titleRef={titleRef}
        priorityRef={priorityRef}
        activities={activities}
      />
      <ActivityList activities={activities} deleteActivity={deleteActivity} />
    </>
  );
}

export default App;
