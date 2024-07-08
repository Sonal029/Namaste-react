// const  heading = React.createElement("h1",{},"Hello from react")  // {} is where we will give attribute to  a tag
const heading = React.createElement("h1",{id: "heading"},"Hello from React!")
// Props are children and attributes
// React.creatElement returns an object or it creates an object
const root =  ReactDOM.createRoot(document.getElementById("root"));
   


//  To create nested structure

{/* <div id= "parent">
    <div id="child">
      <h1>Hi I am h1 tag</h1>
    </div>
</div> */}

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"} ,
         React.createElement("h1",{}, "Hi from heading!!")))

{/* <div id= "parent">
    <div id="child">
      <h1>Hi I am h1 tag</h1>
      <h2>Hi I am h2 tag</h2>
    </div>
</div> */}
const parent1 = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"} ,
         [React.createElement("h1",{}, "Hi from heading!!"),React.createElement("h2",{}, "Hi from heading2!!")]))

{/* <div id= "parent">
    <div id="child">
      <h1>Hi I am h1 tag</h1>
      <h2>Hi I am h2 tag</h2>
    </div>
    <div id="child2">
      <h1>Hi I am h1 tag</h1>
      <h2>Hi I am h2 tag</h2>
    </div>
</div> */}

const parent3= React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child"} ,
         [React.createElement("h1",{}, "Hi from heading!!"),
            React.createElement("h2",{}, "Hi from heading2!!")])
        , React.createElement("div", {id: "child2"} ,
            [React.createElement("h1",{}, "Hi from heading!!"),
               React.createElement("h2",{}, "Hi from heading2!!")])])


root.render(parent3);
// it is responsible to take this object and put it up to the root tag, it converts the object into the h1 tag
//  If we have something in root from before, it gets replaced 



// Library->  It can work independently on a part of the application

// Framework-> It has all loads of things