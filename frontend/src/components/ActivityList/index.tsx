import { IActivity } from "../../models";
import Activity from "../Activity";

type ActivityListProps = {
  activities: IActivity[];
  deleteActivity: (id: number) => void;
};

const ActivityList = ({ activities, deleteActivity }: ActivityListProps) => (
  <div className="mt-3">
    {activities.map((activity) => (
      <Activity
        key={activity.id}
        activity={activity}
        deleteActivity={deleteActivity}
      />
    ))}
  </div>
);

export default ActivityList;
