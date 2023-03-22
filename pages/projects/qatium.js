import { useEffect, useContext } from "react";

import Image from "next/image";
import Head from "next/head";
import gsap from "gsap";
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import qatiumCoverHero from "../../public/assets/qatium-cover-hero.png";
import qatiumCoverBackground from "../../public/assets/qatium-cover-background.jpg";
import qatiumIllustration1 from "../../public/assets/qatium-illustration-1.png";
import qatiumIllustration2 from "../../public/assets/qatium-illustration-2.png";
import qatiumMockup1 from "../../public/assets/qatium-mockup-1.png";
import qatiumMockup2 from "../../public/assets/qatium-mockup-2.png";
import qatiumMockup3 from "../../public/assets/qatium-mockup-3.png";
import qatiumDsTokens from "../../public/assets/qatium-ds-tokens.png";
import qatiumDsComponents from "../../public/assets/qatium-ds-components.png";
import qatiumDsComponents1 from "../../public/assets/qatium-ds-components-1.png";
import qatiumDsComponents2 from "../../public/assets/qatium-ds-components-2.png";
import qatiumDsComponents3 from "../../public/assets/qatium-ds-components-3.png";
import qatiumDsComponents4 from "../../public/assets/qatium-ds-components-4.png";
import qatiumRoadmap from "../../public/assets/qatium-roadmap.png";
import goaiguaCoverBackground from "../../public/assets/goaigua-cover-background.jpg";



export default function Qatium(props) {
  useEffect(() => {    
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);


  const animateUI = () => {
    // Reveal objects on scroll
    gsap.utils.toArray(".reveal").forEach((elem) => {
      gsap.from(elem, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top 75%",
          end: "top top",
          scrub: false,
          markers: false,
          toeggleActions: "play pause resume pause",
        },
      });
    });
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/qatium-cover-hero.png" as="image" />
        <link rel="preload" href="/assets/qatium-cover-background.jpg" as="image" />
        <link rel="preload" href="/assets/qatium-illustration-1.png" as="image" />
        <link rel="preload" href="/assets/qatium-illustration-2.png" as="image" />
        <link rel="preload" href="/assets/qatium-mockup-1.png" as="image" />
        <link rel="preload" href="/assets/qatium-mockup-2.png" as="image" />
        <link rel="preload" href="/assets/qatium-mockup-3.png" as="image" />
        <link rel="preload" href="/assets/qatium-ds-tokens.png" as="image" />
        <link rel="preload" href="/assets/qatium-ds-components.png" as="image" />
        <link rel="preload" href="/assets/qatium-roadmap.png" as="image" />
      </Head>
      <div id="smooth-content" className={`mb-48 `}>
        <ProjectCover
          title="Product Design"
          subtitle="Qatium"
          role="Head of design"
          client="Qatium"
          heroImage={qatiumCoverHero}
          backgroundImage={qatiumCoverBackground}
          url="www.qatium.com"
        />
        <ProjectBlock
          type={1}
          backgroundColor="#3C3B59"
          images={[qatiumIllustration1]}
          texts={[
            "The product",
            "Qatium is disruptive water management system which breaks the traditional workflows and ways to work in the industry. It democratises the access to that service to any kind of city, govern or management company no matter the data, knowledge or budget they have.",
            "Its AI model, and ways to infer and ingest relevant data throughout different geospatial resources filling that gap and unleashing the potential of serve better water quality service to the citizens, save water leaks extra costs and be ready to solve the inevitable water scarcity.",
          ]}
        />
        <ProjectBlock
          pushTop
          type={3}
          backgroundColor="#22222E"
          images={[qatiumIllustration2]}
          texts={[
            "Startup mindset",
            "From creating different probe of concepts and MVPs either making designs or coding experiences being the first and unique Product Designer at the company to consolidating and leading a small product design team compound by UX Researchers, Product Designers and Frontend UI. Driving branding and product market fit definition and service design using Design Thinking, UX Lean and Agile methodologies.",
          ]}
        />
        <ProjectBlock
          pushTop
          type={2}
          backgroundColor="#22222E"
          images={[qatiumMockup1]}
        />
        <ProjectBlock
          type={4}
          backgroundColor="#22222E"
          texts={[
            "In context data visualisation",
            "Advanced and very experiential data visualisation design using interactive maps, charts, GIS Data in maps and KPI's dashboards all in context.",
          ]}
        />
        <ProjectBlock
          type={2}
          backgroundColor="#22222E"
          images={[qatiumMockup2]}
        />
        <ProjectBlock
          pushBottom
          type={2}
          backgroundColor="#22222E"
          images={[qatiumMockup3]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          offsetLeft
          type={5}
          backgroundColor="#3C3B59"
          images={[qatiumDsTokens]}
          texts={[
            "Qube Design System ",
            "Definition and implementation of the Design System for design and dev teams managing documentation, design tokens, components, assets, layouts and typography. ",
          ]}
        />
        {/* <ProjectBlock
          type={2}
          backgroundColor="#22222E"
          images={[qatiumDsComponents]}
        /> */}
        <ProjectBlock
          type={6}
          backgroundColor="#22222E"
          images={[qatiumDsComponents1,qatiumDsComponents2,qatiumDsComponents3,qatiumDsComponents4]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          reverse
          type={3}
          backgroundColor="#3C3B59"
          images={[qatiumRoadmap]}
          texts={[
            "Public roadmap",
            "Public and collaborative product roadmap based on users and partners requests and company suggestions where users can vote and be part of it.",
          ]}
        />
      </div>
      <ProjectFooter
        {...props}
        idProject="3"
        backgroundColor="#22222E"
        backgroundImage={goaiguaCoverBackground}
        title="GoAigua"
        url="goaigua"
      />
    </>
  );
}
