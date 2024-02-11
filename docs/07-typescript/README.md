# Projekt: TypeScript & React

## Dodanie TypeScript do projektu

Do stworzonej wcześniej aplikacji dodaj TypeScript.

1. Zainstaluj zależności NPM:
   - `typescript`,
   - `@types/react`,
   - `@types/react-dom`.
2. Stwórz konfigurację TypeScript (`tsconfig.json`). Możesz skorzystać z [przykładowej konfiguracji](https://www.totaltypescript.com/tsconfig-cheat-sheet#quickstart) rozszerzonej o [opcje wymagane przez React](https://react.dev/learn/typescript#adding-typescript-to-an-existing-react-project) lub [przykładowego projektu Vite z TypeScript](https://stackblitz.com/edit/vitejs-vite-3z4kw8?file=tsconfig.json&terminal=dev)

---

💡

Pamiętaj, że w TypeScript nie chodzi o dodawanie typu do każdej pojedynczej funkcji czy zmiennej. TypeScript bardzo dobrze radzi sobie z wnioskowaniem (ang. _inference_) typów. Wykorzystaj to.

---

ℹ️

Nie jest konieczna migracja całego projektu na raz. Dodawaj typy plik za plikiem. Pamiętaj też o zmianie rozszerzenia pliku z `.js` na `.ts` i `.jsx` na `.tsx`.

---

## Właściwości komponentu

Zacznij migrację od właściwości (`props`) pojedynczej pozycji w [cenniku](../01-podstawy/README.md#cennik).

## Stan komponentu

[Komponent ze sloganem](../02-stan-komponentu/README.md#statyczny-slogan) zmodyfikuj tak, by stan był zabezpieczony przed podaniem nieodpowiedniej wartości (np. liczby).

## Dane zewnętrzne

[Galeria](../01-podstawy/README.md#galeria), rozbudowana o [ładowanie danych za pomocą protokołu HTTP](../03-http/README.md#portfolio-z-internetu), korzysta z zestawu danych opisujących zdjęcia.

Dodaj typowanie w miejscu wczytywania danych.

## Kontekst

Dodaj typowanie do [kontekstu kolorystyki aplikacji](../06-context/README.md#kolorystyka-aplikacji--ciemny-i-jasny-motyw).
