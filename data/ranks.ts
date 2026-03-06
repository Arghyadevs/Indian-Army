export interface Rank {
  name: string;
  abbreviation: string;
  category: string;
  level: number;
  insignia: string;
  shoulderBadge: string;
  description: string;
  equivalents: string;
  salutation: string;
}

export const armyRanks: Rank[] = [
  // Commissioned Officers
  {
    name: "Field Marshal",
    abbreviation: "FM",
    category: "Commissioned Officers",
    level: 1,
    insignia: "🇮🇳",
    shoulderBadge: "State Emblem with crossed sword and baton",
    description: "Highest rank in the Indian Army, a five-star rank and ceremonial position. Only two officers have held this rank: Field Marshal K. M. Cariappa and Field Marshal Sam Manekshaw.",
    equivalents: "General (5-star)",
    salutation: "Field Marshal"
  },
  {
    name: "General",
    abbreviation: "Gen",
    category: "Commissioned Officers",
    level: 2,
    insignia: "⭐⭐⭐⭐⭐",
    shoulderBadge: "State Emblem above crossed sword and baton",
    description: "The highest active rank in the Indian Army. The Chief of Army Staff holds this rank and is responsible for the overall command of the Army.",
    equivalents: "General (US, UK)",
    salutation: "General"
  },
  {
    name: "Lieutenant General",
    abbreviation: "Lt Gen",
    category: "Commissioned Officers",
    level: 3,
    insignia: "⭐⭐⭐⭐",
    shoulderBadge: "Lt Gen's crossed sword and baton with star",
    description: "A three-star rank typically held by army commanders and corps commanders. Responsibilities include command of corps or holding important staff positions at Army HQ.",
    equivalents: "General (Lieutenant)",
    salutation: "General"
  },
  {
    name: "Major General",
    abbreviation: "Maj Gen",
    category: "Commissioned Officers",
    level: 4,
    insignia: "⭐⭐⭐",
    shoulderBadge: "Major General's crossed sword and baton",
    description: "A two-star rank usually commanding a division or serving as senior staff at corps or army level. Has significant operational and administrative responsibilities.",
    equivalents: "Major General",
    salutation: "General"
  },
  {
    name: "Brigadier",
    abbreviation: "Brig",
    category: "Commissioned Officers",
    level: 5,
    insignia: "⭐⭐",
    shoulderBadge: "Brigadier's star with crossed sword and baton",
    description: "Commands a brigade consisting of 3-4 battalions. The first field officer rank, marking the transition from company to unit-level command.",
    equivalents: "Brigadier General",
    salutation: "Brigadier"
  },
  {
    name: "Colonel",
    abbreviation: "Col",
    category: "Commissioned Officers",
    level: 6,
    insignia: "⭐",
    shoulderBadge: "Colonel's crown",
    description: "Commands a regiment or battalion. May also serve as staff officers at brigade and division level. First rank of selection rather than time-based promotion.",
    equivalents: "Colonel",
    salutation: "Colonel"
  },
  {
    name: "Lieutenant Colonel",
    abbreviation: "Lt Col",
    category: "Commissioned Officers",
    level: 7,
    insignia: "🏅",
    shoulderBadge: "Lt Colonel's crossed sword and baton",
    description: "Commands a battalion or serves as second-in-command. The most common rank for unit commanders. Typically has 15-20 years of service.",
    equivalents: "Lieutenant Colonel",
    salutation: "Sir/Ma'am"
  },
  {
    name: "Major",
    abbreviation: "Maj",
    category: "Commissioned Officers",
    level: 8,
    insignia: "🟢",
    shoulderBadge: "Major's roundel",
    description: "Company commander level or staff officer. After 6-8 years as Captain, officers are promoted to Major. Holds significant command and staff positions.",
    equivalents: "Major",
    salutation: "Sir/Ma'am"
  },
  {
    name: "Captain",
    abbreviation: "Capt",
    category: "Commissioned Officers",
    level: 9,
    insignia: "🔵",
    shoulderBadge: "Captain's two bars",
    description: "Commands a company or serves as a staff officer. Usually attained after 2-3 years of service. Responsible for 100-150 soldiers.",
    equivalents: "Captain",
    salutation: "Sir/Ma'am"
  },
  {
    name: "Lieutenant",
    abbreviation: "Lt",
    category: "Commissioned Officers",
    level: 10,
    insignia: "🔷",
    shoulderBadge: "Lieutenant's single bar",
    description: "Entry-level commissioned rank. Commands a platoon or serves as a company second-in-command. Typically serves 1-2 years before promotion.",
    equivalents: "Lieutenant",
    salutation: "Sir/Ma'am"
  },
  
  // Junior Commissioned Officers
  {
    name: "Subedar Major",
    abbreviation: "SM",
    category: "Junior Commissioned Officers",
    level: 11,
    insignia: "🎖️",
    shoulderBadge: "Ashoka Lion with Star above",
    description: "The highest rank among JCOs. Functions as Regimental Sergeant Major. Advises the Colonel on all matters concerning other ranks. Highly respected position.",
    equivalents: "Warrant Officer Class 1",
    salutation: "Subedar Major"
  },
  {
    name: "Subedar",
    abbreviation: "Sub",
    category: "Junior Commissioned Officers",
    level: 12,
    insignia: "⭐",
    shoulderBadge: "Ashoka Lion with crescent",
    description: "Commands a company-sized element or serves as a senior JCO. Acts as a vital link between officers and other ranks. Responsible for discipline and welfare.",
    equivalents: "Warrant Officer Class 2",
    salutation: "Subedar"
  },
  {
    name: "Naib Subedar",
    abbreviation: "Nb Sub",
    category: "Junior Commissioned Officers",
    level: 13,
    insignia: "🏅",
    shoulderBadge: "Ashoka Lion",
    description: "Entry-level JCO rank. Usually holds the position of Platoon Havildar Major. Responsible for training and discipline of troops under his charge.",
    equivalents: "Sergeant",
    salutation: "Naib Subedar"
  },
  
  // Non-Commissioned Officers
  {
    name: "Havildar",
    abbreviation: "Hav",
    category: "Non-Commissioned Officers",
    level: 14,
    insignia: "🎖️",
    shoulderBadge: "Three chevrons pointing up",
    description: "Commands a section (12-14 soldiers) or serves as platoon sergeant. A senior NCO responsible for training, discipline, and administration of the troops.",
    equivalents: "Sergeant",
    salutation: "Havildar"
  },
  {
    name: " Naik",
    abbreviation: "Nk",
    category: "Non-Commissioned Officers",
    level: 15,
    insignia: "⬆️⬆️",
    shoulderBadge: "Two chevrons pointing up",
    description: "Commands a section in the absence of a Havildar or serves as a tank commander. Acts as second-in-command to the Havildar.",
    equivalents: "Corporal",
    salutation: "Naik"
  },
  {
    name: "Lance Naik",
    abbreviation: "L/Nk",
    category: "Non-Commissioned Officers",
    level: 16,
    insignia: "⬆️",
    shoulderBadge: "Single chevron pointing up",
    description: "Senior-most rank among other ranks. Often the most experienced soldier in a section. May be appointed as section second-in-command.",
    equivalents: "Lance Corporal",
    salutation: "Lance Naik"
  },
  
  // Other Ranks
  {
    name: "Sepoy",
    abbreviation: "Sep",
    category: "Other Ranks",
    level: 17,
    insignia: "⭐",
    shoulderBadge: "No insignia",
    description: "Entry-level rank for soldiers. The foundation of the army. Basic soldier who has completed basic training and serves in various capacities.",
    equivalents: "Private",
    salutation: "Sepoy"
  },
  {
    name: "Signalman",
    abbreviation: "Sgt",
    category: "Other Ranks",
    level: 17,
    insignia: "📡",
    shoulderBadge: "Signal emblem",
    description: "Soldier specialized in communications. Operates and maintains communication equipment. Essential for all operational coordination.",
    equivalents: "Private (Specialist)",
    salutation: "Signalman"
  },
  {
    name: "Driver",
    abbreviation: "Dvr",
    category: "Other Ranks",
    level: 17,
    insignia: "🚗",
    shoulderBadge: "Wheel emblem",
    description: "Specialist driver for various military vehicles. Essential for logistics and troop movement. Must hold appropriate driving licenses.",
    equivalents: "Private (Specialist)",
    salutation: "Driver"
  }
];

export const getRankByName = (name: string): Rank | undefined => {
  return armyRanks.find(r => r.name.toLowerCase().includes(name.toLowerCase()));
};

export const getRanksByCategory = (category: string): Rank[] => {
  return armyRanks.filter(r => r.category === category);
};

export const getCategoryOrder = (): string[] => {
  return ["Commissioned Officers", "Junior Commissioned Officers", "Non-Commissioned Officers", "Other Ranks"];
};

