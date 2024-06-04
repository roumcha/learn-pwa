import Header from '../components/header/header';
import TodoApp from './todo-app';

export default function Home() {
  return (
    <>
      <Header className="fixed" />
      <main className="flex min-h-screen flex-col items-center p-4 pt-[4rem]">
        <div className="w-full max-w-[32rem]">
          <TodoApp />
        </div>
      </main>
    </>
  );
}
