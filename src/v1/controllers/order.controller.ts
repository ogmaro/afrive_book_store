import {  Request, Response } from 'express';
import { response } from '../utiles/response.util';
import catchAsync from '../utiles/catchAsync';
import orderService from '../services/order.service';

class OrderController {
    public create = catchAsync(async (req: Request, res: Response) => {
        const result = await orderService.create(req);
        res.status(201).json(response('Order Created Succesfully', result));
    });
    
    public getOrdersByUserID = catchAsync(async (req: Request, res: Response) => {
        const result = await orderService.getOrdersByUserID(req);
        res.status(200).json(response('Order Found', result));
    });
    
    public destroy = catchAsync(async (req: Request, res: Response) => {
        const result = await orderService.destroy(req);
        res.status(200).json(response('Order deleted Successfully', result));
    });
}
export default new OrderController;