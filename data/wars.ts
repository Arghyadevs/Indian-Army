export interface War {
  year: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyBattles: string[];
  outcome: string;
  casualties?: string;
}

export const wars: War[] = [
  {
    year: "1947–48",
    title: "First Kashmir War",
    shortDesc: "The first war after independence.",
    fullDesc: "Following India's independence and the partition, tribal infiltrators backed by Pakistan invaded the princely state of Jammu and Kashmir. The Maharaja signed the Instrument of Accession to India, and the Indian Army was called in to defend the territory. This conflict established India's commitment to defending its sovereignty.",
    keyBattles: ["Battle of Srinagar", "Operation of the Pirates", "Siege of Poonch"],
    outcome: "India secured approximately two-thirds of Kashmir, establishing the Line of Control.",
    casualties: "India: ~1,500 killed, Pakistan: ~6,000-8,000 killed"
  },
  {
    year: "1962",
    title: "Sino-Indian War",
    shortDesc: "A defining moment in defence history.",
    fullDesc: "China launched a swift offensive across the Himalayas in October 1962, catching Indian forces off guard. Despite fierce resistance at points like Walong and Tawang, Indian troops were overwhelmed due to poor logistics and inadequate preparation. The war exposed critical gaps in India's defense capabilities and led to major military reforms.",
    keyBattles: ["Battle of Walong", "Battle of Tawang", "Namka Chu Valley"],
    outcome: "China declared a ceasefire and withdrew to pre-conflict lines, but retained Aksai Chin.",
    casualties: "India: ~1,383 killed, 3,000+ wounded, China: ~240 killed, 700+ wounded"
  },
  {
    year: "1965",
    title: "Second Kashmir War",
    shortDesc: "Bravery across Punjab & Kashmir.",
    fullDesc: "Pakistan launched Operation Gibraltar, infiltrating militants into Jammu & Kashmir. India responded by launching its own offensive across the international border. The war saw intense tank battles in the Khem Karan sector and heroic defense at the Battle of Asal Uttar, where Indian forces destroyed 97 Pakistani tanks.",
    keyBattles: ["Battle of Asal Uttar", "Battle of Khem Karan", "Battle of Haji Pir Pass"],
    outcome: "Inconclusive military outcome, but diplomatic pressure led to a UN ceasefire. India gained strategically.",
    casualties: "India: ~3,000 killed, Pakistan: ~3,800 killed"
  },
  {
    year: "1971",
    title: "Liberation War of Bangladesh",
    shortDesc: "Victory and birth of Bangladesh.",
    fullDesc: "India intervened in the Bangladesh Liberation War after millions of refugees fled Pakistan's brutal crackdown. In a swift campaign lasting just 13 days, Indian forces combined with Mukti Bahini guerrillas defeated Pakistan, leading to the surrender of 93,000 Pakistani soldiers and the creation of Bangladesh.",
    keyBattles: ["Battle of Longewala", "Battle of Ganganagar", "Battle of Sylhet", "Air operations over Dhaka"],
    outcome: "Decisive Indian victory, creation of Bangladesh, largest surrender of armed forces since WWII.",
    casualties: "India: ~2,500 killed, Pakistan: ~9,000 killed, ~93,000 captured"
  },
  {
    year: "1999",
    title: "Kargil War",
    shortDesc: "Courage at extreme heights.",
    fullDesc: "Pakistani forces disguised as militants occupied strategic peaks in the Kargil district, threatening the Srinagar-Leh highway. Indian forces launched a fierce counter-offensive to evict the intruders. The war showcased extreme mountain warfare and the bravery of soldiers who fought at altitudes above 18,000 feet.",
    keyBattles: ["Battle of Tololing", "Battle of Kargil", "Operation Vijay", "Tiger Hill"],
    outcome: "India successfully evicted all infiltrators, restoring territorial integrity.",
    casualties: "India: ~527 killed, Pakistan: ~400-700 killed"
  },
  {
    year: "2001–02",
    title: "Operation Parakram",
    shortDesc: "Massive troop mobilization post-2001 attack.",
    fullDesc: "Following the Parliament attack in December 2001, India mobilised over 500,000 troops to the border with Pakistan. The operation was the largest military mobilization in the world since WWII. While it ended without direct conflict, it demonstrated India's resolve and preparedness.",
    keyBattles: ["Border deployment", "Operation Vijayashree"],
    outcome: "Diplomatic pressure and international intervention de-escalated tensions.",
    casualties: "India: ~36 killed (terrorist attacks during deployment)"
  },
  {
    year: "2016",
    title: "Surgical Strikes",
    shortDesc: "Precision strikes across the LoC.",
    fullDesc: "After the Uri attack that killed 19 soldiers, India conducted surgical strikes on terrorist launch pads across the Line of Control. The operation demonstrated India's policy of responding to terrorism and was acknowledged by the government.",
    keyBattles: ["Surgical strikes in Poonch and Kupwara sectors"],
    outcome: "Destruction of terrorist infrastructure, clear message to Pakistan.",
    casualties: "Indian forces: 0 killed (surgical strike), 2 killed in subsequent shelling"
  },
  {
    year: "2019",
    title: "Balakot Airstrike",
    shortDesc: "Air strike on terrorist training camp.",
    fullDesc: "Indian Air Force jets struck a terrorist training camp in Balakot, Pakistan, in response to the Pulwama attack that killed 40 CRPF personnel. This was the first time since 1971 that Indian aircraft struck Pakistan's territory.",
    keyBattles: ["Balakot airstrike"],
    outcome: "Destruction of terrorist training camp, escalation of tensions, eventual de-escalation.",
    casualties: "No Indian casualties, exact enemy casualties disputed"
  }
];

export const getWarByYear = (year: string): War | undefined => {
  return wars.find(w => w.year === year);
};

