import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    webkeyz,
    designagency,
    carrent,
    jobit,
    tripguide,
    threejs,
    perfectpresention,
    sass,
    angular,
    ecommerce
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "UI Developer",
        icon: web,
    },
    {
        title: "React  Dev",
        icon: mobile,
    },
    {
        title: "Angular Dev",
        icon: backend,
    },
    {
        title: "Seo",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Sass",
        icon: sass

    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Angular",
        icon: angular

    },

    {
        name: "Tailwind CSS",
        icon: tailwind,
    },

    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },

];

const experiences = [

    {
        title: "Frontend Developer",
        company_name: "@Design Agency",
        icon: designagency,
        iconBg: "#ea504e",
        date: "Jan 2016 - April 2017",
        points: [
            "Developing and maintaining web applications using Angular & React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Used agile methodology and software development life-cycle in development processes.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "WebKeyz",
        icon: webkeyz,
        iconBg: "#fff",
        date: "Jan 2017 - Jun 2019",
        points: [
            "Developing and maintaining web applications using Angular & React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Used agile methodology and software development life-cycle in development processes.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "FrontEnd Developer",
        company_name: "Perfect Presentation",
        icon: perfectpresention,
        iconBg: "#E6DEDD",
        date: "Jun 2019 - Present",
        points: [
            "Developing and maintaining web applications using Angular & React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Used agile methodology and software development life-cycle in development processes.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Hazem is one of the most hard-working individuals I've met at 2P, He is enthusiastic team member and very helpful teammate",
        name: "Salah Atef Seleem",
        designation: "Senior QC Engineer at ",
        company: "2P Perfect Presentation",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        testimonial:
            "There is no better colleague than Hazem. he is one of the most dedicated professionals I’ve worked with in 2p Perfect presentation Campany . ",
        name: "Aml Taha",
        designation: "Frontend Developer",
        company: "Emirates Auction",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },

];

const projects = [
    {
        name: "Psma Platform",
        description:
            "A  platform Dashboard for online Survey , and report problem ",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "sql",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://psmap.netlify.app/user-pages/login",
    },

    {
        name: "Ameen Care",
        description:
            "A Platform specialized in providing home physiotherapy services to help reduce pain and improve physical health.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://www.ameen.care/",
    },
    {
        name: "A Ecommerce",
        description:
            "A Ecommerce is a fully responsive and premium Tailwind  Admin & Dashboard Template built in HTML, React js ,Syncfusion",
        tags: [

            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "Tailwind",
                color: "blue-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://64a55100ebcfbd10710b5344--regal-pixie-a9d190.netlify.app/ecommerce",
    },
];

export { services, technologies, experiences, testimonials, projects };