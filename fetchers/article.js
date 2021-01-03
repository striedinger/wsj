const { ALLESSEH_ENDPOINT, ALLESSEH_KEY } = process.env;

// Adds referenced data (links, image url's, etc.) to elements from `links.related` array
const expandElements = (json = [], references = []) => (
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
  const id = json.data?.id;
  const data = json.data?.attributes || {};
  const references = json.links?.related || [];
  const body = expandElements(data.body, references);
  return {
    id,
    headline: data.headline?.text || null,
    subheadline: data.standfirst?.content?.[0]?.text || null,
    published: data.published_datetime || null,
    updated: data.updated_datetime || null,
    byline: data.byline || [],
    hero: body.length > 0 && (body[0].type === 'image' || body[0].type === 'video') && body.shift(),
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
