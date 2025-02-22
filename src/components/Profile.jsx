import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import profile from "../assets/my-avatar.png";
import "./Hero.css";

const roles = ["Frontend Developer", "Software Engineer"];
const skills = [
  { name: "Web Development", level: 90 },
  { name: "HTML / CSS", level: 85 },
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "React Js", level: 70 },
  { name: "Angular Js", level: 70 },
  { name: "Java", level: 60 },
  { name: "Node Js", level: 60 },
];

const Profile = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole];
      setDisplayedText((prev) => (isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)));

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const contactUs = () => {
  //     navigate("/contact");
  //   };

  const viewProjects = () => {
    navigate("/projects");
  };

  return (
    <section className="p-8 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-black dark:text-white min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          className="text-6xl font-extrabold text-center mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome, I'm <span className="text-blue-500">Shubham Verma</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl text-center mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A Passionate <span className="text-blue-500 border-b-2 border-blue-500">{displayedText}</span>
        </motion.p>
        {/* <motion.button
          onClick={contactUs}
          className="mt-6 px-8 py-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button> */}
      </div>

      <div className="container mx-auto px-6 lg:px-20 mt-12">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={profile} alt="Profile" className="w-64 h-64 lg:w-80 lg:h-80 object-cover" />
          </motion.div>

          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-800 dark:text-white">About Me</h2> */}
            <p className="mt-6 text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              I’m <span className="text-blue-500 font-semibold">Shubham Verma</span>, a{" "}
              <span className="text-blue-500 font-semibold">Front-End Developer</span> with{" "}
              <span className="text-blue-500 font-semibold">2.5 years</span> of experience in crafting scalable and user-friendly web
              applications. Proficient in <span className="text-blue-500 font-semibold">JavaScript, ReactJS, AngularJS, TypeScript,</span>{" "}
              and <span className="text-blue-500 font-semibold">Java</span>, I specialize in building dynamic, visually appealing, and
              accessible solutions.
            </p>
            <p className="mt-4 text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              I am passionate about solving complex problems and delivering polished, impactful projects. Currently, I’m expanding into{" "}
              <span className="text-blue-500 font-semibold">mobile development</span>, aiming to create seamless cross-platform
              applications.
            </p>

            <motion.a
              onClick={viewProjects}
              className="mt-6 inline-block bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>

        <div className=" max-w-6xl mx-auto  p-3 mt-6">
          {/* <h3 className=" text-3xl font-bold mb-4 text-center text-black dark:text-white">My Skills</h3> */}
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-lg font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
