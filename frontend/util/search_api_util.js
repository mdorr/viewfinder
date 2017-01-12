export const fetchSearchResults = (term, category) => {
  return $.ajax({
    method: 'POST',
    url: 'api/search',
    term: term,
    category: category
  });
};
