import styled from "styled-components";

export const FooterWrapper = styled.div`

    .wrapper {
        width: 1080px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 48px 24px;

        .service {
            display: flex;

            .item {
                flex: 1;

                .name {
                    margin-bottom: 16px;
                    font-weight: 700;
                }

                .list {
                    .iten {
                        margin-top: 6px;
                        color: #676767;
                        cursor: pointer;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        .statement {
            margin-top: 30px;
            border-top: 1px solid #EBEBEB;
            padding: 20px;
            color: #676767;
            text-align: center;
        }
    }
`