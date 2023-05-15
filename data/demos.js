// demo_data
// this file houses 
// the data that is used to generate
// routes and components for demos
// at compile time


export let demo_data  =
[
   {
        id: "sudoku",
        url: "https://ab1nadi.github.io/sudoku/"
    },
    {
        id: "asteroids",
        url: "https://ab1nadi.github.io/asteroids/"
    },
    {
        id: "spaceXinfo",
        url: "https://ab1nadi.github.io/SpaceX_Info_site/"
    },
    {
        id: "conways_game",
        url: "https://ab1nadi.github.io/cellular_automaton/"
    },
    {
        id: "rubiks",
        url: "https://ab1nadi.github.io/rubiks/"
    }

]

// getAllIDs
// returns all ids 
export function getAllIDs()
{
    return demo_data.map((demo)=>
    {
        return {
            params: 
            {
              id: demo.id
            }
        }
    })
}


// getDemoById
// returns a demo by id
export function getDemoById(id)
{
    return demo_data.find(demo=> demo.id==id);
}
