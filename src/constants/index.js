import { bag, account, logo, pfpone, pfptwo, pfpthree, instagram, facebook, x, linkedin } from "../assets"

export const navLinks = [
    {
        id: "about",
        link: "#about",
    },
    {
        id: "contact",
        link: "contact",
    },
    {
        id: "bag",
        link: "#bag",
        img: bag,
    },
    {
        id: "account",
        link: "#account",
        img: account,
    }
];

export const testimonialInfo = [
    {
        id: "0",
        quote: "Botanic Bento's plants have truly transformed my home! As a busy actress, I cherish the calming presence they bring to my space. It's like having a little piece of nature right inside my living room.",
        image: pfpone,
        name: "Jane Doe",
    },
    {
        id: "1",
        quote: "I'm constantly entertaining guests, and Botanic Bento's plants add that extra touch of elegance to my home. They not only look stunning but also create a welcoming atmosphere that everyone notices.",
        image: pfptwo,
        name: "John Doe",
    },
    {
        id: "2",
        quote: "I'm obsessed with Botanic Bento's plants! They've completely revitalized my living space, bringing in a breath of fresh air and injecting life into every room. I can't imagine my home without them now.",
        image: pfpthree,
        name: "Joe Doe",
    },
];

export const footerLinks = [
    {
        id: "0",
        title: "Useful Links",
        links: [
            {
                name: "Shop",
                link: "#shop",
            },
            {
                name: "Blog",
                link: "#blog",
            },
            {
                name: "About",
                link: "#about",
            },
            {
                name: "Contact",
                link: "#contact",
            },
        ]
    },
    {
        id: "1",
        title: "Community",
        links: [
            {
                name: "Our Partners",
                link: "#partners",
            },
            {
                name: "Become a Partner",
                link: "#become_a_partner",
            },
            {
                name: "Inspiration",
                link: "#inspiration",
            },
            {
                name: "Newsletter",
                link: "#contact",
            },

        ]
    },
    {
        id: "2",
        title: "More From Us",
        links: [
            {
                name: "Other Services",
                link: "#services",
            },
            {
                name: "Join Our Team",
                link: "#apply"
            }
        ]
    }
];

export const socialMedia = [
    {
        name: "instagram",
        img: instagram,
    },
    {
        name: "facebook",
        img: facebook,
    },
    {
        name: "x",
        img: x,
    },
    {
        name: "linkedin",
        img: linkedin,
    },
];
