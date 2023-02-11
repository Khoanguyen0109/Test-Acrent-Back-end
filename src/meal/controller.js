import { DEFAULT } from '../constants';
import { mealHistory } from '../mock/data';
import { rSuccess } from '../utils/response';

export async function getMealHistory(req, res) {
  const type = req.query.type;
  const page = parseInt(req.query?.page) || DEFAULT.PAGE;
  const limit = parseInt(req.query?.limit) || DEFAULT.LIMIT;
  const skipIndex = (page - 1) * limit;
  let totalMeal = mealHistory.length;
  let data;

  if (type) {
    const dataFilter = mealHistory.filter((re) => re.type === parseInt(type));
    totalMeal = dataFilter.length;
    data = dataFilter.slice(skipIndex, page * limit);
  } else {
    data = mealHistory.slice(skipIndex, page * limit);
  }

  return rSuccess(res, 200, { totalMeal, meals: data });
}
