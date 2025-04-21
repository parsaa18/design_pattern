What is Factory Method Design Pattern

The Factory Method Design Pattern is a creational pattern that provides a way to create objects without specifying their exact class. Instead of directly using new to instantiate a class, you define a method (the "factory method") in a superclass that subclasses override to create specific types of objects. This makes your code more flexible, reusable, and easier to extend when adding new types.

Pros:

  -More flexiblity because class in client code is decoupled
  -Support Single Responsiblity and Open/Closed Principle
  