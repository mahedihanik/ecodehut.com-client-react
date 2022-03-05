-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2020 at 10:39 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecodehut_reactsiteapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `id` int(255) NOT NULL,
  `username` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`id`, `username`, `password`) VALUES
(1, 'admin', 'anik123'),
(2, 'admin1', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `chart_data`
--

CREATE TABLE `chart_data` (
  `id` int(255) NOT NULL,
  `websiteTypes` varchar(500) NOT NULL,
  `laravel` int(255) NOT NULL,
  `reactjs` int(255) NOT NULL,
  `mysql` int(255) NOT NULL,
  `lumenapi` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chart_data`
--

INSERT INTO `chart_data` (`id`, `websiteTypes`, `laravel`, `reactjs`, `mysql`, `lumenapi`) VALUES
(1, 'ECOM', 90, 80, 14, 49),
(2, 'PORTFOLIO', 68, 67, 15, 59),
(3, 'EWEB', 97, 18, 89, 35),
(4, 'BWEB', 80, 20, 28, 48),
(5, 'MWEB', 20, 11, 90, 60),
(6, 'BWEB', 80, 80, 30, 80);

-- --------------------------------------------------------

--
-- Table structure for table `client_review`
--

CREATE TABLE `client_review` (
  `id` int(255) NOT NULL,
  `client_img` varchar(1000) NOT NULL,
  `client_title` varchar(100) NOT NULL,
  `client_des` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `client_review`
--

INSERT INTO `client_review` (`id`, `client_img`, `client_title`, `client_des`) VALUES
(20, 'http://127.0.0.1:8000/storage/UdlVJQhvBuA33Pe5cHeOdkDoXJBiWGIrJ6bIrCs1.jpeg', 'xcxc', 'cxcxc'),
(21, 'http://127.0.0.1:8000/storage/UdlVJQhvBuA33Pe5cHeOdkDoXJBiWGIrJ6bIrCs1.jpeg', 'xcxc', 'cxcxc');

-- --------------------------------------------------------

--
-- Table structure for table `contact_table`
--

CREATE TABLE `contact_table` (
  `id` int(255) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `subject` varchar(500) NOT NULL,
  `message` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_table`
--

INSERT INTO `contact_table` (`id`, `name`, `email`, `subject`, `message`) VALUES
(20, 'Mahedi Hasan', 'mahedi.h.anik@gmail.com', 'I am a Software Enginner', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(21, 'aaaaaaa', 'ssssss', 'ssaaaaaaaaaaas', 'sssssssssssss'),
(22, 'Mahedi Hasan', 'Mahedi Hasan', 'Mahedi Hasan', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(23, 'Mahedi Hasan', 'mahedi.h.anik@gmail.com', 'I am a Software Enginner', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(24, 'aaaaaaa', 'ssssss', 'ssaaaaaaaaaaas', 'sssssssssssss');

-- --------------------------------------------------------

--
-- Table structure for table `course_table`
--

CREATE TABLE `course_table` (
  `id` int(11) NOT NULL,
  `short_title` varchar(1000) NOT NULL,
  `long_title` varchar(1000) NOT NULL,
  `short_des` varchar(1000) NOT NULL,
  `small_img` varchar(1000) NOT NULL,
  `long_des` text NOT NULL,
  `totai_lecture` int(100) NOT NULL,
  `total_student` int(100) NOT NULL,
  `skill_all` text NOT NULL,
  `video_url` varchar(1000) NOT NULL,
  `course_link` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course_table`
--

INSERT INTO `course_table` (`id`, `short_title`, `long_title`, `short_des`, `small_img`, `long_des`, `totai_lecture`, `total_student`, `skill_all`, `video_url`, `course_link`) VALUES
(17, 'Web Development', 'Web Development Full Online Course', 'I build native and cross platfrom mobile app for your business app for your business', 'https://www.cloudways.com/blog/wp-content/uploads/install-laravel-3.jpg', 'I build native and cross platfrom mobile app for your business app for your business. I build native and cross platfrom mobile app for your business app for your business . I build native and cross platfrom mobile app for your business app for your business. I build native and cross platfrom mobile app for your business app for your business . I build native and cross platfrom mobile app for your business app for your business. I build native and cross platfrom mobile app for your business app for your business', 90, 74, '', 'https://www.youtube.com/embed/4pc6cgisbKE', 'https://www.youtube.com/watch?v=nK_gztn7qTk'),
(18, 'Web Development', 'Laravel Full Online Course', 'I build native and cross platfrom mobile app for your business app for your business', 'https://www.cloudways.com/blog/wp-content/uploads/install-laravel-3.jpg', 'I build native and cross platfrom mobile app for your business app for your business. I build native and cross platfrom mobile app for your business app for your business . I build native and cross platfrom mobile app for your business app for your business. I build native and cross platfrom mobile app for your business app for your business . I build native and cross platfrom mobile app for your business app for your business. I build native and cross platfrom mobile app for your business app for your business', 90, 74, '', 'https://www.youtube.com/embed/4pc6cgisbKE', 'https://www.youtube.com/watch?v=nK_gztn7qTk');

-- --------------------------------------------------------

--
-- Table structure for table `footer_table`
--

CREATE TABLE `footer_table` (
  `id` int(255) NOT NULL,
  `address` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `facebook_link` varchar(1000) NOT NULL,
  `youtube_link` varchar(1000) NOT NULL,
  `footer_credit` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `footer_table`
--

INSERT INTO `footer_table` (`id`, `address`, `email`, `phone`, `facebook_link`, `youtube_link`, `footer_credit`) VALUES
(1, '63 Monessor Road , Tannery Mor , Zigatola , Dhaka - 1209', 'mahedi.h.anik@gmail.com', '+88 01706565009', 'www.facebook.com', 'www.youtube.com', 'e-CodeHUT © 2020');

-- --------------------------------------------------------

--
-- Table structure for table `home_etc`
--

CREATE TABLE `home_etc` (
  `id` int(255) NOT NULL,
  `home_title` varchar(100) NOT NULL,
  `home_subtitle` varchar(100) NOT NULL,
  `tech_des` text NOT NULL,
  `total_project` varchar(100) NOT NULL,
  `total_client` varchar(100) NOT NULL,
  `video_des` text NOT NULL,
  `video_url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `home_etc`
--

INSERT INTO `home_etc` (`id`, `home_title`, `home_subtitle`, `tech_des`, `total_project`, `total_client`, `video_des`, `video_url`) VALUES
(1, 'FULL - STACK WEB DEVELOPER', 'Web & Mobile Applications', '<p>To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.</p>\r\n<p>Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.</p>\r\n<p>Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>', '60', '90', 'First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.\r\n\r\n\r\n', 'https://www.youtube.com/embed/4pc6cgisbKE');

-- --------------------------------------------------------

--
-- Table structure for table `information_etc`
--

CREATE TABLE `information_etc` (
  `id` int(255) NOT NULL,
  `about` text NOT NULL,
  `refund` text NOT NULL,
  `terms` text NOT NULL,
  `privacy` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `information_etc`
--

INSERT INTO `information_etc` (`id`, `about`, `refund`, `terms`, `privacy`) VALUES
(1, '                            <h1 className=\"aboutTitle\">Who I Am</h1>\r\n                            <hr/>\r\n                            <p className=\"aboutDes\">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects.</p>\r\n\r\n                            <h1 className=\"aboutTitle\">My Mission</h1>\r\n                            <hr/>\r\n                            <p className=\"aboutDes\">My mission is to develop unique idea and quality software that will secure top ranking in marketplace, people\'s system and people\'s heart. Develop robust, secure, dynamic, responsive software for all platform (computer, tab, mobile phone). Provide top notch customer service, customization of our product according to customer demand and current technology. Planning advanced techniques for optimization, user experience and satisfaction of customer for our software. Planning flexible software that will not be bounded by any linguistic or regional restriction. I want to flourish software that can blow people\'s heart and soul.</p>\r\n\r\n                            <h1 className=\"aboutTitle\">My Vision</h1>\r\n                            <hr/>\r\n                            <p className=\"aboutDes\">My vision is to brand our firm as the best firm in the world. Secure the top place among software providers for both local and international market. Brand our country as the best software provider country. Create employment for youth on the field of both software and corporate level. Provide our country and world with superior software. Nurture youths to be highly skilled software engineers.</p>', '                           <ul>\r\n                               <li>First 30 Days Money Back!</li>\r\n                               <li>THIS IS NOT A BUY-AND-TRY PRODUCT</li>\r\n                               <li>Refund is applicable for software and plugins, if the products aren\'t functioning, producing errors or you haven\'t received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That\'s a firm promise and commitment.</li>\r\n                               <li>After 30 Days : There is no refund offered after the first 30 days.</li>\r\n                               <li>To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>\r\n                               <li>Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law</li>\r\n                               <li>First 30 Days Money Back!</li>\r\n                               <li>THIS IS NOT A BUY-AND-TRY PRODUCT</li>\r\n                               <li>Refund is applicable for software and plugins, if the products aren\'t functioning, producing errors or you haven\'t received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That\'s a firm promise and commitment.</li>\r\n                               <li>After 30 Days : There is no refund offered after the first 30 days.</li>\r\n                               <li>To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>\r\n                               <li>Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights la</li>\r\n                           </ul>', '                            <p>BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</p>\r\n                            <p>BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</p>', '                            <p>Unless you have entered into an express written contract with this website to the contrary, visitors, viewers, subscribers, members, affiliates, or customers have no right to use this information in a commercial or public setting; they have no right to broadcast it, copy it, save it, print it, sell it, or publish any portions of the content of this website. By accessing the contents of this website, you agree to this condition of access and you acknowledge that any unauthorized use is unlawful and may subject you to civil or criminal penalties. Again, Visitor has no rights whatsoever to use the content of, or portions thereof, including its databases, invisible pages, linked pages, underlying code, or other intellectual property the site may contain, for any reason or for any use whatsoever. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, Visitor agrees to compensate the owners of this site with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater. Visitor warrants that he or she understands that accepting this provision is a condition of accessing this site and that accessing this site constitutes acceptance.</p>\r\n                            <p>Unless you have entered into an express written contract with this website to the contrary, visitors, viewers, subscribers, members, affiliates, or customers have no right to use this information in a commercial or public setting; they have no right to broadcast it, copy it, save it, print it, sell it, or publish any portions of the content of this website. By accessing the contents of this website, you agree to this condition of access and you acknowledge that any unauthorized use is unlawful and may subject you to civil or criminal penalties. Again, Visitor has no rights whatsoever to use the content of, or portions thereof, including its databases, invisible pages, linked pages, underlying code, or other intellectual property the site may contain, for any reason or for any use whatsoever. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, Visitor agrees to compensate the owners of this site with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater. Visitor warrants that he or she understands that accepting this provision is a condition of accessing this site and that accessing this site constitutes acceptance.</p>');

-- --------------------------------------------------------

--
-- Table structure for table `projects_table`
--

CREATE TABLE `projects_table` (
  `id` int(255) NOT NULL,
  `small_image` varchar(1000) NOT NULL,
  `big_image` varchar(1000) NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `short_description` varchar(1000) NOT NULL,
  `project_features` text NOT NULL,
  `live_preview_url` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projects_table`
--

INSERT INTO `projects_table` (`id`, `small_image`, `big_image`, `project_name`, `short_description`, `project_features`, `live_preview_url`) VALUES
(1, 'https://t8f8b3g9.stackpathcdn.com/wp-content/uploads/2019/07/3.png', 'http://localhost:3000/static/media/course1.c5cde557.svg', 'Crypto Exchange', 'Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one', '                            <ul>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                            </ul>', 'www.facebook.com'),
(11, 'https://rns0819c56a2lq76d4620mbbv0-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/project-management-1-810x318.jpg', 'http://localhost:3000/static/media/course1.c5cde557.svg', 'Crypto Exchange', 'Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one', '                            <ul>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                                <li>Admin can send special offer for special user</li>\r\n                            </ul>', 'www.facebook.com');

-- --------------------------------------------------------

--
-- Table structure for table `services_table`
--

CREATE TABLE `services_table` (
  `id` int(255) NOT NULL,
  `service_name` varchar(100) NOT NULL,
  `service_des` varchar(1000) NOT NULL,
  `service_img` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services_table`
--

INSERT INTO `services_table` (`id`, `service_name`, `service_des`, `service_img`) VALUES
(1, 'Web Development', 'I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”', 'http://www.pngall.com/wp-content/uploads/4/World-Wide-Web-PNG-Picture.png'),
(2, 'Mobile Development', 'I build native and cross platfrom mobile app for your business and instiution as per as your requirements.', 'http://www.pngall.com/wp-content/uploads/4/World-Wide-Web-PNG-Picture.png'),
(3, 'Graphics Design', 'I desing modern user interface and other graphical components for your business and instiution.', 'http://www.pngall.com/wp-content/uploads/4/World-Wide-Web-PNG-Picture.png'),
(5, 'ccxcx', 'cxcxc', 'http://127.0.0.1:8000/storage/kAeV8qnaSsMfWR3G2rtsuyTJifrwoBeWTsbBnhhW.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chart_data`
--
ALTER TABLE `chart_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_review`
--
ALTER TABLE `client_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_table`
--
ALTER TABLE `contact_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_table`
--
ALTER TABLE `course_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_table`
--
ALTER TABLE `footer_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_etc`
--
ALTER TABLE `home_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `information_etc`
--
ALTER TABLE `information_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects_table`
--
ALTER TABLE `projects_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services_table`
--
ALTER TABLE `services_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `chart_data`
--
ALTER TABLE `chart_data`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `client_review`
--
ALTER TABLE `client_review`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `contact_table`
--
ALTER TABLE `contact_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `course_table`
--
ALTER TABLE `course_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `footer_table`
--
ALTER TABLE `footer_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `home_etc`
--
ALTER TABLE `home_etc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `information_etc`
--
ALTER TABLE `information_etc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projects_table`
--
ALTER TABLE `projects_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `services_table`
--
ALTER TABLE `services_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
