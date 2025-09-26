import React from "react";

const Disclaimer = () => {
  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        fontSize: "12px",
        lineHeight: "1.5",
        color: "#666",
        borderTop: "1px solid #ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Disclaimer Text */}
        <div style={{ flex: "1 1 70%", textAlign: "justify" }}>
          <p>
            <strong>Maha RERA No.:</strong> P51800053464 | Available on Maha RERA Website:{" "}
            <a
              href="https://maharera.mahaonline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077cc", textDecoration: "underline" }}
            >
              https://maharera.mahaonline.gov.in
            </a>
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Disclaimer:</strong> The information, layout, pictures etc. shown/contained
            in this digital landing page are indicative only and shall not form part of any
            contract and/or agreement. The Builder/Developer shall not be liable, responsible,
            obligated and/or required to provide any and/or all such amenities, specifications
            etc. as contained in this digital landing page. All plans, drawings, information,
            amenities, layout etc. are subject to approval from all concerned authorities. The
            Builder/Developer shall have irrevocable and unconditional right to change, delete,
            substitute, alter, subtract, add, amend etc. the said plans, drawings, information,
            specifications, amenities, layout etc. in such manner as the Builder/Developer may
            deem fit. No right of any nature whatsoever shall be construed and/or deemed to have
            accrued in favour of any person and/or purchaser of the premises from or by virtue of
            this digital landing page. The Builder/Developer shall not be liable and/or
            responsible for any loss, damages, cost, charges, expenses suffered/incurred and/or
            likely to be suffered and/or incurred by any person and/or purchaser of the premises.
            No person or purchaser of the premises shall have any right or be entitled to claim or
            enforce any right based on this digital landing page.
          </p>
        </div>

        {/* QR Code */}
        <div style={{ flex: "0 0 120px", textAlign: "center", marginTop: "25px" }}>
          <img
            src="qr.jpeg" // replace with your QR code image path
            alt="QR Code"
            style={{ width: "120px", height: "120px", objectFit: "contain" }}
          />
          <p style={{ marginTop: "5px", fontSize: "10px", color: "#444" }}>
            Scan for more details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
