const enrollCourseButton = document.getElementById("enroll-course-button");
const enrollmentModal = document.getElementById("enrollment-modal");
const enrollmentKeyInput = document.getElementById("enrollment-key");
const enrollButton = document.getElementById("enroll-button");
const cancelButton = document.getElementById("cancel-button");
const inputEnrollKey = document.getElementById("enrollment-key");
const enrolledCourseBtn = document.getElementById("enrolled-course-button");
// const enrollmentKey = enrollmentKeyInput.value;
enrollCourseButton.addEventListener("click", () => {
  enrollmentModal.classList.add("show");
  enrollmentModal.setAttribute("aria-modal", "true");
  enrollmentModal.setAttribute("style", "display: block");
  enrollmentKeyInput.focus();
});

enrollButton.addEventListener("click", () => {
  enrollmentModal.classList.remove("show");
  enrollmentModal.setAttribute("aria-modal", "false");
  enrollmentModal.setAttribute("style", "display: none");
});

cancelButton.addEventListener("click", () => {
  enrollmentModal.classList.remove("show");
  enrollmentModal.setAttribute("aria-modal", "false");
  enrollmentModal.setAttribute("style", "display: none");
});

enrollButton.addEventListener("click", () => {
    const inputKey = enrollmentKeyInput.value;
    console.log(inputKey);
    if (enrollmentKey(inputKey)) {
        window.alert("Enroll success");
        enrollmentKeyInput.value =""
        enrolledCourseBtn.style.display = "block ";
    }else if(enrollmentKey.value =="") {
        windopw.alert("Please enter your enrollment key")
    }else{
        window.alert("Enroll failed");
        enrollmentKeyInput.value =""
    }
    }
);

function enrollmentKey(ekey){
    let validKey =["tuan123","tuan","nghiangu"];
    return validKey.includes(ekey);
}
    
// console.log(enrollmentKey("nghiangu"));