import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            //1.payload新添加的商品
            //添加若为购物车已有商品，则+1，否则添加该商品至购物车
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

            //2.判断oldProduct
            if (oldProduct) {
                context.commit(ADD_COUNTER, oldProduct);
                resolve('购物车已有该商品，商品数量+1')
            } else {
                payload.count = 1
                context.commit(ADD_TO_CART, payload)
                resolve('加入购物车成功')
            }
        })

    }
}