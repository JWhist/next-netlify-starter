const myFunc = require("netlify/functions/myFunction");

export default function RandomThing() {
  return (
    <p>
      <Button onClick={myFunc}>Click me</Button>
    </p>
  );
}
