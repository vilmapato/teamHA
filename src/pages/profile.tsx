import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Header from "../components/Header";

const UserProfile: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <main className="container mx-auto p-4">
        <section className="text-center my-10">
          <div className="avatar-container mb-4">
            <Image
              src="/avatar.png" // Replace with the path to your avatar image
              alt="User Avatar"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h2 className="text-4xl font-bold mb-2">Josh</h2>
          <p className="text-xl mb-6">Community Builder</p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Cursus dictumst nec ac ac
            tellus placerat viverra. Pellentesque varius tortor nulla
            consectetur. Adipiscing a sit nibh ante. Feugiat porttitor
            scelerisque bibendum tincidunt semper.
          </p>
          <Button>VIEW AVAILABILITY</Button>
        </section>

        <section className="my-10">
          <h3 className="text-2xl font-bold mb-4">Top Skills</h3>
          {/* Skill bars and other skills go here */}
        </section>

        <section className="my-10">
          <p className="text-xl">You have no stats yet.</p>
          <p>Go to the Quest Board and start applying for quests!</p>
          <Button>
          Go to Quest Board
          </Button>
        </section>

        <footer className="text-center py-10">
          <p>SuperLancersAI</p>
          <p>A freelancer network built on trust and verifiable credentials</p>
          {/* Social icons go here */}
          <p>&copy; 2023 CredLancers, All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default UserProfile;
