export default function RegistrationPage() {
  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center mb-16">
            Registration
          </h1>

          <div className="space-y-16">
            {/* Team Registration */}
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Team Registration (Part 1 of 2)
              </h2>
              <p className="text-gray-600 mb-6">
                The team coach should complete this form to register the team.
              </p>
              <a
                href="https://forms.gle/59n84MPom4H4dhSp9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                Team Registration Form
              </a>
            </div>

            {/* Individual Registration */}
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Individual Registration (Part 2 of 2)
              </h2>
              <p className="text-gray-600 mb-6">
                Each team member must complete this form individually.
              </p>
              <a
                href="https://forms.gle/nHkD8qsKZpMpsJD37"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                Individual Registration Form
              </a>
            </div>

            {/* Non-discrimination Statement */}
            <div className="text-center text-sm text-gray-500 mt-8">
              <p>
                In achieving its goals, the Broadening Participation and Women in Engineering K12 program
                does not unlawfully discriminate. All events and programs are open to students of all
                races and genders.
              </p>
            </div>

            {/* Required Forms Packet */}
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Required Forms Packet
              </h2>
              <p className="text-gray-600 mb-6">
                Please review and complete the required high school programming
                forms packet before the event.
              </p>
              <a
                href="/HS_Programming_Required_forms.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                Open Required Forms (PDF)
              </a>

              <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-gray-200">
                <iframe
                  src="/HS_Programming_Required_forms.pdf"
                  title="HS Programming Required Forms"
                  className="w-full h-[700px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
