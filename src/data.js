
const orderByName= (data,sortBy,sortOrder) => {
  const ordered = data.sort((a, b) => {
    if (a[sortBy] > b[sortBy])
      return 1;
    if (a[sortBy] < b[sortBy])
      return -1;
    return 0;
  });
  
  if (sortOrder === 'za') {
    return ordered.reverse();
  }
  
  return ordered;
  };
  
  
  window.orderByName =  orderByName
  
  const filterByTag = (data, tipo) => {
  
    return data.filter(element =>
  element.tags.includes(tipo)
    );
  };
  window.filterByTag = filterByTag;
  
  // const counter = (data, tipo1) => {
  //   return data.filter(element => element.tags.includes(tipo1)).length * 100 / data.length
  // };
  
  
  // window.counter= counter
  
  const counter = (data, tipo1) => {
    let result = data.reduce((contador, data) => {
      if (data.tags.includes(tipo1)) {
        return contador + 1 
      } else {
        return contador ;
      }
    }, 0)
    return result 
  };
  window.counter = counter;
  
  
  
  