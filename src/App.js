import React, { useState, useEffect } from 'react';
import './App.css';

function FlipCard({ question, answer }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        console.log('Card clicked');
        setIsFlipped(!isFlipped);
        if (!isFlipped) {
            console.log('Attempting to speak');
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(answer);
                utterance.onstart = () => console.log('Speech started');
                utterance.onend = () => console.log('Speech ended');
                utterance.onerror = (event) => console.error('Speech error', event);
                speechSynthesis.speak(utterance);
            } else {
                console.error('Speech Synthesis not supported');
            }
        }
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
            <div className="card-inner">
                <div className="card-front">
                    <h2>{question}</h2>
                </div>
                <div className="card-back">
                    <h2>{answer}</h2>
                </div>
            </div>
        </div>
    );
}

function App() {
    const reactQuestions = [
        { id: 1, text: 'What is React?' },
        { id: 2, text: 'What is a component in React?' },
        { id: 3, text: 'What is JSX?' },
        { id: 4, text: 'What is the virtual DOM?' },
        { id: 5, text: 'What are props in React?' },
        { id: 6, text: 'What is state in React?' },
        { id: 7, text: 'What is a React Hook?' },
        { id: 8, text: 'What is useState?' },
        { id: 9, text: 'What is useEffect?' },
        { id: 10, text: 'What is a functional component?' },
        { id: 11, text: 'What is a class component?' },
        { id: 12, text: 'What is the difference between state and props?' },
        { id: 13, text: 'What is the lifecycle of a React component?' },
        { id: 14, text: 'What is the purpose of keys in React?' },
        { id: 15, text: 'What is the context API?' },
        { id: 16, text: 'What is Redux?' },
        { id: 17, text: 'What is the difference between Redux and Context API?' },
        { id: 18, text: 'What are higher-order components?' },
        { id: 19, text: 'What is React Router?' },
        { id: 20, text: 'What is the difference between React Router and Reach Router?' },
        { id: 21, text: 'What is the use of refs in React?' },
        { id: 22, text: 'What is the use of fragments in React?' },
        { id: 23, text: 'What is the use of portals in React?' },
        { id: 24, text: 'What is the use of error boundaries in React?' },
        { id: 25, text: 'What is the use of lazy loading in React?' },
        { id: 26, text: 'What is the use of Suspense in React?' },
        { id: 27, text: 'What is the use of memo in React?' },
        { id: 28, text: 'What is the use of useMemo in React?' },
        { id: 29, text: 'What is the use of useCallback in React?' },
        { id: 30, text: 'What is the use of useRef in React?' },
        { id: 31, text: 'What is the use of useContext in React?' },
        { id: 32, text: 'What is the use of useReducer in React?' },
        { id: 33, text: 'What is the use of useLayoutEffect in React?' },
        { id: 34, text: 'What is the use of useImperativeHandle in React?' },
        { id: 35, text: 'What is the use of useDebugValue in React?' },
        { id: 36, text: 'What is the use of useTransition in React?' },
        { id: 37, text: 'What is the use of useDeferredValue in React?' },
        { id: 38, text: 'What is the use of useId in React?' },
        { id: 39, text: 'What is the use of useSyncExternalStore in React?' },
        { id: 40, text: 'What is the use of useInsertionEffect in React?' },
        { id: 41, text: 'What is the use of useEffectOnce in React?' },
        { id: 42, text: 'What is the use of useUpdateEffect in React?' },
        { id: 43, text: 'What is the use of useMount in React?' },
        { id: 44, text: 'What is the use of useUnmount in React?' },
        { id: 45, text: 'What is the use of usePrevious in React?' },
        { id: 46, text: 'What is the use of useEventListener in React?' },
        { id: 47, text: 'What is the use of useWindowSize in React?' },
        { id: 48, text: 'What is the use of useMediaQuery in React?' },
        { id: 49, text: 'What is the use of useLocalStorage in React?' },
        { id: 50, text: 'What is the use of useSessionStorage in React?' }
    ];

    const reactAnswers = [
        { id: 1, text: 'React is a JavaScript library for building user interfaces.' },
        { id: 2, text: 'A component is a reusable piece of UI.' },
        { id: 3, text: 'JSX is a syntax extension that looks similar to XML or HTML.' },
        { id: 4, text: 'The virtual DOM is a lightweight copy of the actual DOM.' },
        { id: 5, text: 'Props are inputs to a React component.' },
        { id: 6, text: 'State is an object that determines how that component renders & behaves.' },
        { id: 7, text: 'A Hook is a special function that lets you use state and other React features.' },
        { id: 8, text: 'useState is a Hook that lets you add state to functional components.' },
        { id: 9, text: 'useEffect is a Hook that lets you perform side effects in functional components.' },
        { id: 10, text: 'A functional component is a JavaScript function that returns a React element.' },
        { id: 11, text: 'A class component is a JavaScript class that extends React.Component.' },
        { id: 12, text: 'State is managed within the component, while props are passed to the component.' },
        { id: 13, text: 'The lifecycle of a React component includes mounting, updating, and unmounting.' },
        { id: 14, text: 'Keys help React identify which items have changed, are added, or are removed.' },
        { id: 15, text: 'The context API is a way to pass data through the component tree without props.' },
        { id: 16, text: 'Redux is a state management library for JavaScript applications.' },
        { id: 17, text: 'Redux is more powerful and complex, while Context API is simpler and built-in.' },
        { id: 18, text: 'Higher-order components are functions that take a component and return a new component.' },
        { id: 19, text: 'React Router is a library for routing in React applications.' },
        { id: 20, text: 'React Router is more widely used, while Reach Router focuses on accessibility.' },
        { id: 21, text: 'Refs provide a way to access DOM nodes or React elements created in the render method.' },
        { id: 22, text: 'Fragments let you group a list of children without adding extra nodes to the DOM.' },
        { id: 23, text: 'Portals provide a way to render children into a DOM node outside the parent component.' },
        { id: 24, text: 'Error boundaries catch JavaScript errors anywhere in the child component tree.' },
        { id: 25, text: 'Lazy loading is a technique to load components only when they are needed.' },
        { id: 26, text: 'Suspense lets you wait for some code to load and declaratively specify a loading state.' },
        { id: 27, text: 'Memo is a higher-order component that memoizes the result of a component.' },
        { id: 28, text: 'useMemo is a Hook that memoizes the result of a function.' },
        { id: 29, text: 'useCallback is a Hook that memoizes a callback function.' },
        { id: 30, text: 'useRef is a Hook that returns a mutable ref object.' },
        { id: 31, text: 'useContext is a Hook that returns the current context value.' },
        { id: 32, text: 'useReducer is a Hook that is used for state management.' },
        { id: 33, text: 'useLayoutEffect is a Hook that fires synchronously after all DOM mutations.' },
        { id: 34, text: 'useImperativeHandle is a Hook that customizes the instance value exposed by ref.' },
        { id: 35, text: 'useDebugValue is a Hook that displays a label for custom hooks in React DevTools.' },
        { id: 36, text: 'useTransition is a Hook that lets you mark updates as transitions.' },
        { id: 37, text: 'useDeferredValue is a Hook that lets you defer re-rendering a non-urgent part of the tree.' },
        { id: 38, text: 'useId is a Hook that generates a unique ID.' },
        { id: 39, text: 'useSyncExternalStore is a Hook for reading and subscribing from external stores.' },
        { id: 40, text: 'useInsertionEffect is a Hook that fires synchronously before all DOM mutations.' },
        { id: 41, text: 'useEffectOnce is a custom Hook that runs an effect only once.' },
        { id: 42, text: 'useUpdateEffect is a custom Hook that runs an effect only on updates.' },
        { id: 43, text: 'useMount is a custom Hook that runs an effect only on mount.' },
        { id: 44, text: 'useUnmount is a custom Hook that runs an effect only on unmount.' },
        { id: 45, text: 'usePrevious is a custom Hook that returns the previous value of a state or prop.' },
        { id: 46, text: 'useEventListener is a custom Hook that adds an event listener to a target.' },
        { id: 47, text: 'useWindowSize is a custom Hook that returns the current window size.' },
        { id: 48, text: 'useMediaQuery is a custom Hook that returns whether a media query matches.' },
        { id: 49, text: 'useLocalStorage is a custom Hook that manages local storage.' },
        { id: 50, text: 'useSessionStorage is a custom Hook that manages session storage.' }
    ];

    const jsQuestions = [
        { id: 1, text: 'What is JavaScript?' },
        { id: 2, text: 'What are variables in JavaScript?' },
        { id: 3, text: 'What is a function in JavaScript?' },
        { id: 4, text: 'What is an array in JavaScript?' },
        { id: 5, text: 'What is an object in JavaScript?' },
        { id: 6, text: 'What is a loop in JavaScript?' },
        { id: 7, text: 'What is an event in JavaScript?' },
        { id: 8, text: 'What is the DOM in JavaScript?' },
        { id: 9, text: 'What is a promise in JavaScript?' },
        { id: 10, text: 'What is async/await in JavaScript?' },
        { id: 11, text: 'What is a callback function in JavaScript?' },
        { id: 12, text: 'What is closure in JavaScript?' },
        { id: 13, text: 'What is hoisting in JavaScript?' },
        { id: 14, text: 'What is scope in JavaScript?' },
        { id: 15, text: 'What is the difference between let and var?' },
        { id: 16, text: 'What is the difference between == and ===?' },
        { id: 17, text: 'What is a template literal in JavaScript?' },
        { id: 18, text: 'What is destructuring in JavaScript?' },
        { id: 19, text: 'What is the spread operator in JavaScript?' },
        { id: 20, text: 'What is the rest parameter in JavaScript?' },
        { id: 21, text: 'What is a higher-order function in JavaScript?' },
        { id: 22, text: 'What is the event loop in JavaScript?' },
        { id: 23, text: 'What is the difference between null and undefined?' },
        { id: 24, text: 'What is the use of the this keyword in JavaScript?' },
        { id: 25, text: 'What is the prototype in JavaScript?' },
        { id: 26, text: 'What is the difference between call, apply, and bind?' },
        { id: 27, text: 'What is the difference between map and forEach?' },
        { id: 28, text: 'What is the difference between slice and splice?' },
        { id: 29, text: 'What is the difference between filter and find?' },
        { id: 30, text: 'What is the difference between reduce and reduceRight?' },
        { id: 31, text: 'What is the difference between some and every?' },
        { id: 32, text: 'What is the difference between includes and indexOf?' },
        { id: 33, text: 'What is the difference between push and unshift?' },
        { id: 34, text: 'What is the difference between pop and shift?' },
        { id: 35, text: 'What is the difference between concat and join?' },
        { id: 36, text: 'What is the difference between split and slice?' },
        { id: 37, text: 'What is the difference between charAt and charCodeAt?' },
        { id: 38, text: 'What is the difference between toUpperCase and toLowerCase?' },
        { id: 39, text: 'What is the difference between trim and trimStart?' },
        { id: 40, text: 'What is the difference between parseInt and parseFloat?' },
        { id: 41, text: 'What is the difference between isNaN and Number.isNaN?' },
        { id: 42, text: 'What is the difference between Math.floor and Math.ceil?' },
        { id: 43, text: 'What is the difference between Math.round and Math.trunc?' },
        { id: 44, text: 'What is the difference between Math.max and Math.min?' },
        { id: 45, text: 'What is the difference between Math.random and Math.abs?' },
        { id: 46, text: 'What is the difference between Date.now and new Date()?' },
        { id: 47, text: 'What is the difference between setTimeout and setInterval?' },
        { id: 48, text: 'What is the difference between clearTimeout and clearInterval?' },
        { id: 49, text: 'What is the difference between JSON.stringify and JSON.parse?' },
        { id: 50, text: 'What is the difference between localStorage and sessionStorage?' }
    ];

    const jsAnswers = [
        { id: 1, text: 'JavaScript is a programming language used to create dynamic and interactive content on websites.' },
        { id: 2, text: 'Variables in JavaScript are used to store data values.' },
        { id: 3, text: 'A function in JavaScript is a block of code designed to perform a particular task.' },
        { id: 4, text: 'An array in JavaScript is a single variable that is used to store different elements.' },
        { id: 5, text: 'An object in JavaScript is a collection of properties, and a property is an association between a name (or key) and a value.' },
        { id: 6, text: 'A loop in JavaScript is used to perform repeated tasks based on a condition.' },
        { id: 7, text: 'An event in JavaScript is an action that occurs when a user interacts with the browser.' },
        { id: 8, text: 'The DOM (Document Object Model) is a programming interface for web documents.' },
        { id: 9, text: 'A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.' },
        { id: 10, text: 'Async/await in JavaScript is a way to handle asynchronous operations more efficiently.' },
        { id: 11, text: 'A callback function in JavaScript is a function that is passed as an argument to another function.' },
        { id: 12, text: 'Closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function’s variables.' },
        { id: 13, text: 'Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.' },
        { id: 14, text: 'Scope in JavaScript is the set of variables, objects, and functions you have access to.' },
        { id: 15, text: 'The difference between let and var is that let is block-scoped and var is function-scoped.' },
        { id: 16, text: 'The difference between == and === is that == compares values and === compares values and types.' },
        { id: 17, text: 'A template literal in JavaScript is a way to create strings that allows embedded expressions.' },
        { id: 18, text: 'Destructuring in JavaScript is a way to unpack values from arrays or properties from objects into distinct variables.' },
        { id: 19, text: 'The spread operator in JavaScript allows an iterable to expand in places where 0+ arguments are expected.' },
        { id: 20, text: 'The rest parameter in JavaScript allows a function to accept an indefinite number of arguments as an array.' },
        { id: 21, text: 'A higher-order function in JavaScript is a function that takes another function as an argument or returns a function as a result.' },
        { id: 22, text: 'The event loop in JavaScript is a mechanism that allows JavaScript to perform non-blocking operations.' },
        { id: 23, text: 'The difference between null and undefined is that null is an assigned value and undefined means a variable has been declared but not assigned a value.' },
        { id: 24, text: 'The this keyword in JavaScript refers to the object it belongs to.' },
        { id: 25, text: 'The prototype in JavaScript is an object from which other objects inherit properties.' },
        { id: 26, text: 'The difference between call, apply, and bind is that call and apply invoke a function immediately, while bind returns a new function.' },
        { id: 27, text: 'The difference between map and forEach is that map returns a new array, while forEach does not.' },
        { id: 28, text: 'The difference between slice and splice is that slice returns a new array, while splice modifies the original array.' },
        { id: 29, text: 'The difference between filter and find is that filter returns all matching elements, while find returns the first matching element.' },
        { id: 30, text: 'The difference between reduce and reduceRight is that reduce processes the array from left to right, while reduceRight processes the array from right to left.' },
        { id: 31, text: 'The difference between some and every is that some checks if at least one element passes the test, while every checks if all elements pass the test.' },
        { id: 32, text: 'The difference between includes and indexOf is that includes checks if an element is present, while indexOf returns the index of the element.' },
        { id: 33, text: 'The difference between push and unshift is that push adds elements to the end of the array, while unshift adds elements to the beginning.' },
        { id: 34, text: 'The difference between pop and shift is that pop removes the last element, while shift removes the first element.' },
        { id: 35, text: 'The difference between concat and join is that concat merges arrays, while join converts an array to a string.' },
        { id: 36, text: 'The difference between split and slice is that split divides a string into an array, while slice extracts a section of an array.' },
        { id: 37, text: 'The difference between charAt and charCodeAt is that charAt returns the character at a specified index, while charCodeAt returns the Unicode of the character.' },
        { id: 38, text: 'The difference between toUpperCase and toLowerCase is that toUpperCase converts a string to uppercase, while toLowerCase converts a string to lowercase.' },
        { id: 39, text: 'The difference between trim and trimStart is that trim removes whitespace from both ends, while trimStart removes whitespace from the start.' },
        { id: 40, text: 'The difference between parseInt and parseFloat is that parseInt converts a string to an integer, while parseFloat converts a string to a floating-point number.' },
        { id: 41, text: 'The difference between isNaN and Number.isNaN is that isNaN converts the value to a number before checking, while Number.isNaN does not.' },
        { id: 42, text: 'The difference between Math.floor and Math.ceil is that Math.floor rounds down, while Math.ceil rounds up.' },
        { id: 43, text: 'The difference between Math.round and Math.trunc is that Math.round rounds to the nearest integer, while Math.trunc removes the fractional part.' },
        { id: 44, text: 'The difference between Math.max and Math.min is that Math.max returns the largest number, while Math.min returns the smallest number.' },
        { id: 45, text: 'The difference between Math.random and Math.abs is that Math.random returns a random number, while Math.abs returns the absolute value.' },
        { id: 46, text: 'The difference between Date.now and new Date() is that Date.now returns the current timestamp, while new Date() creates a new Date object.' },
        { id: 47, text: 'The difference between setTimeout and setInterval is that setTimeout executes a function once after a delay, while setInterval executes a function repeatedly.' },
        { id: 48, text: 'The difference between clearTimeout and clearInterval is that clearTimeout cancels a timeout, while clearInterval cancels an interval.' },
        { id: 49, text: 'The difference between JSON.stringify and JSON.parse is that JSON.stringify converts an object to a JSON string, while JSON.parse converts a JSON string to an object.' },
        { id: 50, text: 'The difference between localStorage and sessionStorage is that localStorage stores data with no expiration, while sessionStorage stores data for the session duration.' }
    ];

    const htmlQuestions = [
        { id: 1, text: 'What is HTML?' },
        { id: 2, text: 'What are HTML tags?' },
        { id: 3, text: 'What is the purpose of the <!DOCTYPE> declaration?' },
        { id: 4, text: 'What is the <html> tag?' },
        { id: 5, text: 'What is the <head> tag?' },
        { id: 6, text: 'What is the <title> tag?' },
        { id: 7, text: 'What is the <body> tag?' },
        { id: 8, text: 'What is the <h1> to <h6> tags?' },
        { id: 9, text: 'What is the <p> tag?' },
        { id: 10, text: 'What is the <a> tag?' },
        { id: 11, text: 'What is the <img> tag?' },
        { id: 12, text: 'What is the <ul> tag?' },
        { id: 13, text: 'What is the <ol> tag?' },
        { id: 14, text: 'What is the <li> tag?' },
        { id: 15, text: 'What is the <table> tag?' },
        { id: 16, text: 'What is the <tr> tag?' },
        { id: 17, text: 'What is the <td> tag?' },
        { id: 18, text: 'What is the <th> tag?' },
        { id: 19, text: 'What is the <form> tag?' },
        { id: 20, text: 'What is the <input> tag?' },
        { id: 21, text: 'What is the <button> tag?' },
        { id: 22, text: 'What is the <div> tag?' },
        { id: 23, text: 'What is the <span> tag?' },
        { id: 24, text: 'What is the <iframe> tag?' },
        { id: 25, text: 'What is the <meta> tag?' },
        { id: 26, text: 'What is the <link> tag?' },
        { id: 27, text: 'What is the <script> tag?' },
        { id: 28, text: 'What is the <style> tag?' },
        { id: 29, text: 'What is the <header> tag?' },
        { id: 30, text: 'What is the <footer> tag?' },
        { id: 31, text: 'What is the <nav> tag?' },
        { id: 32, text: 'What is the <section> tag?' },
        { id: 33, text: 'What is the <article> tag?' },
        { id: 34, text: 'What is the <aside> tag?' },
        { id: 35, text: 'What is the <main> tag?' },
        { id: 36, text: 'What is the <figure> tag?' },
        { id: 37, text: 'What is the <figcaption> tag?' },
        { id: 38, text: 'What is the <audio> tag?' },
        { id: 39, text: 'What is the <video> tag?' },
        { id: 40, text: 'What is the <source> tag?' },
        { id: 41, text: 'What is the <track> tag?' },
        { id: 42, text: 'What is the <canvas> tag?' },
        { id: 43, text: 'What is the <svg> tag?' },
        { id: 44, text: 'What is the <blockquote> tag?' },
        { id: 45, text: 'What is the <code> tag?' },
        { id: 46, text: 'What is the <pre> tag?' },
        { id: 47, text: 'What is the <em> tag?' },
        { id: 48, text: 'What is the <strong> tag?' },
        { id: 49, text: 'What is the <br> tag?' },
        { id: 50, text: 'What is the <hr> tag?' }
    ];

    const htmlAnswers = [
        { id: 1, text: 'HTML stands for HyperText Markup Language. It is the standard language for creating web pages.' },
        { id: 2, text: 'HTML tags are the building blocks of HTML. They define the structure and content of a web page.' },
        { id: 3, text: 'The <!DOCTYPE> declaration defines the document type and version of HTML being used.' },
        { id: 4, text: 'The <html> tag represents the root of an HTML document.' },
        { id: 5, text: 'The <head> tag contains meta-information about the HTML document, such as its title and links to stylesheets.' },
        { id: 6, text: 'The <title> tag defines the title of the HTML document, which is displayed in the browser\'s title bar or tab.' },
        { id: 7, text: 'The <body> tag contains the content of the HTML document, such as text, images, and links.' },
        { id: 8, text: 'The <h1> to <h6> tags define HTML headings, with <h1> being the highest level and <h6> being the lowest.' },
        { id: 9, text: 'The <p> tag defines a paragraph of text.' },
        { id: 10, text: 'The <a> tag defines a hyperlink, which is used to link to other web pages or resources.' },
        { id: 11, text: 'The <img> tag is used to embed images in an HTML document.' },
        { id: 12, text: 'The <ul> tag defines an unordered list, which is a list of items with bullet points.' },
        { id: 13, text: 'The <ol> tag defines an ordered list, which is a list of items with numbers.' },
        { id: 14, text: 'The <li> tag defines a list item in an unordered or ordered list.' },
        { id: 15, text: 'The <table> tag defines a table in an HTML document.' },
        { id: 16, text: 'The <tr> tag defines a table row.' },
        { id: 17, text: 'The <td> tag defines a table cell.' },
        { id: 18, text: 'The <th> tag defines a table header cell.' },
        { id: 19, text: 'The <form> tag defines an HTML form for user input.' },
        { id: 20, text: 'The <input> tag defines an input field in an HTML form.' },
        { id: 21, text: 'The <button> tag defines a clickable button.' },
        { id: 22, text: 'The <div> tag defines a division or section in an HTML document.' },
        { id: 23, text: 'The <span> tag defines a section of text with no specific meaning.' },
        { id: 24, text: 'The <iframe> tag defines an inline frame, which is used to embed another HTML document within the current document.' },
        { id: 25, text: 'The <meta> tag provides metadata about the HTML document, such as character set and author.' },
        { id: 26, text: 'The <link> tag defines a link to an external resource, such as a stylesheet.' },
        { id: 27, text: 'The <script> tag is used to embed or reference JavaScript code in an HTML document.' },
        { id: 28, text: 'The <style> tag is used to define CSS styles within an HTML document.' },
        { id: 29, text: 'The <header> tag defines a header section for a document or section.' },
        { id: 30, text: 'The <footer> tag defines a footer section for a document or section.' },
        { id: 31, text: 'The <nav> tag defines a navigation section for a document.' },
        { id: 32, text: 'The <section> tag defines a section of content in an HTML document.' },
        { id: 33, text: 'The <article> tag defines an independent, self-contained piece of content.' },
        { id: 34, text: 'The <aside> tag defines content that is tangentially related to the main content.' },
        { id: 35, text: 'The <main> tag defines the main content of an HTML document.' },
        { id: 36, text: 'The <figure> tag defines self-contained content, such as images and diagrams.' },
        { id: 37, text: 'The <figcaption> tag defines a caption for a <figure> element.' },
        { id: 38, text: 'The <audio> tag is used to embed audio content in an HTML document.' },
        { id: 39, text: 'The <video> tag is used to embed video content in an HTML document.' },
        { id: 40, text: 'The <source> tag defines multiple media resources for <audio> and <video> elements.' },
        { id: 41, text: 'The <track> tag defines text tracks for <audio> and <video> elements.' },
        { id: 42, text: 'The <canvas> tag is used to draw graphics on the fly via JavaScript.' },
        { id: 43, text: 'The <svg> tag is used to define vector-based graphics.' },
        { id: 44, text: 'The <blockquote> tag defines a section that is quoted from another source.' },
        { id: 45, text: 'The <code> tag defines a piece of computer code.' },
        { id: 46, text: 'The <pre> tag defines preformatted text.' },
        { id: 47, text: 'The <em> tag defines emphasized text.' },
        { id: 48, text: 'The <strong> tag defines important text.' },
        { id: 49, text: 'The <br> tag inserts a line break.' },
        { id: 50, text: 'The <hr> tag defines a thematic break in an HTML document.' }
    ];

    const cssQuestions = [
        { id: 1, text: 'What is CSS?' },
        { id: 2, text: 'What is the purpose of CSS?' },
        { id: 3, text: 'What is a CSS selector?' },
        { id: 4, text: 'What is a CSS class?' },
        { id: 5, text: 'What is a CSS ID?' },
        { id: 6, text: 'What is the difference between a class and an ID in CSS?' },
        { id: 7, text: 'What is the box model in CSS?' },
        { id: 8, text: 'What are the different parts of the box model?' },
        { id: 9, text: 'What is the difference between margin and padding?' },
        { id: 10, text: 'What is a CSS property?' },
        { id: 11, text: 'What is a CSS value?' },
        { id: 12, text: 'What is a CSS rule?' },
        { id: 13, text: 'What is a CSS declaration?' },
        { id: 14, text: 'What is a CSS pseudo-class?' },
        { id: 15, text: 'What is a CSS pseudo-element?' },
        { id: 16, text: 'What is the difference between a pseudo-class and a pseudo-element?' },
        { id: 17, text: 'What is a CSS media query?' },
        { id: 18, text: 'What is the purpose of a media query?' },
        { id: 19, text: 'What is a CSS transition?' },
        { id: 20, text: 'What is a CSS animation?' },
        { id: 21, text: 'What is the difference between a transition and an animation in CSS?' },
        { id: 22, text: 'What is a CSS flexbox?' },
        { id: 23, text: 'What is the purpose of flexbox?' },
        { id: 24, text: 'What is a CSS grid?' },
        { id: 25, text: 'What is the purpose of a grid?' },
        { id: 26, text: 'What is the difference between flexbox and grid?' },
        { id: 27, text: 'What is a CSS variable?' },
        { id: 28, text: 'What is the purpose of a CSS variable?' },
        { id: 29, text: 'What is a CSS preprocessor?' },
        { id: 30, text: 'What are some examples of CSS preprocessors?' },
        { id: 31, text: 'What is the purpose of a CSS preprocessor?' },
        { id: 32, text: 'What is a CSS framework?' },
        { id: 33, text: 'What are some examples of CSS frameworks?' },
        { id: 34, text: 'What is the purpose of a CSS framework?' },
        { id: 35, text: 'What is a CSS reset?' },
        { id: 36, text: 'What is the purpose of a CSS reset?' },
        { id: 37, text: 'What is a CSS float?' },
        { id: 38, text: 'What is the purpose of a float?' },
        { id: 39, text: 'What is a CSS clear?' },
        { id: 40, text: 'What is the purpose of a clear?' },
        { id: 41, text: 'What is a CSS position?' },
        { id: 42, text: 'What are the different types of position in CSS?' },
        { id: 43, text: 'What is the difference between relative and absolute positioning?' },
        { id: 44, text: 'What is a CSS z-index?' },
        { id: 45, text: 'What is the purpose of a z-index?' },
        { id: 46, text: 'What is a CSS overflow?' },
        { id: 47, text: 'What are the different types of overflow?' },
        { id: 48, text: 'What is a CSS display?' },
        { id: 49, text: 'What are the different types of display?' },
        { id: 50, text: 'What is the difference between block and inline elements?' }
    ];

    const cssAnswers = [
        { id: 1, text: 'CSS stands for Cascading Style Sheets. It is used to style and layout web pages.' },
        { id: 2, text: 'The purpose of CSS is to separate the content of a web page from its presentation.' },
        { id: 3, text: 'A CSS selector is a pattern used to select the elements you want to style.' },
        { id: 4, text: 'A CSS class is a selector that is used to apply styles to multiple elements.' },
        { id: 5, text: 'A CSS ID is a selector that is used to apply styles to a single element.' },
        { id: 6, text: 'The difference between a class and an ID in CSS is that a class can be used on multiple elements, while an ID can only be used on one element.' },
        { id: 7, text: 'The box model in CSS is a box that wraps around every HTML element.' },
        { id: 8, text: 'The different parts of the box model are the content, padding, border, and margin.' },
        { id: 9, text: 'The difference between margin and padding is that margin is the space outside the border, while padding is the space inside the border.' },
        { id: 10, text: 'A CSS property is a style attribute that you want to change.' },
        { id: 11, text: 'A CSS value is the value you want to apply to the property.' },
        { id: 12, text: 'A CSS rule is a set of CSS properties and values that are applied to a selected element.' },
        { id: 13, text: 'A CSS declaration is a single property and value pair.' },
        { id: 14, text: 'A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected elements.' },
        { id: 15, text: 'A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected elements.' },
        { id: 16, text: 'The difference between a pseudo-class and a pseudo-element is that a pseudo-class targets a state of an element, while a pseudo-element targets a part of an element.' },
        { id: 17, text: 'A CSS media query is a CSS technique used to apply styles based on the characteristics of the device.' },
        { id: 18, text: 'The purpose of a media query is to create responsive designs that adapt to different screen sizes.' },
        { id: 19, text: 'A CSS transition is a way to change the value of a property over a specified duration.' },
        { id: 20, text: 'A CSS animation is a way to create complex animations using keyframes.' },
        { id: 21, text: 'The difference between a transition and an animation in CSS is that a transition is a one-time change, while an animation can have multiple keyframes.' },
        { id: 22, text: 'A CSS flexbox is a layout model that allows you to design a flexible and responsive layout structure.' },
        { id: 23, text: 'The purpose of flexbox is to provide a more efficient way to lay out, align, and distribute space among items in a container.' },
        { id: 24, text: 'A CSS grid is a layout model that allows you to create complex grid-based layouts.' },
        { id: 25, text: 'The purpose of a grid is to provide a more efficient way to create complex layouts with rows and columns.' },
        { id: 26, text: 'The difference between flexbox and grid is that flexbox is one-dimensional, while grid is two-dimensional.' },
        { id: 27, text: 'A CSS variable is a custom property that allows you to store a value that can be reused throughout your CSS.' },
        { id: 28, text: 'The purpose of a CSS variable is to make your CSS more maintainable and easier to read.' },
        { id: 29, text: 'A CSS preprocessor is a scripting language that extends CSS and compiles it into regular CSS.' },
        { id: 30, text: 'Some examples of CSS preprocessors are Sass, Less, and Stylus.' },
        { id: 31, text: 'The purpose of a CSS preprocessor is to add features to CSS, such as variables, nesting, and mixins.' },
        { id: 32, text: 'A CSS framework is a library that provides pre-written CSS to help you create responsive and consistent designs.' },
        { id: 33, text: 'Some examples of CSS frameworks are Bootstrap, Foundation, and Bulma.' },
        { id: 34, text: 'The purpose of a CSS framework is to speed up the development process and ensure consistency across your designs.' },
        { id: 35, text: 'A CSS reset is a set of CSS rules that resets the default styling of HTML elements.' },
        { id: 36, text: 'The purpose of a CSS reset is to create a consistent starting point for your styles.' },
        { id: 37, text: 'A CSS float is a property that allows you to position an element to the left or right of its container.' },
        { id: 38, text: 'The purpose of a float is to create a wrapping effect around an element.' },
        { id: 39, text: 'A CSS clear is a property that specifies whether an element should be moved below floating elements.' },
        { id: 40, text: 'The purpose of a clear is to prevent elements from wrapping around floating elements.' },
        { id: 41, text: 'A CSS position is a property that specifies the type of positioning method used for an element.' },
        { id: 42, text: 'The different types of position in CSS are static, relative, absolute, fixed, and sticky.' },
        { id: 43, text: 'The difference between relative and absolute positioning is that relative positioning is relative to the element\'s normal position, while absolute positioning is relative to the nearest positioned ancestor.' },
        { id: 44, text: 'A CSS z-index is a property that specifies the stack order of an element.' },
        { id: 45, text: 'The purpose of a z-index is to control the layering of overlapping elements.' },
        { id: 46, text: 'A CSS overflow is a property that specifies what happens if content overflows an element\'s box.' },
        { id: 47, text: 'The different types of overflow are visible, hidden, scroll, and auto.' },
        { id: 48, text: 'A CSS display is a property that specifies the display behavior of an element.' },
        { id: 49, text: 'The different types of display are block, inline, inline-block, flex, grid, and none.' },
        { id: 50, text: 'The difference between block and inline elements is that block elements take up the full width available, while inline elements take up only as much width as necessary.' }
    ];

    const gitQuestions = [
        { id: 1, text: 'What is Git?' },
        { id: 2, text: 'What is a repository in Git?' },
        { id: 3, text: 'What is a commit in Git?' },
        { id: 4, text: 'What is a branch in Git?' },
        { id: 5, text: 'What is a merge in Git?' },
        { id: 6, text: 'What is a conflict in Git?' },
        { id: 7, text: 'What is a pull request in Git?' },
        { id: 8, text: 'What is a fork in Git?' },
        { id: 9, text: 'What is a clone in Git?' },
        { id: 10, text: 'What is the difference between Git and GitHub?' },
        { id: 11, text: 'What is the purpose of the .gitignore file?' },
        { id: 12, text: 'What is the staging area in Git?' },
        { id: 13, text: 'What is the difference between git pull and git fetch?' },
        { id: 14, text: 'What is the difference between git merge and git rebase?' },
        { id: 15, text: 'What is a remote repository in Git?' },
        { id: 16, text: 'What is the purpose of git init?' },
        { id: 17, text: 'What is the purpose of git clone?' },
        { id: 18, text: 'What is the purpose of git add?' },
        { id: 19, text: 'What is the purpose of git commit?' },
        { id: 20, text: 'What is the purpose of git push?' },
        { id: 21, text: 'What is the purpose of git pull?' },
        { id: 22, text: 'What is the purpose of git status?' },
        { id: 23, text: 'What is the purpose of git log?' },
        { id: 24, text: 'What is the purpose of git diff?' },
        { id: 25, text: 'What is the purpose of git branch?' },
        { id: 26, text: 'What is the purpose of git checkout?' },
        { id: 27, text: 'What is the purpose of git merge?' },
        { id: 28, text: 'What is the purpose of git rebase?' },
        { id: 29, text: 'What is the purpose of git reset?' },
        { id: 30, text: 'What is the purpose of git revert?' },
        { id: 31, text: 'What is the purpose of git stash?' },
        { id: 32, text: 'What is the purpose of git tag?' },
        { id: 33, text: 'What is the purpose of git remote?' },
        { id: 34, text: 'What is the purpose of git fetch?' },
        { id: 35, text: 'What is the purpose of git show?' },
        { id: 36, text: 'What is the purpose of git blame?' },
        { id: 37, text: 'What is the purpose of git cherry-pick?' },
        { id: 38, text: 'What is the purpose of git bisect?' },
        { id: 39, text: 'What is the purpose of git archive?' },
        { id: 40, text: 'What is the purpose of git gc?' },
        { id: 41, text: 'What is the purpose of git fsck?' },
        { id: 42, text: 'What is the purpose of git reflog?' },
        { id: 43, text: 'What is the purpose of git shortlog?' },
        { id: 44, text: 'What is the purpose of git describe?' },
        { id: 45, text: 'What is the purpose of git clean?' },
        { id: 46, text: 'What is the purpose of git grep?' },
        { id: 47, text: 'What is the purpose of git mv?' },
        { id: 48, text: 'What is the purpose of git rm?' },
        { id: 49, text: 'What is the purpose of git commit --amend?' },
        { id: 50, text: 'What is the purpose of git log --oneline?' }
    ];

    const gitAnswers = [
        { id: 1, text: 'Git is a distributed version control system used to track changes in source code during software development.' },
        { id: 2, text: 'A repository in Git is a storage location for your project files and their version history.' },
        { id: 3, text: 'A commit in Git is a snapshot of your project files at a specific point in time.' },
        { id: 4, text: 'A branch in Git is a parallel version of your project files that allows you to work on different features or fixes independently.' },
        { id: 5, text: 'A merge in Git is the process of combining changes from different branches into a single branch.' },
        { id: 6, text: 'A conflict in Git occurs when changes from different branches cannot be automatically merged.' },
        { id: 7, text: 'A pull request in Git is a request to merge changes from one branch into another.' },
        { id: 8, text: 'A fork in Git is a copy of a repository that allows you to make changes without affecting the original repository.' },
        { id: 9, text: 'A clone in Git is a copy of a repository that you can work on locally.' },
        { id: 10, text: 'The difference between Git and GitHub is that Git is a version control system, while GitHub is a web-based platform for hosting Git repositories.' },
        { id: 11, text: 'The purpose of the .gitignore file is to specify which files and directories should be ignored by Git.' },
        { id: 12, text: 'The staging area in Git is a temporary area where changes are stored before they are committed.' },
        { id: 13, text: 'The difference between git pull and git fetch is that git pull fetches changes from a remote repository and merges them into your local branch, while git fetch only fetches the changes without merging them.' },
        { id: 14, text: 'The difference between git merge and git rebase is that git merge combines changes from different branches, while git rebase moves or combines a sequence of commits to a new base commit.' },
        { id: 15, text: 'A remote repository in Git is a version of your project that is hosted on the internet or another network.' },
        { id: 16, text: 'The purpose of git init is to create a new Git repository.' },
        { id: 17, text: 'The purpose of git clone is to create a copy of an existing repository.' },
        { id: 18, text: 'The purpose of git add is to add changes to the staging area.' },
        { id: 19, text: 'The purpose of git commit is to save changes to the repository.' },
        { id: 20, text: 'The purpose of git push is to upload changes from your local repository to a remote repository.' },
        { id: 21, text: 'The purpose of git pull is to fetch changes from a remote repository and merge them into your local branch.' },
        { id: 22, text: 'The purpose of git status is to display the state of the working directory and the staging area.' },
        { id: 23, text: 'The purpose of git log is to display the commit history.' },
        { id: 24, text: 'The purpose of git diff is to show the differences between commits, branches, or files.' },
        { id: 25, text: 'The purpose of git branch is to list, create, or delete branches.' },
        { id: 26, text: 'The purpose of git checkout is to switch branches or restore working tree files.' },
        { id: 27, text: 'The purpose of git merge is to combine changes from different branches.' },
        { id: 28, text: 'The purpose of git rebase is to move or combine a sequence of commits to a new base commit.' },
        { id: 29, text: 'The purpose of git reset is to reset the current HEAD to a specified state.' },
        { id: 30, text: 'The purpose of git revert is to create a new commit that undoes the changes from a previous commit.' },
        { id: 31, text: 'The purpose of git stash is to temporarily save changes that are not ready to be committed.' },
        { id: 32, text: 'The purpose of git tag is to create, list, or delete tags.' },
        { id: 33, text: 'The purpose of git remote is to manage remote repository connections.' },
        { id: 34, text: 'The purpose of git fetch is to download objects and refs from a remote repository.' },
        { id: 35, text: 'The purpose of git show is to display information about a commit.' },
        { id: 36, text: 'The purpose of git blame is to show what revision and author last modified each line of a file.' },
        { id: 37, text: 'The purpose of git cherry-pick is to apply the changes introduced by some existing commits.' },
        { id: 38, text: 'The purpose of git bisect is to use binary search to find the commit that introduced a bug.' },
        { id: 39, text: 'The purpose of git archive is to create an archive of files from a repository.' },
        { id: 40, text: 'The purpose of git gc is to optimize the repository by cleaning up unnecessary files and optimizing the local repository.' },
        { id: 41, text: 'The purpose of git fsck is to verify the connectivity and validity of objects in the repository.' },
        { id: 42, text: 'The purpose of git reflog is to record when the tips of branches and other references were updated in the local repository.' },
        { id: 43, text: 'The purpose of git shortlog is to summarize git log output.' },
        { id: 44, text: 'The purpose of git describe is to give an object a human-readable name based on an available ref.' },
        { id: 45, text: 'The purpose of git clean is to remove untracked files from the working directory.' },
        { id: 46, text: 'The purpose of git grep is to search for patterns in the repository.' },
        { id: 47, text: 'The purpose of git mv is to move or rename a file, directory, or symlink.' },
        { id: 48, text: 'The purpose of git rm is to remove files from the working directory and the index.' },
        { id: 49, text: 'The purpose of git commit --amend is to modify the most recent commit.' },
        { id: 50, text: 'The purpose of git log --oneline is to display the commit history in a condensed format.' }
    ];

    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    useEffect(() => {
        const reactCheckbox = document.getElementById('react-checkbox');
        const jsCheckbox = document.getElementById('javascript-checkbox');
        const htmlCheckbox = document.getElementById('html-checkbox');
        const cssCheckbox = document.getElementById('css-checkbox');
        const gitCheckbox = document.getElementById('git-checkbox');

        const handleCheckboxChange = () => {
            let questions = [];
            let answers = [];

            if (reactCheckbox.checked) {
                questions = questions.concat(reactQuestions);
                answers = answers.concat(reactAnswers);
            }

            if (jsCheckbox.checked) {
                questions = questions.concat(jsQuestions);
                answers = answers.concat(jsAnswers);
            }

            if (htmlCheckbox.checked) {
                questions = questions.concat(htmlQuestions);
                answers = answers.concat(htmlAnswers);
            }

            if (cssCheckbox.checked) {
                questions = questions.concat(cssQuestions);
                answers = answers.concat(cssAnswers);
            }

            if (gitCheckbox.checked) {
                questions = questions.concat(gitQuestions);
                answers = answers.concat(gitAnswers);
            }

            setSelectedQuestions(questions);
            setSelectedAnswers(answers);
        };

        reactCheckbox.addEventListener('change', handleCheckboxChange);
        jsCheckbox.addEventListener('change', handleCheckboxChange);
        htmlCheckbox.addEventListener('change', handleCheckboxChange);
        cssCheckbox.addEventListener('change', handleCheckboxChange);
        gitCheckbox.addEventListener('change', handleCheckboxChange);

        // Cleanup event listeners on component unmount
        return () => {
            reactCheckbox.removeEventListener('change', handleCheckboxChange);
            jsCheckbox.removeEventListener('change', handleCheckboxChange);
            htmlCheckbox.removeEventListener('change', handleCheckboxChange);
            cssCheckbox.removeEventListener('change', handleCheckboxChange);
            gitCheckbox.removeEventListener('change', handleCheckboxChange);
        };
    }, []);

    return (
        <div className="App">
            <div className="card-container">
                {selectedQuestions.map((question) => {
                    const answer = selectedAnswers.find((answer) => answer.id === question.id);
                    return <FlipCard key={question.id} question={question.text} answer={answer.text} />;
                })}
            </div>
        </div>
    );
}

function App2() {
    const questions = [
        { id: 1, text: 'What is JavaScript?' },
        { id: 2, text: 'What are variables in JavaScript?' },
        { id: 3, text: 'What is a function in JavaScript?' },
        { id: 4, text: 'What is an array in JavaScript?' },
        { id: 5, text: 'What is an object in JavaScript?' },
        { id: 6, text: 'What is a loop in JavaScript?' },
        { id: 7, text: 'What is an event in JavaScript?' },
        { id: 8, text: 'What is the DOM in JavaScript?' },
        { id: 9, text: 'What is a promise in JavaScript?' },
        { id: 10, text: 'What is async/await in JavaScript?' },
        { id: 11, text: 'What is a callback function in JavaScript?' },
        { id: 12, text: 'What is closure in JavaScript?' },
        { id: 13, text: 'What is hoisting in JavaScript?' },
        { id: 14, text: 'What is scope in JavaScript?' },
        { id: 15, text: 'What is the difference between let and var?' },
        { id: 16, text: 'What is the difference between == and ===?' },
        { id: 17, text: 'What is a template literal in JavaScript?' },
        { id: 18, text: 'What is destructuring in JavaScript?' },
        { id: 19, text: 'What is the spread operator in JavaScript?' },
        { id: 20, text: 'What is the rest parameter in JavaScript?' },
        { id: 21, text: 'What is a higher-order function in JavaScript?' },
        { id: 22, text: 'What is the event loop in JavaScript?' },
        { id: 23, text: 'What is the difference between null and undefined?' },
        { id: 24, text: 'What is the use of the this keyword in JavaScript?' },
        { id: 25, text: 'What is the prototype in JavaScript?' },
        { id: 26, text: 'What is the difference between call, apply, and bind?' },
        { id: 27, text: 'What is the difference between map and forEach?' },
        { id: 28, text: 'What is the difference between slice and splice?' },
        { id: 29, text: 'What is the difference between filter and find?' },
        { id: 30, text: 'What is the difference between reduce and reduceRight?' },
        { id: 31, text: 'What is the difference between some and every?' },
        { id: 32, text: 'What is the difference between includes and indexOf?' },
        { id: 33, text: 'What is the difference between push and unshift?' },
        { id: 34, text: 'What is the difference between pop and shift?' },
        { id: 35, text: 'What is the difference between concat and join?' },
        { id: 36, text: 'What is the difference between split and slice?' },
        { id: 37, text: 'What is the difference between charAt and charCodeAt?' },
        { id: 38, text: 'What is the difference between toUpperCase and toLowerCase?' },
        { id: 39, text: 'What is the difference between trim and trimStart?' },
        { id: 40, text: 'What is the difference between parseInt and parseFloat?' },
        { id: 41, text: 'What is the difference between isNaN and Number.isNaN?' },
        { id: 42, text: 'What is the difference between Math.floor and Math.ceil?' },
        { id: 43, text: 'What is the difference between Math.round and Math.trunc?' },
        { id: 44, text: 'What is the difference between Math.max and Math.min?' },
        { id: 45, text: 'What is the difference between Math.random and Math.abs?' },
        { id: 46, text: 'What is the difference between Date.now and new Date()?' },
        { id: 47, text: 'What is the difference between setTimeout and setInterval?' },
        { id: 48, text: 'What is the difference between clearTimeout and clearInterval?' },
        { id: 49, text: 'What is the difference between JSON.stringify and JSON.parse?' },
        { id: 50, text: 'What is the difference between localStorage and sessionStorage?' }
    ];

    const answers = [
        { id: 1, text: 'JavaScript is a programming language used to create dynamic and interactive content on websites.' },
        { id: 2, text: 'Variables in JavaScript are used to store data values.' },
        { id: 3, text: 'A function in JavaScript is a block of code designed to perform a particular task.' },
        { id: 4, text: 'An array in JavaScript is a single variable that is used to store different elements.' },
        { id: 5, text: 'An object in JavaScript is a collection of properties, and a property is an association between a name (or key) and a value.' },
        { id: 6, text: 'A loop in JavaScript is used to perform repeated tasks based on a condition.' },
        { id: 7, text: 'An event in JavaScript is an action that occurs when a user interacts with the browser.' },
        { id: 8, text: 'The DOM (Document Object Model) is a programming interface for web documents.' },
        { id: 9, text: 'A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.' },
        { id: 10, text: 'Async/await in JavaScript is a way to handle asynchronous operations more efficiently.' },
        { id: 11, text: 'A callback function in JavaScript is a function that is passed as an argument to another function.' },
        { id: 12, text: 'Closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function’s variables.' },
        { id: 13, text: 'Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.' },
        { id: 14, text: 'Scope in JavaScript is the set of variables, objects, and functions you have access to.' },
        { id: 15, text: 'The difference between let and var is that let is block-scoped and var is function-scoped.' },
        { id: 16, text: 'The difference between == and === is that == compares values and === compares values and types.' },
        { id: 17, text: 'A template literal in JavaScript is a way to create strings that allows embedded expressions.' },
        { id: 18, text: 'Destructuring in JavaScript is a way to unpack values from arrays or properties from objects into distinct variables.' },
        { id: 19, text: 'The spread operator in JavaScript allows an iterable to expand in places where 0+ arguments are expected.' },
        { id: 20, text: 'The rest parameter in JavaScript allows a function to accept an indefinite number of arguments as an array.' },
        { id: 21, text: 'A higher-order function in JavaScript is a function that takes another function as an argument or returns a function as a result.' },
        { id: 22, text: 'The event loop in JavaScript is a mechanism that allows JavaScript to perform non-blocking operations.' },
        { id: 23, text: 'The difference between null and undefined is that null is an assigned value and undefined means a variable has been declared but not assigned a value.' },
        { id: 24, text: 'The this keyword in JavaScript refers to the object it belongs to.' },
        { id: 25, text: 'The prototype in JavaScript is an object from which other objects inherit properties.' },
        { id: 26, text: 'The difference between call, apply, and bind is that call and apply invoke a function immediately, while bind returns a new function.' },
        { id: 27, text: 'The difference between map and forEach is that map returns a new array, while forEach does not.' },
        { id: 28, text: 'The difference between slice and splice is that slice returns a new array, while splice modifies the original array.' },
        { id: 29, text: 'The difference between filter and find is that filter returns all matching elements, while find returns the first matching element.' },
        { id: 30, text: 'The difference between reduce and reduceRight is that reduce processes the array from left to right, while reduceRight processes the array from right to left.' },
        { id: 31, text: 'The difference between some and every is that some checks if at least one element passes the test, while every checks if all elements pass the test.' },
        { id: 32, text: 'The difference between includes and indexOf is that includes checks if an element is present, while indexOf returns the index of the element.' },
        { id: 33, text: 'The difference between push and unshift is that push adds elements to the end of the array, while unshift adds elements to the beginning.' },
        { id: 34, text: 'The difference between pop and shift is that pop removes the last element, while shift removes the first element.' },
        { id: 35, text: 'The difference between concat and join is that concat merges arrays, while join converts an array to a string.' },
        { id: 36, text: 'The difference between split and slice is that split divides a string into an array, while slice extracts a section of an array.' },
        { id: 37, text: 'The difference between charAt and charCodeAt is that charAt returns the character at a specified index, while charCodeAt returns the Unicode of the character.' },
        { id: 38, text: 'The difference between toUpperCase and toLowerCase is that toUpperCase converts a string to uppercase, while toLowerCase converts a string to lowercase.' },
        { id: 39, text: 'The difference between trim and trimStart is that trim removes whitespace from both ends, while trimStart removes whitespace from the start.' },
        { id: 40, text: 'The difference between parseInt and parseFloat is that parseInt converts a string to an integer, while parseFloat converts a string to a floating-point number.' },
        { id: 41, text: 'The difference between isNaN and Number.isNaN is that isNaN converts the value to a number before checking, while Number.isNaN does not.' },
        { id: 42, text: 'The difference between Math.floor and Math.ceil is that Math.floor rounds down, while Math.ceil rounds up.' },
        { id: 43, text: 'The difference between Math.round and Math.trunc is that Math.round rounds to the nearest integer, while Math.trunc removes the fractional part.' },
        { id: 44, text: 'The difference between Math.max and Math.min is that Math.max returns the largest number, while Math.min returns the smallest number.' },
        { id: 45, text: 'The difference between Math.random and Math.abs is that Math.random returns a random number, while Math.abs returns the absolute value.' },
        { id: 46, text: 'The difference between Date.now and new Date() is that Date.now returns the current timestamp, while new Date() creates a new Date object.' },
        { id: 47, text: 'The difference between setTimeout and setInterval is that setTimeout executes a function once after a delay, while setInterval executes a function repeatedly.' },
        { id: 48, text: 'The difference between clearTimeout and clearInterval is that clearTimeout cancels a timeout, while clearInterval cancels an interval.' },
        { id: 49, text: 'The difference between JSON.stringify and JSON.parse is that JSON.stringify converts an object to a JSON string, while JSON.parse converts a JSON string to an object.' },
        { id: 50, text: 'The difference between localStorage and sessionStorage is that localStorage stores data with no expiration, while sessionStorage stores data for the session duration.' }
    ];

    return (
        <div className="App">
            <div className="card-container">
                {questions.map((question) => {
                    const answer = answers.find((answer) => answer.id === question.id);
                    return <FlipCard key={question.id} question={question.text} answer={answer.text} />;
                })}
            </div>
        </div>
    );
}

export default App;
export { App2 };
