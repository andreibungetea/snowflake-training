
const popoverTrigger = document.querySelector(".popover-trigger");
const popoverContent = document.querySelector(".popover-content");
const overlay = document.querySelector(".overlay");

const handleOpenPopover = () => {
    popoverContent.style.display = "block";
    overlay.style.display = "block";
};

popoverTrigger.addEventListener("click", handleOpenPopover);

const handleClosePopover = () => {
    popoverContent.style.display = "none";
    overlay.style.display = "none";
}

overlay.addEventListener("click", handleClosePopover);
