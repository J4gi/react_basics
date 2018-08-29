# REACT - komponenty
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**
---
## Przekazywanie props
### Zadanie 1  (~ 20min - 25min)

Stwórz komponent o nazwie `Receipt`. Niech przyjmuje on w `props` tablicę obiektów z elementami rachunku (`items`).

Obiekty mają być w takiej formie:

```JavaScript
{
    price   :   cena,
    count   :   ilosc,
    name    :   'nazwa przedmiotu'
}
```

Wyświetl całość w formie takiej tabelki:

Nazwa | Cena / 1 | Ilość | Łączna cena
--- | --- | --- | ---
Masło | 4.00 | 1 | 4.00
Chleb | 3.50 | 2 | 7.00
Jabłka | 2.99 | 1.5 | 4.49
RAZEM | - | - | 15.49 

Pamiętaj o odpowiednich obliczeniach. Na końcu wyświetl całkowitą sumę rachunku.

W pliku `js/items.js` znajduje się tablica z obiektami przykładowych zakupów. Zaimportuj go `js/app.jsx` np. za pomocą:

```import shopping from './items';```

Wyrenderuj swój komponent rachunku z tymi zaimportowanymi danymi.

Podziel całość tak, by składała się z komponentów:
- ReceiptHeader
- ReceiptItems
- ReceiptItem
- ReceiptFooter
- Receipt.

Zastanów się gdzie wykonywać obliczenia i w jaki sposó przekazać je do subkomponentów.
**Pamiętaj, aby zbudować jeszcze główny komponent `App`, i w nim wykorzystać komponent Receipt z odpowiednio przekazanymi propsami. Renderuj na stronie główny komponent `App`.**

**Zadanie wykonaj z komponentami w wersji zbudowanej z klas ES6 lub w wersji funkcyjnej (do wyboru)**

## Komponent State
### Zadanie 2 (~ 15min - 25min)
Stwórz komponent `TextTyper`. Przyjmuje on przez props wartość `text`.

Komponent ma wyrenderować pierwszą literę tego napisu w elemencie `h1`. Pamiętaj, aby do przechowywania znaków, które mają być wyświetlone skorzystać ze **state**.

Dodaj timer lub interval do swojego komponentu, który sprawi, że co 1 sekundę pojawi się w elemencie `h1` coraz więcej liter (co sekundę 1==kolejny znak). **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

Efekt po kolei może wyglądać tak dla `text` ustawionego na `Witaj!`:
- 0s.: W
- 1s.: Wi
- 2s.: Wit
- 3s.: Wita
- 4s.: Witaj
- 5s.: Witaj!

Wyrenderuj swój komponent z przykładowym napisem.

Zajrzyj do narzędzi deweloperskich React. Kliknij na swój komponent - zobaczysz jego `props`, aktualne `state` oraz podświetlenia aktualizacji.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**


### Zadanie 3 (~ 15min - 25min)
Stwórz komponent `StrobeLight`. Przyjmuje on przez props dwie wartości: kolor światła (`color`) oraz częstotliwość mrugania w ms (`frequency`).

Komponent ma wyrenderować pusty element `div`, z następującymi stylami:
- Szerokość: 500px,
- Wysokość: 50px,
- Kolor tła: biały.

Dodaj timer lub interval do swojego komponentu, który sprawi, że co określoną (w props) ilość ms `frequency` będzie się zmieniać kolor tła naprzemiennie:
- Jeżeli wcześniej był kolor biały - na kolor z `props`,
- W przeciwnym wypadku na kolor biały.

Wyrenderuj swój komponent kilka razy, z przykładowymi danymi.

Zajrzyj do narzędzi deweloperskich React. Kliknij na swoje komponenty - zobaczysz ich `props`, aktualne `state` oraz podświetlenia aktualizacji.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**



