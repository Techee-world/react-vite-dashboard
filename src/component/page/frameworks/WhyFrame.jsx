import React from 'react'

function WhyFrame() {
  return (
    <div>
      <div class="sm:w-full max-w-6xl p-5">
        <div class="text">
          <h2 class=" font-bold text-3xl  sm:text-4xl ">
            Why do we use frameworks?
          </h2>

          <p class="text-gray-700 mt-3 ">
            Using frameworks saves time and reduces the risk of errors. You
            don’t need to write everything from the ground up, so there’s less
            chance of introducing errors. Plus, frameworks have already been
            tested, so there’s less to worry about. Other advantages include:
            <br />
            <br />
            <ul>
              <li> --:  More secure code</li>
              <li> --:  Simpler testing and debugging</li>
              <li> --:  Avoiding duplicate code</li>
              <li>--:  Clean and easily adaptable code</li>
              <li>--:  Able to focus on writing code specific to the project</li>
              <li>--:  Can be extended</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyFrame