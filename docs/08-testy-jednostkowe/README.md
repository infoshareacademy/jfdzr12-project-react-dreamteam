# Projekt: Testy jednostkowe

Na potrzeby przeprowadzenia testów w katalogu [`dummy`](../../dummy) stworzona została przykładowa aplikacja.

Przed przystąpieniem do zadań koniecznie zainstaluj zależności.

Wszelkie ścieżki podane poniżej są relatywne dla katalogu wspomnianego projektu - [`dummy`](../../dummy).

---

Aplikację _Dummy_ uruchom z poziomu katalogu [`dummy`](../../dummy) poleceniem `npm run dev`.

Testy jednostkowe możesz uruchomić z poziomu katalogu [`dummy`](../../dummy) poleceniem `npm run test`.

---

## Funkcje

W pliku [`@/lib/form/get-data.ts`](../../dummy/@/lib/form/get-data.ts) znajduje się funkcja `getFormData`.

Jej zadaniem jest zwrócenie wartości formularza.

**Przykład**

```tsx
import {FormEvent} from 'react';
import {getFormData} from './get-data';

function onSubmit(event: FormEvent<HTMLFormElement>) {
	const formDataJson = getFormData(event.currentTarget)
	/*
       {
         query: 'whatever'
       }
     */
}

function Form() {
	return (
		<form onSubmit={onSubmit}>
			<input name='query'/>
			<button>Search</button>
		</form>
	)
}
```

W pliku [`@/lib/form/get-data.ts`](../../dummy/@/lib/form/get-data.ts) napisz testy weryfikujące poprawność działania
tej funkcji.

## _React hooks_

W pliku [`@/lib/use-toggle.ts`](../../dummy/@/lib/use-toggle.ts) znajduje się funkcja `useToggle`.

Jej zadaniem jest zwrócenie stanu typu `boolean` oraz funkcji bezparametrowej zmieniającej ten stan na przeciwny.

W pliku [`@/lib/use-toggle.test.tsx`](../../dummy/@/lib/use-toggle.test.tsx) napisz testy weryfikujące poprawność
działania tej funkcji.

## Interaktywne komponenty

W pliku [`@/lib/auth/sign-in.tsx`](../../dummy/@/lib/auth/sign-in.tsx) znajduje się komponent `SignInForm`.

Jego zadaniem jest wyświetlenie formularza zawierającego pola `email` oraz `password`.

W pliku [`@/lib/auth/sign-in.test.tsx`](../../dummy/@/lib/auth/sign-in.test.tsx) napisz testy weryfikujące poprawność
działania tego komponentu.
