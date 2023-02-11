import { DEFAULT } from '../constants';
import { diaryHistory } from '../mock/data';
import { rSuccess } from '../utils/response';

export async function getDiaryHistory(req, res) {
  const page = parseInt(req.query?.page) || DEFAULT.PAGE;
  const limit = parseInt(req.query?.limit) || DEFAULT.LIMIT;
  const skipIndex = (page - 1) * limit;
  const totalDiary = diaryHistory.length;
  const data = diaryHistory.slice(skipIndex, page * limit);

  return rSuccess(res, 200, { totalDiary, diaries: data });
}
