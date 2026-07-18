export interface InsightSection {
  heading?: string;
  paragraphs: string[];
}

export interface Insight {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO, for metadata + JSON-LD
  displayDate: string;
  readTime: string;
  tag: string;
  sections: InsightSection[];
}

export const insights: Insight[] = [
  {
    slug: "mohali-sector-108-115-growth-corridor",
    title: "Why the Sector 108–115 Belt Is Mohali's Next Growth Story",
    dek: "The stretch between Aerocity and the Kharar–Landran arc is quietly becoming the Tricity's most watched land market. Here is what is driving it — and what buyers should verify before entering.",
    date: "2026-07-01",
    displayDate: "July 2026",
    readTime: "4 min read",
    tag: "Micro-Market",
    sections: [
      {
        paragraphs: [
          "Every land market has a moment when it moves from 'emerging' to 'established' — when the roads get built, the townships fill in, and the early pricing window starts to close. For the belt running from Sector 108 through Sector 115 on Mohali's southern expansion edge, that moment is now underway.",
          "This corridor sits at the meeting point of three forces: the Chandigarh International Airport catchment, the planned expansion of Mohali's sector grid beyond the IT City belt, and township development by national players — including Emaar's presence in Sectors 108–109, where our own showroom at Pine Wood Center is located.",
        ],
      },
      {
        heading: "What is actually driving demand",
        paragraphs: [
          "First, connectivity. The corridor plugs directly into the airport road network and the Kharar–Landran road, which puts both the airport and the IT City employment belt within a short drive. Land value in the Tricity has always followed road-width and connectivity before anything else, and this belt scores on both.",
          "Second, the supply picture. Unlike older sectors where inventory is fragmented and resale-driven, much of this belt consists of planned township plots with clear layouts, wider internal roads, and modern infrastructure — the kind of product NRI buyers and end-users increasingly insist on.",
          "Third, the price ladder. Established sectors closer to Chandigarh have already re-rated. Buyers priced out of those markets are moving outward along the corridor, and that migration of demand is the classic engine of appreciation in this region.",
        ],
      },
      {
        heading: "What to verify before you buy",
        paragraphs: [
          "None of this removes the need for diligence. In this belt specifically, we verify three things on every transaction: that the plot sits inside an approved layout with clear GMADA or competent-authority sanction, that the title chain is clean and the seller's possession is undisputed, and that the specific pocket has functioning access roads today — not just on the master plan.",
          "The gap between a good buy and a stuck investment in an expanding corridor is almost always one of these three checks. This is precisely the work we do before any property reaches a client.",
        ],
      },
      {
        paragraphs: [
          "This commentary reflects our on-ground reading of the market and is intended as general information, not investment advice. For a current, plot-specific assessment, speak to us directly.",
        ],
      },
    ],
  },
  {
    slug: "new-chandigarh-vs-mohali-where-to-buy",
    title: "New Chandigarh vs. Mohali: Where Should You Buy Land in 2026?",
    dek: "Two markets, two very different theses. A practical comparison of the Tricity's twin growth stories — horizon, product, and the right buyer profile for each.",
    date: "2026-06-15",
    displayDate: "June 2026",
    readTime: "5 min read",
    tag: "Buyer's Guide",
    sections: [
      {
        paragraphs: [
          "The most common question we hear from buyers — especially NRIs planning a long-term allocation — is whether to put capital into New Chandigarh (Mullanpur) or into Mohali proper. The honest answer is that they are different instruments, and the right choice depends on your horizon and intent.",
        ],
      },
      {
        heading: "The case for New Chandigarh",
        paragraphs: [
          "New Chandigarh is a master-planned extension on Chandigarh's northwestern edge, developed under a modern plan with wide green boulevards, large plot sizes, and low built density. Its anchors are real and growing: the medical education cluster, the international cricket stadium at Mullanpur, and direct proximity to Chandigarh's northern sectors — the most prestigious address in the region.",
          "The thesis here is patience. Infrastructure is being built ahead of population, which means the buyer is paying for tomorrow's neighbourhood today. For buyers with a five-to-ten-year horizon who want large, clean plots in the Tricity's most planned environment, New Chandigarh remains the strongest structural story.",
        ],
      },
      {
        heading: "The case for Mohali",
        paragraphs: [
          "Mohali is the opposite trade: a functioning city with employment, retail, healthcare, an international airport, and a deep rental market. Sectors along the IT City corridor, Aerocity, and the JLPL belt offer something New Chandigarh cannot yet — income and immediate usability. A commercial showroom on an arterial Mohali road earns rent from year one; a residential plot can be built on and occupied immediately.",
          "Appreciation in Mohali is more sector-specific — driven by road frontage, corridor position, and commercial activity — which is exactly why local, plot-level knowledge matters more here than anywhere else in the Tricity.",
        ],
      },
      {
        heading: "Our framework",
        paragraphs: [
          "If your goal is long-horizon capital growth with no income requirement, New Chandigarh deserves the larger share. If you want usability, rental yield, or a commercial asset, Mohali is the market. Many of our clients hold both — a growth plot in New Chandigarh and an income asset in Mohali — and treat the pair as one balanced Tricity position.",
          "As always: this is general commentary, not personal investment advice. Every recommendation we make to a client is specific to their situation and to a verified, particular property.",
        ],
      },
    ],
  },
  {
    slug: "nri-guide-buying-property-tricity",
    title: "The NRI's Guide to Buying Tricity Property Without Flying Home",
    dek: "Power of attorney, title verification, funds routing, and the mistakes we see most often — a straightforward walkthrough of how NRIs can transact safely from abroad.",
    date: "2026-05-20",
    displayDate: "May 2026",
    readTime: "5 min read",
    tag: "NRI Corner",
    sections: [
      {
        paragraphs: [
          "A significant share of our practice is NRI families — often from Canada, the UK, the US, and Australia — buying land in the Tricity either as an investment or as a future home base. Nearly all of them ask the same first question: can this be done properly without repeated trips to India? The answer is yes, provided the process is structured correctly from the start.",
        ],
      },
      {
        heading: "The four pillars of a safe remote transaction",
        paragraphs: [
          "One — title verification before anything else. The single biggest risk in Indian land transactions is a defective title chain. Before any discussion of price, the revenue records, sale deed chain, and encumbrance status need to be pulled and read by someone who does this daily. We do not present a property to an NRI client until this is complete.",
          "Two — a properly drafted and registered power of attorney. A specific (not general) POA, executed at the Indian consulate or apostilled locally and then adjudicated in India, lets a trusted representative sign, register, and complete formalities on your behalf. The scope should be narrow: this transaction, this property, nothing more.",
          "Three — clean funds routing. Purchase funds should move through your NRE or NRO account via normal banking channels, with every payment documented against the agreement. This is not just compliance hygiene — it is what makes eventual repatriation of sale proceeds straightforward.",
          "Four — registration and post-sale record. The transaction is not finished at the sale deed. Mutation in revenue records, possession documentation, and property tax records need to be updated in your name. Skipping this step is the most common mistake we see in NRI-held property.",
        ],
      },
      {
        heading: "What can go wrong — and how it is avoided",
        paragraphs: [
          "The failure cases we encounter almost always trace back to trust placed in an unverified intermediary: a relative's acquaintance, an unregistered dealer, a deal done on a phone call. The safeguards are unglamorous but effective — independent title verification, payments only through banking channels, a narrowly scoped POA, and a single accountable advisor who shows you every document before you sign anything.",
          "Our NRI engagements are built around exactly this structure, with video walkthroughs of every shortlisted property and documentation shared for your own lawyer's review at every stage.",
        ],
      },
      {
        paragraphs: [
          "This guide is general information, not legal or investment advice — FEMA and tax treatment depend on your specific residency and situation. For a confidential conversation timed to your time zone, reach out via WhatsApp.",
        ],
      },
    ],
  },
];
