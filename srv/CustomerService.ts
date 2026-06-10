import cds from "@sap/cds";
import { getOrdersReport, Orders } from "#cds-models/CustomerService";
import { createOrderReport } from "./handlers/OrdersReport";
import { cancelOrder } from "./handlers/OrderCancel";

export class CustomerService extends cds.ApplicationService {
  init() {
    this.on("cancel", async (req) => {
      const [orderID] = req.params;
      return await cancelOrder(orderID as unknown as string); // orderID in this case will always be a string
    });

    this.on(getOrdersReport, async () => {
      return await createOrderReport();
    });

    return super.init();
  }
}