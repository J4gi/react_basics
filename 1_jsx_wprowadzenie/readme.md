# REACT - wprowadzenie
Procedura jak zawsze - piszemy czytelny kod, zadania oddzielamy komentarzami, dodajemy do gita. :) 

---
### Przygotowanie środowiska dla Reacta

Razem stworzymy w pełni działające środowisko, które pozwoli pisać pliki w składni JSX, skompilować je do pliku wynikowego JS i uruchomić działającą aplikację React.
- ```npm install```
- ```npx webpack```

W pliku `js/template.js` znajduje się kod, który wyrenderuje na stronie w elemencie o id `app` element `h1` z napisem `Przywitanie z React`.

> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

### Zadanie 1  (~ 10min - 15min)
#### Wyświetlanie danych z zewnętrznego pliku - zwięrzęta

W pliku `js/animals.js` znajduje się tablica reprezentująca spis zwierząt. Zaimportuj ją do pliku `js/zadanie01.js` np. za pomocą:

```import animals from './animals.js';```

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlała łączna ilość zwierząt oraz zostaną one wypisane. **Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX**.

Przyda Ci się właściwość ```length``` oraz metoda ```join(separator)``` tablicy.

### Zadanie 2  (~ 5min - 10min)
#### Warunkowe wyświetlanie na podstawie wprowadzonych danych
Przyjmij za pomocą ```prompt()``` informację o wieku użytkownika.

Jeżeli wiek będzie poniżej 18 lat to wyświetl element ```div``` o id `youth`, w przeciwnym wypadku element ```div``` o id `adult`. Wstaw wpisany wiek wewnątrz diva.

### Zadanie 3
#### Dynamiczne style  (~ 10min - 20min)

Za pomocą ```prompt()``` zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.

Sprawdź, czy odpowiedź to `red`, `green` lub `blue` (możesz wykorzystać metodę ```.indexOf()``` tablicy), jeżeli nie to wyrenderuj w elemencie o id ```app``` element ```div``` z napisem `Nieprawidłowy kolor`.

Jeżeli podany kolor był poprawny to za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```.  Ustaw jego style przy pomocy JSX: 
- Szerokość: 100px
- Wysokość: 100px
- Grubość ramki: 5px
- Styl ramki: solid
- Kolor ramki: podany przez użytkownika

## JSX - zagnieżdżanie dzieci
### Zadanie 4
W pliku `js/people.js` znajduje się tablica z obiektami reprezentującymi osobę. Zaimportuj ją do pliku `js/app.jsx` np. za pomocą:

```import people from './people';```

Używając metody ```.map()``` tablicy stwórz z tablicy elementy ```div``` zawierające dane o osobach. Nazwy pól obiektu znajdziesz w importowanym pliku. 

Chcemy, żeby powstała następująca struktura:
```HTML
<div class="person">
    <img src={ avatar }>
    <div class="info">
        <h1>{ tytuł + imię + nazwisko }</h1>
        <p>{ bio }</p>
    </div>
</div>
 ```
 
 **Pamiętaj w jaki sposób powinna być przekazywana nazwa klasy CSS w tagach JSX oraz o odpowiednich zamknięciach znaczników.**
 
 Efektem powinny być elementy podobne do tego:
 ![Zadanie 2 screen](img/zadanie02_screen.png "Zadanie 2 screen")
 
 Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będą się wyświetlały wszystkie wygenerowane elementy ```div```.
 
 PODPOWIEDŹ: 
 ```JavaScript
  const manyPeople = people.map(person => displayPerson(person));
  function displayPerson(person) {
     return (
         ...
     );
 }
 ```