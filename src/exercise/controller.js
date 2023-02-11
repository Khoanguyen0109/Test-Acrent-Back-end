import startOfDay from 'date-fns/startOfDay';
import { exerciseData } from '../mock/data';
import { rSuccess } from '../utils/response';

export async function getExercise(req, res) {
  const date = req.query.date;
  if (date) {
    return exerciseData.filter(
      (ex) => startOfDay(new Date(ex.date)) === startOfDay(new Date(date))
    );
  }
  return rSuccess(res, 200, { exercises: exerciseData });
}
