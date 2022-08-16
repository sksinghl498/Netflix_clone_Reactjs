import "./styles.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";

export default function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchTrending}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumantaries} />
    </div>
  );
}
