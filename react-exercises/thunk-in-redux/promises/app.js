 
  // Promises //
  
      const wait = time => new Promise((resolve) => setTimeout(resolve, time));
      wait(1000).then(() => console.log("Hello"))
  const wait = time => new Promise((resolve) => setTimeout(resolve, time));
  wait(1000).then(() => console.log("Hello"))
  console.log(wait(1000))