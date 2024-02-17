import { useRouter } from 'next/router';
import useSWR from 'swr';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';
import MovieDetails from '@/components/MovieDetails';

export default function Movie() {
  const router = useRouter();
  const { title } = router.query;

  const { data, error } = useSWR(`https://faithful-calf-pants.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);

  if (!data) {
    return null;
  }

  if (data.length === 0) {
    return <Error statusCode={404} />;
  }

  const movie = data[0];

  return (
    <div key={movie._id}>
      <PageHeader title={movie.title} />
      <MovieDetails movie={movie} />
    </div>
  );
}
