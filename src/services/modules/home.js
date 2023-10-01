import cbRequest from "../request/index";

export function getHomeGoodPriceData() {
    return cbRequest.get({
        url: "/home/goodprice"
    })
}

export function getHomeHighScoreData() {
    return cbRequest.get({
        url: "/home/highscore"
    })
}

export function getHomeDiscountData() {
    return cbRequest.get({
        url: "/home/discount"
    })
}

export function getHomeHotRecommendData() {
    return cbRequest.get({
        url: "/home/hotrecommenddest"
    })
}

export function getHomeLongforData() {
    return cbRequest.get({
        url: "/home/longfor"
    })
}

export function getHomePlusData() {
    return cbRequest.get({
        url: "/home/plus"
    })
}