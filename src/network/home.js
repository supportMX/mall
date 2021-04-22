import { request } from './request'

export function getHomeMultidata() {
    return request({
        BaseConfig: {
            url: '/home/multidata',
        },
    })
}
