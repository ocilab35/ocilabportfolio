/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "OCI LAB",
  title: "Welcome to OCI Lab",
  subTitle: emoji(
    "OCILAB having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AGuLG7dbUgLdOoUrARSyKtHESWDIL35b/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ocilab35/",
  linkedin: "https://www.linkedin.com/feed/",
  instagram: "https://www.instagram.com/oci.lab/profilecard/?igsh=MW1lY3R4aXd1Y3F5ZQ==",
  gmail: "ocilab35@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61567947801260&mibextid=ZbWKwL",
  youtube: "https://www.youtube.com/@ocilab",
  display: true 
};
// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "OCI FULL STACK DEVELOPER TEAM WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    }
    ,
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
,
{
  skillName: "Jenkins",
  fontAwesomeClassname: "fab fa-jenkins"
}
,
{
  skillName: "AWS",
  fontAwesomeClassname: "fab fa-aws"
}
,



{
  skillName: "Illustrator",
  fontAwesomeClassname: "fa-solid fa-bezier-curve"
},
{
  skillName: "WordPress",
  fontAwesomeClassname: "fab fa-wordpress"
},


 
    
  ],
  display: true // Set false to hide this section, defaults to tr
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Committed to quality excellence",
      
      desc: "adheres to various qualityTo ensure its offerings are compliant to various international quality standards, NETSOL meticulously  stipulations issued by quality ensuring authorities. NETSOL received CMMI Level 5 Certification in 2006, the highest internationally recognized quality assurance standard for enhancing and evaluating an organization's software development processes. The company successfully achieved both SOC 2 Type 1 and SOC 2 Type 2 compliance, demonstrating the company? s continued dedication to safeguarding the data of its clients and their customers.",
     
    }

  ]
};
const educationInfos = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ensured service levels",
      
      desc: "We have received various awards and recognition for the quality of our solutions and services over the years.",
     
    }

  ]
};
const educationInformation = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pioneers in the industry",
      
      desc: "We are proud to be the first to introduce a full suite of mobile-based digital transformation solutions for the global asset finance and leasing industry (formerly NFS Digital). NETSOL also pioneered the worlds first marketplace of API-first products for the global credit, finance, and leasing industry (formerly Appex Now)."
     
    }
  ]
};
const educationInformations = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harnessing the power of AI",
      
      desc: "In 2019, NETSOL embarked on a groundbreaking journey, establishing its AI division with the vision to utilize the power of AI to revolutionize how institutions navigate the complexities of the modern market. Today, we stand proud as leaders in the realm of AI-powered innovation, reshaping the financial services landscape. From risk assessment to customer engagement, our AI solutions empower our partners to stay ahead in an ever-evolving industry. We now cater to a diverse range of other sectors as well."
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web/App", //Insert stack or technology you have experience in
      progressPercentage: "96%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "96%"
    },
    {
      Stack: "Graphic Design ",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      company: "App Development",
      companylogo: require("./assets/images/appp.png"),
      desc: "Over the past 2 years, we have been committed to delivering high-quality services in app development. Our dedicated team has successfully completed numerous projects, helping businesses grow through innovative solutions and visually appealing designs.",
      descBullets: [
        " We create user-friendly and scalable mobile applications tailored to meet the specific needs of clients across various industries, ensuring seamless performance and intuitive interfaces."
      ]
    },
    {
      company: "Web Development",
      companylogo: require("./assets/images/web.png"),
      desc: "Over the past 2 years, we have been committed to delivering high-quality services in  web development . Our dedicated team has successfully completed numerous projects, helping businesses grow through innovative solutions and visually appealing designs",
      descBullets: [
        "We design and develop responsive websites that offer a great user experience. Our focus is on creating robust, secure, and SEO-friendly websites that drive traffic and boost conversions"
       
      ]
    },
    {
      company: "DevOps Engineer",
      companylogo: require("./assets/images/devops.png"),
      desc: "Over the past 2 years, we have been committed to delivering high-quality services in DevOps Engineering. Our dedicated team has successfully completed numerous projects, helping businesses grow through automated workflows, infrastructure optimization, and scalable solutions that enhance operational efficiency."
      ,descBullets: [
        "From automating workflows to managing scalable infrastructure, we deliver solutions that streamline development processes. Our DevOps practices align with the team's goals, ensuring efficiency, reliability, and seamless integration across all environments."
      ]
      
    }
  ]
  
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/iac.png"),
      projectName: "IAC University",
      projectDesc: "The Institute for Art and Culture (IAC) is a university in Pakistan focused on promoting creativity in art, design, and culture, providing students with diverse academic programs to nurture talent and innovation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nomirajpoot1.github.io/IAC-Website/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/stan.png"),
      projectName: "Stanford University",
      projectDesc: "Stanford University is a top-tier research institution in the U.S., known for innovation and academic excellence, particularly in technology and business, with strong ties to Silicon Valley.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nomirajpoot1.github.io/Standford-website/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  

  achievementsCards: [
    {
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
       
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1ChLT6oHK1NVP4Ty46WIAEsHM0AUVevGD/view?usp=sharing"
        },
      
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  // subtitle: emoji(
  //   "We are passionate about our work, always striving for excellence, and value feedback as a key driver for continuous improvement and innovation."
  // ),

  talks: [
    {
      title: "OCI Enhances Experiences",
      subtitle: "OCI Lab 2022",
      slides_url: "https://gamma.app/docs/OCI-LAB-Powering-Innovation-Through-Diverse-Expertise-vda4yop20cyjxaa?mode=present#card-xxcftm68n6t9eyp",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Us "),
  subtitle:
    "Discuss a project or just want to say hi? Our Inbox is open for all.",
  number: "+92-3426714349",
  email_address: "ocilab35@gmail.com "
};

// Twitter Section



const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection,
  educationInformation,
  educationInformations,
  educationInfos
};
