 function generatehtml(_data) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <title>Tear Profile Generator</title>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading bg-danger">
          <h1 class="text-center text-white">Team Profile</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="row team-area col-12 d-flex justify-content-center">
          <div class="card employee-card">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">Bowser</h2>
              <h3 class="card-title">
                <i class="fas fa-mug-hot mr-2"></i>Manager
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:KoopaChomp@email.com">KoopaChomp@email.com</a>
                </li>
                <li class="list-group-item">Office number: 1000</li>
              </ul>
            </div>
          </div>

          <div class="card employee-card">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">Mario</h2>
              <h3 class="card-title">
                <i class="fas fa-glasses mr-2"></i>Engineer
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:Fireflower@email.com">Fireflower@email.com</a>
                </li>
                <li class="list-group-item">
                  GitHub:
                  <a
                    href="https://github.com/Jeremiah-81"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Jeremiah-81</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="card employee-card">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">Luigi</h2>
              <h3 class="card-title">

                <i class="fas fa-glasses mr-2"></i>Engineer
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: 3</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:Greenhat@email.com">Greenhat@email.com</a>
                </li>
                <li class="list-group-item">
                  GitHub:
                  <a
                    href="https://github.com/Jeremiah-81"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Jeremiah-81</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="card employee-card">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">Peach</h2>
              <h3 class="card-title">
                <i class="fas fa-user-graduate mr-2"></i>Intern
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: 4</li>
                <li class="list-group-item">
                  Email: <a href="mailto:Peachy@email.com">Peachy@email.com</a>
                </li>
                <li class="list-group-item">School:Mushroom Academy</li>
              </ul>
            </div>
          </div>

          <div class="card employee-card">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">Toad</h2>
              <h3 class="card-title">
                <i class="fas fa-user-graduate mr-2"></i>Intern
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: 5</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:Toadstool@email.com">Toadstool@email.com</a>
                </li>
                <li class="list-group-item">School:Mushroom Academy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

  `;
}



  module.exports = generatehtml;


