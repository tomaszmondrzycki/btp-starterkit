import { CancelledOrder } from "#cds-models/CustomerService";
import { OrderStatus, Orders } from "#cds-models/btp/starterkit";

const cancelOrder = async (orderID: string) => {
  const { NEW, PROCESSED, CANCELLED } = OrderStatus;
  const cancellable = [NEW, PROCESSED];

  const changed: boolean =
    (await UPDATE(Orders, orderID)
      .with({ status: CANCELLED })
      .where({ status: { in: cancellable } })) === 1;
  const res: CancelledOrder = { changed };
  return res;
};

export { cancelOrder };