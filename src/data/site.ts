export const site = {
  brand: "Inder Thakral Property Consultants",
  brandShort: "Inder Thakral",
  tagline: "Property Consultants",
  phoneDisplay: "+91 98159 01234",
  phoneE164: "+919815901234",
  whatsapp: "919815901234",
  email: "care@inderthakral.com",
  url: "https://www.inderthakral.com",
  address: {
    lines: [
      "SCO 124, Thakral Towers",
      "Sector 108, Emaar, Landran Banur Road",
      "Mohali - 140306",
    ],
    oneLine:
      "SCO 124, Thakral Towers, Sector 108, Emaar, Landran Banur Road, Mohali - 140306",
    street: "SCO 124, Thakral Towers, Sector 108, Emaar, Landran Banur Road",
    locality: "Mohali",
    region: "Punjab",
    postalCode: "140306",
    country: "IN",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "SCO 124 Thakral Towers Sector 108 Emaar Landran Banur Road Mohali 140306"
      ),
  },
  stats: {
    years: 38,
    clients: 3000,
    transactionsCr: 450,
    verifiedPct: 100,
  },
} as const;
