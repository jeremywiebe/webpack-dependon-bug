console.log("Shared loaded");

const init = () => {
  console.log("Shared run");
  const el = document.createElement("h1");
  el.innerText = "Shared package has loaded and run";
  document.body.appendChild(el);
};

export default init;
