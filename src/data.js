async function getDataFromJSON() {
  let res = await fetch('./src/data.json');
  return await res.json();
}


async function populateData() {
  const data = await getDataFromJSON(); 
  const {firstName, lastName, address, emailAddress,course, bio, techStacks, projects} = data;

  // FULL NAME
  document.getElementById('fullName').innerHTML = `${firstName} ${lastName}`;
  
  // ADDRESS
  document.getElementById('address').innerText = address;

  // COURSE
  document.getElementById('course').innerText = course; 
  
  // EMAIL ADDRESS
  document.getElementById('emailAddress').innerText = emailAddress; 
  
  // BIO
  document.getElementById('description').innerText = bio; 

  // TECH STACK
  techStacks.forEach(techStack => {
    document.getElementById('techStack').innerHTML += `<span class="tag">${techStack}</span>`;
  })

  // PROJECTS
  projects.forEach((project, index) => {
    const {title, description, link, techUsed} = project;
    const uniqueId = ++index;
    if (uniqueId > 4) return;
    document.getElementById('projects').innerHTML += `
      <div
        class="bento-box border border-b-brand-border shadow-sm dark:border dark:border-brand-borderDM col-span-2 row-span-1 hover:scale-y-105 hover:shadow-xl transition-all 1s dark:hover:scale-y-105 dark:hover:shadow-lg dark:hover:shadow-blue-200/5  dark:transition-all 1s">
        <a href="${link}" target="_blank">
          <h3 class="font-semibold">${title}</h3>
          <p class="text-xs md:text-md">${description}</p>
          <div class="flex flex-row text-xs gap-2 flex-wrap mt-2" id="techUsed-${uniqueId}">
          </div>
        </a>
      </div>`;
      // TECH USED IN PROJECTS
      techUsed.forEach(tech => {
        document.getElementById(`techUsed-${uniqueId}`).innerHTML += `<span class="tag">${tech}</span>`
      });
  });
}

export function renderContent() {
  const sectionHeader = document.getElementById('section-header');
  const sectionBody = document.getElementById('section-body');

  sectionHeader.innerHTML = `
  <div
        class="bento-box border border-b-brand-border dark:border dark:border-brand-borderDM flex flex-col items-start gap-2 sm:gap-4 sm:flex-row sm:items-center">
        <img src="./public/avatar.jpg" alt="avatar" width="160" height="160"
          class=" w-28 h-28 object-cover rounded-md sm:w-40 sm:h-40 ">
        <div class="min-w-[280pxpx] w-[100%] sm: flex-1">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold mb-2 sm:text-3xl" id="fullName"></h1>
            <button id="theme-toggle" type="button"
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm p-2.5 transition-all 1s">
              <div class="hidden" id="theme-toggle-dark-icon">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      fill="#0c0c0e"></path>
                  </g>
                </svg>
              </div>
              <div class="hidden" id="theme-toggle-light-icon">
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.01024">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M773.8 414.3V313.5h-80.5v-97.1H333.4v97.1h-80.6v100.8H167v204.6h85.8v102.3h80.6v102.3h359.9V721.2h80.5V618.9h85.8V414.3zM477.8 55.2H552v74.2h-74.2zM477.8 897.7H552v74.2h-74.2zM859.6 129.4h74.2v74.2h-74.2zM859.6 823.5h74.2v74.2h-74.2zM92.9 129.4h74.2v74.2H92.9zM92.9 823.5h74.2v74.2H92.9zM18.7 463.6h74.2v74.2H18.7zM933.7 463.6h74.2v74.2h-74.2z"
                      fill="#EFCE0F"></path>
                  </g>
                </svg>
              </div>
            </button>

          </div>
          <p class="text-xs flex items-center mb-2 gap-1">
            
          <svg width="14px" height="14px" class="hidden" id="locationIconDark" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                  d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                  stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>

            <svg width="14px" height="14px" class="hidden" id="locationIconLight" viewBox="-4 0 32 32" version="1.1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>location</title>
                <desc>Created with Sketch Beta.</desc>
                <defs> </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                  <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-104.000000, -411.000000)"
                    fill="#e6e6e6">
                    <path
                      d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                      id="location" sketch:type="MSShapeGroup"> </path>
                  </g>
                </g>
              </g>
            </svg>
            <span class="text-xs md:text-sm" id="address"></span>
          </p>
          <p class="mb-2 font-normal text-sm sm:text-base" id="course"></p>
          <div class="flex items-center gap-2">
            <a href="https://99lash.github.io/CCS-107/Practical-exam/" target="_blank"
              class="min-w-24 flex items-center gap-1 rounded-md border border-black bg-brand-foreground px-2 py-1.5 text-xs text-brand-light dark:border-brand-borderDM dark:bg-brand-light dark:text-brand-black">
              <svg width="16px" height="16px" class="hidden" id="downloadIconLight" viewBox="0 0 24.00 24.00"
                fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                    d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                    fill="#ffffff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z"
                    fill="#ffffff"></path>
                </g>
              </svg>
              <svg width="16px" height="16px" class="hidden" id="downloadIconDark" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path opacity="0.5"
                    d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                    stroke="#0f0f10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#0f0f10" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
              <span>
                View Resume
              </span>
            </a>
            <a href="mailto:asherjohn48@gmail.com" 
              class="min-w-16 flex items-center gap-1 rounded-md border border-black px-2 py-1.5 text-xs dark:border-brand-borderDM">
              <svg width="16px" height="16px" class="hidden" id="mailIconDark" viewBox="-0.5 0 25 25" fill="none"
                xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M22.0098 12.39V7.39001C22.0098 6.32915 21.5883 5.31167 20.8382 4.56152C20.0881 3.81138 19.0706 3.39001 18.0098 3.39001H6.00977C4.9489 3.39001 3.93148 3.81138 3.18134 4.56152C2.43119 5.31167 2.00977 6.32915 2.00977 7.39001V17.39C2.00977 18.4509 2.43119 19.4682 3.18134 20.2184C3.93148 20.9685 4.9489 21.39 6.00977 21.39H12.0098"
                    stroke="#000000" stroke-width="1.4499999999999997" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                  <path d="M21.209 5.41992C15.599 16.0599 8.39906 16.0499 2.78906 5.41992" stroke="#000000"
                    stroke-width="1.4499999999999997" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M15.0098 18.39H23.0098" stroke="#000000" stroke-width="1.4499999999999997"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M20.0098 15.39L23.0098 18.39L20.0098 21.39" stroke="#000000"
                    stroke-width="1.4499999999999997" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
              <svg width="16px" height="16px" class="hidden" id="mailIconLight" viewBox="-0.5 0 25 25" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M22.0098 12.39V7.39001C22.0098 6.32915 21.5883 5.31167 20.8382 4.56152C20.0881 3.81138 19.0706 3.39001 18.0098 3.39001H6.00977C4.9489 3.39001 3.93148 3.81138 3.18134 4.56152C2.43119 5.31167 2.00977 6.32915 2.00977 7.39001V17.39C2.00977 18.4509 2.43119 19.4682 3.18134 20.2184C3.93148 20.9685 4.9489 21.39 6.00977 21.39H12.0098"
                    stroke="#FaFaFa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M21.209 5.41992C15.599 16.0599 8.39906 16.0499 2.78906 5.41992" stroke="#FaFaFa"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M15.0098 18.39H23.0098" stroke="#FaFaFa" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path d="M20.0098 15.39L23.0098 18.39L20.0098 21.39" stroke="#FaFaFa" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
              <span>
                Send Email
              </span>
            </a>
          </div>
        </div>
      </div>
  `;

  sectionBody.innerHTML = `
    <div class="grid gap-2.5 grid-cols-1 md:grid-cols-6 md:grid-rows-6">

        <!-- ABOUT -->
        <div
          class="bento-box border border-b-brand-border dark:border dark:border-brand-borderDM col-span-1 md:col-span-4 md:row-span-6">
          <div class="mb-2 font-semibold flex items-center gap-2">
            <svg width="16px" height="16px" class="hidden" id="aboutIconDark" viewBox="0 0 16 16"
              xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1"
              id="svg3049" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <metadata id="metadata3054">
                  <rdf:rdf>
                    <cc:work>
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
                      <dc:title></dc:title>
                      <dc:date>2021</dc:date>
                      <dc:creator>
                        <cc:agent>
                          <dc:title>Timothée Giet</dc:title>
                        </cc:agent>
                      </dc:creator>
                      <cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/"></cc:license>
                    </cc:work>
                    <cc:license rdf:about="http://creativecommons.org/licenses/by-sa/4.0/">
                      <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"></cc:permits>
                      <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"></cc:permits>
                      <cc:requires rdf:resource="http://creativecommons.org/ns#Notice"></cc:requires>
                      <cc:requires rdf:resource="http://creativecommons.org/ns#Attribution"></cc:requires>
                      <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"></cc:permits>
                      <cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike"></cc:requires>
                    </cc:license>
                  </rdf:rdf>
                </metadata>
                <g transform="translate(-421.714 -531.79)" id="layer1">
                  <g id="layer1-4" transform="translate(418.714 -501.571)">
                    <g id="layer1-9" transform="matrix(-1 0 0 1 22 0)">
                      <g transform="matrix(-1 0 0 1 22 0)" id="layer1-2">
                        <path style="opacity:1;fill:#181616;fill-opacity:1;stroke:none"
                          d="M4 1033.362v1h14v-1zm0 2v1h8v-1zm0 4v1h14v-1zm0 2v1h9v-1zm0 4v1h14v-1zm0 2v1h12v-1z"
                          id="path4174"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg width="16px" height="16px" class="hidden" id="aboutIconLight" viewBox="0 0 16 16"
              xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1"
              id="svg3049" fill="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <metadata id="metadata3054">
                  <rdf:rdf>
                    <cc:work>
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
                      <dc:title></dc:title>
                      <dc:date>2021</dc:date>
                      <dc:creator>
                        <cc:agent>
                          <dc:title>Timothée Giet</dc:title>
                        </cc:agent>
                      </dc:creator>
                      <cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/"></cc:license>
                    </cc:work>
                    <cc:license rdf:about="http://creativecommons.org/licenses/by-sa/4.0/">
                      <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"></cc:permits>
                      <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"></cc:permits>
                      <cc:requires rdf:resource="http://creativecommons.org/ns#Notice"></cc:requires>
                      <cc:requires rdf:resource="http://creativecommons.org/ns#Attribution"></cc:requires>
                      <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"></cc:permits>
                      <cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike"></cc:requires>
                    </cc:license>
                  </rdf:rdf>
                </metadata>
                <g transform="translate(-421.714 -531.79)" id="layer1">
                  <g id="layer1-4" transform="translate(418.714 -501.571)">
                    <g id="layer1-9" transform="matrix(-1 0 0 1 22 0)">
                      <g transform="matrix(-1 0 0 1 22 0)" id="layer1-2">
                        <path style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none"
                          d="M4 1033.362v1h14v-1zm0 2v1h8v-1zm0 4v1h14v-1zm0 2v1h9v-1zm0 4v1h14v-1zm0 2v1h12v-1z"
                          id="path4174"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h3 class="text-xl">About</h3>
          </div>
          <p id="description" class="text-xs sm:text-sm md:text-md"></p>
        </div>
        <!-- TECH STACk -->
        <div
          class="bento-box border border-b-brand-border dark:border dark:border-brand-borderDM col-span-1 md:col-span-2 md:row-span-2">
          <div class="mb-2 flex items-center gap-2">
            <svg width="16px" height="16px" class="hidden" id="techIconDark" viewBox="0 0 1024 1024" fill="#000000"
              class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.01024">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M873.363 924.731c-0.039 40.905-33.184 74.053-74.083 74.099h-574.519c-40.91-0.039-74.065-33.19-74.111-74.096 0-3.965 0.734-7.904 2.144-11.609l198.996-521.504c0.069-0.827 0.187-1.654 0.291-2.47v-298.833h-23.511c-18.001 0-32.564-14.587-32.564-32.576s14.563-32.576 32.564-32.576h56.076c0.003 0 0.007 0 0.012 0 17.99 0 32.576 14.586 32.576 32.576 0 0 0 0 0 0v333.925c0 1.876-0.163 3.728-0.478 5.581 0 3.973-0.956 9.321-2.388 13.014l-119.863 314.118h432.199l-123.837-313.769c-1.401-3.431-2.233-7.411-2.275-11.581l-0.241-0.957c-0.133-1.155-0.209-2.493-0.209-3.847v-336.484c0-0.003 0-0.007 0-0.012 0-17.985 14.579-32.564 32.564-32.564 0 0 0 0 0 0h57.543c18.001 0 32.564 14.587 32.564 32.576s-14.563 32.576-32.564 32.576h-24.991v300.976l205.824 521.469c1.503 3.822 2.284 7.865 2.284 11.965zM448.899 651.798c0.42-13.171 11.197-23.689 24.432-23.689s24.013 10.517 24.43 23.651c0.001 13.495-10.962 24.47-24.443 24.47s-24.42-10.975-24.42-24.432zM465.164 651.798c-0.003 0.086-0.005 0.188-0.005 0.29 0 4.505 3.651 8.156 8.156 8.156 4.505 0 8.156-3.651 8.156-8.156 0-0.115-0.002-0.228-0.006-0.341-0.178-4.347-3.759-7.814-8.148-7.814-4.402 0-7.989 3.487-8.15 7.851zM575.101 627.366c0-0.003 0-0.007 0-0.012 0-13.5 10.943-24.444 24.444-24.444 13.5 0 24.444 10.943 24.444 24.444 0 13.5-10.943 24.444-24.444 24.444-13.49-0.014-24.423-10.942-24.444-24.43zM591.389 627.366c-0.003 0.086-0.005 0.188-0.005 0.29 0 4.505 3.651 8.156 8.156 8.156 4.505 0 8.156-3.651 8.156-8.156 0-0.115-0.002-0.228-0.006-0.341-0.178-4.347-3.759-7.814-8.148-7.814-4.402 0-7.989 3.487-8.15 7.851zM507.223 545.939c0.027-18.737 15.212-33.919 33.949-33.939 18.733 0.027 33.909 15.207 33.93 33.936-0.027 18.732-15.2 33.908-33.924 33.941-18.743-0.014-33.934-15.199-33.953-33.936zM523.51 545.939c0 9.728 7.922 17.651 17.663 17.651 9.716 0 17.663-7.922 17.663-17.651 0-9.741-7.947-17.663-17.663-17.663-9.741 0-17.663 7.922-17.663 17.663z">
                </path>
              </g>
            </svg>
            <svg width="16px" height="16px" class="hidden" id="techIconLight" viewBox="0 0 1024 1024" fill="#ffffff"
              class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M873.363 924.731c-0.039 40.905-33.184 74.053-74.083 74.099h-574.519c-40.91-0.039-74.065-33.19-74.111-74.096 0-3.965 0.734-7.904 2.144-11.609l198.996-521.504c0.069-0.827 0.187-1.654 0.291-2.47v-298.833h-23.511c-18.001 0-32.564-14.587-32.564-32.576s14.563-32.576 32.564-32.576h56.076c0.003 0 0.007 0 0.012 0 17.99 0 32.576 14.586 32.576 32.576 0 0 0 0 0 0v333.925c0 1.876-0.163 3.728-0.478 5.581 0 3.973-0.956 9.321-2.388 13.014l-119.863 314.118h432.199l-123.837-313.769c-1.401-3.431-2.233-7.411-2.275-11.581l-0.241-0.957c-0.133-1.155-0.209-2.493-0.209-3.847v-336.484c0-0.003 0-0.007 0-0.012 0-17.985 14.579-32.564 32.564-32.564 0 0 0 0 0 0h57.543c18.001 0 32.564 14.587 32.564 32.576s-14.563 32.576-32.564 32.576h-24.991v300.976l205.824 521.469c1.503 3.822 2.284 7.865 2.284 11.965zM448.899 651.798c0.42-13.171 11.197-23.689 24.432-23.689s24.013 10.517 24.43 23.651c0.001 13.495-10.962 24.47-24.443 24.47s-24.42-10.975-24.42-24.432zM465.164 651.798c-0.003 0.086-0.005 0.188-0.005 0.29 0 4.505 3.651 8.156 8.156 8.156 4.505 0 8.156-3.651 8.156-8.156 0-0.115-0.002-0.228-0.006-0.341-0.178-4.347-3.759-7.814-8.148-7.814-4.402 0-7.989 3.487-8.15 7.851zM575.101 627.366c0-0.003 0-0.007 0-0.012 0-13.5 10.943-24.444 24.444-24.444 13.5 0 24.444 10.943 24.444 24.444 0 13.5-10.943 24.444-24.444 24.444-13.49-0.014-24.423-10.942-24.444-24.43zM591.389 627.366c-0.003 0.086-0.005 0.188-0.005 0.29 0 4.505 3.651 8.156 8.156 8.156 4.505 0 8.156-3.651 8.156-8.156 0-0.115-0.002-0.228-0.006-0.341-0.178-4.347-3.759-7.814-8.148-7.814-4.402 0-7.989 3.487-8.15 7.851zM507.223 545.939c0.027-18.737 15.212-33.919 33.949-33.939 18.733 0.027 33.909 15.207 33.93 33.936-0.027 18.732-15.2 33.908-33.924 33.941-18.743-0.014-33.934-15.199-33.953-33.936zM523.51 545.939c0 9.728 7.922 17.651 17.663 17.651 9.716 0 17.663-7.922 17.663-17.651 0-9.741-7.947-17.663-17.663-17.663-9.741 0-17.663 7.922-17.663 17.663z">
                </path>
              </g>
            </svg>
            <h3 class="text-xl font-semibold">Tech Stack</h3>
          </div>

          <div class="flex flex-row text-xs gap-2 flex-wrap" id="techStack">
           
          </div>
        </div>
        <!-- CONNECT -->
        <div
          class="bento-box border border-b-brand-border dark:border dark:border-brand-borderDM col-span-1 md:col-span-2 md:row-span-4">
          <div class="mb-2 font-semibold flex items-center gap-2">
            <svg width="16px" height="16px" class="hidden" id="connectIconDark" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14 10C14 9.44771 13.5523 9 13 9H12.5C9.46243 9 7 11.4624 7 14.5C7 17.5376 9.46243 20 12.5 20H17.5C20.5376 20 23 17.5376 23 14.5C23 12.0091 21.3441 9.90488 19.073 9.22823C18.5098 9.06042 18 9.52887 18 10.1166V10.1683C18 10.6659 18.3745 11.0735 18.8345 11.2634C20.1055 11.788 21 13.0395 21 14.5C21 16.433 19.433 18 17.5 18H12.5C10.567 18 9 16.433 9 14.5C9 12.567 10.567 11 12.5 11H13C13.5523 11 14 10.5523 14 10Z"
                  fill="#0F0F0F"></path>
                <path
                  d="M11.5 4C14.5376 4 17 6.46243 17 9.5C17 12.5376 14.5376 15 11.5 15H11C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H11.5C13.433 13 15 11.433 15 9.5C15 7.567 13.433 6 11.5 6H6.5C4.567 6 3 7.567 3 9.5C3 10.9605 3.89451 12.212 5.16553 12.7366C5.62548 12.9264 6 13.3341 6 13.8317V13.8834C6 14.4711 5.49024 14.9396 4.92699 14.7718C2.65592 14.0951 1 11.9909 1 9.5C1 6.46243 3.46243 4 6.5 4H11.5Z"
                  fill="#0F0F0F"></path>
              </g>
            </svg>
            <svg width="16px" height="16px" class="hidden" id="connectIconLight" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14 10C14 9.44771 13.5523 9 13 9H12.5C9.46243 9 7 11.4624 7 14.5C7 17.5376 9.46243 20 12.5 20H17.5C20.5376 20 23 17.5376 23 14.5C23 12.0091 21.3441 9.90488 19.073 9.22823C18.5098 9.06042 18 9.52887 18 10.1166V10.1683C18 10.6659 18.3745 11.0735 18.8345 11.2634C20.1055 11.788 21 13.0395 21 14.5C21 16.433 19.433 18 17.5 18H12.5C10.567 18 9 16.433 9 14.5C9 12.567 10.567 11 12.5 11H13C13.5523 11 14 10.5523 14 10Z"
                  fill="#FaFaFa"></path>
                <path
                  d="M11.5 4C14.5376 4 17 6.46243 17 9.5C17 12.5376 14.5376 15 11.5 15H11C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H11.5C13.433 13 15 11.433 15 9.5C15 7.567 13.433 6 11.5 6H6.5C4.567 6 3 7.567 3 9.5C3 10.9605 3.89451 12.212 5.16553 12.7366C5.62548 12.9264 6 13.3341 6 13.8317V13.8834C6 14.4711 5.49024 14.9396 4.92699 14.7718C2.65592 14.0951 1 11.9909 1 9.5C1 6.46243 3.46243 4 6.5 4H11.5Z"
                  fill="#FaFaFa"></path>
              </g>
            </svg>
            <h3 class="text-xl">Connect</h3>
          </div>

          <div class="flex flex-col justify-around min-h-40">
            <a href="mailto:asherjohn48@gmail.com"
              class="bg-brand-border p-2 rounded-md text-xs flex flex-col hover:bg-transparent border border-b-brand-border transition-all 1s dark:bg-brand-borderDM dark:text-brand-light dark:border-brand-borderDM dark:hover:bg-transparent dark:transition-all 1s">
              <span class="text-gray-950/55 dark:text-brand-light">Email</span>
              <span id="emailAddress"></span>
            </a>

            <div>
              <p class="text-gray-950/55 text-xs dark:text-brand-light mb-1">Socials</p>
              <div class="grid grid-cols-3 gap-1">
                <a href="https://github.com/99lash" target="_blank"
                  class="bg-brand-border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors 1s dark:bg-brand-borderDM dark:hover:bg-gray-800/20 dark:transition-all 1s">
                  <svg width="24px" height="24px" class="hidden" id="githubIconDark" viewBox="0 0 20 20" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>github [#142]</title>
                      <desc>Created with Sketch.</desc>
                      <defs> </defs>
                      <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"
                          fill="#000000">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path
                              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                              id="github-[#142]"> </path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg fill="#ffffff" width="24px" height="24px" class="hidden" id="githubIconLight"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z">
                      </path>
                    </g>
                  </svg>
                </a>

                <a href="https://www.linkedin.com/in/john-asher-manit-7035b8264/" target="_blank"
                  class="bg-brand-border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors 1s dark:bg-brand-borderDM dark:hover:bg-gray-800/20 dark:transition-all 1s">
                  <svg width="24px" height="24px" class="hidden" id="linkedinIconDark" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                        fill="#000000"></path>
                    </g>
                  </svg>
                  <svg width="24px" height="24px" class="hidden" id="linkedinIconLight" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                        fill="#FaFaFa"></path>
                    </g>
                  </svg>
                </a>

                <a href="https://www.instagram.com/xshr.21" target="_blank"
                  class="bg-brand-border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors 1s dark:bg-brand-borderDM dark:hover:bg-gray-800/20 dark:transition-all 1s">
                  <svg width="24px" height="24px" class="hidden" id="instagramIconDark" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"
                    stroke-width="0.00024000000000000003">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="#0F0F0F"></path>
                      <path
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                        fill="#0F0F0F"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                        fill="#0F0F0F"></path>
                    </g>
                  </svg>
                  <svg width="24px" height="24px" class="hidden" id="instagramIconLight" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="#FaFaFa"></path>
                      <path
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                        fill="#FaFaFa"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                        fill="#FaFaFa"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- PROJECTS -->
        <div
          class="bento-box border border-b-brand-border dark:border dark:border-brand-borderDM col-span-1 md:col-span-6 md:row-span-6">
          <div class="mb-2 flex items-center justify-between gap-2">
            <div class="flex items-center gap-1">
              <svg width="16px" height="16px" class="hidden" id="appsIconDark" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.2 2H6.16146H6.16142C5.63429 1.99998 5.17954 1.99997 4.80497 2.03057C4.40963 2.06287 4.01641 2.13419 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2.13419 4.01641 2.06287 4.40963 2.03057 4.80497C1.99997 5.17954 1.99998 5.63429 2 6.16142V6.16146V6.2V6.8V6.83855V6.83859C1.99998 7.36572 1.99997 7.82047 2.03057 8.19503C2.06287 8.59037 2.13419 8.98359 2.32698 9.36197C2.6146 9.92646 3.07354 10.3854 3.63803 10.673C4.01641 10.8658 4.40963 10.9371 4.80497 10.9694C5.17954 11 5.6343 11 6.16145 11H6.16148H6.2H6.8H6.83852H6.83855C7.3657 11 7.82046 11 8.19503 10.9694C8.59037 10.9371 8.98359 10.8658 9.36197 10.673C9.92646 10.3854 10.3854 9.92646 10.673 9.36197C10.8658 8.98359 10.9371 8.59037 10.9694 8.19503C11 7.82046 11 7.3657 11 6.83855V6.83852V6.8V6.2V6.16148V6.16145C11 5.6343 11 5.17954 10.9694 4.80497C10.9371 4.40963 10.8658 4.01641 10.673 3.63803C10.3854 3.07354 9.92646 2.6146 9.36197 2.32698C8.98359 2.13419 8.59037 2.06287 8.19503 2.03057C7.82047 1.99997 7.36572 1.99998 6.83859 2H6.83855H6.8H6.2ZM4.54601 4.109C4.59546 4.0838 4.69617 4.04612 4.96784 4.02393C5.25117 4.00078 5.62345 4 6.2 4H6.8C7.37655 4 7.74883 4.00078 8.03217 4.02393C8.30383 4.04612 8.40455 4.0838 8.45399 4.109C8.64215 4.20487 8.79514 4.35785 8.89101 4.54601C8.9162 4.59546 8.95388 4.69617 8.97607 4.96784C8.99922 5.25117 9 5.62345 9 6.2V6.8C9 7.37655 8.99922 7.74883 8.97607 8.03217C8.95388 8.30383 8.9162 8.40455 8.89101 8.45399C8.79514 8.64215 8.64215 8.79514 8.45399 8.89101C8.40455 8.9162 8.30383 8.95388 8.03217 8.97607C7.74883 8.99922 7.37656 9 6.8 9H6.2C5.62345 9 5.25117 8.99922 4.96784 8.97607C4.69617 8.95388 4.59546 8.9162 4.54601 8.89101C4.35785 8.79514 4.20487 8.64215 4.109 8.45399C4.0838 8.40455 4.04612 8.30383 4.02393 8.03217C4.00078 7.74883 4 7.37656 4 6.8V6.2C4 5.62345 4.00078 5.25117 4.02393 4.96784C4.04612 4.69617 4.0838 4.59546 4.109 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.109ZM17.2 2H17.1615H17.1614C16.6343 1.99998 16.1795 1.99997 15.805 2.03057C15.4096 2.06287 15.0164 2.13419 14.638 2.32698C14.0735 2.6146 13.6146 3.07354 13.327 3.63803C13.1342 4.01641 13.0629 4.40963 13.0306 4.80497C13 5.17955 13 5.63431 13 6.16146L13 6.2V6.8L13 6.83855C13 7.36569 13 7.82046 13.0306 8.19503C13.0629 8.59037 13.1342 8.98359 13.327 9.36197C13.6146 9.92646 14.0735 10.3854 14.638 10.673C15.0164 10.8658 15.4096 10.9371 15.805 10.9694C16.1795 11 16.6343 11 17.1615 11H17.1615H17.2H17.8H17.8385H17.8386C18.3657 11 18.8205 11 19.195 10.9694C19.5904 10.9371 19.9836 10.8658 20.362 10.673C20.9265 10.3854 21.3854 9.92646 21.673 9.36197C21.8658 8.98359 21.9371 8.59037 21.9694 8.19503C22 7.82049 22 7.36578 22 6.83869V6.83867V6.83864V6.83852V6.8V6.2V6.16148V6.16136V6.16134V6.16131C22 5.63422 22 5.17951 21.9694 4.80497C21.9371 4.40963 21.8658 4.01641 21.673 3.63803C21.3854 3.07354 20.9265 2.6146 20.362 2.32698C19.9836 2.13419 19.5904 2.06287 19.195 2.03057C18.8205 1.99997 18.3657 1.99998 17.8386 2H17.8385H17.8H17.2ZM15.546 4.109C15.5955 4.0838 15.6962 4.04612 15.9678 4.02393C16.2512 4.00078 16.6234 4 17.2 4H17.8C18.3766 4 18.7488 4.00078 19.0322 4.02393C19.3038 4.04612 19.4045 4.0838 19.454 4.109C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C19.9162 4.59546 19.9539 4.69617 19.9761 4.96784C19.9992 5.25117 20 5.62345 20 6.2V6.8C20 7.37655 19.9992 7.74883 19.9761 8.03217C19.9539 8.30383 19.9162 8.40455 19.891 8.45399C19.7951 8.64215 19.6422 8.79514 19.454 8.89101C19.4045 8.9162 19.3038 8.95388 19.0322 8.97607C18.7488 8.99922 18.3766 9 17.8 9H17.2C16.6234 9 16.2512 8.99922 15.9678 8.97607C15.6962 8.95388 15.5955 8.9162 15.546 8.89101C15.3578 8.79514 15.2049 8.64215 15.109 8.45399C15.0838 8.40455 15.0461 8.30383 15.0239 8.03217C15.0008 7.74883 15 7.37656 15 6.8V6.2C15 5.62345 15.0008 5.25117 15.0239 4.96784C15.0461 4.69617 15.0838 4.59546 15.109 4.54601C15.2049 4.35785 15.3578 4.20487 15.546 4.109ZM6.16146 13L6.2 13H6.8L6.83855 13C7.36569 13 7.82046 13 8.19503 13.0306C8.59037 13.0629 8.98359 13.1342 9.36197 13.327C9.92646 13.6146 10.3854 14.0735 10.673 14.638C10.8658 15.0164 10.9371 15.4096 10.9694 15.805C11 16.1795 11 16.6343 11 17.1615V17.1615V17.2V17.8V17.8385V17.8386C11 18.3657 11 18.8205 10.9694 19.195C10.9371 19.5904 10.8658 19.9836 10.673 20.362C10.3854 20.9265 9.92646 21.3854 9.36197 21.673C8.98359 21.8658 8.59037 21.9371 8.19503 21.9694C7.82049 22 7.36577 22 6.83867 22H6.83865H6.83852H6.8H6.2H6.16148H6.16136H6.16134C5.63424 22 5.17952 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8386V17.8385V17.8V17.2V17.1615V17.1614C1.99998 16.6343 1.99997 16.1795 2.03057 15.805C2.06287 15.4096 2.13419 15.0164 2.32698 14.638C2.6146 14.0735 3.07354 13.6146 3.63803 13.327C4.01641 13.1342 4.40963 13.0629 4.80497 13.0306C5.17955 13 5.63431 13 6.16146 13ZM4.96784 15.0239C4.69617 15.0461 4.59546 15.0838 4.54601 15.109C4.35785 15.2049 4.20487 15.3578 4.109 15.546C4.0838 15.5955 4.04612 15.6962 4.02393 15.9678C4.00078 16.2512 4 16.6234 4 17.2V17.8C4 18.3766 4.00078 18.7488 4.02393 19.0322C4.04612 19.3038 4.0838 19.4045 4.109 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.59546 19.9162 4.69617 19.9539 4.96784 19.9761C5.25117 19.9992 5.62345 20 6.2 20H6.8C7.37656 20 7.74883 19.9992 8.03217 19.9761C8.30383 19.9539 8.40455 19.9162 8.45399 19.891C8.64215 19.7951 8.79514 19.6422 8.89101 19.454C8.9162 19.4045 8.95388 19.3038 8.97607 19.0322C8.99922 18.7488 9 18.3766 9 17.8V17.2C9 16.6234 8.99922 16.2512 8.97607 15.9678C8.95388 15.6962 8.9162 15.5955 8.89101 15.546C8.79514 15.3578 8.64215 15.2049 8.45399 15.109C8.40455 15.0838 8.30383 15.0461 8.03217 15.0239C7.74883 15.0008 7.37655 15 6.8 15H6.2C5.62345 15 5.25117 15.0008 4.96784 15.0239ZM17.2 13L17.1615 13C16.6343 13 16.1795 13 15.805 13.0306C15.4096 13.0629 15.0164 13.1342 14.638 13.327C14.0735 13.6146 13.6146 14.0735 13.327 14.638C13.1342 15.0164 13.0629 15.4096 13.0306 15.805C13 16.1795 13 16.6343 13 17.1615L13 17.2V17.8L13 17.8385C13 18.3657 13 18.8205 13.0306 19.195C13.0629 19.5904 13.1342 19.9836 13.327 20.362C13.6146 20.9265 14.0735 21.3854 14.638 21.673C15.0164 21.8658 15.4096 21.9371 15.805 21.9694C16.1795 22 16.6343 22 17.1614 22H17.1615H17.2H17.8H17.8385H17.8386C18.3658 22 18.8205 22 19.195 21.9694C19.5904 21.9371 19.9836 21.8658 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C21.8658 19.9836 21.9371 19.5904 21.9694 19.195C22 18.8205 22 18.3658 22 17.8386V17.8385V17.8V17.2V17.1615V17.1614C22 16.6343 22 16.1795 21.9694 15.805C21.9371 15.4096 21.8658 15.0164 21.673 14.638C21.3854 14.0735 20.9265 13.6146 20.362 13.327C19.9836 13.1342 19.5904 13.0629 19.195 13.0306C18.8205 13 18.3657 13 17.8385 13L17.8 13H17.2ZM15.546 15.109C15.5955 15.0838 15.6962 15.0461 15.9678 15.0239C16.2512 15.0008 16.6234 15 17.2 15H17.8C18.3766 15 18.7488 15.0008 19.0322 15.0239C19.3038 15.0461 19.4045 15.0838 19.454 15.109C19.6422 15.2049 19.7951 15.3578 19.891 15.546C19.9162 15.5955 19.9539 15.6962 19.9761 15.9678C19.9992 16.2512 20 16.6234 20 17.2V17.8C20 18.3766 19.9992 18.7488 19.9761 19.0322C19.9539 19.3038 19.9162 19.4045 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.4045 19.9162 19.3038 19.9539 19.0322 19.9761C18.7488 19.9992 18.3766 20 17.8 20H17.2C16.6234 20 16.2512 19.9992 15.9678 19.9761C15.6962 19.9539 15.5955 19.9162 15.546 19.891C15.3578 19.7951 15.2049 19.6422 15.109 19.454C15.0838 19.4045 15.0461 19.3038 15.0239 19.0322C15.0008 18.7488 15 18.3766 15 17.8V17.2C15 16.6234 15.0008 16.2512 15.0239 15.9678C15.0461 15.6962 15.0838 15.5955 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109Z"
                    fill="#000000"></path>
                </g>
              </svg>
              <svg width="16px" height="16px" class="hidden" id="appsIconLight" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.2 2H6.16146H6.16142C5.63429 1.99998 5.17954 1.99997 4.80497 2.03057C4.40963 2.06287 4.01641 2.13419 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2.13419 4.01641 2.06287 4.40963 2.03057 4.80497C1.99997 5.17954 1.99998 5.63429 2 6.16142V6.16146V6.2V6.8V6.83855V6.83859C1.99998 7.36572 1.99997 7.82047 2.03057 8.19503C2.06287 8.59037 2.13419 8.98359 2.32698 9.36197C2.6146 9.92646 3.07354 10.3854 3.63803 10.673C4.01641 10.8658 4.40963 10.9371 4.80497 10.9694C5.17954 11 5.6343 11 6.16145 11H6.16148H6.2H6.8H6.83852H6.83855C7.3657 11 7.82046 11 8.19503 10.9694C8.59037 10.9371 8.98359 10.8658 9.36197 10.673C9.92646 10.3854 10.3854 9.92646 10.673 9.36197C10.8658 8.98359 10.9371 8.59037 10.9694 8.19503C11 7.82046 11 7.3657 11 6.83855V6.83852V6.8V6.2V6.16148V6.16145C11 5.6343 11 5.17954 10.9694 4.80497C10.9371 4.40963 10.8658 4.01641 10.673 3.63803C10.3854 3.07354 9.92646 2.6146 9.36197 2.32698C8.98359 2.13419 8.59037 2.06287 8.19503 2.03057C7.82047 1.99997 7.36572 1.99998 6.83859 2H6.83855H6.8H6.2ZM4.54601 4.109C4.59546 4.0838 4.69617 4.04612 4.96784 4.02393C5.25117 4.00078 5.62345 4 6.2 4H6.8C7.37655 4 7.74883 4.00078 8.03217 4.02393C8.30383 4.04612 8.40455 4.0838 8.45399 4.109C8.64215 4.20487 8.79514 4.35785 8.89101 4.54601C8.9162 4.59546 8.95388 4.69617 8.97607 4.96784C8.99922 5.25117 9 5.62345 9 6.2V6.8C9 7.37655 8.99922 7.74883 8.97607 8.03217C8.95388 8.30383 8.9162 8.40455 8.89101 8.45399C8.79514 8.64215 8.64215 8.79514 8.45399 8.89101C8.40455 8.9162 8.30383 8.95388 8.03217 8.97607C7.74883 8.99922 7.37656 9 6.8 9H6.2C5.62345 9 5.25117 8.99922 4.96784 8.97607C4.69617 8.95388 4.59546 8.9162 4.54601 8.89101C4.35785 8.79514 4.20487 8.64215 4.109 8.45399C4.0838 8.40455 4.04612 8.30383 4.02393 8.03217C4.00078 7.74883 4 7.37656 4 6.8V6.2C4 5.62345 4.00078 5.25117 4.02393 4.96784C4.04612 4.69617 4.0838 4.59546 4.109 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.109ZM17.2 2H17.1615H17.1614C16.6343 1.99998 16.1795 1.99997 15.805 2.03057C15.4096 2.06287 15.0164 2.13419 14.638 2.32698C14.0735 2.6146 13.6146 3.07354 13.327 3.63803C13.1342 4.01641 13.0629 4.40963 13.0306 4.80497C13 5.17955 13 5.63431 13 6.16146L13 6.2V6.8L13 6.83855C13 7.36569 13 7.82046 13.0306 8.19503C13.0629 8.59037 13.1342 8.98359 13.327 9.36197C13.6146 9.92646 14.0735 10.3854 14.638 10.673C15.0164 10.8658 15.4096 10.9371 15.805 10.9694C16.1795 11 16.6343 11 17.1615 11H17.1615H17.2H17.8H17.8385H17.8386C18.3657 11 18.8205 11 19.195 10.9694C19.5904 10.9371 19.9836 10.8658 20.362 10.673C20.9265 10.3854 21.3854 9.92646 21.673 9.36197C21.8658 8.98359 21.9371 8.59037 21.9694 8.19503C22 7.82049 22 7.36578 22 6.83869V6.83867V6.83864V6.83852V6.8V6.2V6.16148V6.16136V6.16134V6.16131C22 5.63422 22 5.17951 21.9694 4.80497C21.9371 4.40963 21.8658 4.01641 21.673 3.63803C21.3854 3.07354 20.9265 2.6146 20.362 2.32698C19.9836 2.13419 19.5904 2.06287 19.195 2.03057C18.8205 1.99997 18.3657 1.99998 17.8386 2H17.8385H17.8H17.2ZM15.546 4.109C15.5955 4.0838 15.6962 4.04612 15.9678 4.02393C16.2512 4.00078 16.6234 4 17.2 4H17.8C18.3766 4 18.7488 4.00078 19.0322 4.02393C19.3038 4.04612 19.4045 4.0838 19.454 4.109C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C19.9162 4.59546 19.9539 4.69617 19.9761 4.96784C19.9992 5.25117 20 5.62345 20 6.2V6.8C20 7.37655 19.9992 7.74883 19.9761 8.03217C19.9539 8.30383 19.9162 8.40455 19.891 8.45399C19.7951 8.64215 19.6422 8.79514 19.454 8.89101C19.4045 8.9162 19.3038 8.95388 19.0322 8.97607C18.7488 8.99922 18.3766 9 17.8 9H17.2C16.6234 9 16.2512 8.99922 15.9678 8.97607C15.6962 8.95388 15.5955 8.9162 15.546 8.89101C15.3578 8.79514 15.2049 8.64215 15.109 8.45399C15.0838 8.40455 15.0461 8.30383 15.0239 8.03217C15.0008 7.74883 15 7.37656 15 6.8V6.2C15 5.62345 15.0008 5.25117 15.0239 4.96784C15.0461 4.69617 15.0838 4.59546 15.109 4.54601C15.2049 4.35785 15.3578 4.20487 15.546 4.109ZM6.16146 13L6.2 13H6.8L6.83855 13C7.36569 13 7.82046 13 8.19503 13.0306C8.59037 13.0629 8.98359 13.1342 9.36197 13.327C9.92646 13.6146 10.3854 14.0735 10.673 14.638C10.8658 15.0164 10.9371 15.4096 10.9694 15.805C11 16.1795 11 16.6343 11 17.1615V17.1615V17.2V17.8V17.8385V17.8386C11 18.3657 11 18.8205 10.9694 19.195C10.9371 19.5904 10.8658 19.9836 10.673 20.362C10.3854 20.9265 9.92646 21.3854 9.36197 21.673C8.98359 21.8658 8.59037 21.9371 8.19503 21.9694C7.82049 22 7.36577 22 6.83867 22H6.83865H6.83852H6.8H6.2H6.16148H6.16136H6.16134C5.63424 22 5.17952 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8386V17.8385V17.8V17.2V17.1615V17.1614C1.99998 16.6343 1.99997 16.1795 2.03057 15.805C2.06287 15.4096 2.13419 15.0164 2.32698 14.638C2.6146 14.0735 3.07354 13.6146 3.63803 13.327C4.01641 13.1342 4.40963 13.0629 4.80497 13.0306C5.17955 13 5.63431 13 6.16146 13ZM4.96784 15.0239C4.69617 15.0461 4.59546 15.0838 4.54601 15.109C4.35785 15.2049 4.20487 15.3578 4.109 15.546C4.0838 15.5955 4.04612 15.6962 4.02393 15.9678C4.00078 16.2512 4 16.6234 4 17.2V17.8C4 18.3766 4.00078 18.7488 4.02393 19.0322C4.04612 19.3038 4.0838 19.4045 4.109 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.59546 19.9162 4.69617 19.9539 4.96784 19.9761C5.25117 19.9992 5.62345 20 6.2 20H6.8C7.37656 20 7.74883 19.9992 8.03217 19.9761C8.30383 19.9539 8.40455 19.9162 8.45399 19.891C8.64215 19.7951 8.79514 19.6422 8.89101 19.454C8.9162 19.4045 8.95388 19.3038 8.97607 19.0322C8.99922 18.7488 9 18.3766 9 17.8V17.2C9 16.6234 8.99922 16.2512 8.97607 15.9678C8.95388 15.6962 8.9162 15.5955 8.89101 15.546C8.79514 15.3578 8.64215 15.2049 8.45399 15.109C8.40455 15.0838 8.30383 15.0461 8.03217 15.0239C7.74883 15.0008 7.37655 15 6.8 15H6.2C5.62345 15 5.25117 15.0008 4.96784 15.0239ZM17.2 13L17.1615 13C16.6343 13 16.1795 13 15.805 13.0306C15.4096 13.0629 15.0164 13.1342 14.638 13.327C14.0735 13.6146 13.6146 14.0735 13.327 14.638C13.1342 15.0164 13.0629 15.4096 13.0306 15.805C13 16.1795 13 16.6343 13 17.1615L13 17.2V17.8L13 17.8385C13 18.3657 13 18.8205 13.0306 19.195C13.0629 19.5904 13.1342 19.9836 13.327 20.362C13.6146 20.9265 14.0735 21.3854 14.638 21.673C15.0164 21.8658 15.4096 21.9371 15.805 21.9694C16.1795 22 16.6343 22 17.1614 22H17.1615H17.2H17.8H17.8385H17.8386C18.3658 22 18.8205 22 19.195 21.9694C19.5904 21.9371 19.9836 21.8658 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C21.8658 19.9836 21.9371 19.5904 21.9694 19.195C22 18.8205 22 18.3658 22 17.8386V17.8385V17.8V17.2V17.1615V17.1614C22 16.6343 22 16.1795 21.9694 15.805C21.9371 15.4096 21.8658 15.0164 21.673 14.638C21.3854 14.0735 20.9265 13.6146 20.362 13.327C19.9836 13.1342 19.5904 13.0629 19.195 13.0306C18.8205 13 18.3657 13 17.8385 13L17.8 13H17.2ZM15.546 15.109C15.5955 15.0838 15.6962 15.0461 15.9678 15.0239C16.2512 15.0008 16.6234 15 17.2 15H17.8C18.3766 15 18.7488 15.0008 19.0322 15.0239C19.3038 15.0461 19.4045 15.0838 19.454 15.109C19.6422 15.2049 19.7951 15.3578 19.891 15.546C19.9162 15.5955 19.9539 15.6962 19.9761 15.9678C19.9992 16.2512 20 16.6234 20 17.2V17.8C20 18.3766 19.9992 18.7488 19.9761 19.0322C19.9539 19.3038 19.9162 19.4045 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.4045 19.9162 19.3038 19.9539 19.0322 19.9761C18.7488 19.9992 18.3766 20 17.8 20H17.2C16.6234 20 16.2512 19.9992 15.9678 19.9761C15.6962 19.9539 15.5955 19.9162 15.546 19.891C15.3578 19.7951 15.2049 19.6422 15.109 19.454C15.0838 19.4045 15.0461 19.3038 15.0239 19.0322C15.0008 18.7488 15 18.3766 15 17.8V17.2C15 16.6234 15.0008 16.2512 15.0239 15.9678C15.0461 15.6962 15.0838 15.5955 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109Z"
                    fill="#FaFaFa"></path>
                </g>
              </svg>
              <h3 class="text-xl font-semibold">Recent Projects</h3>
            </div>
            <a href="" class="text-xs flex">View All
              <svg width="16px" height="16px" class="hidden" id="arrowIconDark" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </g>
              </svg>
              <svg width="16px" height="16px" class="hidden" id="arrowIconLight" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#FaFaFa" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </g>
              </svg>
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2.5" id="projects">
            
          </div>
        </div>

      </div>
  `;
  populateData();
}
