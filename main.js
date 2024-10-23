function showPopup(popupType) {
    // create Overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    // create popup box
    const popupBox = document.createElement('div');
    popupBox.classList.add('popup', popupType);
    const icon = document.createElement('i');
    if (popupType === 'success') {
        icon.classList.add('fas', 'fa-check-circle', 'icon');
    }
    else if (popupType === 'error') {
        icon.classList.add('fas', 'fa-times-circle', 'icon');
    }
    else if (popupType === 'warning') {
        icon.classList.add('fas', 'fa-exclamation-circle', 'icon');
    }
    else if (popupType === 'info') {
        icon.classList.add('fas', 'fa-info-circle', 'icon');
    }
    const head = document.createElement('h2');
    head.innerHTML = `${popupType}!`;
    const headMsg = document.createElement('p');
    if (popupType === 'success') {
        headMsg.innerHTML = 'Your action has been completed successfully.';
    }
    else if (popupType === 'error') {
        headMsg.innerHTML = 'Something went wrong. Please try again.';
    }
    else if (popupType === 'warning') {
        headMsg.innerHTML = 'There might be potential issues with your action.';
    }
    else if (popupType === 'info') {
        headMsg.innerHTML = 'Here is some useful information you might need.';
    }
    const okBtn = document.createElement('button');
    okBtn.innerHTML = 'OK';
    popupBox.appendChild(icon);
    popupBox.appendChild(head);
    popupBox.appendChild(headMsg);
    popupBox.appendChild(okBtn);
    document.body.appendChild(popupBox);
    // close popup on click on overlay or OK_BTN
    overlay.addEventListener('click', () => {
        popupBox.remove();
        overlay.remove();
    })
    okBtn.addEventListener('click', () => {
        popupBox.remove();
        overlay.remove();
    });
}