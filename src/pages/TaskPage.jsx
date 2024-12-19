import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

export function TaskPage() {
  const [seSearchParams] = useSearchParams();
  const title = seSearchParams.get("title");
  const description = seSearchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeftIcon onClick={() => navigate(-1)} />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-lg">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
