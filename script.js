// function startMergeSort() {
//     const input = document.getElementById("arrayInput").value;
//     const array = input.split(',').map(Number);

//     if (array.some(isNaN)) {
//         alert("Please enter valid numbers separated by commas.");
//         return;
//     }

//     document.getElementById("output").innerHTML = "";
//     visualizeMergeSort(array);
// }

// async function visualizeMergeSort(array) {
//     await mergeSort(array, 0, array.length - 1);
//     displayArray(array, true);
// }

// async function mergeSort(array, left, right) {
//     if (left < right) {
//         const mid = Math.floor((left + right) / 2);
//         await mergeSort(array, left, mid);
//         await mergeSort(array, mid + 1, right);
//         await merge(array, left, mid, right);
//     }
// }

// async function merge(array, left, mid, right) {
//     let leftArray = array.slice(left, mid + 1);
//     let rightArray = array.slice(mid + 1, right + 1);

//     let i = 0, j = 0, k = left;

//     while (i < leftArray.length && j < rightArray.length) {
//         if (leftArray[i] <= rightArray[j]) {
//             array[k++] = leftArray[i++];
//         } else {
//             array[k++] = rightArray[j++];
//         }
//         displayArray(array);
//         await sleep(500);
//     }

//     while (i < leftArray.length) {
//         array[k++] = leftArray[i++];
//         displayArray(array);
//         await sleep(500);
//     }

//     while (j < rightArray.length) {
//         array[k++] = rightArray[j++];
//         displayArray(array);
//         await sleep(500);
//     }
// }

// function displayArray(array, final = false) {
//     const outputDiv = document.getElementById("output");
//     outputDiv.innerHTML = "";

//     array.forEach((value) => {
//         const bar = document.createElement("div");
//         bar.className = "bar";
//         bar.style.height = value * 5 + "px";
//         bar.style.width = "20px";
//         bar.style.backgroundColor = final ? "#28a745" : "#007bff";
//         outputDiv.appendChild(bar);
//     });
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


// function startMergeSort() {
//     const input = document.getElementById("arrayInput").value;
//     const array = input.split(',').map(Number);

//     if (array.some(isNaN)) {
//         alert("Please enter valid numbers separated by commas.");
//         return;
//     }

//     document.getElementById("output").innerHTML = "";
//     visualizeMergeSort(array);
// }

// async function visualizeMergeSort(array) {
//     await mergeSort(array, 0, array.length - 1);
//     displayArray(array, true);
// }

// async function mergeSort(array, left, right) {
//     if (left < right) {
//         const mid = Math.floor((left + right) / 2);
//         await mergeSort(array, left, mid);
//         await mergeSort(array, mid + 1, right);
//         await merge(array, left, mid, right);
//     }
// }

// async function merge(array, left, mid, right) {
//     let leftArray = array.slice(left, mid + 1);
//     let rightArray = array.slice(mid + 1, right + 1);

//     let i = 0, j = 0, k = left;

//     while (i < leftArray.length && j < rightArray.length) {
//         if (leftArray[i] <= rightArray[j]) {
//             array[k++] = leftArray[i++];
//         } else {
//             array[k++] = rightArray[j++];
//         }
//         displayArray(array);
//         await sleep(500);
//     }

//     while (i < leftArray.length) {
//         array[k++] = leftArray[i++];
//         displayArray(array);
//         await sleep(500);
//     }

//     while (j < rightArray.length) {
//         array[k++] = rightArray[j++];
//         displayArray(array);
//         await sleep(500);
//     }
// }

// function displayArray(array, final = false) {
//     const outputDiv = document.getElementById("output");
//     outputDiv.innerHTML = "";

//     array.forEach((value) => {
//         const bar = document.createElement("div");
//         bar.className = "bar";
//         bar.style.height = value * 5 + "px";
//         bar.style.width = "20px";
//         bar.style.backgroundColor = final ? "#28a745" : "#007bff";
//         bar.style.position = "relative";

//         // Add text to the bar at the end of visualization
//         if (final) {
//             const label = document.createElement("span");
//             label.style.position = "absolute";
//             label.style.bottom = "-20px";
//             label.style.width = "100%";
//             label.style.textAlign = "center";
//             label.style.color = "#000";
//             label.style.fontSize = "14px";
//             label.textContent = value;
//             bar.appendChild(label);
//         }

//         outputDiv.appendChild(bar);
//     });
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }




// function startMergeSort() {
//     const input = document.getElementById("arrayInput").value;
//     const array = input.split(',').map(Number);

//     if (array.some(isNaN)) {
//         alert("Please enter valid numbers separated by commas.");
//         return;
//     }

//     document.getElementById("output").innerHTML = "";
//     visualizeMergeSort(array);
// }

// async function visualizeMergeSort(array) {
//     await mergeSort(array, 0, array.length - 1);
//     displayArray(array, true);
// }

// async function mergeSort(array, left, right) {
//     if (left < right) {
//         const mid = Math.floor((left + right) / 2);
//         await mergeSort(array, left, mid);
//         await mergeSort(array, mid + 1, right);
//         await merge(array, left, mid, right);
//     }
// }

// async function merge(array, left, mid, right) {
//     let leftArray = array.slice(left, mid + 1);
//     let rightArray = array.slice(mid + 1, right + 1);

//     let i = 0, j = 0, k = left;

//     while (i < leftArray.length && j < rightArray.length) {
//         playSound();
//         if (leftArray[i] <= rightArray[j]) {
//             array[k++] = leftArray[i++];
//         } else {
//             array[k++] = rightArray[j++];
//         }
//         displayArray(array);
//         await sleep(500);
//     }

//     while (i < leftArray.length) {
//         playSound();
//         array[k++] = leftArray[i++];
//         displayArray(array);
//         await sleep(500);
//     }

//     while (j < rightArray.length) {
//         playSound();
//         array[k++] = rightArray[j++];
//         displayArray(array);
//         await sleep(500);
//     }
// }

// function displayArray(array, final = false) {
//     const outputDiv = document.getElementById("output");
//     outputDiv.innerHTML = "";

//     array.forEach((value) => {
//         const bar = document.createElement("div");
//         bar.className = "bar";
//         bar.style.height = value * 5 + "px";
//         bar.style.width = "20px";
//         bar.style.backgroundColor = final ? "#28a745" : "#007bff";
//         bar.style.position = "relative";

//         // Add text to the bar at the end of visualization
//         if (final) {
//             const label = document.createElement("span");
//             label.style.position = "absolute";
//             label.style.bottom = "-20px";
//             label.style.width = "100%";
//             label.style.textAlign = "center";
//             label.style.color = "#000";
//             label.style.fontSize = "14px";
//             label.textContent = value;
//             bar.appendChild(label);
//         }

//         outputDiv.appendChild(bar);
//     });
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Function to play sound during sorting
// function playSound() {
//     const audio = new Audio('https://www.soundjay.com/button/beep-07.wav'); // Replace with any sound URL
//     audio.play();
// }




function startMergeSort() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(',').map(Number);

    if (array.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    document.getElementById("output").innerHTML = "";
    visualizeMergeSort(array);
}

async function visualizeMergeSort(array) {
    await mergeSort(array, 0, array.length - 1);
    displayArray(array, true);
}

async function mergeSort(array, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSort(array, left, mid);
        await mergeSort(array, mid + 1, right);
        await merge(array, left, mid, right);
    }
}

async function merge(array, left, mid, right) {
    let leftArray = array.slice(left, mid + 1);
    let rightArray = array.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArray.length && j < rightArray.length) {
        playSound(); // Play sound on each comparison
        if (leftArray[i] <= rightArray[j]) {
            array[k++] = leftArray[i++];
        } else {
            array[k++] = rightArray[j++];
        }
        displayArray(array);
        await sleep(500);
    }

    while (i < leftArray.length) {
        playSound();
        array[k++] = leftArray[i++];
        displayArray(array);
        await sleep(500);
    }

    while (j < rightArray.length) {
        playSound();
        array[k++] = rightArray[j++];
        displayArray(array);
        await sleep(500);
    }
}

function displayArray(array, final = false) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    array.forEach((value) => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = value * 5 + "px";
        bar.style.width = "20px";
        bar.style.backgroundColor = final ? "#28a745" : "#007bff";
        bar.style.position = "relative";

        // Add text to the bar at the end of visualization
        if (final) {
            const label = document.createElement("span");
            label.style.position = "absolute";
            label.style.bottom = "-20px";
            label.style.width = "100%";
            label.style.textAlign = "center";
            label.style.color = "#000";
            label.style.fontSize = "14px";
            label.textContent = value;
            bar.appendChild(label);
        }

        outputDiv.appendChild(bar);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function playSound() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine'; // Types can be 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // Frequency in Hz
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    // Stop after a short duration
    setTimeout(() => {
        oscillator.stop();
    }, 100); // 100 milliseconds for a short beep
}
