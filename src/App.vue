<template>
  <div class="container">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&family=Sacramento&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html {
  /* font-size: 10px; */
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  font-size: 62.5%;
  overflow-x: hidden;
  /* Does NOT work on Safari */
  /* scroll-behavior: smooth; */
}

body {
  /* Only works if there is nothing absolutely positioned in relation to body */
  overflow-x: hidden;
  font-family: 'Jost', sans-serif;
  line-height: 1;
  font-weight: 400;
}

p {
  margin-bottom: 1.6rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 3.2rem 0 3.2rem;
  font-weight: 400;
  line-height: 1.2;
}

h1 {
  margin-top: 0;
  font-size: 7.594rem;
}

h2 {
  font-size: 5.063rem;
}

h3 {
  font-size: 3.375rem;
}

h4 {
  font-size: 2.25rem;
}

h5 {
  font-size: 1.6rem;
}

h6 {
  font-size: 1rem;
}

a,
button,
li,
p,
label,
input {
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 1.2px;
}

ul {
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  padding-inline-start: 4rem;
}

hr {
  background: #000;
  padding: 0;
  height: 1px;
  border: none;
  margin: 1.2rem 0;
}

/**************************/
/* THE ANCHOR ELEMENT & PSEUDO-CLASSES — THE FOUR LINKS STATES */
/**************************/

a:link {
  color: brown;
  text-decoration: none;
}

a:visited {
  color: brown;
}

a:hover {
  color: #000;
}

a:active {
  color: brown;
  outline: none;
}

/**************************/
/* BUTTON */
/**************************/

.btn,
.btn:link,
.btn:visited {
  display: inline-block;
  background-color: #000;
  color: #fff;

  text-decoration: none;
  font-weight: 500;
  padding: 1.2rem 2.2rem;
  text-align: center;

  /* Only necessary for .btn */
  border: none;
  cursor: pointer;
  font-family: inherit;

  /* Put transition on original "state" */
  transition: all 0.2s;
}

.btn,
.btn:hover,
.btn:active {
  background-color: brown;
  color: #fff;
}

/* Modifier */
.btn--outline,
.btn--outline:link {
  box-shadow: inset 0 0 0 2px brown;
  background-color: #fff;
  color: #000;
}
.btn--top-margin {
  margin: 2rem 0 0 0;
}

/**************************/
/* HEADER & NAVIGATION */
/**************************/

header {
  display: flex;
  justify-content: space-between;
  align-items: csenter;
  margin: 1rem 0 12rem 0;
  border-bottom: 2px solid #000;
}

.logo {
  font-family: 'Sacramento', cursive;
  display: block;
  text-align: center;
  font-size: 8rem;
  color: brown;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/**************************/
/* GENERAL REUSABLE COMPONENTS */
/**************************/

.container {
  /* max-width: 120rem; */
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3.2rem;
}

section {
  padding: 9.6rem 0;
}

/**************************/
/* GRID REUSABLE */
/**************************/

.grid {
  display: grid;
  gap: 3.2rem;
  row-gap: 3.2rem;
}

.grid:not(:last-child) {
  margin-bottom: 9.6rem;
}

.grid--2-cols {
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid--3-cols {
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid--4-cols {
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid--center-v {
  align-items: center;
}

/**************************/
/* FORM */
/**************************/

form {
  margin: 3rem auto;
  text-align: left;
  border-radius: 10px;
}
label {
  color: #000;
  display: inline-block;
  margin: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 2rem 0 0 0;
}
input,
select {
  display: block;
  padding: 1.5rem 0 1.5rem 1rem;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border: 1px solid #000;
  color: #000;
  font-family: inherit;
}

textarea {
  display: block;
  padding: 2rem 0 1rem 1rem;
  width: 100%;
  min-height: 200px;
  box-sizing: border-box;
  border: none;
  border: 1px solid #000;
  color: #000;
  font-family: inherit;
}

input[type='checkbox'] {
  display: inline-block;
  width: 1.6rem;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.error {
  color: brown;
  margin-top: 10px;
  font-size: 1em;
  font-weight: bold;
}

/**************************/
/* FOOTER */
/**************************/

.footer {
  width: 100%;
  padding: 1rem 1rem;
  margin-top: 6rem;
  border-top: 1px solid #000;
}

.copyright {
  font-size: 1.2rem;
  margin: 0;
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {
  html {
    /* 9px / 16px  */
    font-size: 56.25%;
  }
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  html {
    /* 8px / 16px = 0.5 = 50% */
    font-size: 50%;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .grid--3-cols,
  .grid--4-cols {
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .grid {
    row-gap: 4.8rem;
  }

  .grid--2-cols,
  .grid--3-cols,
  .grid--4-cols {
    grid-template-columns: 1fr;
  }

  .btn,
  .btn:link,
  .btn:visited {
    padding: 2.4rem 1.6rem;
  }
}

/**************************/
/* Fixing Safari flexbox gap */
/**************************/
</style>
