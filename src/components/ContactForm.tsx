import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="mt-8 px-4 pb-8">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}