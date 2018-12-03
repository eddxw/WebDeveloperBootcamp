var ele = document.getElementById("highlight");
ele.style.color = "blue";

var lists = document.getElementsByClassName("bolded");
for (ele of lists) {
    ele.style.color = "red";
    ele.style.fontWeight = "700";
}
