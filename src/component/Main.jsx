import axios from "axios";
import { useState, useEffect } from "react";
const apiBaseUrl = "https://lanciweb.github.io/demo/api";

export default function Main() {
  const [resultsActors, setResultsActors] = useState([]);
  const [resultsActresses, setResultsActresses] = useState([]);
  const [resultsUnique, setResultsUnique] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [filteredActors, setFilteredActors] = useState(resultsUnique);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/actors/`).then((res) => {
      setResultsActors(res.data);
    });
    axios.get(`${apiBaseUrl}/actresses/`).then((res) => {
      setResultsActresses(res.data);
    });
  }, []);
  useEffect(() => {
    setResultsUnique([...resultsActors, ...resultsActresses]);
  }, [resultsActors, resultsActresses]);
  useEffect(() => {
    setFilteredActors(
      resultsUnique.filter((actor) =>
        actor.name.toLowerCase().includes(textFilter.toLowerCase())
      )
    );
  }, [textFilter, resultsUnique]);

  return (
    <main>
      <div className="container">
        <div
          id="filter-container"
          className="mt-5 d-flex flex-column align-items-center"
        >
          <h2 className="">search actor name</h2>
          <div className="d-flex gap-2">
            <input
              type="text"
              placeholder="es: Russel Crowe"
              value={textFilter}
              onChange={(e) => setTextFilter(e.target.value)}
            />
          </div>
        </div>
        <div id="card-container" className="my-5 d-flex gap-5">
          {/* <div className="row row-cols-2">
          <h1 className="col-12 fs-1 fw-bold text-center">Actor list</h1>
          {resultsActors.map((result, id) => (
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
        <div className="row row-cols-2">
          <h1 className="col-12 fs-1 fw-bold text-center">Actresses list</h1>
          {resultsActresses.map((result, id) => (
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
        </div> */}
          <div className="row row-cols-4">
            <h1 className="col-12 fs-1 fw-bold text-center">Actor list</h1>
            {filteredActors.map((result, index) => (
              <div className="col g-4" key={index}>
                <div className="card h-100">
                  <img
                    src={result.image}
                    alt={result.name}
                    className="card-img-top w-100"
                  />
                  <div className="card-body border border-dark">
                    <h5 className="card-title">{result.name}</h5>
                    <p className="card-text">{result.biography}</p>
                  </div>
                  <ul className="list-group list-group-flush border border-dark">
                    <li className="list-group-item border border-dark">
                      Birth year: {result.birth_year}
                    </li>
                    <li className="list-group-item border border-dark">
                      Nazionality: {result.nationality}
                    </li>
                    <li className="list-group-item border border-dark">
                      Awards: {result.awards}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
