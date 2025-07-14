import "./App.css";
import "./Weather.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="London" />

        <footer>
          This page was coded by{" "}
          <a
            href="https://github.com/Mahdia-123"
            target="_blank"
            rel="noreferrer"
          >
            Mahdia Khamoosh
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mahdia-123/react-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced o Github
          </a>{" "}
          hosted on{" "}
          <a
            href="https://lovely-weather-search.netlify.app/ "
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
