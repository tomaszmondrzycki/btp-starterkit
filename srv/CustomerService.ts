import cds from "@sap/cds";
import { getOrdersReport } from "#cds-models/CustomerService";
import { createOrderReport } from "./handlers/OrdersReport";

export class CustomerService extends cds.ApplicationService {
  init() {
    this.on(getOrdersReport, async () => {
      return await createOrderReport();
    });

    return super.init();
  }
}