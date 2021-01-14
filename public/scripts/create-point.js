

function populateUFs(){
   const ufSelect = document.querySelector("select[name=uf]")

   fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
   .then( res => res.json() )
   .then( states =>{

       for ( const state of states){
       ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
       }
   })
}

populateUFs()

function getCities(event){
     const citySelect = document.querySelector("select[name=city]")

     const ufValue = event.target.value
     
     const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
     
     citySelect.innerHTML="<option value>Selecione a Cidade</option>"
     citySelect.disabled= true

     fetch(url)
    .then( res => res.json() )
    .then( cities =>{

       for ( const city of cities){
       citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
       }

       citySelect.disabled = false
   })
}






document
      .querySelector("select[name=uf]")
      .addEventListener("change", getCities )


      //Itens de Coleta
      //pegar todos os li's

      const itemsToCollect = document.querySelectorAll(".items-grid li")

      for (const item of itemsToCollect){
          item.addEventListener("click",handleSelectedItem)
      }

      let seleItems =[]

      function handleSelectedItem(event){
          const itemsLi = event.target
          
          //adicionar ou remover uma classe com Js
          itemsLi.classList.toggle("selected")
          
          const itemId = itemsLi.dataset.id

          //Verificar se existem itens selecionados, se sim
          //pegar os itens selecionados
          
          const alreadySelected = selectedItems.findIndex(function(item){
              const itemFound = item == itemId
              return itemFound
          })
          
      

      //se já tiver selecionado,tirar da seleção
        if(alreadySelected>=0){
            const filteredItems = selectedItems.filter(item=> {
                const itensDiferente = item != itemId 
                return itensDiferente

            })

            selectedItems = filteredItems
        }else{
            selectedItems.push(itemId)
        
        }
        console.log(selectedItems)


      // se não tiver selecionado , adicionar na seleção
      
      //atualizar o campo escondido com os itens selecionados
    const collecteditems = document.querySelector("input[name=items")  
    collecteditems.value = selectedItems
    
    }
