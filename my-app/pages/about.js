import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const About = () => {
  const [movie, setMovie] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch movie data
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://faithful-calf-pants.cyclic.app/api/movies/_id`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, []);

  const handleClick = (title) => {
    router.push(`/movies/${encodeURIComponent(title)}`);
  };

  return (
    <div>
      <PageHeader text="About the Developer"/>
      <Card className="bg-light">
        <Card.Body>
          <p>Hello! My name is Gaurav Saini, and I am a student at Seneca College studying software development.</p>
          <p>For this project, I used Next.js and React to build a movie search engine that pulls information from a unique RESTful API. The API includes details about the cast, director, release year, and title of the film. </p>
          <p>If you are interested in a specific movie, you can view its details by clicking on its title. For example, you can view the details for the movie <Link href="/movies/Dark City">Dark City</Link>.</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
