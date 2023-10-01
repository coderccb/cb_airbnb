import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from 'src/components/section-header'
import SectionRooms from 'src/components/section-rooms'
import SectionFooter from 'src/components/section-footer'

const HomeSectionV1 = memo((props) => {
    const { infoData } = props

    return (
        <SectionV1Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <SectionRooms roomList={infoData.list} itemWidth="25%"/>
            <SectionFooter/>
        </SectionV1Wrapper>
    )
})

HomeSectionV1.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV1