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
  const filter = data.filter((element) => {

    return element.tags.includes(tipo);
  });
  return filter;
};
window.filterByTag = filterByTag;

// const counter = (data, condition, counterBy) => {
//   let result = data.reduce((counterResult, data) => {
//     if (data[counterBy].includes(condition)) {
//       return counterResult + 1;
//     } else {
//       return counterResult;
//     }
//   }, 0)
//   return result;
// };
// window.counter = counter;