const makeObserverCallback =
  (callbackRef) =>
  ([entries]) => {
    if (entries.isIntersecting) {
      callbackRef?.current();
    }
  };

export default makeObserverCallback;
