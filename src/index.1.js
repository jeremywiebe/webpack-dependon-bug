console.log("Main loaded");

const run = () => {
  console.log("Main starting...");

  import("./shared.js").then((shared) => {
    shared();
    console.log("Main finished!");
  });
};

run().then(() => {
  console.log("Main async task done");
});
