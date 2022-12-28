((document) => {
  const params = new URLSearchParams(document.location.search);
  const yelpPageRegex = /yelp\./; // account for yelp.com, yelp.ca, etc.

  function insertParam(key, value) {
    params.set(key, value);
    document.location.search = params.toString();
  }

  function alreadySortedByDateDesc() {
    return params.has('sort_by') && params.get('sort_by') === 'date_desc';
  }

  function onYelpPage() {
    return yelpPageRegex.test(document.location.hostname);
  }

  function sortByDateDesc() {
    if (!onYelpPage() || alreadySortedByDateDesc()) {
      return;
    }
    insertParam('sort_by', 'date_desc');
  }

  sortByDateDesc();
})(document);
