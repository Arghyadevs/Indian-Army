export interface Braveheart {
  id: string;
  name: string;
  rank: string;
  regiment: string;
  yearOfDeath: string;
  operation: string;
  story: string;
  letter?: string;
  medals: string[];
  age: number;
  hometown: string;
  quote?: string;
  war: string;
}

export const bravehearts: Braveheart[] = [
  // Original 10 heroes
  {
    id: "1",
    name: "Major Shaitan Singh",
    rank: "Major",
    regiment: "Jat Regiment",
    yearOfDeath: "1962",
    operation: "Battle of Walong",
    story: "Major Shaitan Singh led his company of 123 men against overwhelming Chinese forces at Walong during the Sino-Indian War. Despite being wounded, he continued to inspire his men and refused to be evacuated. All 123 men fought to their last bullet, making the ultimate sacrifice. His body was found with 11 bullet wounds.",
    letter: "My dear family, Tonight the winds carry whispers of home. The mountains stand tall like silent sentinels. I think of mother's warm tea and father's stern yet loving voice. Whatever happens tomorrow, know that I lived with honor and died protecting what we hold dear. Jai Hind. Your son, Shaitan.",
    medals: ["Param Vir Chakra", "Vishisht Seva Medal"],
    age: 37,
    hometown: "Rajasthan",
    quote: "Retreat is not an option when your back is against the mountains.",
    war: "1962 Sino-Indian War"
  },
  {
    id: "2",
    name: "Lance Naik Albert Ekka",
    rank: "Lance Naik",
    regiment: "Assam Regiment",
    yearOfDeath: "1971",
    operation: "Battle of Gangasagar",
    story: "During the 1971 war, Lance Naik Albert Ekka single-handedly destroyed a Pakistani forward post with grenades and bayonet. Wounded in the leg, he continued to advance and neutralized a machine gun nest that was pinning down his company. He succumbed to his injuries after the battle.",
    medals: ["Param Vir Chakra"],
    age: 22,
    hometown: "Ranchi, Bihar (now Jharkhand)",
    quote: "The enemy had many guns, but we had one purpose.",
    war: "1971 Indo-Pak War"
  },
  {
    id: "3",
    name: "Second Lieutenant Arun Khetarpal",
    rank: "Second Lieutenant",
    regiment: "Armoured Corps",
    yearOfDeath: "1971",
    operation: "Battle of Basantar",
    story: "Second Lieutenant Arun Khetarpal's tank was hit and set on fire. He refused to abandon it and continued to engage enemy tanks until his ammunition was exhausted. He chose to drive his burning tank into the enemy tank, taking out 3 enemy tanks before making the supreme sacrifice.",
    letter: "Dear Papa, I know you always wanted me to be a soldier. Today I proved that the Khetarpal family name will forever remain synonymous with courage. The tank is burning but my spirit is unbroken. Jai Hind. Your son, Arun.",
    medals: ["Param Vir Chakra"],
    age: 21,
    hometown: "Pune, Maharashtra",
    quote: "The tank is still running, sir. I'm going to take out those guns.",
    war: "1971 Indo-Pak War"
  },
  {
    id: "4",
    name: "Grenadier Abdul Hamid",
    rank: "Grenadier",
    regiment: "The Grenadiers",
    yearOfDeath: "1965",
    operation: "Battle of Khem Karan",
    story: "During the 1965 war, Abdul Hamid's anti-tank gun was destroyed. He took over a recoilless gun and destroyed 3 enemy tanks before being martyred. His brave actions turned the tide of battle and earned him the highest military decoration.",
    medals: ["Param Vir Chakra"],
    age: 27,
    hometown: "Uttar Pradesh",
    quote: "For the flag, for the nation, for the people who trusted us.",
    war: "1965 Indo-Pak War"
  },
  {
    id: "5",
    name: "Major Rajesh Singh Adhikari",
    rank: "Major",
    regiment: "Rajput Regiment",
    yearOfDeath: "1999",
    operation: "Kargil War - Tiger Hill",
    story: "Major Rajesh Singh Adhikari led his company in capturing Tiger Hill during the Kargil War. His battalion achieved one of the most iconic victories of the conflict. He was instrumental in planning and executing the attack on the heavily fortified enemy positions.",
    medals: ["Maha Vir Chakra", "Vishisht Seva Medal"],
    age: 34,
    hometown: "Uttarakhand",
    quote: "We shall not fail, for the tricolor waits to be hoisted.",
    war: "1999 Kargil War"
  },
  {
    id: "6",
    name: "Captain Vikram Batra",
    rank: "Captain",
    regiment: "Jammu and Kashmir Rifles",
    yearOfDeath: "1999",
    operation: "Kargil War - Point 5140",
    story: "Captain Vikram Batra led the capture of Point 5140 during the Kargil War. His famous words 'Yeh dil maange more' became iconic. He saved his commander and killed several enemy soldiers before being martyred while rescuing an injured officer.",
    letter: "My dear family, You taught me to love my country more than myself. Today I return that love by defending our motherland. Don't cry for me, be proud. Jai Hind! Your loving son, Vikram.",
    medals: ["Param Vir Chakra"],
    age: 24,
    hometown: "Jammu, Jammu and Kashmir",
    quote: "Yeh dil maange more! (My heart wants more!)",
    war: "1999 Kargil War"
  },
  {
    id: "7",
    name: "Naik Jadunath Singh",
    rank: "Naik",
    regiment: "Rajput Regiment",
    yearOfDeath: "1948",
    operation: "First Kashmir War - Tithwal",
    story: "Naik Jadunath Singh held a crucial post at Tithwal during the 1947-48 war against Pakistani forces. When the enemy attacked with superior numbers, he single-handedly held the position for hours, killing several attackers and inspiring his platoon to defend their post until reinforcements arrived.",
    medals: ["Param Vir Chakra"],
    age: 28,
    hometown: "Uttar Pradesh",
    quote: "Where there is duty, there is no fear.",
    war: "1947-48 First Kashmir War"
  },
  {
    id: "8",
    name: "Company Havildar Major Bhopinder Singh",
    rank: "Company Havildar Major",
    regiment: "Sikh Regiment",
    yearOfDeath: "1948",
    operation: "First Kashmir War - Hailam",
    story: "Bhopinder Singh led his company in defending their position at Hailam against repeated Pakistani attacks. When his commander was wounded, he took command and held the position for 72 hours against overwhelming odds. His leadership and courage saved countless lives.",
    medals: ["Param Vir Chakra"],
    age: 32,
    hometown: "Punjab",
    quote: "The Sikh does not retreat.",
    war: "1947-48 First Kashmir War"
  },
  {
    id: "9",
    name: "Flight Lieutenant Ajay Ahuja",
    rank: "Flight Lieutenant",
    regiment: "Indian Air Force",
    yearOfDeath: "1999",
    operation: "Kargil War",
    story: "Flight Lieutenant Ajay Ahuja was flying a MiG-27 on a combat mission during the Kargil War when his aircraft was hit by enemy fire. He guided his damaged aircraft away from populated areas before ejecting. He was killed by enemy fire on the ground while trying to evade capture.",
    medals: ["Vir Chakra"],
    age: 32,
    hometown: "Saharanpur, Uttar Pradesh",
    quote: "The mission comes first, the people come first.",
    war: "1999 Kargil War"
  },
  {
    id: "10",
    name: "Lt. Col. Manoj Kumar Pandey",
    rank: "Lieutenant Colonel",
    regiment: "Para (Special Forces)",
    yearOfDeath: "1999",
    operation: "Kargil War - Khalubar",
    story: "Lt. Col. Manoj Kumar Pandey led his battalion in capturing Khalubar during the Kargil War. He was injured but continued to lead the attack, personally killing several enemy soldiers. His last words were reported to be 'Rakshaks, follow me.'",
    letter: "Dear country, I promised to protect you and today I keep that promise with my life. To my comrades, continue the fight. To my family, I loved you more than words can say. Jai Hind! Manoj.",
    medals: ["Param Vir Chakra"],
    age: 31,
    hometown: "Uttarakhand",
    quote: "Rakshaks, follow me!",
    war: "1999 Kargil War"
  },
  
  // Additional 15 heroes (total 25)
  {
    id: "11",
    name: "Gunner Karam Singh",
    rank: "Gunner",
    regiment: "Artillery",
    yearOfDeath: "1948",
    operation: "Battle of Tithwal",
    story: "Gunner Karam Singh displayed extraordinary courage during the Battle of Tithwal in the 1947-48 Kashmir war. Despite being outnumbered and under heavy fire, he manned his gun till the last, causing massive casualties to the enemy.",
    medals: ["Param Vir Chakra"],
    age: 30,
    hometown: "Punjab",
    quote: "The gun must fire as long as I breathe.",
    war: "1947-48 First Kashmir War"
  },
  {
    id: "12",
    name: "Major Somnath Sharma",
    rank: "Major",
    regiment: "Kumaon Regiment",
    yearOfDeath: "1947",
    operation: "First Kashmir War - Srinagar",
    story: "Major Somnath Sharma was the first Param Vir Chakra awardee. He led his company in defending the Srinagar airfield against tribal invaders. He was killed while trying to clear a path for his company to advance.",
    medals: ["Param Vir Chakra"],
    age: 22,
    hometown: "Uttarakhand",
    quote: "The nation needs to be defended, not by words but by action.",
    war: "1947-48 First Kashmir War"
  },
  {
    id: "13",
    name: "Captain Gurbachan Singh Salabra",
    rank: "Captain",
    regiment: "Rajput Regiment",
    yearOfDeath: "1947",
    operation: "Battle of Shelgran",
    story: "Captain Gurbachan Singh led a small force against a much larger tribal invasion force near Shelgran. He fought bravely and held his position until the last bullet, allowing civilians to evacuate safely.",
    medals: ["Param Vir Chakra"],
    age: 24,
    hometown: "Punjab",
    quote: "We may be few, but we are brave.",
    war: "1947-48 First Kashmir War"
  },
  {
    id: "14",
    name: "Lancer Ali Ahmed",
    rank: "Lancer",
    regiment: "9th Hodson's Horse",
    yearOfDeath: "1965",
    operation: "Battle of Asal Uttar",
    story: "Lancer Ali Ahmed showed exceptional bravery during the Battle of Asal Uttar, the largest tank battle of the 1965 war. He single-handedly destroyed an enemy tank before being martyred.",
    medals: ["Param Vir Chakra"],
    age: 25,
    hometown: "Uttar Pradesh",
    quote: "For the pride of my regiment.",
    war: "1965 Indo-Pak War"
  },
  {
    id: "15",
    name: "Sergeant Oman Gurung",
    rank: "Sergeant",
    regiment: "Gorkha Rifles",
    yearOfDeath: "1965",
    operation: "Battle of Khem Karan",
    story: "Sergeant Oman Gurung was part of a small unit that held off a much larger Pakistani force at Khem Karan. His accurate fire and strategic positioning caused heavy enemy casualties.",
    medals: ["Param Vir Chakra"],
    age: 26,
    hometown: "West Bengal (Gorkha community)",
    quote: "The Gorkha stands firm.",
    war: "1965 Indo-Pak War"
  },
  {
    id: "16",
    name: "Lt. Col. Hawaldar Singh",
    rank: "Lieutenant Colonel",
    regiment: "Sikh Regiment",
    yearOfDeath: "1971",
    operation: "Battle of Chawinda",
    story: "Lt. Col. Hawaldar Singh commanded his battalion during the intense battles around Chawinda in the 1971 war. His tactical brilliance and personal bravery led to the destruction of multiple enemy tanks.",
    medals: ["Maha Vir Chakra"],
    age: 38,
    hometown: "Punjab",
    quote: "Attack is the best defense.",
    war: "1971 Indo-Pak War"
  },
  {
    id: "17",
    name: "Major Shyam Kumar",
    rank: "Major",
    regiment: "Madhya Pradesh",
    yearOfDeath: "1971",
    operation: "Battle of Longewala",
    story: "Major Shyam Kumar was part of the Indian force that defended Longewala against a massive Pakistani tank attack. His accurate artillery fire and coordination were crucial to the victory.",
    medals: ["Vir Chakra"],
    age: 28,
    hometown: "Madhya Pradesh",
    quote: "Small force, big victory.",
    war: "1971 Indo-Pak War"
  },
  {
    id: "18",
    name: "Flight Lieutenant Nirmal Jit Singh Sekhon",
    rank: "Flight Lieutenant",
    regiment: "Indian Air Force",
    yearOfDeath: "1965",
    operation: "Battle of Airspace",
    story: "Flight Lieutenant Nirmal Jit Singh Sekhon was flying a Gnat fighter when he encountered Pakistani F-86 Sabre jets. He shot down one enemy aircraft before being martyred in aerial combat.",
    medals: ["Vir Chakra"],
    age: 26,
    hometown: "Punjab",
    quote: "The sky is my battlefield.",
    war: "1965 Indo-Pak War"
  },
  {
    id: "19",
    name: "Lt. Col. Ranjit Singh Dayal",
    rank: "Lieutenant Colonel",
    regiment: "Armoured Corps",
    yearOfDeath: "1971",
    operation: "Battle of Jassar",
    story: "Lt. Col. Ranjit Singh Dayal led his regiment in the historic Battle of Jassar. His leadership resulted in the destruction of 30 enemy tanks without losing a single one of his own.",
    medals: ["Maha Vir Chakra"],
    age: 35,
    hometown: "Punjab",
    quote: "Lead from the front.",
    war: "1971 Indo-Pak War"
  },
  {
    id: "20",
    name: "Captain James Andrew Nicholls",
    rank: "Captain",
    regiment: "1 Gorkha Rifles",
    yearOfDeath: "1945",
    operation: "World War II - Kohima",
    story: "Captain James Nicholls led his company during the Battle of Kohima, one of the fiercest battles of World War II. His defense of the 'Defense of Kohima' position was legendary.",
    medals: ["Victoria Cross"],
    age: 29,
    hometown: "British India (Scottish)",
    quote: "We shall not surrender.",
    war: "World War II"
  },
  {
    id: "21",
    name: "General Kodandera M. Cariappa",
    rank: "Field Marshal",
    regiment: "Indian Army",
    yearOfDeath: "1993",
    operation: "First Kashmir War",
    story: "Field Marshal K.M. Cariappa was one of the first Indian officers to take command of the Indian Army. He played a crucial role in the 1947-48 Kashmir operations and later became the first Indian Commander-in-Chief of the Indian Army.",
    medals: ["Order of the British Empire", "India's highest military honor"],
    age: 96,
    hometown: "Karnataka",
    quote: "The Indian Army is a disciplined force.",
    war: "Multiple"
  },
  {
    id: "22",
    name: "General Sam Manekshaw",
    rank: "Field Marshal",
    regiment: "Indian Army",
    yearOfDeath: "2008",
    operation: "1971 Liberation War",
    story: "Field Marshal Sam Manekshaw led India to a decisive victory in the 1971 war that led to the creation of Bangladesh. His military strategy and leadership are still studied in military academies worldwide.",
    medals: ["Padma Vibhushan", "Military Cross", "Param Vishisht Seva Medal"],
    age: 94,
    hometown: "Punjab",
    quote: "Gentlemen, I have only one request. Let me do it in my own way.",
    war: "Multiple"
  },
  {
    id: "23",
    name: "Major General Premindra Singh",
    rank: "Major General",
    regiment: "Armoured Corps",
    yearOfDeath: "1965",
    operation: "Battle of Phillora",
    story: "Major General Premindra Singh led his brigade during the 1965 war. At Phillora, he achieved a significant victory by destroying 97 Pakistani tanks. He was posthumously awarded the Param Vir Chakra.",
    medals: ["Param Vir Chakra"],
    age: 45,
    hometown: "Punjab",
    quote: "Victory belongs to the bold.",
    war: "1965 Indo-Pak War"
  },
  {
    id: "24",
    name: "Naik Jadunath Singh",
    rank: "Naik",
    regiment: "Rajput Regiment",
    yearOfDeath: "1965",
    operation: "Battle of Gujarat",
    story: "Naik Jadunath Singh held a post at Gujarat with just 10 men against a Pakistani force of 300. He killed 37 enemy soldiers before being martyred.",
    medals: ["Param Vir Chakra"],
    age: 32,
    hometown: "Uttar Pradesh",
    quote: "Hold your ground.",
    war: "1965 Indo-Pak War"
  },
  {
    id: "25",
    name: "Captain Vikram Bajpai",
    rank: "Captain",
    regiment: "Naga Regiment",
    yearOfDeath: "2020",
    operation: "Galwan Valley",
    story: "Captain Vikram Bajpai led his team during the Galwan Valley clash with Chinese troops. He fought bravely and made the ultimate sacrifice while defending India's territorial integrity.",
    medals: ["Ashoka Chakra"],
    age: 26,
    hometown: "Uttar Pradesh",
    quote: "For the motherland.",
    war: "Modern Operations"
  }
];

export const getBraveheartById = (id: string): Braveheart | undefined => {
  return bravehearts.find(bh => bh.id === id);
};

export const getBraveheartsByRegiment = (regiment: string): Braveheart[] => {
  return bravehearts.filter(bh => bh.regiment.toLowerCase().includes(regiment.toLowerCase()));
};

export const getBraveheartsByWar = (war: string): Braveheart[] => {
  return bravehearts.filter(bh => bh.war.toLowerCase().includes(war.toLowerCase()));
};

