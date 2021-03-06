'use babel';

const { ipcRenderer } = require('electron');
const docReady = require('doc-ready');
let promptId;
let promptOptions;

window.onerror = (error) => {
  if (promptId) {
    promptError('An error has occured on the prompt window: \n' + error);
  }
};

const promptError = (e) => {
  if (e instanceof Error) {
    e = e.message;
  }
  ipcRenderer.sendSync('prompt-error:' + promptId, e);
}

const promptCancel = () => {
  ipcRenderer.sendSync('prompt-post-data:' + promptId, null);
}

const promptSubmit = () => {
  const dataEl = document.getElementById('data');
  let data = null;

  if (promptOptions.type === 'text') {
    data = 'ok';
  } else if (promptOptions.type === 'input') {
    data = dataEl.value;
  } else if (promptOptions.type === 'select') {
    if (promptOptions.selectMultiple) {
      data = dataEl.querySelectorAll('option[selected]').map((o) => o.getAttribute('value'));
    } else {
      data = dataEl.value;
    }
  }

  ipcRenderer.sendSync('prompt-post-data:' + promptId, data);
};

docReady(() => {
  promptId = document.location.hash.replace('#', '');

  try {
    promptOptions = JSON.parse(ipcRenderer.sendSync('prompt-get-options:' + promptId));
  } catch (e) {
    return promptError(e);
  }

  document.getElementsByTagName('body')[0].style.backgroundColor = promptOptions.background;
  document.getElementById('label').style.color = promptOptions.color;

  const okBtn = document.getElementById('ok');
  okBtn.innerText = promptOptions.buttons.ok;
  okBtn.addEventListener('click', () => promptSubmit());

  const cancelBtn = document.getElementById('cancel');
  cancelBtn.innerText = promptOptions.buttons.cancel;
  cancelBtn.addEventListener('click', () => promptCancel());

  document.getElementById('label').textContent = promptOptions.label;
  document.getElementById('label').title = promptOptions.label;
  const dataContainerEl = document.getElementById('data-container');

  let dataEl;
  if (promptOptions.type === 'input') {
    dataEl = document.createElement('input');
    dataEl.setAttribute('type', 'text');

    if (promptOptions.value) {
      dataEl.value = promptOptions.value;
    } else {
      dataEl.value = '';
    }

    if (promptOptions.inputAttrs && typeof(promptOptions.inputAttrs) === 'object') {
      for (let k in promptOptions.inputAttrs) {
        if (!promptOptions.inputAttrs.hasOwnProperty(k)) continue;
        dataEl.setAttribute(k, promptOptions.inputAttrs[k]);
      }
    }

    dataEl.addEventListener('keyup', (e) => {
      e.which = e.which || e.keyCode;
      if (e.which == 13) {
        promptSubmit();
      }
    });
  } else if (promptOptions.type === 'select') {
    dataEl = document.createElement('select');
    let optionEl;

    for(let k in promptOptions.selectOptions) {
      if (!promptOptions.selectOptions.hasOwnProperty(k)) continue;

      optionEl = document.createElement('option');
      optionEl.setAttribute('value', k);
      optionEl.textContent = promptOptions.selectOptions[k];
      if (k === promptOptions.value) {
          optionEl.setAttribute('selected', 'selected');
      }

      dataEl.appendChild(optionEl);
    }
  }

  if (dataEl) {
    dataContainerEl.appendChild(dataEl);
    dataEl.setAttribute('id', 'data');
    dataEl.focus();
  }

});
