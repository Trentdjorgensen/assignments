function getFrequency(str) {
    return str.split('').reduce( (prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
  };
  


console.log(getFrequency('slimy smelly solution'));


