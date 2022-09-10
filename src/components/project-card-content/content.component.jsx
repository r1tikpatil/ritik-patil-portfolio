import Ecommerce from "../../assets/E-Commerce.png";
import chatApp from "../../assets/chat-app.png";
import portfolio from "../../assets/portfolio.png";
import instagramClone from '../../assets/instagramclone.png'

const contentCard = [
  {
    id: 1,
    title: "Instagram-Clone",
    body: "This app is comparable to Instagram in that it allows many users to sign up and log in.Users have the ability to add photos, comment on posts, like and dislike those of other users, and even delete their own post",
    image: instagramClone,
    tech: `Technology Used - REACT JS  NODE JS EXPRESS JS MONGODB`,
    linkgithub: "https://github.com/r1tikpatil/InstagramClone",
    linkdemo: "https://insta-clone-786.herokuapp.com/signin",
  },
  {
    id: 2,
    title: "E-Commerce",
    body: "Responsive E-commerce website which includes tools such as Hooks, React Router, Redux Toolkit.",
    image: Ecommerce,
    tech: `Technology Used - REACT JS  FIREBASE STYLED-COMPONENTS`,
    linkgithub: "https://github.com/r1tikpatil/e-commerce-app",
    linkdemo: "https://dynamic-eclair-f42764.netlify.app/",
  },
  {
    id: 3,
    title: "Chatting App",
    body: "This is a Chatting App in which we can create custom rooms for chatting and many users can chat simultaniously.",
    image: chatApp,
    tech: `Technology used -  EXPRESS JS NODE JS MONGODB`,
    linkgithub: "https://github.com/r1tikpatil/node-chat-app",
    linkdemo: "https://ritik-node-chat-app.herokuapp.com/",
  },
  {
    id: 4,
    title: "Portfolio",
    body: "My personal portfolio website built with React with smooth scroll with modern look to showcase my projects and accomplishments.",
    image: portfolio,
    tech: `REACT  STYLED-COMPONENTS  AOS ANIMATIONS`,
    linkgithub: "https://github.com/r1tikpatil/ritik-patil-portfolio",
    linkdemo: "",
  },
];

export default contentCard;
