import { IActivity } from "../../../models";
import Activity from "../ActivityItem";

type ActivityListProps = {
  activities: IActivity[];
  editActivity: (id: number) => void;
  handleConfirmModal: (id: number) => void;
};

const ActivityList = ({
  activities,
  editActivity,
  handleConfirmModal,
}: ActivityListProps) => (
  <div className="mt-3">
    {activities.map((activity) => (
      <Activity
        key={activity.id}
        activity={activity}
        editActivity={editActivity}
        handleConfirmModal={handleConfirmModal}
      />
    ))}
  </div>
);

export default ActivityList;
