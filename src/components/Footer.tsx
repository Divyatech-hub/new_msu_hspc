export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            © {new Date().getFullYear()} MSU Co-ed High School Programming Contest. All rights reserved.
          </p>
        </div>
        <div className="mt-8 md:order-2 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
              Organized by the Department of Computer Science at Michigan State University
          </p>
        </div>
      </div>
    </footer>
  );
}