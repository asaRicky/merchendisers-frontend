import React, { useState, useEffect } from 'react';

const SettingsForm = ({ onSave }) => {
  // State variables to manage form data
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [theme, setTheme] = useState('light'); // dark or light

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the settings by calling the onSave prop with the updated data
    onSave({
      name,
      picture,
      notificationsEnabled,
      theme,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Profile Picture:</label>
        <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
      </div>
      <div>
        <label>Enable Notifications:</label>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={(e) => setNotificationsEnabled(e.target.checked)}
        />
      </div>
      <div>
        <label>Theme:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <button type="submit">Save Settings</button>
    </form>
  );
};

const Settings = () => {
  // State variables to manage the manager's settings
  const [settings, setSettings] = useState({
    name: '',
    picture: '',
    notificationsEnabled: false,
    theme: 'light',
  });

  // Load the manager's settings from backend on component mount
  useEffect(() => {
    // Fetch the manager's settings from the backend and update the state
    // For example:
    // fetch('/api/getSettings')
    //   .then((response) => response.json())
    //   .then((data) => setSettings(data))
    //   .catch((error) => console.error('Error fetching settings:', error));
  }, []);

  // Save the manager's settings to the backend whenever there are changes
  useEffect(() => {
    // Save the settings to the backend by calling the API
    // For example:
    // fetch('/api/saveSettings', {
    //   method: 'POST',
    //   body: JSON.stringify(settings),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log('Settings saved:', data))
    //   .catch((error) => console.error('Error saving settings:', error));
  }, [settings]);

  // Handle form submission from the SettingsForm
  const handleSaveSettings = (updatedSettings) => {
    setSettings(updatedSettings);
  };

  return (
    <div>
      <h1>Settings</h1>
      <SettingsForm onSave={handleSaveSettings} />
    </div>
  );
};

export default Settings;
