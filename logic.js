let CountriesTableBody = document.querySelector(".countries_table_body")
let thead = document.querySelector("thead")

async function CountriesData(){
    let response = await fetch("https://restcountries.com/v3.1/all")
    let data = await response.json()
    data.forEach(element => {
    

      let row = document.createElement('tr')
      let nameCell = document.createElement("td")
      nameCell.textContent = `${element.name.common}`
      nameCell.style.fontSize = "1.50rem"
      row.appendChild(nameCell)

      let flageImg = document.createElement("img")
      flageImg.setAttribute("src",`${element.flags.png}`)
      flageImg.style.width= "70px"
      flageImg.style.height= "50px"
      flageImg.style.objectFit ="cover"
      row.appendChild(flageImg)

      let papulactionCell = document.createElement("td")
      papulactionCell.textContent=`${element.population }`
      papulactionCell.style.fontWeight="bold"
      row.appendChild(papulactionCell)

      let areaCell = document.createElement("td")
      areaCell.textContent=`${element.area}`
      areaCell.style.fontWeight="bold"
      row.appendChild(areaCell)

      let continents = document.createElement("td")
      continents.textContent=`${element.continents[0]}`
      continents.style.fontWeight="bold"
      row.appendChild(continents)
       
      let capital = document.createElement("td")
      capital.textContent=`${element.capital}`
      capital.style.fontWeight="bold"
      row.appendChild(capital)
       
      let region = document.createElement("td")
      region.textContent=`${element.region}`
      region.style.fontWeight="bold"
      row.appendChild(region)
      CountriesTableBody.appendChild(row)
      console.log(element)
    });
}


CountriesData()


