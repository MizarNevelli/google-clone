export const search = (e, router, inputRef) => {
  e.preventDefault();
  const term = inputRef?.current?.value;
  if (!term?.trim()) return;
  router.push(`/search?term=${term?.trim()}`);
};
