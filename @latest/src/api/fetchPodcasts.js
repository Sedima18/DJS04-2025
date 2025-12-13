import { useEffect, useState } from "react";

/**
 * usePodcasts - fetch podcast preview list from API
 * @returns {{ loading: boolean, error: Error|null, data: Array<object> }}
 */
export default function usePodcasts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("https://podcast-api.netlify.app")
      .then(res => {
        if (!res.ok) throw new Error("Fetch error");
        return res.json();
      })
      .then(json => {
        if (mounted) setData(json);
      })
      .catch(err => {
        if (mounted) setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => { mounted = false; };
  }, []);

  return { loading, error, data };
}