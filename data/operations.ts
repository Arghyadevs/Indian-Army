export interface MilitaryOperation {
  id: string;
  name: string;
  year: string;
  type: string;
  objective: string;
  outcome: string;
  keyPoints: string[];
  outcomeSummary: string;
  significance: string;
  outcomeType: "success" | "partial" | "ongoing";
}

export const operations: MilitaryOperation[] = [
  {
    id: "1",
    name: "Operation Vijay",
    year: "1999",
    type: "Counter-terrorism",
    objective: "Evacuate Pakistani infiltrators from occupied positions in Kargil district",
    outcome: "Complete success - all infiltrators evicted",
    keyPoints: [
      "Launched in May 1999 after Pakistani forces occupied strategic heights",
      "Involved multiple corps of Indian Army",
      "Key battles at Tiger Hill, Tololing, and Point 5140",
      "Over 500 Indian soldiers martyred",
      "International pressure forced Pakistan to withdraw"
    ],
    outcomeSummary: "India successfully restored territorial integrity after 2 months of intense mountain warfare",
    significance: "Demonstrated India's resolve to protect its territorial integrity and military capability in high-altitude warfare",
    outcomeType: "success"
  },
  {
    id: "2",
    name: "Operation Parakram",
    year: "2001-2002",
    type: "Defensive deployment",
    objective: "Mass troop deployment along India-Pakistan border following Parliament attack",
    outcome: "Strategic success - demonstrated military preparedness",
    keyPoints: [
      "Largest military mobilization since WWII - over 500,000 troops",
      "Deployment along 4,750 km border with Pakistan",
      "Lasted 10 months",
      "Heightened nuclear tensions between neighbors",
      "Diplomatic resolution through international intervention"
    ],
    outcomeSummary: "While no direct conflict occurred, the operation demonstrated India's military readiness and resolve",
    significance: "Showcased India's ability to mobilize massive forces quickly and maintain prolonged deployment",
    outcomeType: "partial"
  },
  {
    id: "3",
    name: "Surgical Strikes",
    year: "2016",
    type: "Pre-emptive strike",
    objective: "Destroy terrorist launch pads across the Line of Control",
    outcome: "Successful - multiple terrorist camps destroyed",
    keyPoints: [
      "Conducted on September 29, 2016",
      "Response to Uri attack that killed 19 soldiers",
      "Indian Army Para SF teams crossed LoC",
      "Struck 7 terrorist camps in Pakistan-occupied Kashmir",
      "Government officially acknowledged the strikes"
    ],
    outcomeSummary: "Successfully destroyed terrorist infrastructure and sent clear message to Pakistan",
    significance: "Marked a shift in India's policy of responding to terrorism with immediate action",
    outcomeType: "success"
  },
  {
    id: "4",
    name: "Operation Blue Star",
    year: "1984",
    type: "Counter-insurgency",
    objective: "Remove armed militants from the Golden Temple complex",
    outcome: "Partial success - militants neutralized but significant collateral damage",
    keyPoints: [
      "Launched on June 5, 1984",
      "Led by Lt. Gen. K.S. Brar",
      "Indian Army troops stormed the Golden Temple",
      "Militants including Jarnail Singh Bhindranwale killed",
      "Significant damage to the temple structure"
    ],
    outcomeSummary: "Military objective achieved but with political and social consequences",
    significance: "Had profound impact on India's political landscape and Sikh community relations",
    outcomeType: "partial"
  },
  {
    id: "5",
    name: "Operation Black Thunder",
    year: "1986, 1988",
    type: "Counter-insurgency",
    objective: "Remove militants from Golden Temple without major damage",
    outcome: "Successful - achieved with minimal damage",
    keyPoints: [
      "Conducted in two phases - April 1986 and May 1988",
      "More subtle approach than Operation Blue Star",
      "Used psychological operations and selective force",
      "Surrender of many militants",
      "Temple infrastructure largely preserved"
    ],
    outcomeSummary: "Successfully removed militants while minimizing damage to the holy site",
    significance: "Demonstrated evolving counter-insurgency tactics and importance of cultural sensitivity",
    outcomeType: "success"
  },
  {
    id: "6",
    name: "Operation Cactus",
    year: "1988",
    type: "Counter-terrorism",
    objective: "Evacuate hostages and neutralize mercenaries in Maldives",
    outcome: "Complete success - all hostages rescued",
    keyPoints: [
      "Launched in November 1988",
      "Response to mercenary coup in Maldives",
      "Indian Air Force and Navy deployed",
      "Para SF troops secured Male airport",
      "President Gayoom rescued within hours"
    ],
    outcomeSummary: "Swift operation successfully thwarted the coup and rescued the Maldivian President",
    significance: "Demonstrated India's role as a regional security provider and rapid deployment capability",
    outcomeType: "success"
  },
  {
    id: "7",
    name: "Operation Rakshak",
    year: "1990-present",
    type: "Counter-insurgency",
    objective: "Counter terrorism operations in Jammu and Kashmir",
    outcome: "Ongoing - significant success in reducing violence",
    keyPoints: [
      "Launched in 1990 during peak of insurgency",
      "Involves multiple security forces",
      "Focus on intelligence-based operations",
      "Development of counter-insurgency tactics",
      "Continuous evolution based on threat assessment"
    ],
    outcomeSummary: "Ongoing operation with significant success in curbing terrorism in the region",
    significance: "One of the longest-running counter-insurgency operations, constantly adapting to new challenges",
    outcomeType: "ongoing"
  },
  {
    id: "8",
    name: "Operation Falcon",
    year: "1999",
    type: "Air operation",
    objective: "Air support for Kargil operations",
    outcome: "Successful - provided critical air support",
    keyPoints: [
      "Indian Air Force operations during Kargil War",
      "MiG-24, MiG-27, and Mirage 2000 aircraft deployed",
      "Precision strikes on enemy positions",
      "Combat Search and Rescue operations",
      "Air drops to cut-off infantry positions"
    ],
    outcomeSummary: "Successfully provided air support that was crucial to the ground victory",
    significance: "Demonstrated effective air-land coordination in mountain warfare",
    outcomeType: "success"
  },
  {
    id: "9",
    name: "Operation Meghdoot",
    year: "1984-present",
    type: "Defensive",
    objective: "Secure and defend Siachen Glacier region",
    outcome: "Ongoing - India controls strategic heights",
    keyPoints: [
      "Launched on April 13, 1984",
      "First military operation in the world's highest battlefield",
      "Pre-empted Pakistani Operation Ababeel",
      "Indian forces control all major passes",
      "Harshest military environment on Earth"
    ],
    outcomeSummary: "India secured strategic control of the glacier region despite extreme conditions",
    significance: "Set precedent for high-altitude warfare and established India's claim to the region",
    outcomeType: "ongoing"
  },
  {
    id: "10",
    name: "Operation Pawan",
    year: "1987-1990",
    type: "Peacekeeping",
    objective: "Indian Peacekeeping Force in Sri Lanka",
    outcome: "Partial success - IPKF withdrew without achieving all objectives",
    keyPoints: [
      "Deployed in July 1987 under Indo-Sri Lanka Agreement",
      "Tasked with disarming Tamil Tigers (LTTE)",
      "Fought extended guerrilla war against LTTE",
      "Over 1,200 Indian soldiers killed",
      "Withdrawn in 1990 after LTTE refused to disarm"
    ],
    outcomeSummary: "IPKF achieved tactical success but strategic objectives not fully met",
    significance: "Highlighted complexities of peacekeeping and insurgency operations",
    outcomeType: "partial"
  },
  {
    id: "11",
    name: "Operation Trident",
    year: "1971",
    type: "Naval operation",
    objective: "Attack Karachi port during Bangladesh Liberation War",
    outcome: "Decisive success - destroyed Pakistani naval capacity",
    keyPoints: [
      "Launched on December 4, 1971",
      "Indian Navy attacked Karachi harbour",
      "Destroyed Pakistan Navy's fuel tanks and shipyard",
      "Sank 3 Pakistani warships",
      "Pakistan's navy rendered ineffective for rest of war"
    ],
    outcomeSummary: "Completely crippled Pakistani naval capacity in the Arabian Sea",
    significance: "Demonstrated India's naval superiority and strategic planning",
    outcomeType: "success"
  },
  {
    id: "12",
    name: "Operation Python",
    year: "1971",
    type: "Naval operation",
    objective: "Follow-up attack on Karachi after Operation Trident",
    outcome: "Successful - further damaged Pakistani naval capacity",
    keyPoints: [
      "Launched on December 8, 1971",
      "Indian Navy attacked Karachi again",
      "Destroyed remaining Pakistani naval assets",
      "Sank supply vessels and oil tankers",
      "Crippled Pakistan's maritime trade"
    ],
    outcomeSummary: "Successfully completed the naval campaign against Pakistan",
    significance: "Complemented Operation Trident to establish naval dominance",
    outcomeType: "success"
  },
  {
    id: "13",
    name: "Operation All Clear",
    year: "2015",
    type: "Counter-terrorism",
    objective: "Eliminate Laungan militant camp in Manipur",
    outcome: "Successful - camp destroyed",
    keyPoints: [
      "Launched in June 2015",
      "Indian Army operation in Myanmar",
      "Cross-border strike against NSCN-K militants",
      "Destroyed militant camps",
      "Sent strong message to NE insurgent groups"
    ],
    outcomeSummary: "Successfully destroyed militant infrastructure across the border",
    significance: "Demonstrated India's willingness to conduct cross-border operations against terrorists",
    outcomeType: "success"
  },
  {
    id: "14",
    name: "Operation Ganga",
    year: "2021",
    type: "Humanitarian",
    objective: "Evacuate Indian citizens from Afghanistan",
    outcome: "Successful - evacuated over 23,000 citizens",
    keyPoints: [
      "Launched in April 2021 amid Taliban takeover",
      "Indian Air Force transport aircraft deployed",
      "Multiple airlifts from Kabul",
      "Coordinated with friendly nations",
      "One of the largest evacuation missions"
    ],
    outcomeSummary: "Successfully evacuated over 23,000 people including foreign nationals",
    significance: "Demonstrated India's commitment to its citizens and humanitarian leadership",
    outcomeType: "success"
  },
  {
    id: "15",
    name: "Operation Sankalp",
    year: "2023-present",
    type: "Maritime security",
    objective: "Ensure safety of Indian vessels in Persian Gulf region",
    outcome: "Ongoing - maritime security maintained",
    keyPoints: [
      "Launched in June 2023 amid tensions in Persian Gulf",
      "Indian Navy warships deployed to Gulf of Aden",
      "Escort duties for Indian merchant vessels",
      "Enhanced maritime domain awareness",
      "Coordination with international naval forces"
    ],
    outcomeSummary: "Successfully ensuring safe passage for Indian vessels in volatile region",
    significance: "Demonstrates India's growing blue-water navy capabilities and regional influence",
    outcomeType: "ongoing"
  }
];

export const getOperationById = (id: string): MilitaryOperation | undefined => {
  return operations.find(op => op.id === id);
};

export const getOperationsByYear = (year: string): MilitaryOperation[] => {
  return operations.filter(op => op.year.includes(year));
};

export const getOperationsByType = (type: string): MilitaryOperation[] => {
  return operations.filter(op => op.type.toLowerCase().includes(type.toLowerCase()));
};

