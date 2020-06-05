async function getLines(event) {
    let result = await new Promise((resolve) => {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result.split(/\r\n|\n/).map(line => {
        if (!line) return {};
        return {
          id: Math.floor(Math.random()*100000000),
          data: line,
        }
      }));
      reader.readAsText(file);
    });
    return result;
  };
  


  export {
    getLines,
  }