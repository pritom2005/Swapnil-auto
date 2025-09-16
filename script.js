const translations = {
    'bn': {
        'shopName': 'স্বপ্নিল অটো',
        'loginPrompt': 'মোবাইল নম্বর অথবা ইমেইল দিয়ে লগইন করুন',
        'phoneEmailPlaceholder': 'মোবাইল নম্বর অথবা ইমেইল',
        'getOtpBtn': 'ওটিপি নিন',
        'otpPrompt': 'আপনার মোবাইলে পাঠানো ওটিপি দিন',
        'otpPlaceholder': 'ওটিপি দিন',
        'namePlaceholder': 'আপনার নাম লিখুন',
        'loginBtn': 'লগ ইন করুন',
        'backBtn': 'ফিরে যান',
        'brandPrompt': 'অনুগ্রহ করে আপনার গাড়ির ব্র্যান্ড নির্বাচন করুন',
        'brandDefault': 'ব্র্যান্ড নির্বাচন করুন',
        'modelPrompt': 'আপনার গাড়ির মডেল বেছে নিন',
        'modelDefault': 'মডেল নির্বাচন করুন',
        'categoriesTitle': 'পণ্যের বিভাগ',
        'decorationItems': 'সাজসজ্জার জিনিসপত্র',
        'androidDvd': 'অ্যান্ড্রয়েড/ডিভিডি অপশন',
        'ledLights': 'এলইডি লাইট',
        'airFreshener': 'গাড়ির এয়ার ফ্রেশনার / গাড়ির পারফিউম',
        'phoneHolder': 'ফোন হোল্ডার',
        'usbCharger': 'ইউএসবি চার্জার',
        'carWash': 'কার ওয়াশ',
        'wiper': 'ওয়াইপার',
        'langToggle': 'English',
        'welcomeMessage': 'স্বাগতম, '
    },
    'en': {
        'shopName': 'SWAPNIL AUTO',
        'loginPrompt': 'Log in with mobile number or email',
        'phoneEmailPlaceholder': 'Mobile Number or Email',
        'getOtpBtn': 'Get OTP',
        'otpPrompt': 'Enter the OTP sent to your mobile',
        'otpPlaceholder': 'Enter OTP',
        'namePlaceholder': 'Enter Your Name',
        'loginBtn': 'Log In',
        'backBtn': 'Go back',
        'brandPrompt': 'Please select your car brand',
        'brandDefault': 'Select a brand',
        'modelPrompt': 'Choose Your Car Model',
        'modelDefault': 'Select a model',
        'categoriesTitle': 'Product Categories',
        'decorationItems': 'Decoration Items',
        'androidDvd': 'Android/DVD Option',
        'ledLights': 'LED Lights',
        'airFreshener': 'Car Air Freshener / Car Perfume',
        'phoneHolder': 'Phone Holder',
        'usbCharger': 'USB Charger',
        'carWash': 'Car Wash',
        'wiper': 'Wiper',
        'langToggle': 'বাংলা',
        'welcomeMessage': 'Welcome, '
    }
};

const carData = {
    'Toyota': ['Corolla', 'Corolla Altis', 'Camry', 'Prius', 'Fortuner', 'Hilux', 'Land Cruiser'],
    'Honda': ['Civic', 'City', 'Accord', 'CR-V', 'BR-V', 'Jazz'],
    'Nissan': ['X-Trail', 'Juke', 'Sunny', 'Teana', 'Patrol'],
    'Mitsubishi': ['Pajero', 'Outlander', 'Lancer', 'Mirage'],
    'Suzuki': ['Swift', 'Celerio', 'Vitara Brezza', 'Wagon R'],
    'Hyundai': ['Tucson', 'Creta', 'Sonata', 'Elantra', 'Accent'],
    'Kia': ['Sportage', 'Sorento', 'Picanto', 'Stonic'],
    'BMW': ['3 Series', '5 Series', 'X3', 'X5', 'Z4'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLE', 'GLS'],
    'Audi': ['A3', 'A4', 'A6', 'Q3', 'Q7'],
    'Ford': ['Ranger', 'Mustang', 'Explorer', 'Everest'],
    'Mahindra': ['Scorpio', 'Bolero', 'XUV500', 'Thar'],
    'Tata': ['Nexon', 'Harrier', 'Safari', 'Tiago'],
    'Isuzu': ['D-Max', 'MU-X'],
    'Proton': ['X70', 'Saga'],
    'Mazda': ['Mazda 2', 'Mazda 3', 'Mazda 6', 'CX-3', 'CX-30', 'CX-5', 'CX-9', 'MX-5 Miata']
};

const productCategories = ['decorationItems', 'androidDvd', 'ledLights', 'airFreshener', 'phoneHolder', 'usbCharger', 'carWash', 'wiper'];

let currentLang = 'bn';

const langToggleBtn = document.getElementById('lang-toggle');
const shopNameEl = document.getElementById('shop-name');

const loginSection1 = document.getElementById('login-section-1');
const loginPromptEl = document.getElementById('login-prompt');
const phoneEmailInput = document.getElementById('phone-email');
const getOtpBtn = document.getElementById('get-otp-btn');

const loginSection2 = document.getElementById('login-section-2');
const otpPrompt = document.getElementById('otp-prompt');
const otpInput = document.getElementById('otp-input');
const nameInput = document.getElementById('name-input');
const loginBtn = document.getElementById('login-btn');
const backBtn = document.getElementById('back-btn');

const mainContent = document.getElementById('main-content');
const welcomeMessage = document.getElementById('welcome-message');
const brandPrompt = document.getElementById('brand-prompt');
const carBrandSelect = document.getElementById('car-brand');
const modelSelectionDiv = document.getElementById('model-selection');
const modelPrompt = document.getElementById('model-prompt');
const carModelSelect = document.getElementById('car-model');
const productCategoriesDiv = document.getElementById('product-categories');
const categoriesTitle = document.getElementById('categories-title');
const productList = document.querySelector('#product-categories ul');

const updateLanguage = () => {
    const lang = translations[currentLang];
    shopNameEl.textContent = lang.shopName;
    loginPromptEl.textContent = lang.loginPrompt;
    phoneEmailInput.placeholder = lang.phoneEmailPlaceholder;
    getOtpBtn.textContent = lang.getOtpBtn;
    otpPrompt.textContent = lang.otpPrompt;
    otpInput.placeholder = lang.otpPlaceholder;
    nameInput.placeholder = lang.namePlaceholder;
    loginBtn.textContent = lang.loginBtn;
    backBtn.textContent = lang.backBtn;
    brandPrompt.textContent = lang.brandPrompt;
    carBrandSelect.options[0].textContent = lang.brandDefault;
    modelPrompt.textContent = lang.modelPrompt;
    carModelSelect.options[0].textContent = lang.modelDefault;
    categoriesTitle.textContent = lang.categoriesTitle;
    langToggleBtn.textContent = currentLang === 'bn' ? 'English' : 'বাংলা';
    
    // Update product category names
    productList.innerHTML = '';
    productCategories.forEach(item => {
        const li = document.createElement('li');
        li.className = 'bg-indigo-50 dark:bg-indigo-900 p-3 rounded-lg shadow-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors cursor-pointer';
        li.textContent = lang[item];
        productList.appendChild(li);
    });
};

const populateBrands = () => {
    for (const brand in carData) {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        carBrandSelect.appendChild(option);
    }
};

const populateModels = (brand) => {
    carModelSelect.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = translations[currentLang].modelDefault;
    carModelSelect.appendChild(defaultOption);

    if (carData[brand]) {
        carData[brand].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            carModelSelect.appendChild(option);
        });
    }
};

// Event Listeners
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'bn' ? 'en' : 'bn';
    updateLanguage();
});

getOtpBtn.addEventListener('click', () => {
    const emailOrPhone = phoneEmailInput.value;
    if (emailOrPhone) {
        loginSection1.classList.add('hidden');
        loginSection2.classList.remove('hidden');
    }
});

backBtn.addEventListener('click', () => {
    loginSection2.classList.add('hidden');
    loginSection1.classList.remove('hidden');
});

loginBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const otp = otpInput.value;
    if (name && otp) {
        loginSection2.classList.add('hidden');
        mainContent.classList.remove('hidden');
        welcomeMessage.textContent = translations[currentLang].welcomeMessage + name;
        populateBrands();
    }
});

carBrandSelect.addEventListener('change', (event) => {
    const selectedBrand = event.target.value;
    populateModels(selectedBrand);
    modelSelectionDiv.classList.remove('hidden');
    productCategoriesDiv.classList.add('hidden');
});

carModelSelect.addEventListener('change', () => {
    productCategoriesDiv.classList.remove('hidden');
});

// Initial setup
updateLanguage();
