Доработка проекта Shop.Project
 
Реализация задач на основе текущего проекта Shop.Project:
Добавлена фича «похожие товары». Эта доработка затрагивает — Shop.API; Shop.Admin; Базу данных.
Реализован функционал создания товара в админке. Эта доработка затрагивает — Shop.API; Shop.Admin.
Создано клиентское приложение Shop.Client на React. 

Скрипт создания таблицы:
-- ProductsApplication.similar_products definition

CREATE TABLE similar_products (
  first_product varchar(36) NOT NULL,
  second_product varchar(36) NOT NULL,
  KEY second_product (second_product),
  KEY first_product (first_product),
  CONSTRAINT similar_products_ibfk_1 FOREIGN KEY (second_product) REFERENCES products (product_id),
  CONSTRAINT similar_products_ibfk_2 FOREIGN KEY (first_product) REFERENCES products (product_id)
) ;

-- ProductsApplication.users definition

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)  ;
