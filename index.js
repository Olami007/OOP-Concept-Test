class detectObstruction {
  constructor(machineSpeed) {
    this.machineSpeed = machineSpeed;
  }

  calculateExpectedTime(distance) {
    const expectedTimeHours = distance / this.machineSpeed;
    const expectedTimeMinutes = expectedTimeHours * 60;
    return expectedTimeMinutes;
  }

  checkObstruction(actualTime, expectedTime) {
    if (actualTime > expectedTime + 60) {
      return true; // Impenetrable obstruction
    } else {
      return false; // No obstruction
    }
  }
}

// Example usage
const machineSpeed = 30; // miles per hour
const distanceAB = 10; // miles
const actualTravelTime = 78; // minutes
const expectedTravelTime = new detectObstruction(
  machineSpeed
).calculateExpectedTime(distanceAB);

// Create an instance of detectObstruction
const detector = new detectObstruction(machineSpeed);

// Check for obstructions
const isObstruction = detector.checkObstruction(
  distanceAB,
  actualTravelTime,
  expectedTravelTime
);

if (isObstruction) {
  console.log("There is an impenetrable obstruction.");
} else {
  console.log("No obstruction detected.");
}
