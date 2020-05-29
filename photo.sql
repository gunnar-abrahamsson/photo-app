-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.37 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table photo.albums
DROP TABLE IF EXISTS `albums`;
CREATE TABLE IF NOT EXISTS `albums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table photo.albums: ~4 rows (approximately)
DELETE FROM `albums`;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` (`id`, `title`, `user_id`) VALUES
	(1, 'Gunnars inte egentagna bilder', 1),
	(3, 'Random stuff!', 1),
	(9, 'Meat', 3),
	(10, 'cakes', 2);
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;

-- Dumping structure for table photo.albums_photos
DROP TABLE IF EXISTS `albums_photos`;
CREATE TABLE IF NOT EXISTS `albums_photos` (
  `album_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table photo.albums_photos: ~14 rows (approximately)
DELETE FROM `albums_photos`;
/*!40000 ALTER TABLE `albums_photos` DISABLE KEYS */;
INSERT INTO `albums_photos` (`album_id`, `photo_id`) VALUES
	(1, 2),
	(1, 3),
	(3, 2),
	(3, 2),
	(3, 3),
	(3, 2),
	(3, 4),
	(10, 9),
	(10, 10),
	(10, 11),
	(10, 12),
	(9, 14),
	(9, 15),
	(9, 16);
/*!40000 ALTER TABLE `albums_photos` ENABLE KEYS */;

-- Dumping structure for table photo.photos
DROP TABLE IF EXISTS `photos`;
CREATE TABLE IF NOT EXISTS `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- Dumping data for table photo.photos: ~11 rows (approximately)
DELETE FROM `photos`;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` (`id`, `title`, `url`, `comment`, `user_id`) VALUES
	(1, 'Svartvit bild i profil på en tjej', 'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg', NULL, 2),
	(2, 'man in gray dress shirt holding black smartphone', 'https://images.pexels.com/photos/4068300/pexels-photo-4068300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Yaaas', 1),
	(3, 'Person holding camera', 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', NULL, 1),
	(4, 'Skateboard fötter stor kille', 'https://cdn.pixabay.com/photo/2020/05/26/07/43/skateboard-5221914_960_720.jpg', 'Sweet', 1),
	(9, 'Cake balls', 'https://cdn.pixabay.com/photo/2019/04/19/17/48/cake-balls-4139982_960_720.jpg', 'Pink stuff', 2),
	(10, 'Tårta konfektyr', 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg', 'Lyx', 2),
	(11, 'Kladdkaka delux!', 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg', NULL, 2),
	(12, 'Birthday cake!', 'https://cdn.pixabay.com/photo/2015/12/30/11/53/birthday-1114056_960_720.jpg', 'Make a wish!', 2),
	(14, 'Lever!', 'https://cdn.pixabay.com/photo/2018/10/14/18/29/meat-loaf-3747129_960_720.jpg', 'Gott me brö!', 3),
	(15, 'Kött!', 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg', 'Lite grönt också', 3),
	(16, 'BBQ!', 'https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg', NULL, 3);
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;

-- Dumping structure for table photo.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Dumping data for table photo.users: ~4 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
	(1, 'gunnar@example.se', '$2b$10$ZAVk9emwFcYZKqTOJn0DsOP44/K3o.12E2ATEZMGKwLYKDZi1Yz.6', 'Gunnar', 'Abrahamsson'),
	(2, 'linnea@example.se', '$2b$10$nnMvT3ZNEZrVdrfwtn2w/OvRiH7hm21feL87AYEBOVeQjdtRV2Jqa', 'Linnea', 'Förare'),
	(3, 'saltbay@example.se', '$2b$10$Z1oeeOG0rJGasdCDOb/0te0lO3yRwASPLM9bKqnHjK5.hCF0cBOKy', 'Salt', 'Bay'),
	(4, 'Kalle@example.se', '$2b$10$Gly47dc4Yd5GyE78eRKv2.iLO28xtI6dsuu6lpiAlf/fhecKAcwRC', 'kalle', 'anka');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
