const contentGrowth = document.getElementById("contentDetail");
const container = document.getElementById("allContainerBackground");

const contentGrowthHeight = contentGrowth.clientHeight;


if (window.innerWidth < 768) {
    console.log(contentGrowthHeight);
    console.log(container.clientHeight);
    container.setAttribute('style', `height: calc(${contentGrowthHeight}px + 15vh) !important`);

}