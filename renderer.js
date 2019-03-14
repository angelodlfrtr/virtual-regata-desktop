// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const loaderElem = document.createElement('div');
loaderElem.className = 'loader';
loaderElem.innerText = '0 %';

document.body.appendChild(loaderElem);

function onProgress(gameInstance, progress) {
  //if (!gameInstance.Module)
    //return;

  //if (!gameInstance.logo) {
    //gameInstance.logo = document.createElement("div");
    //gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
    //gameInstance.container.appendChild(gameInstance.logo);
  //}

  //if (!gameInstance.progress) {
    //gameInstance.progress = document.createElement("div");
    //gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
    //gameInstance.progress.empty = document.createElement("div");
    //gameInstance.progress.empty.className = "empty";
    //gameInstance.progress.appendChild(gameInstance.progress.empty);
    //gameInstance.progress.full = document.createElement("div");
    //gameInstance.progress.full.className = "full";
    //gameInstance.progress.appendChild(gameInstance.progress.full);
    //gameInstance.container.appendChild(gameInstance.progress);
  //}

  //gameInstance.progress.full.style.width = (100 * progress) + "%";
  //gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";

  loaderElem.innerText = Math.round(progress * 100) + ' %';

  if (progress == 1) {
    loaderElem.style.display = 'none';
  }
}

const unityBundleUrl = 'https://www.virtualregatta.com//offshore/style.php?versionRelease=20181130-133&versionAssetBundles=essai';
const gameInstance = UnityLoader.instantiate("container", unityBundleUrl, { onProgress });

const resizeCanvas = () => {
  const canvas = document.querySelector('canvas');

  if (canvas) {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    canvas.height = height;
    canvas.width = width;
  }
};

window.addEventListener('resize', resizeCanvas);
