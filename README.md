# Datasub QA Cypress Project

Автотесты для формы "Request A Quote" с использованием Cypress.

## 📁 Структура

- 5 автотестов (2 happy path, 3 negative cases)
- Используется Cypress 13+

## 🚀 Запуск

```bash
npm install
npm run test   # Headless
npm run test:open   # UI
```

### Тесты
- Успешная отправка полной формы
- Ошибка при пустой форме
- Ошибка при некорректном email
- Защита от двойной отправки
- Отправка с минимальным набором данных
