((document) => {
  const params = new URLSearchParams(document.location.search);

  function insertParam(key, value) {
    params.set(key, value);
    document.location.search = params.toString();
  }

  function alreadySortedByDateDesc() {
    if (params.has('sort_by')) {
      return params.get('sort_by') === 'date_desc';
    }
    return false;
  }

  function onYelpPage() {
    // account for international yelp sites
    return document.location.hostname.startsWith('www.yelp.');
  }

  function sortByDateDesc() {
    if (!onYelpPage() || alreadySortedByDateDesc()) {
      return;
    }
    insertParam('sort_by', 'date_desc');
  }

  document.onload = sortByDateDesc();
})(document);
