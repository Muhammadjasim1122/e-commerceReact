import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const Notification = ({ notification, onClose }) => {
  if (!notification) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-in">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <p className="text-gray-900 font-medium">{notification.message}</p>
          <button
            onClick={onClose}
            className="ml-auto p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
