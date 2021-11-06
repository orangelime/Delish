vue-delish 私廚網站

Live Demo 

https://vue-delish.herokuapp.com/#/index

backEnd

https://github.com/orangelime/laravel-vue-delish/tree/master/laravel-api-Delish

sign in demo:

email address:`1234@email.com`

password:`1234`

## About this project

Book a chef and cook at your home

使用 Vue-Laravel 建構的私廚網站(購物車改版建置中)

以網站經營者的職業為廚師當作出發點，建立三種方案可供顧客選擇，顧客可自由選擇喜歡的菜餚，加入購物車後並登入會員系統就可以請廚師到府烹飪囉!

## How to use

- Clone the repository with __git clone__

__Back-end__

- Go to the sub-folder `cd laravel-api-Delish`
- Copy __.env.example__ file to __.env__ and edit database credentials there
- Run __composer install__
- Run __php artisan key:generate__
- Run __php artisan migrate --seed__ (it has some seeded data for your testing)
- Run __php artisan passport:install__

__Front-end__

- Go to the sub-folder `cd vue-Delish`
- Run __touch .env.local__
- Add correct value of your domain for backend URL in this variable: `VUE_APP_API_URL=[your_domain]`
- Run __npm install__ 
- Run __npm run start__ 
- That's it: launch the URL that appears in the terminal - could be `http://localhost:3000`


Project setup
```
Run npm install
```

Compiles and hot-reloads for development
```
Run npm run start
```

Compiles and minifies for production
```
Run npm run all
```

