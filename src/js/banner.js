const bannerContainer = document.querySelector(".banner-vid");

window.addEventListener('load', initVideo);

function initVideo() {
  const video = `
    <video class="banner-video" muted="" preload="metadata">
      <source src="./public/video/banner.webm" type="video/webm">
      <source src="./public/video/banner.mp4" type="video/mp4">
    </video>
  `;
  bannerContainer.innerHTML = video;

  const bgVideo = document.querySelector(".banner-video");
  const bannerBg = document.querySelector(".banner-bg");
  const replayIcon = document.querySelector(".banner-controls");

  bgVideo.addEventListener("canplaythrough", function() {
    this.play();
  })
  bgVideo.addEventListener("play", function() {
    bgVideo.style.opacity = 1;
    bannerBg.style.opacity = 0;
    replayIcon.style.opacity = 0;
  })
  bgVideo.addEventListener("pause", function() {
    bgVideo.style.opacity = 0;
    bannerBg.style.opacity = 1;
    replayIcon.style.opacity = 1;
  })
  replayIcon.addEventListener("click", function() {
    bgVideo.play();
  })
}