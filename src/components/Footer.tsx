export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MSU High School Programming Competition. All rights reserved.
          </p>
        </div>
        <div className="mt-8 md:order-2 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
              Organized by the Department of Computer Science at Michigan State University
          </p>
        </div>
      </div>
    </footer>
  );
}