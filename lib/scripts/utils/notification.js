'use babel';

import path from 'path';
import { notificationType } from '../../constants';

const canUseDesktopNotifications = () => Notification && Notification.permission === 'granted';

const notify = (title, message, type = 'info') => {
    if (canUseDesktopNotifications()) {
      const options = {
          body: message,
          icon: path.join(__dirname, '..', '..', 'images', `ico-toast-${type}.png`),
        };
      const notification = new Notification(title, options);
    }
  };

export const notifySuccess = (message) => {
  notify('Success', message, notificationType.SUCCESS);
};

export const notifyInfo = (message) => {
  notify('Info', message, notificationType.INFO);
};

export const notifyWarning = (message) => {
  notify('Warning', message, notificationType.WARNING);
};

export const notifyError = (message) => {
  notify('Error', message, notificationType.ERROR);
};
