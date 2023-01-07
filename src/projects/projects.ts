import vibrate from '../assets/projects/vibrate.png'
import trasnslucent from '../assets/projects/translucent.png'
import youtube from '../assets/projects/youtube.png'
import theme from '../assets/projects/theme.png'
import taste from '../assets/projects/taste.png'
import notes from '../assets/projects/notes.png'

export interface projectType {
    id: number
    code: string;
    url: string;
    title: string;
    des: string;
    lang: string[];
    img: {};
}


const project: projectType[] = [
    {
        id: 0,
        code: "https://github.com/sumyat-aung/vibrate-music-player-PWA",
        url: "https://vbra.netlify.app/",
        title: "Vibrate Music Player (Progressive Web App)",
        des: "A music player application that allows users to easily search and listen to songs on their device. It supports a wide range of audio formats and can be easily installed on all devices as a progressive web app.",
        lang: ["React", " Redux-toolkit", "TailwindCSS", "Styled-components", "Rapid API"],
        img: vibrate,
    },
    {
        id: 1,
        code: "https://github.com/sumyat-aung/translucent-food-eCommerce",
        url: "https://trlc.netlify.app/",
        title: "Translucent Food eCommerce",
        des: "Translucent (Food eCommerce) is an online platform that allows users to purchase food items from local restaurants. It features an easy-to-use interface that enables users to browse menus, add items to their cart, and complete their purchase through a secure checkout process.",
        lang: ["React", "TailwindCSS", "Styled-components", "CommereceJS"],
        img: trasnslucent,

    },
    {
        id: 2,
        code: "https://github.com/sumyat-aung/youtube-clone",
        url: "https://ytbe.netlify.app/",
        title: "YouTube Clone",
        des: "Inspired by the popular video streaming website (YouTube). Follows a mockup that closely resembles the layout and aesthetics of the original YouTube platform.",
        lang: ["React", "Redux-toolkit", "Sass", "Rapid API"],
        img: youtube,

    },
    {
        id: 3,
        code: "https://github.com/sumyat-aung/astral-midnight-vscode-theme",
        url: "https://astral-midnight.netlify.app/",
        title: "Astral Midnight Theme",
        des: "A modern and stylish dark-ish VS-Code theme with an eye-catching color palette, subtle gradients, and improved readability and contrast for a more immersive coding experience.",
        lang: ["Yo code", "JSON"],
        img: theme,

    },
    {
        id: 4,
        code: "https://github.com/sumyat-aung/recipe-search-engine",
        url: "https://taste-explorer.netlify.app/",
        title: "TasteExplorer (Recipe Search Engine with Alan AI)",
        des: "TasteExplorer is a recipe search platform with an easy-to-use interface and a comprehensive database of recipes. It includes voice interactivity powered by Alan AI, allowing users to ask questions and receive spoken responses.",
        lang: ["TypeScript", "React", "Redux-toolkit", "TailwindCSS", "Alan AI"],
        img: taste,

    },
    {
        id: 5,
        code: "https://github.com/sumyat-aung/markdown-supported-notes-app",
        url: "https://mindmapnotes.netlify.app/",
        title: "Mindmap (Markdown supported notes app)",
        des: "Note Taking Web App that provides users with an easy-to-use and intuitive way to store, organize and manage their notes. The app is built with robust CRUD capabilities and is markdown supported, allowing users to easily format their notes",
        lang: ["TypeScript", "React", "TailwindCSS"],
        img: notes,

    }
]


export { project }
