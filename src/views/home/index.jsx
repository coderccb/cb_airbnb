import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'

import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from 'src/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from 'src/utils'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from 'src/store/modules/main'

const Home = memo(() => {

  // 从redux中获取数据
  const { 
      goodPriceInfo,
      highScoreInfo, 
      discountInfo, 
      recommendInfo, 
      longforInfo,
      plusInfo
    } = useSelector((state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
  }), shallowEqual)

  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        {/* 折扣数据 */}
        {/* <div className='discount'>
          <SectionHeader title={discountInfo?.title} subtitle={discountInfo?.subtitle}/>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={discountInfo?.dest_list?.[name]} itemWidth="33.333%"/>
        </div> */}
        
        { isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/> }
        { isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/> }
        { isEmptyObject(longforInfo) && <HomeLongFor infoData={longforInfo}/>}
        { isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        { isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
        { isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home