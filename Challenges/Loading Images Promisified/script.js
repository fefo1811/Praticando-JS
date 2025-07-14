/**
 * Creates a Promise to wait the execution
 * @param {number} seconds 
 * @returns Returns a timer
 */
const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000)
    });
};
// Image container
const img_container = document.querySelector(".images");
/**
 * This functions receives an image path and render it in the HTML
 * @param {string} imgPath 
 * @returns HTML Element
 */
const createImage = (imgPath) => {
    return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.src = imgPath;
        // If the promises is a success
        img.addEventListener("load", () => {
            img_container.append(img);
            resolve(img);
        });
        // If happens some error, the promise will be rejected
        img.addEventListener("error", () => {
            reject(new Error("Image not found"));
        });
    });
};

let current_img;

createImage("./img-1.webp").then((res) => {
    console.log("Image 1 loaded");
    current_img = res
    return wait(2);
}).then(() => {
    current_img.style.display = "none";
    return createImage("./img-2.webp")
})
  .catch(e => console.error(e));