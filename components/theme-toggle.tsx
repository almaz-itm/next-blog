"use client"

const ThemeToggle = () => {
  function toggleTheme () {
    console.log('Toggle')
  }
  return (<button className="theme-toggle" type="button" onClick={toggleTheme}>
    Тёмная тема
  </button>);
}

export default ThemeToggle;