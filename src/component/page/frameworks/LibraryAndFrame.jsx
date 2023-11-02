import React from 'react'

function LibraryAndFrame() {
  return (
    <div className="max-w-6xl">
      <div class="sm:w-full p-5">
        <div class="text">
          <h2 class=" font-bold text-3xl  sm:text-4xl ">
            Libraries vs. frameworks
          </h2>

          <p class="text-gray-700 mt-3 ">
            The terms “libraries” and “frameworks” are sometimes used
            interchangeably, but they’re very different. In the video above,
            Carlos, a Web Developer, explains that a library is a set of
            previously-written code that you can use to build your own code. A
            framework is a supporting structure that requires specificity. You
            must follow the pattern of the framework.
            <br />
            <br />
            A framework is essentially a skeleton, and you work with the
            skeleton. A framework calls on your code. Your code calls on a
            library. In other words, your code is in control when you use a
            library, but when you use a framework, it’s in control. This is
            referred to as “inversion of control.”
            <br />
            <br />
            Frameworks can, and often do, include libraries. Libraries are used
            to fill out functions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LibraryAndFrame