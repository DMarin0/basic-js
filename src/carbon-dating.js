const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity = "no-value") {
  if (sampleActivity === "no-value") return false;
  if (typeof sampleActivity !== "string") return false;
  const sampleActivityNum = parseFloat(sampleActivity);
  if (isNaN(sampleActivityNum)) return false;
  if (sampleActivityNum > MODERN_ACTIVITY) return false;
  if (sampleActivityNum === 0 || sampleActivityNum < 0) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / k);
};
