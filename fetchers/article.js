import get from 'lodash.get';

const { ALLESSEH_ENDPOINT, ALLESSEH_KEY } = process.env;

// Adds referenced data (links, image url's, etc.) to elements from `links.related` array
const expandElements = (json = [], references) => (
  json.map((element) => {
    if (element.ref) {
      const expandedElement = references.find((item) => item.id === element.ref) || {};
      return {
        ...element,
        ...expandedElement,
      };
    }
    if (element.content) {
      return {
        ...element,
        content: expandElements(element.content, references),
      };
    }
    return element;
  })
);

// Formats Allesseh data to a simpler object while keeping each element's schema
export const format = (json) => {
  const id = get(json, 'data.id');
  const data = get(json, 'data.attributes', {});
  const references = get(json, 'links.related', []);
  const body = expandElements(get(data, 'body', []), references);
  return {
    id,
    headline: get(data, 'headline.text', null),
    subheadline: get(data, 'standfirst.content[0].text', null),
    published: get(data, 'published_datetime', null),
    updated: get(data, 'updated_datetime', null),
    byline: get(data, 'byline', []),
    body,
  };
};

export default (seoId) => {
  const url = `${ALLESSEH_ENDPOINT}/api/articles/v1/wsj/seoId/${seoId}`;
  return fetch(url, { headers: { 'x-api-key': ALLESSEH_KEY } })
    .then((response) => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
      }
      return response.json();
    })
    .then((json) => format(json));
};
