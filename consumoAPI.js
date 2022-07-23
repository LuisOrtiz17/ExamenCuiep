const region = ['UE', 'EFTA', 'CARICOM', 'AP', 'AU', 'USAN', 'UEE', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'TLCAN', 'SAARC'];

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

            bandera.scr=pais.flags.png;
            nombre.textContent=pais.name;
            capital.textContent=pais.capital;
            poblacion.textContent=paispopulation;
            idioma.textContent=languajes.name;

            div.appendChild(bandera);
            div.appendChild(nombre);
            div.appendChild(capital);
            div.appendChild(poblacion);
            div.appendChild(idioma);
            contenedor.appendChild(div);
        
        }
    });

}