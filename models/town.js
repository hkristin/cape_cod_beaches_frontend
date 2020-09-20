class Town {
    constructor(id, name, location, image) {
        this.id = id,
        this.name = name,
        this.location = location,
        this.image = image,
        this.renderTown()
    }
    townHTML() {
        return `
            <img src="${this.image}" />
            <h2>${this.name}</h2>
            <p>Location: ${this.location}</p> `
    }
    deleteTown(e){
        const id = parseInt(e.target.parentElement.id)
        fetch(`http://localhost:3000/towns/${id}`,{
          method: 'DELETE'
        })
        .then(() => {
          document.getElementById('town-container').removeChild(document.getElementById(id))
        })
      }

    renderTown() {
        const townContainer = document.getElementById('town-container')
        const townCard = document.createElement('div')
        townCard.classList.add('town-card')
        townCard.id = this.id
        townCard.innerHTML += this.townHTML()
        
        townContainer.appendChild(townCard)
        townCard.addEventListener('click', e => {
            if (e.target.className.includes('delete')) this.deleteTown(e)
            if (e.target.className.includes('header')) this.showTown(e)
          })
        }
    }

  

