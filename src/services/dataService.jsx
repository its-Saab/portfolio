
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
                  resumeLink:"https://drive.google.com/file/d/1bOr1kcqmQwdUhzlmkK_RFInL8OyG1b4N/view?usp=sharing",
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
                          description:"Landing page is an react application to help solve the immigrants integration problem ",
                          myRole: "Frontend developer",
                          techStack:"JavaScript, PostgreSQL, React, Java",
                          repo:"https://github.com/its-Saab/LandingPage"
                      },
                      {
                          title:"TODOLY",
                          description:"ToDoLy is a Todo list Java application via the command-line. I developed this todo List to help me with my daily tasks",
                          myRole: "",
                          techStack: "Java,Gradle",
                          repo:"https://github.com/its-Saab/TODO-List"
                      },
                      {
                          title:"My Portfolio Site",
                          description:"Portfolio using React95 library",
                          techStack: "React",
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
                          progress: 80
                      },
                      {
                          name: "Java",
                          progress: 70
                      },
                      {
                          name: "React",
                          progress: 80
                      },
                      {
                          name: "Node.js",
                          progress: 70
                      },

                      {
                          name: "Git",
                          progress: 80
                      },
                      {
                          name: "MongoDB",
                          progress: 80
                      },
                      {
                          name: "GraphQL/Apollo Client",
                          progress: 60
                      },
                      {
                          name: "Next.js",
                          progress: 70
                      }
                  ],
                  soft: "Analytical thinking, Teamwork, Creative Problem solving, Mangement"
              }
          },
          {
              id: 'contact',
              name: 'Contact.txt',
              image: require('../assets/contact.ico'),
              content: {
                  emailText: "If you have a position to offer or invite to a project, just email me on ",
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
                      },
                      {
                          name: "FaInstagram",
                          link: "https://www.instagram.com/_mosabbas"
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
