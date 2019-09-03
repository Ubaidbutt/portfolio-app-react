import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';

const PROJECTS = [
    {
       title: 'E-voting Android Application',
       description: `This app helps automate the process of voting for the departmental society.
                      Having a login-signup functionality, allowing students
                      nominate candidates and vote. The app also provided an
                      andmin portal to manage things.`,
       image: Project1,
       id: 1
    },
    {
        title: 'Disease Classifier',
        description: `This is a machine learning based solution that classify diseases based on the raw text.
                        It was built using Python with NLTK and SKLearn. Deployed
                        as a web service on Azure and consumed in Dynamics 365.`,
        image: Project2,
        id: 2
     },
     {
        title: 'Server Health Checker Application',
        description: `This application monitored the health of hosted server on a machine and generated notifications.
                      The app ran 24/7 as a daemon process to monitor the resource usage of different processes
                      and triggered email and phone events based on certain conditions.`,
        image: Project3,
        id: 3
     }
]

export default PROJECTS;
