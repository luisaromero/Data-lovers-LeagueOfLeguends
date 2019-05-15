const data =  Object.values(window.lol.data)
const lolMostrar = document.getElementById('lolcito')

const btnFilter = document.getElementById('filter1');

const btnOrder = document.getElementById('ordenar')

const btnFilter2 = document.getElementById('filter2')

const btnOrderTag = document.getElementById('ordenartipos')




const showData = (data) => {
let html=""
data.forEach(element => {
    html += `
    
      <div class="card h-100" >
        <div class="card-img-wrapper">
        <img class="card-img mx-auto d-block" src="${element.img}" alt="${element.name}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-title">${element.title}</p>
          <p class="card-title">${element.tags}</p>
          </div>
    </div>`;
  })
  lolMostrar.innerHTML = html
}



// window.addEventListener('load', () => {
//   showData(data);

// })
 btnFilter.addEventListener('click',() => {
     const orden = btnOrder.value;
     let lolMostrar = window.orderByName(data,"name",orden)
     showData(lolMostrar)
   });

   btnFilter2.addEventListener('click',() => {
    const tipo = btnOrderTag.value;
    let lolMostrar = window.filterByTag(data,tipo)
    showData(lolMostrar)
  });

  btnFilter3.addEventListener('click',() => {
    const tipo1 = btnCounter.value;
    let lolMostrar = window.counter(data,tipo1)
    showData(lolMostrar)
  });


