What is Null Object Design Pattern:

The Null Object Design Pattern provides a way to handle "null" or "missing" objects by replacing them with a default object that has neutral or safe behavior. Instead of checking for null everywhere in your code, you use a special object that implements the same interface but does nothing or returns default values. This makes your code cleaner, safer, and easier to maintain.

Basically you make a null object to avoid using if statements to check if the object is null or not


Pros:

  -No more null related bugs
  -Cleaner and more maintainable and more readable code style


you can find the example here in this folder with and without the null object Design Pattern


