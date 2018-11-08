-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: artisanats_arts
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (0,'muriel@muriel.fr','$2b$10$TN85ea940.mRRmMa4gcHUuwkcpIs7vSh5H6r6bAEh3oLlQ14xUd0a','muriel','NIEDZWIECKI'),(1,'julien.niedzwiecki@neuf.fr','$2b$10$HYN74Wt0XeOgPhRFobfcE.WUTa27ETxYBBmxcXRk6F1Z7dgmY3gRi','julien','Niedzwiecki'),(4,'marjorie.th@live.fr','$2b$10$aawzhf5bpH7KTMGjmt28leOb0.d.ACuTfbLvYxeSvPTDkFcfysAQO','Marjorie','Thominot'),(11,'hollowspy@free.fr','$2b$10$qzy0gsUDUC4NAsZZjfM.M.7SsZvvTeLULAfv3rUR2GPCGQs.jdpY.','julien','nied'),(12,'julien.niedzwiecki@acensi.fr','$2b$10$qsKMWj3sorj1EAFuilLSs.X6cta7UqxlD3OMzYw4Zk3XUib1ML/OC','julien','acensi');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bestiaire`
--

DROP TABLE IF EXISTS `bestiaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bestiaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `materials` varchar(50) NOT NULL,
  `width` int(3) NOT NULL,
  `height` int(3) NOT NULL,
  `reproduction` varchar(255) NOT NULL,
  `photo_principale` varchar(255) DEFAULT NULL,
  `photo_annexe2` varchar(255) DEFAULT NULL,
  `photo_annexe3` varchar(255) DEFAULT NULL,
  `photo_annexe4` varchar(255) DEFAULT NULL,
  `photo_annexe5` varchar(255) DEFAULT NULL,
  `photo_annexe6` varchar(255) DEFAULT NULL,
  `Aphoto_principale` varchar(255) DEFAULT NULL,
  `Aphoto_annexe2` varchar(255) DEFAULT NULL,
  `Aphoto_annexe3` varchar(255) DEFAULT NULL,
  `Aphoto_annexe4` varchar(255) DEFAULT NULL,
  `Aphoto_annexe5` varchar(255) DEFAULT NULL,
  `Aphoto_annexe6` varchar(255) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_idx` (`owner`),
  CONSTRAINT `owner` FOREIGN KEY (`owner`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bestiaire`
--

LOCK TABLES `bestiaire` WRITE;
/*!40000 ALTER TABLE `bestiaire` DISABLE KEYS */;
INSERT INTO `bestiaire` VALUES (1,'le chien','mosaique petit carré en grain de mouton',50,20,'Reproduction d\'un chien, nommé Hâidi. Belle Golden retriever ! ','../images/photo_principale.jpg','../images/photo_annexe2.jpg','../images/photo_annexe3.jpg','../images/photo_annexe3.jpg','../images/photo_annexe3.jpg','../images/photo_annexe2.jpg','http://localhost:4000/images/bestiaire/1/62975_104087909653262_1366761_n.jpg','http://localhost:4000/images/bestiaire/1/31225140_576900222688589_484867654138462208_o.jpg','http://localhost:4000/images/bestiaire/1/60639_104088006319919_6562897_n.jpg','http://localhost:4000/images/bestiaire/1/47940_100961766632543_4927418_n.jpg','','',0),(2,'Manon','Mosaiqué gros grain soufflé par verre',10,90,'Portrait de Manon NIEDZWIECKI, faite au préalable par son super père ! ','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEJFZVF4ghztl0SqFHbRmv51-9ePPhfu0OoCRnEuk-1LGQXcUCQ','','','','','','http://localhost:4000/images/bestiaire/2/61491_104087862986600_1004280_n.jpg','http://localhost:4000/images/bestiaire/2/60132_104087832986603_1331941_n.jpg','http://localhost:4000/images/bestiaire/2/63802_104087776319942_5361531_n.jpg','','','',0),(83,'Remake medieval','Petite mosaique',57,89,'Reproduction oeuvre medieval inspiré de Manon',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/83/1535960483423_a2a24-mosaique_5.jpg','http://localhost:4000/images/bestiaire/83/1535960483426_images.jpg','http://localhost:4000/images/bestiaire/83/1535960483426_index1.jpg','http://localhost:4000/images/bestiaire/83/1535960483430_Montréal-Séviac-mosaïque.jpg','http://localhost:4000/images/bestiaire/83/1535960483432_photo_annexe2.jpg','http://localhost:4000/images/bestiaire/83/1535960483433_plancher-de-mosaïque-médiéval-53902619.jpg',1),(86,'Charlie','Ma fille',98,788,'Belle description !!! Avec Manon',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/86/1536154863272_a2a24-mosaique_5.jpg','http://localhost:4000/images/bestiaire/86/1536154863276_dev03.jpg','http://localhost:4000/images/bestiaire/86/1536154863278_images.jpg','http://localhost:4000/images/bestiaire/86/1536154863278_index.jpg','http://localhost:4000/images/bestiaire/86/1536154863278_index1.jpg','http://localhost:4000/images/bestiaire/86/1536154863279_jordan.jpg',1),(93,'The best player ! ','MJ23',48,198,'The best player of all the time !  Michael Jordan ! ',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/93/1537171836713_index.jpg','http://localhost:4000/images/bestiaire/93/1537171836716_a2a24-mosaique_5.jpg','http://localhost:4000/images/bestiaire/93/1537171836721_carousel1.jpg','http://localhost:4000/images/bestiaire/93/1537171836722_carousel2.jpg','http://localhost:4000/images/bestiaire/93/1537171836722_carousel3.jpg','http://localhost:4000/images/bestiaire/93/1537171836724_dev03.jpg',1);
/*!40000 ALTER TABLE `bestiaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo_carousel`
--

DROP TABLE IF EXISTS `photo_carousel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_carousel` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `source` varchar(50) NOT NULL,
  `Asource` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_carousel`
--

LOCK TABLES `photo_carousel` WRITE;
/*!40000 ALTER TABLE `photo_carousel` DISABLE KEYS */;
INSERT INTO `photo_carousel` VALUES (1,'carousel1.jpg','../images/mosaique_carousel1.jpeg','http://localhost:4000/images/carousel/1536224799064_carousel1.jpg'),(2,'carousel2.jpg','../images/mosaique_carousel2.jpeg','http://localhost:4000/images/carousel/1537469884751_carousel2.jpg'),(3,'carousel3.jpg','..','http://localhost:4000/images/carousel/1535633209935_carousel3.jpg');
/*!40000 ALTER TABLE `photo_carousel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vegetal`
--

DROP TABLE IF EXISTS `vegetal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vegetal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `materials` varchar(100) NOT NULL,
  `width` int(5) NOT NULL,
  `height` int(5) NOT NULL,
  `reproduction` varchar(255) NOT NULL,
  `photo_principale` varchar(255) DEFAULT NULL,
  `Aphoto_principale` varchar(255) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_idx` (`owner`),
  CONSTRAINT `test` FOREIGN KEY (`owner`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vegetal`
--

LOCK TABLES `vegetal` WRITE;
/*!40000 ALTER TABLE `vegetal` DISABLE KEYS */;
INSERT INTO `vegetal` VALUES (1,'Rose de printemps','Mais qu\'elle belle m\'osaique ! ',45,50,'Elle est belle ma rose non !!','../images/photo_portrait.jpg','http://localhost:4000/images/vegetal/1/vegetal1.jpg',0),(2,'Manon','Materiaux manuel ! :D',50,120,'Reproduction fidèle du propre fiston !','../images/photo_portrait2.jpg','http://localhost:4000/images/vegetal/2/vegetal2.jpg',0),(3,'Marjorie','Ma femme',50,50,'Portrait de l\'auteur elle même, comme Van Gogh','../images/photo_portrait3.jpg\r\n','http://localhost:4000/images/vegetal/3/vegetal3.jpg',1),(34,'Manon','D\'la b\'alle mes mosaiques',87,89,'Elle est belle ma rose non !!',NULL,'http://localhost:4000/images/vegetal/34/1536154832181_index.jpg',1);
/*!40000 ALTER TABLE `vegetal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-24  9:01:11
