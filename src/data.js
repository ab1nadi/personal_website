// eventually I'm gonna host this somehwere then I can update the website
// without having to rebuild it everytime
export let data = [
    {
        title: "Projects",
        style: "small",
        listItems: [
            {value: "6502 Assembler, 2023", listItems: [
                {value: "Built with: Rust"},
                {value: "An assembler for the 6502 processor and instruction architecture."},
                {value: "Takes 6502 assembly code and converts it into objet code."},
                {value: "Code:", listItems: [{href:"https://github.com/ab1nadi/assembler-6502.git", value: "https://github.com/ab1nadi/assembler-6502.git"}]},
            ]},
            {value: "Cellular Automaton Conway's Game of Life, 2022", listItems: [
                {value: "Built with: Vite, Two.js, and vanilla HTML5/CSS/javascript."},
                {value: "A basic implementation of Conway's Game of Life."},
                {value: "Code:", listItems: [{href:"https://github.com/ab1nadi/cellular_automaton.git", value: "https://github.com/ab1nadi/cellular_automaton.git"}]},
                {value: "Demo:", listItems: [{href:"https://ab1nadi.github.io/cellular_automaton/", value:"https://ab1nadi.github.io/cellular_automaton/"}]},
            ]},
            {value: "This Website, 2022", listItems: [
                {value: "Built with: react.js and Three.js."},
                {value: "code:", listItems: [{href:"https://github.com/ab1nadi/personal_website.git", value:"https://github.com/ab1nadi/personal_website.git"}]},
            ]},
            {value: "The Rubiks Cube (used on this website), 2022", listItems: [
                {value: "Built with: Three.js."},
                {value: "code:", listItems: [{href:"https://github.com/ab1nadi/rubiks.git", value:"https://github.com/ab1nadi/rubiks.git"}]},
            ]},
            {value: "Eureka Roofing Website, 2022", listItems: [
                {value: "Built with: react.js and parse-server backend."},
                {value: "Built this for my Dads business."},
                {value: "hosted:", listItems: [{href:"https://eurekaroofingutah.com", value: "https://eurekaroofingutah.com"}]},
            ]},
            {value: "Sudoku Website, 2021", listItems: [
                {value: "Built with: Webpack, HTML, CSS, and Javascript."},
                {value: "Generates playable puzzles of any wanted difficulty."},
                {value: "Code:", listItems: [{href:"https://github.com/ab1nadi/sudoku.git", value: "https://github.com/ab1nadi/sudoku.git"}]},
                {value: "Demo:", listItems: [{href:"https://ab1nadi.github.io/sudoku", value:"https://ab1nadi.github.io/sudoku"}]},
            ]},
            {value: "SpaceX Launch Info Site, 2021", listItems: [
                {value: "Built with: Vue.js, axios.js, and lodash.js."},
                {value: "Consumes the spaceX api."},
                {value: "Code:", listItems: [{href:"https://github.com/ab1nadi/SpaceX_Info_site.git", value: "https://github.com/ab1nadi/SpaceX_Info_site.git"}]},
                {value: "Demo:", listItems: [{href:"https://ab1nadi.github.io/SpaceX_Info_site/", value:"https://ab1nadi.github.io/SpaceX_Info_site/"}]},
            ]},
            {value: "Database, 2021", listItems: [
                {value: "Built with: C++"},
                {value: "A B+ tree that stores tuples. Doesn't have a SQl engine or anything, but still cool."},
                {value: "This was a school project so I can't host the code. But, I can show it upon request"},
            ]},
            {value: "Compiler, 2019", listItems: [
                {value: "Built with: C++"},
                {value: "Compiles a Java like programming language called KXI. This language was invented by Dr. Welborn"},
                {value: "It has a function call stack, a heap, classes, variables, and functions. It really isn't that different from Java."},
                {value: "It has a function call stack, a heap, classes, scoped variables, and functions. It really isn't that different from Java."},
                {value: "The assembly code genereated by this runs in the RISC CPU Emulator created prior to this project."},
                {value: "This was a school project so I can't host the code. But, I can show it upon request"},
            ]},
            {value: "RISC CPU Emulator, 2019", listItems: [
                {value: "Built with: C++"},
                {value: "Just an emulator for a made up cpu architecture provided by Dr. Welborn. "},
                {value: "There is a multithreaded version, and it currently supports a function call stack and heap."},
                {value: "This was a school project so I can't host the code. But, I can show it upon request"},
            ]},
        ]
    },
    {
        title: "Education",
        style: "small",
        listItems: [
            {value:"Utah Valley University, 2016-2020", listItems: [
                {value:"Bachelor of computer science (BCS)"},
                {value:"GPA of 3.93"}
            ]}
        ]
    },
    {
        title: "Skills and Languages",
        style: "small",
        listItems: [
            {value:"C/C++"},
            {value:"C#"},
            {value:"Java"},
            {value:"Javascript, incluing frameworks/libraries such as:", listItems: [
                {value:"Node.js"},
                {value:"React.js"},
                {value:"Vue.js"},
                {value:"Three.js"},
            ]},
            {value:"HTML5"},
            {value:"CSS"},
            {value:"SASS"},
            {value:"PHP"},
            {value:"SQL"},
            {value:"Web Pack"},
            {value:"Git"},
            {value:"AWS"},
        ]
    },
    {
        title: "Certifications and Awards",
        style:"small",
        listItems: [
            {value:"AWS Certified Cloud Practioner", listItems: [
                {value:"Relevant Skill:  AWS management/development"},
                {href:"https://www.credly.com/badges/4513541f-bdae-481b-a47d-e6029438189e/public_url", value:"https://www.credly.com/badges/4513541f-bdae-481b-a47d-e6029438189e/public_url"}
            ]},
            {value:"The Complete SQL Bootcamp 2022: Go from Zero to Hero,  Aug 2022", listItems: [
                {value:"Relevant Skill: SQL"},
                {href:"https://ude.my/UC-074eaec6-3ee9-4b8e-986b-19bc642cdce2/", value:"https://ude.my/UC-074eaec6-3ee9-4b8e-986b-19bc642cdce2/"}
            ]},
            {value:"Git Complete: The definitive, step-by-step guide to Git", listItems: [
                {value:"Relevant Skill: Git"},
                {href:"https://www.udemy.com/certificate/UC-8fd31568-f6ad-4e9a-8392-cef4302e0294/", value:"https://www.udemy.com/certificate/UC-8fd31568-f6ad-4e9a-8392-cef4302e0294/"}
            ]},
            {value:"Sterling Scholar Winner for Computer it, 2016", listItems:[
                {href:"https://www.nshcounseling.org/sterling-scholar", value:"https://www.nshcounseling.org/sterling-scholar", style:"small" }
            ]},

        ]
    },
    
    {
        title: "Contact Info",
        style:"small",
        listItems: [
            {value:"Email: abinadiswapp@gmail.com"},
        ]
    },

]