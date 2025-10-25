### learnins

- When a class implements an interface, it must implement all its abstract methods. Since Java 8, you can write default or static methods in interfaces then no need to implement those.

```java
// have to implement both even it is not required
interface Vehicle {
    void start();
    void stop();
}

// here optional to implement honk method, can be overridden or directly used
interface Vehicle {
    void start();
    default void honk() {
        System.out.println("Honking...");
    }
}
```

- Inheritance is mainly reusing code from parent
```java
class Vehicle {
    void stop() {
        System.out.println("Vehicle stopped");
    }
}

class Car extends Vehicle {
    // stop method can also be used here
    void start() {
        System.out.println("Car started");
    }
}
```

- Abstraction hides details, exposes only what’s necessary
```java
abstract class Shape {
    // Abstract method → only declaration, no body
    abstract void draw();

    // Concrete (implemented) method → has body
    void areaFormula() {
        System.out.println("Area = length × breadth (general formula)");
    }
}

class Circle extends Shape {
    // Must implement the abstract method
    @Override
    void draw() {
        System.out.println("Drawing a circle...");
    }

    // Optional: override the concrete method if you want
    @Override
    void areaFormula() {
        System.out.println("Area = π × r × r");
    }
}
```