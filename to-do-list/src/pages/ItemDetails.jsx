import ListItem from "../components/ListItem";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();

  const selectedTask = Task[parseInt(itemId, 10)];

  return (
    <div>
      {selectedTask && (
        <ListItem task={selectedTask} tasksIndex={parseInt(itemId, 10)} />
      )}
    </div>
  );
}

export default ItemDetails;
