let fileReader;

document.onreadystatechange = function() {

    // Fix browser default behaviour to open dropped files
    window.addEventListener("dragover", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    window.addEventListener("drop", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);

    // Example 1 setup
    

    // Example 2 setup
    

    // Example 3 setup
    

    // Example 4 setup
    

}

////////////////////////////////////////////////////////
///////////// Exercise 1 functions /////////////////////
////////////////////////////////////////////////////////
function drag(e) {

}

function drop(e) {

}

function setDropzoneHighlight(dropzones, state) {

}


////////////////////////////////////////////////////////
///////////// Exercise 2 functions /////////////////////
////////////////////////////////////////////////////////
function dragoverImage() {

}

function dragleaveImage() {

}

function dropImage(e) {

}

function fileExplorer() {

}

function fileExplorerUpload() {

}

function uploadImage(file) {

}

function loadImage(e) {

}


////////////////////////////////////////////////////////
///////////// Exercise 3 functions /////////////////////
////////////////////////////////////////////////////////
function getFormFields() {

}

function setFormFields(fname, lname, email) {

}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

function saveSessionData() {

}

function saveLocalData() {

}

function loadSessionData() {

}

function loadLocalData() {

}

function clearStorage() {

}

function setMessage(message, colour, time) {

}


////////////////////////////////////////////////////////
///////////// Exercise 4 functions /////////////////////
////////////////////////////////////////////////////////
function getGeo() {

}