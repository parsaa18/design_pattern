class TV {
  constructor() {
    this.isOn = false;
    this.channel = 1;
  }

  turnOn() {
    this.isOn = true;
    console.log("TV is now ON");
  }

  turnOff() {
    this.isOn = false;
    console.log("TV is now OFF");
  }

  setChannel(channel) {
    if (this.isOn) {
      this.channel = channel;
      console.log(`TV channel set to ${channel}`);
    } else {
      console.log("Cannot change channel: TV is OFF");
    }
  }

  getState() {
    return `TV is ${this.isOn ? "ON" : "OFF"}, Channel: ${this.channel}`;
  }
}

class RemoteControl {
  constructor(tv) {
    this.tv = tv;
  }

  pressOn() {
    this.tv.turnOn();
  }

  pressOff() {
    this.tv.turnOff();
  }

  changeChannel(channel) {
    this.tv.setChannel(channel);
  }
}

function runTVRemote() {
  const tv = new TV();

  const remote = new RemoteControl(tv);

  console.log("Initial state:", tv.getState());

  console.log("\nAction 1: Turn ON TV");
  remote.pressOn();
  console.log("State:", tv.getState());

  console.log("\nAction 2: Change to channel 5");
  remote.changeChannel(5);
  console.log("State:", tv.getState());

  console.log("\nAction 3: Change to channel 10");
  remote.changeChannel(10);
  console.log("State:", tv.getState());

  console.log("\nAction 4: Turn OFF TV");
  remote.pressOff();
  console.log("State:", tv.getState());

  console.log("\nNote: Undo is not supported in this version.");
}

runTVRemote();
