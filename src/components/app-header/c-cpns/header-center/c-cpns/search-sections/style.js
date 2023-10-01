import styled from "styled-components";

export const SectionWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 680px;
    height: 60px;
    border: 2px solid #eee;
    border-radius: 30px;
    padding: 0 30px;
    background-color: #fff;

    .item {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        width: 160px;
        height: 40px;
        border-right: 1px solid #eee;
        margin-right: 20px;
        /* padding: 5px 30px; */

        &:last-child {
            border-right: none;
        }
        .info {
            text-align: left;

            .title {
                font-weight: 600;
                font-size: 16px;
            }

            .desc {
                color: #808080;
            }
        }
    }
`