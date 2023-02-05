import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../../../utils/firebase';
// import { useParams } from 'react-router-dom';
// import { useFoodDetail } from '../../../hooks';
import { COLOR, TEXT } from '../../../constants';
import {
  Section,
  MainBody,
  FoodTruckName,
  FoodTruckCapsulizedInfo,
  FoodTruckImg,
  CapsulizedInfo,
  Notice,
  MenuBar,
  ReviewTabBtn,
  InfoTabBtn,
  MenuTabBtn,
  MenuSection,
  InfoItem,
  Text,
  FoodTruckTag,
} from './styles';
import {
  DetailFoodList,
  DetailInfo,
  DetailReview,
  Receipt,
} from '../../../components';

function FoodDetail() {
  // const { id } = useParams();
  // const { data } = useFoodDetail(id);
  const [tabType, setTabType] = useState('menu');
  const [truck, setTruck] = useState({});
  const handleOnClick = (tabItem) => () => setTabType(tabItem);

  async function getStores() {
    const store = await getDocs(collection(db, 'store'));
    store.forEach((doc) => {
      setTruck(doc.data());
    });
  }

  useEffect(() => {
    getStores();
  }, []);

  const {
    storeName,
    storeImage,
    storeContent,
    totalGrade,
    storeWaitTime,
    storeTag,
    totalMenu,
    totalReview,
    storeId,
  } = truck;

  const id = storeId;
  const { FOODTRUCK_IMG } = process.env;

  const tabMenu = {
    menu: <DetailFoodList storeId={id} storeName={storeName} />,
    review: <DetailReview storeId={id} />,
    info: <DetailInfo storeId={id} />,
  };

  return (
    <Section>
      <MainBody>
        <FoodTruckName>{storeName}</FoodTruckName>
        <FoodTruckCapsulizedInfo>
          <FoodTruckImg src={storeImage || FOODTRUCK_IMG} />
          <CapsulizedInfo>
            <InfoItem>
              <Text color="#999999" size={13}>
                {TEXT.FOODDETAIL.STAR}
              </Text>
              <Text color="#333333" size={13} style={{ color: COLOR.YELLOW }}>
                {totalGrade}
              </Text>
            </InfoItem>
            <InfoItem>
              <Text color="#999999" size={13}>
                {TEXT.FOODDETAIL.WAIT_TIME}
              </Text>
              <Text color="#333333" size={13}>
                {storeWaitTime}
              </Text>
            </InfoItem>
            <InfoItem>
              <Text color="#999999" size={13}>
                {TEXT.FOODDETAIL.TAG}
              </Text>
              <FoodTruckTag>{storeTag}</FoodTruckTag>
            </InfoItem>
          </CapsulizedInfo>
        </FoodTruckCapsulizedInfo>
        <Notice className="Notice">
          <Text as="strong" color="#333333" size={12}>
            {TEXT.FOODDETAIL.NOTICE}
          </Text>
          <Text color="#666666" size={12}>
            {storeContent}
          </Text>
        </Notice>

        <MenuSection>
          <MenuBar>
            <MenuTabBtn
              menu={tabType}
              type="button"
              onClick={handleOnClick('menu')}
            >
              {TEXT.FOODDETAIL.MENU(totalMenu)}
            </MenuTabBtn>
            <ReviewTabBtn
              menu={tabType}
              type="button"
              onClick={handleOnClick('review')}
            >
              {TEXT.FOODDETAIL.CLEAN_REVIWE(totalReview)}
            </ReviewTabBtn>
            <InfoTabBtn
              menu={tabType}
              type="button"
              onClick={handleOnClick('info')}
            >
              {TEXT.FOODDETAIL.INFO}
            </InfoTabBtn>
          </MenuBar>
          {tabMenu[tabType]}
        </MenuSection>
      </MainBody>
      <Receipt />
    </Section>
  );
}

export default FoodDetail;
