const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  // Определяем task для создания папки
  on('task', {
    createFolder(folderPath) {
      const dir = path.resolve(folderPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      return null; // Возвращаем null, чтобы обозначить успешное выполнение
    }
  });
};
