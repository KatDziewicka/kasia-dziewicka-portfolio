import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold typewriter">
          {`Hello, my name is Kasia. This is my software engineering portfolio.`}
        </h1>
        <div className="flex gap-4">
          <Link href="/about-me" className="text-blue-500 hover:underline">
            About me
          </Link>
          <span>|</span>
          <Link
            href="/work-experience"
            className="text-blue-500 hover:underline"
          >
            View my work
          </Link>
          <span>|</span>

          <Link
            href="/courses-and-experiences"
            className="text-blue-500 hover:underline"
          >
            My experiences
          </Link>
          <span>|</span>
          <Link href="/contact" className="text-blue-500 hover:underline">
            Get in touch
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div>Designed and built by me.</div>
        <div>LinkedIn icon</div>
        <div>GitHub icon</div>
        <div>Get in touch</div>
      </footer>
    </div>
  );
}
