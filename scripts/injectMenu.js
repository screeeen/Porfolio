const page = window.location.href;
const pictureURL = '/images/Miguel_Alva_Small.jpg';
console.log(pictureURL);


showButton = () => {
  const hello = "HELLO";
  const back = " ‹ BACK"
  let text = ''

  if (page === window.location.protocol  + '//' + window.location.hostname + '/Porfolio/index.html') {
    text = hello;
  } else {
    text = back;
  }
  return text;
}



document.body.querySelector('.container').innerHTML += `
<div class='c3'>
<a href="javascript:window.location=goto('index')">
<h1 class="title">${showButton()}</h1>
</a>  
</div>
<div class="c2">

      <info-section>
        <img src=${pictureURL} alt="">
        <br>
        <p class="bold">My name is Miguel Álvarez. I'm an interaction designer and frontend developer.</p>
        <br>


        <div class="col">
          <p><a href="https://www.linkedin.com/in/miguel-angel-alvarez-2ba1b2a/" target="_blank">LinkedIn</a></p>
          <p><a href="http://screeeeen.com/" target="_blank">videogames </a></p>
          <p><a href="https://github.com/screeeen" target="_blank">github</a></p>
          <p><a href="https://www.dropbox.com/s/jjutmcj39zmytlu/00_One%20Page%20Resume.pdf?dl=0"
              target="_blank">resume</a></p>

        </div>
      </info-section>
      <div class="bottom-links">
      <hr>
      <div class="fila animated" style="background-color:transparent">
      <a href="mailto:miguel@screenimplosion.com?Subject=Hi!" target="_top">
              <h2>CONTACT ME</h2>
      </a>
    </div>
      <div class="fila animated">
        <a href="javascript:window.location=goto('inflight-vr')">
          <h2>INFLIGHT VR</h2>
        </a>
      </div>
      <div class="fila animated">
        <a href="javascript:window.location=goto('eh')">
          <h2>EMERGENCY HEROES</h2>
        </a>
      </div>

      <div class="fila animated">
        <a href="javascript:window.location=goto('Belote')">
          <h2>BELOTE</h2>
        </a>
      </div>

      <div class="fila animated">
        <a href="javascript:window.location=goto('screenimplosion')">
          <h2>SCREEN IMPLOSION</h2>
        </a>
      </div>

      <!-- <div class="fila animated">
        <a href="javascript:window.location=goto('amasc')">
          <h2>ARENA MONSTER ALIEN SHOOTING CHAOS</h2>
        </a>
      </div> -->

      <div class="fila animated">
        <a href="javascript:window.location=goto('indie-games')">
          <h2>INDIE GAMES</h2>
          <p class="hidden" hidden>Gloria very punk</p>
        </a>
      </div>

      <div class="fila animated">
        <a href="javascript:window.location=goto('ilustration')">
          <h2>ILUSTRATIONS</h2>
        </a>
      </div>

      <!-- <div class="fila animated">
        <a href="javascript:window.location=goto('Animation')">
          <h2>ANIMATIONS</h2>
        </a>
      </div>-->

      <div class="fila animated">
        <a href="javascript:window.location=goto('lectures')">
          <h2>LECTURES</h2>
        </a>
      </div>
    </div>
    </div>
    
  </div>
`;

if (page === window.location.protocol + '//' + window.location.hostname + '/Porfolio/index.html') {
  document.querySelector(".bottom-links").setAttribute("hidden", "");
  console.log(page, '   vs.   ', window.location.protocol + '//' + window.location.hostname + '/Porfolio/index.html');

} else {
  document.querySelector(".bottom-links").removeAttribute("hidden")
  console.log(page, '   vs.   ', window.location.protocol  + '//' +  window.location.hostname + '/Porfolio/index.html');
}
