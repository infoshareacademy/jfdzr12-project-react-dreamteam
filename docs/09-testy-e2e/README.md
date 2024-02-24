# Projekt: Testy E2E

Na potrzeby przeprowadzenia testów w katalogu [`dummy`](../../dummy) stworzona została przykładowa aplikacja, a w
katalogu [`dummy-e2e`](../../dummy-e2e) projekt testów E2E.

Przed przystąpieniem do zadań koniecznie zainstaluj zależności w obu projektach, a następnie uruchom aplikację _Dummy_ (
jest wymagana do przeprowadzenia testów).

Wszelkie ścieżki podane poniżej są relatywne dla katalogu wspomnianego projektu - [`dummy-e2e`](../../dummy-e2e).

---

Aplikację _Dummy_ uruchom z poziomu katalogu [`dummy`](../../dummy) poleceniem `npm run dev`.

Konsolę Cypress możesz otworzyć z poziomu katalogu [`dummy-e2e`](../../dummy-e2e) poleceniem `npm run open`.

Testy E2E możesz też uruchomić z poziomu katalogu [`dummy-e2e`](../../dummy-e2e) poleceniem `npm run e2e`.

---

## Strona logowania

W pliku [`cypress/e2e/sign-in.cy.ts`](../../dummy-e2e/cypress/e2e/sign-in.cy.ts) napisz testy funkcjonalne strony
logowania.

## Profil użytkownika

W pliku [`cypress/e2e/account.cy.ts`](../../dummy-e2e/cypress/e2e/account.cy.ts) napisz testy funkcjonalne strony
profilu użytkownika.
