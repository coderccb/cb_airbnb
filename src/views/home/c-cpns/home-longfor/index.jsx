import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from 'src/components/section-header'
import LongforItem from 'src/components/longfor-item'
import ScrollView from 'src/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
    const { infoData } = props

    return (
        <LongforWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className="longfor-list">
                <ScrollView>
                    {
                        infoData.list.map(item => {
                            return <LongforItem itemData={item} key={item.city} />
                        })
                    }
                </ScrollView>
            </div>
        </LongforWrapper>
    )
})

HomeLongFor.propTypes = {
    infoData: PropTypes.object
}

export default HomeLongFor