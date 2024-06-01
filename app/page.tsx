import TodoApp from './todo-app';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8">
      <h1>ToDo App</h1>
      <div className="w-full max-w-[32rem]">
        <TodoApp />
      </div>
    </main>
  );
}
