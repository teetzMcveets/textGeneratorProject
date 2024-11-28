import { relationshipDescriptions, relationshipTips } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const resultDisplay = document.getElementById('compatibilityResult');

    submitBtn.addEventListener('click', () => {
        const userStarSign = document.getElementById('userStarSign').value;
        const partnerStarSign = document.getElementById('partnerStarSign').value;

        if (!userStarSign || !partnerStarSign) {
            resultDisplay.textContent = "Please select both star signs.";
            return;
        }

        const key = `${userStarSign}_${partnerStarSign}`;
        const reverseKey = `${partnerStarSign}_${userStarSign}`;
        const description = relationshipDescriptions[key] || relationshipDescriptions[reverseKey];

        const randomPercentage = Math.floor(Math.random() * 100) + 1;

        const randomTip = relationshipTips[Math.floor(Math.random() * relationshipTips.length)]

        if (description) {
            resultDisplay.innerHTML = 
            `<p>${description}</p>
            <p><strong>Chances of success: ${randomPercentage}%</strong></p>
            <p><em>Tip to improve your relationship: ${randomTip}</em></p>`;
        } else {
            resultDisplay.textContent = 'No description found for this pairing!';
        }
    });
});