import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-100 to-white min-h-[85vh] flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              MSU Co-ed High School Programming Contest
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join us for a fun day of teamwork and creative problem-solving! Work with friends, challenge yourself, and enjoy the experience—open to all high school students!
            </p>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="/registration"
                className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                Register Now
              </a>
              <a href="/details" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="mt-8 lg:mt-0 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/HSPC25.jpeg"
                alt="Students participating in the programming contest"
                width={600}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}