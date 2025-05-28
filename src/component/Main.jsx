import axios from "axios";

const apiBaseUrl = "https://lanciweb.github.io/demo/api";

export default function Main() {
  axios.get(`${apiBaseUrl}/actors/`).then((res) => {
    console.log(res.data);
  });
  return (
    <main>
      <div className="container"></div>
    </main>
  );
}
