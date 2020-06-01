module.exports = {

    author: "@heyfede",
    siteTitle: "Federico Sarassola - Designer",
    siteShortTitle: "Heyfede", // Used as logo text in header, footer, and splash screen
    siteDescription: "A porfolio for a UX UI Designer",
    siteUrl: "https://heyfede.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Dribbble",
            url: "https://dribbble.com/heyfede"
        },
        {
            name: "Behance",
            url: "https://www.behance.net/heyfede"
        },
        {
            name: "Medium",
            url: "https://medium.com/@heyfede"
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/fsarassola/"
        },


    ],
  
    navLinks: {
        menu: [
            {
                name: "Home",
                url: "/",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
            {
                name: "About Me",
                url: "/#about",
            },

        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}