function cakes(recipe, available) {
  const ingredients = Object.keys(recipe);
  return ingredients.map((ing) => Math.floor(available[ing] / recipe[ing])).reduce((num, curr) => {
    if (!num || !curr) return 0;
    return curr < num ? curr : num;
  });
}