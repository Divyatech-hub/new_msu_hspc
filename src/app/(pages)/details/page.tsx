export default function DetailsPage() {
  const programmingLanguages = [
    "C",
    "C++17",
    "C#",
    "Go",
    "Haskell",
    "Java 8",
    "Perl",
    "PHP",
    "Python 2",
    "Python 3",
    "R",
    "Racket",
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center mb-16">
            Contest Details
          </h1>

          {/* Why Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Participate?</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Have Fun!</li>
              <li>Practice programming skills!</li>
              <li>Make new friends!</li>
            </ul>
          </div>

          {/* Who Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Can Participate?</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-4">
              <li>Teams of three students each in grades 9-12. If you would like help finding teammates, please contact us.</li>
              <li>
                Participants should know basic programming, including reading from standard input and writing to standard out.
              </li>
              <li>
                Two competition brackets (with different programming challenges):
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <span className="font-semibold">Novice programmers:</span> teams composed of students with one or fewer semesters/quarters of programming classes.
                  </li>
                  <li>
                    <span className="font-semibold">Experienced programmers:</span> teams that have more experience with programming
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* When & Where Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Date & Time</h3>
                <p className="text-gray-600">Saturday, March 15th, 2025, from 1:30pm − 4:30pm (Eastern)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">MSU Engineering Building (exact rooms to be determined)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Registration Deadline</h3>
                <p className="text-gray-600">March 3rd, 2025</p>
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported Programming Languages</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {programmingLanguages.map((lang) => (
                <div key={lang} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-gray-900">{lang}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-600">
              If your preferred language is not listed, let us know! For more information about the programming environment
              (versions, libraries, etc.), see{" "}
              <a
                href="https://www.hackerrank.com/environment/languages"
                className="text-green-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                HackerRank
              </a>
              .
            </p>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Permitted Resources</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Your teammates!</li>
              <li>Any books, notes, websites, documentation, StackOverflow, code samples...</li>
              <li>Basically anything that does not involve asking someone outside your team for help.</li>
              <li className="text-red-600">
                Please note that generative AI (e.g. GitHub Copilot, ChatGPT, Bard) are not permitted to be used during the contest.
              </li>
            </ul>
          </div>

          {/* Required Forms */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Forms</h2>
            <p className="text-gray-600 mb-4">
              Every participant must submit the following forms:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>A Team Registration Form for each team (filled out by the coach)</li>
              <li>An Individual Registration Form for each contestant (filled out by the student)</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}