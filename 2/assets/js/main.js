let targetElem = null;

const setDragAndDrop = (elem) => {
    elem.addEventListener("dragstart", () => {
        setTimeout(() => {
            elem.classList.add("hide");
            targetElem = elem;
        }, 0);
    });
    elem.addEventListener("dragend", () => {
        elem.classList.remove("hide");
    });
};

const setListHover = (elem) => {
    elem.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    elem.addEventListener("dragenter", () => {
        elem.parentNode.classList.add("activate");
    });
    elem.addEventListener("dragleave", () => {
        elem.parentNode.classList.remove("activate");
    });
    elem.addEventListener("drop", () => {
        elem.appendChild(targetElem);
        targetElem = null;
        elem.parentNode.classList.remove("activate");
    });
};

const addAudio = () => {
    const elem = document.createElement("audio");
    elem.classList.add("audio");
    elem.setAttribute("draggable", true);

    setDragAndDrop(elem);

    document.getElementById("elemsContainer").appendChild(elem);
};

const addVideo = () => {
    const elem = document.createElement("video");
    elem.classList.add("video");
    elem.setAttribute("draggable", true);

    setDragAndDrop(elem);

    document.getElementById("elemsContainer").appendChild(elem);
};

const addList = () => {
    const elem = document.createElement("div");
    elem.classList.add("list");
    const listContainer = document.createElement("div");
    listContainer.classList.add("listContainer");
    const listTitle = document.createElement("input");
    listTitle.value = "Без названия";

    setListHover(listContainer);

    elem.appendChild(listTitle);
    elem.appendChild(listContainer);
    document.getElementById("listsContainer").appendChild(elem);
};

document.getElementById("newElem").onchange = function () {
    if (this.files && this.files[0]) {
        const fileType = this.files[0].type.split("/")[0];
        switch (fileType) {
            case "video":
                addVideo();
                break;
            case "audio":
                addAudio();
                break;
        }
    }
};
