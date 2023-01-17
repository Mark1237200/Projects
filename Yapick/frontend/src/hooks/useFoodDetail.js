// import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
// import { API_URI } from '../constants';
import { atoms } from '../store';

// const fetchFoodDetail = () => async () => {
//   const response = await axios.get('http://localhost:8080/store');
//   return response;
// };

const fetchFoodDetail = () => async () => {
  const truck = useRecoilValue(atoms.fireStore);
  return truck;
};

function useFoodDetail(id) {
  return useQuery(['foodDetail', id], fetchFoodDetail(id));
}

export { useFoodDetail };
