const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>

  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      <link rel="stylesheet" href="style.css" />
      <title>html with functonUp</title>
    </head>
    <body>
      <div class="slider-container">
        <div class="left-slide">
          <div style="background-color: #2d1e98">
            <!-- Add a heading followed by a paragraph here-->
            <p><h1><u>Super Computer</u> </h1>
           this is summit super computer</p>
          </div>
          <div style="background-color: #121c21">
            <!-- Add a heading followed by a paragraph here-->
            <p><h1><u>HTML</u> </h1>
            it talks to browser</p>
          </div>
          <div style="background-color: #252E33">
            <!-- Add a heading followed by a paragraph here-->
            <p><h1><u>SSD vs HDD</u> </h1>
              we are parmnent memory </p>
          </div>
          <div style="background-color: #606bdf">
            <!-- Add a heading followed by a paragraph here-->
            <p><h1><u>Facebook Server</u> </h1>
             This is Facebook Server </p>
          </div>
        </div>
        <div class="right-slide">
  
    <!-- Put a proper url in the below div-->
  
          <div style="background-image: url('https://engineering.fb.com/wp-content/uploads/2020/12/Prineville_Server-room-dark2-e1607617109406.jpg')"></div>
          <div style="background-image: url('https://i0.wp.com/electricalfundablog.com/wp-content/uploads/2020/01/SSD-Vs-HDD.jpg?ssl=1')"></div>
          <div style="background-image: url('https://image.shutterstock.com/image-illustration/html-programming-web-developing-computer-260nw-1920182918.jpg')"></div>
          <div style="background-image: url('https://cdn.vox-cdn.com/thumbor/gJBlqn8dz5uPSb0Lj-qPGJNFKVk=/0x0:2040x1360/1200x675/filters:focal(661x498:987x824)/cdn.vox-cdn.com/uploads/chorus_image/image/60039409/msingleton_180612_2663_0006.0.jpg')"></div>
        </div>
  
        <div class="action-buttons" >
  
          <button class="down-button" >
          <!-- Use fas fa-arrow-down icon here. Refer instructions -->
          <i class="fas fa-arrow-down"></i>
          </button>
  
          <button class="up-button" >
          <!-- Use fas fa-arrow-up icon here. Refer instructions -->
          <i class="fas fa-arrow-up"></i>
          </button>
  
        </div>
  
      </div>
  
      <script src="script.js"></script>
    </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});