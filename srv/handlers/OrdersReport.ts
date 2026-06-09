import cds from "@sap/cds";
import { Orders } from "#cds-models/btp/starterkit";
import { StatusCount } from "#cds-models/CustomerService";

const createOrderReport = async () => {
  const query = SELECT.from(Orders)
    .columns(`count(ID)`, `status`)
    .groupBy(`status`);
  return (await cds.run(query)) as StatusCount[];
};

export { createOrderReport };