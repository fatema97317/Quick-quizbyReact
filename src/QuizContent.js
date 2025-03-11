const listOfQuiz = [
    {
    Quiz : "what is the correct way to declare a variable in javascript?" , 
    options : ["let x = 10;" , "varible x = 10;" , "x := 10" , "const x == 10;"],
    correct : "let x = 10;"
    },
    {
        Quiz : "What is JSX in react?" , 
        options : ["a new javascript framework" , "a tool to optomiza javascript" , "a syntax extention for javascript" , "a built-in react function"],
        correct :"a syntax extention for javascript" 
    },
    {
        Quiz : "what is the purpose of key in react lists?" , 
        options : ["to applay CSS style" , "to help react identify elements efficiently" , "to store data in local storage" , "to trigger re-renders"],
        correct : "to help react identify elements efficiently"
    },
    {
        Quiz : "what will console.log(typeof null) print in javascript?" , 
        options : ["null" , "undefined" , "object" , "number"],
        correct : "object"
    },
    {
        Quiz : "How can you update the state in a react functional component?" , 
        options : ["this.state = newValue" , "setState(newValue)" , "updateState(newValue)" , "changeState(newValue)"],
        correct : "setState(newValue)"
    }
]




export default listOfQuiz ;

