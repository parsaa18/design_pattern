class Notification {
  send(message) {}
}

class EmailNotification extends Notification {
  send(message) {
    console.log(`Sending Email: ${message}`);
    return "Email sent";
  }
}

class SMSNotification extends Notification {
  send(message) {
    console.log(`Sending SMS: ${message}`);
    return "SMS sent";
  }
}

class PushNotification extends Notification {
  send(message) {
    console.log(`Sending Push Notification: ${message}`);
    return "Push sent";
  }
}

class NotificationCreator {
  createNotification() {}

  sendNotification(message) {
    const notification = this.createNotification();
    return notification.send(message);
  }
}

class EmailNotificationCreator extends NotificationCreator {
  createNotification() {
    return new EmailNotification();
  }
}

class SMSNotificationCreator extends NotificationCreator {
  createNotification() {
    return new SMSNotification();
  }
}

class PushNotificationCreator extends NotificationCreator {
  createNotification() {
    return new PushNotification();
  }
}

const emailCreator = new EmailNotificationCreator();
const smsCreator = new SMSNotificationCreator();
const pushCreator = new PushNotificationCreator();

console.log(emailCreator.sendNotification("email message"));
console.log(smsCreator.sendNotification("sms message"));
console.log(pushCreator.sendNotification("push message"));
