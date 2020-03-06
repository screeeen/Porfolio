document.body.querySelector('.container').innerHTML +=`
    <div class="c2">
      <a href="javascript:window.location=goto('index')">
        <h1 class="title">HELLO</h1>
      </a>
      <info-section>
        <img src="./images/Miguel_Alva_Small.jpg" alt="">
        <br>
        <p>My name is Miguel Ángel Álvarez Rodriguez García Cardalda <span class="bolder">interaction designer</span>
          with crafting skills and passion</p>
        <br>


        <div class="col">
          <p><a href="https://www.linkedin.com/in/miguel-angel-alvarez-2ba1b2a/" target="_blank">LinkedIn</a></p>
          <p><a href="http://screeeeen.com/" target="_blank">videogames </a></p>
          <p><a href="https://github.com/screeeen" target="_blank">github</a></p>
          <p><a href="https://www.dropbox.com/s/jjutmcj39zmytlu/00_One%20Page%20Resume.pdf?dl=0"
              target="_blank">resume</a></p>
        </div>
      </info-section>
      <hr>

      <info-section class="contact-form">
        <hr>
        <p><span class="icon">✉️</span></p>
        <div class="thank-you" hidden>
          <p class="">Thank you!</p>
          <p class="">I will get back to you shortly.</p>
        </div>

        <form id="serverless-contact-form" method="POST">
          <input type="text" name="name" id="name" class="form-control" placeholder="Name" required>
          <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"
            placeholder="Email Address" required>
          <div class="form-group">
            <textarea class="form-control" name="message" id="message" rows="3"
              placeholder="Write here your proposal"></textarea>
          </div>
          <input type="submit" value="send"></button>
        </form>
      </info-section>
    </div>
  </div>


`;
