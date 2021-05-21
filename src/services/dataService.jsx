
export default class DataService {
  _data = {
      projectRepo: "https://github.com/its-Saab/portfolio",
      react95Repo: "https://github.com/React95/React95",
      items: [
          {
              id: 'about',
              name: 'About.txt',
              image: require('../assets/about.ico'),
              content: {
                  paragraphs: [
                      "Hi! I am a Software Developer based in Sweden, just finished the Software Development Academy - KTH and I am very excited to start my career in Sweden.",
                      "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development, I think I would be a valuable asset to your project.",
                      "The main technology I have been using is React and I use it for most of my side projects.",
                      "When I am not in front of the computer, I usually workout, enjoy good coffee and take quick walks in the beatiful Swedish nature."
                  ]
              }
          },
          {
              id: 'resume',
              name: 'Resume.txt',
              image: require('../assets/cv.ico'),
              content: {
                  resumeLink:"https://drive.google.com/file/d/1_yu5jqxzyzBIGW5a1NfgD6AkfxS4vwz0/view?usp=sharing",
                  workExperience: [
                      {
                          jobTitle: "Civil Engineer",
                          company: "B.B.",
                          location: "Istanbul - Turkey",
                          period: "Sep 2018 – Jan 2019",
                          accomplishments: [
                              "Steel structures desing",
                              "Reviewed design and calculation to ensure European Standards",

                          ]

                      },
                      {
                          jobTitle: "Civil Engineer",
                          company: "SFC",
                          location: "Jeddah - Saudi Arabia",
                          period: "Nov 2015 – May 2017",
                          accomplishments: [

                          ]

                      }
                      ,
                      {
                          jobTitle: "Civil Engineer",
                          company: "HAACS",
                          location: "Jeddah - Saudi Arabia",
                          period: "Nov 2014 – Nov 2015",
                          accomplishments: [

                          ]

                      }
                  ],
                  education: [
                      {
                          credit: "Software Development Academy",
                          place: "KTH - Sweden",
                          period: "Jan 2021 – Jun 2021"
                      },
                      {
                          credit: "Bachelor in Civil Engineering",
                          place: "AAU - Amman",
                          gpa: "3.2/4.0 GPA",
                          period: "SEPT 2008 – Jun 2014"
                      }
                  ]
              }
          },
          {
              id: "projects",
              name: "Projects.txt",
              image: require('../assets/projects.ico'),
              content: {
                  projects:[
                      {
                          title:"Landing Page",
                          description:"Group chat application dedicated to help immigrants with their integration questions",
                          myRole: "Frontend developer",
                          techStack:"JavaScript, PostgreSQL, React, Java, firebase, webpack",
                          repo:"https://github.com/its-Saab/LandingPage"
                      },
                      {
                          title:"TODOLY",
                          description:"ToDoLy is a command line tool to help users add/monitor daily tasks.",
                          myRole: "",
                          techStack: "Java,Gradle",
                          repo:"https://github.com/its-Saab/TODO-List"
                      },
                      {
                          title:"My Portfolio Site",
                          description:"Portfolio using React95 library",
                          techStack: "JavaScript, React, firebase, webpack",
                          repo: "https://github.com/its-Saab/portfolio",
                      },
                  ]
              }
          },
          {
              id: 'skills',
              name: 'Skills.txt',
              image: require('../assets/skills.ico'),
              content: {
                  hard: [
                      {
                          name: "JavaScript",
                          img:require('../assets/javascript.png')
                      },
                      {
                          name: "Java",
                          img:require('../assets/java.png')
                      },
                      {
                          name: "React",
                          img:require('../assets/react.jpg')
                      },
                      {
                          name: "Node.js",
                          img:require('../assets/node.png')
                      },

                      {
                          name: "Git",
                          img:require('../assets/git.png')
                      },
                      {
                          name: "MongoDB",
                          img:require('../assets/mongodb.png')
                      },
                      {
                          name: "GraphQL/Apollo Client",
                          img:require('../assets/graphQl.png')
                      },
                      {
                          name: "Next.js",
                          img:require('../assets/nextjs.png')
                      }
                  ],
                  soft: "Analytical thinking, Teamwork, Creative Problem solving, Time Mangement"
              }
          },
          {
              id: 'contact',
              name: 'Contact.txt',
              image: require('../assets/contact.ico'),
              content: {
                  emailText: "I'm available for hire, let's have a chat ",
                  email: "musaababs@gmail.com",
                  socialText: "Or you can reach me out through social media:",
                  social: [
                      {
                          name: "FaLinkedin",
                          link: "https://linkedin.com/in/mosaab-abbas"
                      },
                      {
                          name: "FaGithub",
                          link: "https://github.com/its-Saab"
                      }
                  ]
              }
          }
      ]
  }

  getItems() {
      return this._data.items.map(({ id, name, image }) => ({ id, name, image }));
  }

  getItem(id) {
      return this._data.items.find(x => x.id === id);
  }

  getProjectInfo() {
      return {
          projectRepo: this._data.projectRepo,
          react95Repo: this._data.react95Repo
      };
  }
}
