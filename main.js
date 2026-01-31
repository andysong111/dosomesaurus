
const mbtiData = {
    "ISTJ": "Introverted, Sensing, Thinking, Judging - Responsible, dependable, and traditional.",
    "ISFJ": "Introverted, Sensing, Feeling, Judging - Warm, considerate, and gentle.",
    "INFJ": "Introverted, Intuitive, Feeling, Judging - Insightful, creative, and inspiring.",
    "INTJ": "Introverted, Intuitive, Thinking, Judging - Strategic, logical, and innovative.",
    "ISTP": "Introverted, Sensing, Thinking, Perceiving - Spontaneous, analytical, and practical.",
    "ISFP": "Introverted, Sensing, Feeling, Perceiving - Artistic, charming, and adventurous.",
    "INFP": "Introverted, Intuitive, Feeling, Perceiving - Idealistic, imaginative, and compassionate.",
    "INTP": "Introverted, Intuitive, Thinking, Perceiving -- Intellectual, curious, and analytical.",
    "ESTP": "Extraverted, Sensing, Thinking, Perceiving - Energetic, action-oriented, and resourceful.",
    "ESFP": "Extraverted, Sensing, Feeling, Perceiving - Enthusiastic, sociable, and spontaneous.",
    "ENFP": "Extraverted, Intuitive, Feeling, Perceiving - Charismatic, creative, and optimistic.",
    "ENTP": "Extraverted, Intuitive, Thinking, Perceiving - Quick-witted, inventive, and charismatic.",
    "ESTJ": "Extraverted, Sensing, Thinking, Judging - Organized, efficient, and decisive.",
    "ESFJ": "Extraverted, Sensing, Feeling, Judging - Caring, sociable, and cooperative.",
    "ENFJ": "Extraverted, Intuitive, Feeling, Judging - Charismatic, inspiring, and persuasive.",
    "ENTJ": "Extraverted, Intuitive, Thinking, Judging - Bold, decisive, and strategic."
};

const mbtiInput = document.getElementById("mbti-input");
const searchBtn = document.getElementById("search-btn");
const resultsContainer = document.getElementById("results-container");
const themeToggle = document.getElementById("theme-toggle");

const THEME_STORAGE_KEY = "mbti-theme";

const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggle) {
        const isDark = theme === "dark";
        themeToggle.setAttribute("aria-label", isDark ? "Toggle light mode" : "Toggle dark mode");
        themeToggle.querySelector(".theme-toggle__icon").textContent = isDark ? "☀️" : "🌙";
        themeToggle.querySelector(".theme-toggle__text").textContent = isDark ? "Light mode" : "Dark mode";
    }
};

const initialTheme = getPreferredTheme();
applyTheme(initialTheme);

window.addEventListener("load", () => {
    alert("환영합니다!");
});

searchBtn.addEventListener("click", () => {
    const mbtiType = mbtiInput.value.toUpperCase();
    if (mbtiData[mbtiType]) {
        resultsContainer.innerHTML = `<p>${mbtiData[mbtiType]}</p>`;
    } else {
        resultsContainer.innerHTML = "<p>Invalid MBTI type. Please try again.</p>";
    }
});

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
    });
}
