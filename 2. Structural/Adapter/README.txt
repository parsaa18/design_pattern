What id Adapter Design Pattern:


The Adapter Design Pattern allows two incompatible interfaces to work together by acting as a bridge between them. It’s like a power adapter that lets you plug a US device into a European socket. The adapter translates or wraps one interface to match what another system expects, without changing the original code.


Keywords: 

  -Target:  The interface or class your system expects or needs to work with.
  -Adaptee: The existing class or system with an incompatible interface or class.
  -Adapter: A class that implements the target and translates calls to the adaptee’s methods.


Pros:

  -Makes Two incompatible classes work together without changing the code.
  -improves Maintainability and reusability.
  
Cons:

  -More Code layers and performance overhead
  -the Adapter can be very complex if the target and adaptee are very different
