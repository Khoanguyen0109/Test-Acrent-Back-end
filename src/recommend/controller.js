import { DEFAULT } from '../constants';
import { recommendData } from '../mock/data';
import { rSuccess } from '../utils/response';

export async function getRecommends(req, res) {
  const category = req.query.category;
  const page = parseInt(req.query?.page) || DEFAULT.PAGE;
  const limit = parseInt(req.query?.limit) || DEFAULT.LIMIT;
  const skipIndex = (page - 1) * limit;
  let totalRecommend = recommendData.length;
  let data;

  if (category) {
    const dataFilter = recommendData.filter((re) => re.category === category);
    totalRecommend = dataFilter.length;
    data = dataFilter.slice(skipIndex, page * limit);
  } else {
    data = recommendData.slice(skipIndex, page * limit);
  }

  return rSuccess(res, 200, { totalRecommend, recommends: data });
}
