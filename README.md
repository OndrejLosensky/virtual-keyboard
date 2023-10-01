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


DO BUDOUCNA:
___________________________________________________________________

        vytvořit funkci, která udělá test zda vaše klávesnice funguje v pořádku
        přepínání tmavého a světlého režimu
        možnost zaznamenávat každé stisknuté tlačítko do logu 
____________________________________________________________________

Aplikace je vytvořena mnou.
dne 29.9.2023