import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { atoms } from '../../store';
import { getDocs, collection, db } from '../../utils/firebase';
import { CustomModal } from '../CustomModal';
import { Section, Menu, MenuInfo, Name, Info, Price, MenuImg } from './styles';
import {
  useModal,
  // useDetailFoodList
} from '../../hooks';

function DetailFoodList({ storeId, storeName }) {
  const [openFood, closeFood] = useModal('food');
  const setMenuOrder = useSetRecoilState(atoms.menuOrder);
  // const { data } = useDetailFoodList(storeId);
  const [data, setData] = useState({});
  async function getStores() {
    const store = await getDocs(collection(db, 'store'));
    store.forEach((doc) => {
      setData(doc.data());
    });
  }

  useEffect(() => {
    getStores();
  }, []);

  const handleOnClick = (id, name, value) => () => {
    openFood();
    setMenuOrder({ storeId: id, storeName: name, ...value });
  };

  // const createFoodMenuList = () => {
  //   return truck.map((menu) => (
  //     <Menu key={menu.name} onClick={handleOnClick(storeId, storeName, menu)}>
  //       <MenuInfo>
  //         <Name>{menu.name}</Name>
  //         <Info>{menu.content}</Info>
  //         <Price>{menu.price}</Price>
  //       </MenuInfo>
  //       {menu.image ? (
  //         <MenuImg>
  //           <img alt="menuImg" src={menu.image} />
  //         </MenuImg>
  //       ) : null}
  //     </Menu>
  //   ));
  // };

  return (
    <Section>
      <Menu key={data.name} onClick={handleOnClick(storeId, storeName, data)}>
        <MenuInfo>
          <Name>{data.name}</Name>
          <Info>{data.content}</Info>
          <Price>{data.price}</Price>
        </MenuInfo>
        {data.image ? (
          <MenuImg>
            <img alt="menuImg" src={data.image} />
          </MenuImg>
        ) : null}
      </Menu>
      <CustomModal.Food closeModal={closeFood} />
    </Section>
  );
}

export { DetailFoodList };
