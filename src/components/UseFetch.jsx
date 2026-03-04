import { useEffect, useState } from "react";

const UseFetchData = (url) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies(url) {
      try {
        setFetchError(null);
        setIsLoading(true);

        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok)
          throw new Error(`${response.status}-${response.type}-API Fetch`);

        const data = await response.json();

        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setFetchError(error.message);
          console.error("fetch error,", error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (url) {
      fetchMovies(url);
    }

    // clean up function
    return () => controller.abort();
  }, [url]);

  return [data, fetchError, isLoading];
};

export default UseFetchData;
