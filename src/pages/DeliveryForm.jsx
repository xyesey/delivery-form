import React from "react";
import Table from "../components/Table";

function DeliveryForm() {
  return (
    <section className="delivery-form root">
      <div className="delivery-form__heading">
        <h1 className="delivery-form__heading_text">
          Доставка поставщиков online
        </h1>
      </div>

      <Table />
    </section>
  );
}

export default DeliveryForm;
