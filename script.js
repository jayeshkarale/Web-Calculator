  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.button');
  let currentInput = '';

  function updateDisplay() {
    display.textContent = currentInput || '0';
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (button.classList.contains('clear')) {
        currentInput = '';
      } else if (button.classList.contains('delete')) {
        currentInput = currentInput.slice(0, -1);
      } else if (button.classList.contains('equal')) {
        try {
          currentInput = eval(currentInput).toString();
        } catch {
          currentInput = 'Error';
        }
      } else {
        if (currentInput === 'Error') {
          currentInput = value;
        } else {
          currentInput += value;
        }
      }
      updateDisplay();
    });
  });

  // Keyboard input support
  document.addEventListener('keydown', (e) => {
    const allowedKeys = '0123456789.+-*/';
    if (allowedKeys.includes(e.key)) {
      if (currentInput === 'Error') currentInput = '';
      currentInput += e.key;
    } else if (e.key === 'Backspace') {
      currentInput = currentInput.slice(0, -1);
    } else if (e.key === 'Enter') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else if (e.key.toLowerCase() === 'c') {
      currentInput = '';
    }
    updateDisplay();
  });

  // Dark mode toggle
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }