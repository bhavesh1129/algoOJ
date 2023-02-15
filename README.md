<img src = "https://i.ibb.co/DzspmYb/logo.png" width="100%" height="100%"/>

### Report Link(Google Doc)🔗: https://bit.ly/3JuHTiZ

### Description📄:
The MERN Stack Online Judge Project is a comprehensive coding platform designed to challenge and showcase your coding abilities. Built on the powerful MERN (MongoDB, Express, React, Node.js) stack, this project offers a user-friendly interface, secure user authentication, question submission, solution verification, and more. Our solution is highly responsive, using CSS and Tailwind CSS to style our frontend, Material UI to create reusable UI components, and Redux as our state management library. Take on the challenge and showcase your programming prowess with our MERN Stack Online Judge Project.

### What An User Can Do?🤔💭
Welcome to the `MERN Stack Online Judge Project`, where coding enthusiasts can unleash their skills and creativity. As a user, you have a plethora of features at your fingertips that allow you to push your limits and unlock your true coding potential.

  - First and foremost, you can easily log in using your `Google` account credentials through `PassportJS` authentication. With just a few clicks, you can start exploring the platform and experiencing all it has to offer.

  - Once you're logged in, you can add, edit, and delete problems to the platform, along with custom test cases, making it easier for you to create challenging coding puzzles and push the boundaries of your abilities. And if you're not ready to create your own problems, you can still access and solve problems posted by other users.

  - As you're working on problems, you can submit your code and see if the verdict is accepted, wrong answer, or `TLE`. This way, you can see how your code performs and adjust it accordingly, helping you learn and grow as a coder.

  - But that's not all! You can also see all of your previous submissions for a particular problem, making it easier to track your progress and see how you've improved over time. And for added convenience, you can even download your code for future reference or to share with others.

With so many exciting features available, the `MERN Stack Online Judge Project` is the perfect platform to hone your skills, challenge yourself, and connect with other coders from around the world. 
So why wait? Sign up today and start exploring all the possibilities!

### How do I Run C, C++, Python Code?🧑🏻‍💻🏃🏻‍♂️
Running `C, C++, and Python` code on the server-side can be a challenging task. To achieve this in our `MERN Stack Online Judge Project`, we used the powerful `child-process` module of `Node.js` to run code in the background. Although there may be other ways to run code on the backend, this approach has proven to be efficient and reliable.

To execute a program, the user submits the code as a string in the programming language of their choice. The server then takes the user's code, compiles and runs it using the `child-process module`. This module runs the code in a separate process, ensuring that it doesn't block the server's main event loop. The child process executes the code and sends back the output to the server, which then returns it to the user.

Our approach allows the user to test and submit code written in `C, C++, and Python`, making it a versatile solution for our online judge platform. While there may be other ways to run code on the backend, using child-process has proven to be a reliable and efficient way to execute code on the server-side.

### Technology Used⚙️🪛
Our `MERN Stack Online Judge Project` is built using the latest technologies and tools, making it a robust and reliable solution for online judging.

  - For the `frontend`, we utilized the power of `ReactJS, and Typescript` to create a highly responsive and user-friendly UI. `ReactJS` is a popular and widely used `JavaScript` library that provides developers with the ability to create highly interactive and reusable UI components.

  - We chose `MongoDB` as our primary database due to its flexibility and scalability. MongoDB is a powerful `NoSQL` database that provides fast and efficient data processing capabilities, making it an ideal choice for a high-performance online judge platform.

  - For the `backend`, we used `NodeJS` with the `Express` framework, which provides a powerful, flexible, and scalable way to build web applications. Express is a lightweight framework that allows developers to create `RESTful APIs` quickly and efficiently.

  - We employed `PassportJS` for user authentication, which is a popular and widely used authentication library for NodeJS. It provides easy-to-use strategies for authentication and allows us to use different authentication methods.

  - To handle concurrent requests, we used `Bull Queue`, which is a powerful and flexible job and task processing library. Bull Queue allows us to handle and process requests asynchronously and can help improve the overall performance of our online judge platform.

  - Finally, we leveraged the power of `Docker` to provide a seamless and portable deployment solution for our online judge project. Docker allows us to package our entire application, including all the required dependencies, into a single container that can be deployed to any platform. This helps ensure that our application runs consistently across different environments and saves time in setting up new deployments.

<!-- ### How to run it in local machine?
1. <a href="https://docs.docker.com/engine/install/">Install docker</a> if you don't have it installed in your machine.
2. Clone this repo.
3. Run the following command and you are good to go.
   ```
   docker-compose up
   ```