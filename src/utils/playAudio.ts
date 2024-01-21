
/** 
 * Plays an audio file 
 * 
 * @param audioFile The full audio file path including extension
*/
export default function playAudio(audioFile: string) {
  const audio = new Audio(audioFile);
  audio.play();
}