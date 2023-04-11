
function regions(){

    const regionsList = [
        {
            name: "Kanto",
            urlLocation: "pokemon?limit=151",
        },
        {
            name: "Johto",
            urlLocation: "pokemon?limit=100&offset=151",
        },
        {
            name: "Hoenn",
            urlLocation: "pokemon?limit=135&offset=251",
        },
        {
            name: "Sinnoh",
            urlLocation: "pokemon?limit=107&offset=386",
        },
        {
            name: "Unova",
            urlLocation: "pokemon?limit=156&offset=493",
        },
        {
            name: "Kalos",
            urlLocation: "pokemon?limit=72&offset=649",
        },
        {
            name: "Alola",
            urlLocation: "pokemon?limit=88&offset=721",
        },
        {
            name: "Galar",
            urlLocation: "pokemon?limit=89&offset=809",
        }
    ]

    return  regionsList;
}

export {regions}