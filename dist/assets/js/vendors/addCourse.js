// import initializeQuill from "./editor.js";

const addSectionModal = document.getElementById("addSectionModal");
const addSectionButton = document.getElementById("addSectionButton");
const lectureContainer1 = document.getElementById("lectureContainer");
const sectionContainer = document.getElementById("sectionContainer")
const inputSectionName = document.getElementById("inputSectionName");

let term = 0;

addSectionButton.addEventListener("click", function (event) {
  event.preventDefault();
  term++

  const modalId = 'addLectureModal-' + term;
  const inputLectureNameId = 'inputLectureName-' + term;
  const secTionId = "section-" + term;
  const courseId = "course-" + term;
  const courseListId = "courseList-" + term;
  const sectionName = inputSectionName.value;
  if (sectionName.trim() !== "") {
    const sectionItem = document.createElement("div");
    sectionItem.innerHTML = `
        <div id="${secTionId}" class="bg-light rounded p-2 mb-4">
        <div class="d-flex justify-content-between align-items-center">
        <h4>${sectionName}</h4>
        <a id="sectionDeleteBtn" href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top"
                            title="Delete">
                            <i class="fe fe-trash-2 fs-6"></i>
                        </a>
        </div>
        
        <!-- List group -->
        <div class="list-group list-group-flush border-top-0" id="${courseListId}">
            <div id="${courseId}">
                
            </div>
        </div>
        <a href="#"  class="btn btn-outline-primary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#${modalId}">Add Lecture +</a>
    </div>

    <form class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="addLectureModalLabel" aria-hidden="true" name="lec1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="addLectureModalLabel">Add New Lecture</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input id="${inputLectureNameId}" class="input_model form-control mb-3" type="text" placeholder="Add new lecture " />
                        <button id="addNewLecture_btn" class="addNewLecture_btn btn btn-primary" type="submit">Add New Lecture</button>
                        <button class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" type="Button">Close</button>
                    </div>
                </div>
            </div>
        </form>
              `;
    sectionContainer.appendChild(sectionItem)
    inputSectionName.value = "";

    const addLectureModal = document.getElementById(modalId);

    addLectureModal.addEventListener('submit', function (event) {
      event.preventDefault();
      term++;
      const inputLectureName = event.target.querySelector(".input_model");;
      const lectureName = inputLectureName.value;
      const lectureId = "lecture-" + term;
      const collapselistId = "collapselist-" + term;
      if (lectureName.trim() !== "") {
        const lectureItem = document.createElement("div");
        lectureItem.innerHTML = `
            <div class="list-group-item rounded px-3 text-nowrap mb-1" id="${lectureId}">
                <div class="d-flex align-items-center justify-content-between">
                    <h5 class="mb-0 text-truncate">
                        <a href="#" class="text-inherit">
                            <i class="fe fe-menu me-1 align-middle"></i>
                            <span id="lectureName" class="align-middle">${lectureName}</span>
                        </a>
                    </h5>
                    <div>
                        <a id="editbtn" href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top"
                            title="Edit">
                            <i class="fe fe-edit fs-6"></i>
                        </a>
                        <a id="deleteBtn" href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top"
                            title="Delete">
                            <i class="fe fe-trash-2 fs-6"></i>
                        </a>
                        <a href="#" class="text-inherit" data-bs-toggle="collapse"
                            data-bs-target="#${collapselistId}" aria-expanded="false"
                            aria-controls="${collapselistId}">
                            <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                        </a>
                    </div>
                </div>
                <div id="${collapselistId}" class="collapse" aria-labelledby="${lectureId}"
                    data-bs-parent="#${courseListId}">
                    <div class="p-md-4 p-2">
                        <input type="file" class="btn btn-secondary btn-sm" id="uploadFile" accept="video/*" />
                        
                        <div class="mb-3">
                          <label class="form-label">Lecture Description</label>
                            <div id="editor">
                              <p contenteditable="true" id="Course_Description" place></p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
                `;
        document.querySelector('#' + courseId).appendChild(lectureItem);
        inputLectureName.value = "";
      }
      document.querySelectorAll('#editbtn').forEach((editButton) => {
        editButton.addEventListener('click', (event) => {
          event.preventDefault();
          const lectureElement = event.target.closest('.list-group-item');
          const lectureNameElement = lectureElement.querySelector('#lectureName');
          const currentLectureName = lectureNameElement.textContent;
          const inputElement = document.createElement('input');

          inputElement.type = 'text';
          inputElement.style = 'border: none; border-bottom: 1px solid #000;outline: none;padding:2px; background-color: #1e293b;color: #fff;font-family:"Inter",sans-serif;'
          inputElement.value = currentLectureName;

          lectureNameElement.innerHTML = '';
          lectureNameElement.appendChild(inputElement);
          inputElement.focus();

          inputElement.addEventListener('blur', updateLectureName);
          inputElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
              updateLectureName(event);
            }
          });

          function updateLectureName(event) {
            event.preventDefault();
            const newLectureName = inputElement.value;
            lectureNameElement.textContent = newLectureName;
            inputElement.removeEventListener('blur', updateLectureName);
            inputElement.removeEventListener('keydown', updateLectureName);
          }
        });
      });

      document.querySelectorAll('#deleteBtn').forEach((deleteButton) => {
        deleteButton.addEventListener('click', (event) => {
          event.preventDefault();
          const lectureElement = event.target.closest('.list-group-item');
          lectureElement.remove();
        });
      });


    });
    document.querySelectorAll('#sectionDeleteBtn').forEach((deleteButton) => {
      deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        const lectureElement = event.target.closest('#' + secTionId);
        lectureElement.remove();
      });
    });
  }
});