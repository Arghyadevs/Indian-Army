export interface WomanOfficer {
  id: string;
  name: string;
  rank: string;
  achievements: string[];
  story: string;
  awards: string[];
  year: string;
  role: string;
  pioneering: string;
}

export const womenInArmy: WomanOfficer[] = [
  {
    id: "1",
    name: "Captain Anujika Gnamb",
    rank: "Captain",
    achievements: ["First female officer to be commissioned into the Indian Army's infantry", "Assam Rifles"],
    story: "Captain Anujika Gnamb made history when she became the first woman to be commissioned into the Indian Army's infantry regiment. Her achievement broke a 234-year-old tradition of the infantry being an all-male domain. She was commissioned in 2020 and has since been serving with distinction.",
    awards: ["Sword of Honour ( AFA)"],
    year: "2020",
    role: "Infantry Officer",
    pioneering: "First female infantry officer in Indian Army history"
  },
  {
    id: "2",
    name: "Major Navneet D",
    rank: "Major",
    achievements: ["First woman to command a male soldier unit", "Army Service Corps"],
    story: "Major Navneet D achieved a historic milestone by becoming the first woman officer to command a unit with male soldiers. Her leadership and dedication have paved the way for many more women to follow in her footsteps. She has been instrumental in modernizing logistics operations.",
    awards: ["Vishisht Seva Medal"],
    year: "2019",
    role: "Unit Commander",
    pioneering: "First female unit commander of mixed-gender unit"
  },
  {
    id: "3",
    name: "Lt. Col. Sandhya Rani",
    rank: "Lieutenant Colonel",
    achievements: ["First woman to lead a contingent in Republic Day Parade", "Army Medical Corps"],
    story: "Lt. Col. Sandhya Rani created history by becoming the first woman officer to lead an Indian Army contingent in the Republic Day Parade. This was a momentous occasion that symbolized the progressive role of women in the armed forces. She has served in multiple conflict zones with distinction.",
    awards: ["Vishisht Seva Medal", "Commendation Card"],
    year: "2021",
    role: "Medical Officer",
    pioneering: "First female contingent commander in Republic Day Parade"
  },
  {
    id: "4",
    name: "Major Radhika Menon",
    rank: "Major",
    achievements: ["First woman to qualify as a parajumper", "Army Aviation"],
    story: "Major Radhika Menon made headlines when she became the first woman in the Indian Armed Forces to qualify as a parajumper. This qualification requires rigorous physical and mental training, and her achievement has inspired many women to pursue challenging roles in the military.",
    awards: ["Special Forces Parachute Badge"],
    year: "2022",
    role: "Aviation Officer",
    pioneering: "First female parajumper in Indian Armed Forces"
  },
  {
    id: "5",
    name: "Lt. Gen. Punita Arora",
    rank: "Lieutenant General",
    achievements: ["First woman to become Lieutenant General in Indian Army", "First woman AVSM of the Army", "Army Medical Corps"],
    story: "Lt. Gen. Punita Arora made history as the first woman to be appointed as the Lieutenant General of the Indian Army. She has had a distinguished career spanning over three decades, serving in various capacities and excelling in medical administration. She was also the first woman to be awarded the Ati Vishisht Seva Medal.",
    awards: ["Ati Vishisht Seva Medal", "Vishisht Seva Medal", "Meritorious Service Medal"],
    year: "2016",
    role: "Medical Corps Chief",
    pioneering: "First female Lieutenant General in Indian Army"
  },
  {
    id: "6",
    name: "Colonel Latha Reddy",
    rank: "Colonel",
    achievements: ["First woman to head a signals unit", "Corps of Signals"],
    story: "Colonel Latha Reddy broke barriers by becoming the first woman to head a signals unit in the Indian Army. Her technical expertise and leadership have been instrumental in modernizing the army's communication systems. She has served in challenging terrain including Siachen.",
    awards: ["Vishisht Seva Medal", "Special Service Medal"],
    year: "2018",
    role: "Signals Officer",
    pioneering: "First female signals unit commander"
  },
  {
    id: "7",
    name: "Major A. S. D. B. S. Priyadarshini",
    rank: "Major",
    achievements: ["First woman to be awarded the Sena Medal for gallantry", "Intelligence Corps"],
    story: "Major Priyadarshini made history by becoming the first woman officer to be awarded the Sena Medal for gallantry. Her courage during a counter-terrorism operation in Jammu and Kashmir saved many lives. She displayed exceptional bravery under enemy fire.",
    awards: ["Sena Medal (Gallantry)", "Operation Vijay Medal"],
    year: "2020",
    role: "Intelligence Officer",
    pioneering: "First female recipient of Sena Medal for gallantry"
  },
  {
    id: "8",
    name: "Brigadier Manjula",
    rank: "Brigadier",
    achievements: ["First woman to become Brigade Commander in Kashmir Valley", "Arty Corps"],
    story: "Brigadier Manjula created history by becoming the first woman to command a brigade in the Kashmir Valley. Her appointment to this critical position demonstrates the trust and confidence the Army leadership has placed in women officers. She has successfully managed complex counter-terrorism operations.",
    awards: ["Vishisht Seva Medal", "High Altitude Medal", "Counter Terrorism Medal"],
    year: "2021",
    role: "Brigade Commander",
    pioneering: "First female brigade commander in Kashmir Valley"
  },
  {
    id: "9",
    name: "Captain Shikha Pandey",
    rank: "Captain",
    achievements: ["First woman pilot to qualify for army aviation", "Army Aviation Corps"],
    story: "Captain Shikha Pandey achieved a historic milestone by becoming the first woman pilot to qualify for army aviation. She underwent rigorous training and mastered the art of flying helicopters in challenging terrain. Her achievement has opened new horizons for women in military aviation.",
    awards: ["Aviation Badge", "Service Medal"],
    year: "2021",
    role: "Helicopter Pilot",
    pioneering: "First female army aviation pilot"
  },
  {
    id: "10",
    name: "Major Dr. Bhavana",
    rank: "Major",
    achievements: ["First woman surgeon to serve in Siachen", "Army Medical Corps"],
    story: "Major Dr. Bhavana made history by becoming the first woman surgeon to serve at the Siachen Base Camp. At an altitude of over 12,000 feet, she performed critical surgeries under extreme conditions. Her dedication to saving lives in the world's highest battlefield has been inspirational.",
    awards: ["Vishisht Seva Medal", "Siachen Medal", "Operation Vijay Medal"],
    year: "2019",
    role: "Combat Surgeon",
    pioneering: "First female surgeon at Siachen Base Camp"
  }
];

export const getWomanOfficerById = (id: string): WomanOfficer | undefined => {
  return womenInArmy.find(w => w.id === id);
};

