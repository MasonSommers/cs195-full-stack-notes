// react v vanilla JS

// Vanilla JS button with count
let vanillaCount = 0;
button.addEventListener("click", () => {
  vanillaCount++;
  // YOU manually update the display
  document.querySelector(".count").textContent = vanillaCount;
});

// React button with count
const [reactCount, setReactCount] = useState(0);
//     var         ^ how to update var       ^ default value for var

<button onClick={() => setReactCount(reactCount + 1)}>{reactCount}</button>;
// ^ buton ^ onClick   ^update reactCount              ^display reactCount

function Greeting() {
  const name = "Student";
  const isLoggedIn = true;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </div>
  );
}
