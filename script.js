// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "hello world from React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi iam h1 tag"),
    React.createElement("h2", {}, "hi iam h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi iam h1 tag"),
    React.createElement("h2", {}, "hi iam h2 tag"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
// const heading2 = React.createElement("h4", {}, "React is an js library");
// const root2 = ReactDOM.createRoot(document.querySelector(".demo"));
// root2.render(heading2);
