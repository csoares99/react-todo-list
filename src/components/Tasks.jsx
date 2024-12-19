import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate();

  function onTaskDetail(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex bg-slate-400 text-white p-2 rounded-sm ${
            task.isCompleted ? "line-through" : ""
          }`}
        >
          <span
            className="w-full text-left"
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </span>
          <button>
            <ChevronRightIcon onClick={() => onTaskDetail(task)} />
          </button>
          <button onClick={() => onDeleteTask(task.id)}>
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
