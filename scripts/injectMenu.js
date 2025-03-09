const page = window.location.href;
const pictureURL = "/Porfolio/images/Miguel_Alva_small.jpg";

showButton = () => {
  const hello = "HELLO";
  const back = " ‹ BACK";
  let text = "";

  if (
    page ===
      window.location.protocol +
        "//" +
        window.location.hostname +
        "/Porfolio/index.html" ||
    window.location.href ===
      window.location.protocol + "//" + window.location.hostname + "/Porfolio/"
  ) {
    text = hello;
  } else {
    text = back;
  }
  return text;
};

document.body.querySelector(".container").innerHTML += `
<div class='c3'>
<a href="javascript:window.location=goto('index')">
<h1 class="title">${showButton()}</h1>
</a>  
</div>

<div class="c2">
      <info-section>
        <img src=${pictureURL} alt="">
        <br>
        <p>How are you? I'm <span>Miguel</span>, and I specialize in <span>frontend development</span>, with a passion for <span>interaction design</span>. I also have experience in <span>UX/UI design and video games design</span>.
        
        </p>
        <br>


        <div class="col">
          <p><a class="mylink" href="https://www.linkedin.com/in/miguel-angel-alvarez-2ba1b2a/" target="_blank">Linkedin Profile</a></p>
          <p><a class="mylink" href="http://screenimplosion.com/" target="_blank">Videogames </a></p>
          <p><a  class="mylink" href="https://github.com/screeeen" target="_blank">Github</a></p>
          <p><a  class="mylink" href="../Porfolio/images/resume.pdf"
              target="_blank">Resume</a></p>
        </div>
      </info-section>

      <div class="bottom-links">
      <hr>
      <div class=" contact-fila" style="background-color:transparent">
      <a href="mailto:miguel@screenimplosion.com?Subject=Hi!" target="_top">
              <h2>GET IN TOUCH</h2>
      </a>
    </div>

    <a href="javascript:window.location=goto('medical')">
    <div class="fila">
        <div class="marker">
            <p>CODE</p>
        </div>
        <h2 class="right">MEDICAL VIEWER</h2>
    </div>
</a>
    
    <a href="javascript:window.location=goto('inflight-vr')">
    <div class="fila">
        <div class="marker">
            <p>PRODUCT DESIGN</p>
        </div>
        <h2 class="right">INFLIGHT VR</h2>
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

<a href="javascript:window.location=goto('eh')">
    <div class="fila">
        <div class="marker">
            <p>GAME DESIGN</p>
        </div>
        <h2 class="right">EMERGENCY HEROES</h2>
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
`;

const urlIndex =
  window.location.protocol +
  "//" +
  window.location.hostname +
  "/Porfolio/index.html";

const urlPorfolio =
  window.location.protocol + "//" + window.location.hostname + "/Porfolio/";

if (
  page === "http://127.0.0.1:5501/index.html" ||
  page === urlIndex ||
  window.location.href === urlPorfolio
) {
  document.querySelector(".bottom-links").setAttribute("hidden", "");
  document.querySelector(".c2").style.order = "2";
} else {
  document.querySelector(".bottom-links").removeAttribute("hidden");
  if (window.matchMedia("(min-width: 600px)").matches) {
    document.querySelector(".c2").style.order = "3";
    document.querySelector(".c2").style.border = "2px solid blue";
  } else {
    document.querySelector(".c2").style.order = "2";
    document.querySelector(".c2").style.border = "2px solid red";
  }
}
