import get from 'lodash.get';

const ALLESSEH_ENDPOINT = process.env.ALLESSEH_ENDPOINT;
const ALLESSEH_KEY = process.env.ALLESSEH_KEY;

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
    .then((json) => {
      return format(json);
    });
};

const expandElements = (json = [], references) => {
  return json.map((element) => {
    if (element.type === 'image' || element.type === 'video' || element.type === 'media') {
      const expandedElement = references.find(item => item.id === element.ref) || {};
      return {
        ...element,
        ...expandedElement,
      };
    }
    if (element.type === 'link') {
      const expandedElement = references.find(item => item.id === element.ref) || {};
      return {
        ...element,
        ...expandedElement,
      }
    }
    if (element.type === 'paragraph') {
      element.content = expandElements(element.content, references);
      return element;
    }
    return element;
  });
};

export const format = (json) => {
  const id = get(json, 'data.id');
  const data = get(json, 'data.attributes', {});
  const references = get(json, 'links.related', []);
  const body = expandElements(get(data, 'body', []), references);
  return {
    id,
    headline: get(data, 'headline.text'),
    subheadline: get(data, 'standfirst.content[0].text'),
    published: get(data, 'published_datetime'),
    updated: get(data, 'updated_datetime'),
    byline: get(data, 'byline'),
    body,
  };
};
