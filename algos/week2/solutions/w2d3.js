
const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

// temp = 50-16 = 34
const riverLevels2 = [15, 17, 30, 16, 50, 17, 25, 9, 3]; 
const expected2 = 34; 

// 
const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

function measureWaterLevels(waterLevels) {
    // Initialize maxRise to -1 to handle cases where no rise is found.
    let maxRise = -1;
    // Initialize minLevel with the first element in the array.
    // This keeps track of the lowest water level seen so far.
    let minLevel = waterLevels[0];
    // Start iterating from the second element since we need to compare levels.
    for (let i = 1; i < waterLevels.length; i++) {
        const currentLevel = waterLevels[i];
        // If the current level is higher than the minLevel, a rise is detected.
        if (currentLevel > minLevel) {
            // Calculate the rise by subtracting minLevel from currentLevel.
            const rise = currentLevel - minLevel;
            // If this rise is greater than any previously recorded rise,
            // update maxRise with this new value.
            if (rise > maxRise) {
                maxRise = rise;
            }
        }else {
            minLevel = currentLevel;
        }
    }
    // After the loop, return the maximum rise found.
    // If no rise was found, maxRise will remain -1.
    return maxRise;
}

function measureWaterLevels(waterLevels) {
    let maxExpected = -1
    let min = waterLevels[0]
  
    for (let i=1; i<waterLevels.length; i++){
      if (waterLevels[i] > waterLevels[i-1]) {
          const difference = waterLevels[i] - min;
        if (difference > maxExpected){
          maxExpected = difference
        }
        }
      else {
        min = waterLevels[i]
      }
      }
      return maxExpected;
    }