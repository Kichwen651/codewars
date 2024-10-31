var React = require("react");

function createElement(content, tag = 'div', props = {}) {
  // Create a React element with the specified content, tag, and props
  return React.createElement(tag, props, content);
}

function createUnorderedList(list) { 
  // Create a React unordered list with children list items
  const listItems = list.map((item, index) => 
    React.createElement('li', { key: index }, item)
  );
  
  // Return the unordered list element
  return React.createElement('ul', null, ...listItems);
}

const greetingElement = createElement('Hello World'); 
const fruitsListElement = createUnorderedList(['apples', 'oranges', 'bananas']);