// npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string,role:integer,avatar:string,phone:integer,created_at:date,updated_at:date

// npx sequelize-cli model:generate --name categories --attributes name:string,image:text

// npx sequelize-cli model:generate --name news --attributes title:string,image:text,content:text

// npx sequelize-cli model:generate --name banners --attributes name:string,image:text,status:integer

// npx sequelize-cli model:generate --name orders --attributes user_id:integer,status:integer,note:text,total:integer

// npx sequelize-cli model:generate --name products --attributes name:string,image:text,price:integer,old_price:integer,description:text,specification:text,buy_turns:integer,quantity:integer,category_id:integer,brand_id:integer

// npx sequelize-cli model:generate --name order_details --attributes user_id:integer,product_id:integer,price:integer,quantity:integer

// npx sequelize-cli model:generate --name banner_details --attributes product_id:integer,banner_id:integer

// npx sequelize-cli model:generate --name feedbacks --attributes product_id:integer,user_id:integer,star:integer,content:text

// npx sequelize-cli model:generate --name news_details --attributes product_id:integer,news_id:integer


// npx sequelize-cli db:migrate
// npx sequelize-cli db:migrate:undo
// npx sequelize-cli db:migrate:undo:all

console.log('running');