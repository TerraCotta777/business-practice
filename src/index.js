import "./styles/main.scss";

const burger = document.querySelector(".header__hamburger");
const mobileMenu = document.querySelector(".header__mobile-menu");
const closeMenu = document.querySelector(".header__close");
const headerLinks = document.querySelectorAll(
  ".header__mobile-menu .header__link"
);
const body = document.querySelector("body");
const buttonModalOpen = document.querySelectorAll("button.button");
const modalWindow = document.querySelector(".modal");
const buttonModalClose = document.querySelector(".modal__close");
const modalSubmitButton = document.querySelector(".modal__button");
const inputsModal = document.querySelectorAll(".modal__input");
const modalSuccessMessage = document.querySelector(".modal__success");

const navLinks = document.querySelectorAll(".header__nav a");

const menuSlide = () => {
  const openMobileMenu = () => {
    mobileMenu.classList.add("active");
    headerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu;
        closeMobileMenu();
      });
    });
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove("active");
  };

  burger.addEventListener("click", openMobileMenu);
  closeMenu.addEventListener("click", closeMobileMenu);
};

const modal = () => {
  const openModal = (e) => {
    e.preventDefault();
    modalWindow.classList.add("active");
    body.classList.add("modal-open");
  };

  const closeModal = () => {
    modalWindow.classList.remove("active");
    body.classList.remove("modal-open");
    inputsModal.forEach((input) => {
      input.value = "";
      input.classList.remove("error");
      modalSuccessMessage.style.display = "none";
    });
  };

  const modalSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    inputsModal.forEach((input) => (isValid = isValid && validate(input)));
    if (isValid) {
      modalSubmitButton.disabled = true;
      modalSubmitButton.textContent = "идет отправка...";

      setTimeout(() => {
        modalSubmitButton.disabled = false;
        modalSuccessMessage.style.display = "block";
        modalSubmitButton.textContent = "Отправить";
      }, 2000);
    }
  };

  buttonModalOpen.forEach((button) => {
    button.addEventListener("click", openModal);
  });
  buttonModalClose.addEventListener("click", closeModal);
  modalSubmitButton.addEventListener("click", modalSubmit);
};

const validate = (input) => {
  if (input.placeholder == "Email" && input.value) {
    const mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!input.value.match(mailformat)) {
      input.classList.add("error");
      input.nextElementSibling.textContent = "enter valid email address";
      return false;
    } else {
      input.classList.remove("error");
      return true;
    }
  }
  if (input.value.trim() === "") {
    input.nextElementSibling.textContent = "поле обязательно*";
    input.classList.add("error");
    return false;
  } else {
    input.classList.remove("error");
    return true;
  }
};

const activePage = () => {
  let page = window.location.href.replace(/^(?:\/\/|[^/]+)*\//, "");
  navLinks.forEach((link) => {
    let linkHref = link.href.replace(/^(?:\/\/|[^/]+)*\//, "");
    if (linkHref === page) {
      link.classList.add("header__link_active");
    }
  });
};

menuSlide();
modal();
activePage();
