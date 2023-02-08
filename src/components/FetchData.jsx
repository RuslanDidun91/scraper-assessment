import { useEffect, useState } from 'react';

const FetchData = () => {
  const [repo, setRepo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = 'Equator-Studios';
    const repoName = 'scrapers';
    fetch(`https://api.github.com/repos/${username}/${repoName}/contents/scrapers`)
      .then(res => res.json())
      .then(data => {
        setRepo(data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return [repo, error];
};

export default FetchData;
