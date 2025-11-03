export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-100 to-white dark:from-indigo-950 dark:to-black py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            MSU High School Programming Competition
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join us for an exciting day of programming challenges, problem-solving, and learning. Open to all high school students!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/registration"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}