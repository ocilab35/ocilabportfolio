import React, { useEffect } from "react";
import "./Education.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Education() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="education-section" id="education">
      <h1 className="education-heading">Why OCI Lab?</h1>

      {/* Flex container that changes direction based on screen size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="education-card-container w-full h-auto md:h-[350px] p-4 mt-3 rounded" 
          style={{backgroundColor: 'rgba(0, 0, 255, 0.295)'}}  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h1 className="text-xl font-bold">Committed to quality excellence</h1>
          <p>
            adheres to various quality standards. To ensure its offerings are compliant to various international quality standards, OCI meticulously stipulations issued by quality ensuring authorities. The company successfully achieved both SOC 2 Type 1 and SOC 2 Type 2 compliance, demonstrating the company’s continued dedication to safeguarding the data of its clients and their customers.
          </p>
        </div>

        <div className="education-card-container w-full h-auto md:h-[350px] p-4 mt-3 rounded" 
          style={{backgroundColor: 'rgba(222, 184, 135, 0.445)'}}  data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h1 className="text-xl font-bold">Pioneers in the industry</h1>
          <p>
            We are proud to be the first to introduce a full suite of mobile-based digital transformation solutions for the global asset finance and leasing industry (formerly NFS Digital). OCI also pioneered the world's first marketplace of API-first products for the global credit, finance, and leasing industry (formerly Appex Now).
          </p>
        </div>

        <div className="education-card-container w-full h-auto md:h-[350px] p-4 mt-3 rounded" 
          style={{backgroundColor: 'rgba(0, 238, 255, 0.514)'}} data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h1 className="text-xl font-bold">Ensured service levels</h1>
          <p>
            We have received various awards and recognition for the quality of our solutions and services over the years.
          </p>
        </div>

        <div className="education-card-container w-full h-auto md:h-[350px] p-4 mt-3 rounded" 
          style={{backgroundColor: 'rgba(238, 130, 238, 0.678)'}} data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h1 className="text-xl font-bold">Harnessing the power of AI</h1>
          <p>
            Today, we stand proud as leaders in the realm of AI-powered innovation, reshaping the financial services landscape. From risk assessment to customer engagement, our AI solutions empower our partners to stay ahead in an ever-evolving industry. We now cater to a diverse range of other sectors as well.
          </p>
        </div>
      </div>
    </div>
  );
}
