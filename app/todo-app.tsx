'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { ChangeEvent, useState } from 'react';

type Todo = {
  readonly id: number;
  value: string;
  checked: boolean;
  removed: boolean;
};

type Filter = 'all' | 'checked' | 'unchecked' | 'removed';

export default function TodoApp() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  function handleSubmit() {
    if (!text) return;

    const newTodo: Todo = {
      id: new Date().getTime(),
      value: text,
      checked: false,
      removed: false,
    };

    setTodos((todos) => [newTodo, ...todos]);
    setText('');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSort(filter: Filter) {
    setFilter(filter);
  }

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
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

  function handleEmpty() {
    setTodos((todos) => todos.filter((todo) => !todo.removed));
  }

  function handleTodo<K extends keyof Todo, V extends Todo[K]>(
    id: number,
    key: K,
    value: V
  ) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, [key]: value } : todo
      )
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <Select
        defaultValue="all"
        onValueChange={(s) => handleSort(s as Filter)}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">すべてのタスク</SelectItem>
            <SelectItem value="checked">完了したタスク</SelectItem>
            <SelectItem value="unchecked">現在のタスク</SelectItem>
            <SelectItem value="removed">ゴミ箱</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {filter === 'removed' ? (
        <Button
          variant="destructive"
          onClick={handleEmpty}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
          ゴミ箱を空にする
        </Button>
      ) : (
        filter !== 'checked' && (
          <form
            className="flex flex-row gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Input
              type="text"
              placeholder="タスクを入力"
              value={text}
              onChange={(e) => handleChange(e)}
            />
            <Button type="submit" onSubmit={handleSubmit}>
              追加
            </Button>
          </form>
        )
      )}

      <Table>
        <TableBody>
          {filteredTodos.map((todo) => (
            <TableRow
              key={todo.id}
              className={todo.removed ? '[&>*]:opacity-65' : ''}
            >
              <TableCell className="text-center">
                <Checkbox
                  disabled={todo.removed}
                  checked={todo.checked}
                  onCheckedChange={(s) =>
                    handleTodo(todo.id, 'checked', !!s)
                  }
                ></Checkbox>
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  disabled={todo.checked || todo.removed}
                  value={todo.value}
                  onChange={(e) =>
                    handleTodo(todo.id, 'value', e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  className="w-20"
                  onClick={() =>
                    handleTodo(todo.id, 'removed', !todo.removed)
                  }
                  variant="outline"
                >
                  {todo.removed ? '復元する' : '削除する'}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
