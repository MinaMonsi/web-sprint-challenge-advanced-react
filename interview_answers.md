# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
   A stateful component depends on it's state object and can change it's own state. The component re-renders based on it's changes to it's state, and may pass down properities of it's state to child components as properties on a props object.
   Functional componenets are basic JavaScript functions. They are arrow functions, but can also be created with the regular function keyword. This type of component accepts data and displays them in some form.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   A componentWillMount is called when the render method is executed. It is important to note that etting the state in this phase will not trigger a re-rendering.
   componentWillUpdate gets called as sosn as the shouldComponentUpdate returned true. Any state changes via this.setState are not allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself.

3. Define stateful logic.
   Stateful logic is any code that uses state. It is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state, or even a function that formats data before it gets displayed.
4. What are the three step of creating a successful test? What is done in each phase?
   The three steps to creating a successful test are arrange, act, and assert.
   In the arrange stage a render method is used and it renders a React element into a virtual DOM.
   In the Act stage is where the actual work of the test is performed. During the assert stage, the result of what is expected is verified.
