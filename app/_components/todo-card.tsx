import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { DeleteRegular } from '@fluentui/react-icons';
import { Todo } from './todo-types';

type Props = {
  todo: Todo;
  onTodo: <K extends keyof Todo, V extends Todo[K]>(
    id: number,
    key: K,
    value: V
  ) => void;
};

export default function TodoCard(props: Props): React.JSX.Element {
  return (
    <Card className="p-4 transition-[background-color] focus-within:bg-slate-500/10 hoverable:hover:bg-slate-500/10">
      <CardContent className="flex w-full gap-2 p-0">
        <div className="flex items-center">
          <Checkbox
            className="me-2 h-6 w-6 rounded-full"
            disabled={props.todo.removed}
            checked={props.todo.checked}
            onCheckedChange={(s) =>
              props.onTodo(props.todo.id, 'checked', !!s)
            }
          />
        </div>
        <Input
          type="text"
          disabled={props.todo.checked || props.todo.removed}
          value={props.todo.value}
          onChange={(e) =>
            props.onTodo(props.todo.id, 'value', e.target.value)
          }
        />
        <Button
          className="w-20"
          onClick={() =>
            props.onTodo(props.todo.id, 'removed', !props.todo.removed)
          }
          variant="outline"
          size={props.todo.removed ? 'default' : 'icon'}
        >
          {props.todo.removed ? (
            '復元する'
          ) : (
            <DeleteRegular fontSize="1.5rem" className="text-red-500" />
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
