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
                const { id, name, length_of_beach, image, town_id } = beach
                new Beach(id, name,length_of_beach, image, town_id)
            }
            }) 
    }

    static addBeach(e){
        e.preventDefault()
    
        //let sel = e.target.elements[3].options
        let data = {
            'name': e.target.name.value,
            'length_of_beach': e.target.length_of_beach.value,
            'image': e.target.img.value,
            'town_id': e.target.elements[3].options[e.target.elements[3].options.selectedIndex].value
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
            const { id, name,length_of_beach, image, town_id} = beach
            const newBeach = new Beach(id, name,length_of_beach, image, town_id)
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