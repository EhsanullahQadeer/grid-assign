export function animator() {
  const parentElement = document.getElementById("gridWrapper");
  const gridItems = parentElement.querySelectorAll(".grid-item");
  gridItems.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const top = rect.top;
    const bottom = rect.bottom;
    const left = rect.left;
    const right = rect.right;
    const firstChild = element.childNodes[0];
    if (firstChild) {
      firstChild.style.width = `${width}px`;
      firstChild.style.height = `${height}px`;
      firstChild.style.top = `${top}px`;
      firstChild.style.bottom = `${bottom}px`;
      firstChild.style.left = `${left}px`;
      firstChild.style.right = `${right}px`;
    }
  });
}
