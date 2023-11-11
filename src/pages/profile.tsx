import React from "react";
import Image from "next/image";
import Button from "../components/Button"; // Ensure this is the correct path to your Button component
import Header from "../components/Header"; // Ensure this is the correct path to your Header component
import Box from "../components/Box"; // Ensure this is the correct path to your Box component

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <main className="container mx-auto p-4">
        <section className="text-center my-10">
          <div className="inline-block relative p-4 rounded-full mb-4">
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h2 className="text-4xl font-bold mb-2">
            Josh{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h2>
          <h3 className="text-xl font-semibold mb-6">Community Builder</h3>
          <p className="mb-4 px-4">
            Lorem ipsum dolor sit amet consectetur. Cursus dictumst nec ac ac
            tellus placerat viverra. Pellentesque varius tortor nulla
            consectetur. Adipiscing a sit nibh ante. Feugiat porttitor
            scelerisque bibendum tincidunt semper.
          </p>
          <Button onClick={() => {}}>VIEW AVAILABILITY</Button>
        </section>

        <section className="flex flex-wrap justify-center items-center my-10 gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-left">Top Skills</h3>
            <div className="space-y-2">
              <div className="text-left">
                <p className="font-semibold">Discord Management</p>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold">Growth Hacking</p>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold">Communication</p>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-left">Other Skills</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                "Communicating",
                "Content",
                "Coordination",
                "Growth",
                "Hosting",
                "Team Management",
                "Project Management",
                "Product Design",
              ].map((skill) => (
                <Box
                  key={skill}
                  className="border border-gray-500 p-2 rounded text-center"
                >
                  <p className="font-semibold">{skill}</p>
                </Box>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center my-10">
          <p className="text-xl mb-2">You have no stats yet.</p>
          <p className="mb-4">
            Go to the Quest Board and start applying for quests!
          </p>
          <Button onClick={() => {}}>Go to Quest Board</Button>
        </section>

        <footer className="flex flex-col items-center justify-between py-10">
          <div className="text-center mb-6">
            <p>SuperLancersAI</p>
            <p>
              A freelancer network built on trust and verifiable credentials
            </p>
          </div>
          <div className="mb-6">
            <Image
              src="/socials.png"
              alt="Social Links"
              width={120}
              height={40}
            />
          </div>
          <p>&copy; 2023 CredLancers, All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default ProfilePage;
