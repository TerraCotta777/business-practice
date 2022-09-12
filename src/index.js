import "./styles/main.scss";

const burger = document.querySelector(".header__hamburger");
const mobileMenu = document.querySelector(".header__mobile-menu");
const closeMenu = document.querySelector(".header__close");
const headerLinks = document.querySelectorAll(
  ".header__mobile-menu .header__link"
);
const body = document.querySelector("body");
const buttonModalOpen = document.querySelector(".promo__button");
const modalWindow = document.querySelector(".modal");
const buttonModalClose = document.querySelector(".modal__close");
const modalSubmitButton = modalWindow.querySelector(".modal__button");
const inputsModal = modalWindow.querySelectorAll(".modal__input");
const modalSuccessMessage = modalWindow.querySelector(".modal__success");

const form = document.querySelector("form.form");
const inputsForm = form?.querySelectorAll(".form__input");
const formSubmitButton = form?.querySelector(".form__button");
const formSuccessMessage = form?.querySelector(".form__success");

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
    submit(inputsModal, modalSubmitButton, modalSuccessMessage);
  };

  buttonModalOpen?.addEventListener("click", openModal);
  buttonModalClose.addEventListener("click", closeModal);
  modalSubmitButton.addEventListener("click", modalSubmit);
};

const formHandle = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    submit(inputsForm, formSubmitButton, formSuccessMessage);
  };

  formSubmitButton?.addEventListener("click", formSubmit);
};

const validate = (input) => {
  if (input.placeholder == "Email" && input.value) {
    const mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!input.value.match(mailformat)) {
      input.classList.add("error");
      input.nextElementSibling.textContent = "введите валидный email";
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

const submit = (inputs, button, message) => {
  let isValid = true;
  inputs.forEach((input) => (isValid = isValid && validate(input)));
  if (isValid) {
    button.disabled = true;
    button.textContent = "идет отправка...";

    setTimeout(() => {
      button.disabled = false;
      message.style.display = "block";
      button.textContent = "Отправить";
      inputs.forEach((input) => (input.value = ""));
    }, 2000);
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
formHandle();
activePage();
