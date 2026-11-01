
// DSA Visual Study Guide

const topics = document.querySelectorAll(".topic-card");

topics.forEach(topic => {
    topic.addEventListener("click", () => {
        alert("You selected: " + topic.querySelector("h3").textContent);
    });
});

// Create Sorting Visualizer
const visualizer = document.createElement("section");

visualizer.id = "visualizer";

visualizer.innerHTML = `
    <h2>Bubble Sort Visualizer</h2>
    <p>Click Sort to see how elements are arranged.</p>

    <div id="bars"></div>

    <button id="randomBtn">Generate Numbers</button>
    <button id="sortBtn">Start Sorting</button>
`;

document.getElementById("topics").after(visualizer);

let numbers = [40, 20, 70, 10, 90, 50];

function displayBars() {
    const bars = document.getElementById("bars");
    bars.innerHTML = "";

    numbers.forEach(num => {
        const bar = document.createElement("div");
        bar.style.height = num * 2 + "px";
        bar.textContent = num;
        bar.className = "bar";
        bars.appendChild(bar);
    });
}

document.getElementById("randomBtn").onclick = () => {
    numbers = Array.from(
        { length: 6 },
        () => Math.floor(Math.random() * 90) + 10
    );
    displayBars();
};

document.getElementById("sortBtn").onclick = async () => {
    const btn = document.getElementById("sortBtn");
    btn.disabled = true;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {

            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] =
                [numbers[j + 1], numbers[j]];

                displayBars();

                await new Promise(resolve =>
                    setTimeout(resolve, 500)
                );
            }
        }
    }

    btn.disabled = false;
};

displayBars();

// Stack Operations

let stack = [];

function displayStack() {
    const container = document.getElementById("stack-container");
    container.innerHTML = "";

    stack.forEach(item => {
        const element = document.createElement("div");
        element.className = "stack-item";
        element.textContent = item;
        container.appendChild(element);
    });
}

function pushElement() {
    const input = document.getElementById("stackInput");
    const message = document.getElementById("stackMessage");

    if (input.value === "") {
        message.textContent = "Please enter a number!";
        return;
    }

    stack.push(Number(input.value));
    message.textContent = "Element pushed successfully!";
    input.value = "";

    displayStack();
}

function popElement() {
    const message = document.getElementById("stackMessage");

    if (stack.length === 0) {
        message.textContent = "Stack is Empty!";
        return;
    }

    const removed = stack.pop();
    message.textContent = "Removed element: " + removed;

    displayStack();
}

// Queue Operations

let queue = [];

function displayQueue() {
    const container = document.getElementById("queue-container");
    container.innerHTML = "";

    queue.forEach(item => {
        const element = document.createElement("div");
        element.className = "queue-item";
        element.textContent = item;
        container.appendChild(element);
    });
}

function enqueueElement() {
    const input = document.getElementById("queueInput");
    const message = document.getElementById("queueMessage");

    if (input.value === "") {
        message.textContent = "Please enter a number!";
        return;
    }

    queue.push(Number(input.value));
    message.textContent = "Element added successfully!";
    input.value = "";

    displayQueue();
}

function dequeueElement() {
    const message = document.getElementById("queueMessage");

    if (queue.length === 0) {
        message.textContent = "Queue is Empty!";
        return;
    }

    const removed = queue.shift();
    message.textContent = "Removed element: " + removed;

    displayQueue();
}

// Linked List Operations

let linkedList = [];

function displayLinkedList() {
    const container = document.getElementById("linkedlist-container");
    container.innerHTML = "";

    linkedList.forEach((item, index) => {
        const node = document.createElement("div");
        node.className = "list-node";
        node.textContent = item;

        container.appendChild(node);

        if (index < linkedList.length - 1) {
            const arrow = document.createElement("span");
            arrow.className = "list-arrow";
            arrow.textContent = "→";
            container.appendChild(arrow);
        }
    });
}

function addNode() {
    const input = document.getElementById("listInput");
    const message = document.getElementById("listMessage");

    if (input.value === "") {
        message.textContent = "Please enter a number!";
        return;
    }

    linkedList.push(Number(input.value));
    message.textContent = "Node added successfully!";
    input.value = "";

    displayLinkedList();
}

function deleteNode() {
    const message = document.getElementById("listMessage");

    if (linkedList.length === 0) {
        message.textContent = "Linked List is Empty!";
        return;
    }

    const removed = linkedList.shift();
    message.textContent = "Deleted node: " + removed;

    displayLinkedList();
}
// Linear Search
const searchNumbers = [10, 25, 30, 45, 50];

function displaySearchNumbers() {
    const container = document.getElementById("search-container");
    container.innerHTML = "";

    searchNumbers.forEach(num => {
        const item = document.createElement("div");
        item.className = "search-item";
        item.textContent = num;
        container.appendChild(item);
    });
}

function linearSearch() {
    const input = document.getElementById("searchInput").value;
    const message = document.getElementById("searchMessage");

    if (input === "") {
        message.textContent = "Please enter a number!";
        return;
    }

    const target = Number(input);
    const index = searchNumbers.indexOf(target);

    if (index !== -1) {
        message.textContent = target + " found at position " + (index + 1);
    } else {
        message.textContent = target + " not found!";
    }
}

displaySearchNumbers();
// DSA Quiz
// DSA Quiz Score System
let score = 0;
let answeredQuestions = [];

const correctAnswers = [
    "Stack",
    "Queue",
    "Bubble Sort",
    "Linked List",
    "Linear Search"
];

function checkQuiz(question, answer) {
    const message = document.getElementById("quizMessage");

    if (answeredQuestions.includes(question)) {
        message.textContent = "You already answered this question!";
        return;
    }

    answeredQuestions.push(question);

    if (answer === correctAnswers[question]) {
        score++;
        message.textContent = "Correct Answer! 🎉";
        message.style.color = "green";
    } else {
        message.textContent = "Wrong Answer!";
        message.style.color = "red";
    }

    document.getElementById("quizScore").textContent =
        "Your Score: " + score + " / 5";

    if (answeredQuestions.length === 5) {
        message.textContent += " Quiz Completed! 🎉";
    }
}