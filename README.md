# Lab 5 - Starter
Yifei Xue

[Link to explore.html](https://YifeiXue111.github.io/Lab5_Starter/explore.html)

[Link to expose.html](https://YifeiXue111.github.io/Lab5_Starter/expose.html)


1. **Would you use a unit test to test the “message” feature of a messaging application? Why or why not?**
   - No, a unit test would not be the best choice for testing the “message” feature of a messaging application. The “message” feature involves multiple components interacting, such as the user interface for writing the message. Unit tests are designed to test isolated, individual functions or components without external dependencies. Testing the entire “message” feature requires verifying the integration of these components which is better suited for integration tests or end-to-end tests. A unit test could be used for specific parts of the feature, like a function that formats the message, but not for the feature as a whole.

2. **Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?**
   - Yes, a unit test is appropriate for testing the “max message length” feature. This feature is likely implemented as a specific, isolated function or component. Unit tests are ideal for testing such self-contained logic because they can verify the function’s behavior with various inputs without relying on external systems like the UI or network. This makes unit testing efficient and effective for ensuring the “max message length” feature works as expected.
