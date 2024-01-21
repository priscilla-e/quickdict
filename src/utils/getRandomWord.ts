/**
 * Returns a random word from a pre-defined list
 *
 * @returns Generated
 */
export default function getRandomWord() {
  const randIndex = Math.floor(Math.random() * RANDOM_WORDS.length);

  return RANDOM_WORDS[randIndex];
}

// Maybe get from firebase?
const RANDOM_WORDS = [
  'apple',
  'mystery',
  'journey',
  'river',
  'galaxy',
  'mountain',
  'ocean',
  'butterfly',
  'forest',
  'guitar',
  'piano',
  'universe',
  'dinosaur',
  'elephant',
  'balloon',
  'garden',
  'painting',
  'mirror',
  'window',
  'treasure',
];
