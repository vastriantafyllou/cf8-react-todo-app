import type {ToDoStatsProps} from "../../types.ts";

const ToDoStats = ({total, active, completed}: ToDoStatsProps) => {
  return (
    <>
      <div className="flex justify-between border-t pt-4 text-cf-dark-gray">
        <span>Total: {total}</span>
        <span>Active: {active}</span>
        <span>Completed: {completed}</span>
      </div>
    </>
  )
}

export default ToDoStats