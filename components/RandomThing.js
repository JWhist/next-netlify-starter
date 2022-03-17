const axios = require("axios");
const myFunc = () =>
  axios.get(
    "https://angry-goodall-44bfac.netlify.app/.netlify/functions/myFunction"
  );

export default function RandomThing() {
  return (
    <p>
      <button onClick={myFunc}>Click me</button>
    </p>
  );
}
