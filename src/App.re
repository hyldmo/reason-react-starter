/* This is the basic component. */
let component = ReasonReact.statelessComponent("App");

let make = (_children) => {
	...component,
	render: _ =>
	<div>
		<Component1 message="Hello!" />
		<Component2 greeting="Hello!" />
	</div>,
};
