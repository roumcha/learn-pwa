import TodoApp from './todo-app';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <h1>ToDo App</h1>
      <TodoApp />
    </main>
  );
}
