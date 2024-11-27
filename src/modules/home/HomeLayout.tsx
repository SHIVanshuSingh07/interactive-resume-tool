import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion, useAnimation } from 'framer-motion';

import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import Person from './components/Person';

const HomeLayout = () => {
  const controls = useAnimation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div initial="initial" animate="animate" className="scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-20 h-16 w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white flex items-center px-6 md:px-16 shadow-lg">
        <Link href="/">
          <Image
            src="/icons/resume-icon.png"
            alt="logo"
            height="36"
            width="36"
            className="cursor-pointer"
          />
        </Link>
        <div className="ml-auto flex items-center space-x-6">
          <Link href="/builder" passHref>
            <StyledButton variant="text" className="hover:text-yellow-300">
              Editor
            </StyledButton>
          </Link>
          <Link href="#about-us" passHref>
            <StyledButton variant="text" className="hover:text-yellow-300">
              About Us
            </StyledButton>
          </Link>
          <a
            href="https://github.com/SHIVanshuSingh07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
          >
            <BsGithub className="h-6 w-6" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-100 via-white to-pink-100 text-gray-800 py-16">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-6 md:px-16">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-purple-700"
              {...fadeInUp}
            >
              Build Your Resume, <br />
              Effortlessly & Beautifully
            </motion.h1>
            <motion.p className="text-lg md:text-xl mb-8 text-gray-600" {...fadeInUp}>
              Start crafting your unique story with our intuitive and powerful tools designed for
              all.
            </motion.p>
            <Link href="/builder" passHref>
              <Button
                variant="contained"
                className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3"
              >
                Start Now
              </Button>
            </Link>
          </div>
          <motion.div className="w-full md:w-1/2 flex justify-center" {...fadeInUp}>
            <Image src="/resume.png" alt="Resume illustration" width={400} height={400} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-pink-100 text-gray-800">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureSection />
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section
        id="contribute"
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16"
      >
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
          <p className="mb-8">Join us to build open-source templates and share your ideas!</p>
          <a href="https://github.com/SHIVanshuSingh07" target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3"
            >
              Contribute Now
            </Button>
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-indigo-100 text-gray-800">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">About Us</h2>
          <p className="text-lg text-center mb-8">
            A group of passionate developers and designers building impactful projects and sharing
            knowledge with the community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Person />
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-8">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo and Tagline */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Link href="/" passHref>
                <Image
                  src="/icons/resume-icon.png"
                  alt="Logo"
                  height="50"
                  width="50"
                  className="cursor-pointer"
                />
              </Link>
              <p className="mt-4 text-gray-300">
                Empowering you to build professional resumes effortlessly.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/builder" className="hover:text-yellow-300">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="#about-us" className="hover:text-yellow-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/SHIVanshuSingh07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://www.linkedin.com/in/SHIVanshuSingh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-300"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="https://github.com/SHIVanshuSingh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-300"
                >
                  <BsGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/SHIVanshuSingh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-300"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-500"></div>

          {/* Copyright Section */}
          <div className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} Shivanshu Singh. All rights reserved.
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomeLayout;
