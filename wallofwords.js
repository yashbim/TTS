window.addEventListener('DOMContentLoaded', () => {
    const wall = document.querySelector('.wall-of-words');
    const words = wall.querySelectorAll('span');
    const wallWidth = wall.offsetWidth;
    const wallHeight = wall.offsetHeight;
  
    const totalWords = words.length;
    const gridSize = Math.ceil(Math.sqrt(totalWords)); // Determine grid size
    const gridWidth = wallWidth / gridSize;
    const gridHeight = wallHeight / gridSize;
  
    let rowIndex = 0;
    let colIndex = 0;
  
    words.forEach(word => {
      const x = colIndex * gridWidth;
      const y = rowIndex * gridHeight;
  
      word.style.left = `${x}px`;
      word.style.top = `${y}px`;
  
      colIndex++;
      if (colIndex >= gridSize) {
        colIndex = 0;
        rowIndex++;
      }
    });
  });
  