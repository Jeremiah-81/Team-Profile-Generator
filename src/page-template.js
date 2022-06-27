// function generatehtml(data) {
//     return `# ${data[0].name} 
//     ## 
//     Engineer
//     - ${data.manager}
//     `;
// }
  
function generatehtml(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <title>Tear Profile Generator</title>
  </head>
  <body>
  <div class="container-fluid">
  <div class="row">
      <div class="col-12 jumbotron mb-3 team-heading bg-danger">
          <h1 class="text-center text-white">Team Profile</h1>
      </div>
  </div>
  <div class="container">
  <div class="row">
    <div class="team-area col-9 d-flex flex-wrap justify-content-between bg-secondary p-3">
  </nav>
    <div class="card mx-auto" style="width: 18rem">
      <h5 class="card-header">1<br /><br />Manager</h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:24</li>
          <li class="list-group-item">email:@.com</li>
          <li class="list-group-item">Office Number:1701</li>
      </ul>
  </div>
  <br>
  <div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">2<br /><br />Engineer</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:</li>
        <li class="list-group-item">email:</li>
        <li class="list-group-item">GitHub username:</li>
    </ul>
  </div>
  <br>
      </div>
  </body>
</html>
  `;
}



  module.exports = generatehtml;


