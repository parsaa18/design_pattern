What is Command Pattern:

The Command Design Pattern is a behavioral pattern that turns a request or action into a standalone object called a command. This object contains all the information needed to perform the action, including the method to call and its parameters. It allows you to decouple the sender (who triggers the action) from the receiver (who performs the action), making it easier to add features like undo/redo, logging, or queuing actions.

Basically this pattern is used to seperate the class actions and logic into a standalone classes which will allow us to add more feature to the command and also more commands to the main class

Keywords:

  -Command:          A class with execute() method inside and optionally more methods like undo or etc...
  -Concrete Command: A class that implements the command, specifying the receiver and action.
  -Receiver:         The Object that does the actual work when the command is executed.
  -Invoker(sender):          The object that triggers the command’s execution like a button or etc...



Pros:

  -More flexiblity because of sender and receiver seperation.
  -Easy to add more commands if needed and also more feature to each command.


Cons: 

  -More memory usage
  -Complexity because of extra classes for each Command
  -Can lead to many small commands for a simple system

you cand find the examples of this Command Pattern here in this folder.