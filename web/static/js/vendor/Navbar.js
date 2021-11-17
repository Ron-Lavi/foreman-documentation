var Navbar = `<nav>
<img class="logo" src="https://docs.theforeman.org/index_assets/foremanhelmet.svg" />
<button type="button" class="btn-hamburger" data-action="nav-toggle">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</button>
<ul class="nav-menu">
  <li class="nav-item"><a href="#">Home</a></li>
  </li>`
  + navItems.map(function(navItem){ return(
    `<li class="nav-item dropdown">
        <a href="#" data-action="dropdown-toggle">`+ navItem.title + `</a>
        <div class="dropdown-menu">`
        + navItem.items.map(function(item){ return(
            `<a class="dropdown-item" href=`+item.href+`>`+item.title+`</a>`
        )})
        +`</div>
    </li>`
      )})
+`</ul>
</nav>`;

var addNavbarListeners = () => {
    let nav = document.querySelector("nav");
    let dropdown = nav.querySelector(".dropdown");
    let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
    let navToggle = nav.querySelector("[data-action='nav-toggle']");
    
    dropdownToggle.addEventListener("click", () => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      } else {
        dropdown.classList.add("show");
      }
    });
    
    navToggle.addEventListener("click", () => {
      if (nav.classList.contains("opened")) {
        nav.classList.remove("opened");
      } else {
        nav.classList.add("opened");
      }
    });
}