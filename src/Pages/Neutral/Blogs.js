import React from 'react';

const Blogs = () => {
    return (
        <div className='px-14 py-8'>
            <div className='my-5'>
                <h4 className="text-2xl">Question: How will you improve the performance of a React Application?</h4>
                <p>Answer: There are many ways we can improve the performance of React App. Here are some of them is discussed:

                    <ul className="list-disc ml-10">
                        <li>useMemo()-
                            This is a React hook that is used to cache functions in React, CPU-expensive functions.</li>
                        <li>React.PureComponent-
                            Just like what shouldComponentUpdate does to class components, so also React.PureComponent.</li>
                        <li> Caching functions-
                            Functions can be called in the React component JSX in the render method.</li>
                        <li>Lazy loading-
                            Lazy loading has come to be one of the optimization techniques widely used now to speed up the load time. The prospect of Lazy Loading helps reduce the risk of some of the web app performance problems to a minimal.</li>
                        <li>shouldComponentUpdate()-
                            A React app is composed of components, from the root component usually App in App.js to the spreading branches.</li>
                    </ul>


                </p>
            </div>
            <div className='my-5'>
                <h4 className="text-2xl">Question: How does prototypical inheritance work?</h4>
                <p>Answer:  The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>
            </div>
            <div className='my-5'>
                <h4 className="text-2xl">Question: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                <p>Answer: useState is immuteable. Mutating state directly can lead to odd bugs, and components that are hard to optimize. Actually State updates in React are asynchronous; when an update is requested, there is no guarantee that the updates will be made immediately. Here are a few reasons: <br />
                    <ul className='list-disc ml-10'>
                        <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                        <li>When you directly update the state, it does not change this.state immediately. </li>
                        <li>You will lose control of the state across all components.</li>
                    </ul></p>
            </div>
            <div className='my-5'>
                <h4 className="text-2xl">Question: What are the different ways to manage a state in a React application?</h4>
                <p>Answer: Managing state in your React apps isn’t as simple as using useState or useReducer. Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others). There are four main types of state you need to properly manage in your React apps: <br />
                    <ul className='list-disc ml-10'>
                        <li>Local (UI) state – Local state is data we manage in one or another component.</li>
                        <li>Global (UI) state – Global state is data we manage across multiple components.</li>
                        <li>Server state – Data that comes from an external server that must be integrated with our UI state.</li>
                        <li>URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
                    </ul></p>
            </div>
            <div className='my-5'>
                <h4 className="text-2xl">Question: What is a unit test? Why should write unit tests?</h4>
                <p>Answer: Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. Here are a few benefits to writing unit tests: <br />
                    <ul className='list-disc ml-10'>
                        <li>Unit tests save time and money.</li>
                        <li>It simplifies the debugging process.</li>
                        <li>Unit testing is an integral part of extreme programming.</li>
                        <li>Unit testing improves code coverage.</li>
                    </ul></p>
            </div>
        </div>
    );
};

export default Blogs;