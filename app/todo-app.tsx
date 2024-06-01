'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
};

export default function TodoApp() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit() {
    if (!text) return;
    const newTodo: Todo = { id: new Date().getTime(), value: text };
    setTodos((todos) => [newTodo, ...todos]);
    setText('');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handleEdit(id: number, value: string) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, value: value } : todo
      )
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
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
        <Button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          追加
        </Button>
      </form>

      <Table>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>
                <Input
                  type="text"
                  value={todo.value}
                  onChange={(e) => {
                    e.preventDefault();
                    handleEdit(todo.id, e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
