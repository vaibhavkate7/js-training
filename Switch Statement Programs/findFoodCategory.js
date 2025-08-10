function findFoodCategory(item) {
  switch (item) {
    case 'pizza':
      console.log("fast food")
      return;
    case 'apple':
    case 'banana':
    case 'orenge':
      console.log("fruit")
      return;
    case 'carrot':
      console.log("vegetable")
      return;
    default:
      console.log("No item")
  }
}
findFoodCategory('orenge')