class Beach {
    constructor(id, name, length_of_beach, image, townID) {
        this.id = id,
        this.name = name,
        this.length_of_beach = length_of_beach,
        this.image = image,
        this.townID = townID,
        this.renderBeach()
    }


    beachHTML() {
        return `
            <img src="${this.image}" />
            <h2>${this.name}</h2>
            <p>Located in ${document.getElementById('town-container').children[this.townID-1].getElementsByTagName('h2')[0].innerText} </p>
            <p>Length of Beach: ${this.length_of_beach}</p> 
            `
    }
    renderBeach() {
        const beachContainer = document.getElementById('beach-container')
        const beachCard = document.createElement('div')
        beachCard.classList.add('beach-card')
        beachCard.id = this.id
        beachCard.innerHTML += this.beachHTML()

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.setAttribute("class", "beach-delete-btn");
        deleteBtn.addEventListener("click", (e) => {
        API.deleteBeach(parseInt(parseInt(e.target.parentElement.id)))
        });
        beachCard.appendChild(deleteBtn);


        beachContainer.appendChild(beachCard)
        // beachCard.addEventListener('click', e => {
        //     if (e.target.className.includes('delete')) this.deleteBeach(e)
        //     if (e.target.className.includes('header')) this.showBeach(e)
        //   })
    }


    // updateBeach(e){
    //     const id = parseInt(e.target.parentElement.id)
    //     fetch(`http://localhost:3000/beaches/${id}`,{
    //       method: 'PATCH'
    //     })
    //     .then((resp) => {
    //         return resp.json()
    //     })
    //     .then((beach) => {
    //     const updatedBeachCard = document.createElement('div')
    //     const { id, name, length_of_beach, image } = beach
    //     new Beach(id, name,length_of_beach, image)
    //     document.getElementById('beach-container').removeChild(document.getElementById())
    //     }

    //     )
    //   }
    
}