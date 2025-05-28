import axios from "axios";
import { useState, useEffect } from "react";
const apiBaseUrl = "https://lanciweb.github.io/demo/api";

export default function Main() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/actors/`).then((res) => {
      setResults(res.data);
    });
  }, []);

  return (
    <main>
      <div id="card-container" className="container my-5">
        <h1 className="fs-1 fw-bold">Actor list</h1>
        <div className="row row-cols-4">
          {results.map((result, id) => (
            <div className="col g-4" key={result.id}>
              <div className="card h-100">
                <img
                  src={result.image}
                  alt={result.name}
                  className="card-img-top w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
                  <p className="card-text">{result.biography}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Anno di nascita: {result.birth_year}
                  </li>
                  <li className="list-group-item">
                    Nazionalità: {result.nationality}
                  </li>
                  <li className="list-group-item">
                    Riconoscimenti: {result.awards}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
