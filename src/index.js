console.log("Main loaded");

const run = () => {
  console.log("Main starting...");

  import("./shared.js")
    .then((shared) => shared.default)
    .then((shared) => {
      shared();
      console.log("Main finished!");
    });
};

run();
