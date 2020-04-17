const contentGrowth = document.getElementById("contentDetail");
const container = document.getElementById("allContainerBackground");

const contentGrowthHeight = contentGrowth.offsetHeight;


if (window.innerWidth < 768) {
    console.log(contentGrowthHeight);

    container.setAttribute('style', `height: calc(${contentGrowthHeight}px + 15vh) !important`);
    console.log(container.clientHeight);
}