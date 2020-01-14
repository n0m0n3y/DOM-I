const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

let ctaBtn =document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];

  let myNav =
  document.querySelectorAll('a');
   myNav.forEach((item, index) => item.textContent = siteContent['nav'][`nav-item-${index++}`]);
  
 


  
   


// console.log(myNav);
let mainConImg = document.getElementById("middle-img");
mainConImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);



let bottomConH = document.querySelectorAll('h4');

bottomConH[0].textContent = siteContent['main-content']['features-h4'];
bottomConH[1].textContent = siteContent['main-content']['about-h4'];
bottomConH[2].textContent = siteContent['main-content']['services-h4'];
bottomConH[3].textContent = siteContent['main-content']['product-h4'];
bottomConH[4].textContent = siteContent['main-content']['vision-h4'];



console.log(bottomConH);

let bottomConP = document.querySelectorAll('p');
bottomConP[0].textContent = siteContent['main-content']['features-content'];
bottomConP[1].textContent = siteContent['main-content']['about-content'];
bottomConP[2].textContent = siteContent['main-content']['services-content'];
bottomConP[3].textContent = siteContent['main-content']['product-content'];
bottomConP[4].textContent = siteContent['main-content']['vision-content'];



bottomConP[5].textContent = siteContent['contact']['address'];
bottomConP[6].textContent = siteContent['contact']['phone'];
bottomConP[7].textContent = siteContent['contact']['email'];

bottomConP[8].textContent = siteContent['footer']['copyright'];




