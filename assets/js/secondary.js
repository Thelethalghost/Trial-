const background = document.querySelector("#killme");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const blurAmount = scrollY / 300;
    const brightAmount =  scrollY / 65; 
    const backgroundHeight = 20 + scrollY / 60;


    background.style.filter = `blur(${blurAmount}px) brightness(${100 - brightAmount}%)`;
    background.style.top = `${-backgroundHeight}%`;

    if (scrollY > 600) {
        document.querySelector('#header').classList.add('header-scrolled');
    }
    if (scrollY < 600){
        document.querySelector('#header').classList.remove('header-scrolled');
    }

});


const searchInput = document.getElementById('search-input');
const resultsContainer = document.querySelector('.search-result');
const keywordList = [
    'machine learning engineers',
'generative ai specialist',
'.ds_store',
'dall-e artists',
'ai developers',
'ai chatbot developers',
'microsoft azure ai engineer',
'natural langauge processing',
'google bert specialist',
'deep learning engineers',
'ai writers',
'ai engineers',
'ai text-to-speech',
'gpt-3 specialist',
'openai codex specialists',
'ai designers',
'ontologist',
'ai researchers',
'prompt engineers',
'data scientists',
'ai content creators',
'ai artist',
'sales mangers',
'lead generation specialists',
'sales writing',
'customers service representatives',
'product marketers',
'ppc specialists',
'marketing managers',
'seo specialists',
'sales optimisation',
'marketers',
'content marketers',
'brand marketers',
'telemarketers',
'copywriters',
'sales copywriters',
'direct marketers',
'b2b marketers',
'direct sales representatives',
'data analysts',
'sales representatives',
'marketing consultants',
'account manager',
'sales consultants',
'sales strategists',
'marketing strategists',
'sem specialists',
'influencer marketers',
'social media managers',
'project manager',
'internet marketers',
'affiliate marketing',
'content strategists',
'full stack developers',
'email marketers',
'digital marketers',
'marketing manager',
'art directors',
'digital artist',
'.ds_store',
'ux designers',
'flyer designers',
'editorial designers',
'creative startegists',
'motion graphics designers',
'industrial designers',
'book cover designers',
'web design consultants',
'photo editors',
'brand identity designers',
'marketers',
'information designers',
'creative directors',
'fashion designers',
'social media designers',
'cad designers',
'graphic designers',
'architects',
'brochure designers',
'architectural designs',
'presentation designers',
'logo designer',
'interviewers',
'character designers',
'3d designers',
'ui designers',
'communication designers',
'typography designers',
'creative designers experts',
'illustrators',
'social media design',
'chief architect designer',
'seo specialist',
'drafting specialist',
'civil engineer',
'architectural modelers',
'lightining designer',
'infrastructure engineers',
'autocad programmers',
'naval architects',
'electrical engineers',
'landscape architects',
'industrial engineers',
'2d drafter',
'hydraulic engineers',
'strucutral engineers',
'home designer',
'robotics engineers',
'autocad experts',
'design engineers',
'mechanical engineer',
'environmental designer',
'urban designers',
'aerospace engineer',
'fire protection engineer',
'interior architect',
'parametric engineers',
'architectural rendering specialist',
'engineering consultants',
'cicd engineer',
'rust developers',
'devops engineers',
'game developer',
'scala developers',
'css developers',
'fullstack developers',
'data analyst',
'shopify developers',
'java developers',
'software qa testers',
'andriod developers',
'angular js developer',
'aws developers',
'data visulaization consultants',
'ios developers',
'vue js developers',
'python developers',
'cms developers',
'c# developers',
'word press developers',
'mobile app developers',
'api developers',
'ruby developers',
'back end developers',
'c++ developers',
'front end developers',
'web developers',
'react ntive developers',
'mysql developers',
'software developers',
'html5 developers',
'golang developer',
'unity 3d developers',
'.net developers',
'ruby on rail developer',
'e-commerce developers',
'enter prise software developers',
'magento developers',
];

function replaceSpacesWithUnderscores(inputString) {
    return inputString.replace(/ /g, '_');
}

searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase();
    const matchingKeywords = keywordList.filter(keyword => keyword.includes(searchText));

    if (searchText === '') {
        resultsContainer.innerHTML = '';
    } else {
        displayResults(matchingKeywords, searchText);
    }
});

function displayResults(results, searchText) {
    if (results.length === 0) {
        resultsContainer.innerHTML = '<a><li>No results found. </li></a>';
    } else {
        let temp = '';

        for (i = 0; i < results.length; i++){
            t = results[i].indexOf(searchText);
            temp = temp + '<a href = \"template.html#' + replaceSpacesWithUnderscores(results[i]) +'\">' + '<li id=\"btn' + i  + '\"' + '>' + results[i].slice(0, t) + '<b>' + results[i].slice(t, t + searchText.length) + '</b>' + results[i].slice(t + searchText.length, results[i].length)  + ' </li> </a> ';

        }
        // temp = temp + '</ul>';
        resultsContainer.innerHTML = temp;
        
    }
}

