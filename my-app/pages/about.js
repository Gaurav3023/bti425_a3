import Link from "next/link";
import { Card } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps() {
  return new Promise((resolve)=>{
    fetch('https://faithful-calf-pants.cyclic.app/api/movies/573a13a3f29313caabd0d5a4').then(res=>res.json()).then(data=>{
      resolve({ props: { movie: data } })
    })
  })
}

export default function About(props) {
  return (
    <div>
      <PageHeader text="About the Developer"/>
      <Card className="bg-light">
        <Card.Body>
          <p>Hello! My name is Gaurav Saini, and I am a student at Seneca College studying software development.</p>
          <p>For this project, I used Next.js and React to build a movie search engine that pulls information from a unique RESTful API. The API includes details about the cast, director, release year, and title of the film. </p>
          <p>If you are interested in a specific movie, you can view its details by clicking on its title. For example, you can view the details for the movie <Link href="/movies/Dark City">Dark City</Link>.</p>
          <MovieDetails movie={props}/>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

