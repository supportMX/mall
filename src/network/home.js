import { request } from './request'

export function getHomeMultidata() {
    return request({
        BaseConfig: {
            url: '/home/multidata',
        },
    })
}

export function getHomeGoods(page, type) {
    return request({
        BaseConfig: {
            url: '/home/data',
            params: {
                page,
                type,
            },
        },
    })
}
