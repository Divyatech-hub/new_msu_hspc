import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Teresa VanderSloot",
      image: "/Teresa.jpg",
      width: 300,
      height: 300,
    },
    {
      name: "Dr. Laura Dillon",
      image: "/Laura.jpg",
      width: 300,
      height: 300,
    },
    {
      name: "Dr. Joshua Nahum",
      image: "/Josh.jpg",
      width: 300,
      height: 300,
    },
    {
      name: "Divyalakshmi Varadha Rajan Prem Sudha",
      image: "/Divya.png",
      width: 300,
      height: 300,
    },
    {
      name: "Lia Kim",
      image: "/Lia_Kim.jpg",
      width: 300,
      height: 300,
    },
    {
      name: "Sania Sinha",
      image: "/Sania_Sinha.jpg",
      width: 300,
      height: 300,
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Video Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About the Contest
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Watch our introduction video to learn more about the contest!
          </p>
          <div className="mt-8 aspect-video w-full">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/YQP8njz-RPo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Team Members */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={member.width}
                    height={member.height}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}