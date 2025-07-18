import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-yellow-50">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Kasia Dziewicka</h1>
           <h1 className="text-4xl font-bold typewriter">
      {`Hello, my name is Kasia. This is my software engineering portfolio.`}
    </h1>
        <h2>Software Engineer</h2>
        <Link href="/about-me" className="text-blue-500 hover:underline">About me</Link>
    
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Built by Kasia Dziewicka
      </footer>
    </div>
  );
}
