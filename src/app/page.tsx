/*export default function Home() {
  return (
    <div className="text-black min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-semibold">Welcome to Ed3Hub</h1>
        <p>A person will land here who is not authenticated</p>
      </div>
    </div>
  )
}*/


import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/course-groups'); // or your main dashboard route
}
