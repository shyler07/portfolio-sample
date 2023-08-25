

//dark mode

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector("#checkbox");
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

  const navToggle = document.querySelector(".nav-toggle");
  const linksContainer = document.querySelector(".links-container");
  const links= document.querySelector(".links");
  
  navToggle.addEventListener("click", function(){
   // linksContainer.classList.toggle('show-links')
  
  // to get the height of the element // dynamic 
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksheight = links.getBoundingClientRect().height;
  
  
    if (containerHeight === 0){
      linksContainer.style.height = `${linksheight}px`
    }else{
      linksContainer.style.height = 0;
    }
  
  

  })
  
  // fixed navbar
  const navBar = document.querySelector("#nav")
  const topLink = document.querySelector(".top-link")
  
  window.addEventListener("scroll", function(){
    const scrollHeight = window.scrollY;
   //const scrollHeight =  window.pageYOffset;
   const navHeight =navBar.getBoundingClientRect().height;
  
    if(scrollHeight > navHeight){
      navBar.classList.add('fixed-nav')
  
    }else{
      navBar.classList.remove('fixed-nav')
    }
  
     
    if(scrollHeight > 500){
      topLink.classList.add('show-links');  
    }else{
      topLink.classList.remove('show-links');
      
    }
  })


});


  // smooth scroll the a links
  
  const scrollLink = document.querySelectorAll(".scroll-link");
  
  scrollLink.forEach(function (link){
    link.addEventListener("click", function(e){
    // prevent default
      e.preventDefault();
  
      // navigate to specific spot of link
      // .slice - extract or cut a section of a string without modifyng the original string
      // get rid the # in #about, #services etc
      const linkID = e.currentTarget.getAttribute("href").slice(1);
      const elementLink = document.getElementById(linkID);
       
     
        //const linkID = e.currentTarget.getAttribute("href");
     // const elementLink = document.querySelector(linkID);
  
    //console.log(linkID)
    // calculate the height // when click the link go to specific fix location
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navBar.classList.contains('fixed-nav')
  
      let position = elementLink.offsetTop - navHeight;
  
      //for desktop size
      if(!fixedNav){
        position = position - navHeight;
      }
  
       //for mobile size
      if(navHeight > 82){
        position = position + containerHeight;
      }
  
      window.scrollTo ({
        left: 0, top: position,
      });
      linksContainer.style.height = 0
    });
  });


  // dynamic projects


  const projectList = [
    {
      id: 1,
      title: "Random Qoutes",
      category: "Vanilla JS",
      img: "./dist/asset/atom.png",
      desc: "Get randowm qoutes using Fetch and API",
    }

  ];





 // load items
  function displayMenuItems(menuItemsArray){
  
    let sectionCenter = document.querySelector('.section-center');
    let displayMenu = menuItemsArray.map(function(item){

      //console.log(item) // display all item in menuList
       // return item;
  
        return ` <article class="menu-item">
                    <h4>${item.title}</h4>
                    <img class ="photo" alt="${item.title}" src="${item.img}">
                <div class="item-info">
                  <p class="item-text">${item.desc}</p>
                </div>
                </article> `
  
      });
  
       displayMenu = displayMenu.join("")
      sectionCenter.innerHTML = displayMenu


  }


  window.addEventListener('DOMContentLoaded', function(){
    //console.log("shake and bake")
    //parameter item get the items in menuList
    displayMenuItems(projectList)
  
    
  });





