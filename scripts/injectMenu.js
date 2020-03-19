const page = window.location.href;
const pictureURL = '/Porfolio/images/Miguel_Alva_small.jpg';


showButton = () => {
  const hello = "HELLO";
  const back = " ‹ BACK"
  let text = ''

  if ((page === window.location.protocol  + '//' + window.location.hostname + '/Porfolio/index.html') || (window.location.href === window.location.protocol  + '//' + window.location.hostname + '/Porfolio/')) {
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
          <p><a href="https://www.dropbox.com/s/jl18d97acfb189l/000_Miguel_Angel_Alvarez_CV_.pdf?dl=0"
              target="_blank">resume</a></p>

        </div>
      </info-section>
      <div class="bottom-links">
      <hr>
      <div class="fila contact-fila" style="background-color:transparent">
      <a href="mailto:miguel@screenimplosion.com?Subject=Hi!" target="_top">
              <h2>GET IN TOUCH</h2>
      </a>
    </div>
    
    <a href="javascript:window.location=goto('inflight-vr')">
    <div class="fila">
        <div class="marker">
            <p>PRODUCT DESIGN</p>
        </div>
        <h2 class="right">INFLIGHT VR</h2>
    </div>
</a>
<a href="javascript:window.location=goto('eh')">
    <div class="fila">
        <div class="marker">
            <p>GAME DESIGN</p>
        </div>
        <h2 class="right">EMERGENCY HEROES</h2>
    </div>
</a>

<a href="javascript:window.location=goto('Belote')">
    <div class="fila">
        <div class="marker">
            <p>UX DESIGN</p>
        </div>
        <h2 class="right">BELOTE</h2>
    </div>
</a>

<a href="javascript:window.location=goto('indie-games')">
    <div class="fila">
        <div class="marker">
            <p>GAME DESIGN</p>
        </div>
        <h2 class="right">INDIE GAMES</h2>
    </div>
</a>

<a href="javascript:window.location=goto('Ilustration')">
    <div class="fila">
        <div class="marker">
            <p>CREATIVE</p>
        </div>
        <h2 class="right">ANIMATIONS</h2>
    </div>
</a>

<a href="javascript:window.location=goto('lectures')">
    <div class="fila">
        <div class="marker">
            <p>LECTURES</p>
        </div>
        <h2 class="right">TALKS</h2>
    </div>
</a>
    </div>
    </div>
  </div>
`;

if ((page === window.location.protocol + '//' + window.location.hostname + '/Porfolio/index.html')|| (window.location.href === window.location.protocol  + '//' + window.location.hostname + '/Porfolio/')) {
  document.querySelector(".bottom-links").setAttribute("hidden", "");
} else {
  document.querySelector(".bottom-links").removeAttribute("hidden")
}
