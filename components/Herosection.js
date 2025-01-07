import React, {useEffect, useState} from "react";
import Image from "next/image";
import AvatarImage from "/public/static/senpaiavi1.png";
import {useTheme} from "next-themes";

export const Herosection = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="container px-6 md:px-12 max-w-4xl mx-auto h-screen flex items-center">
            <div className="space-y-6">
                <h5 className="text-sm font-mono text-yellow-400">Hi, my name is</h5>
                <div className="space-y-2">
                    <h1 className="text-5xl md:text-7xl font-bold">Abdullah Chaghtai.</h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-400">
                        Building digital experiences.
                    </h2>
                </div>
                <p className="text-lg max-w-xl text-gray-300">
                    I'm a software engineer focused on building exceptional digital experiences. 
                    Currently, I'm working on healthcare solutions at NextGen Healthcare.
                </p>
                <div className="pt-4">
                    <a 
                        href="/Abdullah-Chaghtai.pdf" 
                        target="_blank" 
                        className="inline-block px-8 py-3 border-2 border-yellow-400 
                                 text-yellow-400 hover:bg-yellow-400/10 transition-colors
                                 rounded"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
