# Dev Tools Showcase

## Огляд проекту
Dev Tools Showcase — веб-сервіс, що демонструє колекцію практичних інструментів, прикладів та описів для розробників. Мета проєкту — зібрати базові та корисні інструменти в одному місці.

## Основні сторінки та функції

**Home (index.ejs)**  
Містить:  
- Hero секція — фонове зображення, заголовок, кнопка переходу  
- Короткий опис призначення сайту  
- Популярні інструменти (посилання на Tool Details)  
- Кнопки для переходу до повного списку  

**Tools Page (tools.ejs)**  
Містить:  
- Список інструментів у вигляді карток  
- Назва інструменту + опис  
- Кнопка Details  
- Адаптивна багатоколонкова сітка
  
Особливості:  
- Сортується на різних екранах по 1–3 колонки  
- Використано BEM структуру  
- Типографіка оформлена через міксіни  

**Tool Details (tool-details.ejs)**  
Для кожного інструмента відображається:  
- Назва  
- Опис  
- Призначення  
- Приклади використання  

**About Page (about.ejs)**  
Містить:  
- Інформацію про мету сервісу  
- Опис функціоналу  
- Принципи формування інструментів  
- Зображення + текст  

## Проект оптимізовано під
- мобільні пристрої  
- десктоп  
- планшети  

**Адаптивний дизайн**  
Реалізовано 3 точки перелому:  
- Desktop: 1024px+  
- Tablet: 600px – 1024px  
- Mobile: до 600px

Використано:  
- Flex-layout  
- Grid-layout  
- Кнопки з адаптивними падінгами  
- Текст на clamp-функціях  

## Дизайн системи

**Кольори:**  
- $primary-color: #F2F2F2  
- $secondary-color: #333333  
- $white: #FFFFFF  
- $attantion-color: #FF6961  
- $background-color: #F7F7F7  

**Спільні UI-елементи:**  
- кнопки: learn more, see list, go back  
- card layout  
- секційні заголовки  


**Переваги:**  
- Модульність  
- Легке масштабування  
- Чітка BEM-структура  

**Реалізовані міксіни та функції**  
*Міксіни:* flex-center, grid, container, exoFont, sandFont  
*Функції:* rem(), color-mix() (міксування кольорів кнопок)  

## Адаптивні зображення (responsive picture)
Використано `<picture>` з: webp, png, srcset, media queries  
Приклад:
html

<img width="1873" height="924" alt="image" src="https://github.com/user-attachments/assets/48c261a6-29c3-4f0d-8890-f2772a2f3838" />
<img width="1874" height="929" alt="image" src="https://github.com/user-attachments/assets/c62d3c6b-bd85-40f5-99c6-f7c959db16db" />


## Стек
- bbggvjggtHTML + EJS (template rendering)
- SCSS (7-1 architecture)
- CSS animations
- Responsive Images
- JavaScript (для кнопок і переходів)



