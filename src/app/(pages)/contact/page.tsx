export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-base font-semibold text-gray-900 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Location
                    </dt>
                    <dd className="mt-1 text-gray-600 pl-7">East Lansing, MI</dd>
                  </div>
                  <div>
                    <dt className="text-base font-semibold text-gray-900 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Phone
                    </dt>
                    <dd className="mt-1 text-gray-600 pl-7">517-432-1273</dd>
                  </div>
                  <div>
                    <dt className="text-base font-semibold text-gray-900 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email
                    </dt>
                    <dd className="mt-1 text-gray-600 pl-7">
                      <a href="mailto:msu-bp-ambassadors@egr.msu.edu" className="hover:text-green-700">
                        msu-bp-ambassadors@egr.msu.edu
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Map or Additional Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Additional Information
                </h3>
                <p className="text-gray-600">
                  For questions about team formation, registration, or any other inquiries, please don&apos;t hesitate to reach out to us. We&apos;re here to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}