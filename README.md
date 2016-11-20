Angular 2 Development With TypeScript

Chapter 1. Introducing Angular 2
-------------------------------------------------
	1.1. A Sampler of JavaScript Frameworks and Libraries
	1.1.1 Feature-Complete Frameworks
	1.1.2. Lightweight Frameworks
	1.1.3. Libraries
	1.1.4. What’s Node.js
	1.2. High-Level Overview of AngularJS
	1.3. High-Level Overview Angular 
	1.3.1. Code Simplification
	1.3.2. Performance Improvements
	1.4. A Toolbox of the Angular Developer
	1.6  A Quick Glance at Angular
	1.7. Introducing a Sample Online Auction
	1.8. Summary

Chapter 2. Getting Started with Angular 2
----------------------------------------------------------
	2.1. First Angular Application
	2.1.1. Hello World in TypeScript
	2.1.2. Hello World in EcmaScript 5
	2.1.3. Hello World in EcmaScript 6
	2.2. The Building Blocks of an Angular Application
	2.2. SystemJS Universal Module Loader
	2.2.1. Component
	2.2.2. View
	2.2.3. Directive
	2.4 Brief Introduction to Data Binding
	2.5. Universal Module Loader SystemJS
	2.5.1. Overview of Module Loaders
	2.5.2. Module Loaders vs script Tags
	2.5.3. Getting Started With SystemJS
	2.5.4. Configuring SystemJS
	2.6. Selecting a Package Manager
	2.6.1. Comparing npm and JSPM
	2.6.2. Starting a Project with npm
	2.7. Hands-on: Getting Started with Online Auction
	2.8. Summary

Chapter 3. Navigation with Component Router
----------------------------------------------------------------
	3.1. Routing Basics
	3.1.1. Location Strategies
	3.2.2. Client-Side Navigation Building Blocks
	3.3. Passing Data to Routes
	3.3.1. Using RouteParam
	3.3.2. Using RouteData
	3.4. Child Routes
	3.4. Auxiliary Routes
	3.5. Lazy Loading with AsyncRoute
	3.6. Hands-on: Adding navigation to Online Auction
	3.7. Summary

Chapter 4. Dependency Injection
---------------------------------------------
	4.1. The Dependency Injection and Inversion Of Control Patterns
	4.1.1. Benefits of Dependency Injection
	4.2. Injectors and Providers
	4.2.1. How to Create a Provider
	4.3. Injecting Product Service
	4.3.1. Injecting Http Service
	4.4. Switching Injectables Made Easy
	4.4.1. Declaring Providers with useFactory and useValue
	4.5. The Hierarchy of Injectors
	4.6. Hands-on: Using DI in Online Auction
	4.6.1. Creating the Product Details Component
	4.7. Summary

Chapter 5. Bindings, Observables, and Pipes
---------------------------------------------
	5.1. Data Binding
	5.1.1. Binding to Events
	5.1.2. Binding to Properties and Attributes
	5.1.3. Binding in Templates
	5.1.4. Two-Way Data Binding
	5.2. Events and Observables
	5.2.1. What are Observables
	5.2.2. Observable Event Streams
	5.2.1. How to Cancel Observables
	5.3. Pipes
	5.3.1. Custom Pipes
	5.4. Hands-on: Filtering Products in Online Auction
	5.5. Summary

Chapter 6. Implementing Components' Communication
---------------------------------------------

	6.1. Inter-Component Communications
	6.1.1. Input and Output Properties
	6.1.1.1 Input Properties
	6.1.1.2  Output Properties and Custom Events
	6.1.2. The Mediator Pattern
	6.1.3. Changing Templates at Runtime with ngContent
	6.2. Component Lifecycle
	6.2.1 Using ngOnChanges
	6.3. Exposing Chile Component's API
	6.4. Hands-on: Adding Rating Feature to Auction
	6.5. Summary

Chapter 7. Working With Forms
---------------------------------------------
	7.1. Overview of HTML Forms
	7.1.1. Introducing a User Registration Form
	7.2. Angular Forms API
	7.2.1. Form Controls
	7.2.1. Form Directives
	7.3. Form Validation
	7.3.1. Programmatic Approach
	7.3.2. Custom Validators
	7.3.3. Custom Validation Directives
	7.4. Template-Driven Forms
	7.4.1. Refactoring a Sample Form Template
	7.4.2. Creating a Sample Form Component
	7.5. Data-Driven Forms
	7.5.1. Creating a Sample Form Component
	7.5.2. Refactoring a Sample Form Template
	7.6. Hands-on: Adding Validation to the Search Form
	7.7. Summary

Chapter 8. Interacting with Servers Using HTTP and WebSockets
---------------------------------------------------------------------------------------------

	8.1. Brief Overview of the Http Object API
	8.2. Creating a Web Server with Node and TypeScript
	8.2.1. Creating a Simple Web Server
	8.2.2. Serving JSON
	8.2.3. Live TypeScript Recompilation and Code Reload
	8.2.4. Adding the RESTful API for Serving Products
	8.3. Bringing Angular and Node Together
	8.3.1. Static Resources on the Server
	8.3.2. Making GET Requests with Http Service
	8.3.3. Unwrapping Observables Inside Templates with AsyncPipe
	8.3.4. Injecting HTTP Into a Service
	8.4. Client-Server Communications via WebSockets
	8.4.1. Pushing Data From Node Server
	8.4.2. Turning WebSocket into Observable
	8.5. Hands-on: Implementing Product Search and Bid Notifications
	8.5.1. Implementing Product Search using HTTP
	8.5.2. Broadcasting Auction Bids using WebSocket
	8.6. Summary

Chapter 9. Testing Angular applications
-------------------------------------------------------
	9.1. Developing without a compiler
	9.2. Test runners
	9.3. Testing frameworks
	9.4. Working with mock objects
	9.5. Troubleshooting Angular applications
	9.6. In-browser debugging
	9.7. Hands-on: Testing Online Auction
	9.7.1. Unit testing of the auction services
	9.7.2. Functional testing of components
	9.8. Summary

Chapter 10. Bundling and Deploying Applications with Webpack
--------------------------------------------------------------------------------------------
	10.1 Getting to know Webpack
	10.1.1 Bundling Hello World 
	10.2 Webpack Loaders
	10.2.1 Minimizing the Code
	10.2.2 Bundling CSS
	10.2.3. Transpiling Typscript
	10.2.4. Adding Angular to the Bundle
	10.3. Preparing Production Bundles
	10.4 Hands-on: Deploying Online Auction with Webpack
	10.5 Summary

Appendix A. Overview of ECMAScript 6
--------------------------------------------------------

	11.1. How to Run Code Samples
	11.2. Template Literals
	11.2.1. Multi-line Strings
	11.2.2. Tagged Template Strings
	11.3. Optional Parameters and Default Values
	11.4. Scope of Variables
	11.4.1. Variable Hoisting
	11.4.2. Block Scoping With let and const
	11.4.3. Block Scope for Functions
	11.4.4. Arrow Function Expressions, This, and That
	11.5. Rest and Spread Operators
	11.6. Generators
	11.7. Destructuring
	11.7.1. Destructuring of Objects
	11.7.2. Destructuring of Arrays
	11.8. Iterating with forEach(), for-in, and for-of
	11.8.1. Using forEach()
	11.8.2. Using for-in
	11.8.3. Using for-of
	11.9. Classes and Inheritance
	11.9.1. Constructors
	11.9.2. Static Variables
	11.9.3. Getters, Setters, and Method Definitions
	11.9.4. The super Keyword and the super Function
	11.10. Asynchronous Processing with Promises
	11.10.1. A Callback Hell
	11.10.2. ES6 Promises
	11.10.3. Resolving Several Promises at Once
	11.11. Modules
	11.11.1. Imports and Exports
	11.11.2. Loading Modules Dynamically
	11.12. What to Read Next on ES6
	11.13. Summary

Appendix B. TypeScript as a Language for Angular Applications
-------------------------------------------------------------------------------------------

	12.1. Why Writing Angular Apps in TypeScript
	12.2. Getting Started With TypeScript
	12.2.1. Installing and Using TypeScript Compiler
	12.3. TypeScript as a Superset of JavaScript
	12.4. Optional Types
	12.5. Functions
	12.5.1. Default Parameters
	12.5.2. Optional Parameters
	12.5.3. Arrow Function Expressions
	12.6. Classes
	12.6.1. Access Modifiers
	12.6.2. Methods
	12.6.3. Inheritance
	12.7. Generics
	12.8. Interfaces
	12.8.1. Declaring Custom Types with Interfaces
	12.8.2. Using the Keyword implements
	12.8.3. Using Callable Interfaces
	12.9. TypeScript Modules
	12.10. Adding the Class Metadata With Annotations
	12.11. Using Type Definition Files
	12.12. Bringing Together TypeScript and Angular
	12.13. Overview of the TypeScript/Angular Development Process
	12.14. Summary
