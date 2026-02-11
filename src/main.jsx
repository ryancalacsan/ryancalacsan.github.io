import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/styles.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Remove no-transition class after initial paint to enable theme transitions
requestAnimationFrame(() => {
  document.body.classList.remove("no-transition")
})
