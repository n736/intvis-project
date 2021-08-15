const margin = {
  top: 150,
  right: 70,
  bottom: 110,
  left: 100
};
// width = * ,
// height = * ;

const id = 409777;

console.log(foodapi.getURL(id));
d3.json(foodapi.getURL(id), function (data) {

  console.log(data);



})