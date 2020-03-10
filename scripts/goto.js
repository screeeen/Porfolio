goto = (direction) => {
  // const URL = "https://screeeen.github.io/Porfolio/" + direction + '.html'
  console.log('hostname',window.location.hostname);
  const URL =  '/Porfolio/' + direction + '.html'
  console.log('url formatted',URL);
   
  return URL;
}