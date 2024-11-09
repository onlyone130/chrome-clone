const player = {
    name: "tama",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

//const는 수정할 수 없지만, object 안에 있는 값을 수정하는 것.
player.fat = false;
console.log(player);

player.lastName = "potato";
console.log(player);
