

import { prisma } from '@/data/db';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../../api/auth/[...nextauth]/route';



export const getTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
}


export default async function Home() { 

  // await prisma.todo.create({
  //   data: {
  //     title: 'Prisma makes databases easy',
  //   },
  // });

  const userData = await getServerSession(authOptions);;
  const todos = await getTodos();

  return (
    <>
    <header>
      <h1>Todos {JSON.stringify(userData)}</h1>
      <Link href="/new">New</Link>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="capitalize">
        a blog application
      </h1>
           <Link href="/login">Login</Link>
            <Link href="/register">Register page</Link>

            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <div>{todo.title}</div>
                </li>
              ))}
            </ul>

    </main>
    </>
  )
}
