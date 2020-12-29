import fetchArticle from 'fetchers/article';

export default async (req, res) => {
  const { query: { id: seoId } } = req;
  try {
    const data = await fetchArticle(seoId);
    return res.json(data);
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
};
