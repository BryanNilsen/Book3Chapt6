// Build HTML elements
// const h1 = (title, style) => {
//   return `<h1 class="${style}">${title}</h1>`
// }


const h1 = (...props) => {
    console.log(props)
    return `<h1 class="${props[1]}">${props[0]}</h1>`
  }

const section = (...props) => {
    console.log(props)
  return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
  return `<aside class="${props[1]}">${props[0]}</aside>`
}

// Build a component composed of many smaller elements
const student = (name, clazz, info, status) => `
    <div id="student">
        ${h1(name, status)}
        ${section(clazz, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`

// Student Data
const students = [{
    name: "Chris Miller",
    class: "History",
    info: "Failed last exam",
    score: 59
  },
  {
    name: "Courtney Seward",
    class: "History",
    info: "Has completed all homework",
    score: 91
  },
  {
    name: "Garrett Ward",
    class: "History",
    info: "Wonderful at helping other students",
    score: 88
  },
  {
    name: "John Dulaney",
    class: "History",
    info: "Has never missed a class or exam",
    score: 92
  },
  {
    name: "Greg Lawrence",
    class: "History",
    info: "Sub-par performance all around",
    score: 64
  },
  {
    name: "Leah Duvic",
    class: "History",
    info: "Wonderful student",
    score: 97
  },
  {
    name: "Jesse Page",
    class: "History",
    info: "Smokes too much. Distracting.",
    score: 76
  },
  {
    name: "Kevin Haggerty",
    class: "History",
    info: "Falls asleep in class",
    score: 79
  },
  {
    name: "Max Wolf",
    class: "History",
    info: "Talks too much",
    score: 83
  },
  {
    name: "Lissa Goforth",
    class: "History",
    info: "Asks pointless, unrelated questions",
    score: 78
  },
  {
    name: "Tyler Bowman",
    class: "History",
    info: "When was the last time he attended class?",
    score: 48
  },
  {
    name: "Ray Medrano",
    class: "History",
    info: "Needs to contribute to in-class discussions",
    score: 95
  }
]

// Inject multiple student components into the DOM by executing the student function
students.forEach( (currentStudent) => {
  let studentComponent = ""
  if (currentStudent.score >= 60) {
    studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "passing")
  } else {
    studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "failing")
  }

  document.querySelector("#container").innerHTML += `
    ${studentComponent}
   `
})

// create element to accept element tag, class and content
const el = (...props) => {
    return `<${props[0]} class="${props[1]}">${props[2]}</${props[0]}>`
}
console.log(el("p", "bolder", "Paragraph text"))



// Create an unordered list element
const list = document.createElement('ul')
// Create a list item function for our list
function makeListItem(a, b) {
    let listItem = document.createElement('li');
    listItem.className = `${a}`;
    listItem.textContent = `${b}`;
    list.appendChild(listItem);
} 

makeListItem("stylez", "texty text")
console.log("make list item: ", makeListItem)

// example
// listItem.className = "president"
// listItem.textContent = "Barak Obama"

// Put the list item on the unordered list
// list.appendChild(listItem)
// console.log(list)


// const makeList = (a, b) {
//     listItem;
//     listItem.className = `${a}`;
//     listItem.textContent = `${b}`;
//     list.appendChild(listItem);
// }

// CREATING ELEMENTS

// const messagesArticle = document.querySelector("#messages");
// let messagesArticleList = messagesArticle.appendChild(list)
// console.log(messagesArticleList)


// messagesArticleList.appendChild(listItem)


// makeList("general", "washington")
// console.log(makeList)
// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

