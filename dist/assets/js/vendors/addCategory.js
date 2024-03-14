var currentdate = new Date(); 
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var formattedDate = currentdate.getDate() + " " + months[currentdate.getMonth()] + ", " + currentdate.getFullYear();

console.log(formattedDate);
const categoryModal = document.getElementById('newCatgory');
const term = 0;
console.log(categoryModal);
categoryModal.addEventListener('submit', (event) => {
  event.preventDefault();
  // term++;
  // const collapse = "collapse-" + term;
  const categoryList = document.querySelector('#category_listing');
  const categoryTitle = document.querySelector('#title').value;
  const categorySlug = document.querySelector('#basic-url').value;
  if (categoryTitle.trim() !== "") {
    const categoryItem = document.createElement('tr');
    categoryItem.setAttribute("class","category-item");
    categoryItem.innerHTML = `
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="categoryCheck3" />
                            <label class="form-check-label" for="categoryCheck3"></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="text-inherit">
                            <h5 class="mb-0 text-primary-hover">${categoryTitle}</h5>
                          </a>
                        </td>
                        <td id="category_slug">${categorySlug}</td>
                        <!--category_course mean the number of courses that  belong to this Category-->
                        <td id="category_courses">6</td>
                        <td id="date_created">${formattedDate} </td>
                        <td id="date_updated">16 Nov, 2020</td>
                        <td>
                          <span id="category_status" class="badge bg-success">Live</span>
                        </td>
                        <td>
                          <span class="dropdown dropstart">
                            <a class="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown3" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                              <i class="fe fe-more-vertical"></i>
                            </a>
                            <span class="dropdown-menu" aria-labelledby="courseDropdown3">
                              <span class="dropdown-header">Action</span>
                              <a class="dropdown-item" href="#">
                                <i class="fe fe-send dropdown-item-icon"></i>
                                Publish
                              </a>
                              <a class="dropdown-item" href="#">
                                <i class="fe fe-inbox dropdown-item-icon"></i>
                                Moved Draft
                              </a>
                              <a class="dropdown-item" href="#">
                                <i class="fe fe-trash dropdown-item-icon"></i>
                                Delete
                              </a>
                            </span>
                          </span>
                        </td>
        
        `;
    categoryList.appendChild(categoryItem);
    categoryTitle.value = "";
    categorySlug.value = ""; 
  }
})