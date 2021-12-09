// root element
export const root = document.getElementById("root");
// top menus
export const menuSignout = document.getElementById("menu-signout");
export const menuHome = document.getElementById("menu-home");

export const menuSignIn = document.getElementById("menu-signin");
// forms
export const formSignIn = document.getElementById("form-signin");
export const formSignup = document.getElementById("form-signup")
export const formSignupPasswordError = document.getElementById("form-signup-password-error");
export const formCreateAccount = document.getElementById("form-create-account");
export const formCreateAccountError = {
  email: document.getElementById("create-account-error-email"),
  password: document.getElementById("create-account-error-password"),
  passwordConfirm: document.getElementById(
    "create-account-error-passwordConfirm"
  ),
};


// modals
export const modalSigninForm = new bootstrap.Modal(
    document.getElementById("modal-signin-form")
  );
export const modalInfo = new bootstrap.Modal(
  document.getElementById("modal-info"),
  { backdrop: "static" }
);
export const modalInfoTitle = document.getElementById("modal-info-title");
export const modalInfoBody = document.getElementById("modal-info-body");
export const modalSignUp = new bootstrap.Modal(document.getElementById("modal-create-account"), {backdrop: 'static'});
