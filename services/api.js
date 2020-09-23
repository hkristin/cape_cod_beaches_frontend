class API {
    static loadTowns() {
        fetch(`http://localhost:3000/towns`)
          .then(resp => resp.json())
          .then(towns => {
            for(let town of towns) {
                const { id, name, location, image, beaches } = town
                new Town(id, name, location, image, beaches)
            }
          })
    }
    static loadBeaches(){
        fetch(`http://localhost:3000/beaches`)
          .then(resp => resp.json())
          .then(beaches => {
            for(let beach of beaches) { 
                const { id, name, length_of_beach, image, town } = beach
                new Beach(id, name,length_of_beach, image, town)
            }
            }) 
    }

    static addBeach(e){
        e.preventDefault()
        let townId = document.getElementById('town_id').options[document.getElementById('town_id').options.selectedIndex].value
        let data = {
            'name': e.target.name.value,
            'length_of_beach': e.target.length_of_beach.value,
            'image': e.target.img.value,
            'town_id': townId
        };
        // write our  fetch and send it to our back end
        
        // grab our fetch response
        
        fetch(`http://localhost:3000/beaches`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(beach => {
            const { id, name,length_of_beach, image, town} = beach
            const newBeach = new Beach(id, name,length_of_beach, image, town)
            document.getElementById('beach-form').reset()
        })


        
        // create a new Beach object
        // clear our form
    }

    static deleteBeach(beachID){
        fetch(`http://localhost:3000/beaches/${beachID}`, {method: 'DELETE' })
        let deletedBeach = document.getElementById(beachID.toString())
        deletedBeach.parentNode.removeChild(deletedBeach)
        console.log("The beach was deleted!"); 
        return "The beach was deleted!";
    }
}