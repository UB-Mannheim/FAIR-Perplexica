'use client';

import { Info } from 'lucide-react';
 
const AboutPage = () => {
    return (
      <div className="min-h-screen">
        {/* Fixed Navbar */}
        <div className="fixed z-40 top-0 left-0 right-0 lg:pl-[104px] lg:pr-6 lg:px-8 px-4 py-4 lg:py-6 border-b border-light-200 dark:border-dark-200 dark:bg-dark-secondary">
          <div className="flex flex-row items-center space-x-2 max-w-screen-lg lg:mx-auto">
            <Info />
            <h2 className="text-black dark:text-white lg:text-3xl lg:font-medium">
              About
            </h2>
          </div>
        </div>
  
        {/* Main Content */}
        <main className="pt-20 lg:pt-28 px-4 lg:px-8">
          <div className="max-w-screen-lg mx-auto">
            <p className="text-black/70 dark:text-white/70 text-lg md:text-lg">
              FAIR-Perplexica is an academic search engine designed to answer questions about <b>research data management (RDM)</b>.<br /><br />
              It is provided and maintained by <a href="https://www.bib.uni-mannheim.de/en/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white lg:text-lg font-medium truncate transition duration-200 hover:text-[#24A0ED] dark:hover:text-[#24A0ED] cursor-pointer">University Library Mannheim</a> and based on <a href="https://github.com/ItzCrazyKns/Perplexica" target='_blank' rel="noopener noreferrer" className="text-black dark:text-white lg:text-lg font-medium truncate transition duration-200 hover:text-[#24A0ED] dark:hover:text-[#24A0ED] cursor-pointer">Perplexica</a>.<br /><br />
            </p>
          </div>
        </main>
      </div>
    );
  };
  
  export default AboutPage;


