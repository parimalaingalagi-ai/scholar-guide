// Scholar Guide scholarship directory.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAueoxeRzLakXWqMF_w8FX9-fdVgM-haKk",
    authDomain: "scholar-guide-db897.firebaseapp.com",
    projectId: "scholar-guide-db897",
    storageBucket: "scholar-guide-db897.firebasestorage.app",
    messagingSenderId: "608558269713",
    appId: "1:608558269713:web:a368c4a9aa7156d296b8b0",
    measurementId: "G-VWSYKC09XE"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Always verify current funding and eligibility with the official provider.

const scholarships = [
    {
        id: "daad",
        name: "DAAD Scholarship Database",
        country: "Germany",
        degree: "Multiple levels",
        subject: "Engineering",
        funding: "Varies by award",
        tuition: "Depends on the individual programme",
        stipend: "Depends on the scholarship",
        benefits: "Some awards may include insurance, travel support, or other allowances",
        description: "Search scholarships and funding options for study and research in Germany.",
        eligibility: "Nationality, degree level, academic background, language, and work-experience requirements vary by award.",
        deadline: "Check each programme",
        url: "https://www.daad.de/en/studying-in-germany/scholarships/",
        keywords: "electronics instrumentation embedded systems automation control engineering postgraduate"
    },
    {
        id: "mext",
        name: "Japanese Government (MEXT) Scholarships",
        country: "Japan",
        degree: "Multiple levels",
        subject: "Science and technology",
        funding: "Fully funded",
        tuition: "Generally covered under MEXT scholarship terms",
        stipend: "Monthly allowance under the applicable category",
        benefits: "Travel support may be included under programme rules",
        description: "Government scholarship routes for eligible international students, including research and degree study.",
        eligibility: "Requirements depend on category and embassy/university recommendation route.",
        deadline: "Check the current embassy or university call",
        url: "https://www.studyinjapan.go.jp/en/",
        keywords: "electronics engineering research japan mext undergraduate masters phd"
    },
    {
        id: "erasmus",
        name: "Erasmus Mundus Joint Masters",
        country: "Multiple countries",
        degree: "Master's",
        subject: "Varies by programme",
        funding: "Fully funded",
        tuition: "Scholarship terms depend on the selected joint master's programme",
        stipend: "Check the current programme call",
        benefits: "Scholarship support may include participation, travel, visa, and living costs under applicable terms",
        description: "International master's programmes delivered by partnerships of universities in different countries.",
        eligibility: "Academic background, language requirements, and deadlines differ for each programme.",
        deadline: "Check each master's programme",
        url: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",
        keywords: "Europe European Union engineering technology science international"
    },
    {
        id: "fulbright",
        name: "Fulbright Foreign Student Program",
        country: "United States",
        degree: "Master's",
        subject: "Any eligible subject",
        funding: "Varies by award",
        tuition: "Coverage depends on the country programme and award terms",
        stipend: "Check the applicable country programme",
        benefits: "Award benefits and application routes vary by country",
        description: "A programme for eligible international students to pursue graduate study or research in the United States.",
        eligibility: "Applicants normally apply through the Fulbright programme in their home country; requirements vary.",
        deadline: "Check the relevant country programme",
        url: "https://foreign.fulbrightonline.org/",
        keywords: "USA graduate study research international students"
    },
    {
        id: "chevening",
        name: "Chevening Scholarships",
        country: "United Kingdom",
        degree: "Master's",
        subject: "Any eligible subject",
        funding: "Fully funded",
        tuition: "Covered subject to Chevening award conditions",
        stipend: "Living allowance under programme rules",
        benefits: "Eligible travel and other allowances may be included",
        description: "UK government scholarships for eligible applicants pursuing a one-year master's degree.",
        eligibility: "Country eligibility, academic qualification, work-experience, course, and other rules apply; check current guidance.",
        deadline: "Check the current application cycle",
        url: "https://www.chevening.org/scholarships/",
        keywords: "UK Britain postgraduate leadership"
    },
    {
        id: "commonwealth",
        name: "Commonwealth Scholarships",
        country: "United Kingdom",
        degree: "Master's",
        subject: "Varies by programme",
        funding: "Fully funded",
        tuition: "Covered according to the specific Commonwealth award",
        stipend: "Award-dependent living allowance",
        benefits: "Some awards include travel and other approved allowances",
        description: "Scholarships for eligible citizens of Commonwealth countries, with specific schemes and eligibility rules.",
        eligibility: "Only eligible countries and applicants can apply; scheme requirements differ.",
        deadline: "Check the current scheme",
        url: "https://cscuk.fcdo.gov.uk/scholarships/",
        keywords: "Commonwealth development postgraduate UK"
    },
    {
        id: "australia-awards",
        name: "Australia Awards Scholarships",
        country: "Australia",
        degree: "Multiple levels",
        subject: "Varies by programme",
        funding: "Fully funded",
        tuition: "Covered under scholarship conditions",
        stipend: "Living support is included under applicable terms",
        benefits: "May include travel, establishment allowance, and health cover according to rules",
        description: "Australian Government awards for eligible partner-country applicants.",
        eligibility: "Country, development-priority, course, and other conditions apply.",
        deadline: "Check your country's current intake",
        url: "https://www.dfat.gov.au/people-to-people/australia-awards",
        keywords: "Australia government international development"
    },
    {
        id: "si",
        name: "Swedish Institute Scholarships",
        country: "Sweden",
        degree: "Master's",
        subject: "Varies by programme",
        funding: "Fully funded",
        tuition: "Covered for eligible award recipients under programme rules",
        stipend: "Living allowance under current terms",
        benefits: "Travel grant or other benefits depend on the current call",
        description: "Scholarship opportunities for eligible international master's applicants in Sweden.",
        eligibility: "Eligible countries, work and leadership experience, programme admission, and other conditions apply.",
        deadline: "Check the current call",
        url: "https://si.se/en/apply/scholarships/",
        keywords: "Swedish Institute Sweden Europe postgraduate"
    },
    {
        id: "gks",
        name: "Global Korea Scholarship (GKS)",
        country: "South Korea",
        degree: "Multiple levels",
        subject: "Any eligible subject",
        funding: "Fully funded",
        tuition: "Covered under applicable GKS terms",
        stipend: "Allowance depends on the current programme rules",
        benefits: "May include airfare, language training, and insurance under current guidelines",
        description: "Korean Government scholarship programme for eligible international students.",
        eligibility: "Nationality, age, academic, degree, and application-route requirements apply.",
        deadline: "Check the Korean embassy or participating university",
        url: "https://www.studyinkorea.go.kr/",
        keywords: "Korea Korean government electronics engineering technology"
    },
    {
        id: "turkiye",
        name: "Türkiye Scholarships",
        country: "Türkiye",
        degree: "Multiple levels",
        subject: "Any eligible subject",
        funding: "Fully funded",
        tuition: "Covered under programme terms",
        stipend: "Monthly stipend under current rules",
        benefits: "Other support may include accommodation, health insurance, travel, and language study according to programme terms",
        description: "Government-funded scholarship opportunities for international students in Türkiye.",
        eligibility: "Academic, age, nationality, and programme-specific conditions apply.",
        deadline: "Check the annual application period",
        url: "https://www.turkiyeburslari.gov.tr/",
        keywords: "Turkey Türkiye government international"
    },
    {
        id: "china",
        name: "Chinese Government Scholarship (CSC)",
        country: "China",
        degree: "Multiple levels",
        subject: "Any eligible subject",
        funding: "Varies by award",
        tuition: "Depends on scholarship category and host institution",
        stipend: "Depends on the award category",
        benefits: "Insurance, accommodation, and other support depend on the scholarship type",
        description: "Explore Chinese Government Scholarship routes and participating universities.",
        eligibility: "Requirements and application routes vary by scholarship and university.",
        deadline: "Check the embassy or university announcement",
        url: "https://www.campuschina.org/",
        keywords: "China Chinese government CSC engineering technology research"
    },
    {
        id: "swiss",
        name: "Swiss Government Excellence Scholarships",
        country: "Switzerland",
        degree: "PhD",
        subject: "Research",
        funding: "Varies by award",
        tuition: "Check the current award and host institution terms",
        stipend: "Depends on scholarship category",
        benefits: "Support is designed for eligible research applicants; details vary by award",
        description: "Research-focused awards for eligible international researchers and postgraduate applicants in designated categories.",
        eligibility: "Available categories, countries, academic qualifications, and host-supervisor requirements vary.",
        deadline: "Check the Swiss representation for your country",
        url: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
        keywords: "Switzerland research science technology"
    },
    {
        id: "eiffel",
        name: "France Excellence Eiffel Scholarship",
        country: "France",
        degree: "Multiple levels",
        subject: "Engineering",
        funding: "Varies by award",
        tuition: "Tuition coverage is not necessarily included; verify programme terms",
        stipend: "Monthly allowance under current scheme rules",
        benefits: "Some services and travel support may be included under scheme rules",
        description: "French government scholarship programme for eligible international students nominated by participating institutions.",
        eligibility: "The French institution generally submits the nomination; age, nationality, field, and level rules apply.",
        deadline: "Check the current call and institution nomination deadline",
        url: "https://www.campusfrance.org/en/the-france-excellence-eiffel-scholarship-program",
        keywords: "France French engineering science technology master's doctorate"
    },
    {
        id: "manaaki",
        name: "Manaaki New Zealand Scholarships",
        country: "New Zealand",
        degree: "Multiple levels",
        subject: "Varies by programme",
        funding: "Fully funded",
        tuition: "Covered under applicable scholarship conditions",
        stipend: "Living allowance under programme terms",
        benefits: "Travel, insurance, and other support may be included for eligible scholars",
        description: "New Zealand Government scholarships for eligible partner-country students.",
        eligibility: "Only eligible countries and approved study areas can apply; check current rules.",
        deadline: "Check the current country-specific application window",
        url: "https://www.nzscholarships.govt.nz/",
        keywords: "New Zealand government international development"
    },
    {
        id: "ireland",
        name: "Government of Ireland International Education Scholarships",
        country: "Ireland",
        degree: "Master's",
        subject: "Any eligible subject",
        funding: "Partially funded",
        tuition: "Check current award terms and host university fees",
        stipend: "Award stipend is subject to the current scheme rules",
        benefits: "Scholarship support and duration depend on the current call",
        description: "National scholarship scheme for eligible international students admitted to participating Irish higher-education institutions.",
        eligibility: "Admission, nationality, academic, and scheme conditions apply.",
        deadline: "Check the current call",
        url: "https://hea.ie/policy/internationalisation/goi-ies/",
        keywords: "Ireland Irish higher education international"
    },
    {
        id: "canada",
        name: "EduCanada Scholarship Search",
        country: "Canada",
        degree: "Multiple levels",
        subject: "Varies by programme",
        funding: "Varies by award",
        tuition: "Depends on the individual scholarship",
        stipend: "Depends on the individual scholarship",
        benefits: "Award coverage, eligible countries, and application routes vary",
        description: "Official Canadian information about scholarships and international study funding opportunities.",
        eligibility: "Use the official listings to identify programmes open to your nationality and degree level.",
        deadline: "Check each award",
        url: "https://www.educanada.ca/scholarships-bourses/index.aspx?lang=eng",
        keywords: "Canada Canadian university graduate undergraduate"
    },
    {
        id: "australia-research",
        name: "Australian University Research Scholarships",
        country: "Australia",
        degree: "PhD",
        subject: "Research",
        funding: "Varies by award",
        tuition: "Some awards offset tuition fees; conditions vary",
        stipend: "Some awards provide a living stipend",
        benefits: "Research support and duration vary by university and award",
        description: "Starting point for finding university-funded research training and postgraduate awards in Australia.",
        eligibility: "Each university sets academic, research, admission, and scholarship requirements.",
        deadline: "Check the host university",
        url: "https://www.studyaustralia.gov.au/",
        keywords: "Australia research degree university HDR"
    },
    {
        id: "uk-study",
        name: "Study UK Scholarship Information",
        country: "United Kingdom",
        degree: "Multiple levels",
        subject: "Varies by programme",
        funding: "Varies by award",
        tuition: "Depends on the listed scholarship",
        stipend: "Not guaranteed; check each award",
        benefits: "Information on university and external funding routes",
        description: "Explore UK study funding information and follow links to individual scholarship providers.",
        eligibility: "Every scholarship has its own eligibility rules and deadlines.",
        deadline: "Check each provider",
        url: "https://study-uk.britishcouncil.org/",
        keywords: "UK undergraduate university funding international students"
    },
    {
        id: "sweden-universities",
        name: "Swedish University Scholarships",
        country: "Sweden",
        degree: "Master's",
        subject: "Varies by programme",
        funding: "Tuition support",
        tuition: "Some awards reduce or cover tuition fees",
        stipend: "Living expenses may not be covered",
        benefits: "Benefits differ by university and award",
        description: "Use official Swedish study information to find university-specific scholarships and tuition waivers.",
        eligibility: "Nationality, fee status, admission, and university-specific rules apply.",
        deadline: "Check each university",
        url: "https://studyinsweden.se/",
        keywords: "Sweden university tuition waiver master's"
    },
    {
        id: "india-nsp",
        name: "National Scholarship Portal (India)",
        country: "India",
        degree: "Multiple levels",
        subject: "Any eligible subject",
        funding: "Varies by award",
        tuition: "Depends on the government scheme",
        stipend: "Depends on the scheme",
        benefits: "Central and other listed schemes have different benefits",
        description: "Official portal for discovering eligible Indian scholarship schemes.",
        eligibility: "Income, category, state, course, academic, and other criteria vary by scheme.",
        deadline: "Check the current scheme notice",
        url: "https://scholarships.gov.in/",
        keywords: "India domestic scholarship student government"
    },
    {
        id: "japan-universities",
        name: "Japanese University Scholarships",
        country: "Japan",
        degree: "Multiple levels",
        subject: "Varies by programme",
        funding: "Varies by award",
        tuition: "May be full, partial, or not covered",
        stipend: "Depends on university and award",
        benefits: "Some universities offer tuition reductions or living support",
        description: "A starting point for checking scholarship pages at Japanese universities in addition to MEXT.",
        eligibility: "Admission, language, nationality, academic, and funding rules vary by university.",
        deadline: "Check each university",
        url: "https://www.studyinjapan.go.jp/en/",
        keywords: "Japan university funding undergraduate postgraduate engineering"
    }
];

/* BASIC HELPERS */

const $ = id => document.getElementById(id);

const grid = $("scholarshipGrid");
const searchInput = $("searchInput");
const countryFilter = $("countryFilter");
const degreeFilter = $("degreeFilter");
const subjectFilter = $("subjectFilter");
const fundingFilter = $("fundingFilter");
const resultCount = $("resultCount");
const totalCount = $("totalCount");

const detailsOverlay = $("scholarshipDetails");
const detailsContent = $("detailsContent");
const closeDetailsButton = $("closeDetails");

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch {
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
}

function safeText(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[character]));
}

let savedScholarships = readStorage("scholarGuideSaved", []);
let checklistState = readStorage("scholarGuideChecklist", {});

totalCount.textContent = scholarships.length;

/* DESTINATION FILTER OPTIONS */

[...new Set(scholarships.map(item => item.country))]
    .sort((a, b) => a.localeCompare(b))
    .forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });

/* RENDER SCHOLARSHIP CARDS */

function renderScholarships() {
    const query = searchInput.value.trim().toLowerCase();
    const country = countryFilter.value;
    const degree = degreeFilter.value;
    const subject = subjectFilter.value;
    const funding = fundingFilter.value;

    const filtered = scholarships.filter(item => {
        const searchableText = [
            item.name,
            item.country,
            item.degree,
            item.subject,
            item.funding,
            item.tuition,
            item.stipend,
            item.benefits,
            item.description,
            item.eligibility,
            item.deadline,
            item.keywords
        ].join(" ").toLowerCase();

        return searchableText.includes(query)
            && (!country || item.country === country)
            && (!degree || item.degree === degree || item.degree === "Multiple levels")
            && (!subject || item.subject === subject || item.subject === "Varies by programme")
            && (!funding || item.funding === funding);
    });

    resultCount.textContent =
        `${filtered.length} ${filtered.length === 1 ? "result" : "results"}`;

    grid.replaceChildren();

    if (!filtered.length) {
        const empty = document.createElement("div");
        empty.className = "empty-state";

        const heading = document.createElement("h3");
        heading.textContent = "No matching opportunities found";

        const message = document.createElement("p");
        message.textContent = "Try a broader keyword or reset the filters.";

        const button = document.createElement("button");
        button.className = "small-button primary";
        button.type = "button";
        button.textContent = "Clear search and filters";
        button.addEventListener("click", resetFilters);

        empty.append(heading, message, button);
        grid.appendChild(empty);
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("article");
        card.className = "scholarship-card";

        const top = document.createElement("div");
        top.className = "card-top";

        const countryLabel = document.createElement("span");
        countryLabel.className = "country-label";
        countryLabel.textContent = `${item.country} · ${item.degree}`;

        const badge = document.createElement("span");
        badge.className = "funding-badge";

        if (item.funding !== "Fully funded") {
            badge.classList.add("partial");
        }

        badge.textContent = item.funding;
        top.append(countryLabel, badge);

        const title = document.createElement("h3");
        title.textContent = item.name;

        const description = document.createElement("p");
        description.className = "description";
        description.textContent = item.description;

        // Detailed eligibility, tuition, stipend, benefits, and deadlines
        // appear only inside the View Details popup.
        card.append(top, title, description);

        const actions = document.createElement("div");
        actions.className = "card-actions";

        const saveButton = document.createElement("button");
        saveButton.className = "small-button";
        saveButton.type = "button";

        function updateSaveButton() {
            const isSaved = savedScholarships.includes(item.id);
            saveButton.textContent = isSaved ? "★ Saved" : "☆ Save";
            saveButton.setAttribute("aria-pressed", String(isSaved));
        }

        updateSaveButton();

        saveButton.addEventListener("click", () => {
            savedScholarships = savedScholarships.includes(item.id)
                ? savedScholarships.filter(id => id !== item.id)
                : [...savedScholarships, item.id];

            writeStorage("scholarGuideSaved", savedScholarships);
            updateSaveButton();
            window.dispatchEvent(new Event("scholarGuideSavedChanged"));
        });

        const detailsButton = document.createElement("button");
        detailsButton.className = "small-button primary";
        detailsButton.type = "button";
        detailsButton.textContent = "View Details →";
        detailsButton.addEventListener("click", () => {
            openScholarshipDetails(item.id);
        });

        const officialLink = document.createElement("a");
        officialLink.className = "small-button";
        officialLink.href = item.url;
        officialLink.target = "_blank";
        officialLink.rel = "noopener noreferrer";
        officialLink.textContent = "Official source ↗";

        actions.append(saveButton, detailsButton, officialLink);
        card.appendChild(actions);
        grid.appendChild(card);
    });
}

/* UNIVERSITY DIRECTORY */

const universities = [
    {
        name: "Technical University of Munich (TUM)",
        country: "Germany",
        focus: "Engineering, electronics, robotics and technology",
        url: "https://www.tum.de/en/",
        image: "https://www.tum.de/fileadmin/_processed_/9/b/csm_20170302_TUM_Haupteingang_AE_-13_klein_5b83171fbf.jpg",
        keywords: "tum munich engineering embedded systems automation"
    },
    {
        name: "RWTH Aachen University",
        country: "Germany",
        focus: "Engineering, electrical engineering and automation",
        url: "https://www.rwth-aachen.de/",
        image: "https://www.rwth-aachen.de/global/show_picture.asp?id=aaaaaaaaaaywqtu",
        keywords: "rwth aachen electronics control automation"
    },
    {
        name: "TU Dresden",
        country: "Germany",
        focus: "Electrical engineering, microelectronics and automation",
        url: "https://tu-dresden.de/?set_language=en",
        image: "https://tu-dresden.de/tu-dresden",
        keywords: "dresden electrical engineering microelectronics"
    },
    {
        name: "The University of Tokyo",
        country: "Japan",
        focus: "Engineering, electronics and research",
        url: "https://www.u-tokyo.ac.jp/en/",
        image: "https://www.u-tokyo.ac.jp/content/400020145.jpg",
        keywords: "tokyo electronics embedded systems research"
    },
    {
        name: "Kyoto University",
        country: "Japan",
        focus: "Engineering, science and technology",
        url: "https://www.kyoto-u.ac.jp/en",
        image: "https://www.kyoto-u.ac.jp/sites/default/files/2021-04/mainvisual-kyoto-u-1-7b9c83c8f15e2b9a7c.jpg",
        keywords: "kyoto engineering electronics"
    },
    {
        name: "KTH Royal Institute of Technology",
        country: "Sweden",
        focus: "Electrical engineering, embedded systems and automation",
        url: "https://www.kth.se/en",
        image: "https://www.kth.se/polopoly_fs/1.77223.1639748723!/image/KTH%20campus%20Valhallav%C3%A4gen.jpg",
        keywords: "kth stockholm embedded systems automation"
    },
    {
        name: "Lund University",
        country: "Sweden",
        focus: "Engineering, electronics and control",
        url: "https://www.lunduniversity.lu.se/",
        image: "https://www.lunduniversity.lu.se/sites/www.lunduniversity.lu.se/files/styles/lu_landing_page_hero/public/2022-09/lund-university-main-building.jpg",
        keywords: "lund engineering electronics"
    },
    {
        name: "University of Toronto",
        country: "Canada",
        focus: "Engineering, electrical and computer engineering",
        url: "https://www.utoronto.ca/",
        image: "https://www.utoronto.ca/sites/default/files/styles/hero/public/2022-06/hero-st-george-campus.jpg",
        keywords: "toronto electrical engineering"
    },
    {
        name: "University of Waterloo",
        country: "Canada",
        focus: "Electrical and computer engineering, automation",
        url: "https://uwaterloo.ca/",
        image: "https://uwaterloo.ca/about/sites/ca.about/files/uploads/images/uw_campus_aerial.jpg",
        keywords: "waterloo engineering automation"
    },
    {
        name: "National University of Singapore",
        country: "Singapore",
        focus: "Electrical engineering, embedded and control systems",
        url: "https://nus.edu.sg/",
        image: "https://nus.edu.sg/images/default-source/base/logo.png",
        keywords: "singapore electrical engineering"
    }
];

const universityGrid = $("universityGrid");
const universitySearch = $("universitySearch");
const universityCountryFilter = $("universityCountryFilter");

[...new Set(universities.map(university => university.country))]
    .sort()
    .forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        universityCountryFilter.appendChild(option);
    });

function renderUniversities() {
    const query = universitySearch.value.trim().toLowerCase();
    const country = universityCountryFilter.value;

    const matches = universities.filter(university => {
        const searchableText = [
            university.name,
            university.country,
            university.focus,
            university.keywords
        ].join(" ").toLowerCase();

        return (!country || university.country === country)
            && searchableText.includes(query);
    });

    universityGrid.replaceChildren();

    if (!matches.length) {
        const message = document.createElement("p");
        message.className = "empty-state";
        message.textContent =
            "No universities match your search. Try another keyword or country.";
        universityGrid.appendChild(message);
    }

    matches.forEach(university => {
        const card = document.createElement("article");
        card.className = "university-card";

        const image = document.createElement("img");
        image.className = "university-thumb";
        image.src = university.image;
        image.alt = `${university.name} thumbnail`;
        image.loading = "lazy";
        image.referrerPolicy = "no-referrer";

        image.addEventListener("error", () => {
            if (!image.dataset.faviconAttempted) {
                image.dataset.faviconAttempted = "true";
                const domain = new URL(university.url).hostname;
                image.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
                image.alt = `${university.name} website icon`;
                return;
            }

            if (image.dataset.initialsFallback) {
                return;
            }

            image.dataset.initialsFallback = "true";
            const initials = university.name
                .split(/\s+/)
                .filter(Boolean)
                .slice(0, 2)
                .map(word => word[0])
                .join("")
                .toUpperCase();
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="18" fill="#352744"/><text x="64" y="76" text-anchor="middle" font-family="Arial,sans-serif" font-size="38" font-weight="700" fill="#E9DDFB">${initials}</text></svg>`;

            image.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
            image.alt = `${university.name} initials`;
        });

        const content = document.createElement("div");
        content.className = "university-card-content";

        const countryLabel = document.createElement("span");
        countryLabel.className = "university-country";
        countryLabel.textContent = university.country;

        const heading = document.createElement("h3");
        heading.textContent = university.name;

        const description = document.createElement("p");
        description.textContent = university.focus;

        const link = document.createElement("a");
        link.href = university.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Official website ↗";

        content.append(countryLabel, heading, description, link);
        card.append(image, content);
        universityGrid.appendChild(card);
    });

    $("universityResultCount").textContent =
        `${matches.length} ${matches.length === 1 ? "university" : "universities"} shown`;
}

universitySearch.addEventListener("input", renderUniversities);
universityCountryFilter.addEventListener("change", renderUniversities);

/* UNIVERSITIES SUGGESTED INSIDE SCHOLARSHIP DETAILS */

const universitySuggestions = {
    daad: [
        ["Technical University of Munich (TUM)", "Germany", "https://www.tum.de/en/"],
        ["RWTH Aachen University", "Germany", "https://www.rwth-aachen.de/"],
        ["TU Dresden", "Germany", "https://tu-dresden.de/?set_language=en"]
    ],
    mext: [
        ["The University of Tokyo", "Japan", "https://www.u-tokyo.ac.jp/en/"],
        ["Kyoto University", "Japan", "https://www.kyoto-u.ac.jp/en"]
    ],
    si: [
        ["KTH Royal Institute of Technology", "Sweden", "https://www.kth.se/en"],
        ["Lund University", "Sweden", "https://www.lunduniversity.lu.se/"]
    ],
    "sweden-universities": [
        ["KTH Royal Institute of Technology", "Sweden", "https://www.kth.se/en"],
        ["Lund University", "Sweden", "https://www.lunduniversity.lu.se/"]
    ],
    erasmus: [
        [
            "Participating universities",
            "Multiple countries",
            "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
        ]
    ],
    canada: [
        ["University of Toronto", "Canada", "https://www.utoronto.ca/"],
        ["University of Waterloo", "Canada", "https://uwaterloo.ca/"]
    ],
    "japan-universities": [
        ["The University of Tokyo", "Japan", "https://www.u-tokyo.ac.jp/en/"],
        ["Kyoto University", "Japan", "https://www.kyoto-u.ac.jp/en"]
    ]
};

/* SCHOLARSHIP DETAILS POPUP */

function openScholarshipDetails(id) {
    const item = scholarships.find(scholarship => scholarship.id === id);

    if (!item) return;

    const suggestedUniversities = universitySuggestions[item.id] || [];

    const universityMarkup = suggestedUniversities.length
        ? suggestedUniversities.map(([name, country, url]) => `
            <article class="detail-university">
                <div>
                    <span>${safeText(country)}</span>
                    <h4>${safeText(name)}</h4>
                    <a href="${safeText(url)}"
                       target="_blank"
                       rel="noopener noreferrer">
                        Official university website ↗
                    </a>
                </div>
            </article>
        `).join("")
        : `<p>
            Use the official scholarship source to identify participating
            universities and eligible programmes. This directory does not
            imply that a particular university participates in or guarantees
            this award.
           </p>`;

    const documents = [
        "Academic transcripts and degree certificates, as applicable",
        "CV or résumé",
        "Motivation letter or personal statement, if required",
        "Recommendation letters, if requested",
        "Accepted language certificate, if required",
        "Passport or identity document",
        "Programme-specific forms, research plan, or supporting evidence"
    ];

    const preparation = [
        "Confirm eligibility for your citizenship and intended study level",
        "Shortlist eligible programmes and universities",
        "Check tuition, living expenses, travel, and insurance coverage",
        "Verify language tests and other selection stages",
        "Check the latest official deadline and application route"
    ];

    detailsContent.innerHTML = `
        <p class="eyebrow">SCHOLARSHIP DETAILS</p>

        <div class="details-title-row">
            <div>
                <span class="country-label">
                    ${safeText(item.country)} · ${safeText(item.degree)}
                </span>
                <h2 id="detailsTitle">${safeText(item.name)}</h2>
            </div>

            <span class="funding-badge ${
                item.funding === "Fully funded" ? "" : "partial"
            }">
                ${safeText(item.funding)}
            </span>
        </div>

        <p class="details-intro">${safeText(item.description)}</p>

        <section class="detail-block">
            <h3>1. What is the eligibility basis?</h3>

            <div class="details-facts">
                <div>
                    <strong>Study level</strong>
                    <p>${safeText(item.degree)}</p>
                </div>

                <div>
                    <strong>Subject area</strong>
                    <p>${safeText(item.subject)}</p>
                </div>

                <div>
                    <strong>Eligibility criteria</strong>
                    <p>${safeText(item.eligibility)}</p>
                </div>

                <div>
                    <strong>Deadline</strong>
                    <p>${safeText(item.deadline)}</p>
                </div>
            </div>

            <p class="detail-note">
                Your marks, nationality, language scores, age, work experience,
                and admission status may matter depending on the exact award.
                Check the current official call; this page cannot determine
                or guarantee personal eligibility.
            </p>
        </section>

        <section class="detail-block">
            <h3>2. What does the scholarship cover?</h3>

            <div class="details-facts">
                <div>
                    <strong>Funding category</strong>
                    <p>${safeText(item.funding)}</p>
                </div>

                <div>
                    <strong>Tuition fees</strong>
                    <p>${safeText(item.tuition)}</p>
                </div>

                <div>
                    <strong>Living allowance</strong>
                    <p>${safeText(item.stipend)}</p>
                </div>

                <div>
                    <strong>Other benefits</strong>
                    <p>${safeText(item.benefits)}</p>
                </div>
            </div>

            <p class="detail-note">
                “Fully funded” should still be checked against the specific
                award conditions and actual living costs. Do not assume every
                expense is covered.
            </p>
        </section>

        <section class="detail-block">
            <h3>3. Which universities can I explore?</h3>

            <p class="detail-note">
                These are relevant research starting points where available,
                not confirmed partners for every scholarship. Confirm the
                exact course, current admission requirements, and scholarship
                compatibility on official websites.
            </p>

            <div class="detail-university-grid">
                ${universityMarkup}
            </div>
        </section>

        <section class="detail-block">
            <h3>Documents to prepare</h3>

            <ul>
                ${documents.map(document => `
                    <li>${safeText(document)}</li>
                `).join("")}
            </ul>

            <p class="detail-note">
                The exact document list varies by award. Follow the current
                official call.
            </p>
        </section>

        <section class="detail-block">
            <h3>Application preparation</h3>

            <ul>
                ${preparation.map(step => `
                    <li>${safeText(step)}</li>
                `).join("")}
            </ul>
        </section>

        <a class="primary-button details-official"
           href="${safeText(item.url)}"
           target="_blank"
           rel="noopener noreferrer">
            Open official scholarship source ↗
        </a>
    `;

    detailsOverlay.hidden = false;
    document.body.classList.add("modal-open");
    closeDetailsButton.focus();
}

function closeScholarshipDetails() {
    detailsOverlay.hidden = true;
    document.body.classList.remove("modal-open");
}

closeDetailsButton.addEventListener("click", closeScholarshipDetails);

detailsOverlay.addEventListener("click", event => {
    if (event.target === detailsOverlay) {
        closeScholarshipDetails();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !detailsOverlay.hidden) {
        closeScholarshipDetails();
    }
});

/* FILTER RESET AND SEARCH EVENTS */

function resetFilters() {
    searchInput.value = "";
    countryFilter.value = "";
    degreeFilter.value = "";
    subjectFilter.value = "";
    fundingFilter.value = "";

    renderScholarships();
}

searchInput.addEventListener("input", renderScholarships);
countryFilter.addEventListener("change", renderScholarships);
degreeFilter.addEventListener("change", renderScholarships);
subjectFilter.addEventListener("change", renderScholarships);
fundingFilter.addEventListener("change", renderScholarships);

$("resetFilters").addEventListener("click", resetFilters);

/* PREPARATION CHECKLIST */

const checklistItems = [
    "Research scholarship eligibility and eligible countries",
    "Shortlist courses and universities",
    "Prepare academic transcripts and certificates",
    "Prepare CV or resume",
    "Draft statement of purpose or motivation letter",
    "Request recommendation letters",
    "Check passport validity",
    "Check language test requirements",
    "Confirm official deadlines and funding coverage",
    "Complete, review, and submit the application"
];

const checklistContainer = $("checklist");

function renderChecklist() {
    checklistContainer.replaceChildren();

    checklistItems.forEach((label, index) => {
        const row = document.createElement("label");
        row.className = "check-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = Boolean(checklistState[index]);

        const text = document.createElement("span");
        text.textContent = label;

        if (checkbox.checked) {
            row.classList.add("done");
        }

        checkbox.addEventListener("change", () => {
            checklistState[index] = checkbox.checked;

            writeStorage("scholarGuideChecklist", checklistState);
            renderChecklist();
        });

        row.append(checkbox, text);
        checklistContainer.appendChild(row);
    });

    const completed = checklistItems.filter(
        (_, index) => Boolean(checklistState[index])
    ).length;

    const progress = Math.round(
        completed / checklistItems.length * 100
    );

    $("progressBar").style.width = `${progress}%`;

    $("progressText").textContent =
        `${progress}% completed (${completed}/${checklistItems.length})`;
}

/* PERSONAL NOTES */

const notesInput = $("notesInput");
const notesStatus = $("notesStatus");

notesInput.value = readStorage("scholarGuideNotes", "");

$("saveNotes").addEventListener("click", () => {
    const saved = writeStorage("scholarGuideNotes", notesInput.value);

    notesStatus.textContent = saved
        ? "Notes saved in this browser."
        : "Unable to save notes. Check your browser storage settings.";
});

/* INITIALISE THE WEBSITE */

renderScholarships();
renderUniversities();
renderChecklist();

/* ==========================================
   SCHOLAR GUIDE — FIREBASE AUTHENTICATION
========================================== */

const authSection = document.getElementById("auth-section");
const accountSection = document.getElementById("account-section");
const authForm = document.getElementById("auth-form");

const authEmail = document.getElementById("auth-email");
const authPassword = document.getElementById("auth-password");

const authTitle = document.getElementById("auth-title");
const authDescription = document.getElementById("auth-description");
const authSubmit = document.getElementById("auth-submit");

const authSwitchButton = document.getElementById("auth-switch-button");
const authSwitchInline = document.getElementById("auth-switch-inline");
const authSwitchText = document.getElementById("auth-switch-text");
const authTopText = document.getElementById("auth-top-text");

const authMessage = document.getElementById("auth-message");
const authLogout = document.getElementById("auth-logout");
const protectedContent = document.getElementById("protected-content");
const signedInEmail = document.getElementById("signed-in-email");
const accountNavLink = document.getElementById("accountNavLink");

let loginMode = false;

function setAuthMessage(message, type = "") {
    authMessage.textContent = message;
    authMessage.className = type;
}

function updateAuthForm() {
    authTitle.textContent = loginMode
        ? "Welcome Back"
        : "Create Your Account";

    authDescription.textContent = loginMode
        ? "Log in to your Scholar Guide account."
        : "Sign up to explore scholarships and universities.";

    authSubmit.textContent = loginMode
        ? "Log In →"
        : "Create Account →";

    authSwitchText.textContent = loginMode
        ? "New to Scholar Guide?"
        : "Already have an account?";

    authTopText.textContent = loginMode
        ? "New here?"
        : "Already registered?";

    authSwitchButton.textContent = loginMode
        ? "Sign Up →"
        : "Login →";

    authSwitchInline.textContent = loginMode
        ? "Sign Up"
        : "Login";

    authPassword.autocomplete = loginMode
        ? "current-password"
        : "new-password";

    authPassword.minLength = loginMode ? 1 : 6;

    setAuthMessage("");
}

function switchAuthMode() {
    loginMode = !loginMode;
    updateAuthForm();
}

authSwitchButton.addEventListener("click", switchAuthMode);
authSwitchInline.addEventListener("click", switchAuthMode);

authForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = authEmail.value.trim();
    const password = authPassword.value;

    authSubmit.disabled = true;
    setAuthMessage(
        loginMode ? "Logging you in..." : "Creating your account..."
    );

    try {
        if (loginMode) {
            await signInWithEmailAndPassword(auth, email, password);
        } else {
            await createUserWithEmailAndPassword(auth, email, password);
        }

        authForm.reset();

        // Firebase's auth-state listener will hide the login page.
    } catch (error) {
        console.error("Firebase authentication error:", error.code, error.message);

        const messages = {
            "auth/email-already-in-use":
                "This email is already registered. Please log in.",

            "auth/invalid-email":
                "Please enter a valid email address.",

            "auth/weak-password":
                "Your password must contain at least 6 characters.",

            "auth/invalid-credential":
                "Incorrect email or password.",

            "auth/user-not-found":
                "No account found. Please sign up first.",

            "auth/wrong-password":
                "Incorrect email or password.",

            "auth/too-many-requests":
                "Too many attempts. Please try again later.",

            "auth/network-request-failed":
                "Network error. Check your internet connection.",

            "auth/operation-not-allowed":
                "Enable Email/Password in Firebase Authentication.",

            "auth/api-key-not-valid":
                "Check your Firebase API key configuration."
        };

        setAuthMessage(
            messages[error.code] ||
            "Unable to continue. Please try again.",
            "error"
        );
    } finally {
        authSubmit.disabled = false;
    }
});

/* Logout from the separate account section */

authLogout.addEventListener("click", async () => {
    authLogout.disabled = true;

    try {
        await signOut(auth);
        // Firebase's listener will return the user to the login page.
    } catch (error) {
        console.error("Logout error:", error);
        window.alert("Unable to log out. Please try again.");
    } finally {
        authLogout.disabled = false;
    }
});

/* Show the correct page based on Firebase login status */

onAuthStateChanged(auth, (user) => {
    const isLoggedIn = Boolean(user);

    authSection.hidden = isLoggedIn;
    accountSection.hidden = !isLoggedIn;
    protectedContent.hidden = !isLoggedIn || !exploreMode;
    document.getElementById("dashboard").hidden =
        !isLoggedIn || !exploreMode;

    if (isLoggedIn) {
        signedInEmail.textContent = user.email || "Signed-in user";

        accountNavLink.textContent = "My Account";
        accountNavLink.href = "#account-section";
    } else {
        signedInEmail.textContent = "";

        accountNavLink.textContent = "Sign Up / Login";
        accountNavLink.href = "#auth-section";

        loginMode = false;
        updateAuthForm();
    }
});
let exploreMode = false;

function revealExploreContent(event) {
    event.preventDefault();

    exploreMode = true;

    const protectedContent =
        document.getElementById("protected-content");

    if (protectedContent) {
        protectedContent.hidden = false;
    }

    document.getElementById("dashboard").hidden = false;

    document.getElementById("exploreButton")
        ?.setAttribute("aria-expanded", "true");

    document.getElementById("heroExploreButton")
        ?.setAttribute("aria-expanded", "true");

    document.getElementById("universities")
        ?.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("exploreButton")
    ?.addEventListener("click", revealExploreContent);

document.getElementById("heroExploreButton")
    ?.addEventListener("click", revealExploreContent);

(() => {
  "use strict";

  const STORAGE_KEY = "scholarGuideDashboardV1";
  const CUSTOM_STORAGE_KEY = "scholarGuideCustomScholarshipsV1";

  const validStatuses = [
    "Interested",
    "Applying",
    "Submitted",
    "Accepted",
    "Rejected"
  ];
  let dashboardStatuses = {};
  let selectedId = null;
  let customScholarships = readStorage(CUSTOM_STORAGE_KEY, []);
  if (!Array.isArray(customScholarships)) customScholarships = [];

  const $ = id => document.getElementById(id);

  function loadStatuses() {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
      );

      dashboardStatuses = Object.fromEntries(
        Object.entries(saved).filter(([, status]) =>
          validStatuses.includes(status)
        )
      );
    } catch (error) {
      console.warn("Dashboard status data could not be loaded.");
    }
  }

  function saveStatuses() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dashboardStatuses));
      return true;
    } catch (error) {
      alert("Unable to save. Check your browser storage settings.");
      return false;
    }
  }

  function getDashboardScholarships() {
    return [
      ...scholarships.filter(item =>
        savedScholarships.includes(item.id)
      ),
      ...customScholarships
    ].map(item => ({
      ...item,
      status: dashboardStatuses[item.id] || "Interested"
    }));
  }

  function saveCustomScholarships() {
    try {
      localStorage.setItem(
        CUSTOM_STORAGE_KEY,
        JSON.stringify(customScholarships)
      );
      return true;
    } catch (error) {
      console.error("Custom scholarship could not be saved:", error);
      window.alert("Unable to save this scholarship. Check your browser storage settings.");
      return false;
    }
  }

  function daysRemaining(value) {
    if (!value) return null;

    const date = new Date(
      /^\d{4}-\d{2}-\d{2}$/.test(value)
        ? value + "T00:00:00"
        : value
    );

    if (Number.isNaN(date.getTime())) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return Math.round((date - today) / 86400000);
  }

  function deadlineLabel(value) {
    const days = daysRemaining(value);

    if (days === null) return "Date not announced";
    if (days < 0) return "Deadline passed";
    if (days === 0) return "Deadline today";
    if (days === 1) return "1 day remaining";

    return days + " days remaining";
  }

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;

    return element;
  }

  function renderCounters() {
    const items = getDashboardScholarships();
    $("savedCount").textContent = items.length;

    $("progressCount").textContent =
      items.filter(item =>
        item.status === "Applying"
      ).length;

    $("submittedCount").textContent =
      items.filter(item =>
        item.status === "Submitted"
      ).length;

    $("deadlineCount").textContent =
      items.filter(item => {
        const days = daysRemaining(item.deadline);
        return days !== null && days >= 0 && days <= 30;
      }).length;
  }

  function renderDetails() {
    const panel = $("selectedScholarship");
    panel.replaceChildren();

    const item = getDashboardScholarships().find(
      scholarship => scholarship.id === selectedId
    );

    if (!item) {
      panel.textContent =
        "Save a scholarship from the Scholarships directory to view its details here.";
      return;
    }

    panel.appendChild(makeElement("h3", "", item.name));

    const fields = [
      ["Country", item.country],
      ["Degree level", item.degree],
      ["Subject", item.subject],
      ["Funding", item.funding],
      ["Tuition", item.tuition],
      ["Stipend", item.stipend],
      ["Benefits", item.benefits],
      ["Eligibility", item.eligibility],
      ["Official deadline", item.deadline],
      ["Deadline status", deadlineLabel(item.deadline)],
      ["Description", item.description]
    ];

    fields.forEach(([label, value]) => {
      const block = makeElement("div", "detail-date");
      block.appendChild(makeElement("strong", "", label));
      block.appendChild(
        makeElement("p", "", value || "Check the official provider")
      );
      panel.appendChild(block);
    });

    const label = makeElement("label", "", "Application status");
    label.htmlFor = "dashboardStatus";

    const select = document.createElement("select");
    select.id = "dashboardStatus";

    ["Interested", "Applying", "Submitted", "Accepted", "Rejected"]
      .forEach(status => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = status;
        option.selected = status === item.status;
        select.appendChild(option);
      });

    const saveButton = makeElement("button", "detail-action", "Save Status");
    saveButton.type = "button";

    saveButton.addEventListener("click", () => {
      dashboardStatuses[item.id] = select.value;

      if (saveStatuses()) renderDashboard();
    });

    panel.append(label, select, saveButton);

    if (item.url && /^https:\/\/[^\s]+$/i.test(item.url)) {
      const link = makeElement("a", "detail-action", "Open Official Website");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      panel.appendChild(link);
    }
  }

  function renderDashboard() {
    const list = $("dashboardScholarships");
    const filter = $("statusFilter");
    const items = getDashboardScholarships();

    if (!list || !filter ||
        !$("savedCount") || !$("progressCount") ||
        !$("submittedCount") || !$("deadlineCount") ||
        !$("selectedScholarship")) {
      return;
    }

    renderCounters();
    list.replaceChildren();

    const visible = items.filter(item =>
      filter.value === "All" || item.status === filter.value
    );

    if (visible.length === 0) {
      list.appendChild(
        makeElement(
          "p",
          "empty-state",
          items.length
            ? "No scholarships match this status."
            : "No saved scholarships yet. Save opportunities from the Scholarships directory to track them here."
        )
      );
    }

    visible.forEach(item => {
      const row = makeElement(
        "article",
        "scholarship-row" + (item.id === selectedId ? " active" : "")
      );

      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.appendChild(makeElement("h3", "", item.name));
      row.appendChild(makeElement("p", "", item.country + " · " + item.degree));
      row.appendChild(makeElement("p", "", "Deadline: " + item.deadline));
      row.appendChild(makeElement("span", "status-pill", item.status));

      const choose = () => {
        selectedId = item.id;
        renderDashboard();
      };

      row.addEventListener("click", choose);

      row.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          choose();
        }
      });

      list.appendChild(row);
    });

    renderDetails();
  }

  function renderSearchResults() {
    const search = $("dashboardScholarshipSearch");
    const results = $("dashboardSearchResults");
    if (!search || !results) return;

    results.replaceChildren();
    const query = search.value.trim().toLowerCase();

    if (!query) {
      results.appendChild(makeElement(
        "p",
        "feature-empty",
        "Type a name, country, subject, degree, or funding type to search."
      ));
      return;
    }

    const matches = scholarships.filter(item => {
      const searchable = [
        item.name,
        item.country,
        item.subject,
        item.degree,
        item.funding,
        item.keywords
      ].join(" ").toLowerCase();
      return searchable.includes(query);
    });

    if (!matches.length) {
      results.appendChild(makeElement(
        "p",
        "feature-empty",
        "No directory matches. Use “Add a scholarship not listed above” to track it."
      ));
      return;
    }

    matches.forEach(item => {
      const entry = makeElement("div", "feature-list-item");
      entry.append(
        makeElement("strong", "", item.name),
        makeElement(
          "p",
          "",
          `${item.country} · ${item.degree} · ${item.funding}`
        ),
        makeElement("p", "", `Official deadline: ${item.deadline}`)
      );

      const isSaved = savedScholarships.includes(item.id);
      const addButton = makeElement(
        "button",
        "detail-action",
        isSaved ? "Already in My Scholarships" : "Add to My Scholarships"
      );
      addButton.type = "button";
      addButton.disabled = isSaved;
      addButton.addEventListener("click", () => {
        if (savedScholarships.includes(item.id)) return;

        const updated = [...savedScholarships, item.id];
        if (!writeStorage("scholarGuideSaved", updated)) {
          window.alert("Unable to save this scholarship. Check your browser storage settings.");
          return;
        }

        savedScholarships = updated;
        selectedId = item.id;
        window.dispatchEvent(new Event("scholarGuideSavedChanged"));
        renderSearchResults();
      });
      entry.appendChild(addButton);
      results.appendChild(entry);
    });
  }

  function addCustomScholarship(event) {
    event.preventDefault();

    const form = $("customScholarshipForm");
    const name = $("customScholarshipName").value.trim();
    const deadline = $("customScholarshipDeadline").value.trim();
    const urlInput = $("customScholarshipUrl").value.trim();
    const status = $("customScholarshipStatus");

    if (!name) {
      status.textContent = "Enter the scholarship name.";
      return;
    }

    let url = "";
    if (urlInput) {
      try {
        const parsedUrl = new URL(urlInput);
        if (parsedUrl.protocol !== "https:") {
          status.textContent = "Use the provider’s secure HTTPS website.";
          return;
        }
        url = parsedUrl.href;
      } catch (error) {
        status.textContent = "Enter a valid official website address.";
        return;
      }
    }

    const item = {
      id: `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      name,
      country: "Not specified",
      degree: "Not specified",
      subject: "Not specified",
      funding: "Check official provider",
      tuition: "Check official provider",
      stipend: "Check official provider",
      benefits: "Check official provider",
      description: "Custom scholarship added by you.",
      eligibility: "Check the official provider.",
      deadline: deadline || "Check the official provider",
      url,
      keywords: ""
    };

    customScholarships.push(item);
    if (!saveCustomScholarships()) {
      customScholarships.pop();
      return;
    }

    selectedId = item.id;
    dashboardStatuses[item.id] = "Interested";
    saveStatuses();
    form.reset();
    status.textContent = "Scholarship added to My Scholarships.";
    renderDashboard();
  }

  function init() {
    if (!$("dashboardScholarships") || !$("statusFilter")) return;

    loadStatuses();
    selectedId = getDashboardScholarships()[0]?.id || null;

    $("statusFilter").addEventListener("change", renderDashboard);
    $("refreshDashboardButton")?.addEventListener("click", renderDashboard);
    $("dashboardScholarshipSearch")
      ?.addEventListener("input", renderSearchResults);
    $("customScholarshipForm")
      ?.addEventListener("submit", addCustomScholarship);
    window.addEventListener("scholarGuideSavedChanged", () => {
      const items = getDashboardScholarships();
      if (!items.some(item => item.id === selectedId)) {
        selectedId = items[0]?.id || null;
      }
      renderDashboard();
    });

    renderSearchResults();
    renderDashboard();
  }

  // Prevent duplicate initialization if this module is accidentally included twice.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();


/* ==========================================
   SCHOLAR GUIDE — FEATURE UPGRADE
   Adds student tools to the existing website
========================================== */

const featureStorageKey = "scholarGuideFeatureData";

function getFeatureData() {
    return readStorage(featureStorageKey, {
        applications: {},
        profile: {},
        comparedUniversities: []
    });
}

function saveFeatureData(data) {
    return writeStorage(featureStorageKey, data);
}

function featureElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
}

function makeFeatureButton(label, action) {
    const button = featureElement("button", "", label);
    button.type = "button";
    button.addEventListener("click", action);
    return button;
}

function makeFieldLabel(labelText, control) {
    const wrapper = document.createElement("div");
    const label = featureElement("label", "", labelText);
    label.htmlFor = control.id;
    wrapper.append(label, control);
    return wrapper;
}

function makeSelect(id, options) {
    const select = document.createElement("select");
    select.id = id;

    options.forEach(({ value, label }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        select.appendChild(option);
    });

    return select;
}

function makeInput(id, type, placeholder = "") {
    const input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

function makeTextArea(id, placeholder) {
    const textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.placeholder = placeholder;
    return textarea;
}

function makeFeatureCard(title, description) {
    const card = featureElement("section", "feature-card");
    card.append(
        featureElement("h3", "", title),
        featureElement("p", "", description)
    );
    return card;
}

/* Build the feature area without replacing existing sections. */

const featureHub = featureElement("section", "feature-hub");
featureHub.id = "student-tools";
featureHub.append(
    featureElement("p", "eyebrow", "YOUR PERSONAL WORKSPACE"),
    featureElement("h2", "", "Your Student Dashboard"),
    featureElement(
        "p",
        "feature-intro",
        "Find opportunities, plan applications, and keep track of your next steps."
    )
);

const featureGrid = featureElement("div", "feature-grid");
featureHub.appendChild(featureGrid);

const profileCard = makeFeatureCard(
    "🎯 Scholarship Match Finder",
    "Choose your study preferences to find scholarships that may fit. Always check the official eligibility rules."
);

const matchLevel = makeSelect("matchLevel", [
    { value: "", label: "Any study level" },
    { value: "Bachelor's", label: "Bachelor's" },
    { value: "Master's", label: "Master's" },
    { value: "PhD", label: "PhD" },
    { value: "Exchange", label: "Exchange" }
]);

const matchCountry = makeSelect("matchCountry", [
    { value: "", label: "Any destination" },
    ...[...new Set(scholarships.map(item => item.country))]
        .sort()
        .map(country => ({ value: country, label: country }))
]);

const matchSubject = makeSelect("matchSubject", [
    { value: "", label: "Any subject" },
    ...[...new Set(scholarships.map(item => item.subject))]
        .sort()
        .map(subject => ({ value: subject, label: subject }))
]);

const matchFunding = makeSelect("matchFunding", [
    { value: "", label: "Any funding type" },
    { value: "Fully funded", label: "Fully funded" },
    { value: "Partially funded", label: "Partially funded" },
    { value: "Tuition support", label: "Tuition support" },
    { value: "Varies by award", label: "Varies by award" }
]);

const matchResults = featureElement("div", "feature-result");
matchResults.id = "matchResults";

profileCard.append(
    makeFieldLabel("Preferred study level", matchLevel),
    makeFieldLabel("Preferred destination", matchCountry),
    makeFieldLabel("Subject area", matchSubject),
    makeFieldLabel("Funding preference", matchFunding),
    makeFeatureButton("Find My Matches", renderMatches),
    matchResults
);

function renderMatches() {
    matchResults.replaceChildren();

    const matches = scholarships.filter(item =>
        (!matchLevel.value ||
            item.degree === matchLevel.value ||
            item.degree === "Multiple levels") &&
        (!matchCountry.value || item.country === matchCountry.value) &&
        (!matchSubject.value ||
            item.subject === matchSubject.value ||
            item.subject === "Varies by programme") &&
        (!matchFunding.value ||
            item.funding === matchFunding.value)
    );

    if (!matches.length) {
        matchResults.appendChild(featureElement(
            "p",
            "feature-empty",
            "No matches found. Try changing one or more preferences."
        ));
        return;
    }

    matchResults.appendChild(featureElement(
        "p",
        "",
        `${matches.length} possible match${matches.length === 1 ? "" : "es"} found.`
    ));

    matches.forEach(item => {
        const result = featureElement("div", "feature-list-item");
        result.append(
            featureElement("strong", "", item.name),
            featureElement(
                "p",
                "",
                `${item.country} · ${item.degree} · ${item.funding}`
            ),
            featureElement("p", "", item.eligibility)
        );

        result.appendChild(makeFeatureButton("View Details", () => {
            openScholarshipDetails(item.id);
        }));

        matchResults.appendChild(result);
    });
}

/* Saved scholarship collection */

const savedCard = makeFeatureCard(
    "🔖 Saved Scholarships",
    "Your saved opportunities from the scholarship directory appear here."
);

const savedList = featureElement("div", "feature-list");
savedList.id = "featureSavedList";
savedCard.appendChild(savedList);

function renderSavedScholarships() {
    savedList.replaceChildren();

    const saved = scholarships.filter(item =>
        savedScholarships.includes(item.id)
    );

    if (!saved.length) {
        savedList.appendChild(featureElement(
            "p",
            "feature-empty",
            "No saved scholarships yet. Use the Save button on a scholarship card."
        ));
        return;
    }

    saved.forEach(item => {
        const entry = featureElement("div", "feature-list-item");
        entry.append(
            featureElement("strong", "", item.name),
            featureElement(
                "p",
                "",
                `${item.country} · ${item.degree} · ${item.funding}`
            )
        );

        entry.append(
            makeFeatureButton("View Details", () => {
                openScholarshipDetails(item.id);
            }),
            makeFeatureButton("Remove", () => {
                savedScholarships = savedScholarships.filter(
                    id => id !== item.id
                );
                writeStorage("scholarGuideSaved", savedScholarships);
                renderSavedScholarships();
                renderScholarships();
            })
        );

        savedList.appendChild(entry);
    });
}

/* Application tracker */

const trackerCard = makeFeatureCard(
    "📅 Application Tracker",
    "Track your progress and enter deadlines from the official scholarship announcement."
);

const trackerScholarship = makeSelect("trackerScholarship", [
    { value: "", label: "Choose a scholarship" },
    ...scholarships.map(item => ({
        value: item.id,
        label: item.name
    }))
]);

const trackerDeadline = makeInput("trackerDeadline", "date");

const trackerStatus = makeSelect("trackerStatus", [
    { value: "Interested", label: "Interested" },
    { value: "Preparing documents", label: "Preparing documents" },
    { value: "Ready to apply", label: "Ready to apply" },
    { value: "Submitted", label: "Submitted" },
    { value: "Decision received", label: "Decision received" }
]);

const trackerList = featureElement("div", "feature-list");
trackerList.id = "trackerList";

trackerCard.append(
    makeFieldLabel("Scholarship", trackerScholarship),
    makeFieldLabel("Deadline (confirm it officially)", trackerDeadline),
    makeFieldLabel("Application status", trackerStatus),
    makeFeatureButton("Add / Update Application", saveApplication),
    trackerList
);

function saveApplication() {
    if (!trackerScholarship.value) {
        trackerList.replaceChildren(featureElement(
            "p",
            "feature-empty",
            "Choose a scholarship first."
        ));
        return;
    }

    const data = getFeatureData();

    data.applications[trackerScholarship.value] = {
        deadline: trackerDeadline.value,
        status: trackerStatus.value
    };

    if (!saveFeatureData(data)) {
        window.alert("Could not save your tracker. Check browser storage.");
        return;
    }

    renderApplicationTracker();
}

function renderApplicationTracker() {
    trackerList.replaceChildren();
    const data = getFeatureData();

    const entries = Object.entries(data.applications);

    if (!entries.length) {
        trackerList.appendChild(featureElement(
            "p",
            "feature-empty",
            "No applications tracked yet."
        ));
        return;
    }

    entries.forEach(([id, application]) => {
        const scholarship = scholarships.find(item => item.id === id);
        if (!scholarship) return;

        const entry = featureElement("div", "feature-list-item");
        entry.append(
            featureElement("strong", "", scholarship.name),
            featureElement("p", "", `Status: ${application.status}`),
            featureElement(
                "p",
                "",
                application.deadline
                    ? `Your saved deadline: ${application.deadline}`
                    : "No deadline entered yet."
            )
        );

        if (application.deadline) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const deadlineDate = new Date(
                `${application.deadline}T00:00:00`
            );

            if (!Number.isNaN(deadlineDate.getTime())) {
                const days = Math.ceil(
                    (deadlineDate - today) / 86400000
                );

                const reminder = days < 0
                    ? "Your saved deadline has passed. Check the official page."
                    : days === 0
                        ? "Your saved deadline is today."
                        : `${days} day${days === 1 ? "" : "s"} until your saved deadline.`;

                entry.appendChild(featureElement("p", "", reminder));
            }
        }

        const removeButton = makeFeatureButton("Remove", () => {
            const updated = getFeatureData();
            delete updated.applications[id];
            saveFeatureData(updated);
            renderApplicationTracker();
        });

        entry.appendChild(removeButton);
        trackerList.appendChild(entry);
    });
}

/* University comparison */

const compareCard = makeFeatureCard(
    "🏛️ University Comparison",
    "Select universities to compare their country, study focus, and official website."
);

const compareSelect = makeSelect("compareUniversity", [
    { value: "", label: "Choose a university" },
    ...universities.map((university, index) => ({
        value: String(index),
        label: university.name
    }))
]);

const compareList = featureElement("div", "feature-list");
compareList.id = "compareList";

compareCard.append(
    makeFieldLabel("University", compareSelect),
    makeFeatureButton("Add to Comparison", addUniversityComparison),
    makeFeatureButton("Clear Comparison", clearUniversityComparison),
    compareList
);

function addUniversityComparison() {
    if (compareSelect.value === "") return;

    const data = getFeatureData();
    const index = Number(compareSelect.value);

    if (!Number.isInteger(index) || !universities[index]) return;

    const name = universities[index].name;

    if (!data.comparedUniversities.includes(name)) {
        data.comparedUniversities.push(name);
    }

    data.comparedUniversities = data.comparedUniversities.slice(0, 4);
    saveFeatureData(data);
    renderUniversityComparison();
}

function clearUniversityComparison() {
    const data = getFeatureData();
    data.comparedUniversities = [];
    saveFeatureData(data);
    renderUniversityComparison();
}

function renderUniversityComparison() {
    compareList.replaceChildren();

    const data = getFeatureData();

    if (!data.comparedUniversities.length) {
        compareList.appendChild(featureElement(
            "p",
            "feature-empty",
            "Add up to four universities to compare them."
        ));
        return;
    }

    data.comparedUniversities.forEach(name => {
        const university = universities.find(item => item.name === name);
        if (!university) return;

        const entry = featureElement("div", "feature-list-item");
        entry.append(
            featureElement("strong", "", university.name),
            featureElement("p", "", `Country: ${university.country}`),
            featureElement("p", "", `Focus: ${university.focus}`)
        );

        const link = document.createElement("a");
        link.href = university.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Official website ↗";
        entry.appendChild(link);
        compareList.appendChild(entry);
    });
}

/* SOP planning helper */

const sopCard = makeFeatureCard(
    "✍️ Statement of Purpose Helper",
    "Create a starting outline using your own details. Review and personalise it before using it in an application."
);

const sopCourse = makeInput(
    "sopCourse",
    "text",
    "e.g. MSc Electrical Engineering"
);

const sopInterest = makeInput(
    "sopInterest",
    "text",
    "e.g. embedded systems and automation"
);

const sopGoal = makeInput(
    "sopGoal",
    "text",
    "e.g. develop accessible technology"
);

const sopExperience = makeTextArea(
    "sopExperience",
    "Describe your studies, projects, skills, and relevant experiences."
);

const sopOutput = makeTextArea(
    "sopOutput",
    "Your personalised outline will appear here."
);
sopOutput.readOnly = true;

sopCard.append(
    makeFieldLabel("Course or programme", sopCourse),
    makeFieldLabel("Academic interests", sopInterest),
    makeFieldLabel("Career goal", sopGoal),
    makeFieldLabel("Your experience and projects", sopExperience),
    makeFeatureButton("Create SOP Outline", createSopOutline),
    makeFieldLabel("Editable draft outline", sopOutput),
    makeFeatureButton("Copy Outline", copySopOutline)
);

function createSopOutline() {
    const course = sopCourse.value.trim();
    const interest = sopInterest.value.trim();
    const goal = sopGoal.value.trim();
    const experience = sopExperience.value.trim();

    if (!course || !interest || !goal || !experience) {
        sopOutput.value =
            "Please fill in all four fields before creating your outline.";
        return;
    }

    sopOutput.value =
`STATEMENT OF PURPOSE — DRAFT OUTLINE

1. Introduction
Explain why you want to study ${course}.

2. Academic interests
Describe your interest in ${interest} and what you hope to learn.

3. Relevant experience
Use your own examples:
${experience}

4. Future goals
Explain how this programme may help you work toward ${goal}.

5. Why this programme
Add specific modules, research opportunities, or facilities from the official university website.

6. Conclusion
Summarise your motivation and readiness for the programme.

IMPORTANT:
This is a planning outline, not a finished personal statement. Check the word limit and instructions, use only truthful personal experiences, and edit it into your own voice.`;
}

async function copySopOutline() {
    if (!sopOutput.value.trim()) return;

    try {
        await navigator.clipboard.writeText(sopOutput.value);
        window.alert("Outline copied.");
    } catch {
        sopOutput.focus();
        sopOutput.select();
        window.alert("If copying did not work automatically, copy the selected text manually.");
    }
}

/* Scholarship safety and verification reminder */

const safetyCard = makeFeatureCard(
    "🛡️ Scholarship Safety Check",
    "Use this checklist before sharing documents, paying fees, or submitting an application."
);

const safetyList = featureElement("div", "feature-list");

[
    "Open the provider's official website independently.",
    "Check the latest deadline and eligibility rules.",
    "Confirm the scholarship on the official government or university website.",
    "Be cautious of guaranteed awards, pressure tactics, and requests for unusual payments.",
    "Never share passwords or verification codes with scholarship agents.",
    "Verify any application fee directly with the official provider."
].forEach(message => {
    const item = featureElement("div", "feature-list-item");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    label.append(checkbox, document.createTextNode(message));
    item.appendChild(label);
    safetyList.appendChild(item);
});

safetyCard.append(
    safetyList,
    featureElement(
        "p",
        "feature-warning",
        "This checklist is educational guidance, not a guarantee that an offer is genuine. Confirm details with the official provider."
    )
);

/* Add all new cards to the existing protected content. */

featureGrid.append(
    profileCard,
    savedCard,
    trackerCard,
    compareCard,
    sopCard,
    safetyCard
);

if (protectedContent) {
    protectedContent.appendChild(featureHub);
}

/* Keep saved items in sync with the existing scholarship directory. */

const originalRenderScholarships = renderScholarships;

renderScholarships = function () {
    originalRenderScholarships();
    renderSavedScholarships();
};

/* Render feature data on initial load. */

renderMatches();
renderSavedScholarships();
renderApplicationTracker();
renderUniversityComparison();

/* Ensure protected content is not revealed by Explore while logged out. */

function guardExploreButton(event) {
    if (auth.currentUser) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const authTarget = document.getElementById("auth-section");
    authTarget?.scrollIntoView({ behavior: "smooth" });

    const message = document.getElementById("auth-message");
    if (message) {
        message.textContent = "Please sign up or log in to open your student workspace.";
        message.className = "";
    }
}

document.getElementById("exploreButton")
    ?.addEventListener("click", guardExploreButton, true);

document.getElementById("heroExploreButton")
    ?.addEventListener("click", guardExploreButton, true);

/* Add a dashboard link for convenient navigation. */

const dashboardLink = document.createElement("a");
dashboardLink.href = "#student-tools";
dashboardLink.textContent = "Student Dashboard";
dashboardLink.addEventListener("click", event => {
    event.preventDefault();

    if (!auth.currentUser) {
        document.getElementById("auth-section")
            ?.scrollIntoView({ behavior: "smooth" });
        return;
    }

    exploreMode = true;
    protectedContent.hidden = false;
    document.getElementById("dashboard").hidden = false;

    document.getElementById("student-tools")
        ?.scrollIntoView({ behavior: "smooth" });
});

const mainNav = document.querySelector(".navbar nav");

if (mainNav && !mainNav.querySelector('[href="#student-tools"]')) {
    mainNav.appendChild(dashboardLink);
}
