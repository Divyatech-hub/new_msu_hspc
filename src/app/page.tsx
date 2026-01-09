import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-700">
              Annual Contest
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join the Challenge
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The Michigan State University Co-ed High School Programming Contest is designed to challenge
              and inspire the next generation of computer scientists and software engineers.
            </p>
          </div>

          {/* HSPC Image */}
          <div className="mt-10 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/HSPC252.jpeg"
                alt="High School Programming Contest participants"
                width={800}
                height={300}
                className="object-cover max-h-72"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl sm:mt-14 lg:mt-16 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Competition Format
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Teams of students solve programming challenges using popular programming languages
                    like Python, Java, and C++.
                  </p>
                </dd>
              </div>
              {/* <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Prizes
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Win exciting prizes including scholarships, tech gadgets, and recognition for your school.
                  </p>
                </dd>
              </div> */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Learning Experience
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Work with a team to hone your problem-solving skills, have fun, and meet other passionate students.
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
