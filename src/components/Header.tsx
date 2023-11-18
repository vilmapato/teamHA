// @ts-nocheck
import React, {useState, useEffect, useContext, useCallback} from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {createWeb3Modal, defaultConfig} from '@web3modal/ethers5/react'
import {projectId, mainnet, metadata} from '../meta'

createWeb3Modal({
    ethersConfig: defaultConfig({metadata}),
    chains: [mainnet],
    projectId
})

const Header = () => {

    return (
        <header className="sticky top-0 z-40 scrolled-header py-2 bg-black text-white">
            <div className="py-4 flex items-center justify-between mx-12">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            width={36}
                            height={36}
                            src="/superlancers.png"
                            className="w-20 md:w-15"
                            alt="logo"
                        />
                        {/* <p className="text-2xl font-bold ml-2 text-gradient z-10">
              SuperLancers
            </p> */}
                    </div>
                </Link>

                <div className="flex items-center">
                    {" "}
                    {/* Added "items-center" class */}
                    <Link href="/">
                        <div className="items-center" style={{height: "40px"}}>
                            <p className="text-xl font-bold ml-2 nav-text pr-2 z-10">
                                Home
                            </p>
                        </div>
                    </Link>
                    <Link href="/projects">
                        <div className="items-center" style={{height: "40px"}}>
                            <p className="text-xl font-bold ml-2 nav-text pr-2 z-10">
                                Projects
                            </p>
                        </div>
                    </Link>
                    <Link href="/dashboard">
                        <div className="items-center" style={{height: "40px"}}>
                            <p className="text-xl font-bold ml-2 nav-text pr-2 z-10">
                                Dashboard
                            </p>
                        </div>
                    </Link>
                    <Link href="/profile">
                        <div className="items-center" style={{height: "40px"}}>
                            <p className="text-xl font-bold ml-2 nav-text pr-2 z-10">
                                Profile
                            </p>
                        </div>
                    </Link>
                    <div className="items-center">
                        <w3m-button />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default dynamic(() => Promise.resolve(Header), {ssr: false});