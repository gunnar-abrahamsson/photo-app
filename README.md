# Endpoints
**base URL** https://ghoti-photo.herokuapp.com
## user
### POST /register
Register a new user
```json
{
	"email": "saltbay@example.se",
	"password": "saltbay@example",
	"first_name": "Salt",
	"last_name": "Bay"
}
```
### POST /login
Login a user, returns access_token and refresh_token
```json
{
	"email": "saltbay@example.se",
	"password": "saltbay@example"
}
```
### POST /refresh
Refresh Tokens

## Photos
### GET /photos
GET all photos for a user
### GET /photos/:photoId
GET a specific photo if the user owns it
### POST /photos
Create a new photo
```json
{
	"title": "Some img title",
	"url": "https://cdn.pixabay.com/photo/2020/05/26/07/43/skateboard-5221914_960_720.jpg",
	"comment": "Some optional comment"
}
```
### PUT /photos/:photoId
update a photo
```json
{
	"title": "Update title",
	"url": "https://somerandomeimgurl.test/img.jpg",
	"comment": "Some optional comment to update"
}
```
### DELETE /photos/:photoId
delete a photo

## Albums
### GET /albums
GET all albums for a user
### GET /albums/:albumId
GET a users specific album with photos
### POST /albums
Create a new album
```json
{
	"title": "Some album title"
}
```
### POST /albums/:albumId/photos
adds photos to a album
```json
{
	"photo_ids": [1, 2, 4]
}
```
### PUT /albums/:albumId
update a albums atributes
```json
{
	"title": "Album title to update"
}
```
### DELETE /albums/:albumId
delete a album
### DELETE /albums/:albumId/photos/:photoId
Removes photos from a album

# Kravspecifikation
## Användare
registrera nya användare
- **(VG)** logga in för att få en JWT-token ✔️
- **BONUS** refresh tokens ✔️

## Foton
- lista sina foton ✔️
- skapa ett nytt foto ✔️
- **BONUS** updatera ett foto ✔️
- **(VG)** radera ett foto (raderar även eventuella kopplingar mellan album och fotot) ✔️

## Album
- lista sina album ✔️
- skapa nya album ✔️
- **BONUS** updatera ett album ✔️
- **(VG)** radera ett album (raderar även eventuella kopplingar mellan foton och albumet)✔️

## Album > Foton
- lista foton i ett album ✔️
- lägga till foto i ett album ✔️
- **(VG)** lägga till flera foto i ett album ✔️


## VG-krav
- Använda JWT istället för HTTP Basic Auth ✔️
- Kunna radera ett foto (tar även bort eventuella länkar mellan fotot och album) ✔️
- Kunna radera ett album (tar även bort eventuella länkar mellan albumet och foton) ✔️
- Kunna lägga till flera foto samtidigt till ett album ✔️
