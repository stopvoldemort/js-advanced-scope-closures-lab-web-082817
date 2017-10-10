function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    const start = parseInt(startBlock.slice(0, startBlock.length-2))
    const end = parseInt(endBlock.slice(0, startBlock.length-2))
    const distance = Math.abs(end - start)
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}

function createDriver() {
  let driverID = 1

  return class Driver {
    constructor(name) {
      this.name = name
      this.id = driverID
      driverID++
    }
  }

}
