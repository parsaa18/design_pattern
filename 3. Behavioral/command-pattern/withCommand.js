// Receiver
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

// Command
class TVCommand {
  execute() {}
  undo() {}
}

// Concrete Command
class TurnOnCommand extends TVCommand {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.turnOn();
  }

  undo() {
    this.tv.turnOff();
  }
}

// Concrete Command
class TurnOffCommand extends TVCommand {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.turnOff();
  }

  undo() {
    this.tv.turnOn();
  }
}

// Concrete Command
class ChangeChannelCommand extends TVCommand {
  constructor(tv, channel) {
    super();
    this.tv = tv;
    this.channel = channel;
    this.previousChannel = tv.channel;
  }

  execute() {
    this.tv.setChannel(this.channel);
  }

  undo() {
    this.tv.setChannel(this.previousChannel);
  }
}

// Invoker
class RemoteControl {
  constructor() {
    this.history = [];
  }

  pressButton(command) {
    command.execute();
    this.history.push(command);
  }

  pressUndo() {
    const command = this.history.pop();
    if (command) {
      console.log("Undoing last action...");
      command.undo();
    } else {
      console.log("No actions to undo");
    }
  }
}

// Client
function runTVRemote() {
  const tv = new TV();

  const turnOn = new TurnOnCommand(tv);
  const turnOff = new TurnOffCommand(tv);
  const changeToChannel5 = new ChangeChannelCommand(tv, 5);
  const changeToChannel10 = new ChangeChannelCommand(tv, 10);

  const remote = new RemoteControl();

  console.log("Initial state:", tv.getState());

  console.log("\nAction 1: Turn ON TV");
  remote.pressButton(turnOn);
  console.log("State:", tv.getState());

  console.log("\nAction 2: Change to channel 5");
  remote.pressButton(changeToChannel5);
  console.log("State:", tv.getState());

  console.log("\nAction 3: Change to channel 10");
  remote.pressButton(changeToChannel10);
  console.log("State:", tv.getState());

  console.log("\nAction 4: Turn OFF TV");
  remote.pressButton(turnOff);
  console.log("State:", tv.getState());

  console.log("\nUndoing last action (Turn OFF):");
  remote.pressUndo();
  console.log("State:", tv.getState());

  console.log("\nUndoing last action (Change to channel 10):");
  remote.pressUndo();
  console.log("State:", tv.getState());

  console.log("\nUndoing last action (Change to channel 5):");
  remote.pressUndo();
  console.log("State:", tv.getState());

  console.log("\nUndoing last action (Turn ON):");
  remote.pressUndo();
  console.log("State:", tv.getState());

  console.log("\nTrying to undo again:");
  remote.pressUndo();
}

runTVRemote();
