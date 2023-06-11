import { orderService } from "../services/order-service.js";
import { validateEmptyBody } from "../utils/validators.js";
import { userAuthService } from "../services/user-service.js";
import { productService } from "../services/product-service.js";
import { NOT_FOUND, CREATED, OK, NO_CONTENT } from "../utils/constants.js";

const orderController = {
    orderPostCreate: async function(req, res, next) {
        try{
            validateEmptyBody(req)
            const { productId } = req.body;
            const buyer = req.currentUserId;

            const createdOrder = await orderService.createOrder({ productId, buyer })
        
            return res.status(CREATED).json(createdOrder);
        } catch (error) {
        next(error);
        }
    },

    orderGetMypage: async function(req, res, next) {
        try {
            const buyer = req.currentUserId;
            const orderDetails = await orderService.getOrdersByBuyer(buyer);
    
            if (orderDetails.length === 0) {
                return res.json({ message: '주문 내역이 없습니다.' });
            }
    
            return res.status(OK).json(orderDetails);
        } catch (error) {
            error.status = NOT_FOUND;
            next(error);
        }
    }
}
export { orderController };