import { useState, useEffect } from "react";

export const useAsync = <T>(asyncFn: () => Promise<T>, dependencies: any[]): {
  data: T | undefined;
  error: any;
  isLoading: boolean;
} => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState(true);

  if (!Array.isArray(dependencies)) {
    dependencies = [];
  }

  useEffect(() => {
    setLoading(false);
    asyncFn()
      .then((res) => {
        setData(res);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(true));
  }, [...dependencies]);

  return {
    data,
    error,
    isLoading,
  };
};