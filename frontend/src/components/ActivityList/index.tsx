import { IActivity } from "../../models";
import Activity from "../Activity";

type ActivityListProps = {
  activities: IActivity[];
  editActivity: (id: number) => void;
  deleteActivity: (id: number) => void;
};

const ActivityList = ({
  activities,
  editActivity,
  deleteActivity,
}: ActivityListProps) => (
  <div className="mt-3">
    {activities.map((activity) => (
      <Activity
        key={activity.id}
        activity={activity}
        editActivity={editActivity}
        deleteActivity={deleteActivity}
      />
    ))}
  </div>
);

export default ActivityList;
