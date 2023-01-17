// import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
// import { API_URI } from '../constants';
import { atoms } from '../store';

// const fetchDetailFoodList = () => async () => {
//   const response = await axios.get(`http://localhost:8080/menus`);
//   return response;
// };

const fetchDetailFoodList = () => async () => {
  const truck = useRecoilValue(atoms.fireStore);
  return truck;
};

function useDetailFoodList(id) {
  return useQuery(['detailfoodlist', id], fetchDetailFoodList(id));
}

export { useDetailFoodList };
