// let heading = document.createElement("h1");

// heading.textContent = "Hello World by Javascript!";

// let root = document.querySelector(".root");

// root.appendChild(heading);

// let element = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement("div",
//         {id: "child"},
//         React.createElement("h1",
//             {id: "heading"},
//             "Hello World by React")
//         )
//     );

// let root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(element);

let element = React.createElement("div",{id: "parent"},
            [
                React.createElement("div",{id: "child1"},
                    [
                        React.createElement("h1",{id: "c1"},"I am the First Child"),
                        React.createElement("h2",{id: "c2"},"I am the Second Child")
                    ]
                ),
                React.createElement("div",{id: "child2"},
                    [
                        React.createElement("h3",{id: "c3"},"I am the Third Child"),
                        React.createElement("h4",{id: "c4"},"I am the Fourth Child")
                    ]
                )
            ]
            );

 let root = ReactDOM.createRoot(document.querySelector(".root"));

 root.render(element);
