import { Information } from "../components/Information";
import { RequestStatusCard } from "../components/RequestStatusCard";
import { services } from "../constants/services";

export const External = () => (
  <div
    style={{ display: "flex", flexDirection: "column", gap: 48, marginTop: 48 }}
  >
    <h1 style={{ fontSize: 40, fontWeight: 700, lineHeight: 1, margin: 0 }}>
      Athena's status
    </h1>
    <Information>
      If you do experience any issues or have an urgent enquiry give us a buzz
      on <a href="tel:133535">13 35 35</a> or SMS us on{" "}
      <a href="sms:0429333555">0429 333 555</a>.
    </Information>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      {services.map((service) => (
        <div
          key={service.name}
          style={{ flexBasis: 600, flexGrow: 1, flexShrink: 1 }}
        >
          <RequestStatusCard
            name={service.name}
            url={service.url}
            payload={service.payload}
          />
        </div>
      ))}
    </div>
  </div>
);
