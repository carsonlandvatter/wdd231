const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
}

const today = new Date();

const formattedDate = today.toLocaleDateString("en-US", options);