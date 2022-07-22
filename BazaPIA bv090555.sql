-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: pia
-- ------------------------------------------------------
-- Server version	5.7.9

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `konkurs`
--

DROP TABLE IF EXISTS `konkurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `konkurs` (
  `idkonkurs` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(45) DEFAULT NULL,
  `tekst` longtext,
  `rok` datetime DEFAULT NULL,
  `owner` varchar(45) DEFAULT NULL,
  `tip` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idkonkurs`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `konkurs`
--

LOCK TABLES `konkurs` WRITE;
/*!40000 ALTER TABLE `konkurs` DISABLE KEYS */;
INSERT INTO `konkurs` VALUES (1,'Angular programer','Otvorena je pozicija za angular programera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-04-15 16:00:00','Asseco','Posao'),(2,'Node js programer','Otvorena je pozicija za node js programera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-06-11 10:00:00','Asseco','Praksa'),(3,'Tester web aplikacija','Otvorena je pozicija za web testera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-04-15 16:00:00','Asseco','Posao'),(4,'Majstor za poljupce','Ti si moj majstor za poljupce o da, o ne','2019-02-10 18:30:00','King','Praksa'),(5,'Java programer','Otvorena je pozicija za java programera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-02-21 14:30:00','King','Posao'),(6,'novost','malo bolja','2019-02-08 15:30:00','Beko','Praksa'),(7,'SQL programer','Otvorena je pozicija za SQL programera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-02-13 19:15:00','Asseco','Posao'),(8,'Database Expert','Otvorena je pozicija za Database expert-a. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-03-01 16:22:00','Beko','Praksa'),(9,'Tehnicka Podrska','Lorem ipsum dolor sit amet, pellentesque adipiscing metus fringilla augue urna ipsum, ipsum pede urna amet a','2019-04-20 14:00:00','Telenor','Posao'),(10,'Angular programer','Otvorena je pozicija za angular programera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-04-20 14:00:00','Telenor','Praksa'),(11,'Vozac Viljuskara','Lorem ipsum dolor sit amet, pellentesque adipiscing metus fringilla augue urna ipsum, ipsum pede urna amet a','2019-02-21 14:30:00','King','Posao'),(12,'Frontend programer','Otvorena je pozicija za frontend programera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-05-15 12:00:00','King','Praksa'),(13,'DB Administrator','Otvorena je pozicija za DB administratora programera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-05-15 12:00:00','Beko','Posao'),(14,'Server Administrator','Otvorena je pozicija za Server administratora programera. Pozeljna diploma etf B.Sc. ili M.S. Udobno i prijatno radno okruzenje. Mogucnost licnog razvoja i napredovanja.','2019-04-20 14:00:00','Beko','Posao');
/*!40000 ALTER TABLE `konkurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prijava`
--

DROP TABLE IF EXISTS `prijava`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prijava` (
  `idprijava` int(11) NOT NULL AUTO_INCREMENT,
  `idkonkurs` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `owner` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idprijava`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prijava`
--

LOCK TABLES `prijava` WRITE;
/*!40000 ALTER TABLE `prijava` DISABLE KEYS */;
/*!40000 ALTER TABLE `prijava` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `username` varchar(45) NOT NULL,
  `pass` varchar(45) DEFAULT NULL,
  `ime` varchar(45) DEFAULT NULL,
  `prezime` varchar(45) DEFAULT NULL,
  `tel` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `god` int(11) DEFAULT NULL,
  `isDipl` tinyint(4) DEFAULT NULL,
  `isAdmin` tinyint(4) DEFAULT NULL,
  `isComp` tinyint(4) DEFAULT NULL,
  `nazivcomp` varchar(45) DEFAULT NULL,
  `adresacomp` varchar(45) DEFAULT NULL,
  `grad` varchar(45) DEFAULT NULL,
  `pib` int(11) DEFAULT NULL,
  `brzap` int(11) DEFAULT NULL,
  `sajt` varchar(45) DEFAULT NULL,
  `delatnost` varchar(45) DEFAULT NULL,
  `specijalnost` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin','admin','Almir','Admirov','123456789','admin@pia.etf.rs',NULL,0,1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),('Asseco','123','Mirko','Mirkovic',NULL,'asseco@mirko.com',NULL,0,0,1,'Asseco','Bulevar Milutina Milankovica 118','Beograd',1234579075,6000,'see.asseco.com','IT','jgvjhvjlhljkhbkujhukh;oghjklgjkhvhngvhgcjgdgcgcgfcggfcgfcgfcgfcgjc gfc gjhcf gjf ghcfkg  jklhlvluyjv '),('Bane','Bane.123','Branko','Brankovic','123456123','bane@yahoo.com',4,1,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Beko','123','Disa','Disic',NULL,'moj@mail',NULL,0,0,1,'Beko','Mike Zike 13','Pancevo',123456789,5000,'www.beko.rs','Energetika','asfaasfasasfsdakljhasjklnbl;n;bljn;sdvlij;sdgvlihj;lfh;klhdfk;jbsdvkjbksdvjb;sdv;SDHSKJdgh'),('djole','123','Djoko','Skoko','1234','djole123@etf.rs',2,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('King','123','Borjan','Bojanovic',NULL,'asd@asf',NULL,0,0,1,'King','Pere Jovice 12','Novi Sad',1234567,1500,'www.king.rs','IT','olsndgklasdnbklasnbjasnbkljasndgkasjndgasjdbnggasd'),('mika','123','Milenko','Misic','063559878754','mika@kika.rs',3,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('pera','123','Petar','Peric','1231','sdfghsd',4,1,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Telenor','123','Zoran','Goranovic',NULL,'telenor@tnr.rs',NULL,0,0,1,'Telenor','Bulevar Revolucije 15','Nis',124912512,15000,'www.telenor.rs','Telekomunikacije','jgvjhvjlhljkhbkujhukh;oghjklgjkhvhngvhgcjgdgcgcgfcggfcgfcgfcgfcgjc gfc gjhcf gjf ghcfkg  jklhlvluyjv '),('Zoki','123','Zoran','Pogorelic',NULL,'zoki.car@eunet.yu',NULL,0,0,1,'Zoki Ivest Group LTD','Pere Velimirovica 53','Beograd',3124124,50,'www.zoki.rs','Gradjevina i arhitektura','lorem ipsum ajgna;hnaso;fngas;dlgnas;ldfa;slijfawpoeijaw9ejgasiopgasldgnasoidga;osijdgji');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pia'
--

--
-- Dumping routines for database 'pia'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-12  9:02:08
