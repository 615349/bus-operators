import { useEffect, useState } from "react";

type State<T> = {
  error: string;
  loading: boolean;
  data: T | null;
}

function useFetch<T = unknown>(url: string): State<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json);
      } catch(e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  }
}

export default useFetch;
