import { useCallback, useState } from "react";

const useAsync = (asyncFunction) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...arg) => {
      try {
        setError(null);
        setPending(true);
        return await asyncFunction(...arg);
      } catch (error) {
        setError(error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return [pending, error, wrappedFunction];
};

export default useAsync;
