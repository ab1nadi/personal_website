// certificate_data
// this file houses 
// the data that is used to generate
// routes and components for certificates
// at compile time

export let certificate_data  =
[
   {
        id: "AWS",
        title: "AWS Certificed Cloud Practioner",
        date: "Oct 2022",
        description:"Relevant Skill: AWS management/development",
        link: "https://www.credly.com/badges/4513541f-bdae-481b-a47d-e6029438189e/public_url"
    },
    {
        id: "SQLBootcamp",
        title: "The Complete SQL Bootcamp 2022: Go from Zero to Hero",
        date: "Aug 2022",
        description:"Relevant Skill: SQL",
        link: "https://ude.my/UC-074eaec6-3ee9-4b8e-986b-19bc642cdce2/",

    },
    {
        id: "Git",
        title: "Git Complete: The definitive, step-by-step guide to Git",
        date: "Aug 2022",
        description:"Relevant Skill: Git",
        link: "https://www.udemy.com/certificate/UC-8fd31568-f6ad-4e9a-8392-cef4302e0294/",

    },
    {
        id: "SterlingScholar",
        title: "Sterling Scholar Winner for Computer it, 2016",
        date: "2016",
        description:"Relevant Skill: Leadership, community service, and academics",
        link: "https://www.nshcounseling.org/sterling-scholar",

    }
]


// getAllIDs
// gets all the ids
export function getAllIDs()
{
    return certificate_data.map((cert)=>
    {
        return {
            params: 
            {
              id: cert.id
            }
        }
    })
}


// getCertById
// returns a cert by id
export function getCertById(id)
{
    return certificate_data.find(cert=> cert.id==id);
}