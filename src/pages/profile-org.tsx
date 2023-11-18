import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from "../components/Button";
import BlackBox from "../components/BlackBox";
import PurpleButton from "../components/PurpleButton";


const OrgProfilePage: React.FC = () => {
    const handleViewProjects = () => {
        // Placeholder for view projects logic
    };

    const handleCreateProject = () => {
        // Placeholder for create project logic
    };

    return (
        <Layout>
            <Header/>
            <main className="bg-black text-white min-h-screen">
                {/* Org Description and View Projects Button */}
                <div className="h-1/4 flex items-center p-10" style={{backgroundColor: 'rgba(84, 92, 113, 0.8)'}}>
                    <Image
                        src='/org1.png' // The organization avatar image path
                        alt="Dev DAO Logo"
                        width={200}
                        height={200}
                        className="w-1/5 border-b-2 border-r-2 border-amber-400"
                        style={{backgroundColor: '#000000'}}
                    />
                    <section className="w-1/5 flex flex-col pb-8">
                        <h1 className="text-3xl font-bold mt-2 mx-5">Org Stats</h1>
                        <BlackBox onClick={() => {
                        }} label="Credibility Level" className="mx-5 mt-6 mb-12">
                            <div className="text-center mt-2">
                                <span className="text-xl font-bold">10</span>
                            </div>
                        </BlackBox>
                    </section>
                    <section className="w-1/5 flex flex-col items-stretch gap-5">

                        <BlackBox onClick={() => {
                        }} label="Lancers Hired">
                            <div className="text-center mt-2">
                                <span className="text-xl font-bold">15</span>
                            </div>
                        </BlackBox>
                        <BlackBox onClick={() => {
                        }} label="Total Spent">
                            <div className="text-center mt-2">
                                <span className="text-xl font-bold">36 ETH</span>
                            </div>
                        </BlackBox>
                    </section>

                    {/* Org Stats */}
                    <section className="w-2/5 flex flex-col p-5">
                        <p className="text-xl font-bold">Ratings</p>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-2">
                            <div>
                                <Image
                                    src="/5stars.png"
                                    alt="Clarity of Scope rating"
                                    width={160}
                                    height={32}
                                />
                                <p className="mt-2 font-semibold">Clarity of Scope</p>
                            </div>
                            <div>
                                <Image
                                    src="/4stars.png"
                                    alt="Speed rating"
                                    width={160}
                                    height={32}
                                />
                                <p className="mt-2 font-semibold">Speed</p>
                            </div>
                            <div>
                                <Image
                                    src="/5stars.png"
                                    alt="Communication rating"
                                    width={160}
                                    height={32}
                                />
                                <p className="mt-2 font-semibold">Communication</p>
                            </div>
                            <div>
                                <Image
                                    src="/5stars.png"
                                    alt="Payment rating"
                                    width={160}
                                    height={32}
                                />
                                <p className="mt-2 font-semibold">Payment</p>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="text-left text-black h-1/4 px-10 pb-10"
                         style={{backgroundColor: 'rgba(84, 92, 113, 0.8)'}}>
                    <h1 className="text-4xl font-bold py-4">Dev DAO 💜</h1>
                    <p className="mb-6 font-light">
                        A DAO for Builders
                        Build web3 with friends.<br/>
                        Developer DAO is a community of thousands
                        of web3 builders creating a better<br/> internet.
                        Join us and create the future.
                    </p>
                    <Link href="/projects" passHref>
                        <Button onClick={handleViewProjects}>VIEW PROJECTS</Button>
                    </Link>
                </section>


                {/* Ratings */}


                {/* Call to Action */}
                <section className="text-center my-10">
                    <h2 className="text-3xl mb-6">You have no stats yet.</h2>
                    <p className="mb-4">
                        Go to your Dashboard and start posting projects for your community!
                    </p>
                    <Link href="/create-project" passHref>
                        <PurpleButton onClick={handleCreateProject}>
                            Create Project
                        </PurpleButton>
                    </Link>
                </section>

                {/* Members Section */}
                {/* Add your members section here */}

                {/* Footer */}
                <footer className="py-10">{/* Add your footer here */}</footer>
            </main>
        </Layout>
    );
};

export default OrgProfilePage;
