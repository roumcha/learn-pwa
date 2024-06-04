'use client';

import { Button } from '@/components/ui/button';
import { isTodos } from '@/lib/isTodo';
import localforage from 'localforage';
import { ChangeEvent, useEffect, useState } from 'react';
import DeleteDialog from './_components/delete-dialog';
import FormDialog from './_components/form-dialog';
import TabBar from './_components/tabbar';
import TodoItems from './_components/todo-items';
import { type Filter, type Todo } from './_components/todo-types';

export default function TodoApp(): JSX.Element {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  function handleSubmit() {
    if (!text) {
      setDialogOpen((value) => !value);
      return;
    }

    const newTodo: Todo = {
      id: new Date().getTime(),
      value: text,
      checked: false,
      removed: false,
    };

    setTodos((todos) => [newTodo, ...todos]);
    setText('');
    setDialogOpen((value) => !todos);
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setText(e.target.value);
  }

  function handleSort(filter: Filter) {
    setFilter(filter);
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

  function handleToggleDialog() {
    setDialogOpen((value) => !value);
    setText('');
  }

  function handleToggleAlert() {
    setAlertOpen((value) => !value);
  }

  function handleEmpty() {
    setTodos((todos) => todos.filter((todo) => !todo.removed));
  }

  useEffect(() => {
    localforage
      .getItem('todo-20240603')
      .then((values) => isTodos(values) && setTodos(values));
  }, []);

  useEffect(() => {
    localforage.setItem('todo-20240603', todos);
  }, [todos]);

  return (
    <div className="flex w-full flex-col gap-6">
      <TabBar filter={filter} onFilter={handleSort} />

      {(filter === 'all' || filter === 'unchecked') && (
        <FormDialog
          text={text}
          onSubmit={handleSubmit}
          onChange={handleChange}
          dialogOpen={dialogOpen}
          onToggleDialog={handleToggleDialog}
        />
      )}

      <div className="pb-8">
        <TodoItems todos={todos} filter={filter} onTodo={handleTodo} />
      </div>

      {filter === 'removed' && (
        <Button
          variant="destructive"
          size="default"
          className="fixed bottom-4 right-4 rounded-full shadow-md"
          onClick={handleToggleAlert}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
          ゴミ箱を空にする
        </Button>
      )}

      <DeleteDialog
        open={alertOpen}
        onToggleOpen={handleToggleAlert}
        onCommit={handleEmpty}
      />
    </div>
  );
}
