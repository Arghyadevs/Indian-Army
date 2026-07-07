export interface War {
  year: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyBattles: string[];
  outcome: string;
  casualties?: string;
  imageUrl?: string;
}

export const wars: War[] = [
  {
    year: "1947–48",
    title: "First Kashmir War",
    shortDesc: "The first war after independence.",
    fullDesc: "Following India's independence and the partition, tribal infiltrators backed by Pakistan invaded the princely state of Jammu and Kashmir. The Maharaja signed the Instrument of Accession to India, and the Indian Army was called in to defend the territory. This conflict established India's commitment to defending its sovereignty.",
    keyBattles: ["Battle of Srinagar", "Operation of the Pirates", "Siege of Poonch"],
    outcome: "India secured approximately two-thirds of Kashmir, establishing the Line of Control.",
    casualties: "India: ~1,500 killed, Pakistan: ~6,000-8,000 killed",
    imageUrl: "/Assets/War Place/1947-48 First kashmir war.jpg"
  },
  {
    year: "1962",
    title: "Sino-Indian War",
    shortDesc: "A defining moment in defence history.",
    fullDesc: "China launched a swift offensive across the Himalayas in October 1962, catching Indian forces off guard. Despite fierce resistance at points like Walong and Tawang, Indian troops were overwhelmed due to poor logistics and inadequate preparation. The war exposed critical gaps in India's defense capabilities and led to major military reforms.",
    keyBattles: ["Battle of Walong", "Battle of Tawang", "Namka Chu Valley"],
    outcome: "China declared a ceasefire and withdrew to pre-conflict lines, but retained Aksai Chin.",
    casualties: "India: ~1,383 killed, 3,000+ wounded, China: ~240 killed, 700+ wounded",
    imageUrl: "/Assets/War Place/Indian_soldiers_on_patrol_during_the_1962_Sino-Indian_border_war.jpg"
  },
  {
    year: "1965",
    title: "Second Kashmir War",
    shortDesc: "Bravery across Punjab & Kashmir.",
    fullDesc: "Pakistan launched Operation Gibraltar, infiltrating militants into Jammu & Kashmir. India responded by launching its own offensive across the international border. The war saw intense tank battles in the Khem Karan sector and heroic defense at the Battle of Asal Uttar, where Indian forces destroyed 97 Pakistani tanks.",
    keyBattles: ["Battle of Asal Uttar", "Battle of Khem Karan", "Battle of Haji Pir Pass"],
    outcome: "Inconclusive military outcome, but diplomatic pressure led to a UN ceasefire. India gained strategically.",
    casualties: "India: ~3,000 killed, Pakistan: ~3,800 killed",
    imageUrl: "/Assets/War Place/1965_Indo-Pak_War_DestroyedShermanTank.jpg"
  },
  {
    year: "1971",
    title: "Liberation War of Bangladesh",
    shortDesc: "Victory and birth of Bangladesh.",
    fullDesc: "India intervened in the Bangladesh Liberation War after millions of refugees fled Pakistan's brutal crackdown. In a swift campaign lasting just 13 days, Indian forces combined with Mukti Bahini guerrillas defeated Pakistan, leading to the surrender of 93,000 Pakistani soldiers and the creation of Bangladesh.",
    keyBattles: ["Battle of Longewala", "Battle of Ganganagar", "Battle of Sylhet", "Air operations over Dhaka"],
    outcome: "Decisive Indian victory, creation of Bangladesh, largest surrender of armed forces since WWII.",
    casualties: "India: ~2,500 killed, Pakistan: ~9,000 killed, ~93,000 captured",
    imageUrl: "/Assets/War Place/1971 liberation war.jpeg"
  },
  {
    year: "1999",
    title: "Kargil War",
    shortDesc: "Courage at extreme heights.",
    fullDesc: "Pakistani forces disguised as militants occupied strategic peaks in the Kargil district, threatening the Srinagar-Leh highway. Indian forces launched a fierce counter-offensive to evict the intruders. The war showcased extreme mountain warfare and the bravery of soldiers who fought at altitudes above 18,000 feet.",
    keyBattles: ["Battle of Tololing", "Battle of Kargil", "Operation Vijay", "Tiger Hill"],
    outcome: "India successfully evicted all infiltrators, restoring territorial integrity.",
    casualties: "India: ~527 killed, Pakistan: ~400-700 killed",
    imageUrl: "/Assets/battlefields/Kargil War-Tiger Hill capturing moment.jpg"
  },
  {
    year: "2001–02",
    title: "Operation Parakram",
    shortDesc: "Massive troop mobilization post-2001 attack.",
    fullDesc: "Following the Parliament attack in December 2001, India mobilised over 500,000 troops to the border with Pakistan. The operation was the largest military mobilization in the world since WWII. While it ended without direct conflict, it demonstrated India's resolve and preparedness.",
    keyBattles: ["Border deployment", "Operation Vijayashree"],
    outcome: "Diplomatic pressure and international intervention de-escalated tensions.",
    casualties: "India: ~36 killed (terrorist attacks during deployment)",
    imageUrl: "/Assets/War Place/Operation Parakram.jpg"
  },
  {
    year: "2016",
    title: "Surgical Strikes",
    shortDesc: "Precision strikes across the LoC.",
    fullDesc: "After the Uri attack that killed 19 soldiers, India conducted surgical strikes on terrorist launch pads across the Line of Control. The operation demonstrated India's policy of responding to terrorism and was acknowledged by the government.",
    keyBattles: ["Surgical strikes in Poonch and Kupwara sectors"],
    outcome: "Destruction of terrorist infrastructure, clear message to Pakistan.",
    casualties: "Indian forces: 0 killed (surgical strike), 2 killed in subsequent shelling",
    imageUrl: "/Assets/War Place/2016 surgical strike.jpg"
  },
  {
    year: "2019",
    title: "Balakot Airstrike",
    shortDesc: "Air strike on terrorist training camp.",
    fullDesc: "Indian Air Force jets struck a terrorist training camp in Balakot, Pakistan, in response to the Pulwama attack that killed 40 CRPF personnel. This was the first time since 1971 that Indian aircraft struck Pakistan's territory.",
    keyBattles: ["Balakot airstrike"],
    outcome: "Destruction of terrorist training camp, escalation of tensions, eventual de-escalation.",
    casualties: "No Indian casualties, exact enemy casualties disputed",
    imageUrl: "/Assets/War Place/Balakot air strike.avif"
  },
  {
    year: "2020",
    title: "Galwan Valley Skirmish",
    shortDesc: "Fierce hand-to-hand combat in eastern Ladakh.",
    fullDesc: "In June 2020, Indian and Chinese troops engaged in a violent hand-to-hand skirmish in the Galwan Valley, eastern Ladakh, during a standoff along the Line of Actual Control (LAC). Twenty Indian soldiers, including the commanding officer of the 16 Bihar Regiment, were killed in action fighting valiantly without firearms.",
    keyBattles: ["Galwan Valley Clash"],
    outcome: "Strategic standoff along the LAC followed by prolonged military and diplomatic talks.",
    casualties: "India: 20 killed, China: Undisclosed (estimated significantly higher)",
    imageUrl: "/Assets/War Place/Galwan war memorial.png"
  },
  {
    year: "2022",
    title: "Yangtse Clash (Tawang)",
    shortDesc: "Thwarting Chinese incursions in Arunachal Pradesh.",
    fullDesc: "In December 2022, Chinese PLA troops attempted to transgress the Line of Actual Control (LAC) in the Yangtse area of the Tawang sector in Arunachal Pradesh. The Indian Army responded firmly and resolutely, forcing the Chinese troops to retreat to their positions in a physical melee.",
    keyBattles: ["Yangtse Area Standoff"],
    outcome: "Successful defense of the LAC; PLA troops forced back to their posts.",
    casualties: "Minor injuries on both sides (No fatalities)",
    imageUrl: "/Assets/War Place/Yangtse Clash (Tawang).jpg"
  },
  {
    year: "2025",
    title: "Operation Sindoor",
    shortDesc: "Targeted strikes against terror infrastructure.",
    fullDesc: "In May 2025, the Indian Armed Forces launched 'Operation Sindoor' in response to a deadly terror attack in Pahalgam. It involved precise, multi-domain strikes against terror camps and training facilities across the LoC and within Pakistan. The operation was named 'Sindoor' as a poignant tribute to the families of the victims, successfully neutralizing key terror targets.",
    keyBattles: ["Cross-border targeted strikes"],
    outcome: "Successful neutralization of terror targets followed by border de-escalation measures.",
    casualties: "Significant casualties among terror operatives",
    imageUrl: "/Assets/War Place/Operation Sindoor.webp"
  }
];

export const getWarByYear = (year: string): War | undefined => {
  return wars.find(w => w.year === year);
};

