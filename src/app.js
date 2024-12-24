const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

const locationIconDark = document.getElementById('locationIconDark');
const locationIconLight = document.getElementById('locationIconLight');

const downloadIconDark = document.getElementById('downloadIconDark');
const downloadIconLight = document.getElementById('downloadIconLight');

const mailIconDark = document.getElementById('mailIconDark');
const mailIconLight = document.getElementById('mailIconLight');

const aboutIconDark = document.getElementById('aboutIconDark');
const aboutIconLight = document.getElementById('aboutIconLight');

const techIconDark = document.getElementById('techIconDark');
const techIconLight = document.getElementById('techIconLight');

const connectIconDark = document.getElementById('connectIconDark');
const connectIconLight = document.getElementById('connectIconLight');

const appsIconDark = document.getElementById('appsIconDark');
const appsIconLight = document.getElementById('appsIconLight');

const arrowIconDark = document.getElementById('arrowIconDark');
const arrowIconLight = document.getElementById('arrowIconLight');

const githubIconDark = document.getElementById('githubIconDark');
const githubIconLight = document.getElementById('githubIconLight');

const linkedinIconDark = document.getElementById('linkedinIconDark');
const linkedinIconLight = document.getElementById('linkedinIconLight');

const instagramIconDark = document.getElementById('instagramIconDark');
const instagramIconLight = document.getElementById('instagramIconLight');


if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden');
  locationIconLight.classList.remove('hidden');
  aboutIconLight.classList.remove('hidden');
  techIconLight.classList.remove('hidden');
  connectIconLight.classList.remove('hidden');
  appsIconLight.classList.remove('hidden');
  arrowIconLight.classList.remove('hidden');
  githubIconLight.classList.remove('hidden');
  linkedinIconLight.classList.remove('hidden');
  instagramIconLight.classList.remove('hidden');
  downloadIconDark.classList.remove('hidden');
  mailIconLight.classList.remove('hidden');
  
} else {
  themeToggleDarkIcon.classList.remove('hidden');
  locationIconDark.classList.remove('hidden');
  aboutIconDark.classList.remove('hidden');
  techIconDark.classList.remove('hidden');
  connectIconDark.classList.remove('hidden');
  appsIconDark.classList.remove('hidden');
  arrowIconDark.classList.remove('hidden');
  githubIconDark.classList.remove('hidden');
  linkedinIconDark.classList.remove('hidden');
  instagramIconDark.classList.remove('hidden');
  downloadIconLight.classList.remove('hidden');
  mailIconDark.classList.remove('hidden');

}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');
  
  locationIconDark.classList.toggle('hidden');
  locationIconLight.classList.toggle('hidden');
  
  aboutIconDark.classList.toggle('hidden');
  aboutIconLight.classList.toggle('hidden');
  
  techIconDark.classList.toggle('hidden');
  techIconLight.classList.toggle('hidden');

  connectIconDark.classList.toggle('hidden');
  connectIconLight.classList.toggle('hidden');
  
  appsIconDark.classList.toggle('hidden');
  appsIconLight.classList.toggle('hidden');
  
  arrowIconDark.classList.toggle('hidden');
  arrowIconLight.classList.toggle('hidden');

  githubIconDark.classList.toggle('hidden');
  githubIconLight.classList.toggle('hidden');
  
  linkedinIconDark.classList.toggle('hidden');
  linkedinIconLight.classList.toggle('hidden');
  
  instagramIconDark.classList.toggle('hidden');
  instagramIconLight.classList.toggle('hidden');
  
  downloadIconDark.classList.toggle('hidden');
  downloadIconLight.classList.toggle('hidden');
  
  mailIconDark.classList.toggle('hidden');
  mailIconLight.classList.toggle('hidden');
  
  
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});