import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              Annual Competition
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Join the Challenge
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              The Morgan State University High School Programming Competition is designed to challenge
              and inspire the next generation of computer scientists and software engineers.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  Competition Format
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    Teams of students solve programming challenges using popular programming languages
                    like Python, Java, and C++.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  Prizes
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    Win exciting prizes including scholarships, tech gadgets, and recognition for your school.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  Learning Experience
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    Get hands-on experience with real-world programming challenges and meet other
                    passionate students.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
