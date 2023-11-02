import React from 'react'

function AboutFrame() {
  return (
    <div>
      <div class="sm:flex items-center max-w-6xl border-b">
        <div class="sm:w-1/3 p-10">
          <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div class="sm:w-full p-5">
          <div class="text">
            <h2 class=" font-bold text-3xl  sm:text-4xl ">
              Frame <span class="text-indigo-600">Works</span>
            </h2>
            <span class="text-gray-500 border-b-2 border-gray-300  uppercase">
              Most programming language frameworks list
            </span>
            <p class="text-gray-700 mt-3 ">
              A framework is a structure that you can build software on. It
              serves as a foundation, so you’re not starting entirely from
              scratch. Frameworks are typically associated with a specific
              programming language and are suited to different types of tasks.
              <br />
              <br />
              
              Let’s say you’re building a house. You could pour the foundation
              and frame the house yourself. It would take a lot of time, but you
              could do it. If all of that were already done for you, though, it
              would save you quite a bit of effort — especially if it was done
              by expert home builders.
              <br />
               In software development, a framework
              serves a similar purpose. It’s designed and tested by other
              Software Developers and Engineers, so you know it’s a solid
              foundation. 
              <br />
              A house isn’t complete with just the framework,
              though. Similarly, a framework in software development is a
              starting point, but you add higher-level functionality to it to
              make it work. Below, we’ll take a closer look at frameworks, what
              they’re used for, the differences between libraries and
              frameworks, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFrame