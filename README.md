# Сайт — Петър Линдо

Статичен сайт, готов за Netlify. Без билд стъпка, без зависимости. ~2.3 MB общо.

```
index.html          начало
blagodaria.html     страница след изпратена форма
assets/styles.css   всички стилове
assets/main.js      поява на секциите, hero видео, година, форма
assets/img/         снимки
assets/video/       hero.mp4 / hero.webm (по избор)
netlify.toml        headers
robots.txt
design/             COMMIT-SHEET.md, DESIGN.md
```

## Структура на страницата

1. **Hero** — партита, костюми, емоция. Видео слот + постер.
2. **Три формата** — тематични партита, корпоративни събития, приключенски мисии.
3. **Манифест** — защо костюмът работи.
4. **Галерия** — 7 кадъра, masonry.
5. **Камчия** — отделна секция: 4 активности във `<details>` (клик → повече
   информация), параметри и CTA за обаждане.
6. **Петър** — портрет и текст.
7. **Контакт** — телефон, форма с избор на продукт.

## Качване в Netlify

**Drag & drop:** `Add new site` → `Deploy manually` → пусни папката или zip-а.

**Git:** `git init && git add -A && git commit -m "..."` → `Import an existing project`.
Build command **празно**, publish directory **`.`**.

**CLI:** `npx netlify-cli deploy --prod --dir .`

## Формата

`data-netlify="true"` — заявките отиват в `Site → Forms → zapitvane`.
Известия: `Forms → zapitvane → Form notifications → Email`.

## Какво остава

- [ ] Две снимки от Камчия (`03-reka`, `04-gora`) — виж `PHOTOS.md`
- [ ] Hero видео, ако ще се снима
- [ ] Текстът за Петър — чернова
- [ ] Имейл `info@kamchiaretreat.bg` — placeholder
- [ ] Съгласия за лицата
- [ ] Проверка на текстовете за форматите от Петър

## Локален преглед

```bash
python3 -m http.server 8000   # http://localhost:8000
```
