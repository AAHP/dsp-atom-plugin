'use babel';

import store from '../store';

let activated = false;

const onTreeViewClick = (e, treeView) => {
  e.preventDefault();
  e.stopPropagation();
  const entry = e.target.closest('.entry');
  if (!entry) {
    return;
  }

  store.changeItem('lastSelectedPath', treeView.selectedPath);

  if (entry.classList.contains('directory')) {
    store.changeItem('lastSelectedPathType', 'directory');
  } else {
    store.changeItem('lastSelectedPathType', 'file');
  }
}

const activatePackage = () => {
  atom
    .packages
    .activatePackage('tree-view')
    .then(
      package => {
        activated = true;
        const { treeView } = package.mainModule;
        const isFile = treeView.element.getElementsByClassName('selected')[0] && treeView.element.getElementsByClassName('selected')[0].classList.contains('file');
        store.changeItem('lastSelectedPath', treeView.selectedPath);
        store.changeItem('lastSelectedPathType', isFile ? 'file' : 'directory');
        treeView.element.addEventListener('click', (e) => onTreeViewClick(e, treeView));
      },
      err => console.log('error activating tree view package', err),
    );
}

export const registerHandleClickTreeView = () => {
  const paths = atom.project.getPaths();

  if (paths.length && !activated) {
    activatePackage();
  } else if (!paths.length) {
    store.changeItem('lastSelectedPath', null);
    store.changeItem('lastSelectedPathType', null);
    activated = false;
  }

  atom.project.onDidChangePaths(registerHandleClickTreeView);
};
