'use client';

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
        <input
          type="text"
          className="rounded-lg border-2 border-solid border-[#8888] px-2 py-1"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="submit"
          className="rounded-lg border-2 border-solid border-[#8888] px-2 py-1"
          value="追加"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
    </div>
  );
}
