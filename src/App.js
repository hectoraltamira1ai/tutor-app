import React, { useState } from 'react';
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
    const questions = [
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

    const answers = [
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
