import * as Element from "./element.js";
import * as Route from "../controller/route.js";
import * as Util from "./util.js";
import * as Auth from "../controller/auth.js";

export function addEventListeners() {
  Element.menuHome.addEventListener("click", async () => {
    history.pushState(null, null, Route.routePathnames.HOME);
    const label = Util.disableButton(Element.menuHome);
    await home_page();
    Util.enableButton(Element.menuHome, label);
  });
}


export async function home_page() {
    await Util.sleep(150);
    if(!Auth.currentUser) {
        Element.root.innerHTML = `<h1>Sign in to get started.</h1>`;
        return;
    }

    let html = `
        Input image 1:<span><input id="form-add-product-image-button" type="file" value="upload"/></span>
    `;

    Element.root.innerHTML = html; 

}
