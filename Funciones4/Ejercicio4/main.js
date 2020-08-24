document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM content loaded and fully parsed.");

    document.boxModelForm.onsubmit = processForm;

    function processForm() {
        return false;
    }

    document.getElementById('submitForm').onclick = function () {
        var width = document.boxModelForm.Width.value;
        var totalWidth = document.getElementById("totalWidth");

        var msg = width;
        totalWidth.insertAdjacentHTML('afterend', msg);

    };

    document.getElementById('resetForm').onclick = function () {
        var totalWidth = document.getElementById("totalWidth");
    }
});