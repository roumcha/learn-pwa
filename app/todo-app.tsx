'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChangeEvent, useState } from 'react';

type Todo = {
  value: string;
};

export default function TodoApp() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit() {
    if (!text) return;
    const newTodo: Todo = { value: text };
    setTodos((todos) => [newTodo, ...todos]);
    setText('');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <div>
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
    </div>
  );
}
