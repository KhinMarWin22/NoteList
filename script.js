// selector
const app = document.querySelector("#app");
const Newform = document.querySelector("#newForm");
const Note = document.querySelector("#note");
const CountList = document.querySelector("#countlist");
const CountDone = document.querySelector("#countdone");
const AllDone = document.querySelector("#alldone");
const lists = document.querySelector(".lists");


let listindex = 0;

// step 6 is make countlist function
const Countlist = ()=>{
    let total = document.querySelectorAll(".list").length;
    CountList.innerText = total;
    return total;
}

// step 7 is make DonelIst when check
const Countdone = ()=>{
    let total = document.querySelectorAll(".form-check-input:checked").length;
   CountDone.innerText = total;
   return total;
}




// step 1 is create function for note list
const CreateList = (text)=>{

const list = document.createElement("div");
const id = "list" +listindex++;
list.classList.add("list");
list.innerHTML =`
<div class="d-flex justify-content-between my-3 border border-2 border-primary p-2 animate__animated animate__zoomInLeft">
<div class="form-check mt-1">
    <input type="checkbox" id="${id}"  class="form-check-input boder border-dark">
    <label for="${id}" class="form-check-label">${text}</label>

</div>
<div class="control">
    <button class="btn btn-primary btn-sm edit-btn">
        <i class="bi bi-pencil"></i>
    </button>
    <button class="btn btn-primary btn-sm del-btn">
        <i class="bi bi-trash"></i>
    </button>
</div>
</div>`;
// step 3 is del btn
const Delbtn = list.querySelector(".del-btn");
Delbtn.addEventListener("click",()=>{

    list.children[0].classList.replace("animate__zoomInLeft", "animate__zoomOutLeft")
  if(confirm("Are You Sure To Delete Your Note List")){
    list.children[0].addEventListener("animationend",()=>{
        list.remove();
        Countlist();
        Countdone();
 })
  }

   
})

// step 4 is to make edit btn
const Editbtn = list.querySelector(".edit-btn");
const label = list.querySelector(".form-check-label");

Editbtn.addEventListener("click",()=>{
    const Input = document.createElement("input");
    Input.classList.add("form-control");
    Input.value = label.innerText;
    label.innerText =null;
    label.append(Input);
    Input.focus();
    Input.addEventListener("blur",()=>{
        label.innerText =Input.value;
    })
})
// step 5 is when I click checkbox , label also line through 
const check = list.querySelector(".form-check-input");
check.addEventListener("click",()=>{
    Countdone();
    label.classList.toggle("text-decoration-line-through");
    list.querySelector(".edit-btn").toggleAttribute("disabled");
})




return list;

};







//2 then appen to this form submit
Newform.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(e.target);
lists.append(CreateList(Note.value));
Note.value = null;
Countlist();
Countdone();

})
AllDone.addEventListener("click",()=>{
const AllList = document.querySelectorAll(".list");
AllList.forEach(list =>{
    list.querySelector(".form-check-input").click();

})

})
