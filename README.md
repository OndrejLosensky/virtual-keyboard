Virtuální klávesnice

je vytvořena pomocí Reactu a na místo klasického stylování CSS je použit TailwindCSS

Aplikace zaznamenává jakou klávesu stisknu na té fyzické a zobrazuje to na displeji,
dále také lze klikat na jednotlivá tlačítka, a ty vypíšou, které bylo stisknuté.
PRVNÍ VERZE: 29.9.2023
---------------------------
_________________________________
    zahájení aplikace
        první zobrazení virtuální klávesnice
        přidání nadpisu
        přidání ukazatele naposledy stisklé klávesy fyzické i té virtuální
_________________________________

DRUHÁ VERZE: 29.9.2023
---------------------------
_____________________________________________________________________
    přidané věci:
        Dropdown tlačítko, kde bude později možnost měnit klávesnici
        Input, kde se zobrazuje vámi psaný text
        ukazatel stisklé klávesy a naposledy stisklého tlačítka se přesunul vedle klávesnice
        lepší zobrazování na velkém monitoru
        při kliknutí na fyzickou klávesu se rozsvítí tlačítko, které držíte

_____________________________________________________________________

TŘETÍ VERZE: 30.9.2023
---------------------------------------
______________________________________________________________________
    přidané funkce do třetí verze:
        tlačítko pro obnovení stránky
        tlačítko pro změnu jazyku klávesnice
        tlačítko pro změnu systémové klávesnice
        popisek s odkazem na test (zobrazí všechny klávesy zeléné když fungují)
        pole, kde se zobrazuje vstup z klávesnice a i zároveň z té virtuální

        - nefunguje mazat věci z input okýnka pomocí fyzické klávesy, funguje jen backspace na té virtuální
        - zobrazování výstupů klávesnice se překrívá s popiskem 
        - tlačítka jsou zatím pouze grafická
        - na klávesnici nejsou všechny znaky z klávesnice, a nezobrazuje se ideálně


UPDATE:
    Backspace na fyzické klávesnici funguje JEN NĚKDY!!!!
__________________________________________________________________________


ČTVRTÁ VERZE: 1.10.2023
---------------------------
_____________________________________________________________________
    přidané věci:
        + tlačítko na změnu jazyka klávesnice je nyní funkční
        + ukazal naposledy stisklé klávesy je v pravém dolním rohu
        + ukazatel posledního stisklého tlačítka na obrazovce je odstraněn
        + tlačítko, které přepíná mezi Windows a MacOS klávesnicí je dočasně schované
        + console loguje každý stisk klávesy nebo tlačítka
        + tlačítko pro přepínání tmavého a světlého režimu (zatím jen vzhledově)


        - klávesy nejsou seřazeny přesně do tvaru klávesnice
        - backspace někdy nereaguje
        - když kliknete na virtuální tlačítko např. "enter", tak se objeví v INPUTu napsáno "enter"

_____________________________________________________________________


PÁTÁ VERZE: 4.10.2023
---------------------------
_____________________________________________________________________
    přidané funkce:
        + klávesy jako je ENTER apod. se již nevypisují do Inputu
        + opravený vzhled klávesnice, vypadá nyní jako obdélník, má pravidelný tvar
        + speciální klávesy jsem nastavil samostatně velké (základní šířka a výška klávesy je 50px)

        - Na klávesnici se nevyskytují přesně všechny klávesy jako na klávesnici Macu nebo Windows
        - test zatím není funkční  
        - potřeba přidat na spodní okraj stránky čast, kde se vypíše, že test proběhl úspěšně
        - přidat pozadí klávesnice pro více druhů zobrazování
        - při stisku klávesy shift předělat klávesy na UPPERCASE, jinak nechat LOWERCASE
        - CAPS stejně jako shift, akorát musí být na klik a ne držení
        
        PŘIDAT KLÁVESOVÉ ZKRATKY PRO REFRESH STRÁNKY, ZMĚNU JAZYKA KLÁVESNICE APOD.

        NEFUNGUJE LOGOVÁNÍ SPACEBARU
            PRO SPRÁVNÝ VZHLED MUSÍ BÝT ZADANÉ " " MÍSTO "SPACEBAR"
            JENŽE PŘI ZADÁNÍ POUHÉ MEZERY SE TLAČÍTKO ZMENŠÍ A NESEDÍ DO KLÁVESNICE


        
        5.10
        
        přidání macbook a windows layoutu klávesnice, které je zatím rozbité
        + chci přidat funkci, která vedle tlačítka změnit klávesnici zobrazí aktuální zvolenou kl.


        DEFAULTNĚ JSEM NASTAVIL ANGLICKÉ ROZLOŽENÍ KLÁVESNICE PŘI NAČTĚNÍ STRÁNKY!!!!
_____________________________________________________________________



Aplikace je vytvořena mnou.
dne 29.9.2023