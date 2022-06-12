function generatehtml(data) {
    return `# ${data[0].name} 
    ## Description
    - ${data.description}
    
  
  
  `;
  }
  
  module.exports = generatehtml;
  