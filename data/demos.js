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
    }
]


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

export function getDemoById(id)
{
    return demo_data.find(demo=> demo.id==id);
}
