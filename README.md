# Meteor-React-Spin

Meteor-React-Spin is a simple [Spin.js](http://fgnass.github.io/spin.js/) wrapper
intended for use in Meteor projects that use React.js.

It's a copy of [meteor-spin](https://github.com/SachaG/meteor-spin) with minor
changes such as using a React component instead of a Blaze template and
adding a convenient mixin.

Installation:

```meteor add dpraburaj:react-spin```

The spinner can be instantiated like so

```jsx
<SpinnerView />
```

Appearance options for the spinner can be passed to the SpinnerView as follows.

```jsx
let spinnerOptions = {
    lines: 19,
    length: 6,
    width: 4,
}
<SpinnerView options={spinnerOptions} />
```

## SpinnerMixin

There is also a mixin provided that will automatically instantiate the
spinner and remove it once your data is ready and the component ready to be rendered.
To use this mixin, two steps are required

* Add the `SpinnerMixin` to your component's `mixins` property.
* Specify the subscriptions that your component uses in the `getMeteorData`
  function.

Example:
```jsx
Todo = React.createClass({
	mixins: [ReactMeteorData, SpinnerMixin],

	getMeteorData() {
    	let todosSub = Meteor.subscribe('todos')
        return {
        	// Add your subscriptions to the subscriptions property
        	subscriptions: [ todosSub ],
            todos: Todos.find().fetch()
        }
    },

    render() {
    	return <TodoItems todos={this.data.todos} />
    }
})
```

### Wrapping the spinner in another element

When using the mixin, your component's `render` function will render the spinner as the sole element. In certain cases, this may not be desired, since it could lead to the positioning of the spinner not being where you want it to be.

There's an optional callback function for the `SpinnerMixin` that allows you to wrap the spinner
in another element.

Example:
```jsx
Todo = React.createClass({
	mixins: [ReactMeteorData, SpinnerMixin],

	getMeteorData() {
    	let todosSub = Meteor.subscribe('todos')
        return {
        	// Add your subscriptions to the subscriptions property
        	subscriptions: [ todosSub ],
            todos: Todos.find().fetch()
        };
    },

    //  Add this function to wrap the default spinner. A parameter with
   	//  the default <Spinner /> instance will be passed to this function
    //  before it's called

    spinnerWrapper(spinner) {
    	return <div className="my-container"> {spinner} </div>;
    },

    render() {
    	return <TodoItems todos={this.data.todos} />
    }
})
```
