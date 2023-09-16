let toggleIcon = document.querySelector(".toggle-icon");
let verticalmenu = document.querySelector("header .vertical-menu");
let CloseVerticalMenu = document.querySelector(
  "header .vertical-menu>div img "
);
let verticalmenulLis = document.querySelectorAll("header ul li");
// let verticalmenulLisArr = Array.from(verticalmenulLis);
// let verticalmenulLis_A = document.querySelectorAll("header ul li a");
let verticalmenulLis_A = Array.from(
  document.querySelectorAll("header ul li a")
);

let Product_Num_Reduce = document.querySelector(".num-product .reduce");
let Product_Num_Increase = document.querySelector(".num-product .increase");
let Product_Num_Requered = document.querySelector(".num-product .requered");

let cart = document.querySelector("header .info .cart");
let CartNumOver = document.querySelector(".numover");
let cartImg = document.querySelector("header .info .cart>img");

let cartPopup = document.querySelector("header .info .cart .popap");
let cartcloser = document.querySelector("header .info .cart .popap>p img");
let layer = document.querySelector(".layer");
let cartrequerd = document.querySelector(".cart .requiered");
let totalprice = document.querySelector(".total");
let emptyP = document.querySelector("header .info .cart .cart-content .empty");
let contentRequered = document.querySelector(".cart-content .content-requered");
let deletcartContent = document.querySelector("header .chosen .delete");
// let imgslistLi = document.querySelectorAll(".imgslist li");z
let imgslistLis = Array.from(document.querySelectorAll(".imgslist li"));
let popupimgslistLis = Array.from(
  document.querySelectorAll(".mainImg-box-popup .imgslist li")
);
let popupimgslistLisimgs = Array.from(
  document.querySelectorAll(".mainImg-box-popup .imgslist li img")
);
let imgslistLisImgs = Array.from(document.querySelectorAll(".imgslist li img"));
let backButton = Array.from(document.querySelectorAll(".back"));
let nextButton = Array.from(document.querySelectorAll(".next"));
// 000000000000
let mainImg = document.querySelector(".collection .mainImg ");
let popupmainImg = document.querySelector(".mainImg-box-popup .mainImg ");
let countnumber = document
  .querySelector(".mainImg >img")
  .getAttribute("countNumber");

let checkoutButton = document.querySelector(".checkout");
let profileImg = document.querySelector(".profile img");
let mainImgBoxPopup = document.querySelector(".mainImg-box-popup");
let mainImgBoxPopupCloser = document.querySelector(
  ".mainImg-box-popup .close img"
);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// stop page from reloading after clicking on the vertical menu a element
verticalmenulLis_A.forEach((a) => {
  a.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

toggleIcon.onclick = () => {
  // verticalmenu.classList.add("open");
  addclicked(verticalmenu);
  addclicked(layer);
};
CloseVerticalMenu.onclick = () => {
  // verticalmenu.classList.remove("open");
  removedclickedfor_oneElement(verticalmenu);
  removedclickedfor_oneElement(layer);
};

// handling the clicked class after clicking on li in vertical menu
verticalmenulLis.forEach((a) => {
  a.addEventListener("click", () => {
    removeclickedARR(verticalmenulLis);
    addclicked(a);
  });
});
// changing the number after clicking on minuse button
Product_Num_Reduce.addEventListener("click", () => {
  if (Product_Num_Requered.innerHTML != 0) {
    // Product_Num_Requered.innerHTML = +Product_Num_Requered.innerHTML - 1;
    +Product_Num_Requered.innerHTML--;
    // all last 2 line do the same
  }
});
// changing the number after clicking on plus button
Product_Num_Increase.addEventListener("click", () => {
  // Product_Num_Requered.innerHTML = +Product_Num_Requered.innerHTML + 1;
  Product_Num_Requered.textContent = `${+Product_Num_Requered.innerHTML + 1}`;
  // +Product_Num_Requered.innerHTML++;
  // all last 3 line do the same
});

checkoutButton.onclick = () => {
  handlingCartContent();
};
// clicking on delete the cart
deletcartContent.onclick = () => {
  console.log("clicked");
  Product_Num_Requered.innerHTML = 0;
  handlingCartContent();
};

imgslistLis.forEach((li) => {
  li.onclick = () => {
    removeclickedARR(imgslistLis);
    addclicked(li);

    countnumber = imgslistLis.indexOf(li) + 1;

    // changing the big img after clicking on the small img
    mainImg.innerHTML = `<img countNumber=${countnumber} src="images/image-product-${countnumber}.jpg" alt="">`;
    popupmainImg.innerHTML = mainImg.innerHTML;

    popupimgslistLisimgs.forEach((img) => {
      if (img.getAttribute("countNumber") == countnumber) {
        img.parentNode.classList.add("clicked");
      }
    });
  };
});
popupimgslistLis.forEach((li) => {
  li.onclick = () => {
    removeclickedARR(popupimgslistLis);
    removeclickedARR(imgslistLis);
    addclicked(li);

    countnumber = popupimgslistLis.indexOf(li) + 1;

    // changing the big img after clicking on the small img
    mainImg.innerHTML = `<img countNumber=${countnumber} src="images/image-product-${countnumber}.jpg" alt="">`;
    popupmainImg.innerHTML = mainImg.innerHTML;
    imgslistLisImgs.forEach((img) => {
      if (img.getAttribute("countNumber") == countnumber) {
        img.parentNode.classList.add("clicked");
      }
    });
  };
});

// handling the big image sliding
backButton.forEach((button) => {
  button.onclick = () => {
    if (countnumber != 1) {
      +countnumber--;

      // changing the main img "the big image"
      mainImg.innerHTML = `<img countNumber=${+countnumber} src="images/image-product-${+countnumber}.jpg" alt="">`;
      popupmainImg.innerHTML = mainImg.innerHTML;
      // to handle the the clicked li after clicking on nextbutton
      imgslistLis.forEach((li) => {
        removeclickedARR(imgslistLis);
      });
      imgslistLisImgs.forEach((img) => {
        if (img.getAttribute("countNumber") == countnumber) {
          img.parentNode.classList.add("clicked");
        }
      });
    }
  };
});
nextButton.forEach((button) => {
  button.onclick = () => {
    if (countnumber != 4) {
      +countnumber++;

      // changing the main img "the big image"
      mainImg.innerHTML = `<img countNumber=${+countnumber} src="images/image-product-${+countnumber}.jpg" alt="">`;
      popupmainImg.innerHTML = mainImg.innerHTML;
      // to handle the the clicked li after clicking on nextbutton
      imgslistLis.forEach((li) => {
        removeclickedARR(imgslistLis);
      });
      imgslistLisImgs.forEach((img) => {
        if (img.getAttribute("countNumber") == countnumber) {
          img.parentNode.classList.add("clicked");
        }
      });
    }
  };
});

mainImg.onclick = () => {
  const width = window.innerWidth;
  if (width > 992) {
    addclicked(mainImgBoxPopup);
    addclicked(layer);
    layer.style.backgroundColor = "rgb(0 0 0 / 80%)";
  } else {
    removedclickedfor_oneElement(mainImgBoxPopup);
    removedclickedfor_oneElement(layer);
    layer.style.backgroundColor = "rgb(0 0 0 / 30%)";
  }
};

mainImgBoxPopupCloser.onclick = () => {
  mainImgBoxPopup.style.display = "none";
  removedclickedfor_oneElement(layer);
  layer.style.backgroundColor = "rgb(0 0 0 / 30%)";
};

profileImg.onclick = () => {
  profileImg.classList.toggle("clicked");
};
layer.onclick = () => {
  mainImgBoxPopup.style.display = "none";
  layer.style.backgroundColor = "rgb(0 0 0 / 30%)";
  removedclickedfor_oneElement(cartPopup);
  removedclickedfor_oneElement(layer);
  removedclickedfor_oneElement(verticalmenu);
};
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// handling the popup while clicking on the cart img

cartImg.addEventListener("click", () => {
  addclicked(cartPopup);
  addclicked(layer);
});
CartNumOver.addEventListener("click", () => {
  addclicked(cartPopup);
  addclicked(layer);
});
cartcloser.addEventListener("click", () => {
  // cartPopup.classList.toggle("clicked");
  removedclickedfor_oneElement(cartPopup);
  removedclickedfor_oneElement(layer);
});

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function removeclickedARR(eles) {
  eles.forEach((e) => {
    e.classList.remove("clicked");
  });
}
function addclicked(e) {
  e.classList.add("clicked");
}
function removedclickedfor_oneElement(e) {
  e.classList.remove("clicked");
}

function handlingCartContent() {
  if (Product_Num_Requered.innerHTML == 0) {
    emptyP.style.display = "block";
    contentRequered.style.display = "none";

    removedclickedfor_oneElement(cart);
  } else {
    emptyP.style.display = "none";
    contentRequered.style.display = "block";
    cartrequerd.innerHTML = Product_Num_Requered.innerHTML;
    totalprice.innerHTML = `$${cartrequerd.innerHTML * 125}`;

    removedclickedfor_oneElement(cart);
    addclicked(cart);
    CartNumOver.innerHTML = Product_Num_Requered.innerHTML;
  }
}

handlingCartContent();
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// with chat GPT help    some code to handle verticalmenu while resizing the page  need to be reviewed
function adjustStyle() {
  const width = window.innerWidth;

  if (width > 768 && cartPopup.classList.contains("clicked")) {
    layer.classList.add("clicked");
  } else if (width > 768 && !cartPopup.classList.contains("clicked")) {
    layer.classList.remove("clicked");
  }
  if (width > 768 && verticalmenu.classList.contains("clicked")) {
    verticalmenu.classList.remove("clicked");
  }
  if (width > 992 && mainImgBoxPopup.classList.contains("clicked")) {
    layer.classList.add("clicked");
  } else if (width > 992 && !mainImgBoxPopup.classList.contains("clicked")) {
    verticalmenu.classList.remove("clicked");
  }
  if (width <= 992) {
    removedclickedfor_oneElement(mainImgBoxPopup);
  }
}

window.addEventListener("resize", adjustStyle);
adjustStyle();
