//create a connectiom with the dom
const headerContainer = document.querySelector("#site-header");

//1- Check whether the current page is inside the pages folder.
const isPageInsidePagesFolder = window.location.pathname.includes("/pages/");

//2- Use the project root as the base for links from either directory level in that order. :)
const rootPath = isPageInsidePagesFolder ? "../" : "./";

headerContainer.innerHTML = `
  <header>
    <h1>Vanilla</h1>
    <div id="home-header-emoji">🌼</div>
    <nav>
      <ul>
        <li>
          <a href="${rootPath}index.html">Home</a>
        </li>
        <li>
          <a href="${rootPath}pages/start.html">Start</a>
        </li>
        <li>
          <a href="${rootPath}pages/position.html">Position</a>
        </li>
        <li>
          <a href="${rootPath}pages/others.html">Others</a>
        </li>
        <li>
          <a href="${rootPath}pages/grids.html">Grids</a>
        </li>
      </ul>
    </nav>
  </header>
`;
