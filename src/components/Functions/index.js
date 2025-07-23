import { useEffect, useRef } from "react";

const countersData = [
    { id: 1, label: "Apples", count: 5 },
    { id: 2, label: "Oranges", count: 3 },
    { id: 3, label: "Bananas", count: 0 },
];

function createCounterWidget(container, data) {
    // Create wrapper div
    const widget = document.createElement("div");
    widget.style.border = "2px solid #333";
    widget.style.padding = "15px";
    widget.style.width = "220px";
    widget.style.textAlign = "center";
    widget.style.fontFamily = "Arial, sans-serif";
    widget.style.margin = "10px";
    widget.style.borderRadius = "8px";
    widget.style.backgroundColor = "#f0f0f0";
    widget.style.display = "inline-block";

    // Title
    const title = document.createElement("h3");
    title.textContent = data.label;
    title.style.marginBottom = "10px";
    widget.appendChild(title);

    // Count display
    const countDisplay = document.createElement("p");
    countDisplay.textContent = "Count: " + data.count;
    countDisplay.style.fontSize = "22px";
    countDisplay.style.marginBottom = "10px";
    widget.appendChild(countDisplay);

    // Buttons container
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.justifyContent = "space-between";

    // Buttons
    const btnIncrement = document.createElement("button");
    btnIncrement.textContent = "+";
    btnIncrement.style.flex = "1";
    btnIncrement.style.marginRight = "5px";

    const btnDecrement = document.createElement("button");
    btnDecrement.textContent = "-";
    btnDecrement.style.flex = "1";
    btnDecrement.style.marginRight = "5px";

    const btnReset = document.createElement("button");
    btnReset.textContent = "Reset";
    btnReset.style.flex = "1";

    btnContainer.appendChild(btnIncrement);
    btnContainer.appendChild(btnDecrement);
    btnContainer.appendChild(btnReset);
    widget.appendChild(btnContainer);

    // Current count variable
    let count = data.count;

    // Event listeners to update count display
    btnIncrement.addEventListener("click", () => {
        count++;
        countDisplay.textContent = "Count: " + count;
    });

    btnDecrement.addEventListener("click", () => {
        count--;
        countDisplay.textContent = "Count: " + count;
    });

    btnReset.addEventListener("click", () => {
        count = 0;
        countDisplay.textContent = "Count: " + count;
    });

    container.appendChild(widget);
}

const Function = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        container.innerHTML = "";

        countersData.forEach((data) => createCounterWidget(container, data));
    }, []);
    // Function Declaration
    function greet(name) {
        return `Hello , How are you ${name} ??`;
    }
    console.log("================================Function Declaration===========>", greet("Rakesh Patel"));

    //Function Expression
    const greetExp = function (name) {
        return `Hello , How are you ${name} ??`;
    }
    console.log("=====================================Function Expression=======================================", greetExp("Alice"));

    //Arrow Functions
    const greetArrow = (name) => `Hello , How are you ${name} ?`;
    console.log("Arrow Function", greetArrow("Hemal Patel"));

    //Higher Order Function
    function applyFunction(fun, num) {
        return fun(num);
    }
    const double = (x) => x * 2;
    console.log("======================================Higher Order Function==================================", applyFunction(double, 6));
    function testScope() {
        if (true) {
            const count = 10;
            var x = 10;  // `var` is function-scoped
            let y = 20;  // `let` is block-scoped
            console.log("========================Y can be accessed here=========================", y);
            console.log("=============================Count can be accessed here===================================", count);
        }
        console.log(x); // Output: 10
        // console.log(count); // Error: count is not defined , count can not be accessed here
        // console.log(y); // Error: y is not defined , y can not be accessed here
    }
    testScope();
    const handleClick = () => {
        console.log("%cHey developer! Open the console to see more.", "color: green; font-size: 16px;");
        alert("Open your browser's developer console (F12 or Ctrl+Shift+I) to see the message.");
    };
    //start ES5
    //Arrays and Array Methods
    var arr = [1, 2, 3];
    arr.push(4); // [1, 2, 3, 4]
    arr.pop();   // removes 4
    arr.forEach(function (item) {
        console.log(item);
    });
    var doubled = arr.map(function (item) {
        return item * 2;
    }); // [2, 4, 6]
    console.log("======================================doubled====================================>", doubled);
    console.log(x); // undefined due to hoisting
    var x = 5;

    hoistedFunction(); // works due to function hoisting
    function hoistedFunction() {
        console.log("I am hoisted");
    }
    //Objects and Prototypes
    var person = {
        name: "Bob",
        greet: function () {
            console.log("Hello " + this.name);
        }
    };

    person.greet(); // Hello Bob

    // Prototypal inheritance example
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function () {
        console.log("Hi " + this.name);
    };

    var alice = new Person("Alice");
    alice.greet(); // Hi Alice
    //The this Keyword
    var obj = {
        name: "Obj",
        getName: function () {
            return this.name;
        }
    };
    console.log(obj.getName()); // "Obj

    function globalFunc() {
        return this;
    }
    console.log(globalFunc() === window);
    // Closures
    function outer() {
        var count = 0;
        return function () {
            count++;
            return count;
        };
    }

    var increment = outer();
    console.log(increment()); // 1
    console.log(increment()); // 2
    //Error Handling: try-catch
    try {
        throw new Error("Oops");
    } catch (e) {
        console.log("Caught error:", e.message);
    }
    const dupArray = ["apple", "grapes", "banana", "pineapple", "guava"];
    for (let i = 0; i < dupArray.length; i++) {
        console.log("=============================== items ========================>", dupArray[i])
    }
    const jsonData = '{"name": "Alice", "age": 30}';
    const parsedObj = JSON.parse(jsonData);
    console.log("========================================= JSON parsedObj ============================>", parsedObj);
    console.log("================================parsed obj to stringfy ========================>", JSON.stringify(parsedObj));
    //end ES5

    //start DOM Manipulation in JavaScript
    const btn = document.getElementById("btn");
    const output = document.getElementById("output");

    console.log("============================ btn ============================>", btn);
    console.log("=============================== output =========================>", output);

    btn?.addEventListener("click", function () {
        output.innerHTML = "Button Clicked"
    })
    //end DOM Manipulation 
    // start Understand JavaScript JSON & Events
    // JavaScript Object
    const user = {
        name: "Alice",
        age: 25,
        isActive: true
    };

    // Convert to JSON string
    const jsonString = JSON.stringify(user);
    console.log("============================ jsonString ==================================>", jsonString);

    // Convert back to JavaScript object
    const parsedUser = JSON.parse(jsonString);
    console.log("==================================== parsedUser ================================>", parsedUser.name); // Alice

    document?.getElementById("saveBtn")?.addEventListener("click", () => {
        const name = document.getElementById("nameInput").value;

        const userData = { username: name, createdAt: new Date().toISOString() };

        const jsonData = JSON.stringify(userData, null, 2); // pretty-print
        document.getElementById("jsonOutput").textContent = jsonData;
        console.log("========================================== jsonData ======================================>", jsonData);
    });

    // end Understand JavaScript JSON & Events

    // start Web Storage API 
    localStorage.setItem("key", "value");     // save data
    localStorage.getItem("key");              // read get data
    // localStorage.removeItem("key");        // delete key
    // localStorage.clear();  // clear all
    const employee = {
        name: "Ketan Ramani",
        role: "Developer",
        age: 24
    };

    localStorage.setItem("user", JSON.stringify(employee));

    const userData = JSON.parse(localStorage.getItem("user"));
    console.log("============================================= userData name web storage =================================>", userData.name);
    // Methods to Use with sessionStorage
    sessionStorage.setItem("username", "Alice");
    const name = sessionStorage.getItem("username");
    console.log("============================== sessionStorageName ==============================", name);
    // sessionStorage.removeItem("username"); // delet key
    //sessionStorage.clear(); //clear all 
    // end Web Storage API 

    // start Step-by-Step: Shallow Copy Example
    const original = {
        name: "Renish",
        details: {
            age: 24,
            city: "surat"
        }
    }

    const shallowCopy = { ...original };
    console.log("======================== shallow copy ===================", shallowCopy);
    // changed nested object age value
    shallowCopy.details.age = 32; // age value changed to 32 from actual 24 
    // log the nested changed value 
    console.log(" ======================  shallowCopy.details.age ================", shallowCopy.details.age);
    //end Step-by-Step: Shallow Copy Example

    //start Deep Copy
    const actual = {
        name: "Alice",
        details: {
            age: 25,
            city: "Surat"
        }
    };

    // Deep copy using JSON method
    const deepCopy = JSON.parse(JSON.stringify(actual));

    // Change deep copy's nested value
    deepCopy.details.age = 30;

    console.log("=================== original.details.age deep copy==============", actual.details.age);

    const student = {
        name: "Renish",
        address: {
            city: "Surat",
            zip: 395007
        }
    };

    const personShallowCopy = { ...student };
    // personShallowCopy.address.city = "Rajkot";
    console.log("=================== city of std==============>", personShallowCopy.address.city);

    const deepCopyOfStudent = JSON.parse(JSON.stringify(student));

    deepCopyOfStudent.address.city = "rajjjjkottttt";

    console.log("====================== deepCopyOfStudent =========>", deepCopyOfStudent);

    //end Deep Copy

    // start Synchronous and Asynchronous JS
    console.log("Time Created At", new Date().toISOString());

    console.log("1");

    setTimeout(() => {
        console.log("2");
    }, 2000); // 2 seconds

    console.log("3");

    useEffect(() => {
        runApp();
    }, []);

    function loadSettings() {
        console.log("1. Loading settings (sync) ========================= 111111111111 =================");
    }

    async function fetchUser() {
        console.log("2. Fetching user... ========================== 222222222222 ==============================");
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("3. User data fetched [] ======================== 33333333333 =============================");
    }

    async function fetchPosts() {
        console.log("4. Fetching posts...  =============================== 44444444444 =================================");
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("5. Posts fetched [] ==================================== 55555555555 =================================");
    }

    async function runApp() {
        loadSettings(); // sync

        await fetchUser(); // async (takes 2 sec)
        await fetchPosts(); // async (takes 1 sec)

        console.log("6. All done ============================ 6666666666 ========================================");
    }

    //end Synchronous and Asynchronous JS



    return (
        <div>
            <div>
                <h3>JavaScript Function</h3>
                <p>Please to check this module open developer console tool</p>
                <button onClick={handleClick}>Click to Check Console</button>
                <button id="btn">Click Me</button>
                <p id="output"></p>
                {/* DOM Manupulation Concept */}
                <h3>DOM Manipulation</h3>
                <div ref={containerRef} style={{ textAlign: "center" }} />
                <input id="nameInput" placeholder="Enter name" />
                <button id="saveBtn">Save</button>
                <pre id="jsonOutput"></pre>
            </div>
        </div>
    )
}

export default Function;