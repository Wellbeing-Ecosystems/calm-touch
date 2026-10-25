/** Kapcsolati adatok a láblécben (minden nyelven ugyanazok). */
export function FooterContact() {
  const a = { color: "inherit", whiteSpace: "nowrap" as const };
  return (
    <span style={{ display: "block", marginTop: "6px" }}>
      <a href="mailto:ugyfelszolgalat@stressz-m.hu" style={a}>ugyfelszolgalat@stressz-m.hu</a>
      {" · "}
      <a href="tel:+36702748680" style={a}>+36 70 274 8680</a>
      {" · "}
      <a href="tel:+36708574423" style={a}>+36 70 857 4423</a>
    </span>
  );
}
