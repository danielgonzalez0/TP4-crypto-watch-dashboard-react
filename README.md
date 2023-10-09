<p align="center">
<img src="https://img.shields.io/badge/NPM-Published-crimson?style=for-the-badge&logo=npm">
<img src="https://img.shields.io/badge/Create%20with-React-blue?style=for-the-badge&logo=react">
</p>

# Description

Crypto Currency Dashboard Based on the Coingecko API.

Ability to filter, sort, and save favorite cryptocurrencies.

Option to exclude stable coins.

## Version

version 1 

### Project Deployment link: 
[link](https://tp-4-crypto-watch-dashboard-react.vercel.app/)
## Features

- react router 
- functional components
- tables, charts
- filters, sorts, favorites features
- responsive design

## Tech Stack

**Client:** React, redux, react-router-dom, Sass, axios, recharts, eslint, proptypes

**Server:** none


## Required

[![Node.js](https://custom-icon-badges.demolab.com/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![NPM](https://img.shields.io/badge/-NPM-CC3534?logo=npm&logoColor=white&style=for-the-badge)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
## Installation

clone project

```bash
  git clone https://github.com/danielgonzalez0/TP4-crypto-watch-dashboard-react.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

launch server

```bash
  npm run start
```

## API Reference

#### Market data : 
```http
https://api.coingecko.com/api/v3/global
```

#### All market data : 
```http
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y&locale=en
```

#### Coin price chart : 
```http
https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily"
```

#### Coingecko : 
```http
https://www.coingecko.com/fr/pi%C3%A8ces
```
## Screenshots

### Desktop version

![crypto-desk-min](https://github.com/danielgonzalez0/TP4-crypto-watch-dashboard-react/assets/86351071/9b058e5b-63e1-496c-9289-e099df2ffde3)


### tablet version

![crypto-tab-min](https://github.com/danielgonzalez0/TP4-crypto-watch-dashboard-react/assets/86351071/5adfea90-9429-4a47-abf8-785610d6d2d7)

### mobile version

![crypto-mobile-min](https://github.com/danielgonzalez0/TP4-crypto-watch-dashboard-react/assets/86351071/810ef26d-6b10-428a-98b2-880a444bf7e2)

## 🚀 About Me

Hello everyone,

My name is Daniel Gonzalez, I am 43 years old, and I am a father of two children. 

Over the past few months, I have undertaken an intensive training program in front-end development with a focus on React at OpenClassrooms. 

This training has allowed me to specialize in front-end development, using a highly regarded framework in the industry.

Before that, I completed an initial training program in web development, where I gained a foundation in programming (HTML, CSS, JS) for both front-end and back-end development. I worked on aspects such as web integration, creating APIs and databases, accessibility, SEO, and more.

Here is my portfolio, feel free to visit it to see my latest projects :smile:

[www.gonzalez-daniel.com/](https://www.gonzalez-daniel.com/)