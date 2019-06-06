# 我的餐廳清單
這個專案是呈現 `我的餐廳清單` ， 點選餐廳、搜尋餐廳名稱及類型可取得詳細資訊。

## 安裝環境

- Windows 10
- Node.js v10.15.3
- Express ^4.17.1

## 安裝

### 前置作業
`nvm → Node.js → Express → nodemon`

Windows 安裝 [nvm](https://github.com/coreybutler/nvm-windows/releases) 

透過 Terminal

安裝 Node.js
```
nvm install 10.15.3
```

安裝 Express ，建立專案資料夾
```
mkdir restaurantList
npm i express
```

安裝 nodemon
```
npm install -g nodemon
```

### 下載專案

點 `Clone or download` 下載 zip 包解壓縮到 restaurantList 資料夾，或者使用 git bash 指令

```
cd restaurantList
git clone git@github.com:cTaohe/restaurantList.git
```

執行
```
nodemon app.js
```

在 Browser 網址輸入 `localhost:3000` ，就可以在瀏覽器觀看。

## 功能

- 搜尋餐廳名稱、英文名稱、類型
- 點選圖片顯示詳細資訊

## 畫面
主畫面
![image](/public/img/main.PNG)

詳細資料
![image](/public/img/show.PNG)

搜尋畫面
![image](/public/img/search.PNG)
