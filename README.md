# Kravspecifikation
## Användare
registrera nya användare
- **(VG)** logga in för att få en JWT-token ✔️

## Foton
- lista sina foton ✔️
- skapa ett nytt foto ✔️
- **(VG)** radera ett foto (raderar även eventuella kopplingar mellan album och fotot)

## Album
- lista sina album
- skapa nya album
- **(VG)** radera ett album (raderar även eventuella kopplingar mellan foton och albumet)

## Album > Foton
- lista foton i ett album
- lägga till foto i ett album
- **(VG)** lägga till flera foto i ett album


## VG-krav
- Använda JWT istället för HTTP Basic Auth
- Kunna radera ett foto (tar även bort eventuella länkar mellan fotot och album)
- Kunna radera ett album (tar även bort eventuella länkar mellan albumet och foton)
- Kunna lägga till flera foto samtidigt till ett album