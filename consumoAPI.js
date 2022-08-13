//ESCRIBIR CODIGO PARA CONSULTAR UN ENDPOINT DEL API PAISES

var region = ['EU', 'EFTA', 'CARICOM', 'AU', 'USAN', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'SAARC' ];

var coboBox = document.querySelector('#languaje');

for(lng of region){
    const option = document.createElement('option');
    option.value = lng;
    option.text = lng;

    coboBox.appendChild(option);
}


function consultaApi(){
    contenedor.inmerHTML = "";
    const index = coboBox.selectedIndex;
    console.log('index :' + index);
    fetch(`https://restcountries.com/v2/regionalbloc/${coboBox.options[index].value}`)
    .then( res => res.json())
    .then(data => {


        console.log(data);


        //nombre, capital, bandera y Numero de poblacion
        for(pais of data){
            const div = document.createElement('div');
            const nombre = document.createElement('p');
            const capital = document.createElement('p');
            const idioma = document.createElement('p')
            const poblacion = document.createElement('p');
            const bandera = document.createElement('img');

            bandera.src = pais.flags.png;
            nombre.textContent = 'nombre:  ' + pais.name;
            capital.textContent = 'capital: ' + pais.capital;
            idioma.textContent = 'idioma: ' + pais.languages[0].name;
            poblacion.textContent = '#poblacion: ' + pais.population;

            div.appendChild(bandera);
            div.appendChild(nombre);
            div.appendChild(capital);
            div.appendChild(idioma);
            div.appendChild(poblacion);

            contenedor.appendChild(div);

        }
    });
}