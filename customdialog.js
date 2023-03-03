export function customAlert(message) {
    const dialog = document.getElementById('custom-alert');
    dialog.querySelector('p').textContent = message;
    // dialog.showModal();
    
    const okBtn = dialog.querySelector('#custom-alert-ok');
    okBtn.addEventListener('click', () => {
        dialog.close();
    });
} 

export function showConfirm() {
    const dialog = document.getElementById("custom-confirm");
    const yesBtn = dialog.querySelector('#custom-confirm-yes');
    const noBtn = dialog.querySelector('#custom-confirm-no');
    const customresult = document.getElementById("customresult");

    yesBtn.addEventListener('click', () => {
        customresult.textContent = "Confirm Result: True";
        dialog.close();
    });

    noBtn.addEventListener('click', () => {
        customresult.textContent = "Confirm Result: False";
        dialog.close();
    });
    dialog.showModal();
}

export function showPrompt() {
    const dialog = document.getElementById("custom-prompt");
    const sumbitBtn = dialog.querySelector('#custom-prompt-submit');
    const cancelBtn = dialog.querySelector('#custom-prompt-cancel');
    const customresult = document.getElementById("customresult");

    sumbitBtn.addEventListener('click', () => {
        const userInput = document.getElementById("promptResponse").value;
        if (userInput === null || userInput === "") {
            customresult.innerHTML = `User didn't enter anything`;
        } else {
            const sanitizedInput = DOMPurify.sanitize(userInput);
            customresult.innerHTML = `The sanitized value entered by the user is: ${sanitizedInput}`;
        }
        dialog.close();
    });

    cancelBtn.addEventListener('click', () => {
        customresult.innerHTML = `User cancelled the input`;
        dialog.close();
    })

    dialog.showModal();
}

