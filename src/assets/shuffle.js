const shuffle=function (array) {
  for (let i=0;i<array.length;i++){
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}

export default shuffle
