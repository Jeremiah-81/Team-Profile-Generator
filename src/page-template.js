function generatehtml(data) {
    return `# ${data.title} 
    ## Description
    - ${data.description}
    
  
  
  `;
  }
  
  module.exports = generatehtml;
  