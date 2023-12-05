const root = document.documentElement;
const toggle = document.querySelector(".toggle");
const spaceBtn = document.querySelector("#space");
const backSpc = document.querySelector("#backspc");
const display = document.querySelector(".display");
toggle.addEventListener("click", () => {
  if (toggle.value === "Light") {
    toggle.value = "Dark";
    root.style.setProperty("--background-clr", "#202020");
    root.style.setProperty("--input-clr", "#fff");
    root.style.setProperty(
      "--boxshadow-out",
      "  4px 4px 6px #171717, -4px -4px 6px #292929"
    );
    root.style.setProperty(
      "--boxshadow-in",
      " inset 5px 5px 7px #191919,  inset -5px -5px 7px #272727"
    );
  } else {
    toggle.value = "Light";
    root.style.setProperty("--background-clr", "#dde1e7");
    root.style.setProperty("--input-clr", "grey");
    root.style.setProperty(
      "--boxshadow-out",
      "  -3px -3px 7px #ffffff73,2px 2px 5px rgba(94, 104, 121, 0.288)"
    );
    root.style.setProperty(
      "--boxshadow-in",
      "inset -3px -3px 7px #ffffff73,inset 2px 2px 5px rgba(94, 104, 121, 0.288)"
    );
  }
});

function disp(result) {
  form.textarea.value = form.textarea.value + result;
  spaceBtn.onclick = () => {
    form.textarea.value += " ";
  };
  display.ondblclick = () => {
    form.textarea.value = "";
  };
  backSpc.onclick = () => {
    form.textarea.value = form.textarea.value.substring(
      0,
      form.textarea.value.length - 1
    );
  };
}
