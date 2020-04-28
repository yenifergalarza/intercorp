const dataPrueba = [{
    title: "job2",
    date: "21/04/2020"
}, {
    title: "job3",
    date: "30/02/2020"
}, {
    title: "job1",
    date: "22/02/2020"
}, {
    title: "job1",
    date: "22/02/2018"
}]

function sortArrsToObjects(a, b) {
    a = a.date;
    b = b.date;

    a = a.replace(/\//g, '-');
    a = `${a.charAt(6)}${a.charAt(7)}${a.charAt(8)}${a.charAt(9)}${a.charAt(2)}${a.charAt(3)}${a.charAt(4)}${a.charAt(5)}${a.charAt(0)}${a.charAt(1)}`;
    a = new Date(a);
    b = b.replace(/\//g, '-');
    b = `${b.charAt(6)}${b.charAt(7)}${b.charAt(8)}${b.charAt(9)}${b.charAt(2)}${b.charAt(3)}${b.charAt(4)}${b.charAt(5)}${b.charAt(0)}${b.charAt(1)}`;
    b = new Date(b);

    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    }
}

const table = document.getElementById("tableJobs")

function downTable() {
    table.innerHTML = ``;
    // funcionqueimprime(dataPrueba.sort(sortArrsToObjects).reverse());
    console.log(dataPrueba.sort(sortArrsToObjects).reverse());

}


function upTable() {
    table.innerHTML = ``;
    //   funcionqueimprime(dataPrueba.sort(sortArrsToObjects));
    console.log(dataPrueba.sort(sortArrsToObjects));

}

document.getElementById('closer').addEventListener('click', downTable);
document.getElementById('farthest').addEventListener('click', upTable);