import TodoCard from './todo-card';
import { Filter, Todo } from './todo-types';

type Props = {
  todos: Todo[];
  filter: Filter;
  onTodo: <K extends keyof Todo, V extends Todo[K]>(
    id: number,
    key: K,
    value: V
  ) => void;
};

export default function TodoItems(props: Props): React.JSX.Element {
  const filteredTodos = props.todos.filter((todo) => {
    switch (props.filter) {
      case 'all':
        return !todo.removed;
      case 'checked':
        return todo.checked && !todo.removed;
      case 'unchecked':
        return !todo.checked && !todo.removed;
      case 'removed':
        return todo.removed;
      default:
        return todo;
    }
  });

  return (
    <div className="grid grid-flow-row gap-2">
      {filteredTodos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onTodo={props.onTodo} />
      ))}
    </div>
  );
}
