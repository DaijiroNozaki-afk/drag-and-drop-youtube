import { useState } from 'react';
import initialData from '../data/initial-data';

function TaskApp() {
  const [state, setState] = useState(initialData);
  //   console.log(state);
  //　クラスコンポーネントを関数コンポーネントに書き換えるのは難しい
  return (
    <>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        // console.log(column.taskIds.map((taskId) => state.tasks[taskId]));
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
        return;
        // return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </>
  );
}
export default TaskApp;
