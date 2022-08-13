const region = ['EU', 'EFTA', 'CARICOM', 'AU', 'USAN', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'SAARC'];

var comboBox= document.querySelector('#region');

for(lng of region){
    const option = document.createElement('option');
    option.value = lng;
    option.text =  lng;
   comboBox.appendChild(option);
}



function consultaApi(){
    console.log(comboBox);
    contenedor.innerHTML="";
    const index = comboBox.selectedIndex;
    console.log('Index' + index);
    fetch (`https://restcountries.com/v2/regionalbloc/${comboBox.options[index].value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        for(pais of data){
        	const div= document.createElement('div');
            const nombre = document.createElement('p');
            const capital= document.createElement('p');
            const idioma= document.createElement('p');
            const poblacion= document.createElement('p');
        	const bandera = document.createElement('img');

            bandera.src = pais.flags.png;
            nombre.textContent= 'Nombre: ' + pais.name;
            capital.textContent= 'Capital: ' + pais.capital;
            poblacion.textContent= 'Poblacion: ' + pais.population;
            idioma.textContent= 'Idioma: ' + pais.languages[0].name;

            div.appendChild(bandera);
            div.appendChild(nombre);
            div.appendChild(capital);
            div.appendChild(poblacion);
            div.appendChild(idioma);
            contenedor.appendChild(div);
        
        }
    });

}