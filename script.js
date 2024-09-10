

async function chamar(){
    const cidade = document.getElementById('input').value
const url = `https://wttr.in/${cidade}?format=%C+%t`; 
    fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log(data); // Exibe a previsão do tempo no console
       // document.getElementById('weather').textContent = data; // Exibe a previsão do tempo na página
        const dados = data
        const parts = dados.split('+')
        const parteUM = parts[0];
        const temperatura = parts[1];
        console.log(parteUM)
        if (parteUM.includes("Sol")){
            console.log("Está ensolarado.");
            document.getElementById('info').innerHTML = `<h2>${temperatura}</h2><br>
            <h2>${parteUM}</h2>`
            document.getElementById('logo').src = 'imagens/icons8-ensolarado-48.png'
            document.getElementById('box').style.background = 'linear-gradient(to top, #0033cc, #e6f0ff)';
            document.getElementById('lugar').innerText = `${cidade}`

            
        }if(parteUM.includes('Encoberto') || parteUM.includes('Nublado')){
            document.getElementById('info').innerHTML = `<h2>${temperatura}</h2><br>
            <h2>${parteUM}</h2>`
            document.getElementById('logo').src = 'imagens/icons8-nublado-48.png'
            document.getElementById('box').style.background = 'linear-gradient(to bottom, #b0bec5, #90a4ae, #78909c)';
            document.getElementById('lugar').innerText = `${cidade}`

        }if(parteUM.includes('Chuvisco') || parteUM.includes('Chuva fraca') || parteUM.includes('Chuva moderada')){
            document.getElementById('info').innerHTML = `<h2>${temperatura}</h2><br>
            <h2>${parteUM}</h2>`
            document.getElementById('logo').src = 'imagens/icons8-chuva-40.png'
            document.getElementById('box').style.background = 'linear-gradient(to bottom, #b0bec5, #90a4ae, #78909c)'
            document.getElementById('lugar').innerText = `${cidade}`
            
        }if(parteUM.includes('Parcialmente nublado')){
            document.getElementById('info').innerHTML = `<h2>${temperatura}</h2><br>
            <h2>${parteUM}</h2>`
            document.getElementById('logo').src = 'imagens/icons8-dia-parcialmente-nublado-48.png'
            document.getElementById('box').style.background = 'linear-gradient(to bottom, #b0bec5, #90a4ae, #78909c)';
            document.getElementById('lugar').innerText = `${cidade}`

        }if(parteUM.includes("Céu limpo")){
            document.getElementById('info').innerHTML = `<h2>${temperatura}</h2><br>
            <h2>Noite Estrelada</h2>`
            document.getElementById('logo').src = 'imagens/icons8-lua-brilhante-64.png'
            document.getElementById('box').style.background = 'linear-gradient(to bottom, #001f3f, #000)';
            document.getElementById('lugar').innerText = `${cidade}`

        }if(parteUM.includes('Aguaceiros fracos') || parteUM.includes('Possibiliade de chuva')){
            document.getElementById('info').innerHTML = `${temperatura}</h2><br>
            <h2>${parteUM}</h2>`
            document.getElementById('logo').src = 'imagens/icons8-sol-atrás-nuvem-de-chuva-48.png'
            document.getElementById('box').style.background = 'linear-gradient(to bottom, #b0bec5, #90a4ae, #78909c)';
            document.getElementById('lugar').innerText = `${cidade}`

        }
      document.getElementById('input').value = ''

    })
   
    
}
