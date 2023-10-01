import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetaPictures from './c-cpns/detail-pictues'
import DetailInfos from './c-cpns/detail-infos'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from 'src/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetaPictures/>
      <DetailInfos/>
    </DetailWrapper>
  )
})

export default Detail