const { getPostSearchService } = require('../services/getPostSearch.service');

async function getPostSearchController(request, response) {
  const { q } = request.query;
  const qParams = await getPostSearchService(q, request.params);
  return response.status(200).json(qParams);
}

module.exports = { getPostSearchController };