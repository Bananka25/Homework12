let arr = ["Spider-man", "Shrek", "Iron-man"];

// arr.push(['Titanic', 'Thor: Love and Thunder']);

arr.splice(3, 0, "Titanic", "Thor: Love and Thunder");

arr.splice(0, 0, "Avengers: Endgame", "Thor: Ragnarok");

arr.splice(0, 1);

arr.splice(5, 1);

console.log(arr);