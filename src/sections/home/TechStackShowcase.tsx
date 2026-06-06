import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/animations/variants";
import DomeGallery from "@/components/ui/DomeGallery";

import androidStudio from "@/assets/images/Android Studio.png";
import aws from "@/assets/images/AWS.png";
import bootstrap from "@/assets/images/Bootstrap.png";
import cakephp from "@/assets/images/CakePHP.png";
import docker from "@/assets/images/Docker.png";
import flutter from "@/assets/images/Flutter.png";
import git from "@/assets/images/Git.png";
import github from "@/assets/images/GitHub.png";
import graphql from "@/assets/images/GraphQL.png";
import html5 from "@/assets/images/HTML5.png";
import javascript from "@/assets/images/JavaScript.png";
import jenkins from "@/assets/images/Jenkins.png";
import json from "@/assets/images/JSON.png";
import laravel from "@/assets/images/Laravel.png";
import mysql from "@/assets/images/MySQL.png";
import nestjs from "@/assets/images/Nest.js.png";
import nodejs from "@/assets/images/Node.js.png";
import npm from "@/assets/images/NPM.png";
import php from "@/assets/images/PHP.png";
import python from "@/assets/images/Python.png";
import react from "@/assets/images/React.png";
import redis from "@/assets/images/Redis.png";
import redux from "@/assets/images/Redux.png";
import spring from "@/assets/images/Spring.png";
import typescript from "@/assets/images/TypeScript.png";
import vuejs from "@/assets/images/Vue.js.png";

const TECH_GALLERY_IMAGES = [
  { src: androidStudio, alt: "Android Studio" },
  { src: aws, alt: "AWS" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: cakephp, alt: "CakePHP" },
  { src: docker, alt: "Docker" },
  { src: flutter, alt: "Flutter" },
  { src: git, alt: "Git" },
  { src: github, alt: "GitHub" },
  { src: graphql, alt: "GraphQL" },
  { src: html5, alt: "HTML5" },
  { src: javascript, alt: "JavaScript" },
  { src: jenkins, alt: "Jenkins" },
  { src: json, alt: "JSON" },
  { src: laravel, alt: "Laravel" },
  { src: mysql, alt: "MySQL" },
  { src: nestjs, alt: "Nest.js" },
  { src: nodejs, alt: "Node.js" },
  { src: npm, alt: "NPM" },
  { src: php, alt: "PHP" },
  { src: python, alt: "Python" },
  { src: react, alt: "React" },
  { src: redis, alt: "Redis" },
  { src: redux, alt: "Redux" },
  { src: spring, alt: "Spring" },
  { src: typescript, alt: "TypeScript" },
  { src: vuejs, alt: "Vue.js" },
];

export function TechStackShowcase() {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Tech we love"
          title="A vibrant dome of the stack we ship with."
          subtitle="Every icon is the real brand mark — drag the dome to explore the full stack."
        />
        <motion.div
          variants={stagger(0.02)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14"
        >
          <motion.div
            variants={fadeUp}
            className="relative mx-auto h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-3 sm:h-[36rem] lg:h-[48rem]"
          >
            <DomeGallery
              images={TECH_GALLERY_IMAGES}
              fit={0.8}
              minRadius={600}
              maxVerticalRotationDeg={0}
              segments={34}
              dragDampening={2}
              grayscale={false}
              overlayBlurColor="#09090B"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
